///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect,useContext} from "react";
import PropTypes from "prop-types";


//-------------------------------------------------------------------------------------------------------------------//


function Son(props) {

    const ctxVal = useContext(props.ctx);

    return (

        <React.Fragment>
            <h1>{ctxVal}</h1>
        </React.Fragment>
    );

    // const ctx = props.ctx;
    //
    // return (
    //
    //     <React.Fragment>
    //         <ctx.Consumer>
    //             {value => {
    //
    //                 return (
    //
    //                     <h1>{value}</h1>
    //                 );
    //             }}
    //         </ctx.Consumer>
    //     </React.Fragment>
    // );
}


Son.defaultProps = {

};


Son.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Son
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////