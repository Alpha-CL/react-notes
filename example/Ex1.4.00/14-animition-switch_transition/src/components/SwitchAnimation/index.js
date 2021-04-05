///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";
import {SwitchTransition, CSSTransition} from "react-transition-group";
import "./index.css"


//-------------------------------------------------------------------------------------------------------------------//


/**
 * <SwitchTransition
 **     mode={
 **         "out-in"                    // exit -> exit-active -> enter -> enter-active -> enter-done
 **         "in-out"                    // enter -> enter-active -> exit -> exit-active -> exit-done
 *      }
 *      appear={true}                   // apper -> appear-active -> appear-done
 * >
 *     <CSSTransition
 *          timeout={duration}
 **         key={}                      // 利用 key 控制 reactDom 是否重新渲染
 *                                      // 因为给 reactDom 绑定了 key 所以页面重绘后 会对比寻找之前 key所对应的元素
 *                                      // 若没有找到，则重新创建该节点( 绑定 key 后不会就近复用节点 )
 *     >
 *      {children}
 *     </CSSTransition>
 * </SwitchTransition>
 *
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function SwitchAnimation(props) {

    const [stateDes, setStateDes] = useState(true),
        handleSetStateDes = () => {
            setStateDes(!stateDes);
        };

    return (

        <React.Fragment>
            <SwitchTransition
                mode="out-in"
            >
                <CSSTransition
                    timeout={1000}
                    key={stateDes}
                >
                    <h1>{stateDes ? 'Title' : 'Another Title'}</h1>
                </CSSTransition>
            </SwitchTransition>
            <button
                onClick={handleSetStateDes}
            >Switch State</button>
        </React.Fragment>
    );
}


SwitchAnimation.defaultProps = {

};


SwitchAnimation.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    SwitchAnimation
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////