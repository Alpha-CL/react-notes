///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";
import { Transition } from 'react-transition-group';


//-------------------------------------------------------------------------------------------------------------------//


/**
 * <Transition
 *      in={inprop: bool}
 *      timeout={duration: num/ms}
 * >
 *
 *     // in: 控制组件触发 (enter/exite)_state
 *     //       - true: entering -> entered
 *     //       - false: exting -> exted
 *
 *     {state => {
 *
 *         return (
 *
 *         );
 *     }}
 *
 * <Transition>
 *
 * onEnter(); ----> entering ---> onEntering(); ---> entered ---> onEntered();
 *
 *            addEndListener();               addEndListener();              // 当指定DOM 正在运行动画时执行指定Fn
 *
 * onExit(); ---> exiting ---> onExiting();---> exited ---> onExited();
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//



const duration = 300,
    defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    },
    transitionStyles = {
        entering: { opacity: 1 },               /** 进入 **/
        entered:  { opacity: 1 },               /** 已进入 **/
        exiting:  { opacity: 0 },               /** 退出 **/
        exited:  { opacity: 0 },                /** 已退出 **/
};


// const Fade = ({ in: inProp }) => (
//
//     <Transition in={inProp} timeout={duration}>
//         {state => (
//             <div style={{
//                 ...defaultStyle,
//                 ...transitionStyles[state]
//             }}>
//                 I'm a fade Transition!
//             </div>
//         )}
//     </Transition>
// );


function Transition(props) {

    const [inProp, setInProp] = useState(false);

    return (

        <React.Fragment>
            <Transition
                in={inProp}
                mountOnEnter={false}                // 是否保持组件持久化挂载
                unmountOnExit={false}               // 是否在 exted 后卸载组件
                appear={false}                      // 是否初次渲染就执行动画效果
                enter={true}                        // 是否允许进入 state: entering -> entered
                exit={true}                         // 是和允许进入 state: exiting -> exited
                timeout={duration}                  // 动画延迟时间
            >
                {state => {

                    console.log(state);

                    return (
                        // children
                        <React.Fragment>
                            <div>state: {state}</div>
                            <br/>
                            <div style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}>
                                <h3>I'm a fade Transition!</h3>
                            </div>
                            <br/>
                        </React.Fragment>
                    );
                }}
            </Transition>
            <button onClick={() => setInProp(!inProp)}>
                Click to toggle
            </button>
        </React.Fragment>
    );
}


Transition.defaultProps = {

};

Transition.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//




//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Transition
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////