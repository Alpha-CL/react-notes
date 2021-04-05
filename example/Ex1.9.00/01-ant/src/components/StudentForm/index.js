///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {Form, Input, Spin, message, Radio, Select, Button} from "antd";
import {addStudent, getStudentBySNo, updateStudent} from "@/services/student";
import withRouter from "umi/withRouter";
import Avatar from "../Avatar";


//-------------------------------------------------------------------------------------------------------------------//


class StudentForm extends PureComponent {

	static propTypes = {

	};

	static defaultProps = {


	};

	static spanConfig = {
		labelCol: {
			span: 2
		},
		wrapperCol: {
			span: 8
		}
	};

	constructor(props) {

		super(props);

		this.state = {

			isLoading: false,
			imgUrl: ''
		};
	}

	async componentDidMount() {

		if (this.props.sNo) {

			this.setState({
				isLoading: true
			});

			const stu = await getStudentBySNo(this.props.sNo);

			delete stu.id;
			delete stu.appkey;
			delete stu.ctime;
			delete stu.utime;

			this.props.form.setFields(getFieldsConfig(stu));

			this.setState({
				isLoading: false
			});

		} else {


		}
	}

	handleSubmit = (e) => {

		e.preventDefault();

		this.props.form.validateFields((err, values) => {

			console.log(values);

			if (!err) {

				if (this.props.sNo) {

					this.updateStudent(values);

				} else {

					this.addStudent(values);
				}
			}
		});
	}

	async addStudent(stuObj) {

		this.setState({
			isLoading: true
		});

		const resp = await addStudent(stuObj);

		if (resp.status === 'success') {

			await message.success('成功添加学生!', 1);

			this.props.history.push('/student');

		} else {

			message.error(resp.msg, 3);

			this.setState({
				isLoading: false
			});
		}
	}

	async updateStudent(stuObj) {

		this.setState({
			isLoading: true
		});

		const resp = await updateStudent(stuObj);

		if (resp.status === 'success') {

			await message.success('成功修改学生信息!', 1);

			this.props.history.push('/student');

		} else {

			message.error(resp.msg, 3);

			this.setState({
				isLoading: false
			});
		}
	}

	createSelectOpts() {

		const options = [];

		for (let i = 1980; i <= 2010; i++) {

			options.push(
				<Select.Option
					key={i}
					value={i}
				>{i}年</Select.Option>
			);
		}

		return options;
	}

	render() {

		const { getFieldDecorator } = this.props.form;

		return (

			<React.Fragment>
				<Spin
					tip="loading"
					spinning={this.state.isLoading}
				>
					<Form
						{...StudentForm.spanConfig}
						onSubmit={this.handleSubmit}
					>
						<Form.Item label="头像">
							{getFieldDecorator('avatar', {
								required: true,
								message: '必须填写'
							})(
								<Avatar
									disabled={this.props.sNo !== undefined}
									imgUrl={this.state.imgUrl}
									onChangeUrl={(newUrl)=>{
										this.setState({
											imgUrl: newUrl
										})
									}}
								/>
							)}
						</Form.Item>
						<Form.Item label="学号">
							{getFieldDecorator('sNo', {
								rules: [
									{
										required: true,
										message: "必须填写"
									}
								]
							})(<Input disabled={this.props.sNo !== undefined}/>)}
						</Form.Item>
						<Form.Item label="姓名">
							{getFieldDecorator('name', {
								rules: [
									{
										required: true,
										message: "必须填写"
									}
								]
							})(<Input/>)}
						</Form.Item>
						<Form.Item label="性别">
							{getFieldDecorator('sex', {
								rules: [
									{
										required: true,
										message: '必须填写',
									}
								],
								vavluePropName: 'checked',
								initialValue: 0
							})(
								<Radio.Group>
									<Radio.Button value={0}>男</Radio.Button>
									<Radio.Button value={1}>女</Radio.Button>
								</Radio.Group>
							)}
						</Form.Item>
						<Form.Item label="生日">
							{getFieldDecorator('birth', {
								rules: [
									{
										required: true,
										message: "请选择出生年份"
									}
								]
							})(
								<Select>
									{this.createSelectOpts()}
								</Select>
							)}
						</Form.Item>
						<Form.Item label="手机">
							{getFieldDecorator('phone', {
								rules: [
									{
										required: true,
										message: '必须填写'
									},
									{
										pattern: /1\d{10}/,
										message: '请输入正确的手机号'
									}
								]
							})(
								<Input/>
							)}
						</Form.Item>
						<Form.Item label="地址">
							{getFieldDecorator('address', {
								rules: [
									{
										required: true,
										message: '请填写地址'
									}
								]
							})(
								<Input/>
							)}
						</Form.Item>
						<Form.Item label="邮箱">
							{getFieldDecorator('email', {
								rules: [
									{
										required: true,
										message: '必须填写'
									},
									{
										pattern: /\w+@\w+(\.\w+){1,2}/,
										message: "请输入正确的邮箱"
									}
								]
							})(
								<Input/>
							)}
						</Form.Item>
						<Form.Item
							wrapperCol={{
								offset: 2,
								span: 8
							}}
						>
							<Button
								htmlType="submit"
								type="primary"
								style={{
									width: '100%'
								}}
							>提交</Button>
						</Form.Item>
					</Form>
				</Spin>
			</React.Fragment>
		);
	}
}


//-------------------------------------------------------------------------------------------------------------------//


function getFieldsConfig(obj) {

	const result = {};
	for (const prop in obj) {

		result[prop] = Form.createFormField({
			value: obj[prop]
		});
	}

	return result;
}

const FormHOC = Form.create(getFieldsConfig({
	sex: 0,
	isMonitor: false
}));

export default withRouter(FormHOC(StudentForm));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
