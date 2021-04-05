///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect, withRouter} from "react-router-dom";
import StudentSearchBar from "../components/StudentSearchBar";
import StudentTable from "../components/StudentTable";
import Pager from "../components/Pager";
import store from "../store";
import {fetchStudents} from "../store/actions/searchResult";
import Loading from "../components/Loading";
import {Modal} from "../components/Modal";


//-------------------------------------------------------------------------------------------------------------------//


class Page extends React.PureComponent {

    componentDidMount() {

        store.dispatch(fetchStudents());
    }

    render() {
        return (

            <React.Fragment>

                <Loading/>
                <StudentSearchBar/>
                <StudentTable/>
                <Pager/>

            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Page
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////