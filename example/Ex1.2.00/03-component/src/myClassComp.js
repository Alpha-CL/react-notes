///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";

// import React, {Component} from "react";


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    MyClassComp,
    ClassCompTransferData,
}


//-------------------------------------------------------------------------------------------------------------------//


/** create class_component **/
class MyClassComp extends React.Component {
// export default class MyClassComp extends Component {

    render() {

        return (

            <div>class_component</div>
        );
    }
}


//-------------------------------------------------------------------------------------------------------------------//


/** class_component transfer_data **/
class ClassCompTransferData extends React.Component {

    constructor(props) {

        /**
         * 利用 props 传递数据
         *
         *
         */

        /** 类继承，必须先绑定 this **/
        super(props);               // this.props = props;

        console.log('[props]: ', props);
        console.log('[this.props]: ', this.props);
        console.log('[props === this.props]: ', props === this.props);
    }

    render() {

        return (
            <div>[class_component transfer_data]: { this.props.num }</div>
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





