///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import {FnDefaultProps} from "./components/FnDefaultProps";
import {ClsDefaultProps} from "./components/ClsDefaultProps";
import {ClsPropTypes, Father, Son} from "./components/ClsPropTypes";


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

                <FnDefaultProps
                    a={10}
                    b={20}
                />
                <hr/>

                <ClsDefaultProps
                    b={20}
                    c={30}
                />
                <hr/>

                <ClsPropTypes
                    num="str"
                    son={new Son()}
                    custom={333}
                />

                <hr/>

            </React.Fragment>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
