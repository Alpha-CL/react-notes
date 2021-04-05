///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import {Pager} from "./Pager";
import {StudentsList} from "./StudentsList";
import {Modal} from "./Modal";


//-------------------------------------------------------------------------------------------------------------------//


export {
    PagerTest
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class PagerTest extends Component {

    state = {
        current: 3,
        total: 0,
        limit: 10,
        panelNumber: 5,
        students: [],
        isLoading: false
    };

    constructor(props) {

        super(props);
        // this.fetchStudents();
    }

    // async fetchStudents() {
    //     this.setState({
    //         isLoading: true
    //     });
    //     const resp = await fetch(`http://api.duyiedu.com/api/student/findByPage?appkey=demo13_1545210570249&page=${this.state.current}&size=${this.state.limit}`)
    //         .then(resp => resp.json())
    //         .then(resp => resp.data);
    //     this.setState({
    //         total: resp.cont,
    //         students: resp.findByPage,
    //         isLoading: false
    //     })
    // }


    handlePageChange = (newPage) => {

        this.setState({
            current: newPage
        });

        // this.fetchStudents();

        // console.log(newPage);
        // this.setState({
        //
        //     current: newPage
        // });
    };

    render() {

        return (
            <div className="container">

                <StudentsList stus={this.state.students}/>

                <div className="pager">
                    <Pager
                        {...this.state}
                        onPageChange={this.handlePageChange}
                    />
                </div>

                <Modal show={this.state.isLoading}/>

            </div>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
