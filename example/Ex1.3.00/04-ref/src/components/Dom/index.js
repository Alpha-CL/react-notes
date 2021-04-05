///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


class Dom extends Component {

    constructor(props) {

        super(props);

        this.state = {};
    }


    handleClickFucus = () => {


        /** 原生调用 **/

        // const domInput = document.querySelector('input');
        // domInput.focus();


        /**
         * ref          // 将元素标记，后可在 this.refs 中获取指定 "dom" 或 "自定义组件"
         *
         *
         * 使用场景: 1) 希望直接操作某个 reactDom 元素              // 返回 reactDom
         *          2) 希望直接使用自定义组件中的某个方法            // 返回 自定义组件对象
         *
         *
         * * 无法在函数组件上使用( 仅可在 真实的dom 和 自定义类组件 上使用 )
         * * ref 不再推荐 赋值字符串，字符串赋值的方式将来可能会被移除
         *
         *
         * * 建议赋值: ref: ( obj | fn );
         */


        /**
         * 谨慎使用 ref
         *
         *
         * 1) 调用真实 DOM 对象中的方法时使用
         *
         * 2) 需要调用某个类组件中的方法时使用
         */

        // console.log(this.refs);


        this.refs.domRef.focus();
    };

    render() {

        return (

            <React.Fragment>
                <input
                    type="text"
                    ref="domRef"
                />
                <button
                    onClick={this.handleClickFucus}
                >聚焦
                </button>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Dom
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
