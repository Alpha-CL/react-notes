import React, {PureComponent} from 'react';
import PropTypes from "prop-types";


// PureComponent is will optimize shouldComponentUpdate hook
export default class classComp extends PureComponent{
	
	
	static defaultProps = {
		foo: 'bar'
	};
	
	
	static propTypes = {
		prop: PropTypes.number
	}
	
	
	state = {
		/** common variable zone start **/
		
		/** common variable zone end **/
	};
	
	
	constructor(props) {
		
		super(props);
		
	}
	
	
	render() {
		
		return (
			<React.Fragment>
			
			
			
			</React.Fragment>
		);
	}
	
	
	/** init zone start **/
	initComp() {
	
	}
	/** init zone end **/
	
	/** common methods zone start **/
	
	/** common methods zone end **/
	
	// other controller method
	
	
	
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
	
	// Optimized rendering
	shouldComponentUpdate(nextProps, nextState) {
		// shallow comparison
		// isEqual(this.props, nextProps) && isEqual(this.state, nextState) return false;
		return true;
	}
	
	//
	static getDerivedStateFromProps() {
	
	}
}