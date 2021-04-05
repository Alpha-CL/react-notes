///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect} from "react";
import PropTypes from "prop-types";


//-------------------------------------------------------------------------------------------------------------------//

let timer;

function Problem(props) {

    const [n, setN] = useState(10);

    useEffect(() => {

        if (n === 0) {

            return;
        }

        timer = setInterval(() => {

            setN(n - 1);

        }, 1000);

        return () => {

            clearInterval(timer);
        };

    },[n]);

    return (

        <React.Fragment>
            Timer: {n}
        </React.Fragment>
    );
}


Problem.defaultProps = {

};


Problem.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Problem
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////