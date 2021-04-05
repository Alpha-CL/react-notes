///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {connect} from "react-redux";
import {Pager} from "./component";
import {change as changeCondition} from "../../store/actions/searchCondition";
import {fetchStudents} from "../../store/actions/searchResult";

//-------------------------------------------------------------------------------------------------------------------//


const mapStateToProps = state => ({

    current: state.searchCondition.page,
    total: state.searchResult.total,
    panelNumber: 5,
    limit: state.searchCondition.limit

}), mapDispatchToProps = dispatch => ({

    onPageChange: (newPage) => {

        dispatch(changeCondition({
            page: newPage
        }));
        dispatch(fetchStudents());
    }
});


//-------------------------------------------------------------------------------------------------------------------//


export default connect(mapStateToProps, mapDispatchToProps)(Pager);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
