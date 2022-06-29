///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect} from "react-router-dom";
import {RouteGuard} from "../components/RouteGuard";
import "./index.css";


//-------------------------------------------------------------------------------------------------------------------//


function Page1(props) {

    return (
        <h1>Page_01</h1>
    );
}

function Page2(props) {

    return (
        <h1>Page_02</h1>
    );
}

function Page(props) {

    return (

        <React.Fragment>
            <RouteGuard
                routeGuardListener={handleRouteGuardListener}
                onBeforeChange={handleOnBeforeChange}
            >
                <div className="container">
                    <div className="nav">
                        <Link to="/page1">Page-01</Link>
                        <Link to="/page2">Page-02</Link>
                    </div>
                    <div className="route-view">
                        <Route path="/page1" component={Page1}/>
                        <Route path="/page2" component={Page2}/>
                    </div>
                </div>
            </RouteGuard>
        </React.Fragment>
    );
}


let count = 0;

const handleRouteGuardListener = (prevLocation, location, action, unListen) => {

    count++;

    console.log(`日志记录: 从${prevLocation.pathname}进入到${location.pathname}, 进入方式${action}`);

    count === 5 && unListen();
};


const handleOnBeforeChange = (prevLocation, location, action, commit, unBlock) => {

    // console.log(`日志记录: 页面从 [${prevLocation.pathname}] 跳转至 [${location.pathname}]，跳转方式为 ${action}`);

    commit(true);               // 是否允许跳转

    // unBlock();               // 清除拦截器
};


// /** 仅当设置 this.props.history.block(msg); 后才会触发该勾子函数 **/
// const handleGetUserConfirmation = (msg, callback) => {
//
//     /**
//      * getUserConfirmation(msg: str, callback: bool);
//      *
//      * @msg: 调用 this.props.history.block(msg) 拦截器传递的信息
//      * @callback: 是否跳转
//      */
//
//     console.log('页面想跳转，没门', msg);
//
//     // callback(window.confirm(msg));           // 默认值
//     callback(false);
// };


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Page
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////