///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import CheckBoxGroup from "./Checkbox";
import {getAllStudents} from "../services/students";


//-------------------------------------------------------------------------------------------------------------------//


export {
    TestCheckboxs
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class TestCheckboxs extends Component {

    constructor(props) {

        super(props);

        this.state = {

            // datas: [
            //     {value: 'football', text: '足球'},
            //     {value: 'basketball', text: '篮球'},
            //     {value: 'movie', text: '电影'},
            // ],
            // name: 'loves',
            // chooseDatas: ['football'],

            datas:[],
            chooseDatas:[]
        };
    }

    async componentDidMount() {

        const stus = await getAllStudents();

        this.setState({
            datas: stus.map(val => ({value: val.id.toString(), text: val.name}))
        })
    }

    onChange = (newArr) => {

        this.setState({

            chooseDatas: newArr
        })
    };

    render() {

        return (

            <>
                <CheckBoxGroup
                    name='loves'
                    {...this.state}
                    handleChange={this.onChange}
                />
            </>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
