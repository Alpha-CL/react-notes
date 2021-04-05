///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {Layout} from "./components/Layout";
// import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Route, Switch} from "react-router-dom";
import {Login} from "./pages/login";
import {Admin} from "./pages/Admin";

import {Provider} from "react-redux";

/** Step_03 **/
import {ConnectedRouter as BrowserRouter} from "connected-react-router";
import history from "./store/history";
import store from "./store";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * connected-react-router           // router 中部分数据可能会和 store 中的数据联动
 *
 *
 * 该组件会将 action & location 中的数据与 store 中保持同步
 *
 * action: 路由跳转方式( PUSH, POP, REPLACE )
 * location: 当前地址信息
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 ** createBrowserHistory(): history;
 *  ( conectRouter, routerMiddleware, ConnectedRouter "必须使用同一个 store & history" )
 *
 ** yarn add history@4.10.1             !important
 ** yarn add history@4.10.1             !important
 ** yarn add history@4.10.1             !important
 *           ( 5.0 会报错 )
 */

/**
 * Step_01
 *
 *
 * router: conectRouter(history)
 */

// export default combineReducers({
//
//     ...
//     router: connectRouter(history),              // 加入特殊的 reducer 进行合并
// });


/**
 * Step_02
 *
 *
 * routerMiddleware(history): routerMid;
 */

// const store = createStore(reducer, composeWithDevTools(applyMiddleware(
//
//     routerMiddleware(history),                   // 建议放在第一个位置，用于处理部分特殊的 actioon
//     ...
// )));


/**
 * Step_03
 *
 *
 ** import {ConnectedRouter as BrowserRouter} from "connected-react-router";
 *
 * ConnectedRouter as BrowserRouter
 */

// <Provider store={Store}>                         // 必须使用同一个 store
//     <BrowserRouter history={history}>            // 并非 react-router-dom 中的 BrowserRouter
//         ...
//     </BrowserRouter>
// </Provider>


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class App extends PureComponent {

    constructor(props) {

        super(props);

        this.state = {


        };
    }

    render() {

        return (

            <React.Fragment>

                {/** Step_03: store={store} **/}
                <Provider store={store}>
                    {/** Step_03: history={history} **/}
                    <BrowserRouter history={history}>


                        <Switch>
                            <Route
                                path="/login"
                                component={Login}
                            />
                            <Route
                                path="/"
                                component={Admin}
                            />
                        </Switch>

                    </BrowserRouter>
                </Provider>

            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {
    App
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
