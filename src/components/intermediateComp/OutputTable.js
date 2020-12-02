import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import InputLabel from "@material-ui/core/InputLabel";
import {Img} from 'react-image'
import x_image from '../../images/x.jpg'

const RowItem = ({data, index}) => {
    return (
        <TableRow>
            <TableCell>
                <InputLabel htmlFor="component"><span className={"beta"}>O{index + 1}</span></InputLabel>
                <InputLabel htmlFor="component"><span className={"beta"}>{data.podaz_o[index]}</span></InputLabel>
            </TableCell>
            <TableCell>
                <InputLabel htmlFor="component"><span className={"span1"}>{data.d1zj[index]}</span></InputLabel>
                <InputLabel htmlFor="component"><span className={"span2"}>{data.d1ilosc[index]}</span></InputLabel>
            </TableCell>
            <TableCell>
                <InputLabel htmlFor="component"><span className={"span1"}>{data.d2zj[index]}</span></InputLabel>
                <InputLabel htmlFor="component"><span className={"span2"}>{data.d2ilosc[index]}</span></InputLabel>
            </TableCell>
            <TableCell>
                <InputLabel htmlFor="component"><span className={"beta"}>{data.beta[index]}</span></InputLabel>
            </TableCell>

        </TableRow>
    )
};

export const OutPutTable = ({data}) => {
    return (
        <>
            {Object.keys(data).length !== 0 &&
            <TableContainer component={Paper}>
                <Table style={{height: "544px"}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <InputLabel htmlFor="component"> </InputLabel>
                            </TableCell>
                            <TableCell>
                                <InputLabel htmlFor="component"><span className={"alfa"}>D1</span></InputLabel>
                                <InputLabel htmlFor="component"><span
                                    className={"alfa"}>{data.popyt_d[0]}</span></InputLabel>
                            </TableCell>
                            <TableCell>
                                <InputLabel htmlFor="component"><span className={"alfa"}>D2</span></InputLabel>
                                <InputLabel htmlFor="component"><span
                                    className={"alfa"}>{data.popyt_d[1]}</span></InputLabel>
                            </TableCell>
                            <TableCell>
                                <InputLabel htmlFor="component"><span className={"beta"}>Bi</span></InputLabel>
                            </TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        <RowItem data={data} index={0}/>
                        <RowItem data={data} index={1}/>
                        <RowItem data={data} index={2}/>
                        <RowItem data={data} index={3}/>
                        <TableRow>
                            <TableCell>
                                <InputLabel htmlFor="component"><span className={"alfa"}>Aj</span></InputLabel>
                            </TableCell>
                            <TableCell>
                                <InputLabel htmlFor="component"><span
                                    className={"alfa"}>{data.alfa[0]}</span></InputLabel>
                            </TableCell>
                            <TableCell>
                                <InputLabel htmlFor="component"><span
                                    className={"alfa"}>{data.alfa[1]}</span></InputLabel>
                            </TableCell>

                        </TableRow>
                    </TableBody>

                </Table>
            </TableContainer>
            }
            {Object.keys(data).length === 0 &&
            <Img src={x_image} width="544" height="544"/>
            }
        </>

    );
}
