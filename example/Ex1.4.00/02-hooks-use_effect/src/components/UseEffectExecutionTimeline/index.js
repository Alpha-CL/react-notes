///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useEffect, useState} from "react";


//-------------------------------------------------------------------------------------------------------------------//


function UseEffectExecutionTimeline(props) {


    /** 后运行: useEffect 异步执行 **/
    useEffect(() => {

            console.log('[副作用函数，仅挂载时运行一次]');

            return () => {

                console.log('[清理函数，仅卸载时运行一次]');
            };

        },
        /** 设置依赖数据: 若该数据与上一次数据相同，则不重新运行 副作用函数( 原理: Object.is(); ) **/
        []
    );

    /** 先运行 **/
    console.log('[渲染组件]');

    const [, ForceUpdate] = useState({});

    return (

        <React.Fragment>
            <h3>UseEffect Execution Timeline</h3>
            <button
                onClick={ForceUpdate}
            >Force Update
            </button>
            <br/>
        </React.Fragment>
    );
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    UseEffectExecutionTimeline
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////