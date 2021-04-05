///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect} from "react";
import PropTypes from "prop-types";
import {Problem} from "./Problem";
import {UseRef} from "./UseRef";
import {SetInterval} from "./SetInterval";


//-------------------------------------------------------------------------------------------------------------------//


function Timer(props) {

    return (

        <React.Fragment>
            <h3>
                同一组件内，多个计时器共用一个 timer <br/>
                会导致 其中一个 计时器卸载时，清理掉 timer <br/>
                从而导致 剩余计时器无法使用 timer
            </h3>
            <Problem/>
            <hr/>
            <h3>
                const timer = useRef(); <br/>
                每个计时器 使用单独固定的引用地址 <br/>
            </h3>
            <UseRef/>
            <hr/>
            <h3>
                <b>同一函数节点利用 useRef(); 绑定固定数据引用</b> <br/>
                利用 useRef(); 返回的固定引用地址 <br/>
                可以在 useEffect(); 的计时器中使用 <br/>
                ( 解决 异步调用 useEffect 时，未绑定变量引用，导致变量复用，
                useeffect 会将多次改变加入执行队列，在 UI界面渲染后 依次运行 )
            </h3>
            <SetInterval/>
            <hr/>
        </React.Fragment>
    );
}


Timer.defaultProps = {

};


Timer.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Timer
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////