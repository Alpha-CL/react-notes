///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {createBrowserHistory} from "./history";
import {Router} from "../react-router";


//-------------------------------------------------------------------------------------------------------------------//


class BrowserRouter extends PureComponent {

    history = createBrowserHistory(this.props);

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

                <Router
                    history={this.history}
                >
                    {this.props.children}
                </Router>

            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    BrowserRouter
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
