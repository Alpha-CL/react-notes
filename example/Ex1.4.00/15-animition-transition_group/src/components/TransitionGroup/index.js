///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";
import {TransitionGroup,CSSTransition} from "react-transition-group";
import "./index.css";
import { v4 as uuidv4 } from 'uuid';


//-------------------------------------------------------------------------------------------------------------------//


/**
 * <TransitionGroup>
 *
 *     <CSSTransition>
 *
 *          { children }
 *
 *     </CSSTransition>
 *
 * </TransitionGroup>
 *
 *
 ** exit -> exit-active                     // remove
 ** enter -> enter-active                   // add
 *
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//



function TransitionGroupExam(props) {

    const [taskList, setTaskList] = useState([
        {id: uuidv4(), name: 'task_01'},
        {id: uuidv4(), name: 'task_02'},
        {id: uuidv4(), name: 'task_03'},
        {id: uuidv4(), name: 'task_04'},
    ]);

    return (

        <React.Fragment>
            <TransitionGroup                    // 默认生成 div

                component={null}                // 不生成 wrapDiv
            >
                {
                    taskList.map(item => (

                        <CSSTransition
                            key={item.id}
                            timeout={2000}
                        >
                            <div>{item.name}
                                <button
                                    onClick={() => {
                                        setTaskList(taskList.filter(it => it.id !== item.id));
                                    }}
                                >delete</button>
                            </div>
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
            <button
                onClick={()=>{
                    let name = window.prompt('please input task name');
                    setTaskList([
                        ...taskList,
                        {
                            id: uuidv4(),
                            name
                        }
                    ])
                }}
            >add task</button>
        </React.Fragment>
    );
}


TransitionGroupExam.defaultProps = {

};


TransitionGroupExam.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    TransitionGroupExam
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////