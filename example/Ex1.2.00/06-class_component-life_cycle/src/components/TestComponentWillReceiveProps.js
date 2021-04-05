///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


export {
    TestComponentWillReceiveProps
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class TestComponentWillReceiveProps extends Component {

    constructor(props) {

        super(props);

        this.state = {

            n: this.props.n
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {

        this.setState({

            n: nextProps.n
        })
    }

    render() {

        return (

            <div>
                <h1>数字: {this.state.n}</h1>
                <button onClick={() => {
                    this.setState({
                        n: this.state.n + 1
                    });
                }}
                >n + 1
                </button>
            </div>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
