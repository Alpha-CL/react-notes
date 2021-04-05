///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {connect, routerRedux} from "dva";


//-------------------------------------------------------------------------------------------------------------------//


function PrivateRouter(props) {

	// console.log(props);

	if (props.loginId) {

		return props.children;

	} else {

		props.onNotLogin && props.onNotLogin();
		return null;
	}
}


const mapStateToProps = state => ({

	loginId: state.loginUser

}), mapDispatchToProps = dispatch => ({

	onNotLogin() {

		dispatch(routerRedux.push('/login'));
	}
});


//-------------------------------------------------------------------------------------------------------------------//


export default connect(mapStateToProps, mapDispatchToProps)(PrivateRouter);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
