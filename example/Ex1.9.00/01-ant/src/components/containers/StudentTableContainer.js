///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {connect, routerRedux} from "dva";
import StudentTable from "@/components/StudentTable";

//-------------------------------------------------------------------------------------------------------------------//


const mapStateToProps = state => ({

	stus: state.students.result.datas,
	current: state.students.condition.page,
	total: state.students.result.total,
	pageSize: state.students.condition.limit,
	loading: state.loading.effects["students/fetchStudents"],
	// position: ['topLeft', 'bottomRight'],

}), mapDispatchToProps = dispatch => ({

	onChange(newPage) {
		//重新设置条件
		dispatch({
			type: "students/setCondition",
			payload: {
				page: newPage
			}
		})
	}

});


//-------------------------------------------------------------------------------------------------------------------//


export default connect(mapStateToProps, mapDispatchToProps)(StudentTable);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
