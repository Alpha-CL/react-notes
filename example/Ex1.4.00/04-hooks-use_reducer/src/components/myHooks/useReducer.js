///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {useEffect,useState,useCallback,useContext} from "react";


//-------------------------------------------------------------------------------------------------------------------//


function useReducer(reducer, initialState) {

    const [state, setState] = useState(initialState);

    function dispatch(action) {

        const newState = reducer(state, action);

        console.log(`[日志记录: ${state}的值 ${state} => ${newState}]`);

        setState(newState);
    }

    return [state, dispatch];
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    useReducer
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
