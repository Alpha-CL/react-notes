///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";

import store from "../../store";
import {connect} from "react-redux";
import {increase, decrease, asyncDecrease, asyncIncrease} from "../../store/actions";


//-------------------------------------------------------------------------------------------------------------------//


/** presentational_compoonent **/
function Counter(props) {

    return (

        <React.Fragment>
            <div className='counter_warp'>
                <div className='count-hd'>
                    <h3>count: {props.number}</h3>
                </div>
                <div className='count-bd'>
                    <button onClick={props.onAsyncDecrease}>asyncDecrease</button>
                    <button onClick={props.onDecrease}>decrease</button>
                    <button onClick={props.onIncrease}>increase</button>
                    <button onClick={props.onAsyncIncrease}>asyncIncrease</button>
                </div>
            </div>
        </React.Fragment>
    );
}


/** container_component **/
export default class CounterContainer extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = mapStateToProps(store.getState());

        store.subscribe(() => (this.setState(mapStateToProps(store.getState()))));
    }

    render() {

        const eventHandles = mapDispatchToProps(store.dispatch);

        return (
            <Counter
                {...this.state}
                {...eventHandles}
            />
        );
    }
};

function mapStateToProps(state) {

    return {
        number: state.count
    };
}

function mapDispatchToProps(dispatch) {

    return {

        onAsyncDecrease() {
            dispatch(asyncDecrease());
        },
        onDecrease() {
            dispatch(decrease());
        },
        onIncrease() {
            dispatch(increase());
        },
        onAsyncIncrease() {
            dispatch(asyncIncrease());
        }
    };
}


//-------------------------------------------------------------------------------------------------------------------//


export {

    Counter
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////