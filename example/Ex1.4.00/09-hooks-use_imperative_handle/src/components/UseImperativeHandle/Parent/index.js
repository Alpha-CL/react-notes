///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect,useRef} from "react";
import PropTypes from "prop-types";
import {Child, ChildWrapper} from "../Child";


//-------------------------------------------------------------------------------------------------------------------//


function Parent(props) {

    const refChild = useRef(),
        handleTriggerChildMethod = () => {

            refChild.current.method();
        };

    return (

        <React.Fragment>
            <ChildWrapper
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