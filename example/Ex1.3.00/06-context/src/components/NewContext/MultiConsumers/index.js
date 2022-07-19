///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


/**
 *
 *
 *
 *
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** New Context APi **/

const ctx1 = React.createContext({});
const ctx2 = React.createContext({});


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class Child extends Component {

    constructor(props) {

        super(props);

        this.state = {

            name: 'beta',
            age: 17
        };
    }

    render() {

        const Provider = ctx2.Provider;

        return (
            <React.Fragment>

                <ctx2.Provider
                    value={this.state}
                >

                    <h3>Child Context</h3>
                    <ctx1.Consumer>
                        {(val) => {
                            return (
                                <React.Fragment>
                                    <p>context.name: {val.name}</p>
                                    <p>context.age: {val.age}</p>
                                </React.Fragment>
                            );
                        }}
                    </ctx1.Consumer>
                    <hr/>

                    <h3>SubChild Context</h3>
                    <SubChild/>
                    <hr/>

                </ctx2.Provider>

            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class SubChild extends Component {

    /** 类组件调用必须条件: 仅用于调用单个 Context 的数据 **/
    // static contextType = ctx1;

    constructor(props) {

        super(props);
    }

    render() {

        return (

            <React.Fragment>
                <ctx1.Consumer>

                    {(val1) => {

                        return (
                            <React.Fragment>
                                <p>ctx1.context.name: {val1.name}</p>
                                <p>ctx1.context.age: {val1.age}</p>
                            </React.Fragment>
                        );
                    }}

                </ctx1.Consumer>
                <ctx2.Consumer>

                    {(val2) => {

                        return (
                            <React.Fragment>
                                <p>ctx2.context.name: {val2.name}</p>
                                <p>ctx2.context.age: {val2.age}</p>
                            </React.Fragment>
                        );
                    }}

                </ctx2.Consumer>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** create context **/

class MultiConsumer extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {

        super(props);

        this.state = {

            name: 'alpha',
            age: 18,
            changeAge: (newAge) => {
                this.setState({
                    age: newAge
                });
            }
        };
    }

    render() {

        /** 创建必要条件 **/
        const Provider = ctx1.Provider;                  /** 不可改变命名: 改变后会报错 **/

        return (

            <ctx1.Provider
                value={this.state}
            >
                <h3>Consumer</h3>
                <button
                    onClick={() => {
                        this.setState({
                            age: this.state.age + 1
                        })
                    }}
                >age + 1
                </button>
                <hr/>
                <Child/>
            </ctx1.Provider>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    MultiConsumer
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
