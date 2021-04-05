///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


export {
    OldLifeCycle
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class OldLifeCycle extends Component {

    constructor(props) {            // component_mounting_stage-01

        super(props);

        this.state = {

            n: 0
        };

        console.log('[component_mounting_stage-01]-[constructor-组件诞生！！！]');

        // 无法直接调用 this.setState，因为无法在新组建挂在到页面之前触发 this.setState();
        // this.setState(); 会触发页面重新渲染
        //
        // this.setState({
        //     n: 3
        // })；

        /**
         * 此时可以触发，因为是异步执行，组件已经挂在到页面中
         * 避免在 constructor 中使用 this.setState()
         * 初始化 state 直接使用 this.setstate 即可*
         */

        // setInterval(() => {
        //
        //     this.setState({
        //
        //         n: 3
        //     });
        //
        // }, 1000);
    }


    /**
     * componentWillMount               //  可以使用 this.setState()
     *
     *
     * 常规情况下和 构造函数 一样，只会运行一次
     *
     * 可以使用 this.setState(); 但为了避免 bug，不允许使用，因在某些特殊情况下，该函数可能会被调用多次
     */

    componentWillMount() {           // component_mounting_stage-02

        console.log('[component_mounting_stage-02]-[componentWillMount-组件即将被挂载]')
    }


    /**
     * componentDidMount
     *
     *
     * 只会执行一次
     * 可以使用 setState
     * 通常情况下，会将网络请求，启动计时器，等一开始需要的操作，书写到该函数中
     */

    componentDidMount() {            // component_mounting_stage-04

        console.log('[component_mounting_stage-04]-[componentDidMount-挂载完成]');
    }


    /**
     * componentWillReceiveProps
     *
     *
     * 即将接受新的额属性值
     * 参数为新的属性值对象
     * 该函数可能会导致一些bug，不建议使用
     */

    componentWillReceiveProps(nextProps) {          // component_active_stage-01

        console.log('[component_active_stage-01]-[componentWillReceiveProps]', 'nextProps: ', nextProps, 'this.props: ', this.props,);
    }


    /**
     * shouldComponentUpdate            // props & state 发生变化后，指示是否更新渲染该组件
     *
     *
     * 指示 React 是否要重新渲染该组件，通过返回 true || false 来指定
     * 默认直接返回 true
     */

    shouldComponentUpdate(nextProps, nextState) {

        console.log('[component_active_stage-02]-[shouldComponentUpdate: 判断组件是否更新渲染]', this.props, nextProps, this.state, nextState);


        return !(this.props.n === nextProps.n && this.state.n === nextState.n);

        // return false;                // 组件数据变动，但永远不会再更新渲染
    }


    /**
     * componentWillUpdate
     *
     *
     * 组件即将被重新渲染
     */

    componentWillUpdate(nextProps, nextState) {

        console.log('[component_active_stage-03]-[componentWillUpdate-组件即将被重新渲染]', nextProps, nextState);
    }


    /**
     * componentDidUpdate
     *
     *
     * 通常在该函数中 使用dom改变元素
     */

    componentDidUpdate(prevProps, prevState) {

        console.log('[component_active_stage-04]-[componentDidUpdate-组件已完成重新渲染]', prevProps, prevState);
    }


    /**
     * componentWillUnmount
     *
     *
     * 通常在该函数中销毁一些组件依赖的资源( eg: 计时器... )
     */

    componentWillUnmount() {

        console.log('[component_active_stage-05]-[componentWillUnmount-组件被销毁]');
    }


    /**
     * render                           // 禁止使用 this.setState(), 会报错: 递归无限渲染
     *
     *
     * 返回一个虚拟DOM，会被挂载到 虚拟DOM树 中，最终渲染到页面的真实DOM 中
     * render可能不止运行一次，只要需要重新渲染，就会被运行
     */

    render() {                          // component_mounting_stage-03

        console.log('[component_mounting_stage-03]-[render-渲染，返回的 React 元素会被挂载到虚拟DOM树中]');

        return (

            <div>
                <h3>old_life_cycle</h3>
                <div>[属性 n]: {this.props.n}</div>
                <div>[状态 n]: {this.state.n}</div>
                <button onClick={() => {

                    this.setState({

                        n: 1
                    })
                }}
                >state.n + 1
                </button>
            </div>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
