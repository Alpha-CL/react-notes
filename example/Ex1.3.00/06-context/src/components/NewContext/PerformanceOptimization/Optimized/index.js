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
         ** ?????? this.setState(); ???????????????????????? this.state??????????????????????????? stateObj
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

        /** ?????????????????? **/
        const Provider = ctx.Provider;                  /** ??????????????????: ?????????????????? **/

        /**
         * Context.Provider.value changed
         *
         *
         ** ??? Context.Provider.value ????????????( ?????? "?????????????????????" ???????????? value ?????????????????? object.is(); )
         ** ????????? Context ??????????????? render(); ?????????????????????
         */

        /**
         * resolve: setState(); ????????????????????? stateObj
         *
         *
         * Context.Provider.value = this.state              // ????????????????????????
         * Context.Provider.value = this.state.prop         // ???????????????????????????
         *
         *
         ** ?????? Context.Provider.value = this.state.prop ??????stateObj ?????????????????????????????? stateObj.prop ?????????????????????
         ** ??????????????? "????????????"
         */

        return (

            <ctx.Provider
                value={this.state.ctx}
            >
                <h3>RootContext</h3>
                <p>?????? Context.Provider.value = this.state.prop ??????stateObj ?????????????????????????????? stateObj.prop ?????????????????????</p>
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
