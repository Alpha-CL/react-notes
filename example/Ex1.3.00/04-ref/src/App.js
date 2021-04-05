///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import {Dom} from "./components/Dom";
import {ClsComp} from "./components/ClsComp";
import {FnComp} from "./components/FnComp";
import {RefObj} from "./components/RefObj";
import {RefFn} from "./components/RefFn";


//-------------------------------------------------------------------------------------------------------------------//


export {
    App
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class App extends Component {

    constructor(props) {

        super(props);

        this.state = {

        };
    }

    render() {

        return (

            <React.Fragment>

                <h3>ref: dom (success)</h3>
                <Dom/>
                <hr/>

                <h3>ref: custom_class_comp(success)</h3>
                <ClsComp/>
                <hr/>

                <h3>ref: custom_fn_comp( fail )</h3>
                <FnComp/>
                <hr/>

                <h3>ref: React.createRef();</h3>
                <RefObj/>
                <hr/>

                <h3>ref: (el) => { "{ }" }</h3>
                <RefFn/>
                <hr/>

            </React.Fragment>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
