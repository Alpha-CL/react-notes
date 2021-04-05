///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect} from "react";
import PropTypes from "prop-types";
import {Parent} from "./Parent";
import {Child} from "./Child";


//-------------------------------------------------------------------------------------------------------------------//


function UseMemo(props) {

    return (

        <React.Fragment>
            <Parent/>
        </React.Fragment>
    );
}


UseMemo.defaultProps = {

};


UseMemo.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    UseMemo
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////