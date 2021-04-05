///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import {resetScroll} from "../untils/resetScroll";


//-------------------------------------------------------------------------------------------------------------------//


function useScroll(pathname) {

    useEffect(() => {

        resetScroll();

        return () => {

        };

    },[pathname]);
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    useScroll
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
