///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {PureComponent} from "react";
import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect, withRouter} from "react-router-dom";
import "./index.css";
import {Prompt, PromptWrapper} from "../components/Prompt";


//-------------------------------------------------------------------------------------------------------------------//


function Page(props) {

    return (

        <React.Fragment>
            <Router
                // getUserConfirmation={handleGetUserConfirmation}
            >
                <div className="container">
                    <div className="nav">
                        <NavLink to="/page1">Page_01</NavLink>
                        <NavLink to="/page2">Page_02</NavLink>
                    </div>
                    <div className="route-view">
                        <Route path="/page1" component={Page1}/>
                        <Route path="/page2" component={Page2}/>
                    </div>
                </div>
            </Router>
        </React.Fragment>
    );
}

// const handleGetUserConfirmation = (msg, callback) => {
//
//     callback(window.confirm(msg));
// };

Page.defaultProps = {

};


Page.propTypes = {

};


function Page1(props) {

    return (

        <React.Fragment>
            <h3>Page_01</h3>
        </React.Fragment>
    );
}


class Page2 extends PureComponent {

    constructor(props) {

        super(props);

        this.state = {

            val: ""
        };
    }

    // componentDidMount() {
    //
    //
    // }
    //
    // componentWillUnmount(): void {
    //
    //     this.unBlock && this.unBlock();
    // }
    //
    // handleOnChange = (e) => {
    //
    //     const newVal = e.target.value;
    //
    //     this.setState({
    //
    //         val: newVal
    //
    //     });
    //
    //     // this.handleBlock(newVal);
    // };
    //
    // handleBlock(val) {
    //
    //     if (val) {
    //
    //         this.unBlock = this.props.history.block('????????????????????????????????????????????????????????????????????????????????????');
    //
    //     } else  {
    //
    //         this.unBlock && this.unBlock();
    //     }
    // }

    handleOnChange = (e) => {

        this.setState({

            val: e.target.value

        });

        console.log('[val]: ', e.target.value);
    };

    render() {

        return (

            <React.Fragment>
                <PromptWrapper
                    when={this.state.val !== ''}
                    message="????????????????????????????????????????????????????????????????????????????????????"
                />
                <textarea
                    value={this.state.val}
                    onChange={this.handleOnChange}
                />
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Page
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////