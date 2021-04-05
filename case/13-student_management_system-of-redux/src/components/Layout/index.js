///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import "./index.css";
import PropTypes from "prop-types";


//-------------------------------------------------------------------------------------------------------------------//


class Layout extends PureComponent {

    static propTypes = {
        header: PropTypes.element,
        aside: PropTypes.element,
        children: PropTypes.node
    };

    static defaultProps = {

    };

    constructor(props) {

        super(props);

        this.state = {

        };
    }

    render() {

        return (
            <React.Fragment>
                <div className="container">
                    <div className="header">
                        {this.props.header}
                    </div>
                    <div className="middle">
                        <div className="aside">
                            {this.props.aside}
                        </div>
                        <div className="main">
                            {this.props.children}
                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Layout
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
