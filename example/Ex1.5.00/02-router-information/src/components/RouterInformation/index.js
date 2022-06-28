///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";
import {BrowserRouter,Switch,Route,withRouter} from "react-router-dom";
import qs from "query-string";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * RouterComp 会创建一个 context
 *
 *
 ** 并向 context 中 注入一些信息，该 context 对开发者是隐藏的
 *
 ** RouteComp 若地址匹配成功，则会将 context_info 作为 props 传递
 */


/**
 * Comp.props.context_info {
 *
 *     history: {},
 *     location: {},
 *     match: {},
 *     staticContext: ""
 *     ...
 * }
 *
 ** 组件中通过 props 传递的 context_info 并非 window.history 等
 */


/**
 * 为什么没有直接使用 window.History
 *
 *
 ** 1) React-Router 有两种模式( hash，history )，window.history 仅支持一种模式
 *
 ** 2) 若直接使用 window.history.method，则 React 无法监测 history_stack 中的改变，导致无法实时更改相应路径信息重绘页面
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * props.history                            // 利用 history.methods 无刷新跳转占内组件页面
 *
 *
 * props.history {
 *
 **     push(newPath, ?data),               // 在 history_stack 中加入新的 newPath
 **     replace(newPath, ?data),            // 在 history_stack 中将 path 替换指定的 newPath
 *
 *      go(),
 *      forward(),
 *      back()
 * }
 */


/**
 * props.location                           // 利用 location.methods 获取 url 中数据信息
 *
 *
 * props.location {
 *
 *     hash: "",
 *     pathname: "",
 *     search: "",
 *     state: undefined,
 *     ...
 * }
 *
 ** 利用第三方库 query-string 解析 url 中的数据
 *
 */


/**
 * props.match                              // 利用 match.methods 设置 path 的 "类正则规则" 传递数据
 *
 *
 * props.match {
 *
 *     isExact: bool,                       // 实际匹配中当前 Route 匹配的地址是否 精确
 *
 *
 ** 向某个页面传递数据
 *
 * 1) state:    // 在 push 页面时，加入 state
 * 2) search:   // 将数据加在 url 中 ？之后
 * 3) hash      // 将数据加载 url 中 # 之后
 * 4) params:   // 根据匹配规则获取指定位置的数据
 *
 *     params: {                            // 根据匹配规则获取指定位置的数据
 *
 **         // string-pattern: 约定路径中指定位置的匹配规则
 *          //
 *          // <Route path="/demo/:year/:mounth/:day">
 *          // <Route path="/demo/:year(\d+)/:mounth/:day">         // 可根据正则匹配
 *          // <Route path="/demo/:year/:mounth/:day/*">            // * 任意字符
 *          // <Route path="/demo/:year?/:mounth?/:day?">           // ? 可选的
 *          // <Route path="/demo-:year-:mounth-:day">              // 不限制匹配字符
 *     },
 *
 *
 *     path: "news/:year/:mounth/:day/*",                // 路径匹配规则
 *     url: "new/2020/2/2",                              // 真实路径值
 *
 *     ...
 * }
 *
 *
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 ** <Router/>组件的后代组件 ( 非<Router/>组件 ) 获取 route_context_info
 *
 *
 ** 1) 浅层级: 通过展开 父代的属性 <Child {...props} />
 ** 2) 深层级: 通过高阶函数 withRouter(Child): ChildWrapper;
 */

/**
 * withRouter(Comp): CompWrapper;
 *
 *
 ** return:
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function A(props) {

    /** 利用 queryString.methods 解析 url 中的数据信息 **/
    const parsed = qs.parse(props.location.search),
        parseHash = qs.parse(props.location.hash);

    console.log('[search]: ', parsed, '[hash]: ', parseHash);

    return (
        <React.Fragment>
            <h1>CompA</h1>
            <button
                onClick={()=>{
                    props.history.push("/b");
                }}
            >Jump CompB</button>
        </React.Fragment>
    );
}

/** CompA Context_Info **/
// {
//     "history": {
//     "length": 3,
//         "action": "POP",
//         "location": "{hash: \"#/\", pathname: \"/a\", search: \"\", state: und…}",
//         "createHref": "ƒ createHref() {}",
//         "push": "ƒ push() {}",
//         "replace": "ƒ replace() {}",
//         "go": "ƒ go() {}",
//         "goBack": "ƒ goBack() {}",
//         "goForward": "ƒ goForward() {}",
//         "block": "ƒ block() {}",
//         "listen": "ƒ listen() {}"
// },
//     "location": {
//     "pathname": "/a",
//         "search": "",
//         "hash": "#/"
// },
//     "match": {
//     "path": "/a",
//         "url": "/a",
//         "isExact": true,
//         "params": "{}"
// }
// }

function B(props) {

    return (
        <React.Fragment>
            <h1>CompB</h1>
            <button
                onClick={()=>{
                    props.history.push("/a");
                }}
            >Jump CompA</button>
        </React.Fragment>
    );
}

function News(props) {

    return (
        <React.Fragment>
            <div>CompNew</div>
            <div>
                props.match.params:
                {props.match.params.year}年
                {props.match.params.mounth}月
                {props.match.params.day}日
            </div>
        </React.Fragment>

    );
}

function Parent(props) {

    /** 通过 withRouter 则可以传递 router_context_info **/
    const ChildWrapper = withRouter(Child);

    return (
        <React.Fragment>
            <div>CompParent</div>
            {/*<Child/>*/}
            <ChildWrapper/>
        </React.Fragment>
    )
}

function Child(props) {

    console.log(props);

    return (

        <div>CompChild</div>
    )
}

function NoFound(props) {

    return (

        <h1>CompNoFound</h1>
    );
}

function RouterInformation(props) {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/a" component={A}/>
                <Route path="/b" component={B}/>

                /* string-pattern: 约定路径中指定位置的匹配规则 */
                <Route path="/news/:year/:month/:day" component={News}/>

                /* 非 Route 匹配的组件无法获取 route_context_info */
                <Route path="/parent" component={Parent}/>

                <Route component={NoFound}/>
            </Switch>
        </BrowserRouter>
    );
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    RouterInformation
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////