import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import InputLabel from "@material-ui/core/InputLabel";




export const OutPutTable = () => {

    return (
        <TableContainer component={Paper}>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell >
                            <InputLabel htmlFor="component"> </InputLabel>
                        </TableCell>
                        <TableCell >
                            <InputLabel htmlFor="component"><span className={"beta"}>O1</span></InputLabel>
                        </TableCell>
                        <TableCell >
                            <InputLabel htmlFor="component"><span className={"beta"}>O2</span></InputLabel>
                        </TableCell>
                        <TableCell >
                            <InputLabel htmlFor="component"><span className={"alfa"}>Ai</span></InputLabel>
                        </TableCell>
                    </TableRow>

                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell >
                            <InputLabel htmlFor="component"><span className={"alfa"}>D1</span></InputLabel>
                        </TableCell>
                        <TableCell>
                            <InputLabel htmlFor="component"><span className={"span1"}>10</span></InputLabel>
                            <InputLabel htmlFor="component"><span className={"span2"}>10</span></InputLabel>
                        </TableCell>
                        <TableCell>
                                <InputLabel htmlFor="component"><span className={"span1"}>10</span></InputLabel>
                                <InputLabel htmlFor="component"><span className={"span2"}>10</span></InputLabel>
                        </TableCell>
                        <TableCell >
                                <InputLabel htmlFor="component"><span className={"alfa"}>10</span></InputLabel>
                        </TableCell>

                    </TableRow>

                    <TableRow>
                        <TableCell >
                            <InputLabel htmlFor="component"><span className={"alfa"}>D2</span></InputLabel>
                        </TableCell>
                        <TableCell>
                            <InputLabel htmlFor="component"><span className={"span1"}>10</span></InputLabel>
                            <InputLabel htmlFor="component"><span className={"span2"}>10</span></InputLabel>
                        </TableCell>
                        <TableCell>
                            <InputLabel htmlFor="component"><span className={"span1"}>10</span></InputLabel>
                            <InputLabel htmlFor="component"><span className={"span2"}>10</span></InputLabel>
                        </TableCell>
                        <TableCell >
                            <InputLabel htmlFor="component"><span className={"alfa"}>10</span></InputLabel>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell >
                            <InputLabel htmlFor="component"><span className={"alfa"}>D3</span></InputLabel>
                        </TableCell>
                        <TableCell>
                            <InputLabel htmlFor="component"><span className={"span1"}>10</span></InputLabel>
                            <InputLabel htmlFor="component"><span className={"span2"}>10</span></InputLabel>
                        </TableCell>
                        <TableCell>
                            <InputLabel htmlFor="component"><span className={"span1"}>10</span></InputLabel>
                            <InputLabel htmlFor="component"><span className={"span2"}>10</span></InputLabel>
                        </TableCell>
                        <TableCell >
                            <InputLabel htmlFor="component"><span className={"alfa"}>10</span></InputLabel>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell >
                            <InputLabel htmlFor="component"><span className={"alfa"}>D4</span></InputLabel>
                        </TableCell>
                        <TableCell>
                            <InputLabel htmlFor="component"><span className={"span1"}>10</span></InputLabel>
                            <InputLabel htmlFor="component"><span className={"span2"}>10</span></InputLabel>
                        </TableCell>
                        <TableCell>
                            <InputLabel htmlFor="component"><span className={"span1"}>10</span></InputLabel>
                            <InputLabel htmlFor="component"><span className={"span2"}>10</span></InputLabel>
                        </TableCell>
                        <TableCell >
                            <InputLabel htmlFor="component"><span className={"alfa"}>10</span></InputLabel>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell >
                            <InputLabel htmlFor="component"><span className={"beta"}>Bj</span></InputLabel>
                        </TableCell>
                        <TableCell>
                            <InputLabel htmlFor="component"><span className={"beta"}>10</span></InputLabel>
                        </TableCell>
                        <TableCell>
                            <InputLabel htmlFor="component"><span className={"beta"}>10</span></InputLabel>
                        </TableCell>

                    </TableRow>
                </TableBody>

            </Table>
        </TableContainer>
    );
}
