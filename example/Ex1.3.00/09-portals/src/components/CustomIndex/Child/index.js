///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {SubChild} from "../SubChild";


//-------------------------------------------------------------------------------------------------------------------//


class Child extends PureComponent {

    constructor(props) {

        super(props);

        this.state = {

        };
    }

    render() {

        return (

            <React.Fragment>
                <h2>CustomIndex Child Component</h2>
                <SubChild/>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Child
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
