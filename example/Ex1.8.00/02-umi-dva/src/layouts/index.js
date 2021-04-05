///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import {NavLink} from "umi";
import styles from "./index.css";


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
            <div className={styles.wrap}>
                <div className={styles.nav}>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink exact to='/login'>Login</NavLink>
                    <NavLink exact to='/welcome'>Welcome</NavLink>
                </div>
                <div className={styles.content}>
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    );
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
