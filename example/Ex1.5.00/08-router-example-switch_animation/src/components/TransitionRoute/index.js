///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect, withRouter} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import "animate.css";

//-------------------------------------------------------------------------------------------------------------------//


function TransitionRoute(props) {

    const {
        component: Comp,
        timerout,
        classNames,
        ...rest
    } = props;

    return (

        <React.Fragment>
            <Route
                {...rest}
            >
                {(props) => {
                    const stateDes = !!props.match;
                    return (
                        <CSSTransition
                            in={stateDes}
                            mountOnEnter={true}
                            unmountOnExit={true}
                            timeout={timerout}
                            classNames={classNames}
                        >
                            <Comp/>
                        </CSSTransition>
                    );
                }}
            </Route>
        </React.Fragment>
    );
}


TransitionRoute.defaultProps = {
    timerout: 500,
    classNames: {
        enter: 'animate__animated animate__slower animate__fadeInLeft',
        exit: 'animate__animated animate__fast animate__fadeOutLeft',
    }
};


TransitionRoute.propTypes = {
    timeout: PropTypes.number,
};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    TransitionRoute
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////