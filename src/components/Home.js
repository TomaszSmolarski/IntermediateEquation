import React, {useState} from 'react';
import {Button, Col, Input, Row} from 'antd';
import {View} from "../views";
import "./styles.css"
import {InputTable} from "./InputTable";

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
            cenaSprzedazy: 44
        },
        {
            key: 3,
            dostawca: 4,
            odbiorca1: 11,
            odbiorca2: 22,
            cenaZakupu: 33,
            cenaSprzedazy: 44
        }
    ])

    const InputOnChange = e =>{
        const {id, value, name} = e.target;
        const newData = data;
        newData[id][name]=parseFloat(value);
        setData(newData);
    };

    return (
        <View routeName="Home">
            <>
                    <Row type="flex" justify="center" gutter={[16, 16]}  align="top">

                        <Col xs={{span: 24, offset: 0}} sm={{span: 24, offset: 0}} md={{span: 24, offset: 0}}
                             lg={{span: 12, offset: 0}} xxl={{span: 8, offset: 0}}  className="container">
                                <InputTable data={data} InputOnChange={InputOnChange}/>
                        </Col>

                        <Col xs={{span: 24, offset: 0}} sm={{span: 24, offset: 0}} md={{span: 24, offset: 0}}
                             lg={{span: 12, offset: 0}} xxl={{span: 8, offset: 0}} className="container">
                                <div className="box">

                                </div>
                        </Col>

                        <Col xs={{span: 24, offset: 0}} sm={{span: 24, offset: 0}} md={{span: 24, offset: 0}}
                             lg={{span: 12, offset: 0}} xxl={{span: 8, offset: 0}} className="container">
                                <div className="b3">

                                </div>
                        </Col>
                    </Row>
            </>
        </View>
    );
}
