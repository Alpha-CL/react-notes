///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Task, PureTask} from "../Task";


//-------------------------------------------------------------------------------------------------------------------//


class TaskList extends PureComponent {

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

        return this.props.tasks.map((item, i) => {

            return (

                <PureTask
                    {...item}
                    key={i}
                />
            );
        });
    }

    render() {

        console.log("[PureComponent.TaskList.render]");

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
