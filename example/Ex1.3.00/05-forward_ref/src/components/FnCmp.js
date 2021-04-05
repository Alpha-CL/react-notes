///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
// import {FnCmp} from "./components/FnCmp";


//-------------------------------------------------------------------------------------------------------------------//


/** function_component-forwardRef **/

function FnCmp(props, ref) {

    /** props 中是有一个特殊的属性 ref，但不允许开发者访问 **/

    console.log('[FnCmp]: ', props, ref);

    return (

        <h1
            ref={ref}
        >
            <span>{props.words}</span>
        </h1>
    )
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * forwardRef(fnCmp): newCmp;           // 仅可传递 函数组件( 并且使用后必须有第二个 ref 参数 )
 *
 *
 * 传递 FnCmp 得到一个新的 NewFnCmp
 */

const NewFnRef = React.forwardRef(FnCmp);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class ForwardFnRef extends Component {

    FnRef = React.createRef();

    componentDidMount() {

        /** 未转发之前 FnRef 为 undefined **/

        console.log('[this.FnRef]: ', this.FnRef);
    }

    render() {

        return (

            <React.Fragment>

                <NewFnRef
                    ref={this.FnRef}
                    words="hello world"
                />

            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {
    FnCmp,
    ForwardFnRef
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
