import React, {useEffect, useState} from 'react';
import "./styles.css"
import {InputTable} from "./intermediateComp/InputTable";
import {View} from "../views";
import {OutPutList} from "./intermediateComp/OutputList";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

export const Home = () => {
    //default values
    const [inputData, setInputData] = useState({
        popyt_d: [1, 2],
        podaz_o: [1, 2, 3, 4],
        cs: [2, 4, 6, 8],
        cz: [3, 6],
        d1o: [3, 4, 5, 6],
        d2o: [31, 41, 51, 61]
    })
    const [outputData, setOutputData] = useState([
        {
            popyt_d: [1, 2],
            podaz_o: [32, 21, 3, 4],
            d1zj: [3, 4, 5, 6],
            d2zj: [7, 6, 5, 4],
            d1ilosc: [5, 6, 7, 8],
            d2ilosc: [51, 61, 71, 81],
            alfa: [2, 1],
            beta: [4, 3, 1, 2]
        },
        {
            popyt_d: [12, 22],
            podaz_o: [32, 21, 32, 43],
            d1zj: [3, 4, 51, 6],
            d2zj: [7, 6, 52, 4],
            d1ilosc: [5, 6, 7, 8],
            d2ilosc: [51, 61, 71, 81],
            alfa: [2, 1, 1, 2],
            beta: [4, 3]
        },
    ])

    const InputOnChange = e => {
        const {id, value, name} = e.target;
        const newArray = inputData[name].map((e, i) => {
            if (i === parseInt(id)) {
                return parseInt(value);
            }
            return e;
        })
        setInputData({...inputData, [name]: newArray})

    };

    useEffect(() => {
        //setOutputData(wynik funkcjj obliczającej dane do tabelki 2)
        //jeżeli brakuje jakiejś zmiennej w tabelce to ma zwrocic [{}] !!!
    }, [inputData])

    return (
        <View>
            <Button variant="contained" color="primary" href="/chains" className="button">
                Supply Chain
            </Button>
            <Grid container spacing={3} className="mygrid">
                <Grid className="grid-elem" item l={12} xl={5}>

                    <InputTable InputOnChange={InputOnChange} data={inputData}/>
                </Grid>
                <Grid className="grid-elem-center calc-text" item l={12} xl={2}>
                    <p>WYNIKI</p>
                </Grid>
                <Grid className="grid-elem output" item l={12} xl={5}>
                    <OutPutList data={outputData}/>
                </Grid>

            </Grid>
        </View>
    );
}
