///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect} from "react-router-dom";
import {routConfig} from "../../pages/routeConfig";


//-------------------------------------------------------------------------------------------------------------------//


function BetterLink({to, ...rest}) {

    if (to.name && typeof to !== 'string') {

        to.pathname = getPathFromName(to.name, "/", routConfig);

        if (to.pathname === undefined) {

            console.log('to.pathname',to.pathname);

            throw new Error(`name 属性值${to.name}无效`);
        }
    }

    return (

        <React.Fragment>
            <Link {...rest} to={to}/>
        </React.Fragment>
    );
}


/** 根据name的值，查找对应的path，没有考虑有params的情况
 * 如果有，会比较复杂，需要用到第三方库path-to-regexp **/
function getPathFromName(name, baseUrl, routerArr) {

    for (let item of routerArr) {

        let newPath = baseUrl + item.path;
        newPath = newPath.replace(/\/\//g, '/');

        if (item.name === name) {

            return newPath;

        } else {

            if (Array.isArray(item.children)) {

                const path = getPathFromName(name, newPath, item.children);

                if (path !== undefined) {

                    return path;
                }
            }
        }
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    BetterLink
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////