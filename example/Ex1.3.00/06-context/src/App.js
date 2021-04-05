///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import {OldContext} from "./components/OldContext";
import {NewContext} from "./components/NewContext";

//-------------------------------------------------------------------------------------------------------------------//


export {
    App
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class App extends Component {


    constructor(props) {

        super(props);

        this.state = {};
    }

    render() {

        return (

            <React.Fragment>
                {/*<OldContext/>*/}
                <NewContext/>
            </React.Fragment>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
