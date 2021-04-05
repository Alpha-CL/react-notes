///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {connect, routerRedux} from "dva";
import {Pager} from "../Pager";
import {Pagination} from "antd";


//-------------------------------------------------------------------------------------------------------------------//


const mapStateToProps = state => ({

	current: state.students.condition.page,
	total: state.students.result.total,
	pageSize: state.students.condition.limit,
	showQuickJumper: true

}), mapDispatchToProps = dispatch => ({

	onChange(newPage) {

		dispatch({
			type: 'students/setCondition',
			payload: {
				page: newPage
			}
		});

		// dispatch({
		// 	type: 'students/fetchStudents',
		// });
	}
});


//-------------------------------------------------------------------------------------------------------------------//


export default connect(mapStateToProps, mapDispatchToProps)(Pagination);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
