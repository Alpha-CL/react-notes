///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import PropTypes from "prop-types";
import {Task} from "../Task";


//-------------------------------------------------------------------------------------------------------------------//


class TaskList extends Component {

    static propTypes = {
        tasks: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            isFinish: PropTypes.bool.isRequired
        })).isRequired
    };

    static defaultProps = {};

    constructor(props) {

        super(props);

        this.state = {};
    }

    createDomTasks() {

        return this.props.tasks.map((item, idx) => {

            return (

                <Task
                    {...item}
                    key={idx}
                />
            );
        });
    }

    render() {

        console.log("[Component.TaskList.render]");

        const domTasks = this.createDomTasks();

        return (

            <React.Fragment>
                <ul>
                    {domTasks}
                </ul>

            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    TaskList
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
