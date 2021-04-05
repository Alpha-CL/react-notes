///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect} from "react";
import PropTypes from "prop-types";
import {StudentsContainer} from "./StudentsContainer";


//-------------------------------------------------------------------------------------------------------------------//



function TestStudentsList(props) {

    return (

        <React.Fragment>
            <StudentsContainer/>
        </React.Fragment>
    );
}


TestStudentsList.defaultProps = {

};


TestStudentsList.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    TestStudentsList
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////