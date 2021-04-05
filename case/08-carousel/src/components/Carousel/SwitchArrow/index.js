///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import PropTypes from "prop-types";
import "./index.css";

//-------------------------------------------------------------------------------------------------------------------//


class SwitchArrow extends Component {

    static propTypes = {
        onChange: PropTypes.func
    };

    static defaultProps = {};

    constructor(props) {

        super(props);

        this.state = {};
    }

    render() {

        return (

            <div className="arrows">
                <div className="arrow arrow_l"
                     onClick={() => {
                         this.props.onChange && this.props.onChange('left');
                     }}
                >
                    &lt;
                </div>
                <div className="arrow arrow_r"
                     onClick={() => {
                         this.props.onChange && this.props.onChange('right');
                     }}
                >
                    &gt;
                </div>
            </div>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    SwitchArrow
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
