// import {BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect, withRouter} from "react-router-dom";
import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import ClassComp from "./components/ClassComp";
import { FuncPureComp } from "./components/FunctionComp";

interface IProps {
	children?: React.ReactNode
}


interface IState {
	count: number
}


// PureComponent is will optimize shouldComponentUpdate hook
export default class DemoComp extends PureComponent<IProps, IState> {
	
	static defaultProps = {
		foo: 'bar'
	};
	
	
	static propTypes = {
		prop: PropTypes.number
	};
	
	
	state: IState = {
		/** common variable zone start **/
		count: 0,
		/** common variable zone end **/
	};
	
	constructor(props: any) {
		super(props);
	}
	
	
	render() {
		
		return (
			<React.Fragment>
				
				
				<ClassComp>
					{/*{() => <FuncPureComp/>}*/}
					
					{{ a: <FuncPureComp/> }}
					
					null
					
					undefined
					
					false
					
					hello world
					
					<div slot="header">
						this is header
						<FuncPureComp/>
					</div>
					
					<p>this is content</p>
					<p>this is content</p>
					
					<div slot="footer">
						this is footer
					</div>
				
				</ClassComp>
				
				{/*<button onClick={this.onArrowClick}>onArrowClick</button>*/}
				{/*<button onClick={this.onFuncClick}>onFuncClick</button>*/}
			
			</React.Fragment>
		);
	}
	
	
	/** init zone start **/
	initComp() {
	
	}
	
	/** init zone end **/
	
	/** common methods zone start **/
		// The event handler must be bind this
		// onEvent = (e) => {};     // this -> current component
		// onEvent(e) {}            // this -> undefined
	
	
	onArrowClick = () => {
		console.log('-> onArrowClick', this);
		console.log(this.onFuncClick.name);
	};
	
	onFuncClick() {
		console.log('-> onFuncClick', this);
		console.log(this.onFuncClick);
	}
	
	/** common methods zone end **/
		
		
		// other controller method
	
	addCount = () => {
		console.log('-> addCount');
		this.setState((state, props) => ({
			count: state.count + 1
		}));
	};
	
	// Element is mounted hook
	async componentDidMount() {
		this.initComp();
	}
	
	// Element is update hook
	async componentDidUpdate() {
	}
	
	// Before the element is destroyed hook
	async componentWillUnmount() {
	}
	
	static getDerivedStateFromProps() {
		return null;
	}
}