// import {BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect, withRouter} from "react-router-dom";
import React, { PureComponent } from 'react';
import PropTypes from "prop-types";


interface IProps {
	children?: React.ReactNode
}


interface IState {
}


// PureComponent is will optimize shouldComponentUpdate hook
export default class ClassComp extends PureComponent<IProps, IState> {
	
	
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
		
		const { children } = this.props,
			header: any = [],
			content: any = [],
			footer: any = [];
		
		React.Children.forEach(children, (fragment: any) => {
			let props = fragment.props || {};
			switch (props.slot) {
				case 'header':
					header.push(fragment);
					break;
				case 'footer':
					footer.push(fragment);
					break;
				default:
					content.push(fragment);
			}
		});
		
		return (
			<React.Fragment>
				
				{/*ClassComp*/}
				{/*{this.props.children}*/}
				
				<header>
					{header}
				</header>
				
				{content}
				
				<footer>
					{footer}
				</footer>
			
			
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
	getSnapshotBeforeUpdate(props: any, state: any) {
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