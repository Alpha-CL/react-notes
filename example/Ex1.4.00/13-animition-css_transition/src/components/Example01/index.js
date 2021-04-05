///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";
import {CSSTransition} from "react-transition-group";
import "./index.css";
import "animation.css";


//-------------------------------------------------------------------------------------------------------------------//


function Comp01({ stateDes, duration }) {

    return (
        <CSSTransition
            in={stateDes}
            timeout={duration}

            appear={true}
            mountOnEnter={true}
        >
            <h1 className="title">Compoent_01</h1>
        </CSSTransition>
    );
}

function Comp02({ stateDes, duration }) {

    return (
        <CSSTransition
            in={stateDes}
            timeout={duration}

            mountOnEnter={true}
        >
            <h1 className="title">Compoent_02</h1>
        </CSSTransition>
    );
}

function Example01(props) {

    const [stateDes, setStateDes] = useState(true),
        handleSetStateDes = () => {
            setStateDes(!stateDes);
        };

    return (

        <React.Fragment>
            <div className="container">

                <div className="comp-container">
                    <Comp01
                        visible={stateDes}
                        stateDes={stateDes}
                        duration={1000}
                    />
                    <Comp02
                        visible={!stateDes}
                        stateDes={!stateDes}
                        duration={1000}
                    />
                </div>

                {/**
                    效率相对较低: 改动了 dom 结构
                    {stateDes ? <Comp01/> : <Comp02/>}
                 **/}

                <button
                    onClick={handleSetStateDes}
                >Show / Hide</button>
            </div>
        </React.Fragment>
    );
}


Example01.defaultProps = {

};


Example01.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Example01
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////