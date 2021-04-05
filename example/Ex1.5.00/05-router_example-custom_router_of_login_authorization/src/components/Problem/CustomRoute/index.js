///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect} from "react-router-dom";
import {isLogin, login, loginOut} from "../loginInfo";


//-------------------------------------------------------------------------------------------------------------------//


function ProtectedRoute({component: Comp, children, render, ...rest}) {

    const handleRender = (context) => {

        if (isLogin) {

            return <Comp/>;

        } else  {

            alert('请先登陆，即将跳转至 Login_Page');

            /** methods_01( 会显示在地址栏中 ): 将所需要传递的 地址参数 在 url 的 search 字段中传递 **/
            // return <Redirect to={{
            //     pathname: '/login',
            //     search: '?returnurl=' + context.location.pathname
            // }}/>;

            /** methods_02( 不会显示在地址栏中 ): 将所需要传递的 地址参数 在 state 中传递 **/
            return <Redirect to={{
                pathname: '/login',
                state: context.location.pathname
            }}/>;
        }
    };

    return (

        <Route
            {...rest}
            render={handleRender}
        />
    );
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    ProtectedRoute
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
