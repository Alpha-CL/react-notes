///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** New Context APi **/

const ctx = React.createContext();


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class Child extends Component {

    constructor(props) {

        super(props);

        this.state = {};
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
                            <p>ctx.context.name: {val.name}</p>
                            <p>ctx.context.age: {val.age}</p>
                            <hr/>
                            <SubChild/>
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
            <ctx.Consumer>

                {(val) => {

                    return (
                        <React.Fragment>
                            <h3>SubChild</h3>
                            <p>ctx.context.name: {val.name}</p>
                            <p>ctx.context.age: {val.age}</p>
                        </React.Fragment>
                    );
                }}

            </ctx.Consumer>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** create context **/

class Optimized extends Component {

    // datas = [
    //     {
    //         name: 'alpha',
    //         age: 18,
    //         changeAge: (newAge) => {
    //             this.setState({
    //                 age: newAge
    //             });
    //         }
    //     }
    // ];

    constructor(props) {

        super(props);

        /**
         * invoked this.setState();
         *
         *
         ** 调用 this.setState(); 后，无论是否改变 this.state，都会返回一个新的 stateObj
         */

        // this.state = this.datas[0];

        this.state = {
            ctx: {
                name: 'alpha',
                age: 18,
                changeAge: (newAge) => {
                    this.setState({
                        age: newAge
                    });
                }
            }
        };
    }

    render() {

        /** 创建必要条件 **/
        const Provider = ctx.Provider;                  /** 不可改变命名: 改变后会报错 **/

        /**
         * Context.Provider.value changed
         *
         *
         ** 当 Context.Provider.value 发生改变( 利用 "对象的引用地址" 比较当前 value 是否发生变化 object.is(); )
         ** 使用该 Context 的后代组件 render(); 都会被重新渲染
         */

        /**
         * resolve: setState(); 调用后返回新的 stateObj
         *
         *
         * Context.Provider.value = this.state              // 引用地址发生改变
         * Context.Provider.value = this.state.prop         // 引用地址不发生改变
         *
         *
         ** 利用 Context.Provider.value = this.state.prop 后，stateObj 的引用地址会改变，但 stateObj.prop 的地址不会改变
         ** 从而控制了 "强制更新"
         */

        return (

            <ctx.Provider
                value={this.state.ctx}
            >
                <h3>RootContext</h3>
                <p>利用 Context.Provider.value = this.state.prop 后，stateObj 的引用地址会改变，但 stateObj.prop 的地址不会改变</p>
                <button

                    onClick={() => {

                        this.setState({

                            age: this.state.age + 1

                        }, () => {

                            // this.datas.push(this.state);
                            // console.log(this.datas[0] === this.datas[1]);
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

    Optimized
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
