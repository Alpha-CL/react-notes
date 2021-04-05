///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect} from "react";
import PropTypes from "prop-types";
import {Parent} from "./Parent";


//-------------------------------------------------------------------------------------------------------------------//


function UseImperativeHandle(props) {

    return (

        <React.Fragment>
            <Parent/>
        </React.Fragment>
    );
}


UseImperativeHandle.defaultProps = {

};


UseImperativeHandle.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    UseImperativeHandle
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////