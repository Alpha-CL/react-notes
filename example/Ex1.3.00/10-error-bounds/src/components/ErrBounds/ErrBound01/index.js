///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";


//-------------------------------------------------------------------------------------------------------------------//


class ErrBound01 extends PureComponent {

    static propTypes = {};

    static defaultProps = {};

    /**
     * getDerivedStateFromError();          // 静态函数
     *
     *
     * 运行时间: 渲染子组件
     *
     ** 仅在 "子组件" 发生错误时触发该函数
     */

    static getDerivedStateFromError(err) {

        // console.error('[errored]', err);

        return {

            hasError: true
        }
    }

    constructor(props) {

        super(props);

        this.state = {

            hasError: false
        };
    }

    render() {

        if (this.state.hasError) {

            return (

                <h3>Error_01 出现错误 !</h3>
            );
        }

        return this.props.children;
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    ErrBound01
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
