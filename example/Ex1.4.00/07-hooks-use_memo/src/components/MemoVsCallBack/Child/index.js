///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";


//-------------------------------------------------------------------------------------------------------------------//


class Child extends PureComponent {

    static propTypes = {

    };

    static defaultProps = {

    };

    constructor(props) {

        super(props);

        this.state = {

        };
    }

    render() {

        console.log('[child-render]');

        return (

            <React.Fragment>
                <h3>text: {this.props.text}</h3>
                <button
                    onClick={this.props.onClick}
                >change text</button>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Child
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////