///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {connect} from "react-redux";
import {StudentSearchBar} from "./component";
import {change as changeCondition} from "../../store/actions/searchCondition";
import {fetchStudents} from "../../store/actions/searchResult";

//-------------------------------------------------------------------------------------------------------------------//


const mapStateToProps = state => ({

    defaultValue: {

        key: state.searchCondition.key,
        sex: state.searchCondition.sex
    }

}), mapDispatchToProps = dispatch => ({

    onSearch: (newCondition) => {

        newCondition = {
            ...newCondition,
            page: 1
        };

        dispatch(changeCondition(newCondition));

        dispatch(fetchStudents());
    }
});


//-------------------------------------------------------------------------------------------------------------------//


export default connect(mapStateToProps, mapDispatchToProps)(StudentSearchBar);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
