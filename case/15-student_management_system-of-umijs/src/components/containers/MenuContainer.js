///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {connect, routerRedux} from "dva";
import TopNav from "../TopNav";


//-------------------------------------------------------------------------------------------------------------------//


const mapStateToProps = state => ({

	loginId: state.loginUser

}), mapDispatchToProps = dispatch => ({

	onLoginOut() {

		dispatch({type: 'loginUser/loginOut'});
		dispatch(routerRedux.push('/login'));
	}
});


//-------------------------------------------------------------------------------------------------------------------//


export default connect(mapStateToProps, mapDispatchToProps)(TopNav);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
