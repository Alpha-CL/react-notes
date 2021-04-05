///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect} from "react";


//-------------------------------------------------------------------------------------------------------------------//


let n = 1;

function func_01() {

    // console.log('01',n);

    console.log('[func_01-render]');

    return () => {

        console.log('[func_01-clearFunc]');
    };
}

function func_02() {

    // console.log('02',n);

    console.log('[func_02-render]');

    return () => {

        console.log('[func_02-clearFunc]');
    };
}

function UseEffectOfUnstableFnParam(props) {

    const [, forceUpdate] = useState({});

    /** 已无法尝试，禁止使用不稳定的 副作用函数 **/
    useEffect(n % 2 === 0 ? func_02 : func_01);

    // console.log(n);

    n++;

    return (

        <React.Fragment>
            <button
                onClick={()=>{

                    forceUpdate({});
                }}
            >Force Update</button>
        </React.Fragment>
    );
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    UseEffectOfUnstableFnParam
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
