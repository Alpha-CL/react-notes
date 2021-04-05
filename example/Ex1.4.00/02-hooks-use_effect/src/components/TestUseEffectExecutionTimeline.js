///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState} from "react";
import {UseEffectExecutionTimeline} from "./UseEffectExecutionTimeline";

//-------------------------------------------------------------------------------------------------------------------//

const refX = React.createRef(),
    refY = React.createRef();


function TestUseEffectExecutionTimeline(props) {

    const [point, setPoint] = useState({
            x: 100,
            y: 100
        }),
        [visible, setVisible] = useState(true),
        handleClick = (e) => {
            setPoint({
                x: Number(refX.current.value),
                y: Number(refY.current.value)
            })
        };

    return (

        <React.Fragment>
            {
                visible && (<UseEffectExecutionTimeline/>)
            }
            <br/>
            {/** 组件隐藏 后 计时器依然存在并运行 **/}
            <button
                onClick={() => {

                    setVisible(!visible);
                }}
            >Show / Hide
            </button>
        </React.Fragment>
    );
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    TestUseEffectExecutionTimeline
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////