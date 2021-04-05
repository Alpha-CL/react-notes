///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import "./index.css"


//-------------------------------------------------------------------------------------------------------------------//


export {
    ThreeLayout
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function ThreeLayout(props) {

    const defaultProps = {
        leftWidth: 200,
        rightWidth: 200,
        minWidth: 800
    };

    const datas = Object.assign({}, defaultProps, props);

    console.log(datas);

    return (

        <div
            className='three-layout'
            style={{minWidth: datas.width}}
        >
            <div
                className="main"
            >
                {props.children}
            </div>
            <div
                className="aside-left"
                style={{width: datas.leftWidth}}
            >
                {props.left}
            </div>
            <div
                className="aside-right"
                style={{width: datas.rightWidth}}
            >
                {props.right}
            </div>
        </div>
    );
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
