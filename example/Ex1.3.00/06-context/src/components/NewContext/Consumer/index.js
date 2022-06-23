///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * Consumer                 // consumer
 *
 *
 * 创建一个用于调用指定 上下文的对象( context )
 * 该组件 必须指定 targetContext.Consumer
 * 该组件的子节点是一个函数
 *
 * <targetContext.Consumer>
 *
 *     {(value)=>{              // value: ContextData
 *
 *         return (
 *
 *             <children/>
 *         );
 *     }
 *
 * <targetContext.Consumer/>
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** New Context APi **/

const ctx = React.createContext();


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function Child(props) {

    return (
        <React.Fragment>

            <h3>Child Context</h3>

            <ctx.Consumer>
                {(val) => {
                    return (
                        <React.Fragment>
                            <p>context.name: {val.name}</p>
                            <p>context.age: {val.age}</p>
                        </React.Fragment>
                    );
                }}
            </ctx.Consumer>

            <hr/>

            <h3>SubChild Context</h3>
            <SubChild/>

            <hr/>

        </React.Fragment>
    );
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class SubChild extends Component {

    /** 类组件调用必须条件: 仅用于调用单个 Context 的数据 **/
    // static contextType = ctx;

    constructor(props) {

        super(props);
    }

    render() {

        return (

            <ctx.Consumer>

                {(val) => {

                    return (
                        <React.Fragment>
                            <p>context.name: {val.name}</p>
                            <p>context.age: {val.age}</p>
                            <button
                                onClick={() => {
                                    val.changeAge(val.age + 2);
                                }}
                            >age + 2
                            </button>
                        </React.Fragment>

                    );
                }}

            </ctx.Consumer>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** create context **/

class Consumer extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {

        super(props);

        this.state = {

            name: 'beta',
            age: 17,
            changeAge: (newAge) => {
                this.setState({
                    age: newAge
                });
            }
        };
    }

    render() {

        /** 创建必要条件 **/
        const Provider = ctx.Provider;                  /** 不可改变命名: 改变后会报错 **/

        return (

            <ctx.Provider
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
            </ctx.Provider>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Consumer
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
