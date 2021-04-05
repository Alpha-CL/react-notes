///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect,useRef} from "react";
import PropTypes from "prop-types";


//-------------------------------------------------------------------------------------------------------------------//


function SetInterval(props) {

    const [n, setN] = useState(10),
        nRef = useRef(n);

    useEffect(() => {

        const timer = setInterval(() => {

            nRef.current--;

            setN(nRef.current);

            if (nRef.current === 0) {

                clearInterval(timer);
            }

        }, 1000);

        return () => {

            clearInterval(timer);
        };

    },[]);


    return (

        <React.Fragment>
            setIntervalTimer: {n}
        </React.Fragment>
    );
}


SetInterval.defaultProps = {

};


SetInterval.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    SetInterval
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////