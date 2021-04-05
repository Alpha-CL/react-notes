///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {Router} from "react-router-dom";
import {createLocationChangeAction} from "./action-creators";
import {ReactReduxContext} from "react-redux";

//-------------------------------------------------------------------------------------------------------------------//


class ConnectedRouter extends PureComponent {

    static contextType = ReactReduxContext;

    constructor(props) {

        super(props);

        this.state = {

        };
    }

    componentDidMount() {

        const history = this.props.history;

        this.unListen = history.listen((action, location) => {

            const reduxAction = createLocationChangeAction(action, location),
                dispatch = this.contextType.store.dispatch;

            dispatch(reduxAction);
        });
    }

    componentWillUnmount() {

        this.unListen();
    }

    render() {

        return (

            <Router history={this.props.history}>
                {this.props.children}
            </Router>
        );
    }
}


//-------------------------------------------------------------------------------------------------------------------//


export {

    ConnectedRouter
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
