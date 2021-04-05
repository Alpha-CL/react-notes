///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect} from "react";
import PropTypes from "prop-types";


//-------------------------------------------------------------------------------------------------------------------//

window.refArr = [];

function Parent(props) {

    /** React.createRef(); 每次渲染都会返回一个新的引用地址 **/
    const iptRef = React.createRef(),
        [n, setN] = useState(0),
        handleOnChange = (e) => {
            setN(e.target.value);
        },
        handleGetIptValue = () => {
            console.log(iptRef.current.value);
        };

    window.refArr.unshift(iptRef);

    if (window.refArr.length > 1) {

        console.log(window.refArr);
        console.log('refArr[0] === refArr[1]: ', window.refArr[0] === window.refArr[1]);
    }

    return (
        <React.Fragment>
            <input
                ref={iptRef}
                value={n}
                type="number"
                onChange={handleOnChange}
            />
            <button
                onClick={handleGetIptValue}
            >get input.value</button>
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