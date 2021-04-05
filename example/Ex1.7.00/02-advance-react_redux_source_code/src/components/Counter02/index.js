///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";

import store from "../../store";
import {connect} from "../../react-redux";
import {increase, decrease, asyncDecrease, asyncIncrease} from "../../store/actions";

import {bindActionCreators} from "redux";


//-------------------------------------------------------------------------------------------------------------------//


/**
 ** 结构模拟 <ContainerCmp> <PresentationalCmp/> </ContainerCmp>
 ** 实际结构 <PresentationalCmp ownProp={'组件外部传递的普通属性，最终仍然会作为普通属性传递'} />
 *
 *
 ** 1) connect(?mapStateToProps, ?(mapDispatchToProps ｜ creators: obj) ): hoc;
 ** 2) hoc(PresentationalCmp);
 *
 *
 * @mapStateToProps(state, ownProps):
 *      @state: 整个仓库的数据
 *      @ownProps: 组件外部传递的普通数据
 *
 * @mapDispatchToProps(dispatch): 将 store.dispatch 作为参数传递
 *      @dispatch: store.dispatch
 * @creators: 当事件发生时，会根据传入对象事件名调用 dispatch 处理相对应的 action
 *            ( connect 仅根据 creator 中事件名对应的 action 触发，无法做其他复杂处理 )
 *
 * @hoc:
 *      @PresentationalCmp
 *
 *
 ** conect(mapStateToProps);        // 不传递第二个参数时，则可以接受到 props.dispatch
 *                                  // ( 不推荐使用 )
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** presentational_compoonent **/
function Counter(props) {

    return (

        <React.Fragment>
            <div className='counter_warp'>
                <div className='count-hd'>
                    <h3>count: {props.number}</h3>
                </div>
                <div className='count-bd'>
                    <button onClick={props.onAsyncDecrease}>asyncDecrease</button>
                    <button onClick={props.onDecrease}>decrease</button>
                    <button onClick={props.onIncrease}>increase</button>
                    <button onClick={props.onAsyncIncrease}>asyncIncrease</button>
                </div>
            </div>
        </React.Fragment>
    );
}


/** container_component **/
// 3.0
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// connect 仅根据 creator 中事件名对应的 action 触发，无法做其他复杂处理
// export default connect(mapStateToProps, creaotrs)(Counter);


/** 映射当前组件所需的数据 **/
function mapStateToProps(state) {

    return {
        number: state.count
    };
}

/** 映射事件处理函数 **/
function mapDispatchToProps(dispatch) {

    return {
        onAsyncDecrease() {
            dispatch(asyncDecrease());
        },
        onDecrease() {
            dispatch(decrease());
        },
        onIncrease() {
            dispatch(increase());
        },
        onAsyncIncrease() {
            dispatch(asyncIncrease());
        }
    };
}


//-------------------------------------------------------------------------------------------------------------------//


export {

    Counter
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////