///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect,useRef} from "react";
import PropTypes from "prop-types";


//-------------------------------------------------------------------------------------------------------------------//

// let timer;

function UseRef(props) {

    const timer = useRef();
    const [n, setN] = useState(10);

    useEffect(() => {

        if (n === 0) {

            return;
        }

        timer.current = setInterval(() => {

            setN(n - 1);

        }, 1000);

        return () => {

            clearInterval(timer.current);
        };

    },[n]);

    return (

        <React.Fragment>
            UseRefTimer: {n}
        </React.Fragment>
    );
}


UseRef.defaultProps = {

};


UseRef.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    UseRef
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////