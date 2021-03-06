# React Advance

## defaultProps & propTypes

#### defaultProps

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * defaultProps                 // 静态属性
 * 
 * 
 * 在运行函数 或 构造函数之前，就将 "默认属性" 和 "传递的属性" 混合
 */


//-------------------------------------------------------------------------------------------------------------------//


/** function_component-default_props **/


function FnDefaultProps(props) {

    console.log('[FnDefaultProps]: ',props);             // 此时已完成 默认属性 和 传递属性 的混合

    return (

        <div>
            a: {props.a}, b: {props.b}, c: {props.c}
        </div>
    );
}

/** 设置函数静态默认属性值 **/
FnDefaultProps.defaultProps = {

    a: 1,
    b: 2,
    c: 3
};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** class_component-default_props **/

class ClsDefaultProps extends Component {

    /** methods-2 **/
    static defaultProps = {
        a: 1,
        b: 2,
        c: 3
    };

    constructor(props) {

        console.log('[ClsDefaultProps]: ', props);

        super(props);

        this.state = {};
    }

    render() {

        return (

            <div>
                a: {this.props.a}, b: {this.props.b}, c: {this.props.c}
            </div>
        );
    }
}


/** methods-1 **/
// ClsDefaultProps.defaultProps = {
//     a: 1,
//     b: 2,
//     c: 3
// };



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### propTypes

