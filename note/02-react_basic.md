## React Basic

#### JSX

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 什么是 JSX
 * 
 * 
 * 
 */


1) Faceboook 起草的 JS 扩展语法

2) JSX 本质上是一个 JS 对象，会被 babel 转译为 React.createElement();

3) 每个 JSX 表达式，有且仅有一个 "根节点"

    - React.Fragment

4）每个 JSX 元素必须有 "结束标签" (XML规范)


//-------------------------------------------------------------------------------------------------------------------//


/** 每个 JSX 表达式，有且仅有一个 "根节点" **/

// 此时会报错: 两个根节点
//
// const ele = (
//     <h1>element-1</h1>
//     <h1>element-2</h1>
// );


// 可以添加空标签，作为唯一的根节点
// 
// const ele = (
//     <>
//         <h1>element-1</h1>
//         <h1>element-2</h1>
//     </>
// );


// React.Fragment 语法糖
//
const ele = (
    <React.Fragment>
        <h1>element-1</h1>
        <h1>element-2</h1>
    </React.Fragment>
);


ReactDOM.render(ele, document.getElementById('root'));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### Insert expression

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * JSX 中嵌入表达式
 *
 *
 */

1) JSX注释: "command + /"

2) 插入不同的表达式

     - varExpression: { varibale } 双大括号中的值 即为变量

     - hideValue: null, false, undefined 仅会插入，但不会在 html 中显示

     - object:

         - 普通对象: "普通对象" 不可以作为 rootDom 的子元素

         - react对象: "react对象" 可以作为 rootDom 的子元素

     - array: 数组的每一项会被遍历到 html 中，但 null, false, undefined 依然不会被显出来

3) 表达式作为元素属性

4) 属性使用小驼峰命名

5) 防止注入攻击

     - 自动编码: 为了防止代码来自用户的代码攻击，react 非常保守的将数据仅作为字符串处理

     - 注入攻击-dangerouslySetInnerHTML: 有切仅当数据需要当作 html 被解析时使用该处理方式


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 元素的不可变性
 *
 *
 */

1) JSX 元素是一个对象，该对象中所有属性不可更改( 原理: 利用 Object.freeze(targetDom); 冻结了 dom 对象 )

2) 若要更改元素属性，需重新创建 JSX 元素( 创建新的 ReactJSDOM 后，可利用 setInterval(); 重新渲染页面 )


//-------------------------------------------------------------------------------------------------------------------//


/** 插入变量表达式 **/

const num1 = 1234,
    num2 = 4321;

const varExpression = (
    // "js注释" 仅在 中显示，html 中不会显示
    <div>
        {num1} * {num2} = {num1 * num2}
        <hr/>
    </div>
);

// const varableExpression = React.createElement('div', {}, `${num1} * ${num2} = ${num1 * num2}`);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** null, false, undefined 仅会添加，但不会在 html 页面中显示 **/

const hideValue = (
    <div>
        <p>null, false, undefined 不会显出</p>
        {null}
        {false}
        {undefined}
        <hr/>
    </div>
);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** 普通对象无法作为 rootDom 的子元素 **/

// const obj1 = {
//     a: 1,
//     b: 2
// };

// const ordinaryArr = (
//     <div>{obj1}</div>
// );


/** react 对象可以作为 rootDom 的子元素 **/

const reactObj = (
    <div>
        这是一个 reactObj
        <hr/>
    </div>
);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** 数组的每一项会被遍历到 html 中，但 null, false, undefined 依然不会被显出来 **/

const arr1 = [1, 2, 3, 4, 5, 6, null, false, undefined];


const arrExpression = (
    <div>
        {arr1}( null, false, undefined 作为数组子项依然不会被显示出来 )
        <hr/>
    </div>
);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** 元素嵌入表达式 **/

const numbers = new Array(6);

numbers.fill(0);

const lis = numbers.map((val, idx, arr) => {

    return (
        <li key={idx}>{idx}</li>
    );
});

const ulDom = React.createElement(
    'ul',
    {},
    lis,
);

const ulExpress = React.createElement(
    'div',
    {},
    ulDom,
    <hr/>
);


//-------------------------------------------------------------------------------------------------------------------//


/** 属性使用小驼峰命名 **/


