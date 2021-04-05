///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import {NavLink} from "umi";
import "./index.css";


//-------------------------------------------------------------------------------------------------------------------//


export default function (props) {

    // console.log(props);

    // const config = props.route.routes.find(config => config.path === props.location.pathname);
    //
    // let title = 'Untitled';
    //
    // console.log(config);
    //
    // if (config && config.title) {
    //
    //     title = config.title;
    // }
    //
    // document.title = title;

    return (

        <React.Fragment>
            <div className='wrap'>
                <div className='nav'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/login'>Login</NavLink>
                    <NavLink to='/welcome'>Welcome</NavLink>
                </div>
                <div className='content'>
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    );
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////