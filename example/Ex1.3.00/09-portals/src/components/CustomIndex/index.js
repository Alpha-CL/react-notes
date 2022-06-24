///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import ReactDom from "react-dom";
import {Child} from "./Child";


//-------------------------------------------------------------------------------------------------------------------//


class CustomIndex extends PureComponent {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {

        super(props);

        this.state = {};
    }

    virtualDomStyle = {
        padding: '20px',
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff'
    };

    virtualDom = (

        <React.Fragment>
            <div
                className="custom_index-wrap"
                style={this.virtualDomStyle}
            >
                <h1>Custom Index</h1>
                <Child/>
            </div>
        </React.Fragment>
    );

    indexContainer = document.querySelector('#custom');

    render() {


        /**
         * ReactDom.createPortal(child, container): reactDom;           // 将 JSX 渲染到指定真实 DOM 中
         *                                                              // 渲染后 虚拟dom 结构不变，仅改变 真实dom结构
         *
         * @child:      JSX
         * @container:  指定真实 Dom 容器
         *
         * return: reactDom
         *
         *
         ** 事件冒泡
         **
         ** 1) React 中事件是包装过的 ( 事件参数 event 也被包装过 )
         ** 2) React 中事件冒泡是依据 虚拟DOM结构 ( 与 真实DOM结构 无关 )
         */


        return ReactDom.createPortal(this.virtualDom, this.indexContainer);

        // return (
        //
        //     <React.Fragment>
        //         <h1>Custom Index</h1>
        //         <Child/>
        //     </React.Fragment>
        // );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    CustomIndex
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
