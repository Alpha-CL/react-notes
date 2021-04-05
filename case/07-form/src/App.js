///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";

import {TestCheckboxs} from "./components/TestCheckboxs";
import {TestRadios} from "./components/TestRadios";
import {TestSelect} from "./components/TestSelect";

//-------------------------------------------------------------------------------------------------------------------//


export {
    App
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function App(props) {

    return (

        <React.Fragment>
            <TestCheckboxs/>
            <hr/>

            <TestRadios/>
            <hr/>

            <TestSelect/>
            <hr/>
        </React.Fragment>
    );
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
