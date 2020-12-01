import React from 'react'
import {Switch, Route} from "react-router-dom";
import {Home} from "./components/Home";
import {error404} from "./errorRoutes"
import {SupplyChain} from "./components/SupplyChain";

export const Routing = () => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/chains">
                    <SupplyChain/>
                </Route>
                <Route component={error404}/>
            </Switch>
        </>
    )
}