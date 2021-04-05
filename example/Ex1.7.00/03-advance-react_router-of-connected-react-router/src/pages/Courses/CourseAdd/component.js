///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";


//-------------------------------------------------------------------------------------------------------------------//


function CourseAdd(props) {

    return (

        <React.Fragment>
            <div>CourseAdd Page</div>
            <button
                onClick={() => {

                    /**
                     * 手动触发 history.push ...
                     *
                     ** history 必须使用 4.10.1，若直接安装 5.0 则会报错
                     * errInfo: redux-logger.js:1 Uncaught Could not find router reducer in state tree, it must be mounted under "router"
                     */

                    // Method_01: 不建议使用: 因使用 connected-react-router 本质是将 router 中部分数据交由 redux 处理
                    //
                    //
                    // console.log(props.history);
                    // props.history.push('/Courses/CourseList');


                    /** Method_02: 建议使用: 交由 reducer.dispatch(push(url)); 由数据仓库一并处理 **/
                    props.onClick && props.onClick();
                }}
            >
                jump to Course_list
            </button>
        </React.Fragment>
    );
}


CourseAdd.defaultProps = {

};


CourseAdd.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    CourseAdd
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////