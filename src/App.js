import React from 'react';
import './App.css';
import {Router} from "react-router-dom"
import 'antd/dist/antd.css';
import {Routing} from './Routing'
import {history} from './history'
import MyData from "./components/Calculation/MyData";

function App() {
      const mydata = new MyData()
      mydata.getStart([15,25],[10,10,10,10],[[5,2,4,3],[3,1,7,3]],[5,5],[10,8,10,8])
  return (
    <div className="App">
        <Router history={history}>
            <Routing/>
        </Router>
    </div>
  );
}

export default App;