const url = 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1604938274&di=d530eae31acc7a63dc9c8ce6aceaa989&src=http://a4.att.hudong.com/27/67/01300000921826141299672233506.jpg',
    cls = 'border',
    sty = {
        width: '200px',
        height: '200px',
    },
    camelCasePropName = (
        <div>
            <img
                src={url}                       // 属性值不需要使用 双引号
                className={cls}                 // 和 html 的 class 冲突，所以使用 className
                style={sty}                     // 属性值可以是 对象
                alt="二哈"
            />
            <hr/>
        </div>
    );


//-------------------------------------------------------------------------------------------------------------------//


/** 防止注入攻击-自动编码( 为了防止代码来自用户的代码攻击，react 非常保守的将数据仅作为字符串处理 ) **/


const content = "<h1>just do it<br/><span>hello world</span></h1>";

const autoCoding = (
    <div>
        {content}
        <hr/>
    </div>
);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** 防止注入攻击-dangerouslySetInnerHTML( 有切仅当 数据需要当作 html 被解析时，使用该处理方式 ) **/


const setInnerHTML = (
    <React.Fragment>
        <div
            dangerouslySetInnerHTML={{
                __html: content
            }}
        >
        </div>
        <hr/>
    </React.Fragment>
);


//-------------------------------------------------------------------------------------------------------------------//


/** 元素的不可变性 **/

let num = 0;

const UnchangeableReactDom = (
    <React.Fragment>
        <div>
            {num}
        </div>
        <hr/>
    </React.Fragment>

);

// UnchangeableReactDom.props.children = 2;             // 无法改变任意 JSX 已创建 ReactDom 的属性及值


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** 元素的不可变性-仅可通过重新创建 ReactDom，并重新渲染页面改变 ReactDom **/


// 因无法创建多个根元素绑定渲染，故无法看到展示效果
//
// let num = 0;
//
// setInterval(() => {
//
//     num++;
//
//     const UnchangeableReactDom2 = (
//         <div>
//             {num}
//         </div>
//     );
//
//     ReactDOM.render(UnchangeableReactDom2, document.getElementById('root'));
//
//
// }, 500);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

## component

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// React 以首字母大写区分 type: 是否是组件( fnCmp / clsCmp )

1) 组件名称首字母必须大写

2) 组件的属性，必须使用 "小驼峰命名"( 因解析为 html 后所有字符都会变成小写 )

3) 组件无法改变自身的属性( 传递过来的顶层数据 )

    - React 中，数据属于谁，谁才有权力改变
    
    - 虽然可以改变传递过来属性的属性( React 仅可检测 传递第一层级的数据 )，但可能会造成后续数据混乱
    
    - 单向数据流: 父 -> 子


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### function_component

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 函数组件
 *
 *
 * 使用组件创建的 JSX 仍然是 React 元素，仅 type 的值不同
 *
 * 1) type: html_label              // 对应所创建的唯一父级别元素的标签名称
 *
 * 2) type: function_component      // 对应组件名称( 导出未命名组件时, <unknown> )
 */

const fnCmp = <MyFuncComp/>;

console.log('[function_component]', fnCmp);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 函数组件的属性
 *
 *
 * 属性会作为一个对象的属性，传递作为 "函数的参数"
 */


/** transfer_data **/

const fnCmpTfDd1 = <FuncCompTransferData num={17}/>;                    // 大括号 传递 数字类型数据
const fnCmpTfDd2 = <FuncCompTransferData num="18"/>;                    // 双引号 传递 字符串类型数据

const fnCmpTfDd3 =
    <FuncCompTransferData
        age={18}                            // number
        name="alpha"                        // string
        isMarry                             // boolean
        firend={['beta', 'omega']}          // array
        private={{                          // object
            play: 'game',
            eat: 'apple'
        }}
        other={<div>any_thing</div>}        // other
    />;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### class_component

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 类组件
 *
 *
 * 1) 必须继承 React.Component
 *
 * 2) 必须提供 return render(); 用于渲染组件
 */

const clsCmp = <MyClassComp/>;

console.log('[class_component]', clsCmp);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 类组件的属性
 *
 *
 * 属性会作为一个对象的属性，传递作为 "构造函数的参数"
 */


/** transfer_data **/

