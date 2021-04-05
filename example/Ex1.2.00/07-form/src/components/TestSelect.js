///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import {Select} from "./Select";
import {getAllStudents} from "../services/students";



//-------------------------------------------------------------------------------------------------------------------//


export {
    TestSelect
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class TestSelect extends Component {

    constructor(props) {

        super(props);

        this.state = {

            datas:[],
            value: ''
        };
    }

    async componentDidMount() {

        const stus = await getAllStudents();

        this.setState({
            datas: stus.map(val => ({value: val.id.toString(), text: val.name}))
        })
    }

    onChange = (val) => {

        this.setState({

            value: val
        })
    };

    render() {

        return (

            <>
                <Select
                    name='loves'
                    {...this.state}
                    handleChange={this.onChange}
                />
            </>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
