///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import styles from "./index.css";


//-------------------------------------------------------------------------------------------------------------------//


export default function (props) {

	return (

		<React.Fragment>
			<div className={styles.wrap}>
				<div className={styles.nav}>
					{props.header}
				</div>
				<div className={styles.content}>
					<div className={styles.aside}>
						{props.aside}
					</div>
					<div className={styles.main}>
						{props.main}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////