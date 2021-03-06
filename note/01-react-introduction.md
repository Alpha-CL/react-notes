#### React 概述

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


React {

    React,              page
    
    Router,             jump page
    
    Redux,              Public data
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 什么是 React ?
 * 
 * 
 * React是由Facebook研发的、用于解决UI复杂度的开源JavaScript库，目前由React联合社区维护
 */


React是由Facebook研发的、用于解决UI复杂度的开源JavaScript库，目前由React联合社区维护


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### React的特点

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * React的特点
 * 
 * 
 * 
 */


1) 轻量: React 的开发版所有源码( 包含注视 )仅 3000 行

2) 原生: 所哟 React 的代码都是用 原生JS 书写而成，不依赖其他库( 仅依赖一两个轻量的库 )

3) 易扩展: React 对代码的封装程度较低( 没有较多类似 Vue Megic )，所有 React 中很多功能都可以扩展

4) 不依赖宿主环境: React 仅依赖原生 JS语言，不依赖任何其他东西，包括运行环境
                 因此可以轻易移植到 浏览器，桌面应用，移动端

5) 渐进式: React 并非框架，对整个工程没有强制约束力，对于已存的工程，可以逐步重构

6) 单向数据流: 所有的数据自上而下流动

7) Redux: 使用 JS 声明洁面

8) 组件化开发



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### React vs Vue

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



      Vue         React     对比项	      
        
                    √       全球使用量     
        
       √                    国内使用量	  
        
       √            √       性能        
        
       √                    易上手	      
        
                    √       灵活度
        
                    √       大型企业
        
       √                    中小型企业	
        
                    √       生态



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### 引入 React

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * React & ReactDOM
 * 
 * 
 * ç@React: 构建 虚拟DOM
 * @ReactDOM: 将虚拟DOM与页面结合
 */


<!-- 引入react 核心库: 构建虚拟DOM -->
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>

<!-- 依赖核心库，将核心功能与页面结合: 将虚拟DOM与页面结合 -->
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
****
<!-- 若使用 JSX 语法，则需要用该扩展转译-->
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>


//-------------------------------------------------------------------------------------------------------------------//


/**
 * ReactDOM.render(element, container[, callback]);
 *
 *
 * @content: 指定所创建的内容
 * @target: 指定在何元素内创建
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * React.createElement(type: str, props: obj, ...children)
 *
 * @type: 指定标签类型
 * @props: 指定标签属性
 * @...children: 指定标签包含的子元素
 */


//-------------------------------------------------------------------------------------------------------------------//


/** react 原生:
    利用 React.createElement(); 创建虚拟dom 
    并利用 ReactDOM.render(); 插入指定元素内渲染 **/

<script type="text/javascript">

    let span = React.createElement('span', {}, 'hello world'),
        h1 = React.createElement('h1',{ prop: '这是一个属性' }, span);
    
    ReactDOM.render(h1, document.getElementID('root'));

</script>


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** JSX 语法:
    需要引入 <script src="https://unpkg.com/babel-standalone@6/babel.min.js"/> 才能解析 
    需要改变 <script type="text/babel"></script>，否则无法解析 **/


<script type="text/babel">

    let h1 =
        <h1>
            <span>Hello World</span>
        </h1>;
    
    ReactDOM.render(h1, document.getElementById('root'));

</script>


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### React auto-build

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 官方脚手架: create-react-app
 * 
 * 
 * 
 */

yarn create react-app [path/file-name]


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 第三方脚手架: next.js, umijs ...
 * 
 * 
 * 
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### react.package.proxy

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 当 请求数据时
 * 
 * 
 * 可以在 package.json 中设置 proxy，以便于日后维护
 */


paackage.json: {

    ...
    
    "proxy": "url"
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```
