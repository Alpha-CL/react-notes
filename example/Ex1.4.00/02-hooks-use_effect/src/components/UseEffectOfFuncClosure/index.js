///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect} from "react";


//-------------------------------------------------------------------------------------------------------------------//


function UseEffectOfFuncClosure(props) {

    const [n, setN] = useState(0),
        handleAdd = () => {

            setN(n + 1);
        };

    /**
     *
     *
     *
     *
     */

    useEffect(() => {

        setTimeout(() => {

            /** n 指向每次调用 该函数时的 n，闭包会存储调用 n 时 this 的指向 **/
            console.log(n);

        }, 500);
    });

    return (

        <React.Fragment>
            <h3>UseEffect Of Function Closure</h3>
            <div>{n}</div>
            <button
                onClick={handleAdd}
            >add</button>
        </React.Fragment>
    );
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    UseEffectOfFuncClosure
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////