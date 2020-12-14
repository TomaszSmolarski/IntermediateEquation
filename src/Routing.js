import React from 'react'
import {Switch, Route} from "react-router-dom";
import {Intermediate} from "./components/Intermediate";
import {error404} from "./errorRoutes"
import {SupplyChain} from "./components/SupplyChain";


export const Routing = () => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Intermediate/>
                </Route>
                <Route exact path="/chains">
                    <SupplyChain/>
                </Route>

                <Route component={error404}/>
            </Switch>
        </>
    )
}