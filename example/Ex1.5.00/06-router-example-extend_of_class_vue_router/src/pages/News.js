///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect} from "react-router-dom";
import {BetterLink} from "../components/BetterLink";


//-------------------------------------------------------------------------------------------------------------------//


function News(props) {

    return (

        <React.Fragment>
            <div className="sub-nav">

                {/*<Link to="/news/home" >News Home</Link>*/}
                {/*<Link to="/news/search" >News Search</Link>*/}
                {/*<Link to="/news/detail" >News Detail</Link>*/}

                <BetterLink to={{name: 'newsHome'}} >News Home</BetterLink>
                <BetterLink to={{name: 'newsSearch'}} >News Search</BetterLink>
                <BetterLink to={{name: 'newsDetail'}} >News Detail</BetterLink>

            </div>
            <div className="route-view">
                {props.children}
            </div>
        </React.Fragment>
    );
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    News
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////