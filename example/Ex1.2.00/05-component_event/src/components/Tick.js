///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


export {
    Tick
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class Tick extends Component {

    constructor(props) {

        super(props);

        this.state = {

            number: this.props.number
        };

        const timer = setInterval(() => {

            this.setState({

                number: this.state.number - 1,
            });

            if (this.state.number === 0) {

                clearInterval(timer);

                props.onOver && props.onOver();
            }

        }, 1000);
    }

    render() {

        return (

            <h2
                onClick={this.props.onClick}
            >倒计时: {this.state.number}</h2>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
