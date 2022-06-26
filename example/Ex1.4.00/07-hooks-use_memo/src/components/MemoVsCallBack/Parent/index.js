///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect,useCallback,useMemo} from "react";
import PropTypes from "prop-types";
import {Child} from "../Child";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * useCallBack(fn, diffArr): fnAddress;
 *
 *
 * @fn: 指定函数
 * @diffArr: 依赖对比项数据
 *
 ** return: 根据依赖项对比后返回相对稳定的函数地址，若依赖项未发生改变则不会改变函数地
 */


/**
 * useMemo(fn, diffArr): fnAddress;             // 用于保持需要经过高开销计算后才能获取的值
 *
 *
 * @fn: 必须有返回值( 监测返回的任意数据 )
 * @diffArr: 依赖对比项数据
 *
 ** return: 依赖项根据 fn 的返回值对比，若依赖项未发生改变则
 */


/**
 * useCallBack(); vs useMemo();
 *
 *
 * @useCallback: 仅针对函数，返回相对稳定的地址
 *
 * @useMemo: 面向任何类型，返回相对稳定的地址
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function Parent(props) {

    console.log('[parent-render]');

    const [txt, setTxt] = useState('unchanged');
    const [n, setN] = useState(0);

    /** useMemo(fn: any, diffArr): anyAdree;**/
    const handleClick = useMemo(() => {

        /** useMemo 可以返回任意类型的值 **/
        return () => {

            setTxt('unchanged');                    //
        };

    }, [1]);

    /** useCallback(fn, diffArr): fnAdree; **/
    // const handleClick = useCallback(() => {
    //
    //     setTxt(Math.random());
    //
    // }, []);

    return (

        <React.Fragment>
            <input
                type="number"
                value={n}
                onChange={(e)=>{
                    setN(e.target.value);
                }}
            />

            {/** onClick 的引用地址每次渲染都发生改变，导致 input 触发页面渲染后，子组件也跟着重新渲染 **/}
            {/** useCallback(fn, diffArr); 会根据依赖项对比后返回相对稳定的函数地址，若依赖项未发生改变则不会改变函数地址 **/}
            {/**  **/}

            {/*<p>useCallback(fn, diffArr): fnAddre; 会根据依赖项对比后返回相对稳定的函数地址，若依赖项未发生改变则不会改变函数地址</p>*/}
            <Child
                text={txt}
                onClick={handleClick}
            />
            {/*<Child
                text={txt}
                onClick={() => {
                    setTxt('unchanged');
                }}
            />*/}
        </React.Fragment>
    );
}


Parent.defaultProps = {

};


Parent.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Parent
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////