``` javascript7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * prop-types
 * 
 * 
 * 对于未使用脚手架的项目，需额外引入该库
 */

yarn add prop-types


//-------------------------------------------------------------------------------------------------------------------//


若 null, undefined 作为 props 传递, 视为 没有传递( 未设置非空验证时 ) 


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class ClsPropTypes extends Component {

    /** 先混合 **/
    static defaultProps = {

        bool: false
    };

    /** 再调用相应的函数进行验证 **/
    static propTypes = {                                    // 仅在 开发阶段报错提示，不会影响编译，仅作为提示


        /** isRequired: 必填项 **/

        /** basic_type **/
        num: PropTypes.number,                              // 数字类型
        str: PropTypes.string,                              // 字符串类型
        bool: PropTypes.bool,                               // 布尔类型

        arr: PropTypes.array,                               // 数组类型
        obj: PropTypes.object,                              // 对象类型
        func: PropTypes.func,                               // 函数类型
        symbol: PropTypes.symbol,                           // 符号类型

        any: PropTypes.any.isRequired,                      // 任意类型


        /** advance_type **/
        node: PropTypes.node,                               // 必须是一个可以渲染的内容: 字符串，数字，ReactElement
        element: PropTypes.element,                         // 必须是一个 ReactElement
        elementType: PropTypes.elementType,                 // 必须是一个 组件类型( 构造函数，函数 )


        // 约束 传入实例 原型链上必须有指定构造函数的原型
        son: PropTypes.instanceOf(Father),                  // 必须指定构造函数实例


        // 约束 传入值 必须来自指定数组的子项
        oneOf: PropTypes.oneOf(['male', 'female']),         // 枚举( 从一组值中取其中一个 )


        // 约束 array.item
        arrayOf: PropTypes.arrayOf(PropTypes.number),       // 指定该数组的每一子项的类型约束
        oneOfType: PropTypes.oneOfType([                    // 属性类型必须是 数组子项的其中之一
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool
        ]),


        // 约束 object
        objShape: PropTypes.shape({                         // 指定对象中每一子项的类型约束
            name: PropTypes.string,
            age: PropTypes.number,
            address: PropTypes.shape({
                province: PropTypes.string,
                city: PropTypes.string,
            }),
        }),


        // 约束 array.obj
        arrObj: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            age: PropTypes.number,
        })),


        object: PropTypes.objectOf(PropTypes.string),       // 指定该对象的每一子项的类型约束( 作用不大 )

        exact: PropTypes.exact({}),                         // 与 shape 用法相同( 必须精确匹配传递的数据 )


        /** custom_type **/
        custom: function (props, propName, componentName) {

            console.log('[customType]', props, propName, componentName);

            const val = props[propName];

            /** 验证必填 **/
            if (val === undefined || val === null) {

                return new Error(`invalid prop ${propName} in ${componentName} is required`);
            }

            /** 验证必须是数字 **/
            if (typeof val !== "number") {

                return new Error(`invalid prop ${propName} in ${componentName} is not number`);
            }

            /** 验证是否在取值范围之内 **/
            if (val < 0 || val > 100) {

                return new Error(`invalid prop ${propName} in ${componentName} must is between 0 and 100`);
            }
        },
    };

    constructor(props) {

        super(props);

        this.state = {};
    }

    render() {

        const elementType = this.props.elementType;     // 必须先赋值，再 JSX 解析

        return (

            <div>
                <div>number: {this.props.num}</div>
                <div>string: {this.props.str}</div>
                <div>boolean: {this.props.bool}</div>
                <div>function: {this.props.func}</div>
                <div>{elementType}</div>
            </div>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

## Higher-Order Component

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * HOF: Higher-Order Function           // 高阶函数，以函数为参数，并返一个函数
 * 
 * HOC: Higher-Order Component          // 高阶组件，以组件作为参数，并返回一个组件
 */


<Comp />            // React Component Element

<h1></h1>           // React Html Element


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 利用 HOC 实现横切关注点: 赋予组件更多的功能
 * 
 * 
 * 1) 禁止在 render(); 中使用 组件                // 可能会多次 创建和销毁该组件
 *
 * 2) 禁止在 高阶组件 内部修改 传入的组件           // 单一应用指责: 仅做包裹添加组件功能, 避免组件功能混乱
 */


eg: N 个组件，每个组件在创建和销毁时，需要做日志记录
    N 个组件，显示的内容，所得到的数据结构完全一致


//-------------------------------------------------------------------------------------------------------------------//


import React from "react";

export default function withTest(comp) {

    return class extends React.Component {
    
    };
}

function A() {

    return (<h1>hello world</h1>);
}

const B = withTest(A);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

## ref & forwardRef

#### ref

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 谨慎使用 ref
 *
 *
 * 1) 调用真实 DOM 对象中的方法时使用
 *
 * 2) 需要调用某个类组件中的方法时使用
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * ref: React.createRef();              // obj.current: target
 *
 *
 * 1) 赋值初期为 null
 * 2) 当 render(); 执行时，进行赋值
 */


/**
 * ref          // 将元素标记，后可在 this.refs 中获取指定 "dom" 或 "自定义组件"
 * React.createRef();
 *
 *
 * 使用场景: 1) 希望直接操作某个 reactDom 元素              // 返回 reactDom
 *          2) 希望直接使用自定义组件中的某个方法            // 返回 自定义组件对象
 *
 *
 * * 无法在函数组件上使用( 仅可在 真实的dom 和 自定义类组件 上使用 )
 * * ref 不再推荐 赋值字符串，字符串赋值的方式将来可能会被移除
 *
 *
 * * 建议赋值: ref: ( obj | fn );
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * refFn            // 将赋值提取到 类中，而不是 在行内的 箭头函数，则不会执行多次
 *
 *
 * 函数调用时间: 1) 在 componentDidMount 中即可以使用 该函数
 *
 *             2) 若 ref 值发生了改变( 旧函数被新的函数替代 )
 *                则会分别调用 旧函数 及 新函数，触发在 componentDidUpdate 之前
 *
 *             3) 若 ref 所在的组件被卸载时，会调用该函数
 */


/**
 * 函数的两次调用
 *
 *
 * 1) 第一次: 旧函数被调用时，el: null
 *
 * 2）第二次: 新函数被调用时，el: obj
 */



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### forwardRef

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * forwardRef 转发            // 仅作用于 函数组件
 *                           // 通常用于高阶组件
 * 
 * 
 * 高阶组件, 通古包裹 函数组件 并传递 ref 后, 则可在 函数组件内 定义传递 ref 的指向
 * 最终可以在外层 获得函数组件 自定义 ref 指向的内容
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

## context

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        /**
         * 常规数据流
         * 
         * 
         * 当后代元素需要用到数据时，需通过 props 一层一层传递( 虽然数据流纯粹，但是造成代码冗余，复杂情况不便处理 )
         */
        
                                           + ----------- +
                                           |             |
                                           |     App     |
                                           |             |
                                           |    {data}   |
                                           |             |
                                           + ----------- +
                                                  |
                                   + ------------ + ----------------------- +
                                   |                                        |                  
                           + -------------- +                      + -------------- +
                           |                |                      |                |
                           |   SubNode_01   |                      |   SubNode_01   |
                           |                |                      |                |
                           |     {data}     |                      |                |
                           |                |                      |                |
                           + -------------- +                      + -------------- +
                                   |                                        |
                + ---------------- + ------------------ +                   |
                |                  |                    |                   |
        + ------------ +    + ------------ +    + ------------ +    + ------------ +
        |              |    |              |    |              |    |              |
        |   Child_01   |    |   Child_02   |    |   Child_03   |    |   Child_04   |
        |              |    |              |    |              |    |              |
        |    {data}    |    |              |    |              |    |              |
        |              |    |              |    |              |    |              |
        + ------------ +    + ------------ +    + ------------ +    + ------------ +
                |
                |
        + ---------------- +
        |                  |
        |   SubChild_01    |
        |                  |
        |     {data}       |
        |                  |
        + ---------------- +


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### context_old

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





        /**
         * React.content 特点
         * 
         * 
         * 1): 当某个组件创建上下文后，上下文中的数据，会被所有后代组件共享
         * 2): 若某个组件依赖了上下文，会导致该组件数据流不再纯粹( 原本为外部单项数据流 props, 如今又添加了 context )
         * 3): 一般情况下，用于第三方组件( 通用组件 )
         */

        + ----------------------------------------------------------------- context -------- +
        |                                                                                    |
        |                                      + ----------- +                               |
        |                                      |             |                               |
        |                                      |     App     |                               |
        |                                      |             |                               |
        |                                      |    {data}   |                               |
        |                                      |             |                               |
        |                                      + ----------- +                               |
        |                                             |                                      |
        |                              + ------------ + ----------------------- +            |
        |                              |                                        |            |           
        |                      + -------------- +                      + -------------- +    |
        |                      |                |                      |                |    |
        |                      |   SubNode_01   |                      |   SubNode_01   |    |
        |                      |                |                      |                |    |
        |                      |                |                      |                |    |
        |                      |                |                      |                |    |
        |                      + -------------- +                      + -------------- +    |
        |                              |                                        |            |
        |           + ---------------- + ------------------ +                   |            |
        |           |                  |                    |                   |            |
        |   + ------------ +    + ------------ +    + ------------ +    + ------------ +     |
        |   |              |    |              |    |              |    |              |     |
        |   |   Child_01   |    |   Child_02   |    |   Child_03   |    |   Child_04   |     |
        |   |              |    |              |    |              |    |              |     |
        |   |              |    |              |    |              |    |              |     |
        |   |              |    |              |    |              |    |              |     |
        |   + ------------ +    + ------------ +    + ------------ +    + ------------ +     |
        |           |                                                                        |
        |           |                                                                        |
        |   + ---------------- +                                                             |
        |   |                  |                                                             |
        |   |   SubChild_01    |                                                             |
        |   |                  |                                                             |
        |   |   content.data   |                                                             |
        |   |                  |                                                             |
        |   + ---------------- +                                                             |
        |                                                                                    |
        |                                                                                    |
        + ---------------------------------------------------------------------------------- +




/**
 * 
 * 
 * 
 * 
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### context_new

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



        /**
         * 
         * 
         * 
         * 
         */
         
                                           + ----------- +                               
                                           |             |                               
                                           |     App     |                               
                                           |             |                               
                                           |    {data}   |                               
                                           |             |                               
                                           + ----------- +                                independent object
                                                  |                                      + ---------------- +
                                   + ------------ + ----------------------- +            |                  |
                                   |                                        |            |                  |       
                           + -------------- +                      + -------------- +    |                  |
                           |                |                      |                |    |                  |
                           |   SubNode_01   |                      |   SubNode_01   |    |                  |
                           |                |                      |                |    |                  |
                           |                |                      |                |    |                  |
                           |                |                      |                |    |                  |
                           + -------------- +                      + -------------- +    |     Context      |
                                   |                                        |            |                  |
                + ---------------- + ------------------ +                   |            |                  |
                |                  |                    |                   |            |                  |
        + ------------ +    + ------------ +    + ------------ +    + ------------ +     |                  |
        |              |    |              |    |              |    |              |     |                  |
        |   Child_01   |    |   Child_02   |    |   Child_03   |    |   Child_04   |     |                  |
        |              |    |              |    |              |    |              |     |                  |
        |              |    |              |    |              |    |              |     |                  |
        |              |    |              |    |              |    |              |     |                  |
        + ------------ +    + ------------ +    + ------------ +    + ------------ +     + ---------------- +
                |                                                                        
                |                                                                        
        + ---------------- +                                                             
        |                  |                                                             
        |   SubChild_01    |                                                             
        |                  |                                                             
        |   content.data   |                                                             
        |                  |                                                             
        + ---------------- +                                                             
                                                                                             
                                                                                              

                    


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

## PureComponent

#### PureComponent

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 纯组件
 * 
 * 
 * 用于避免不必要的渲染( render(); )，从而提升效率
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### Render_Props

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### ReactDom.createPortal();

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
 * 将指定 reactElement 渲染到指定的 dom 中 
 * 事件冒泡: 虽然改变了真实的页面结构, 但 react 中 事件冒泡依然根据 react 中的结构
 *
 * 
 * @contentElement: react 元素/组件/html元素等  
 * @containerElement: 真实 dom 节点, 用于挂载 reactElement他
 */

ReactDom.createPortal(contentElement, containerElement);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### extend Event

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 
 * 
 * 
 * 
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

## render principle

#### base

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 渲染                          // 若直接操作真实的DOM性能消耗太大
 * 
 * 
 * 生成用于显示的对象，以及将这些对象形成真实的DOM对象
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * React Element                // React 元素 
 * 
 *  
 
 */


- 通过 "React.createElement();" 

- "JSX" 创建的 ReactDomObj 再通过 babel 编辑后使用 "React.createElement();" 创建的元素


//-------------------------------------------------------------------------------------------------------------------//


/**
 * React Node                  // React 节点
 * 
 * 
 * 专门用于渲染到 UI界面 的对象
 */


- ReactDomComponent     ( React Dom节点 ):     创建该节点的 React元素类型 是 一个字符串

- ReactComposite        ( React 混合节点 ):     创建该节点的 React元素类型是 一个函数 或 一个类

- ReactTextNode         ( React 文本节点 ):     创建该节点的 React元素由字符串创建 

- ReactEmptyNode        ( React 空节点 ):       创建该节点的 React元素 由 null, undefined, fasle, true 

- ReactArrayNode        ( React 数组节点 ):     创建该节点的 React元素 由一个数组


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * Real Dom 
 * 
 * 
 * 通过 document.createElement(); 创建的 Dom 元素 
 */
 

//-------------------------------------------------------------------------------------------------------------------//


        ReactElement  --->  ReactNode  --->  UI


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### React Node Render

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/** React First Render **/


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


1) 根据参数创建节点 ReactDOM.render(node, container);


2) 根据 不同的节点，创建 VNode

    - TextNode: document.creactText();
    
    - EmptyNode: 仅占位
    
    - ArrayNode: 遍历数组，将数组子项递归创建节点( 回至 第1步，直至递归遍历结束 )
    
    - DomNode: 通过 docuemnt.createElemment(); 创建真实的 DOM对象
               将该 真实DOM元素的 属性挂载到该对象
               再将该节点的 children 属性递归( 回至 第1步，直至递归遍历结束 )
               
    - componentNode:
        
        - functionComponent: 调用函数( 该函数必须返回一个可以生成节点的内容 )，
                             将该函数的返回结果递归生成节点( 回至 第1步，直至递归遍历结束 )
        
        - classComponent: 1. 创建该类组件的实例对象 constructor();
                          2. 调用该实例对象的声明周期函数: static getDerivedSStateFromProps();
                          3. 运行该实例对象的 render(); 获取节点对象( 回至 第1步，直至递归遍历结束 )
                          
                          4. componentDidMount: 当整个虚拟DOM树构建完毕，并将真实DOM对象加入到容器后
                                               执行该函数中的任务队列( 该函数中的任务队列: 先进先执行 )
        
3) 生成 VDOMTree，将 虚拟DOM树保存，以便后续使用

4) 将之前生成的真实 DOM对象，加入到容器中 ReactDOM.render(Vnode, container);


//-------------------------------------------------------------------------------------------------------------------//


/** Update Node **/


1) ReactDOM.render();               // 触发根节点更新

2) ClassCmp.setDate();              // 实例所在的节点及其后代节点更新


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** ReactDOM.render(); **/

1) 进入根节点的 "diff 对比更新"


/** ClassCmp.setDate(); **/

1) 运行生命周期函数 static getDerovedStateFromProps();

2) 运行生命周期函数 shouldComponentUpdate(); 若该函数返回 false，则终止当前更新

3) 运行 ClassCmp.render(); 获得一个新的节点，进入该节点的 "diff 对比更新"

4) 将生命周期函数 getSnapShotBeforeUpdate(); 加入执行队列，将生命周期函数

5) 将生命周期函数 componentDidUpdate(); 加入执行队列，以待将来执行


/** 后续共同步骤 **/

1) 完成 真实DOM 更新

2) 依次调用执行队列中的 componentDidMount();

2) 依次调用执行队列中的 getSnapshotBeforeUpdate();

3) 依次调用执行队列中的 componentDidUpdate();


/** diff 对比更新 **/

将产生的新节点，对比之前 虚拟DOM树的节点，发现差异，完成更新
    
    * React 为了提高对比效率，假设 
    
        1) "更新的节点不会出现层次移动"
    
        2) 不同的节点类型生成不同的结构
        
        3) 多个兄弟元素通过 "唯一标识 key" 确定对比的更新节点( 当相同结构的相同Dom，没有key时，React会就近重用之前Dom )
        
            - 数组中: 若未添加 key，则在更新时，无法找到相对应的 Dom 对比 type
                     从而将之前所有的节点卸载后，重新添加新的节点，浪费性能

       
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```














