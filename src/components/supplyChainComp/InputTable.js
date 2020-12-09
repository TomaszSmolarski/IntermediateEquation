import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import React, {useState} from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import {View} from "../../views";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from "@material-ui/core/MenuItem";
import "./styles.css"

export const InputTable = ({data, InputOnChange}) => {

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
    const handleNodeSubmit = (e)=>{
        console.log(e)
    }
    const [node,setNode] = useState('');
    return (
        <TableContainer component={Paper} >
            <TextField
                id="filled-multiline-static"
                label="Data"
                multiline
                defaultValue="Default Value"
                variant="filled"
                fullWidth={true}
                disabled={true}
                rows={15}
            />
            <div className={"table"}>
            <FormControl variant="filled" className={"select"}>
                <InputLabel id="demo-simple-select-filled-label">Type of Node</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={node}
                    onChange={(event) => setNode(event.target.value)}
                >
                    <MenuItem value={10}>Supplier</MenuItem>
                    <MenuItem value={20}>Receiver</MenuItem>
                    <MenuItem value={30}>Broker</MenuItem>
                </Select>
            </FormControl>
                <TextField type="number" name="podaz_o" id="aa" defaultValue={"value"}
                           onChange={InputOnChange}/>
            </div>
        </TableContainer>


    )
}

