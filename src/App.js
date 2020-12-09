import React from 'react';
import './App.css';
import {Router} from "react-router-dom"
import 'antd/dist/antd.css';
import {Routing} from './Routing'
import {history} from './history'
import MyData from "./components/Calculation/MyData";

function App() {
      const mydata = new MyData()
      mydata.getStart([10,10,10,10],[15,25],[[5,3],[2,1],[4,7],[3,3]],[3,5,4,3],[13,16])
  return (
    <div className="App">
        <Router history={history}>
            <Routing/>
        </Router>
    </div>
  );
}

export default App;
