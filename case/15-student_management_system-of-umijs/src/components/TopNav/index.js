///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import styles from "./index.css";

//-------------------------------------------------------------------------------------------------------------------//


export default function (props) {

	return (

		<div className={styles.wrap}>
			<div className={styles.left}>
				学生管理系统
			</div>
			<div className={styles.right}>
				<span>{props.loginId}</span>
				<span><button
					onClick={() => {

						props.onLoginOut && props.onLoginOut();
					}}
				>退出登陆</button></span>
			</div>
		</div>
	);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////