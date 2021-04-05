///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import Counter from "./components/Counter";
import {routerRedux, NavLink, Route, Switch} from "dva/router";
import {Home} from "./components/Home";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * connected-react-router           // history 必须使用同一个
 *
 *
 * 1) combineReducers({router: connectRouter(history)})
 * 2) routerMiddleware(history): routerMid;
 * 3) <ConnectRouter histoty={history} />
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export default function (props) {

    return (

            /** 6) 传递 history **/
            <routerRedux.ConnectedRouter history={props.history}>

                <div className='wrap'>
                    <ul className='nav'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/counter'>Counter</NavLink></li>
                    </ul>
                    <div className='route-view'>
                        <Switch>
                            <Route path='/counter' component={Counter}/>
                            <Route path='/' component={Home}/>
                        </Switch>
                    </div>
                </div>

            </routerRedux.ConnectedRouter>
    );
};



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
