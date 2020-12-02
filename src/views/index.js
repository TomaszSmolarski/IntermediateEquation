import React from 'react';
import {Layout} from 'antd'


const {Content, Footer, Header} = Layout;


const View = ({children, routeName}) => {
    return (
        <Layout style={{minHeight: '100vh', minWidth: '400px', overflow: "none"}}>
            <Layout style={{backgroundColor: "#797979"}}>
                <Header style={{
                    textAlign: 'center', color: "#ffffff", fontSize: 24, backgroundColor: "#282c34",
                    borderBottomStyle: "inset", borderBottomColor: "#ffffff", borderBottomWidth: '1px'
                }}>
                    {routeName}
                </Header>
                <Content>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        {children}
                    </div>
                </Content>
                <Footer style={{
                    textAlign: 'center', color: "#ffffff", backgroundColor: "#282c34",
                    borderTopStyle: "solid", borderTopColor: "#ffffff", borderTopWidth: '1px'
                }}>
                    Intermediate Equation and supply chain Solver by Hubert Siewior and Tomasz Smolarski
                </Footer>
            </Layout>
        </Layout>
    )
};

export {View};