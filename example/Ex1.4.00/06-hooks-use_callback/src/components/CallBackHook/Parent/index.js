///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect,useCallback} from "react";
import PropTypes from "prop-types";
import {Child} from "../Child";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * useCallBack(fu nc, diffArr): fnAddress;
 *
 *
 * @func:       指定回调函数
 * @diffArr:    依赖对比项数据
 *
 ** return:     根据依赖项对比后返回相对稳定的函数地址，若依赖项未发生改变则不会改变函数地
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function Parent(props) {

    console.log('[parent-render]');

    const [txt, setTxt] = useState('unchanged');
    const [n, setN] = useState(0);

    const handleClick = useCallback(() => {

        setTxt(Math.random());

    }, []);

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
            {/** useCallback(funcAddr, diffArr); 会根据依赖项对比后返回相对稳定的函数地址，若依赖项未发生改变则不会改变函数地址 **/}
            <p>useCallback(funcAddr, diffArr): funcAddr; 会根据依赖项对比后返回相对稳定的函数地址，若依赖项未发生改变则不会改变函数地址</p>
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