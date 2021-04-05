///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect,useRef} from "react";
import PropTypes from "prop-types";
import {Child} from "../Child";


//-------------------------------------------------------------------------------------------------------------------//


function Parent(props) {

    const refChild = useRef(),
        handleTriggerChildMethod = () => {

            refChild.current.method();
        };

    return (

        <React.Fragment>
            <Child
                ref={refChild}
            />
            <button
                onClick={handleTriggerChildMethod}
            >trigger</button>
        </React.Fragment>
    );
}


Parent.defaultProps = {

};


Parent.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Parent
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////