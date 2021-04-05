///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import PropTypes from "prop-types";
import {commonTypes} from "../../utils/commonTypes";
import {withDataGroup} from "../hoc/withDataGroup";


//-------------------------------------------------------------------------------------------------------------------//


class Option extends Component {

    static propTypes = {
        info: commonTypes.singleData
    };

    render() {

        return (

            <option
                value={this.props.info.value}
            >
                {this.props.info.text}
            </option>
        )
    }
}

const OptGroup = withDataGroup(Option);

class Select extends Component{

    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func
    };

    handleChange = (e) => {

        const val = e.target.value;

        this.props.handleChange && this.props.handleChange(val, this.props.name, e);
    };

    render() {

        return (
            <select
                name={this.name}
                value={this.props.value}
                onChange={this.handleChange}
            >
                <OptGroup {...this.props}/>
            </select>
        )
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {
    Select
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
