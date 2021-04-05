///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect} from "react";
import PropTypes from "prop-types";
import {Parent} from "./Parent";


//-------------------------------------------------------------------------------------------------------------------//


function CallBackHook(props) {

    return (

        <React.Fragment>
            <Parent/>
        </React.Fragment>
    );
}


CallBackHook.defaultProps = {

};


CallBackHook.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    CallBackHook
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////