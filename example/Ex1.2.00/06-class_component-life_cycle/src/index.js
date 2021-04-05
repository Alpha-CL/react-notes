///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import ReactDOM from "react-dom";
import {OldApp} from  "./components/OldApp"
import {NewApp} from "./components/NewApp";
import {TestApp} from  "./components/TestApp"


//-------------------------------------------------------------------------------------------------------------------//





//-------------------------------------------------------------------------------------------------------------------//


const root = document.getElementById('root');


ReactDOM.render(
    (
        <React.Fragment>
            {/*<OldApp/>*/}
            <hr/>
            <NewApp/>
            <hr/>
            <TestApp/>
            <hr/>
        </React.Fragment>
    )
    , root);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
