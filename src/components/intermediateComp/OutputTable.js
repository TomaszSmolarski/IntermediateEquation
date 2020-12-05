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
                <InputLabel htmlFor="component"><span
                    className={"beta"}>O{index !== 4 ? index + 1 : 'f'}</span></InputLabel>
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
            {typeof data.d3ilosc !== 'undefined' &&
            <TableCell>
                <InputLabel htmlFor="component"><span className={"span1"}>{data.d3zj[index]}</span></InputLabel>
                <InputLabel htmlFor="component"><span className={"span2"}>{data.d3ilosc[index]}</span></InputLabel>
            </TableCell>
            }
            <TableCell>
                <InputLabel htmlFor="component"><span className={"beta"}>{data.beta[index]}</span></InputLabel>
            </TableCell>

        </TableRow>
    )
};

export const OutPutTable = ({data}) => {
    return (
        <>
            {Object.keys(data).length !== 0 ?
                <TableContainer component={Paper}>
                    <Table style={{height: "544px"}}>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <InputLabel htmlFor="component"> </InputLabel>
                                </TableCell>
                                {Array(data.popyt_d.length).fill().map((_, i) =>
                                    <TableCell key={i}>
                                        <InputLabel htmlFor="component"><span
                                            className={"alfa"}>D{i !== 2 ? i + 1 : 'f'}</span></InputLabel>
                                        <InputLabel htmlFor="component"><span
                                            className={"alfa"}>{data.popyt_d[i]}</span></InputLabel>
                                    </TableCell>)}
                                <TableCell>
                                    <InputLabel htmlFor="component"><span className={"beta"}>Bj</span></InputLabel>
                                </TableCell>
                            </TableRow>

                        </TableHead>
                        <TableBody>
                            {Array(data.podaz_o.length).fill().map((_, i) =>
                                <RowItem data={data} index={i} key={i}/>)}
                            <TableRow>
                                <TableCell>
                                    <InputLabel htmlFor="component"><span className={"alfa"}>Ai</span></InputLabel>
                                </TableCell>
                                {Array(data.alfa.length).fill().map((_, i) =>
                                    <TableCell key={i}>
                                        <InputLabel htmlFor="component"><span
                                            className={"alfa"}>{data.alfa[i]}</span></InputLabel>
                                    </TableCell>)}

                            </TableRow>
                        </TableBody>

                    </Table>
                </TableContainer>
                :
                <Img src={x_image} width="544" height="544"/>
            }

        </>

    );
}
