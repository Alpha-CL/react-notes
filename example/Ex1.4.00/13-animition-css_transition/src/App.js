///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {CssTransition} from "./components/CssTransition";
import {Example01} from "./components/Example01";
import {Example02OfAnimationCss} from "./components/Example02OfAnimationCss";


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
                <CssTransition/>
                <hr/>
                <Example01/>
                <hr/>
                <Example02OfAnimationCss/>
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
