///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


export {
    CmpA,
    CmpB,
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class CmpA extends Component {

    constructor(props) {

        super(props);

        this.state = {};
    }

    render() {

        return (

            <h1>Cmp_A, props.a: {this.props.a}</h1>
        );
    }
}

class CmpB extends Component {

    constructor(props) {

        super(props);

        this.state = {};
    }

    render() {

        return (

            <h1>Cmp_B, props.b: {this.props.b}</h1>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
