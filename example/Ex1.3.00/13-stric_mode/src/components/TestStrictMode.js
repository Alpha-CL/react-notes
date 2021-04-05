///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {StrictMode} from "./StrictMode";

//-------------------------------------------------------------------------------------------------------------------//


class TestStrictMode extends PureComponent {

    static propTypes = {

    };

    static defaultProps = {

    };

    constructor(props) {

        super(props);

        this.state = {

        };
    }

    render() {

        return (

            <React.Fragment>
                <StrictMode/>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    TestStrictMode
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
