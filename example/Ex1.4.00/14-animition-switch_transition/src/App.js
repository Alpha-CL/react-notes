///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {SwitchAnimation} from "./components/SwitchAnimation";
import {Example01OfAnimationCss} from "./components/Example01OfAnimationCss";



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
                <SwitchAnimation/>
                <hr/>
                <Example01OfAnimationCss/>
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
