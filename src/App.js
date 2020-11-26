import React from 'react';
import './App.css';
import {Router} from "react-router-dom"
import 'antd/dist/antd.css';
import {Routing} from './Routing'
import {history} from './history'

function App() {
  return (
    <div className="App">
        <Router history={history}>
            <Routing/>

        </Router>
    </div>
  );
}

export default App;
