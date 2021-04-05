///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {connect, routerRedux} from "dva";
import {StudentSearchBar} from "@/components/StudentSearchBar";

//-------------------------------------------------------------------------------------------------------------------//


const mapStateToProps = state => ({

	defStateVal: {
		key: state.students.condition.key,
		sex: state.students.condition.sex,
	}

}), mapDispatchToProps = dispatch => ({

	onSearch(newCondition) {

		newCondition.page = 1;

		dispatch({
			type: 'students/setCondition',
			payload: newCondition
		});

		// dispatch({
		// 	type: 'students/fetchStudents'
		// });
	}
});


//-------------------------------------------------------------------------------------------------------------------//


export default connect(mapStateToProps, mapDispatchToProps)(StudentSearchBar);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
