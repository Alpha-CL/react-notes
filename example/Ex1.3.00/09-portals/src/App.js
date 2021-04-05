///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import {DefaultIndex} from "./components/DefaultIndex";
import {CustomIndex} from "./components/CustomIndex";


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

    handleClick = (e) => {
        console.log('[App_clicked]', e.target);
    };

    render() {

        return (

            <React.Fragment>

                <div
                    className="app"
                    onClick={this.handleClick}
                >
                    <DefaultIndex/>
                    <hr/>

                    <CustomIndex/>
                </div>

            </React.Fragment>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
