///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect,useContext} from "react";
import PropTypes from "prop-types";
import {Father} from "./Father";


//-------------------------------------------------------------------------------------------------------------------//


function Context(props) {

    return (

        <React.Fragment>
            <Father/>
        </React.Fragment>
    );
}


Context.defaultProps = {

};


Context.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Context
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////