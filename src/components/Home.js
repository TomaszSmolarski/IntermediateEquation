import React, {useState} from 'react';
import "./styles.css"
import {InputTable} from "./InputTable";
import {View} from "../views";
import {OutPutTable} from "./OutputTable";
import Grid from "@material-ui/core/Grid";



export const Home = () => {

    const [data, setData] = useState([
        {
            key: 0,
            dostawca: 1,
            odbiorca1: 11,
            odbiorca2: 22,
            cenaZakupu: 33,
            cenaSprzedazy: 44
        },
        {
            key: 1,
            dostawca: 2,
            odbiorca1: 11,
            odbiorca2: 22,
            cenaZakupu: 33,
            cenaSprzedazy: 44
        },
        {
            key: 2,
            dostawca: 3,
            odbiorca1: 11,
            odbiorca2: 22,
            cenaZakupu: 33,
            // cenaSprzedazy: 44
        },
        {
            key: 3,
            dostawca: 4,
            odbiorca1: 11,
            odbiorca2: 22,
            cenaZakupu: 33,
            // cenaSprzedazy: 44
        }
    ])

    return (
        <View >
            <Grid container spacing={3} className="mygrid" >
                <Grid className="grid-elem" item l={12} xl={5}>

                    <InputTable/>
                </Grid>
                <Grid  className="grid-elem-center calc-text"  item l={12} xl={2}>

                        <p>GRID XD</p>


                </Grid>
                <Grid className="grid-elem" item l={12} xl={5}>
                    <OutPutTable/>
                </Grid>

            </Grid>
        </View>



    );
}
