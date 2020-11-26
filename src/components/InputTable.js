import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import InputLabel from "@material-ui/core/InputLabel";



export const InputTable = () => {

    return (

        <TableContainer className={"input1"} component={Paper}>
            <Table>
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
                                <InputLabel htmlFor="component"><span className={"alfa"}>Cena S</span></InputLabel>
                            </TableCell>
                        </TableRow>

                </TableHead>
                <TableBody className={"body"}>
                    <TableRow>
                        <InputLabel htmlFor="component"><span className={"alfa"}>D1</span></InputLabel>
                        <TableCell>
                             <TextField  type="number" defaultValue="10" />
                        </TableCell>
                        <TableCell>
                            <TextField  type="number" defaultValue="10"  />
                        </TableCell>
                        <TableCell >
                            <TextField   type="number" defaultValue="10"  />
                        </TableCell>

                    </TableRow>

                    <TableRow>
                        <InputLabel htmlFor="component"><span className={"alfa"}>D2</span></InputLabel>
                        <TableCell>
                            <TextField   type="number" defaultValue="10"  />
                        </TableCell>
                        <TableCell>
                            <TextField  type="number"  defaultValue="10" />
                        </TableCell>
                        <TableCell >
                            <TextField  type="number"  defaultValue="10" />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <InputLabel htmlFor="component"><span className={"alfa"}>D3</span></InputLabel>
                        <TableCell>
                            <TextField  type="number"  defaultValue="10" />
                        </TableCell>
                        <TableCell>
                            <TextField  type="number"  defaultValue="10" />
                        </TableCell>
                        <TableCell >
                            <TextField  type="number"  defaultValue="10" />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <InputLabel htmlFor="component"><span className={"alfa"}>D4</span></InputLabel>
                        <TableCell>
                            <TextField  type="number" defaultValue="10" />
                        </TableCell>
                        <TableCell>
                            <TextField  type="number"  defaultValue="10" />
                        </TableCell>
                        <TableCell >
                            <TextField  type="number"  defaultValue="10" />
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <InputLabel htmlFor="component"><span className={"alfa"}>Cena Z</span></InputLabel>
                        <TableCell>
                            <TextField  type="number" defaultValue="10"  />
                        </TableCell>
                        <TableCell>
                            <TextField  type="number" defaultValue="10"  />
                        </TableCell>

                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
