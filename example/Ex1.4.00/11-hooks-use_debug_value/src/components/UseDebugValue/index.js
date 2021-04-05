///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";


//-------------------------------------------------------------------------------------------------------------------//


function useCustom() {

    const [arr, setArr] = useState([]);

    useDebugValue('[useDebugValue: 将需要调试的数据显示到 React 组件 Hook 属性的一级界面( 而不是折叠的数据 )，方便查阅]');

    return arr;
}

function useCustomOfUnDebugValue() {

    const [arr, setArr] = useState([]);

    return arr;
}

function UseDebugValue(props) {

    const [n, setN] = useState();

    useEffect(() => {

        console.log('[useEffect]');

        return () => {

        };

    },[]);

    const arr = useCustom();
    const arr2 = useCustomOfUnDebugValue();

    return (

        <React.Fragment>
            <h3>useDebugValue: 将需要调试的数据显示到 React 组件 Hook 属性的一级界面( 而不是折叠的数据 )，方便查阅</h3>
        </React.Fragment>
    );
}


UseDebugValue.defaultProps = {

};


UseDebugValue.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    UseDebugValue
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////