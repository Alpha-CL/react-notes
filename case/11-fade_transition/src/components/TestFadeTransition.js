///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {SwitchTransition,TransitionGroup} from "react-transition-group";
import {FadeTransition} from "./FadeTransition";


//-------------------------------------------------------------------------------------------------------------------//


import { v4 as uuidv4 } from 'uuid';

class TestFadeTransition extends PureComponent {

    static propTypes = {

    };

    static defaultProps = {

    };

    constructor(props) {

        super(props);

        this.state = {
            stateDes: true,
            tasks : [
                {id: uuidv4(), name: 'task_01'},
                {id: uuidv4(), name: 'task_02'},
                {id: uuidv4(), name: 'task_03'},
            ]
        };
    }

    render() {

        return (

            <React.Fragment>

                <h3>FadeTransition</h3>
                <FadeTransition
                    in={this.state.stateDes}
                    classNames="fade"
                    appear
                >
                    <h1>Hello World</h1>
                </FadeTransition>
                <hr/>

                <h3>SwitchTransition > FadeTransition</h3>
                <SwitchTransition>
                    <FadeTransition
                        key={this.state.stateDes}
                        classNames="fade"
                        appear
                    >
                        <h1>Hello World</h1>
                    </FadeTransition>
                </SwitchTransition>
                <hr/>

                <h3>TransitionGroup > FadeTransition</h3>
                <TransitionGroup
                    component="ul"
                >
                    {
                        this.state.tasks.map(item => (
                            <FadeTransition
                                key={item.id}
                                timeout={500}
                            >
                                <li>
                                    {item.name}
                                    <button
                                        onClick={()=> {
                                            this.setState({
                                                tasks: this.state.tasks.filter(it=> it.id !== item.id)
                                            })
                                        }}
                                    >delete</button>
                                </li>
                            </FadeTransition>
                        ))
                    }
                </TransitionGroup>
                <button
                    onClick={()=>{
                        let name = window.prompt('please input task name');

                        this.setState({
                            tasks: [
                                ...this.state.tasks,
                                {
                                    id: uuidv4(),
                                    name
                                }
                            ]
                        })
                    }}
                >
                    add task
                </button>
                <hr/>

                <button
                    onClick={() => {
                        this.setState({
                            stateDes: !this.state.stateDes
                        });
                    }}
                >switch state
                </button>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    TestFadeTransition
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
