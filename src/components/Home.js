import React from "react";
import { Col, Row} from 'antd';
import {View} from "../views";
import "./styles.css"
export const Home = () => {
    return (
        <View routeName="Home">
            <>
                    <Row type="flex" justify="space-between" gutter={[16, 16]}>

                        <Col class xs={{span: 24, offset: 0}} sm={{span: 24, offset: 0}} md={{span: 8, offset: 0}}
                             lg={{span: 8, offset: 0}} className="col">
                            <div className="box">

                            </div>
                        </Col>

                        <Col xs={{span: 24, offset: 0}} sm={{span: 24, offset: 0}} md={{span: 8, offset: 0}}
                             lg={{span: 8, offset: 0}} className="col">
                            <div className="b2">

                            </div>
                        </Col>
                        <Col xs={{span: 24, offset: 0}} sm={{span: 24, offset: 0}} md={{span: 8, offset: 0}}
                             lg={{span: 8, offset: 0}} className="col">
                            <div className="b3">

                            </div>
                        </Col>
                    </Row>
            </>
        </View>
    );
}
