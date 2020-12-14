import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";
import "./styles_supply.css"
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';


const RowItemNodes = ({data, editIdx, stopEditing, startEditing, handleRemove, handleChange}) => {
    const currentlyEditing = editIdx === data.id;
    return (
        <TableRow>
            <TableCell>
                <InputLabel htmlFor="component"><span>{data.id}</span></InputLabel>
            </TableCell>
            <TableCell>
                {currentlyEditing ? (
                    <Select
                        className="form-element"
                        value={data.type}
                        name="type"
                        onChange={(event => handleChange(event, data.id - 1))}
                    >
                        <MenuItem value={"Supplier"}>Supplier</MenuItem>
                        <MenuItem value={"Receiver"}>Receiver</MenuItem>
                        <MenuItem value={"Broker"}>Broker</MenuItem>
                    </Select>
                ) : (
                    <InputLabel htmlFor="component"><span>{data.type}</span></InputLabel>
                )}
            </TableCell>
            <TableCell>
                {currentlyEditing ? (
                    <TextField variant="outlined"
                               type="number" name="value" value={data.value}
                               onChange={event => handleChange(event, data.id - 1)}/>
                ) : (
                    <InputLabel htmlFor="component"><span>{data.value}</span></InputLabel>
                )}
            </TableCell>
            <TableCell>
                {currentlyEditing ? (
                    <CheckIcon onClick={() => stopEditing()}/>
                ) : (
                    <EditIcon onClick={() => startEditing(data.id, "nodesTable")}/>
                )}
            </TableCell>

            <TableCell>
                <DeleteIcon onClick={() => handleRemove(data.id)}/>
            </TableCell>
        </TableRow>
    )
};

export const InputNodeTable = ({
                                   inputData, handleNodeRowChange, handleNodeRemove, stopEditing, startEditing,
                                   editId
                               }) => {
    return (

        <Paper className="paper">
            <Table size="small">
                <TableHead className="head">
                    <TableRow>
                        <TableCell>NODE</TableCell>
                        <TableCell>NODE TYPE</TableCell>
                        <TableCell>VALUE</TableCell>
                        <TableCell>EDIT</TableCell>
                        <TableCell>DELETE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody style={{backgroundColor: '#123111'}}>
                    {inputData.nodes.map((value, i) => (
                            <RowItemNodes key={i} data={value} editIdx={editId.nodesTable}
                                          handleChange={handleNodeRowChange}
                                          handleRemove={handleNodeRemove} startEditing={startEditing}
                                          stopEditing={stopEditing}/>
                        )
                    )}
                </TableBody>
            </Table>
        </Paper>
    )
}
