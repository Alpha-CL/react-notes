///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import PropTypes from "prop-types";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 组件嵌套中存在 多个 Context 时, 数据来源始终 来源于 "就近祖先组件"
 *
 *
 * 类似于 JS Scope-Chain，始终获取就近祖先 的 ContextData
 */


//-------------------------------------------------------------------------------------------------------------------//


const types = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    handleAgeChange: PropTypes.func
};


class ChildContext extends Component {

    /** 接收数据必要条件: 用于约束指定接受部分数据及其类型 **/

    static contextTypes = types;

    /** 必要条件: 约束 context 中的数据类型 **/

    static childContextTypes = types;

    constructor(props, context) {

        super(props, context);

        console.log('[Child.context]: ', context);

        this.state = {

            name: 'beta',
            age: 16
        };

    }

    /** 必要条件:  获取 context 中的数据 **/

    getChildContext() {

        return {

            name: this.state.name,
            age: this.state.age,
            handleAgeChange: (newAge) => {
                this.setState({
                    age: newAge
                });
            }
        };
    }

    render() {

        return (
            <React.Fragment>

                <h3>Child Context</h3>
                <p>context.name: {this.context.name}</p>
                <p>context.age: {this.context.age}</p>
                <hr/>

                <h3>SubChild Context</h3>
                <SubChild/>
                <hr/>

            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class SubChild extends Component {

    /** 接收数据必要条件:  用于约束指定接受部分数据及其类型 **/

    static contextTypes = types;

    /** getContentData-Methods_01 **/
    /** constructor.param_02: 第二个参数 **/
    constructor(props, context) {

        super(props, context);

        console.log('[subChild.context]: ', context);
    }

    render() {

        return (

            <React.Fragment>
                {/** getContentData-Methods_02 **/}
                {/** this.context **/}
                <p>context.name: {this.context.name}</p>
                <p>context.age: {this.context.age}</p>
                <button
                    onClick={() => {
                        this.context.handleAgeChange(this.context.age + 2);
                    }}
                >change age in context data
                </button>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class MultiContexts extends Component {

    /** 必要条件:  约束 context 中的数据类型 **/

    static childContextTypes = types;

    constructor(props) {

        super(props);

        this.state = {

            name: 'alpha',
            age: 18
        };

        console.log('[this.state]: ', this.state);
    }

    /** 必要条件:  获取 context 中的数据 **/

    getChildContext() {

        return {

            name: this.state.name,
            age: this.state.age,
            handleAgeChange: (newAge) => {
                this.setState({
                    age: newAge
                });
            }
        };
    }

    render() {

        return (

            <React.Fragment>
                <h1>Multi Context</h1>
                <h3>Old Context</h3>
                <p>state.name: {this.state.name}</p>
                <p>state.age: {this.state.age}</p>
                <button
                    onClick={() => {
                        this.setState({
                            age: this.state.age + 1
                        })
                    }}
                >change context data
                </button>
                <hr/>
                <ChildContext/>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    MultiContexts
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
