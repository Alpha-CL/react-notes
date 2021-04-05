///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//-------------------------------------------------------------------------------------------------------------------//


/**
 * path: str                    // 路径类正则匹配( 原理: path-to-regexp )
 * component: str               // 组件匹配路径( 匹配相对路径时，默认以 root/src 为起始目录，@ === root/src )
 * exact: bool                  // 是否严格匹配
 * routes: arr                  // 配置子路由
 * redirect: str                // 配置路由重定向
 * title: str                   // 配置路由 document.title
 *
 *
 ** wrappers                    // HOC 用于扩展路由组件的功能
 *                              // wrappers: [exted, extend ...]
 *
 *  function extend(props){
 *
 *      // effect code
 *
 *      retrun props.children;  // 原路由组件会作为 children 传递
 *  }
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export default {

    // routes: [
    //     {
    //         path: "/",
    //         component: '../layouts',
    //         exact: false,
    //         routes: [
    //             {
    //                 path: '/',
    //                 component: './index',
    //                 title: 'home',
    //             },
    //             {
    //                 path: '/login',
    //                 component: './login',
    //                 title: 'login',
    //             },
    //             {
    //                 path: '/welcome',
    //                 component: './welcome',
    //                 title: 'welcome',
    //                 wrappers: [
    //                     '@/wrappers/isLogin',
    //                 ],
    //             }
    //         ]
    //     },
    // ],

};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
