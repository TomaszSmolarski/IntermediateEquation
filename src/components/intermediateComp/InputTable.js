import React, {useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import InputLabel from "@material-ui/core/InputLabel";

const RowItem = ({data, index, InputOnChange}) => {
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


    return (
        <TableContainer className={"input1"} component={Paper}>
            <Table style={{height: "576px"}}>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <InputLabel htmlFor="component"/>
                        </TableCell>
                        <TableCell>
                            <InputLabel htmlFor="component"><span className={"alfa"}>D1</span></InputLabel>
                            <TextField type="number" name="popyt_d" id="0" defaultValue={data.popyt_d[0]}
                                       onChange={InputOnChange}/>
                        </TableCell>
                        <TableCell>
                            <InputLabel htmlFor="component"><span className={"alfa"}>D2</span></InputLabel>
                            <TextField type="number" name="popyt_d" id="1" defaultValue={data.popyt_d[1]}
                                       onChange={InputOnChange}/>
                        </TableCell>
                        <TableCell>
                            <InputLabel htmlFor="component"><span className={"beta"}>CS</span></InputLabel>
                        </TableCell>
                    </TableRow>

                </TableHead>
                <TableBody className={"body"}>
                    <RowItem data={data} InputOnChange={InputOnChange} index={0}/>
                    <RowItem data={data} InputOnChange={InputOnChange} index={1}/>
                    <RowItem data={data} InputOnChange={InputOnChange} index={2}/>
                    <RowItem data={data} InputOnChange={InputOnChange} index={3}/>
                    <TableRow>
                        <TableCell>
                            <InputLabel htmlFor="component"><span className={"alfa"}>CZ</span></InputLabel>
                        </TableCell>

                        <TableCell>
                            <TextField type="number" name="cz" id="0" defaultValue={data.cz[0]}
                                       onChange={InputOnChange}/>
                        </TableCell>
                        <TableCell>
                            <TextField type="number" name="cz" id="1" defaultValue={data.cz[1]}
                                       onChange={InputOnChange}/>
                        </TableCell>

                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
