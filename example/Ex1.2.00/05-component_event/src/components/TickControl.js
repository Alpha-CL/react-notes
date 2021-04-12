///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import {Tick} from "./Tick";


//-------------------------------------------------------------------------------------------------------------------//


export {
    TickControl
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class TickControl extends Component {

    constructor(props) {

        super(props);

        this.state = {

            isOver: false
        };

        /**
         * bind(this);
         *
         *
         * 本质: 将 "原型上" 的方法绑定到 "对象上"
         */

        this.handleClick = this.handleClick.bind(this);                 // [ bind 绑定 this Methods-1 ]
                                                                        // ( 效率相对较高 ): 构造器中通过 bind(); 绑定 this
    }

    // handleClick() {
    //
    //     console.log('[clicked]');
    //     console.log(this);                                           // 事件处理函数中未绑定 this 时，this 指向 undefined
    // }

    handleClick = () => {                                               // [ 箭头函数绑定 this Methods-2 ]
                                                                        // JS-Next 语法，目前可通过 babel 预编译解析使用
        console.log('[clicked]');
        console.log(this);
    };


    render() {

        let tickStatus = "正在倒计时";

        if (this.state.isOver) {

            tickStatus = "倒计时完成";
        }

        return (

            <>
                <Tick
                    number={10}

                    // 箭头函数自动绑定外层 this
                    onOver={() => {                                     // [ 箭头函数绑定 this Methods-1 ]
                        // 行内 自动绑定 this
                        this.setState({
                            isOver: true
                        });
                    }}

                    // 此时就会出现 this 指向 undefined
                    // onClick={this.handleClick}
                    onClick={this.handleClick.bind(this)}               // [ bind 绑定 this Methods-2 ]
                    // 行内通过 bind(); 绑定 this
                />
                <h3>{tickStatus}</h3>
            </>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
