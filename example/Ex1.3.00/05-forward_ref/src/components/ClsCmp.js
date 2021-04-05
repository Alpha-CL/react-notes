///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


/** class_component-forwardRef **/

class ClsCmp extends Component {

    /** props 中是有一个特殊的属性 ref，但不允许开发者访问 **/

    render() {

        return (
            <h1
                ref={this.props.clsref}
            >
                <span>{this.props.words}</span>
            </h1>
        );
    }
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


const NewClsRef = React.forwardRef((props, ref) => {

    /** 不可以传入 ref属性名 ( ref 为特殊属性，获取的是 dom 或者 cmp )**/
    /** 需传入自定义的 ref 属性名 **/

    return (
        <ClsCmp
            {...props}
            clsref={ref}
        />
    );
});


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class ForwardClsRef extends Component {

    ClsRef = React.createRef();

    componentDidMount() {

        console.log('[this.ClsRef]: ', this.ClsRef);
    }

    render() {

        return (

            <React.Fragment>

                <NewClsRef
                    ref={this.ClsRef}
                    words="hello world"
                />

            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    ForwardClsRef
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
