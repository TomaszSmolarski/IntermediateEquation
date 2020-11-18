import React from 'react'
import {Switch, Route} from "react-router-dom";
import {Home} from "./components/Home";
import {error404} from "./errorRoutes"

export const Routing = () => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route component={error404}/>
            </Switch>
        </>
    )
}