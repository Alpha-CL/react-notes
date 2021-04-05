///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";


//-------------------------------------------------------------------------------------------------------------------//


class AddTask extends PureComponent {

    static propTypes = {

    };

    static defaultProps = {

    };

    constructor(props) {

        super(props);

        this.state = {
            name: ""
        };
    }

    render() {

        console.log("[PureComponent.AddTask.render]");

        return (

            <React.Fragment>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={e => {
                        this.setState({
                            name: e.target.value
                        })
                    }}
                />
                <button
                    onClick={() => {
                        this.props.onAdd && this.props.onAdd({
                            name: this.state.name,
                            isFinish: false
                        });
                        this.setState({
                            name: ""
                        });
                    }}
                >Add Task</button>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    AddTask
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
