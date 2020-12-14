import React, {useState} from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {OutPutTable} from "./OutputTable";
import "./styles.css"
export const OutPutList = ({data}) => {

    const [iteration, setIteration] = useState(0)
    return (
        <>
            <OutPutTable data={data[iteration]}/>
            <Pagination count={data.length} defaultPage={data.length-1} className="pag"
                        onChange={(event, val) => setIteration(val - 1)}/>
        </>

    );
}