///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect, withRouter} from "react-router-dom";
import {pathMatch} from "../react-router/pathMatch";


//-------------------------------------------------------------------------------------------------------------------//


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function Page(props) {

    pathMatch('/news/:id/:page');

    return (

        <React.Fragment>
            <Router>
                <Route path="/:id/:id" component={Page1}/>
            </Router>
        </React.Fragment>
    );
}


Page.defaultProps = {

};


Page.propTypes = {

};


function Page1(props) {

    console.log(props.match.params);

    return (

        <React.Fragment>
            <h1>Page_01</h1>
        </React.Fragment>
    )
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Page
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////