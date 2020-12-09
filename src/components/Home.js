import React, {useEffect, useState} from 'react';
import "./styles.css"
import {InputTable} from "./intermediateComp/InputTable";
import {View} from "../views";
import {OutPutList} from "./intermediateComp/OutputList";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import MyData from "./Calculation/MyData";
import Divider from '@material-ui/core/Divider';
export const Home = () => {
    //default values
    const [inputData, setInputData] = useState({
        popyt_d: [15, 25],
        podaz_o: [10,10,10,10],
        cs: [10,8,10,8],
        cz: [5,5],
        d1o: [5,2,4,3],
        d2o: [3,1,7,3]
    })
    const [outputData, setOutputData] = useState([{}
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
        const mydata = new MyData();

        const popyt = [...inputData.popyt_d];
        const podaz = [...inputData.podaz_o];
        const popyt2 = [...inputData.popyt_d];
        const podaz2 = [...inputData.podaz_o];

        let isNaN = false;
        for (let inputDataKey in inputData) {
            if(inputData[inputDataKey].includes(NaN)){
                isNaN = true;
                break;
            }
        }
        if (!isNaN){
            const data = mydata.getStart(popyt,podaz,[inputData.d1o, inputData.d2o],inputData.cz,inputData.cs);
            const d = []
            const sum_p = popyt2.reduce((a, b) => a + b, 0);
            const sum_podaz = podaz2.reduce((a, b) => a + b, 0);
            if (sum_p!==sum_podaz){
                popyt2.push(sum_podaz);
                podaz2.push(sum_p);
                data.forEach(value => d.push(
                    {
                        popyt_d: popyt2,
                        podaz_o: podaz2,
                        d1zj: value.arrayOfUnitProfit[0],
                        d2zj: value.arrayOfUnitProfit[1],
                        d3zj: value.arrayOfUnitProfit[2],
                        d1ilosc: value.arrayOfTrasnport[0],
                        d2ilosc: value.arrayOfTrasnport[1],
                        d3ilosc: value.arrayOfTrasnport[2],
                        alfa: value.alfa,
                        beta: value.beta,
                        costOfTransportation: value.costOfTransportation,
                        costOfPurchase: value.costOfPurchase,
                        income: value.income,
                        allCost: value.allCost,
                        profit: value.profit
                    }
                ))
            }else{
                data.forEach(value => d.push(
                    {
                        popyt_d: popyt2,
                        podaz_o: podaz2,
                        d1zj: value.arrayOfUnitProfit[0],
                        d2zj: value.arrayOfUnitProfit[1],
                        d1ilosc: value.arrayOfTrasnport[0],
                        d2ilosc: value.arrayOfTrasnport[1],
                        alfa: value.alfa,
                        beta: value.beta,
                        costOfTransportation: value.costOfTransportation,
                        costOfPurchase: value.costOfPurchase,
                        income: value.income,
                        allCost: value.allCost,
                        profit: value.profit
                    }
                ))
            }
            setOutputData(d)
        }else{
            setOutputData([{}])
        }
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
                    {Object.keys(outputData).length > 0&&
                        <div>
                            <p>WYNIKI:</p>
                            <p></p>
                            {Object.keys(outputData[0]).length>0&&
                                outputData.map((value, index) =>
                                <div>
                                    <Divider style={{ background: 'whitesmoke'}}/>
                                    <p></p>
                                    <p>Iteracja {index+1}</p>
                                    <p>koszt transortu = {value.costOfTransportation}</p>
                                    <p>koszt zakupu = {value.costOfPurchase}</p>
                                    <p>dochód = {value.income}</p>
                                    <p>całościowy koszt = {value.allCost}</p>
                                    <p>zysk = {value.profit}</p>

                                </div>
                            )}
                        </div>
                    }

                </Grid>
                <Grid className="grid-elem output" item l={12} xl={5}>
                    <OutPutList data={outputData}/>
                </Grid>

            </Grid>
        </View>
    );
}
