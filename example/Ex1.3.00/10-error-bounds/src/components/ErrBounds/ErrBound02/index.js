///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";


//-------------------------------------------------------------------------------------------------------------------//


class ErrBound02 extends PureComponent {

    static propTypes = {};

    static defaultProps = {};

    /**
     ** 仅可以监测 "子组件" "渲染期间( render(); )" 发生的错误
     *
     *
     **  1) 无法监测 该组件 自身的错误
     *
     **  2) 无法监测 渲染期间的 异步错误
     *
     **  3) 无法监测 事件中的错误
     */

    /**
     * static getDerivedStateFromError(error): stateObj;        // 通常用于改变 state
     *
     *
     * @error: 错误对象
     *
     * 运行时间: 渲染子组件过程中，发生错误之后，并且在更新页面之前
     * 返回值: 该函数返回一个对象，该对象会覆盖当前组件的 this.state
     *
     ** 仅在 "子组件" 发生错误时触发该函数
     */

    // static getDerivedStateFromError(err) {
    //
    //     // console.error('[errored]', err);
    //
    //     return {
    //
    //         hasError: true
    //     }
    // }


    /**
     * componentDidCatch(error, errorInfo): void;               // 通常该函数用于记录错误信息
     *
     *
     * @erroor: 错误信息
     * @errorInfo: 错误对象
     *
     * 运行时间: 渲染子组件过程中，发生错误，更新页面之后
     *          由于该勾子函数运行时间点比较靠后，因此不会在该函数中改变 this.state
     */

    componentDidCatch(error, errorInfo){

        console.log(error, errorInfo);

        this.setState({

            hasError: true
        });
    }

    constructor(props) {

        super(props);

        this.state = {

            hasError: false
        };
    }

    render() {

        /** 02_无法监测 渲染期间的 异步错误 **/
        setTimeout(() => {

            throw new Error('[无法监测异步的错误]');

        }, 1000);

        if (this.state.hasError) {

            return (

                <h3>Error_02 出现错误 !</h3>
            );
        }

        return this.props.children;
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    ErrBound02
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
