///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";
import {CSSTransition} from "react-transition-group";
import "./index.css";

//-------------------------------------------------------------------------------------------------------------------//


/**
 * <CSSTransition
 *
 *      in={stateDes}
 **     classNames="custom_prev"            // 自定义 "类前缀" custom_prev-*
 **     classNames= {{
 *
 *          appear: 'my-appear',            // 首次渲染时需展示的类样式
 *          appearActive: 'my-active-appear',
 *          appearDone: 'my-done-appear',
 *
 *          enter: 'my-enter',
 *          enterActive: 'my-active-enter',
 *          enterDone: 'my-done-enter',
 *
 *          exit: 'my-exit',
 *          exitActive: 'my-active-exit',
 *          exitDone: 'my-done-exit',
 *      }}
 * >
 *
 *      <DomRoot class="">
 *
 *          ...children
 *
 *      </DomRoot>
 *
 * </CSSTransition>
 *
 *
 ** stateDes: enter
 *
 * .custom_prev-enter                       // 初始帧样式
 * .custom_prev-enter-active                // 下一帧样式
 * .custom_prev-enter-done                  // 结束帧样式
 *
 *
 ** stateDes: exit
 *
 * .custom_prev-exit                        // 初始帧样式
 * .custom_prev-exit-active                 // 下一帧样式
 * .custom_prev-exit-done                   // 结束帧样式
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


const duration = 300;

function CssTransition(props) {

    const [stateDes, setStateDes] = useState(false);

    return (

        <React.Fragment>
            <CSSTransition
                in={stateDes}
                timeout={200}
                classNames="custom_prev"            // 自定义 "类前缀" custom_prev-*
            >
                <React.Fragment>
                    <h3>
                        {"I'll receive [custom_prev-*] classes"}
                    </h3>
                    <br/>
                </React.Fragment>
            </CSSTransition>
            <button
                type="button"
                onClick={() => setStateDes(!stateDes)}
            >
                Click to Toggle
            </button>
        </React.Fragment>
    );
}


CssTransition.defaultProps = {

};


CssTransition.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    CssTransition
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////