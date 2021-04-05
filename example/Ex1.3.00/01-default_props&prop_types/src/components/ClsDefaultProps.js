///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


export {
    ClsDefaultProps
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class ClsDefaultProps extends Component {

    /** methods-2 **/
    static defaultProps = {
        a: 1,
        b: 2,
        c: 3
    };

    constructor(props) {

        console.log('[ClsDefaultProps]: ', props);

        super(props);

        this.state = {};
    }

    render() {

        return (

            <div>
                a: {this.props.a}, b: {this.props.b}, c: {this.props.c}
            </div>
        );
    }
}

/** methods-1 **/
// ClsDefaultProps.defaultProps = {
//     a: 1,
//     b: 2,
//     c: 3
// };


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
