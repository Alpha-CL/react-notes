///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";
import "./index.css";


//-------------------------------------------------------------------------------------------------------------------//


function Menu(props) {

    return (

        <React.Fragment>
            <ul className="menu-content">
                <li><a href="/Students/StudentList">学生列表</a></li>
                <li><a href="/Students/StudentAdd">添加学生</a></li>
                <li><a href="/Courses/CourseList">课程列表</a></li>
                <li><a href="/Courses/CourseAdd">添加课程</a></li>
            </ul>
        </React.Fragment>
    );
}


Menu.defaultProps = {

};


Menu.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Menu
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////