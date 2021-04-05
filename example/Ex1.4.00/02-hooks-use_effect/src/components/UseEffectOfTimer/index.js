///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useEffect, useState} from "react";


//-------------------------------------------------------------------------------------------------------------------//


function UseEffectOfTimer(props) {

    const [n, setN] = useState(10),
        handleAdd = () => {
            setN(n + 1);
        };

    useEffect(() => {

        if (n === 0) {

            return;
        }

        setTimeout(() => {

            setN(n - 1);

        }, 1000);

    }, [n]);

    return (

        <React.Fragment>
            <div>{n}</div>
            <button
                onClick={handleAdd}
            >add
            </button>
        </React.Fragment>
    );
}

function UseEffectOfTimerErr(props) {

    const [n, setN] = useState(10),
        handleAdd = () => {
            setN(n - 1);
        };

    /** useEffect 每次执行都会重新覆盖之前的 state 的对象地址 **/
    useEffect(() => {

        const timer = setInterval(() => {

            let newN = n - 1;

            console.log(newN);

            setN(newN);

            if (newN === 0) {

                clearInterval(timer);
            }

        }, 1000);

        /** 函数卸载时运行 **/
        return () => {

            clearInterval(timer);
        };

    }, []);

    return (

        <React.Fragment>
            <div>{n}</div>
            <button
                onClick={handleAdd}
            >add
            </button>
        </React.Fragment>
    );
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    UseEffectOfTimer,
    UseEffectOfTimerErr
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////