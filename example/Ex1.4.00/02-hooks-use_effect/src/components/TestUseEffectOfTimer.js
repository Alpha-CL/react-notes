///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect} from "react";
import {UseEffectOfTimerErr, UseEffectOfTimer} from "./UseEffectOfTimer";


//-------------------------------------------------------------------------------------------------------------------//


function TestUseEffectOfTimer(props) {

    return (

        <React.Fragment>
            <h3>UseEffect Of Timer Err</h3>
            <UseEffectOfTimerErr/>
            <hr/>
            <h3>UseEffect Of Timer</h3>
            <UseEffectOfTimer/>
            <hr/>
        </React.Fragment>
    );
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    TestUseEffectOfTimer
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////