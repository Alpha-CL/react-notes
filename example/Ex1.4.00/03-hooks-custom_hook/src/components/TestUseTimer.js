///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect} from "react";
import PropTypes from "prop-types";
import {useTimer} from "./myHooks/useTimer";

//-------------------------------------------------------------------------------------------------------------------//


function Test() {

    useTimer(() => {

        console.log('[effect fn]')

    }, 1000);

    return <div>Test Component</div>
}

function TestUseTimer(props) {

    const [visible, setVisible] = useState(true);

    return (

        <React.Fragment>

            {
                visible && <Test/>
            }

            <button
                onClick={() => {
                    setVisible(!visible)
                }}
            >Show / Hide</button>

        </React.Fragment>
    );
}


TestUseTimer.defaultProps = {

};


TestUseTimer.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    TestUseTimer
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////