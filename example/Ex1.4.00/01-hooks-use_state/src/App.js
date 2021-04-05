///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {UseState} from "./components/UseState";
import {TestMovableBlock} from "../../02-hooks-use_effect/src/components/TestMovableBlock";



//-------------------------------------------------------------------------------------------------------------------//




class App extends PureComponent {

    constructor(props) {

        super(props);

        this.state = {

        };
    }

    render() {

        return (

            <React.Fragment>
                <UseState/>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {
    App
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
