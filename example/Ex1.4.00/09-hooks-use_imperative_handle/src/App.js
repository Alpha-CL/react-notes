///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {Problem} from "./components/Problem";
import {UseImperativeHandle} from "./components/UseImperativeHandle";



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
                <h3>Class Compont Ref</h3>
                <Problem/>
                <hr/>
                <h3>Func componet Ref</h3>
                <UseImperativeHandle/>
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
