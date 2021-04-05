///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";


//-------------------------------------------------------------------------------------------------------------------//


function StudentDetail(props) {

    console.log('pps', props.match);

    return (

        <React.Fragment>
            <h3>Student Detial</h3>
            <div>学号: {props.match.params.sno}</div>
        </React.Fragment>
    );
}


StudentDetail.defaultProps = {

};


StudentDetail.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    StudentDetail
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////