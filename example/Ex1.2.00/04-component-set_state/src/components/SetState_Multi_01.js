///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


export {
    SetState_Multi_01
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class SetState_Multi_01 extends Component {

    constructor(props) {

        super(props);

        this.state = {

            n: 0
        };
    }

    handleClick = () => {

        /**
         * setState(); 对状态的改变，"可能" 是异步的
         *
         *
         * 1) 同步: 若改变状态的代码处于某个 HTML 元素的事件中，则其是异步的，否则是同步的
         *
         * 2) 异步: 若改变状态的代码处于某个 HTML 元素的事件中，则其是异步的，否则是同步的
         */

        this.setState({

            /** 此时 this.state.n 异步处理，值还未发生改变，则 3 次执行仍然是 "0 + 1" **/
            n: this.state.n + 1,

        });

        this.setState({

            /** 此时 this.state.n 异步处理，值还未发生改变，则 3 次执行仍然是 "0 + 1" **/
            n: this.state.n + 1,

        });

        this.setState({

            /** 此时 this.state.n 异步处理，值还未发生改变，则 3 次执行仍然是 "0 + 1" **/
            n: this.state.n + 1,

        });

    };

    render() {

        console.log('[render]');                        // 后输出

        return (

            <div>
                <h1>{this.state.n}</h1>
                <p>
                    <button
                        onClick={this.handleClick}
                    >click</button>
                </p>
            </div>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
