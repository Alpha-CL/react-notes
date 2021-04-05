///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import {Menu} from "antd";
import {NavLink} from "umi";
import withRouter from "umi/withRouter";
import {HomeOutlined, UnorderedListOutlined} from "@ant-design/icons";
import styles from "../../../../test/src/components/Aside/index.css";


//-------------------------------------------------------------------------------------------------------------------//


const {SubMenu, Item} = Menu;

const menuConfig = [
	{
		key: '/',
		icon: <HomeOutlined/>,
		txt: '后台管理首页',
	},
	{
		key: 'studentManager',
		icon: <UnorderedListOutlined/>,
		txt: '学生管理',
		children: [
			{
				key: '/student',
				txt: '查询学生'
			},
			{
				key: '/student/add',
				txt: '添加学生'
			}
		]
	}
];

function Aside({location}) {

	// const activeKey = props.location.pathname;

	const menus = menuConfig.map(item => {

		if (item.children) {

			const subMenus = item.children.map(subItem => (
				<Item key={subItem.key}>
					<NavLink to={subItem.key}>{subItem.txt}</NavLink>
				</Item>
			));

			return (
				<SubMenu
					key={item.key}
					title={<span>{item.icon}{item.txt}</span>}
				>
					{subMenus}
				</SubMenu>
			);

		} else {

			return (
				<Item key={item.key}>
					<NavLink to={item.key}>{item.icon}{item.txt}</NavLink>
				</Item>
			);
		}
	});

	const openKeys =[];

	for (const item of menuConfig) {

		if (item.children) {

			for (const subItem of item.children) {

				if (subItem.key === location.pathname && !openKeys.includes(item.key)) {

					openKeys.push(item.key);
				}
			}
		}
	}

	// console.log(openKeys);

	return (

		<React.Fragment>

			<Menu
				theme="dark"
				mode="inline"
				selectedKeys={[location.pathname]}
				defaultOpenKeys={openKeys}
				// defaultSelectedKeys={['/student/search']}
			>
				{/*{menus}*/}
				<Item
					key="/"
				>
					<NavLink to='/'><HomeOutlined/>后台管理首页</NavLink>
				</Item>
				<SubMenu
					key="managerStudent"
					title={<span><UnorderedListOutlined/>学生管理</span>}
				>
					<Item key="/student"><NavLink to='/student'>查询学生</NavLink></Item>
					<Item key="/student/add"><NavLink to='/student/add'>添加学生</NavLink></Item>
				</SubMenu>
			</Menu>


			{/*<ul className={styles.wrap}>
				<li><NavLink exact activeClassName={styles.active} to="/">Home</NavLink></li>
				<li><NavLink exact activeClassName={styles.active} to="/student">Search Student</NavLink></li>
				<li><NavLink exact activeClassName={styles.active} to="/student/add">Add Student</NavLink></li>
			</ul>*/}

		</React.Fragment>
	);
}

export default withRouter(Aside);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////