///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect} from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route, Link, NavLink, Redirect} from "react-router-dom";
import "../index.css";
import {urlConfig} from "./urlConfig";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * Problem: 若父组件匹配的路径发生改变，则后代组件无法匹配后续页面( 目前匹配路径为 固定路径 /fixedpath/target )
 *
 *
 ** 1) 利用 父组件匹配路径的参数( props.match.url ) 替换路径中的 "fixedpath"
 *
 *      props.match {
 *          ...
 *          path: '',           // "类正则" 匹配规则
 *          url: '',            // 根据 "类正则" 匹配到的 路径
 *      }
 *
 ** 2) 利用外部 urlConfig 配置页面路径
 *
 ** 3) other: 也可以利用 "高阶函数" 等
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function ResolveOfImportUrlConfig(props) {

    console.log(urlConfig.user.root);
    console.log(urlConfig.user.update);
    console.log(urlConfig.user.pay.root);

    return (

        <React.Fragment>
            <Router>
                <Link to={urlConfig.user.root}>to path of '/container'</Link>
                <br/>
                <Link to="/">back home</Link>
                <Route path={urlConfig.user.root} component={Container}/>
            </Router>
        </React.Fragment>
    );
}

function Container({match}) {

    console.log(match);

    return (
        <div className="container">
            <TopNav
                navs={[
                    { id: 1, name: 'nav_01' },
                    { id: 2, name: 'nav_02' },
                    { id: 3, name: 'nav_03' },
                    { id: 4, name: 'nav_04' },
                ]}
            />
            <Content>
                <ContentSide
                    sides={[
                        { id: 1, name: 'item_update', path: urlConfig.user.update },
                        { id: 1, name: 'item_pay', path: urlConfig.user.pay.root },
                    ]}
            />
                <ContentMain>
                    <Route path={urlConfig.user.update} component={ConMainOfUpdate}/>
                    <Route path={urlConfig.user.pay.root} component={ConMainOfPay}/>
                </ContentMain>
            </Content>
        </div>
    );
}

function TopNav(props) {

    const its = props.navs.map(val => <li key={val.name}>{val.name}</li>);

    return (

        <ul className="top-nav">
            {its}
        </ul>
    );
}

function Content(props) {

    return (

        <div className="content">{props.children}</div>
    )
}

function ContentSide(props) {

    const its = props.sides.map(val => {

        return (
            <li key={val.name}>
                <Link to={val.path}>{val.name}</Link>
            </li>
        );
    });

    return (

        <ul className="content-side">
            {its}
        </ul>
    );
}

function ContentMain(props) {

    return (

        <div className="content-main">{props.children}</div>
    );
}

function ConMainOfUpdate(props) {

    return (

        <div>
            <h3>Context_Main-Update</h3>
        </div>
    );
}

function ConMainOfPay(props) {

    return (

        <div>
            <h3>Context_Main-Pay</h3>
        </div>
    );
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    ResolveOfImportUrlConfig
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////