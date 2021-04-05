///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import {TaskList} from "../TaskList";
import {AddTask} from "../AddTask";


//-------------------------------------------------------------------------------------------------------------------//


class TaskContainerOfPureComponent extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {

        super(props);

        this.state = {

            tasks: []
        };
    }

    componentDidMount() {

        let tasks = [];

        for (let i = 1; i <= 10; i++) {

            tasks.push({

                name: `任务${i < 10 ? "0" + i : i}`,
                isFinish: Math.random() > 0.4,
            })
        }

        console.log(tasks);

        this.setState({

            tasks
        });
    }

    /** 若该函数写在行间，则会运行多次 render(); 因其每次返回的 引用地址不同，浅比较会认为两个对象不一样 **/
    handleAdd = (newTask) => {

        /** 此时会影响 浅比较: 比较该对象的引用地址相同，则会造成 不重新渲染 render(); 从而无法更新数据组件 **/
        // this.state.tasks.push(newTask);

        this.setState({
            tasks: [...this.state.tasks, newTask]
        });
    };

    render() {

        console.log("[PureComponent.TaskContainer.render]", "[tasks.length: ", this.state.tasks.length, "]");

        return (

            <React.Fragment>
                <AddTask
                    onAdd={this.handleAdd}
                />
                <TaskList tasks={this.state.tasks}/>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    TaskContainerOfPureComponent
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
