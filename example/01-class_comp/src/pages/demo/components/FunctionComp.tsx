// import React,{useState, useEffect, useReducer, useContext, useCallback, useMemo, useRef, useImperativeHandle, useLayoutEffect, useDebugValue} from "react";
import React from 'react';
import PropTypes from "prop-types";


interface IProps {
	children?: any,
	foo?: string,
	name?: string
}


const FuncComp: React.FC<IProps> = (props: IProps) => {
	
	
	// const {history, location, match} = props;
	// const {pathname, hash, search, state} = props.location;
	// const {isExact, params, path, url} = prop.match;
	
	
	return (
		<React.Fragment>
			
			FuncComp
			{props.name}
			{/*{props.children}*/}
		
		</React.Fragment>
	);
};


FuncComp.defaultProps = {
	foo: 'bar'
};


// PureComponent is will optimize shouldComponentUpdate hook
export const FuncPureComp = React.memo(FuncComp);