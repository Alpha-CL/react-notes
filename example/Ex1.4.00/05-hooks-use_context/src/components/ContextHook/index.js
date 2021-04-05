///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect,useContext} from "react";
import PropTypes from "prop-types";
import {Father} from "./Father";


//-------------------------------------------------------------------------------------------------------------------//


function ContextHook(props) {

    return (

        <React.Fragment>
            <Father/>
        </React.Fragment>
    );
}


ContextHook.defaultProps = {

};


ContextHook.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    ContextHook
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////