///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect,useReducer,useContext,useCallback,useMemo} from "react";
import PropTypes from "prop-types";
import {Child} from "../Child";


//-------------------------------------------------------------------------------------------------------------------//


function Parent(props) {

    console.log('[Rerender]');

    const [min, setMin] = useState(1),
        handleSetMin = (e) => {
            setMin(e.target.value);
        };
    const [max, setMax] = useState(10),
        handleSetMax = (e) => {
            setMax(e.target.value);
        };

    const [range, setRange] = useState({min: min, max: max}),
        list= [];

    for (let i = range.min; i <= range.max; i++) {

        console.log(i);

        list.push(
            <Child
                key={i}
                txt={i}
            />
        );
    }

    return (

        <React.Fragment>
            max:
            <input
                type="number"
                value={max}
                onChange={handleSetMax}
            />
            {list}
        </React.Fragment>
    );
}


Parent.defaultProps = {

};


Parent.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Parent
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////