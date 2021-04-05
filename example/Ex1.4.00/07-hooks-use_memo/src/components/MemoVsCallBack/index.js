///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect} from "react";
import PropTypes from "prop-types";
import {Parent} from "./Parent";


//-------------------------------------------------------------------------------------------------------------------//


function MemoVsCallBack(props) {

    return (

        <React.Fragment>
            <Parent/>
        </React.Fragment>
    );
}


MemoVsCallBack.defaultProps = {

};


MemoVsCallBack.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    MemoVsCallBack
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////