///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * Router_Comp              // 该组件本身不做任何展示，仅提供路由模式匹配
 *                          // 该组件产生 一个上下文( 为子组件提供一些实用的对象和方法 )
 *
 *
 ** 作用相同，仅匹配方式不同
 *
 * <HashRouter/>            // 使用 hash 模式匹配
 * <BrowserRouter/>         // 使用 browser_history 模式匹配
 */

/**
 * Route_comp               // 根据不同的地址，展示不同的组件
 *
 *
 * <Route
 *
 **     path=""             // 匹配路径( 若 不书写 path，则匹配任意路径 )
 **     component=""        // 撇配成功后显示的组件
 **     children=""         // 无论 Route 是否匹配成功，都会显示该组件的 children
 *                          // ( 有且仅当 在 Switch 组件中时，若已匹配成功其他组件，则该组件无法被匹配 )
 *
 *          - ReactEle      // 若传递 React元素，则无论是否匹配成功，一定会显示该 Route.children，并忽略该 Route.coomponent
 *          - Fn            // 若传递 一个函数，则该函数有多个参数( 这些参数来自 Router.context )，必然会显示该函数返回的  ReactEle
 *                          // 并且忽略该 Route.component
 *
 **     exact="bool"        // 匹配路径 是否 精确匹配
 *                          // 若未开启精确匹配，则带有该路径的组件都会被匹配到
 *
 *      sensitive="bool"    // 匹配路径 是否 区分大小写
 * />
 */

/**
 * <Switch>
 *
 *      <Route/>
 *      <Route/>
 *      <Route/>
 *      ...
 *
 * </Switch>
 *
 *
 ** Switch 的子项必须是 Route
 ** 匹配成功后，则停止匹配
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function CompA() {

    return (

        <div>CompA: root/a</div>
    );
}

function CompB() {

    return (

        <div>CompA: root/a</div>
    );
}

function CompC() {

    return (
        <React.Fragment>
            <div>CompA: root/a</div>
            <Route
                path="/d"
                component={CompD}
            />
        </React.Fragment>
    );
}

function CompD() {

    return (

        <div>CompD: root/d</div>
    );
}

function HashRouterExample(props) {

    return (
        <React.Fragment>

            <div className="page-section">
                <h1>Router: BrowserRouter as Router || HashRouter as Router</h1>
                <p>
                    该组件本身不做任何展示，仅提供路由模式匹配 <br/>
                    该组件产生 一个上下文( 为子组件提供一些实用的对象和方法 )
                </p>
                <BrowserRouter>
                    <h3>Browser Router</h3>
                </BrowserRouter>
                <HashRouter>
                    <h3>Hash Router</h3>
                </HashRouter>
                <hr/>
            </div>

            <div className="page-section">
                <h1>Route</h1>
                <p>改变 [path] 跳转指定的 组件页面</p>
                <BrowserRouter>
                    <Route
                        path="/a"
                        component={CompA}
                    />
                    <Route
                        path="/b"
                        component={CompB}
                    />
                    <Route
                        path="/c"
                        component={CompC}
                    />
                </BrowserRouter>
                <hr/>
            </div>

            <div className="page-section">
                <h3>exact="bool": 匹配路径 是否 精确匹配</h3>
                <h3>sensitive="bool": 匹配路径 是否 区分大小写</h3>
                <BrowserRouter>
                    <Route
                        path="/a"
                        sensitive
                        component={CompA}
                    />
                    <Route
                        // 此时会导致，匹配 CompA，CompB
                        path="/a/b"
                        component={CompB}
                    />
                    <Route
                        path="/a/c"
                        component={CompC}
                        exact               // 开启精确匹配，则只会匹配完整路径的组件
                    />
                </BrowserRouter>
                <hr/>
            </div>

            <div className="page-section">
                <h3>若不配置 path，则 匹配 任意路径</h3>
                <BrowserRouter>
                    <Route
                        path="/a"
                        component={CompA}
                    />
                    <Route
                        path="/b"
                        component={CompB}
                    />
                    <Route
                        // 若不配置 path，则匹配 任意路径
                        component={CompC}
                    />
                </BrowserRouter>
                <hr/>
            </div>

            <div className="page-section">
                <h3>Route 元素必须为 Router 的子元素即可</h3>
                <BrowserRouter>
                    <Route
                        path="/a"
                        component={CompA}
                    />
                    <Route
                        path="/b"
                        component={CompB}
                    />
                    <Route
                        // 若不配置 path，则匹配 任意路径
                        component={CompC}
                    />
                </BrowserRouter>
                <hr/>
            </div>

            <div className="page-section">
                <h3>无论 Route.path 是否匹配成功，都会显示该组件的 Route.children</h3>
                <div>( 有且仅当 在 Switch 组件中时，若已匹配成功其他组件，则该组件无法被匹配 )</div>
                <BrowserRouter>
                    <Route
                        path="/a"
                        component={CompA}
                    >
                        <h3 style={{color: "red"}}>
                            若运行了该 Route 则必然会加载该 Route.children，并忽略该 Route.component
                        </h3>
                    </Route>
                    <Route
                        path="/b"
                        component={CompB}
                    >
                        {() => {
                            return (
                                <h3 style={{color: "red"}}>
                                    若运行了该 Route 则必然会加载该 Route.children，并忽略该 Route.component
                                </h3>
                            );
                        }}
                    </Route>
                    <Route
                        path="/c"
                        component={CompC}
                    />
                </BrowserRouter>
                <hr/>
            </div>

            <div className="page-section">
                <h1>Switch</h1>
                <h3>匹配成功后，则停止匹配</h3>
                <p>
                    目前: Switch 的子组件仅可以为 Route( dom 会报错 ) <br/>
                    由于 Switch 组件会循环所有子元素，然后匹配每个子元素，若匹配成功，则渲染对应组件，并停止匹配 <br/>
                    因此不能在 Switch 的子元素中使用除 Route 之外的组件
                </p>
                <BrowserRouter>
                    <Switch>
                        <Route
                            path="/a"
                            component={CompA}
                        />
                        <Route
                            path="/b"
                            component={CompB}
                        />
                        <Route
                            path="/c"
                            component={CompC}
                        />
                    </Switch>
                </BrowserRouter>
                <hr/>
            </div>

        </React.Fragment>
    );
}

HashRouterExample.defaultProps = {};

HashRouterExample.propTypes = {};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    HashRouterExample
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////