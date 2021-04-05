///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * useEffect(); vs useLayoutEffect();               // 用法相同
 *
 *
 *                        componentDidMount
 *                        componentDidUpdate
 *
 ** 执行时间线  当前页面 ---> dom改动 执行队列 ---> 浏览器重绘页面 ---> 用户看到页面重绘页面
 *
 *                         useLayoutEffect                          useEffect
 *                        ( 可能会阻塞浏览器 )                     ( 可能会造成屏幕闪烁 )
 *
 * @useEffect: 浏览器渲染完成后，用户看到重绘页面
 * @useLayoutEffect: 完成 dom改动，浏览器重绘之前
 *
 *
 ** 建议使用 useEffect(); 因为不会阻塞浏览器，更好的用户体验
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function Effect(props) {

    const [n, setN] = useState(0),
        handleSetN = (e) => {
            setN(n + 1);
        },
        refH1 = useRef();

    useEffect(() => {

        console.log('[useEffect: 不会阻塞浏览器，触发在页面重绘后]', n);

        refH1.current.innerText = '[useEffect 不会阻塞浏览器]';

        return () => {

        };

    },[n]);

    useLayoutEffect(() => {

        console.log('[useLayoutEffect: 会阻塞浏览器，触发在完成 dom 更改，浏览器重绘之前]', n);

        refH1.current.innerText = '[useLayoutEffect 会阻塞浏览器]';

        return () => {

        };

    }, [n]);

    return (

        <React.Fragment>
            <h1 ref={refH1}>{n}</h1>
            <button
                onClick={handleSetN}
            >add</button>
        </React.Fragment>
    );
}


Effect.defaultProps = {

};


Effect.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Effect
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////