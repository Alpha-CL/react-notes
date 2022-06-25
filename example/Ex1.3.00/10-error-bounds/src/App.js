///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {ErrBound01} from "./components/ErrBounds/ErrBound01";
import {ErrBound02} from "./components/ErrBounds/ErrBound02";
import {Error01} from "./components/Error01";
import {Error02} from "./components/Error02";
import {Error03} from "./components/Error03";


//-------------------------------------------------------------------------------------------------------------------//


class App extends PureComponent {

    constructor(props) {

        super(props);

        this.state = {};
    }

    render() {

        return (

            <React.Fragment>

                <ErrBound01>
                    <Error01/>
                </ErrBound01>

                <ErrBound02>
                    <Error02/>
                </ErrBound02>

                <ErrBound02>
                    <Error03/>
                </ErrBound02>

            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {
    App
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
