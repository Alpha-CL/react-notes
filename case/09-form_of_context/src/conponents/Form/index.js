///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import PropTypes from "prop-types";
import {Provider} from "./formContext";
import {FormInput} from "./FormInput";
import {FormButton} from "./FormButton";


//-------------------------------------------------------------------------------------------------------------------//


class Form extends Component {

    static propTypes = {
        onSubmit: PropTypes.func
    };

    static defaultProps = {};

    constructor(props) {

        super(props);

        this.state = {
            formData: {},
            changeFormData: (name, val) => {

                this.setState({
                    formData: {
                        ...this.state.formData,
                        [name]: val
                    }
                })
            },
            onSubmit: () => {

                this.props.onSubmit && this.props.onSubmit(this.state.formData);
            },
        };
    }

    render() {

        return (
            <React.Fragment>
                <Provider
                    value={this.state}
                >
                    {this.props.children}
                </Provider>
            </React.Fragment>

        );
    }
}

Form.input = FormInput;
Form.button = FormButton;


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Form
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
