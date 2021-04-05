///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect, withRouter} from "react-router-dom";


//-------------------------------------------------------------------------------------------------------------------//


class RouteGuard extends PureComponent {

    static propTypes = {

    };

    static defaultProps = {

    };

    constructor(props) {

        super(props);

        this.state = {

        };
    }

    componentDidMount(){

        /**
         * history.listen(location: obj, action: str): clearListen;
         *
         *
         ** 运行时间点: 即将跳转到新页面时
         *
         * @locatiion: 记录当前地址信息
         * @action: 表示进入该地址的方式
         *      * PoP           // 出栈
         *          - history.go();
         *          - history.back();
         *          - history.goForward();
         *      * Push          // 入栈
         *          - history.push();
         *      * Replace       // 替换
         *          - history.replace();
         *
         * return: clearListen();           // 取消监听
         */

        this.unlisten =  this.props.history.listen((location, action) => {

            // console.log('[url_path changed]');

            this.props.routeGuard && this.props.routeGuard(this.props.location, location, action, this.unlisten);
        });

        /**
         * history.block();         // 设置拦截器
         *
         *
         ** 会调用 RouterHooks: Router.getUserConfirmation();
         */

        this.props.history.block('真的要跳转页面嘛?');
    }

    componentWillUnmount() {

        this.unlisten();
    }

    render() {

        return (

            <React.Fragment>
                <Router></Router>
                {this.props.children}
            </React.Fragment>
        );
    }
}

const RouteGuardWrapper = withRouter(RouteGuard);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    RouteGuard,
    RouteGuardWrapper
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
