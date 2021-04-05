///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {connect, routerRedux} from "dva";
import {Loading} from "@/components/Loading";

//-------------------------------------------------------------------------------------------------------------------//


const mapStateToProps = state => ({

	isShow: state.loading.effects['students/fetchStudents']
	// isShow: true

}), mapDispatchToProps = dispatch => ({


});


//-------------------------------------------------------------------------------------------------------------------//


export default connect(mapStateToProps, mapDispatchToProps)(Loading);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
