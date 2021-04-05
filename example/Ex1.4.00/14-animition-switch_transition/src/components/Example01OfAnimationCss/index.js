///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";
import {SwitchTransition, CSSTransition} from "react-transition-group";
import "./index.css";
import "animate.css";


//-------------------------------------------------------------------------------------------------------------------//


function Example01OfAnimationCss(props) {

    const [stateDes, setStateDes] = useState(true),
        handleSetStateDes = () => {
            setStateDes(!stateDes);
        };

    return (

        <React.Fragment>
            <SwitchTransition
                mode="out-in"               // mode_default
            >
                <CSSTransition
                    timeout={1000}
                    key={stateDes}
                    classNames={{
                        exit: 'animate__bounceOut',
                        enter: 'animate__bounceIn'
                    }}
                    appear={true}
                >
                    <h1
                        className="animate__animated animate__fast"
                    >{stateDes ? 'Title' : 'Another Title'}</h1>
                </CSSTransition>
            </SwitchTransition>
            <button
                onClick={handleSetStateDes}
            >Switch State</button>
        </React.Fragment>
    );
}


Example01OfAnimationCss.defaultProps = {

};


Example01OfAnimationCss.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Example01OfAnimationCss
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////