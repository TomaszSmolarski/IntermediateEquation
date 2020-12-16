import React, {useState} from 'react';
import "./intermediateComp/styles.css"
import "./supplyChainComp/styles_supply.css"
import {View} from "../views";
import Grid from "@material-ui/core/Grid";
import {InputNodeTable} from "./supplyChainComp/InputNodeTable";
import Button from "@material-ui/core/Button";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";

import {InputEdgeTable} from "./supplyChainComp/InputEdgeTable";
import {InputNodeForm} from "./supplyChainComp/InputNodeForm";
import {InputEdgeForm} from "./supplyChainComp/InputEdgeForm";
import Divider from "@material-ui/core/Divider";




export const SupplyChain = () => {

    const [inputData, setInputData] = useState({
        nodes: [{
            "id": 1,
            "value": 250,
            "type": "Supplier"
        }, {
            "id": 2,
            "value": 300,
            "type": "Supplier"
        }, {
            "id": 3,
            "value": -120,
            "type": "Receiver"
        }, {
            "id": 4,
            "value": -250,
            "type": "Receiver"
        }, {
            "id": 5,
            "value": -100,
            "type": "Receiver"
        }, {
            "id": 6,
            "value": 0,
            "type": "Broker"
        }],
        edges: [{
            "from": 1,
            "to": 3,
            "cost": 3,
            "min": 30,
            "max": 50

        }, {
            "from": 1,
            "to": 6,
            "cost": 5,
            "min": 0,
            "max": 150
        }, {
            "from": 2,
            "to": 1,
            "cost": 2,
            "min": 0,
            "max": false
        }, {
            "from": 2,
            "to": 6,
            "cost": 6,
            "min": 0,
            "max": false
        }, {
            "from": 2,
            "to": 5,
            "cost": 2,
            "min": 0,
            "max": false
        }, {
            "from": 6,
            "to": 3,
            "cost": 5,
            "min": 0,
            "max": false
        }, {
            "from": 6,
            "to": 4,
            "cost": 4,
            "min": 0,
            "max": false
        }, {
            "from": 6,
            "to": 5,
            "cost": 1,
            "min": 0,
            "max": false
        }, {
            "from": 3,
            "to": 4,
            "cost": 8,
            "min": 0,
            "max": false
        }, {
            "from": 4,
            "to": 5,
            "cost": 4,
            "min": 0,
            "max": false
        }]
    })
    const [editId, setEditId] = useState({
        nodesTable: -1,
        edgesTable: -1
    });
    const [node, setNode] = useState({
        type: "Supplier",
        value: 0,
        brokerValueInputDisable: false
    });
    const [edge, setEdge] = useState({
        from: 1,
        to: 2,
        cost: 1,
        min: 0,
        max: false
    });
    const handleNodeRowChange = (e, index) => {
        const {value, name} = e.target;
        const nodes = [...inputData.nodes];
        if (value === "Broker") {
            nodes[index][name] = value;
            nodes[index].value = 0;
        } else {
            nodes[index][name] = value;
        }
        setInputData({...inputData, nodes: nodes});
    }
    const handleEdgeRowChange = (e, index) => {
        const {value, name} = e.target;
        const edges = [...inputData.edges];
        if (name === "from") {
            if (value !== edges[index].to) {
                edges[index][name] = value;
                setInputData({...inputData, edges: edges});
            }
        } else if (name === "to") {
            if (value !== edges[index].from) {
                edges[index][name] = value;
                setInputData({...inputData, edges: edges});
            }
        } else {
            edges[index][name] = value;
            setInputData({...inputData, edges: edges});
        }
    }
    const startEditing = (i, name) => {
        setEditId({...editId, [name]: i});
    };
    const stopEditing = () => {
        setEditId({
            nodesTable: -1,
            edgesTable: -1
        });
    };
    const handleEdgeRemove = (i) => {
        setInputData({
            ...inputData,
            edges: inputData.edges.filter((value, index) => index !== i)
        });
    }
    const handleNodeRemove = (i) => {
        setInputData({
            nodes: inputData.nodes.filter((value) => value.id !== i),
            edges: inputData.edges.filter((value) => value.from !== i && value.to !== i)
        });
    }
    const handleNodeChange = (e) => {
        const {value, name} = e.target;
        if (value === "Broker") {
            setNode({type: "Broker", brokerValueInputDisable: true, value: 0});
        } else {
            setNode({...node, [name]: value, brokerValueInputDisable: false});
        }
    }
    const handleEdgeChange = (e) => {
        const {value, name} = e.target;
        setEdge({...edge, [name]: value})

    }
    const handleNodeSubmit = (e) => {
        e.preventDefault()
        const nodes = inputData.nodes;
        nodes.push({
            "id": nodes[nodes.length - 1].id + 1,
            "value": parseInt(node.value),
            "type": node.type
        })
        setInputData({...inputData, nodes: nodes})
    }
    const handleEdgeSubmit = (e) => {
        e.preventDefault()
        const edges = inputData.edges;
        const isEdgeExist = edges.some(v => v.from === edge.from && v.to === edge.to);
        if (edge.from !== edge.to && !isEdgeExist) {
            edges.push({
                "from": edge.from,
                "to": edge.to,
                "cost": parseInt(edge.cost),
                "min": parseInt(edge.min),
                "max": edge.max ? parseInt(edge.max) : edge.max
            })
            setInputData({...inputData, edges: edges})
        }
    }

    const [result, setResult] = useState({
//example
//         allCost: 111,
//         edges: [{
//             from: 1,
//             to: 2,
//             amount: 11
//         },{
//             from: 2,
//             to: 3,
//             amount: 22
//         },{
//             from: 3,
//             to: 4,
//             amount: 255
//         },]

    })
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputData)
    };
    const handleCalculate = async (e) => {

        e.preventDefault();
        const obj = await fetch('http://127.0.0.1:8080/api',requestOptions)

        const data = await obj.json();
        setResult(data)

    }

    return (
        <View>
            <Button variant="contained" color="primary" href="/" className="button">
                Intermediate equation
            </Button>
            <Grid container spacing={3} className="my-grid">
                <Grid className="grid-elem" style={{width: "700px"}} item l={12} xl={8}>
                    <TableContainer component={Paper}>
                        <InputNodeTable handleNodeRemove={handleNodeRemove} handleNodeRowChange={handleNodeRowChange}
                                        stopEditing={stopEditing} startEditing={startEditing} inputData={inputData}
                                        editId={editId}/>
                        <InputEdgeTable inputData={inputData} handleEdgeRemove={handleEdgeRemove}
                                        handleEdgeRowChange={handleEdgeRowChange} editId={editId}
                                        startEditing={startEditing} stopEditing={stopEditing}/>
                        <InputNodeForm handleNodeChange={handleNodeChange} handleNodeSubmit={handleNodeSubmit}
                                       node={node}/>
                        <InputEdgeForm inputData={inputData} handleEdgeChange={handleEdgeChange}
                                       handleEdgeSubmit={handleEdgeSubmit}  edge={edge}/>
                        <Button variant="contained" color="primary" className="calc-button"
                                onClick={handleCalculate}>CALCULATE</Button>
                    </TableContainer>
                </Grid>
                <Grid className="grid-elem-center calc-text" item l={12} xl={4}>
                    {Object.keys(result).length > 0&&
                    <div>
                        <p>WYNIKI:</p>
                        <p></p>

                        <p>KOSZT CAŁOŚCIOWY: {result.allCost}</p>
                        <p>KRAWĘDZIE:</p>
                             {result.edges.map((value, index) =>
                            <div>
                                <Divider style={{ background: 'whitesmoke'}}/>
                                <p></p>
                                <p>Z: {value.from}</p>
                                <p>DO: {value.to}</p>
                                <p>WARTOŚĆ: {value.amount}</p>
                            </div>)}
                    </div>}
                </Grid>
            </Grid>
        </View>
    )
}