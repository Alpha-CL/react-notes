///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import PropTypes from "prop-types";
import {commonTypes} from "../../utils/commonTypes";
import {withDataGroup} from "../hoc/withDataGroup";


//-------------------------------------------------------------------------------------------------------------------//


class Radios extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        info: commonTypes.singleData,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func,
    };

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

        return (

            <label key={this.props.info.value}>
                {this.props.info.text}
                <input
                    type="radio"
                    name={this.props.name}
                    value={this.props.info.value}
                    checked={this.props.value === this.props.info.value}
                    onChange={this.handleChange}
                />
            </label>
        );
    }

    handleChange = (e) => {

        const val = e.target.value;

        this.props.handleChange && this.props.handleChange(val, this.props.name, e);
    };

    render() {

        return (

            <React.Fragment>
                {this.getRadios()}
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export default withDataGroup(Radios);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
