///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";
import {CSSTransition} from "react-transition-group";
import "./index.css";
import "animate.css";

//-------------------------------------------------------------------------------------------------------------------//


function Animation({stateDes, children, duration}) {

    return(

        <CSSTransition
            in={stateDes}
            timeout={duration}
            appear={true}
            mountOnEnter={true}
            classNames={{
                exitActive: 'animate__fadeOutLeft',
                exitDone: 'exit-doone',
                enterActive: 'animate__fadeInRight',
                appearActive: 'animate__fadeInRight'
            }}
        >
            {children}
        </CSSTransition>
    )
}

function Comp01({ stateDes, duration }) {

    return (
        <h1 className="title animate__animated">Compoent_01</h1>
    );
}

function Comp02({ stateDes, duration }) {

    return (
        <h1 className="title animate__animated">Compoent_02</h1>
    );
}

function Example02OfAnimationCss(props) {

    const [stateDes, setStateDes] = useState(true),
        handleSetStateDes = () => {
            setStateDes(!stateDes);
        };

    return (

        <React.Fragment>
            <div className="container">

                <div className="comp-container">
                    <Animation
                        visible={stateDes}
                        stateDes={stateDes}
                        duration={1000}
                    >
                        <Comp01/>
                    </Animation>
                    <Animation
                        visible={!stateDes}
                        stateDes={!stateDes}
                        duration={1000}
                    >
                        <Comp02/>
                    </Animation>
                </div>

                <button
                    onClick={handleSetStateDes}
                >Show / Hide</button>

            </div>
        </React.Fragment>
    );
}


Example02OfAnimationCss.defaultProps = {

};


Example02OfAnimationCss.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Example02OfAnimationCss
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////