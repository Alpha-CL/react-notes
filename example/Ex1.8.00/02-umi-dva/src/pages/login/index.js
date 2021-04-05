///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import styles from "./index.css";


//-------------------------------------------------------------------------------------------------------------------//


export default function (props) {

  const txtLoginId = useRef(),
        txtLoginPwd = useRef();

    return (

        <React.Fragment>
            <div className={styles.login}>
                <div className={styles.row}>Count: <input ref={txtLoginId} type="text"/></div>
                <div className={styles.row}>PassWord: <input ref={txtLoginPwd} type="password"/></div>
                <div className={styles.row}>
                    <button
                        className={styles.btn}
                        onClick={() => {

                            if (txtLoginPwd.current.value === '123123') {

                                localStorage.setItem('loginId',txtLoginId.current.value );
                                localStorage.setItem('loginPwd', txtLoginPwd.current.value);
                                props.history.push('/welcome');

                            } else {

                                alert('Count/Password error');
                            }
                        }}
                    >登陆
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
