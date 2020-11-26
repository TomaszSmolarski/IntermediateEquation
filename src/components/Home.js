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

    const InputOnChange = e =>{
        const {id, value, name} = e.target;
        const newData = data;
        newData[id][name]=parseFloat(value);
        setData(newData);
    };

    return (
        <View >
            <Grid container spacing={3}>
                <Grid className={"mygrid"} item xl={5} >
                    <InputTable/>
                </Grid>

                <Grid className={"mygrid"} item xl={5}>
                    <OutPutTable/>
                </Grid>
                <Grid  className={"mygrid"} item xl={2}>

                </Grid>
            </Grid>
        </View>



    );
}
