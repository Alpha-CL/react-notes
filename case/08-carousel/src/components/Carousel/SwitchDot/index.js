///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import PropTypes from "prop-types";

import "./index.css";


//-------------------------------------------------------------------------------------------------------------------//


class SwitchDot extends Component {

    static propTypes = {
        totalNum: PropTypes.number.isRequired,
        curIndex: PropTypes.number.isRequired,
        onChange: PropTypes.func,
    };

    static defaultProps = {};

    constructor(props) {

        super(props);

        this.state = {};
    }

    createDot() {

        let spanDons = [];

        for (let i = 0; i < this.props.totalNum; i++) {

            spanDons.push(
                <span
                    className={i === this.props.curIndex ? "dot active" : "dot"}
                    key={i}
                    onClick={()=> {
                        this.props.onChange && this.props.onChange(i)
                    }}
                />
            );
        }

        return spanDons;
    }

    render() {

        return (

            <div
                className="dots"
            >
                {this.createDot()}
            </div>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    SwitchDot
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
