///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from "react";
import Counter from "./components/Counter";
import {routerRedux, Link, Route, Switch} from "./dva/router";
import {Home} from "./components/Home";


//-------------------------------------------------------------------------------------------------------------------//


export default function (props) {

    return (

        // <>
        //     <h1>Home</h1>
        //     <Counter/>
        // </>

        /** 6) 传递 history **/
        <routerRedux.ConnectedRouter history={props.history}>

            <div className='wrap'>
                <ul className='nav'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/counter'>Counter</Link></li>
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
