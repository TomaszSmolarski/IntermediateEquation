import React from 'react';
import './App.css';
import {Router} from "react-router-dom"
import 'antd/dist/antd.css';
import {Routing} from './Routing'
import {history} from './history'
import MyData from "./components/Calculation/MyData";

function App() {
     const mydata = new MyData([20, 20],[10, 12, 18],[[4, 7, 2], [8, 10, 14]],[6, 9],[15, 14, 16])
      mydata.getStart([20, 20],[10, 12, 18],[[4, 7, 2], [8, 10, 14]],[6, 9],[15, 14, 16])
  return (
    <div className="App">
        <Router history={history}>
            <Routing/>
        </Router>
    </div>
  );
}

export default App;
