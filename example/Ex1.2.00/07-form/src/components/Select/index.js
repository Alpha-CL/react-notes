///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


export {
    Select
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class Select extends Component {

    constructor(props) {

        super(props);

        this.state = {};
    }

    // datas = [
    //     {value:'footeball', text: '足球'},
    //     {value:'basketball', text: '篮球'},
    //     {value:'movie', text: '电影'}
    // ]

    getOptions() {

        return this.props.datas.map(item => {

            return (

                <option
                    key={item.value}
                    value={item.value}
                >
                    {item.text}
                </option>
            );
        });
    }

    handleChange = (e) => {

        const val = e.target.value;

        this.props.handleChange && this.props.handleChange(val, this.props.name, e);
    };

    render() {

        return (

            <select
                name={this.props.name}
                value={this.props.value}
                onChange={this.handleChange}
            >
                {this.getOptions()}
            </select>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
