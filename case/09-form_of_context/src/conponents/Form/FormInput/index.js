///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import PropTypes from "prop-types";
import {ctx} from "../formContext";

//-------------------------------------------------------------------------------------------------------------------//


class FormInput extends Component {

    static contextType = ctx;

    static propTypes = {
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
    };

    static defaultProps = {
        type: 'text'
    };

    constructor(props) {

        super(props);

        this.state = {};
    }

    render() {

        return (

            <React.Fragment>
                <input
                    type={this.props.type}
                    value={this.context.formData[this.props.name] || ""}
                    onChange={(e) => {
                        this.context.changeFormData(this.props.name, e.target.value);
                    }}
                />
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    FormInput
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
