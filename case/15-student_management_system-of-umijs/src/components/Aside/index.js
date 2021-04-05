///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import {NavLink} from "umi";
import styles from "./index.css";


//-------------------------------------------------------------------------------------------------------------------//


export default function (props) {

	return (

		<ul className={styles.wrap}>
			<li><NavLink exact activeClassName={styles.active} to="/">Home</NavLink></li>
			<li><NavLink exact activeClassName={styles.active} to="/student">Search Student</NavLink></li>
			<li><NavLink exact activeClassName={styles.active} to="/student/add">Add Student</NavLink></li>
		</ul>
	);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////