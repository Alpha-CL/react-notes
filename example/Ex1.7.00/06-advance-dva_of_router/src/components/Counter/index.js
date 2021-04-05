///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {connect} from "react-redux";
import Comp from "./component";


//-------------------------------------------------------------------------------------------------------------------//


const mapStateToProps = state => ({

    number: state.counter

}), mapDispatchToProps = dispatch => ({

    onIncrease(){
        dispatch({
            type: "counter/increase",
        })
    },
    onDecrease(){
        dispatch({
            type: "counter/decrease"
        })
    },
    onAdd(num){

        dispatch({
            type: "counter/add",
            payload: num
        })
    },
    onAsyncIncrease() {

        dispatch({
            type: 'counter/asyncIncrease'
        })
    },
    onAsyncDecrease() {

        dispatch({
            type: 'counter/asyncDecrease'
        })
    }
});


//-------------------------------------------------------------------------------------------------------------------//


export default connect(mapStateToProps, mapDispatchToProps)(Comp);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
