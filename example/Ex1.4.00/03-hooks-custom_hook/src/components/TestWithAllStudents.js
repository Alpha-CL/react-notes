///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect} from "react";
import PropTypes from "prop-types";
import {AllStudents} from "./AllStudents";
import {withAllStudents} from "../hoc/withAllStudents";


//-------------------------------------------------------------------------------------------------------------------//


function TestWithAllStudents(props) {


    const NewAllStudents = withAllStudents(AllStudents);

    return (

        <React.Fragment>
            <NewAllStudents/>
        </React.Fragment>
    );
}


TestWithAllStudents.defaultProps = {

};


TestWithAllStudents.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    TestWithAllStudents
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////