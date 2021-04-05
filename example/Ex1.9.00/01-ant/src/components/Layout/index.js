///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import styles from "./index.css";
import {Layout} from "antd";


//-------------------------------------------------------------------------------------------------------------------//


const {Header, Content, Sider} = Layout;

export default function (props) {

	return (

		<Layout className={styles.wrap}>
			<Header>{props.header}</Header>
			<Layout
				className={styles.content}
			>
				<Sider>{props.aside}</Sider>
				<Content
					className={styles.main}
				>{props.main}</Content>
			</Layout>
		</Layout>
	);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////