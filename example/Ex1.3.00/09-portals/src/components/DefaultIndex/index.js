///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {Child} from "./Child";

//-------------------------------------------------------------------------------------------------------------------//


class DefaultIndex extends PureComponent {

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
                <h1>Default Index</h1>
                <Child/>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    DefaultIndex
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
