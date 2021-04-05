///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState} from "react";
import {UseEffectOfReturn} from "./UseEffectOfReturn";


//-------------------------------------------------------------------------------------------------------------------//

function TestUseEffectOfReturn(props) {

    const [point, setPoint] = useState({x: 0, y: 0}), [visible, setVisible] = useState(true),
        handleChangePointX = (e) => {

            setPoint({
                ...point,
                x: Number(e.target.value)
            });

        }, handleChangePointY = (e) => {

            setPoint({
                ...point,
                y: Number(e.target.value)
            });

        };

    return (

        <React.Fragment>
            {
                visible && (

                    <div
                        className="control"
                        style={{
                            marginTop: '160px'
                        }}
                    >
                        <h3>useEffect of return</h3>
                        x: <input type="text" value={point.x} onChange={handleChangePointX}/>
                        y: <input type="text" value={point.y} onChange={handleChangePointY}/>
                        <UseEffectOfReturn
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

    TestUseEffectOfReturn
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////