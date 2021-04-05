///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * error bounds
 *
 *
 * 默认情况下，若一个组件在渲染期间( Cmp.render(); )发生错误，会导致整个组件树全部卸载
 *
 *
 ** ErrorBounds: 是一个组件，该组件会捕获渲染期间( Cmp.render(); )发生的错误
 **              并阻止继续向上传递，从而导致的卸载整个组件树
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function Comp1() {

    return (

        <div
            style={{
                marginBottom: '20px',
                width: '100%',
                height: 500,
                border: '2px solid',
            }}
        >
            <h3>Comp_01</h3>
            <Comp2/>
        </div>
    );
}

function getDatas() {

    return undefined;
}

function Comp2() {

    /** datas = undefined; **/
    const datas = getDatas();

    const items = datas.map((item) => {

        return (
            <span>{item.val}</span>
        );
    });

    return (

        <div
            style={{
                width: '100%',
                height: '70%',
                border: '2px solid',
            }}
        >
            {items}
            <h3>Comp_02</h3>
        </div>
    );
}

function Comp3() {

    return (

        <div
            style={{
                width: '100%',
                height: 500,
                border: '2px solid',
            }}
        >
            <h3>Comp_03</h3>
        </div>
    );
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function Error01(props) {

    return (

        <React.Fragment>
            <Comp1/>
            <Comp3/>
        </React.Fragment>
    );
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Error01
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////