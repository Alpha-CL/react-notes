///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import PropTypes from "prop-types";


//-------------------------------------------------------------------------------------------------------------------//


export {

    commonTypes
};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//



function commonTypes () {

    return {

        children: PropTypes.node,
        groupDatas: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })),
        chooseDatas: PropTypes.arrayOf(PropTypes.string)
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