const clsCmpTfDd1 = <ClassCompTransferData num={17}/>;                  // 大括号 传递 数字类型数据
const clsCmpTfDd2 = <ClassCompTransferData num="18"/>;                  // 双引号 传递 字符串类型数据
const clsCmpTfDd3 =
    <ClassCompTransferData
        age={18}                            // number
        name="alpha"                        // string
        isMarry                             // boolean
        firend={['beta', 'omega']}          // array
        private={{                          // object
            play: 'game',
            eat: 'apple'
        }}
        other={<div>any_thing</div>}        // other
    />;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

## component_state of class_component

#### Introduction

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 组件中的数据
 *
 *
 */
 
props: 该数据由调用该组件时从外部传递( 数据使用权归调用者，所属权不属于该组件自身 )，因此组件自身无法改变 props

state: 该数据由组件自身创建，所有权属于该组件自身，因此该组件所有者可以改变 state
       
       - 同文件中，若 FatherCmp 向 SonCmp 传递 state 
         并 Father 使用 this.setState() 改变数据, 则 Father.state 会影响 Son.state
       
       - 但 Son 无权改变 Father.state

 
//-------------------------------------------------------------------------------------------------------------------//


/**
 * 组件状态              // 组件状态仅在组件内有效
 *
 *
 * 仅用于组件内部的数据( 组件可自行维护的数据 )
 *
 * state 本质上是组件的一个属性( 类型为 object )
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 组件状态初始化          // 必须初始化组件状态
 *
 *
 * 1) 在构造器中设置 this.state = {};
 *
 * 2) 直接在类中设置 state = {};               // js_next_syntax: 目前非标准，但可以使用( 利用 babel 编译后 )
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### TickClassComponent

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


class Tick extends Component {


    /** 组件状态初始化-2 **/                   // JS Next 语法: 目前非标准，但可以使用
    // state = {
    //
    //     left: this.props.number
    // };


    /** 组件状态初始化-1 **/
    constructor(props) {

        super(props);

        this.state = {

            left: this.props.number
        };


        this.timer = setInterval(() => {

            /** 直接改变数据，React 无法监控数据变化 **/
            // this.state.left--;

            /**
             * this.setState();
             *
             *
             * 调用 setState() 重新设置组件内的数据状态
             *
             * 会将 "改变后的数据对象" 和 "之前的数据对象" 混合，有相同的 key 则覆盖，并自动触发 "当前组件重新渲染"
             *
             *
             * * setState()，会使 当前数据和之前数据 mixin( 混合 )
             * * Object.assign(curData, origData);
             */

            this.setState({

                left: this.state.left - 1,
            });

            if (this.state.left === 0) {

                clearInterval(this.timer);
            }

        }, 1000);
    }

    render() {

        return (

            <React.Fragment>
                <h3>[ this.props.number ]</h3>
                <div>倒计时剩余时间: {this.props.number}</div>
                <hr/>
                <h3>[ this.state.left ]</h3>
                <div>倒计时剩余时间: {this.state.left}</div>
                <hr/>
            </React.Fragment>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### ComponentStateTransfer

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


class GrandFather extends Component {

    constructor(props) {

        super(props);

        this.state = {

            num: props.num
        };

        this.timer = setInterval(() => {

            this.setState({

                num: this.state.num - 1,
            })

        }, 1000);
    }

    render() {

        return (
            <div>
                <h3>[ Component State Transfer ]</h3>
                <Father num={this.state.num}/>
                <hr/>
            </div>

        );
    }
}

function Father(props) {

    console.log('[Father_ComponentRe-render]');

    return (

        <div>
            [Father]: {props.num}
            <Son num={props.num}/>
        </div>
    )
}

function Son(props) {

    console.log('[Son_ComponentRe-render]');

    return (

        <div>
            [Son]: {props.num}
        </div>
    )
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### setState

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
 * 若改变状态的代码处于某个 HTML 元素的事件中，则其是异步的，否则是同步的
 *
 *
 * @param_01:       // 双向数据仓库
 * 
 *      - {}        // React 会对 "异步setState();" 优化，将多次 setState(); 进行合并
 *                  // ( 将 多次状态 改变完成后，再统一对 state 进行改变，然后触发 render )
 * 
 *      - () => {}  // 该函数的返回结果，会混合(覆盖)之前 state 的结果
 *                  // 该函数是异步执行的
 *
 * @param_02: callback 调用时机为 执行完所有异步队列中的 setState 后调用该回调
 *             该回调是可信的, 可在该回调中重新设置 setState 有效
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * setState(); 对状态的改变，"可能" 是异步的
 *
 *
 */

1) 同步: 若改变状态的代码处于某个 HTML 元素的事件中，则其是异步的，否则是同步的

2) 异步: 若改变状态的代码处于某个 HTML 元素的事件中，则其是异步的，否则是同步的


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 最佳实践


1) 将所有 setState(); 当作异步执行

