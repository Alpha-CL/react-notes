# React Router

#### 站点

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


                      Product_Line

Product_01      Product_02      Product_03      Product_04

                    Site

    weibo           news             short_video

single_page_app   single_page_app   single_page_app


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 站点
 * 
 * 
 * 无论使用 (Vue / React)，开发的单页应用程序，可能只是该站点的一部分( 某一个功能块 )
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


* 路由

在单页应用中完成组件的切换，需要实现下面两个功能:

1) 根据不同的页面地址，展示不同的组件            // 核心

2) 完成无刷新的地址切换


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * React Router         // 原理: 第三方库 Path-to-RegExp
 *                      // ( 将 <Router path="/path/:year(\d+)/:mounth?/:day/*"> 转换为真正的正则进行匹配 )
 * 
 * 
 * 在页面中实现路由，需要安装 react-router-dom 库
 */

1) react-router: 路由核心库，包含诸多和路由功能相关的核心代码

2) react-router-dom: 利用路由核心库，结合实际的页面，实现跟页面路由密切相关的功能


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

## (Hash & Brower History) Router

#### URL Config Introduction

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * URL
 * 
 * 
 * [schema] : // [host] : [port] [/path] [?query] [#hash]
 */

[https] :// [www.react.com] [:443] [/news/demo.html] ?[ key=val] # [hash]

schema           host        port        path            query      hash           

1) schema( 协议 ): https, http ...

2) host( 主机地址 )

    - ip_address
    
    - localhost
    
    - domain_name
    
    - ...

3) port( 端口 ): 根据不同的端口传输不同的数据       

    - http:80           // // 默认端口可以省略
    
    - https:443
    
    - ...

4) path( 路径 ): 当前单页应用中的某个页面路径

5) query( 请求参数 ): 数据请求附带的参数

    - ? + key=val

6) hash( 哈希 ): 附带的数据

    - # + hash


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### Hash Router

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * Hash Router                      // [#hash] 的改变 '不会触发' 页面重新请求
 *                                  // 兼容性较好
 * 
 * 
 * [schema] : // [host] : [port] [/path] [?query] [#hash]
 * 
 ** 根据 URL 中 "哈希" 切换显示组件
 */


window.location

// Location {ancestorOrigins: DOMStringList, href: "https://www.baidu.com/", origin: "https://www.baidu.com", protocol:
 "https:", host: "www.baidu.com", …}
// ancestorOrigins: DOMStringList {length: 0}
// assign: ƒ assign()
// hash: ""
// host: "www.baidu.com"
// hostname: "www.baidu.com"
// href: "https://www.baidu.com/"
// origin: "https://www.baidu.com"
// pathname: "/"
// port: ""
// protocol: "https:"
// reload: ƒ reload()
// replace: ƒ replace()
// search: ""
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// Symbol(Symbol.toPrimitive): undefined
// __proto__: Location


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### Brower History Router

> HTML5 新增 API( 使浏览器拥有了 "改变 页面路径，却不刷新页面的 方式" )

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/**
 * Brower History Router            // pushStatet(); & replaceState();
 * 
 * 
 * [schema] : // [host] : [port] [/path] [?query] [#hash]
 * 
 * 
 */

window.history



                  History Stack

                |               |
                |               |
                |               |
                | + --------- + |
   pointer ===> | |  path_0N  | |
                | + --------- + |
                | + --------- + |
                | |  path_02  | |
                | + --------- + |
                | + --------- + |
                | |  path_01  | |
                | + --------- + |
                + ------------- +
                    
                first in, last out

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** 根据页面路径渲染指定页面 **/


/**
 * window.history.pushState(data, title, hash);
 * 
 * 
 * @data: 附加数据
 * @tiitle: 页面标题
 * @hash: 新的地址
 * 
 ** 向当前 "历史记录栈" 中添加一条新的记录
 */


/**
 * window.history.replaceState(data, title, hash);
 * 
 * 
 * @data: 附加数据
 * @tiitle: 页面标题
 * @hash: 新的地址
 * 
 ** 将当前 指针 指向的历史记录 替换为 新的地址
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```













