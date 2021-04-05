///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";
import styles from "./index.css";
import {Link} from "umi";


//-------------------------------------------------------------------------------------------------------------------//


function StudentTable(props) {

    // console.log('44', props.stus);

    const trs = createTrs(props.stus);

    return (

        <React.Fragment>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>学号</th>
                        <th>姓名</th>
                        <th>性别</th>
                        <th>生日</th>
                        <th>邮箱</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
        </React.Fragment>
    );
}

function createTrs (stus) {

    return stus.map(val => {

        return (
            <tr key={val.id}>
                <td>{val.sNo}</td>
                <td>{val.name}</td>
                <td>{val.sex !== 1 ? '男' : '女'}</td>
                <td>{val.birth}</td>
                <td>{val.email}</td>
                <td>
                    <Link to={`/students/${val.sNo}`}>详情</Link>
                </td>
            </tr>
        );
    });
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    StudentTable
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////