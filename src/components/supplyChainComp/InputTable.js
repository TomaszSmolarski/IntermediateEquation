import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";

const RowItem = ({data, index, InputOnChange}) => {
    return (
        <TableRow>
            <TableCell>
                <InputLabel htmlFor="component"><span className={"alfa"}>D1</span></InputLabel>
                <TextField type="number" name="podaz_o" id={index.toString()} defaultValue={data.podaz_o[index]}
                           onChange={InputOnChange}/>
            </TableCell>
        </TableRow>
    )
};
export const InputTable = ({data, InputOnChange}) => {
    return (
        <TableContainer className={"input1"} component={Paper}>
            <Table style={{height: "576px"}}>
            </Table>
        </TableContainer>


    )
}

