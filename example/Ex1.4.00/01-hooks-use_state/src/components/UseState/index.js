///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent, useState} from "react";
import "./index.css";


//-------------------------------------------------------------------------------------------------------------------//


/**
 **********************************************************************************************************************
 *
 *
 * [ first invoking useState ]      // 第 1 次调用
 *
 *
 * 1) 第 1 次调用 useState(defVal);
 *
 * 2) 检查该节点的 stateTabl 是否为空
 *
 *      - empty:
 *
 *          1) 使用 defVal 创建 stateArr[defVal, setDefValFn]
 *
 *          2) 将该 stateArr[1] 加入到 stateTable
 *
 *
 **********************************************************************************************************************
 *
 *
 * [ N invoking useState ]          // 第 N 次调用
 *
 *
 * 1) 第 N 次调用 useState(defVal);
 *
 * 2 检查该节点的 stateTable 是否存在 stateArr[N]( 下标为 N 的 状态数据 )
 *
 *      - not exist
 *
 *          1) 使用 defVal 创建 stateArr[defVal, setDefValFn]
 *
 *          2) 将该 stateArr[N] 加入到 stateTable
 *
 *      - exist
 *
 *          1) 忽略 defVal
 *
 *          2) 执行 stateTable 中下标为 N 的 stateArr[N] 中的 setDefValFn(); 并返回结果
 *
 *
 **********************************************************************************************************************
 *
 *
 ** 注意事项:
 *
 ** 1) useState 建议书写在 函数的起始位置( 便于阅读 )
 *
 ** 2) useState 严禁书写在 代码块( 判断，循环 )中
 *     ( 判断或循环后，可能会导致，stateTable 中 state 下标与之前的不对应 )
 *
 ** 3) useState: stateArr[1]; 返回的函数引用地址不变( 节约内存空间 )
 *
 ** 4) 使用函数 stateArr[1](newStateVal); 改变数据时，若 数据比对和之前的数据完全相同
 *     ( 使用 Object.is(); 比较 )，则不会重新渲染( 性能优化 )
 *
 ** 5) useState 会重新改变 stateTable.stateArr[N] 中对应 "数据引用"，而非混合之前的数据
 *     ( clsComp.setState(); 会混合之前的数据 )
 *
 ** 6) 强制重新渲染组件
 *
 **    - fnComp: 利用 const [, forceUpdate] = useState({});
 *       ( 利用 forceUpdate({}); 实现强制刷新 )
 *       ( 原理 Object.is(oldObj, newObj); 两次传入的虽然都是空对象，但是对象的引用地址不同 )
 *
 *     - clsComp: forceUpdate();
 *
 ** 7) 与类组件相同，改变 state 可能是异步的( 在DOM事件中 )，多个 state 变换会加入到执行队列，在当前事件运行后执行该执行队列
 *     ( prevState 为变量时，不可以信任，因为在当前事件未运行完之前改变 prevState, 可能处于 同一个值的覆盖 )
 *     ( 应该使用 callback，setState(callback); 在当前事件运行后，会依次执行 callback，原理: 闭包解决异步时，变量复用 )
 *
 *
 **********************************************************************************************************************
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** useState(); 必须在组件的函数体中使用 **/
// useState(0);

