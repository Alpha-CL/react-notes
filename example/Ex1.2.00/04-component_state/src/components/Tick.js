///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 组件状态              // 组件状态仅在组件内有效
 *
 *
 * 仅用于组件内部的数据( 组件可自行维护的数据 )
 *
 * state 本质上是组件的一个属性( 类型为 object )
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 组件状态初始化          // 必须初始化状态
 *
 *
 * 1) 在构造器中设置 this.state = {};
 *
 * 2) 直接在类中设置 state = {};               // js_next_syntax: 目前非标准，但可以使用
 */


//-------------------------------------------------------------------------------------------------------------------//


export {
    Tick
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class Tick extends Component {


    /** 组件状态初始化-2 **/                   // JS Next 语法: 目前非标准，但可以使用
    // state = {
    //
    //     left: this.props.number
    // };


    /** 组件状态初始化-1 **/
    constructor(props) {

        super(props);

        this.state = {

            left: this.props.number
        };


        this.timer = setInterval(() => {

            /** 直接改变数据，React 无法监控数据变化 **/
            // this.state.left--;

            /**
             * this.setState();
             *
             *
             * 调用 setState() 重新设置组件内的数据状态
             *
             * 会将 "改变后的数据对象" 和 "之前的数据对象" 混合，有相同的 key 则覆盖，并自动触发 "当前组件重新渲染"
             *
             *
             * * setState()，会使 当前数据和之前数据 mixin( 混合 )
             * * Object.assign(curData, origData);
             */

            this.setState({

                left: this.state.left - 1,
            });

            if (this.state.left === 0) {

                clearInterval(this.timer);
            }

        }, 1000);
    }

    render() {

        return (

            <React.Fragment>
                <h3>[ this.props.number ]</h3>
                <div>倒计时剩余时间: {this.props.number}</div>
                <hr/>
                <h3>[ this.state.left ]</h3>
                <div>倒计时剩余时间: {this.state.left}</div>
                <hr/>
            </React.Fragment>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
