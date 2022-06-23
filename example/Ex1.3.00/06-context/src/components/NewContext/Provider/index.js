///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * Provider                 // Creater
 *
 *
 * 创建一个组件上下文( context )
 * 该组件有一个 value 属性，可通过该属性设置 context 数据值
 *
 ** 避免创建相同数据的 Provider，而应考虑 提升 Provider 的使用层级
 ** 应将 Provider 提升至可供多个后代元素使用的层级
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** New Context APi **/

const ctx = React.createContext({
    foo: 'bar'
});


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function Child(props) {

    return (
        <React.Fragment>

            <h3>Child Context</h3>
            <hr/>

            <h3>SubChild Context</h3>
            <SubChild/>
            <hr/>

        </React.Fragment>
    );
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class SubChild extends Component {

    /** 类组件调用必须条件 **/
    static contextType = ctx;

    constructor(props) {

        super(props);
    }

    render() {

        return (
            <React.Fragment>
                <p>context.name: {this.context.name}</p>
                <p>context.age: {this.context.age}</p>
                <button
                    onClick={() => {
                        this.context.changeAge(this.context.age + 2);
                    }}
                >age + 2
                </button>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** create context **/

class Provider extends Component {

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
                <h3>Provider</h3>
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

    Provider
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
