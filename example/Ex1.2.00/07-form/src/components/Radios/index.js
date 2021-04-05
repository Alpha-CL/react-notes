///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


export {
    Radios
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class Radios extends Component {

    constructor(props) {

        super(props);

        this.state = {};
    }

    // datas = [
    //     {value:'footeball', text: '足球'},
    //     {value:'basketball', text: '篮球'},
    //     {value:'movie', text: '电影'}
    // ]

    getRadios() {

        return this.props.datas.map(item => {

            return (

                <label key={item.value}>
                    {item.text}
                    <input
                        type="radio"
                        name={this.props.name}
                        value={item.value}
                        checked={this.props.value === item.value}
                        onChange={this.handleChange}
                    />
                </label>
            );
        });
    }

    handleChange = (e) => {

        const val = e.target.value;

        this.props.handleChange && this.props.handleChange(val, this.props.name, e);
    };

    render() {

        return (

            <>
                {this.getRadios()}
            </>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
