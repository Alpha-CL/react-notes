///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import {NewLifeCycle} from "./NewLifeCycle";


//-------------------------------------------------------------------------------------------------------------------//


export {
    NewApp
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class NewApp extends Component {

    constructor(props) {

        super(props);

        this.state = {

            number: 1
        };
    }

    render() {

        return (

            <>
                <NewLifeCycle  n={this.state.number}/>
                <p>
                    <button onClick={()=>{
                        this.setState({
                            number: this.state.number +1
                        })
                    }}>父组件 n + 1</button>
                </p>
            </>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
