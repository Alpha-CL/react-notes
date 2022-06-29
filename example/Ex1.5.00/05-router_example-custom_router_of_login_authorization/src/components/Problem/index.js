///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect} from "react";
import {v4 as uuid} from "uuid";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect} from "react-router-dom";
import "./index.css";
import {login, loginOut} from "./loginInfo";
import {ProtectedRoute} from "./CustomRoute";
import qs from "query-string";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * <Route
 *
 ** render & children 都可以将返回的 ReactDom 渲染到页面中
 *
 **     render={()=>{           // 仅匹配成功后，才运行返回值渲染
 *
 *          return <ReactDom/>
 *      }
 *
 **     children={()=>{         // 无论是否匹配成功，都运行返回值渲染你
 *
 *          return <ReactDom/>
 *      }
 * />
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function Problem(props) {

    return (

        <React.Fragment>
            <Router>
                <div className="container">
                    <TopNav
                        navsData={[
                            {id: uuid(), name: 'Home', path: '/'},
                            {id: uuid(), name: 'Login', path: '/login'},
                            {id: uuid(), name: 'Personal', path: '/personal'},
                        ]}
                    />
                    <div className="content">
                        <Switch>
                            <Route path="/login" component={Login} />
                            <ProtectedRoute path="/personal" component={Personal} />
                            <Route path="/" component={Home}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        </React.Fragment>
    );
}

function TopNav(props) {

    const navs = props.navsData.map(val => {

        return (
            <li key={val.id}>
                <Link to={val.path}>{val.name}</Link>
            </li>
        );
    });

    return (

        <React.Fragment>
            <ul className="top_nav">
                {navs}
            </ul>
        </React.Fragment>
    );
}

function Home(props) {

    console.log(props);

    return (

        <React.Fragment>
            <div
                className="page"
            >
                <div className="page-hd">
                    <h1>Home_Page</h1>
                </div>
                <div className="page=con">
                    <p>hello world</p>
                </div>
            </div>
        </React.Fragment>
    );
}

function Login(props) {

    const handleLogin = (e) => {

        login();


        // const query = qs.parse(props.location.search);
        //
        // if (query.returnUrl) {
        //
        //     props.history.push(query.returnUrl);
        //
        // } else {
        //
        //     props.history.push('/');
        // }


        if (props.location.state) {

            props.history.push(props.location.state);

        } else {

            props.history.push('/');
        }


    }, handleLoginOut = (e) =>{

        loginOut();
    };

    return (

        <React.Fragment>
            <div className="page">
                <div className="page-hd">
                    <h1>Login_Page</h1>
                </div>
                <div className="page-con">
                    <p>该页面仅做测试，点击下方按钮即可登陆</p>
                    <button
                        onClick={handleLogin}
                    >Login</button>&nbsp;&nbsp;
                    <button
                        onClick={handleLoginOut}
                    >LoginOut</button>
                </div>
            </div>
        </React.Fragment>
    );
}

function Personal(props) {

    return (

        <React.Fragment>
            <div
                className="page"
            >
                <div className="page-hd">
                    <h1>Personal_Page</h1>
                </div>
                <div className="page-con">
                    <p>若看到该页面，则表示已登陆</p>
                </div>
            </div>
        </React.Fragment>
    );
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Problem
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////