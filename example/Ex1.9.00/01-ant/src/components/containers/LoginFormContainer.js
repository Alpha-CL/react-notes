///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {connect, routerRedux} from "dva";
import LoginForm from "../LoginForm";


//-------------------------------------------------------------------------------------------------------------------//


const mapStateToProps = state => ({}), mapDispatchToProps = dispatch => ({

	async onLogin(loginId, loginPwd) {

		const result = await dispatch({
			type: 'loginUser/login',
			payload: {loginId, loginPwd}
		});

		// console.log(result);

		if (result) {

			dispatch(routerRedux.push('/'));

		} else {

			window.alert('账号/密码错误');
		}
	}
});


//-------------------------------------------------------------------------------------------------------------------//


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
