///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {PureComponent} from "react";
import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect, withRouter, Prompt} from "react-router-dom";
import "./index.css";

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
    //         this.unBlock = this.props.history.block('切换页面会导致当前页面中文本信息丢失，是否确认要跳转页面');
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
    };

    render() {

        return (

            <React.Fragment>
                <Prompt
                    when={this.state.val !== ''}
                    message="切换页面会导致当前页面中文本信息丢失，是否确认要跳转页面"
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