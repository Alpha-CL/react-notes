///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component,PureComponent} from "react";
import PropTypes from "prop-types";
import "./index.css";
import {ObjectEqual} from "../../../utils/helper";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * PureComponent extends Component                // 纯组件: 用于避免不必要的渲染( 判断是否要重新渲染 render(); )
 *
 *
 * PureComponent 是一个组件，若组件继承自该组件，则该组件的 shouldComponentUpdate 会进行优化
 *
 ** 若一个组件的属性和状态，都没有发生变化，则没有必要重新渲染该组件
 */

/**
 * 注意事项
 *
 *
 * 1) PureComponent 是 "浅比较"( 节省效率 )
 *
 *     - Immutable:         不可变的对象，永远创建新的状态覆盖之前的状态，不要改动之前的状态
 *                          ( 引用地址相同，有时会造成浅比较对象地址相同则会被优化, 则会导致被优化无法重新渲染 )
 *
 *     - Immutable.js:      用于制作不可变对象
 *
 * 2) 函数组件使用 HOC => React.memo(Comp);
 *
 *     - React 提供的高阶组件，用于解决函数组件浅比较优化问题
 */

// class PureComponent extends Component {
//
//
//    function ObjectEqual(obj1, obj2) {
//
//        for (let prop in obj1) {
//
//            if (!Object.is(obj1[prop], obj2[[prop]])) {
//
//                return false;
//            }
//        }
//
//        return true;
//    }
//
//    shouldComponentUpdate(nextProps, nextState, nextContext) {
//
//        return !(ObjectEqual(this.props, nextProps) && ObjectEqual(this.state, nextState));
//    }
//
//
//    render() {
//
//    }
// }


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** 模拟 React.memo 原理 **/
function memo(FuncComp) {

    return class Memo extends PureComponent{

        render() {

            return (

                <React.Fragment>
                    {FuncComp(this.props)}
                </React.Fragment>
            );
        }
    }
}


function Task(props) {

    console.log("[PureComponent.Task.render]");

    return (

        <React.Fragment>
            <li
                className={props.isFinish ? "finish" : ""}
            >{props.name}</li>
        </React.Fragment>
    );
}

Task.propTypes ={
    name: PropTypes.string.isRequired,
    inFinish: PropTypes.bool.isRequired,
};

Task.defaultProps = {
    inFinish: false
};

const PureTask = React.memo(Task);


// class Task extends PureComponent {
//
//     static propTypes = {
//         name: PropTypes.string.isRequired,
//         inFinish: PropTypes.bool.isRequired,
//     };
//
//     static defaultProps = {
//         inFinish: false
//     };
//
//     constructor(props) {
//
//         super(props);
//
//         this.state = {};
//     }
//
//
//     // PureComponent 实现原理
//     //
//     // shouldComponentUpdate(nextProps, nextState, nextContext) {
//     //
//     //     return !(ObjectEqual(this.props, nextProps) && ObjectEqual(this.state, nextState));
//     // }
//
//
//     render() {
//
//         console.log("[PureComponent.Task.render]");
//
//         return (
//
//             <React.Fragment>
//                 <li
//                     className={this.props.isFinish ? "finish" : ""}
//                 >{this.props.name}</li>
//             </React.Fragment>
//         );
//     }
// }


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Task,
    PureTask
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
