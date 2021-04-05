///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect} from "react-router-dom";
import "./index.css";
import {News} from "./News";
import {RootRouteView} from "../components/RootRouteView";
import {Home} from "./Home";
import {BetterLink} from "../components/BetterLink";


//-------------------------------------------------------------------------------------------------------------------//


function Page(props) {

    return (

        <React.Fragment>
            <h3>test</h3>
            <Router>
                <div className="container">
                    <div className="nav">

                        {/*<Link to="/home">Home</Link>*/}
                        {/*<Link to="/news">News</Link>*/}

                        <BetterLink to={{name: 'home'}}>Home</BetterLink>
                        <BetterLink to={{name: 'news'}}>News</BetterLink>

                    </div>
                    <div className="route-view">
                        <RootRouteView/>
                    </div>
                </div>
            </Router>
        </React.Fragment>
    );
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Page
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////