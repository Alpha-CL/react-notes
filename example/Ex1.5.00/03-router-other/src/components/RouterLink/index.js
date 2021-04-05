///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Link, NavLink, Redirect} from "react-router-dom";
import {CustomLinkWrapper} from "./CustomLink";
import "./index.css";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * Router Link                  //
 *
 *
 * <Link
 *      to={ url: str | urlConfigObj: { pathname: '', search: '', hash: '', state: '' } }
 *      replace="bool"      // def: false; 使用指定跳转方式 history.push(); or history.replace();
 *
 *      exact="bool"            // 是否精确匹配
 *      sensitive="bool"        // 匹配时是否区分大小写
 *      strict="bool"           // 是否严格匹配最后一个斜杠
 * >
 *
 * </Link>
 */

/**
 * Router NavLink               // 与 Link 用法一致
 *                              // 根据当前 url 中的 path 与 Route.path，判断是否添加 class 与 style
 *
 * <NavLink
 *      activeClassName=""      // 匹配自定义类名
 *      activeStyle={}          // 匹配内联样式
 *
 *      exact="bool"            // 是否精确匹配
 *      sensitive="bool"        // 匹配时是否区分大小写
 *      strict="bool"           // 是否严格匹配最后一个斜杠
 * >
 *
 * </NavLink>
 */

/**
 * Router Redirect              // 重定向无刷新跳转新地址
 *
 *
 ** 重定向组件，当加载到该组件时，自动无刷新重定向至指定的新地址
 *
 * <Redirect
 *
 *      to="/a"                 // to: page( str | obj)
 *      push="true"             // def: false 设置跳转替换的方式( push / replace )
 *      from="abc"              // 当匹配到 from 地址规则时才进行跳转( 类正则规则 )
 *
 *      exact="bool"            // 是否精确匹配 from
 *      sensitive="bool"        // from 匹配时是否区分大小写
 *      strict="bool"           // from 是否严格匹配最后一个斜杠
 * >
 *
 * </Redirect>
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function RouterLink(props) {

    return (

        <React.Fragment>
            <BrowserRouter>
                <hr/>
                <h3>Custom Link</h3>
                <div>of anchor( have refresh )</div>
                <NavBarOfAnchor/>
                <div>of cunstom_router_link( havn't refresh )</div>
                <NavBarOfCustomLink/>
                <h3>Router Link</h3>
                <hr/>
                <div>of link</div>
                <NavBarOfLink/>
                <div>of nav_link</div>
                <NavBarOfNavLink/>
                <div>of Redirect</div>
                <NavBarOfRedirect/>
                <hr/>
                <h3>Result</h3>
                <Route exact path="/a" component={PageA}/>
                <Route exact path="/b" component={PageB}/>
            </BrowserRouter>
        </React.Fragment>
    );
}

function NavBarOfAnchor() {

    return (

        <ul className="nav-bar">
            <li><a href="/a">PageA</a></li>
            <li><a href="/b">PageB</a></li>
            <li><a href="/">PageHome</a></li>
        </ul>
    );
}

function NavBarOfCustomLink() {

    return (

        <ul className="nav-bar">
            <CustomLinkWrapper to="/a">PageA</CustomLinkWrapper> <br/>
            <CustomLinkWrapper to="/b">PageB</CustomLinkWrapper> <br/>
            <CustomLinkWrapper to="/">PageHome</CustomLinkWrapper> <br/>
        </ul>
    );
}

function NavBarOfLink() {

    return (

        <ul className="nav-bar">
            <Link
                exact="false"                       // 是否精确匹配
                replace={false}                     // 指定使用 history.push(); or history.replace(); 的方式跳转
                to="/a"
            >PageA</Link> <br/>
            <Link
                to={{                               // to 属性还可以传递地址参数对象
                    pathname: '/b',
                    search: '?name=alpha',
                    hash: '#hash',
                    state: '18'
                }}
            >PageB</Link> <br/>
            <Link
                to="/"
                innerRef={node => {                 // 可以将内部的 a 元素以 ref 的形式传递使用

                    console.log(node);
                }}
            >PageHome</Link> <br/>
        </ul>
    );
}

function NavBarOfNavLink() {

    return (

        <ul className="nav-bar">
            <NavLink
                exact="false"                       // 是否精确匹配
                replace={false}                     // 指定使用 history.push(); or history.replace(); 的方式跳转
                to="/a"
            >PageA</NavLink> <br/>
            <NavLink
                to={{                               // to 属性还可以传递地址参数对象
                    pathname: '/b',
                    search: '?name=alpha',
                    hash: '#hash',
                    state: '18'
                }}
            >PageB</NavLink> <br/>
            <NavLink
                to="/"
                innerRef={node => {                 // 可以将内部的 a 元素以 ref 的形式传递使用

                    console.log(node);
                }}
            >PageHome</NavLink> <br/>
        </ul>
    );
}

function NavBarOfRedirect() {

    return (

        <ul className="nav-bar">
            <Link
                exact="false"                       // 是否精确匹配
                replace={false}                     // 指定使用 history.push(); or history.replace(); 的方式跳转
                to="/a"
            >PageA</Link> <br/>
            <Link
                to={{                               // to 属性还可以传递地址参数对象
                    pathname: '/b',
                    search: '?name=alpha',
                    hash: '#hash',
                    state: '18'
                }}
            >PageB</Link> <br/>
            <Redirect
                to="/a"                             // to: page( str | obj)
                push="true"                         // def: false 设置跳转替换的方式( push / replace )
                from="abc"                          // 当匹配到 from 地址规则时才进行跳转( 类正则规则 )

            />
        </ul>
    );
}


function PageA() {

    return (

        <h3>Page_A</h3>
    )
}

function PageB() {

    return (

        <h3>Page_B</h3>
    )
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    RouterLink
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////