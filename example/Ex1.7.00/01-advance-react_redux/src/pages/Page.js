///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect, withRouter} from "react-router-dom";
import Counter01 from "../components/Counter01";
import Counter02 from "../components/Counter02";


//-------------------------------------------------------------------------------------------------------------------//


function Page(props) {

    return (

        <React.Fragment>

            <Counter01/>
            <hr/>
            <Counter02/>
            <hr/>

        </React.Fragment>
    );
}


Page.defaultProps = {

};


Page.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Page
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////