///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState} from "react";
import {UseEffectOfSecondParam} from "./UseEffectOfSecondParam";

//-------------------------------------------------------------------------------------------------------------------//


const refX = React.createRef(),
    refY = React.createRef();


function TestUseEffectOfSecondParam(props) {

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
                visible && (

                    <div
                        className="control"
                        style={{
                            // marginTop: '160px'
                        }}
                    >
                        <h3>useEffect of second-param</h3>
                        x:
                        <input
                            ref={refX}
                            type="text"
                        />
                        y:
                        <input
                            ref={refY}
                            type="text"
                        />
                        <button
                            onClick={handleClick}
                        >确定
                        </button>
                        <UseEffectOfSecondParam
                            tarLeft={point.x}
                            tarTop={point.y}
                            duartion={10}
                        />
                    </div>
                )
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

    TestUseEffectOfSecondParam
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////