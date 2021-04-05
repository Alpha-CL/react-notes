///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import {TestCaroursel} from "./components/Carousel/TestCarousel";


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
                <TestCaroursel/>
            </React.Fragment>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
