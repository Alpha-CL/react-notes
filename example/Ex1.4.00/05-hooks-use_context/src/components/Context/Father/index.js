///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect} from "react";
import PropTypes from "prop-types";
import {Son} from "../Son";

//-------------------------------------------------------------------------------------------------------------------//

const ctx = React.createContext();

function Father(props) {

    return (

        <React.Fragment>
            <ctx.Provider
                value="father context"
            >
                <Son
                    ctx={ctx}
                />
            </ctx.Provider>
        </React.Fragment>
    );
}


Father.defaultProps = {

};


Father.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Father
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////