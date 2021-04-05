///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import {Button, Table, Typography} from "antd"
import withRouter from "umi/withRouter";

//-------------------------------------------------------------------------------------------------------------------//

const {Text} = Typography;

function StudentTable(props) {

	// const trs = createTrs(props.stus);

	const columns = [
		{
			title: '学号',
			dataIndex: 'sNo',
		},
		{
			title: '姓名',
			dataIndex: 'name',
			render: name => (<Text strong>{name}</Text>)
		},
		{
			title: "性别",
			dataIndex: 'sex',
			render: sex => (sex === 1 ? '女' : '男')
		},
		{
			title: '生日',
			dataIndex: 'birth',
		},
		{
			title: '邮箱',
			dataIndex: 'email'
		},
		{
			title: '地址',
			dataIndex: 'address'
		},
		{
			title: '操作',
			render: stu => (
				<Button
					onClick={() => props.history.push(`/student/${stu.sNo}`)}
				>详情</Button>
			)
		}
	];

	return (

		<React.Fragment>
			<Table
				dataSource={props.stus}
				rowKey="id"
				columns={columns}
				loading={props.loading}
				bordered
				pagination={{
					current: props.current,
					total: props.total,
					pageSize: props.pageSize,
					showQuickJumper: true,
					onChange: props.onChange,
				}}
			/>
		</React.Fragment>
	);
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export default withRouter(StudentTable);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////