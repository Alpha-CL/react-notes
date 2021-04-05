///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {CallBack} from "./components/CallBack";
import {CallBackHook} from "./components/CallBackHook";



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
                <h2>useCallback</h2>
                <CallBackHook/>
                <hr/>
                <h2>Callback</h2>
                <CallBack/>
                <hr/>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {
    App
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
