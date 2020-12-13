import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import {View} from "../../views";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from "@material-ui/core/MenuItem";
import "./styles_supply.css"
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import {makeStyles} from '@material-ui/core/styles';
import {Divider} from "@material-ui/core";


const useStyles = makeStyles(theme => ({

    paper: {
        width: "100%",
        overflowX: "auto",
        margin: "auto",
        height: "200px"
    },
    formElement: {
        width: "25%",

    },
    formNodes: {
        width: "100%",
        display: "flex",
        flexDirection: "row"

    },

}));





const RowItemNodes = ({data, index, InputOnChange}) => {
    return (
        <TableRow>
            <TableCell>
                <InputLabel htmlFor="component"><span className={"beta"}>O{index + 1}</span></InputLabel>
                <TextField type="number" name="podaz_o" id={index.toString()} defaultValue={data.podaz_o[index]}
                           onChange={InputOnChange}/>
            </TableCell>
            <TableCell>
                <TextField type="number" name="d1o" id={index.toString()} defaultValue={data.d1o[index]}
                           onChange={InputOnChange}/>
            </TableCell>
            <TableCell>
                <TextField type="number" name="d2o" id={index.toString()} defaultValue={data.d2o[index]}
                           onChange={InputOnChange}/>
            </TableCell>
            <TableCell>
                <TextField type="number" name="cs" id={index.toString()} defaultValue={data.cs[index]}
                           onChange={InputOnChange}/>
            </TableCell>
        </TableRow>
    )
};

const RowItemRoute = ({data, index, InputOnChange}) => {
    return (
        <TableRow>
            <TableCell>
                <InputLabel htmlFor="component"><span className={"beta"}>O{index + 1}</span></InputLabel>
                <TextField type="number" name="podaz_o" id={index.toString()} defaultValue={data.podaz_o[index]}
                           onChange={InputOnChange}/>
            </TableCell>
            <TableCell>
                <TextField type="number" name="d1o" id={index.toString()} defaultValue={data.d1o[index]}
                           onChange={InputOnChange}/>
            </TableCell>
            <TableCell>
                <TextField type="number" name="d2o" id={index.toString()} defaultValue={data.d2o[index]}
                           onChange={InputOnChange}/>
            </TableCell>
            <TableCell>
                <TextField type="number" name="cs" id={index.toString()} defaultValue={data.cs[index]}
                           onChange={InputOnChange}/>
            </TableCell>

        </TableRow>
    )
};

export const InputTable = ({data, InputOnChange}) => {

    const classes = useStyles();

    // const [inputData, setInputData] = useState({
    //     supplier: [100, 200, 300],
    //     receiver: [150, 100, 250],
    //     brokerNumber: [1,1,1],
    //     route: [
    //         {
    //             from: "supplier",
    //             fromIndex: 1,
    //             to: "receiver",
    //             rowIndex: 2,
    //         },
    //         {
    //             from: "supplier",
    //             fromIndex: 2,
    //             to: "receiver",
    //             rowIndex: 1,
    //         }
    //     ]
    // })

    const [inputData, setInputData] = useState({
        nodes:[{
            "id":1,
            "value":250,
            "type":"Supplier"
        },{
            "id":2,
            "value":300,
            "type":"Supplier"
        },{
            "id":3,
            "value":-120,
            "type":"Receiver"
        },{
            "id":4,
            "value":-250,
            "type":"Receiver"
        },{
            "id":5,
            "value":-100,
            "type":"Receiver"
        },{
            "id":6,
            "value":0,
            "type":"Broker"
        }],
        edges:[{
            "from":1,
            "to":3,
            "cost":3
        },{
            "from":1,
            "to":6,
            "cost":5
        },{
            "from":2,
            "to":1,
            "cost":2
        },{
            "from":2,
            "to":6,
            "cost":6
        },{
            "from":2,
            "to":5,
            "cost":2
        },{
            "from":6,
            "to":3,
            "cost":5
        },{
            "from":6,
            "to":4,
            "cost":4
        },{
            "from":6,
            "to":5,
            "cost":1
        },{
            "from":3,
            "to":4,
            "cost":8
        },{
            "from":4,
            "to":5,
            "cost":4
        }]

    })


    const handleNodeSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }
    const handleRouteSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }
    const [node, setNode] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');


    return (
        <TableContainer component={Paper}>
            <Paper className={classes.paper}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>NODE NUMBER</TableCell>
                            <TableCell>NODE TYPE</TableCell>
                            <TableCell>VALUE</TableCell>
                            <TableCell>EDIT</TableCell>
                            <TableCell>DELETE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>

                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>

            <Paper className={classes.paper}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>FROM</TableCell>
                            <TableCell>TO</TableCell>
                            <TableCell>VALUE</TableCell>
                            <TableCell>EDIT</TableCell>
                            <TableCell>DELETE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{backgroundColor: '#123111'}}>
                        <TableRow>
                            <TableCell>
                                <InputLabel htmlFor="component"><span className={"text"}>CZ</span></InputLabel>
                            </TableCell>
                            <TableCell>
                                <InputLabel htmlFor="component"><span className={"text"}>CZ</span></InputLabel>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
            <Paper >
            <form className={classes.formNodes} onSubmit={handleNodeSubmit}>
                <FormControl variant="filled" className={classes.formNodes}>
                    <InputLabel id="demo-simple-select-filled-label">Type of Node</InputLabel>
                    <Select
                        className={classes.formElement}
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={node}
                        onChange={(event) => setNode(event.target.value)}
                    >
                        <MenuItem value={10}>Supplier</MenuItem>
                        <MenuItem value={20}>Receiver</MenuItem>
                        <MenuItem value={30}>Broker</MenuItem>
                    </Select>
                    <TextField variant="outlined"
                               type="number" name="nodeValue" id="value" defaultValue={0}
                               className={classes.formElement}/>

                    <Button variant="outlined" className={classes.formElement} type="submit">
                        SUBMIT
                    </Button>
                </FormControl>
            </form>
            </Paper>
            <Paper >
                <form className={classes.formNodes} onSubmit={handleNodeSubmit}>
                    <FormControl variant="filled" className={classes.formNodes}>
                        <InputLabel id="demo-simple-select-filled-label">FROM</InputLabel>
                        <Select
                            className={classes.formElement}
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={from}
                            onChange={(event) => setFrom(event.target.value)}
                        >
                            <MenuItem value={10}>Node1</MenuItem>
                            <MenuItem value={20}>Node2</MenuItem>
                            <MenuItem value={30}>Node3</MenuItem>
                        </Select>

                        <Select
                            className={classes.formElement}
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={to}
                            onChange={(event) => setTo(event.target.value)}
                        >
                            <MenuItem value={10}>Node1</MenuItem>
                            <MenuItem value={20}>Node2</MenuItem>
                            <MenuItem value={30}>Node3</MenuItem>
                        </Select>
                        <TextField variant="outlined"
                                   type="number" name="nodeValue" id="value" defaultValue={0}
                                   className={classes.formElement}/>

                        <Button variant="outlined" className={classes.formElement} type="submit">
                            SUBMIT
                        </Button>
                    </FormControl>
                </form>
            </Paper>
        </TableContainer>


    )
}

