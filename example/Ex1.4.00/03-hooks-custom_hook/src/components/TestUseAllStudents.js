///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect} from "react";
import PropTypes from "prop-types";
import {useAllStudents} from "./myHooks/useAllStudents";
import {getStudents} from "../services/getStudents";


//-------------------------------------------------------------------------------------------------------------------//


function TestUseAllStudents(props) {

    const stus = useAllStudents();

    // console.log(stus);

    const list = stus.map(item => {

            return (

                <li
                    key={item.id}
                >{item.name}</li>
            );
        });

    return (

        <React.Fragment>
            <ul>
                {list}
            </ul>
        </React.Fragment>
    );
}


TestUseAllStudents.defaultProps = {

};


TestUseAllStudents.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    TestUseAllStudents
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////