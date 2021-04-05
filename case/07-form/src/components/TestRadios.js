///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import RadioGroup from "./Radios";
import {getAllStudents} from "../services/students";



//-------------------------------------------------------------------------------------------------------------------//


export {
    TestRadios
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class TestRadios extends Component {

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
                <RadioGroup
                    name='loves'
                    {...this.state}
                    handleChange={this.onChange}
                />
            </>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
