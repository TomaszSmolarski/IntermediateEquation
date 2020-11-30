import React, {useEffect, useState} from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {OutPutTable} from "./OutputTable";

export const OutPutList = ({data}) => {

    const [iteration, setIteration] = useState(0)
    return (
        <>
            <OutPutTable data={data[iteration]}/>
            <Pagination count={data.length} defaultPage={0} className="pag"
                        onChange={(event, val) => setIteration(val - 1)}/>
        </>

    );
}