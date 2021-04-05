///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect, withRouter} from "react-router-dom";
import "./index.css";
import {CSSTransition} from "react-transition-group";
import {TransitionRoute} from "../components/TransitionRoute";
import "animate.css";


//-------------------------------------------------------------------------------------------------------------------//


function Home(props) {

    return (

        <React.Fragment>
            <div className="view-section home">
                <h3>Home</h3>
            </div>
        </React.Fragment>
    );
}

function News(props) {

    return (

        <React.Fragment>
            <div className="view-section news">
                <h3>News</h3>
            </div>
        </React.Fragment>
    );
}

function Personal(props) {

    return (

        <React.Fragment>
            <div className="view-section personal">
                <h3>Personal</h3>
            </div>
        </React.Fragment>
    );
}


/**
 * router switch animation
 *
 *
 * react-transition-group           // 通过 in 属性为内部元素添加类样式
 *
 */


function Page(props) {

    return (

        <React.Fragment>
            <Router>
                <div className="container">
                    <div className="nav">
                        <NavLink to="/" exact>Home</NavLink>
                        <NavLink to="/news">News</NavLink>
                        <NavLink to="/personal">Personal</NavLink>
                    </div>
                    <div className="route-view">

                        {/** 普通 Route **/}
                        {/*<Route path="/" exact component={Home}/>*/}

                        {/** 判断路由是否匹配 **/}
                        {/** 利用 {children} 必然会渲染 **/}
                        {/*<Route path="/" exact component={Home}>
                            {(props)=>{

                                console.log(props.match);

                                if (props.match) {

                                    return '匹配了';

                                } else {

                                    return '未匹配';
                                }
                            }}
                        </Route>*/}

                        {/** 利用 props.match 是否有值，从而判断 CSSTransition.in 的状态控制动画状态 **/}
                        {/** mountOnEnter: true; & unmountOnExit: true; **/}
                        {/** 为了解决组件切换时挂载问题，建议使用 "子绝父相" 定位 **/}
                        {/*<Route path="/" exact >

                            {(props)=>{

                                console.log(props.match);

                                let stateDes = !!props.match;

                                return (

                                    <CSSTransition
                                        in={stateDes}
                                        timeout={500}
                                        classNames={{
                                            enter: "animate__animated animate__fast",
                                            enterActive: "animate__fadeIn",
                                            exit: 'animate__animated animate__fast',
                                            exitActive: 'animate__fadeOut'
                                        }}
                                        mountOnEnter={true}
                                        unmountOnExit={true}
                                    >
                                        <Home/>
                                    </CSSTransition>
                                );
                            }}
                        </Route>
                        <Route path="/news" exact component={News}/>
                        <Route path="/personal" exact component={Personal}/>*/}

                        {/** 为了解决组件切换时挂载问题，建议使用 "子绝父相" 定位 **/}
                        <TransitionRoute path="/" exact component={Home}/>
                        <TransitionRoute path="/news" exact component={News}/>
                        <TransitionRoute path="/personal" exact component={Personal}/>
                    </div>
                </div>
            </Router>
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