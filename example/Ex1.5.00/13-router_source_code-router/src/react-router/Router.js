///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {context as ctx} from "./RouterContext";
import {matchPath} from "./matchPath";


//-------------------------------------------------------------------------------------------------------------------//


class Router extends PureComponent {

    static propTypes = {
        history: PropTypes.object.isRequired,
        children: PropTypes.node
    };

    static defaultProps = {};

    constructor(props) {

        super(props);

        this.state = {

            location: this.props.history.location
        };
    }

    componentDidMount(){

        this.unListen = this.props.history.listen((location, action) => {

            this.props.history.action = action;
            this.setState({
                location
            }); 
        });
    }

    componentWillUnmount(){

        this.unListen();
    }

    render() {

        const ctxVal = {
            history: this.props.history,
            location: this.state.location,
            match: matchPath('/', this.state.location.pathname),
        };

        return (

            <React.Fragment>

                <ctx.Provider value={ctxVal}>
                    {this.props.children}
                </ctx.Provider>

            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Router
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
