///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {searchStudents} from "@/services/fetchStudents";
import {select} from "redux-saga/effects";
import {routerRedux} from "dva";


//-------------------------------------------------------------------------------------------------------------------//


export default {

	state  :{
		condition: {
			key: '',
			sex: -1,
			page: 1,
			limit: 10,
		},
		result: {
			total: 0,
			datas: [],
		}
	},
	subscriptions: {

		listenUrl({history, dispatch}) {

			history.listen(newLoaction => {

				console.log('newLoaction', newLoaction);

				if (newLoaction.pathname !== '/student') {
					return;
				}

				const query = newLoaction.query;

				console.log('query:', query);

				query.limit && (query.limit = +query.limit);
				query.page && (query.page = +query.page);
				query.sex && (query.sex = +query.sex);

				dispatch({
					type: 'changeCondition',
					payload: query
				});

				dispatch({
					type: 'fetchStudents'
				});
			});
		}

		// initStundes({dispatch}) {
		//
		// 	dispatch({
		// 		type: 'fetchStudents'
		// 	});
		// }
	},
	reducers: {

		changeCondition(state, {payload}) {

			return {
				...state,
				condition: {
					...state.condition,
					...payload
				}
			};
		},

		// setCondition(state, {payload}) {
		//
		// 	return {
		// 		...state,
		// 		condition: {
		// 			...state.condition,
		// 			...payload
		// 		}
		// 	};
		// },
		setResult(state, {payload}) {

			return {
				...state,
				result: payload
			};
		}
	},
	effects: {
		* setCondition(action, {put, select}) {

			let condition = yield select(state => state.students.condition);

			condition = {
				...condition,
				...action.payload
			};

			console.log('searchCondition: ', condition);

			yield put(routerRedux.push(`?page=${condition.page}&limit=${condition.limit}&key=${condition.key}&sex=${condition.sex}`));
		},
		* fetchStudents(action, {put, call, select}) {

			const condition = yield select(state => state.students.condition),
				result = yield call(searchStudents, condition);

			yield put({
				type: 'setResult',
				payload: {
					total: result.cont,
					datas: result.datas
				}
			});
		}
	}
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
