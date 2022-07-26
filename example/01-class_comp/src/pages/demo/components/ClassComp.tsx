// import {BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect, withRouter} from "react-router-dom";
import React, { PureComponent } from 'react';
import PropTypes from "prop-types";


interface IProps {
	children?: any,
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
		foo: PropTypes.string,
	};
	
	
	// The data collection of the current component( must be init state )
	state: IState = {
		/** common variable zone start **/
		name: 'demo',
		
		
		/** common variable zone end **/
	};
	
	
	constructor(props: IProps) {
		super(props);
	}
	
	getAllChildren(children: any = this.props.children) {
		return React.Children.map(children, (child) => child);
	}
	
	getArrayChildren = (children: any = this.props.children, isValidElement: boolean = false) => {
		
		const child = React.Children.toArray(children);
		console.log('-> child', child);
		
		const comp: any = child.filter((child: any) => Object.prototype.toString.call(child.type) === '[object Object]');
		console.log('-> comp', comp);
		
		// console.log(222, comp[0].type);
		
		return isValidElement
			? React.Children.toArray(children).map((child: any) => React.isValidElement(child))
			: React.Children.toArray(children);
	}
	
	getTargetChildren = (
		childName: string = ''
	) => {
		const childrenElements = this.getArrayChildren();
		if (!Array.isArray(childrenElements) || childrenElements.length <= 0) return;
		let targetChildren = [];
		for (let i = 0; i < childrenElements.length; i++) {
			const child: any = childrenElements[i];
			if (childName === child.name) {
				targetChildren.push(child);
				break;
			}
		}
		return targetChildren;
	}
	
	getChildrenCount = (children: any = this.props.children) => {
		return React.Children.count(children);
	}
	
	render() {
		
		const { children } = this.props,
			header: any = [],
			content: any = [],
			aside: any = [],
			footer: any = [];
		
		React.Children.forEach(children, (fragment: any) => {
			let props = fragment.props || {};
			switch (props.name) {
				case 'header':
					header.push(fragment);
					break;
				case 'footer':
					footer.push(fragment);
					break;
				case 'aside':
					aside.push(fragment);
					break;
				default:
					content.push(fragment);
			}
		});
		
		return (
			<React.Fragment>
				
				{/*<header>*/}
				{/*	{header}*/}
				{/*</header>*/}
				
				{/*<main>*/}
				{/*	{content}*/}
				{/*</main>*/}
				
				{/*<footer>*/}
				{/*	{footer}*/}
				{/*</footer>*/}
				
				
				{this.getArrayChildren()}
				
				{/*{content}*/}
				
				{/*{this.props.children}*/}
				
				{/*{this.getAllChildren()};*/}
				
				{/*{this.getTargetChildren('Memo')}*/}
			
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