///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import styles from "./index.css";


//-------------------------------------------------------------------------------------------------------------------//


export default function (props) {

  const loginId = localStorage.getItem('loginId');

    return (

        <React.Fragment>
            <div className={styles.welcome}>
                <div className={styles.row}>
                    <h3>Welcome {loginId}</h3>
                </div>
                <div className={styles.row}>
                    <button
                        className={styles.btn}
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
