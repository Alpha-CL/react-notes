///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";
import {CSSTransition} from "react-transition-group";
import "./index.css";


//-------------------------------------------------------------------------------------------------------------------//


function FadeTransition(props) {

    function addTransition (node) {

        node.style.transition = `opacity ${props.timeout}ms`;
    }

    function removeTransition(node) {

        node.style.transition = "";

        props.onExited &&  props.onExited(node);
    }

    return (

        <React.Fragment>
            <CSSTransition
                {...props}
                onEnter={node=> addTransition(node)}
                onEntered={node=> removeTransition(node)}
                onExit={node=> addTransition(node)}
                onExited={node => removeTransition(node)}
            >

            </CSSTransition>
        </React.Fragment>
    );
}


FadeTransition.defaultProps = {
    timeout: 5000
};


FadeTransition.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    FadeTransition
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////