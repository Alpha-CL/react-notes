///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


class RefFn extends Component {

    constructor(props) {

        super(props);

        this.state = {

            show: true
        };
    }

    componentDidMount() {

        // console.log('[didMount invoking]', this.refFunc);
    }

    refFn = (el) => {

        /**
         * refFn            // 将赋值提取到 类中，而不是 在行内的 箭头函数，则不会执行多次
         *
         *
         * 函数调用时间: 1) 在 componentDidMount 中即可以使用 该函数
         *
         *             2) 若 ref 值发生了改变( 旧函数被新的函数替代 )
         *                则会分别调用 旧函数 及 新函数，触发在 componentDidUpdate 之前
         *
         *             3) 若 ref 所在的组件被卸载时，会调用该函数
         */

        this.refFunc = el;

        /**
         * 函数的两次调用
         *
         *
         * 1) 第一次: 旧函数被调用时，el: null
         *
         * 2）第二次: 新函数被调用时，el: obj
         */

        console.log('[函数被调用了!]', el);
    };

    handleClick = () => {

        // console.log(this.refFunc);

        this.setState({

            show: !this.state.show
        });
    };

    render() {

        return (

            <React.Fragment>

                {
                    this.state.show && (

                        <h4
                            ref={this.refFn}                // 仅执行一次( 若该组件被卸载，则还会调用一次 )

                            // ref={(el) => {               // 会执行两次
                            //
                            //     console.log(el);
                            //     console.log('[函数被调用了]');
                            // }}

                        >Ref: fn</h4>
                    )
                }

                <button
                    onClick={this.handleClick}
                >get ref.refFn
                </button>

            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    RefFn
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
