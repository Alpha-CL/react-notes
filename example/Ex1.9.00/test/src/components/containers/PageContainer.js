///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {connect, routerRedux} from "dva";
import {Pager} from "../Pager";


//-------------------------------------------------------------------------------------------------------------------//


const mapStateToProps = state => ({

	current: state.students.condition.page,
	total: state.students.result.total,
	limit: state.students.condition.limit,
	panelNumber: 5

}), mapDispatchToProps = dispatch => ({

	onPageChange(newPage) {

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


export default connect(mapStateToProps, mapDispatchToProps)(Pager);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
