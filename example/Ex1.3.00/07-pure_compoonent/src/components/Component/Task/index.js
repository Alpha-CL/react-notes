///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import PropTypes from "prop-types";
import "./index.css";
import {ObjectEqual} from "../../../utils/helper";

//-------------------------------------------------------------------------------------------------------------------//


/**
 * PureComponent extends Component              // 纯组件: 用于避免不必要的渲染( 判断是否要重新渲染 render(); )
 *
 *
 * PureComponent 是一个组件，若组件继承自该组件，则该组件的 shouldComponentUpdata 会进行优化
 *
 ** 若要一个组件的属性和状态，都没有发生变化，则没有必要冲洗渲染该组件
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


class Task extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        inFinish: PropTypes.bool.isRequired,
    };

    static defaultProps = {
        inFinish: false
    };

    constructor(props) {

        super(props);

        this.state = {};
    }


    // PureComponent 实现原理
    //
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //
    //     return !(ObjectEqual(this.props, nextProps) && ObjectEqual(this.state, nextState));
    // }


    render() {

        console.log("[Component.Task.render]");

        return (

            <React.Fragment>
                <li
                    className={this.props.isFinish ? "finish" : ""}
                >{this.props.name}</li>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Task
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
