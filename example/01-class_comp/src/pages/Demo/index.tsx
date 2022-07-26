// import {BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect, withRouter} from "react-router-dom";
import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

import ClassComp from "./components/ClassComp";
import FuncComp from "./components/FunctionComp";


interface IProps {
	children?: React.ReactNode
}


interface IState {
}


// PureComponent is will optimize shouldComponentUpdate hook
export default class DemoComp extends PureComponent<IProps, IState> {
	
	
	// Property default value
	static defaultProps = {
		foo: 'bar'
	};
	
	
	// Validate property types during development
	static propTypes = {
		foo: PropTypes.string
	};
	
	
	// The data collection of the current component( must be init state )
	state: IState = {
		/** common variable zone start **/
		
		/** common variable zone end **/
	};
	
	
	constructor(props: IProps) {
		super(props);
	}
	
	
	render() {
		
		return (
			<React.Fragment>
				
				<ClassComp>
					
					<FuncComp/>
					
					<div slot="header">
						This is header
					</div>
					
					<p>hello world</p>
					<p>just do it</p>
					
					
					<div slot="footer">
						This is footer
					</div>

				</ClassComp>
				
				DemoComp
				{this.props.children}
			
			</React.Fragment>
		);
	}
	
	
	/** init zone start **/
	initComp() {
	
	}
	/** init zone end **/
	
	/** common methods zone start **/
	// The event handler must be bind this of class component( this defaults to undefined )
	// onEvent = (e) => {};     // this -> current component
	// onEvent(e) {}            // this -> undefined
	
	
	/** common methods zone end **/
	
	// other controller method
	
	
	/** hooks zone start **/
	
	// Both props and state changes will trigger this function
	static getDerivedStateFromProps(props: any, state: any) {
		// return !== null && this.state = any;
		return null;
	}
	
	// Pure components have optimized this hook function
	// shouldComponentUpdate() {}
	
	// Element is mounted hook
	async componentDidMount() {
		this.initComp();
	}
	
	// The real dom is built, but not rendered to the page
	getSnapshotBeforeUpdate(props: any, state : any) {
	}
	
	// Element is update hook
	async componentDidUpdate(props: any, state: any, snap: any) {
	}
	
	// Render 'dom tree( jsx expression)' to real page
	
	// Before the element is destroyed hook
	async componentWillUnmount() {
	}
	
	/** hooks zone end **/
}