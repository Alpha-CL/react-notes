///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";
import {Problem} from "./Problem";
import {ResolveOfMatchUrl} from "./ResolveOfMatchUrl";
import {ResolveOfImportUrlConfig} from "./ResolveOfImportUrlConfig";


//-------------------------------------------------------------------------------------------------------------------//


function NestedRouter(props) {

    return (

        <React.Fragment>
            <h2>Resolve_02: outer url_config</h2>
            <ResolveOfImportUrlConfig/>
            <hr/>
            <h2>Resolve_01: props.match.url</h2>
            <ResolveOfMatchUrl/>
            <hr/>
            <h2>Problem: 父组件更改路由地址后，后代组件中 "固定的路由路径" 将无法继续匹配页面</h2>
            <Problem/>
            <hr/>
        </React.Fragment>
    );
}


NestedRouter.defaultProps = {

};


NestedRouter.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    NestedRouter
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////