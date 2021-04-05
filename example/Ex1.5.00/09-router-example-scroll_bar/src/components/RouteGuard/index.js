///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect, withRouter} from "react-router-dom";


//-------------------------------------------------------------------------------------------------------------------//


let prevLocation,
    location,
    action,
    unBlock;

/** 利用自定义组件获取 context，并添加 拦截器 **/
class _GuardHelper extends PureComponent {

    componentDidMount(){

        /** 添加 拦截器 **/
        unBlock = this.props.history.block((lct, act)=>{

            prevLocation = this.props.location;
            location = lct;
            action = act;

            return "";
        });

        /** 添加 监听器 **/
        this.unlisten =  this.props.history.listen((location, action) => {

            this.props.routeGuardListener && this.props.routeGuardListener(this.props.location, location, action, this.unlisten);
        });
    }

    componentWillUnmount(){

        /** 清除 "拦截器" **/
        unBlock();

        /** 清除 "监听器" **/
        this.unlisten();
    }

    render() {

        return null;
    }
}
const GuardHelper = withRouter(_GuardHelper);


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

    // componentDidMount(){
    //
    //     /**
    //      * history.listen(location: obj, action: str): clearListen;          // 仅可添加一个 拦截器
    //      *
    //      *
    //      ** 运行时间点: 即将跳转到新页面时
    //      *
    //      * @locatiion: 记录当前地址信息
    //      * @action: 表示进入该地址的方式
    //      *      * PoP           // 出栈
    //      *          - history.go();
    //      *          - history.back();
    //      *          - history.goForward();
    //      *      * Push          // 入栈
    //      *          - history.push();
    //      *      * Replace       // 替换
    //      *          - history.replace();
    //      *
    //      * return: clearListen();           // 取消监听
    //      */
    //
    //     this.unlisten =  this.props.history.listen((location, action) => {
    //
    //         // console.log('[url_path changed]');
    //
    //         this.props.routeGuard && this.props.routeGuard(this.props.location, location, action, this.unlisten);
    //     });
    //
    //     /**
    //      * history.block();         // 设置拦截器
    //      *
    //      *
    //      ** 会调用 RouterHooks: Router.getUserConfirmation();
    //      */
    //
    //     this.props.history.block('真的要跳转页面嘛?');
    // }
    //
    // componentWillUnmount() {
    //
    //     this.unlisten();
    // }

    handleGetUserConfirmation = (msg, commit) => {

        if (this.props.onBeforeChange) {

            this.props.onBeforeChange(prevLocation, location, action, commit, unBlock);

        } else {

            commit(true);
        }

    };

    render() {

        return (

            <React.Fragment>
                <Router
                    getUserConfirmation={this.handleGetUserConfirmation}
                >
                    <GuardHelper routeGuardListener={this.props.routeGuardListener}/>
                    {this.props.children}
                </Router>
            </React.Fragment>
        );
    }
}

// const RouteGuardWrapper = withRouter(RouteGuard);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    RouteGuard,
    // RouteGuardWrapper
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
