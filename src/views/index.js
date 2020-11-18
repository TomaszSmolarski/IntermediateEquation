import React from 'react';
import {Layout} from 'antd'


const {Content, Sider, Footer, Header} = Layout;


const View = ({children, routeName}) => {
    return (
        <Layout style={{minHeight: '100vh', minWidth: '400px', overflow: "none"}}>
            <Layout style={{backgroundColor: "#595959"}}>
                <Header style={{
                    textAlign: 'center', color: "#ffffff", fontSize: 24, backgroundColor: "#131629",
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
                    textAlign: 'center', color: "#ffffff", backgroundColor: "#131629",
                    borderTopStyle: "solid", borderTopColor: "#ffffff", borderTopWidth: '1px'
                }}>
                    intermediate Equation Solver by Tomasz Smolarski and Hubert Siewior
                </Footer>
            </Layout>
        </Layout>
    )
};

export {View};