///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";


//-------------------------------------------------------------------------------------------------------------------//


function CustomLink(props) {

    const newProps = {
        ...props
    };

    delete newProps.staticContext;

    return (

        <React.Fragment>
            <a
                // href="javascript:"

                {...newProps}
                style={{
                    textDecoration: 'underline'
                }}
                onClick={(e) => {
                    e.preventDefault();
                    props.history.push(props.to)
                }}
            >{props.children}</a>
        </React.Fragment>
    );
}


CustomLink.defaultProps = {

};


CustomLink.propTypes = {

};


const CustomLinkWrapper = withRouter(CustomLink);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    CustomLink,
    CustomLinkWrapper
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////