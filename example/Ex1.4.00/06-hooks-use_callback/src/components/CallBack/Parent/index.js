///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect} from "react";
import PropTypes from "prop-types";
import {Child} from "../Child";


//-------------------------------------------------------------------------------------------------------------------//


function Parent(props) {

    console.log('[parent-render]');

    const [txt, setTxt] = useState('unchanged');
    const [n, setN] = useState(0);

    return (

        <React.Fragment>
            <p>
                每次改变 input.value 都会触发 Child组件 的重新渲染( 即便是设置相同的 text.value )<br/>
                因为 Child 组件每次传递的 onClick 的地址都是一个新的引用地址
            </p>
            <input
                type="number"
                value={n}
                onChange={(e)=>{
                    setN(e.target.value);
                }}
            />

            <p>
                点击按钮传递相同的 text.value 并不会触发 Child 组件重新渲染 <br/>
                因为 useState 会以 Object.is(); 对比之前的值和传入的值是否发生改变，若无改变，则不重新渲染
            </p>
            {/** onClick 的引用地址每次渲染都发生改变，导致 input 触发页面渲染后，子组件也跟着重新渲染 **/}

            <Child
                text={txt}
                onClick={() => {
                    setTxt('unchanged');
                }}
            />
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