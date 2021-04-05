///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import {TestComponentWillReceiveProps} from "./TestComponentWillReceiveProps";

//-------------------------------------------------------------------------------------------------------------------//


export {
    TestApp
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class TestApp extends Component {

    constructor(props) {

        super(props);

        this.state = {

            number: 1
        };
    }

    render() {

        return (

            <>
                <TestComponentWillReceiveProps n={this.state.number}/>

                <button onClick={() => {

                    this.setState({
                        number: this.state.number + 1
                    })
                }}
                >父组件 n + 1
                </button>
            </>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