2) 永远不要信任 setState(); 调用后的状态

3) 若使用 setState(); 改变后的状态，则需使用回调函数 setState(); 的第二个参数

4) 若新的状态要根据之前的状态进行运算，则使用 setState((newState) => ({})) 函数的方式改变

* React 会对 "异步setState();" 优化，将多次 setState(); 进行合并
* ( 将 多次状态 改变完成后，再统一对 state 进行改变，然后触发 render )


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

## component event

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * component_event
 *
 *
 * 组件中通过 props 传递事件时
 * 本质: 将事件作为属性传递进后代组件, 后代组件在合适的时机调用像回调函数一样调用后触发
 * 原生事件: react 在内部以适合的时机已调用
 */


1) 在行内使用 箭头函数传递                             // 箭头函数自动绑定 this

2）在 类函数 中创建函数，在行内调用传递                 // this 指向 undefined

   - 处理方案

   - 1) 使用  bind(); 绑定 this 指向 
   
        - constructor (props) {
            super(props);
            this.handleCustomMethod = this.handleCustomMethod.bind(this);
        }

   - 2) 使用 箭头函数，自动绑定 外层 this               // 推荐使用



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

## component_hooks

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


类组件生命周期:

组件从诞生到销毁经历的过程称为声明周期
React 在组件的声明周期中提供了一系列勾子函数( 类似与事件 )
可以让开发者在函数中注入代码，这些代码会在适当的时候运行


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


旧版: React <  16.8.6


新版: React >= 16.8.6


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### Old lift cycle

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  /* 初始化阶段 */         /* 挂载阶段 */                /* 更新阶段 */                   /* 销毁阶段 */


    初始化阶段            组件即将挂载到页面             属性发生变化  状态发生变化            组件即将被销毁     
  初始化属性和状态        componentWillMount                                          componentWillUnmount
   constructor                                     接收到新的属性值
                                               componentWillReceiveProps


                         组件渲染虚拟DOM           是否应该重新渲染组件，性能优化点
                            render                  true          false->end
                                                                 
                                                                                                       
                        虚拟DOM已挂载到页面              即将重新渲染组件
                           成为真实DOM                componentWillUpdata
                        componentDidMount              
                                                        组件渲染虚拟DOM
                                                           render
                               
                                
                                                 虚拟DOM已重新挂载到页面成为真实DOM
                                                      componentDidUpdate



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### New lift cycle

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  /* 初始化阶段 */                  /* 挂载阶段 */              /* 更新阶段 */          /* 销毁阶段 */
                                                                             
                                                                                
    初始化阶段                          从属性中获取新的状态                              组件即将被销毁     
  初始化属性和状态                  static getDerivedStateFormProps                  componentWillUnmount

   constructor                                     
                                                 是否应该重新渲染组件，性能优化点
                                                    shouldComponentUpdate
                                                   true           false->end


                                          组件渲染虚拟DOM
                                             render


                         虚拟DOM已挂载到页面              获取更新前的快照
                            成为真实DOM              getSnapshotBeforeUpdate
                         componentDidMount              

                                                        组件渲染虚拟DOM
                                                           render

                                
                                                 虚拟DOM已重新挂载到页面成为真实DOM
                                                        componentDidUp



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

## form

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * form_component
 * 
 * 
 * 表单组件，默认是非受控组件，一旦设置了表单组件的 value 属性
 * 则该表单组件变为受控组件( 单选和多选需设置 checked )
 */


//-------------------------------------------------------------------------------------------------------------------//


受控组件:

组件的使用者，有能力完全控制该组件的行为和内容，通常情况下，受控组件往往没有自身的状态，其内容完全受到属性的控制


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


非受控组件: 

组件的使用者，没有能力控制该组件的行为和内容，组件的行为和内容完全自行控制


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```