///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect} from "react";
import PropTypes from "prop-types";


//-------------------------------------------------------------------------------------------------------------------//


function StudentsList(props) {

    const {stus} = props,
        list = stus.map(item => {

            return (

                <li
                    key={item.id}
                >{item.name}, {item.sex === 1 ? 'male' : 'female'}</li>
            );
        });

    return (

        <React.Fragment>
            {list}
        </React.Fragment>
    );
}


StudentsList.defaultProps = {
    page: 1
};


StudentsList.propTypes = {
    page: PropTypes.number.isRequired
};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    StudentsList
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////