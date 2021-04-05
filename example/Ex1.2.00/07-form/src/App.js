///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import {FormInput} from "./components/FormBasic/FormInput";
import {FormCheckbox} from "./components/FormBasic/FormCheckbox"
import {FormSelect} from "./components/FormBasic/FormSelect";
import {FormTest} from "./components/FormBasic/FormTest";

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

        <>
            {/*<FormInput/>*/}
            {/*<FormCheckbox/>*/}
            {/*<FormSelect/>*/}
            {/*<FormTest/>*/}

            <TestCheckboxs/>
            <hr/>
            <TestRadios/>
            <hr/>
            <TestSelect/>
            <hr/>
        </>
    );
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
