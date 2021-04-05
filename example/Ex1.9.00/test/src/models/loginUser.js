///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {routerRedux} from "dva";


//-------------------------------------------------------------------------------------------------------------------//


export default {

	state: null,
	subscriptions: {
		syncLocalstorage({dispatch}) {

			let loginId = localStorage.getItem('loginId');

			console.log(loginId);

			if (loginId) {

				dispatch({type: 'setLoginUser', payload: loginId});
			}
		}
	},
	reducers: {
		setLoginUser(state, action) {

			return action.payload;
		},
	},
	effects: {

		* login(action, sagaCmd) {

			const {loginId, loginPwd} = action.payload,
				{put} = sagaCmd;


			if (loginId === 'admin' && loginPwd === '123123') {

				yield put({type: 'setLoginUser', payload: loginId});
				localStorage.setItem('loginId', loginId);

				return true;

			}
			return false;


			// if (loginId === 'admin' && loginPwd === '123123') {
			//
			// 	yield put({type: 'setLoginUser', payload: loginId});
			// 	localStorage.setItem('loginId', loginId);
			//
			// 	yield put(routerRedux.push('/'));
			//
			// } else {
			//
			// 	window.alert('账号/密码错误');
			// }

		},
		* loginOut(action, sagaCmd) {

			const {put} = sagaCmd;

			localStorage.removeItem('loginId');
			yield put({type: 'setLoginUser', payload: null});
		}
	}
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
