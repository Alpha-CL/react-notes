///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import styles from "./index.css";
import {Button, Col, Row, Typography} from "antd";
import {LoginOutlined} from "@ant-design/icons";

//-------------------------------------------------------------------------------------------------------------------//

const {Title} = Typography;

export default function (props) {

	return (

		<Row
			type="flex"
			justify="space-between"
			align="middle"
			wrap="false"
			className={styles.wrap}
		>
			<Col>
				<Title
					level={3}
					style={{color: '#fff', margin: 0}}
				>欢迎使用学生管理系统</Title>
			</Col>
			<Col
				className={styles.right}
			>
				<span>欢迎您</span>
				<span className={styles.id}>{props.loginId}</span>
				<Button
					shape="circle"
					size="small"
					onClick={() => {
						props.onLoginOut && props.onLoginOut();
					}}
				>
					<LoginOutlined/>
				</Button>
			</Col>
		</Row>
	);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////