function UseState(props) {

    /**
     * useState(defVal: any): [prevState: any, setState: fn];           // 函数组件中可同时存在多个 state
     *
     *
     * @defVal: 设置 state 的初始默认值
     * @prevState: state 的上一次的值
     * @setState: 可以改变 prevState 的方法
     *
     * return: stateArr;
     */

        // const stateArr = useState(0),           // 设置 sttate 的默认值，并接收 状态数组
        //     prevState = stateArr[0],            // 获取状态的上一次的值
        //     setState = stateArr[1];             // 获取一个可以改变状态的函数

        // console.log(stateArr);


    const [prevState, setState] = useState(0),
        handleAdd = () => {

            setState(prevState + 1);
        },
        handleLess = () => {

            setState(prevState - 1);
        };

    const [visible, setVisible] = useState(true),
        handleVisible = () => setVisible(!visible);

    const [, forceUpdate] = useState({}),
        handleForceUpdate = () => forceUpdate({});

    const [prevNum, setNum] = useState(0),
        handleDoubleAdd = () => {

            /** React 会将多个传入 state 加入执行队列，在 当前事件运行完成后统一执行
             * ( 因此 此时的 prevNum 为同一个值 )**/
            // setNum(prevNum + 1);
            // setNum(prevNum + 1);

            /** setState(callback); 会将多个传入的 "回调函数" 加入执行队列，会在当前事件完成后统一执行 **/
            setNum(prevNum => prevNum + 1);
            setNum(prevNum => prevNum + 1);

        }, handleDoubleLess = () => {

            setNum(prevNum - 1);
            setNum(prevNum - 1);
        };

    /** useState(defVal); defVal: 只能传入单一数据，不能传入复杂数据
     * 因为 useState 会将设置 stateArr 设置为新的引用( 而非覆盖或混合之前的数据 )
     * ( 与类组件的 setState 不同，clsComp.setState(); 会混合之前的数据 )**/
    // const [prevObj, setObj] = useState({
    //         x: 1,
    //         y: 2
    //     }),
    //     handleObjAdd = () => {
    //
    //         setObj({
    //             ...prevObj,
    //             x: prevObj.x + 1
    //         });
    //     }, handleObjLess = () => {
    //
    //         setObj({
    //             ...prevObj,
    //             x: prevObj.x - 1
    //         });
    //     };


    console.log('[render]');

    return (

        <React.Fragment>
            <div
                className="section"
            >
                <div className="section-hd">
                    <h3>add / less</h3>
                </div>
                <div className="section-bd"
                     style={{
                         display: visible ? 'block' : 'none'
                     }}
                >
                    <button
                        onClick={handleLess}
                    >-
                    </button>
                    <span> {prevState} </span>
                    <button
                        onClick={handleAdd}
                    >+
                    </button>
                </div>
                <div className="section-ft">
                    <button onClick={handleVisible}>Show / Hide</button>
                </div>
            </div>
            <div className="section">
                <div className="section-hd">
                    <h3>doube add / single less</h3>
                </div>
                <div className="section-bd">
                    <button
                        onClick={handleDoubleLess}
                    >-
                    </button>
                    <span> {prevNum} </span>
                    <button
                        onClick={handleDoubleAdd}
                    >+
                    </button>

                </div>
                <div className="section-ft">

                </div>
            </div>
            {/* <div className="section">
                <div className="section-hd">
                </div>
                <div className="section-bd">
                    <button
                        onClick={handleObjLess}
                    >-
                    </button>
                    <span> {prevObj} </span>
                    <button
                        onClick={handleObjAdd}
                    >+
                    </button>
                </div>
                <div className="section-ft">
                </div>
            </div>*/}
            <div className="section">
                <div className="section-hd">

                </div>
                <div className="section-bd">

                </div>
                <div className="section-ft">
                    <button
                        onClick={handleForceUpdate}
                    >Force Rerender
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
}


class ClsUseState extends PureComponent {

    constructor(props) {

        super(props);

        this.state = {

            num: 0
        };
    }

    handleAdd() {

        this.setState({

            num: this.state.num + 1
        })
    }

    handleLess() {

        this.setState({

            num: this.state.num - 1
        })
    }

    handleForceRerender() {

        /** 强制重新渲染: 不会运行 shouldComponentUpdate(); **/
        this.forceUpdate();
    }

    render() {

        return (

            <React.Fragment>
                <button
                    onClick={this.handleAdd}
                >-
                </button>
                <span>{this.state.num}</span>
                <button
                    onClick={this.handleLess}
                >+
                </button>

                <button
                    onClick={this.handleForceRerender}
                >强制重新渲染
                </button>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    UseState
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////