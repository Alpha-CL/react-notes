///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import styles from "./index.css";
import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";


//-------------------------------------------------------------------------------------------------------------------//


export default function (props) {

	const countRef = useRef(),
		passwordRef = useRef();

	return (

		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.row}>
					<label htmlFor="count">
						账号:
						<input id="count" ref={countRef} type="text"/>
					</label>
				</div>
				<div className={styles.row}>
					<label htmlFor="password">
						密码:
						<input id="password" ref={passwordRef} type="password"/>
					</label>
				</div>
				<div className={styles.row}>
					<button
						onClick={() => {

							let loginId = countRef.current.value,
								loginPwd = passwordRef.current.value;

							console.log(loginId, loginPwd);

							props.onLogin && props.onLogin(loginId, loginPwd);
						}}
					>登陆
					</button>
				</div>
			</div>
		</div>
	);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////