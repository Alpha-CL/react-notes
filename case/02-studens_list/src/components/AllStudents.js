///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import {Student} from "./Student";


//-------------------------------------------------------------------------------------------------------------------//


export {
    AllStudents
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class AllStudents extends Component {

    render() {

        // console.log(this.props);
        // console.log(this.props.stus);

        const students = this.props.stus.map(
            val => <Student key={val.id} {...val}/>
        );

        return (

            <ul>
                {students}
            </ul>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
