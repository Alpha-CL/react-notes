///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";
import "./index.css";


//-------------------------------------------------------------------------------------------------------------------//


function Header(props) {

    return (

        <React.Fragment>
            <div className="header-content">
                <div className="con-l title">学生管理系统</div>
                <div className="con-r">
                    <span>用户名</span>
                    <button>退出</button>
                </div>
            </div>
        </React.Fragment>
    );
}


Header.defaultProps = {

};


Header.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Header
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////