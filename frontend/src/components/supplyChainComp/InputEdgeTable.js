import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import CheckIcon from "@material-ui/icons/Check";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const RowItemEdge = ({data, editIdx, i, stopEditing, startEditing, handleRemove, handleChange, nodes}) => {
    const currentlyEditing = editIdx === i;

    return (
        <TableRow>
            <TableCell>
                {currentlyEditing ? (
                    <Select
                        className="form-element"
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={data.from}
                        name="from"
                        onChange={event => handleChange(event, i)}
                    >
                        {nodes.map(value => <MenuItem value={value.id}>{value.id}</MenuItem>)}
                    </Select>
                ) : (
                    <InputLabel htmlFor="component"><span>{data.from}</span></InputLabel>
                )}
            </TableCell>
            <TableCell>
                {currentlyEditing ? (
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={data.to}
                        name="to"
                        onChange={event => handleChange(event, i)}
                    >
                        {nodes.map(value => <MenuItem value={value.id}>{value.id}</MenuItem>)}
                    </Select>
                ) : (
                    <InputLabel htmlFor="component"><span>{data.to}</span></InputLabel>
                )}
            </TableCell>
            <TableCell>
                {currentlyEditing ? (
                    <TextField variant="outlined"
                               type="number" name="cost" id="cost" defaultValue={data.cost}
                               onChange={event => handleChange(event, i)}
                    />
                ) : (
                    <InputLabel htmlFor="component"><span>{data.cost}</span></InputLabel>
                )}
            </TableCell>
            <TableCell>
                {currentlyEditing ? (
                    <TextField variant="outlined"
                               type="number" name="min" id="min" defaultValue={data.min}
                               onChange={event => handleChange(event, i)}
                    />
                ) : (
                    <InputLabel htmlFor="component"><span>{data.min}</span></InputLabel>
                )}
            </TableCell>
            <TableCell>
                {currentlyEditing ? (
                    <TextField variant="outlined"
                               type="number" name="max" id="max" defaultValue={data.max}
                               onChange={event => handleChange(event, i)}
                    />
                ) : (
                    <InputLabel htmlFor="component"><span>{data.max}</span></InputLabel>
                )}
            </TableCell>
            <TableCell>
                {currentlyEditing ? (
                    <CheckIcon onClick={() => stopEditing()}/>
                ) : (
                    <EditIcon onClick={() => startEditing(i, "edgesTable")}/>
                )}
            </TableCell>
            <TableCell>
                <DeleteIcon onClick={() => handleRemove(i)}/>
            </TableCell>
        </TableRow>
    )
};

export const InputEdgeTable = ({inputData, editId, handleEdgeRowChange, handleEdgeRemove, startEditing, stopEditing}) => {
    return (
        <Paper className="paper">
            <Table size="small">
                <TableHead className="head">
                    <TableRow>
                        <TableCell>FROM</TableCell>
                        <TableCell>TO</TableCell>
                        <TableCell>COST</TableCell>
                        <TableCell>MIN</TableCell>
                        <TableCell>MAX</TableCell>
                        <TableCell>EDIT</TableCell>
                        <TableCell>DELETE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody style={{backgroundColor: '#123111'}}>
                    {inputData.edges.map((value, i) => (
                            <RowItemEdge key={i}
                                         data={value}
                                         editIdx={editId.edgesTable}
                                         i={i} handleChange={handleEdgeRowChange}
                                         handleRemove={handleEdgeRemove}
                                         startEditing={startEditing}
                                         stopEditing={stopEditing}
                                         nodes={inputData.nodes}/>
                        )
                    )}
                </TableBody>
            </Table>
        </Paper>
    )
}