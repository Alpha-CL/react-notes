///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 当 Context.Provider.value 发生变化，引用该 context 的后代组件 render(); 都会强制重新渲染
 *
 * <Context.Provider
 *
 *      value: { changed }              // 内部比较原理: Object.is();
 *
 * > children <Context.Provider>
 *
 * * 会导致使用该 Context 的偶有后代元素强制重新渲染( 无论该后代元素是否有优化 "shouldComponentUpdate(): false;" )
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** New Context APi **/

const ctx = React.createContext({});


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class Child extends Component {

    constructor(props) {

        super(props);

        this.state = {

        };
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {

        console.log('[Child.shouldComponentUpdate(): false;]');

        return false;
    }

    render() {

        console.log('[Child-Rendered]');

        return (
            <ctx.Consumer>

                {(val) => {

                    return (
                        <React.Fragment>
                            <h3>Child</h3>
                            <p>context 会强制重新渲染</p>
                            <p>ctx.context.name: {val.name}</p>
                            <p>ctx.context.age: {val.age}</p>
                            <hr/>
                            <SubChild
                                {...this.props}
                            />
                            <hr/>
                        </React.Fragment>
                    );
                }}

            </ctx.Consumer>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class SubChild extends Component {

    constructor(props) {

        super(props);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {

        console.log('[SubChild.shouldComponentUpdate(): false;]');

        return false;
    }

    render() {

        console.log('[SubChild-Rendered]');

        return (
            <React.Fragment>
                <h3>SubChild</h3>
                <p>props 不会被强制重新渲染</p>
                <p>props.name: {this.props.name}</p>
                <p>props.age: {this.props.age}</p>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** create context **/

class NoOptimization extends Component {


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
        const Provider = ctx.Provider;                  /** 不可改变命名: 改变后会报错 **/

        return (

            <ctx.Provider
                value={this.state}
            >
                <h3>RootContext</h3>
                <button
                    onClick={() => {
                        this.setState({
                            age: this.state.age + 1
                        })
                    }}
                >age + 1
                </button>
                <hr/>
                <Child
                    {...this.state}
                />
            </ctx.Provider>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    NoOptimization
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
