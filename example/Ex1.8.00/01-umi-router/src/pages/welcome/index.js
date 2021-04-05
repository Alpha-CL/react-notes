///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import "./index.css";


//-------------------------------------------------------------------------------------------------------------------//


export default function (props) {

    const loginId = localStorage.getItem('loginId');

    return (

        <React.Fragment>
            <div className='section-welcome'>
                <div className='row'>
                    <h3>Welcome {loginId}</h3>
                </div>
                <div className='row'>
                    <button
                        onClick={() => {
                            localStorage.removeItem('loginId');
                            localStorage.removeItem('loginPwd');
                            props.history.push('/login');
                        }}
                    >注销
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////