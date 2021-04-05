///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


export {
    SetState_Multi_03
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class SetState_Multi_03 extends Component {

    constructor(props) {

        super(props);

        this.state = {

            n: 0
        };
    }

    handleClick = () => {

        this.setState(cur => {

            /**
             * @cur: 表示当前状态
             * 该函数的返回结果，会混合(覆盖)之前的结果
             * 该函数是异步执行的
             *
             * * React 会对 "异步setState();" 优化，将多次 setState(); 进行合并
             * * ( 将 多次状态 改变完成后，再统一对 state 进行改变，然后触发 render )
             */
            return {

                n: cur.n + 1
            }
        }, () => {

            console.log('[state更新完成]', this.state.n);
        });


        this.setState(cur => ({n: cur.n + 1}));

        this.setState(cur => ({n: cur.n + 1}));

    };

    render() {

        console.log('[render]');                        // 后输出

        return (

            <div>
                <h1>{this.state.n}</h1>
                <p>
                    <button
                        onClick={this.handleClick}
                    >click
                    </button>
                </p>
            </div>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
