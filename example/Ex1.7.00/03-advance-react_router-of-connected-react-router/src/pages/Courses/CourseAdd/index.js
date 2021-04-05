///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {connect} from "react-redux";
import {CourseAdd} from "./component";

/**  **/
import {push} from "connected-react-router";


//-------------------------------------------------------------------------------------------------------------------//


const mapStateToProps = state => ({


}), mapDispatchToProps = dispatch => ({

    onClick: () => {

        dispatch(push('/Courses/CourseList'));
    }
});


//-------------------------------------------------------------------------------------------------------------------//


export default connect(mapStateToProps, mapDispatchToProps)(CourseAdd);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
