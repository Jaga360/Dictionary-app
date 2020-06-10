import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';

function Loadingindicator(props){
    const { promiseInProgress } = usePromiseTracker();
    return(
        promiseInProgress &&
        <div className="loader-div">
            <Loader type="ThreeDots" className='loader'/>
        </div>
    );

}


export default Loadingindicator;