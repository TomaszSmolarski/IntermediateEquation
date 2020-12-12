import React, {useEffect, useState} from 'react';
import "./intermediateComp/styles.css"
import {View} from "../views";
import Grid from "@material-ui/core/Grid";
import {InputTable} from "./supplyChainComp/InputTable";
import Button from "@material-ui/core/Button";

export const SupplyChain = () => {
    const [inputData, setInputData] = useState({
        supplier: [100,200,300],
        receiver: [150,100,250],
        brokerNumber: 1,
        route: [
            {
                from: "supplier",
                fromIndex: 1,
                to: "receiver",
                rowIndex: 2,
            },
            {
                from: "supplier",
                fromIndex: 2,
                to: "receiver",
                rowIndex: 1,
            }
        ]
    })
    const InputOnChange = e => {
        const {id, value, name} = e.target;
        const newArray = inputData[name].map((e, i) => {
            if (i === parseInt(id)) {
                return parseInt(value);
            }
            return e;
        })
        setInputData({...inputData, [name]: newArray})

    };
    const handleOnSubmit =()=>{
    }
    return(
        <View>
            <Button variant="contained" color="primary" href="/" className="button">
                Intermediate equation
            </Button>
            <Grid container spacing={3} className="mygrid">
                <Grid className="grid-elem" item l={12} xl={6}>
                    <InputTable InputOnChange={InputOnChange} data={inputData}/>
                </Grid>
                <Grid className="grid-elem-center calc-text" item l={12} xl={6}>
                    <p>Chains</p>
                </Grid>
            </Grid>
            <form onSubmit={handleOnSubmit}>

            </form>
        </View>
    )
}