///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


export {
    NewLifeCycle
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class NewLifeCycle extends Component {

    constructor(props) {

        super(props);

        this.state = {
            n: 0
        };
    }


    /**
     * getDerivedStateFromProps
     *
     *
     * 通过参数可以获取新的属性和状态
     * 该函数是静态( 无法使用 this.setState(); )
     * 该函数的返回值会覆盖组件状态
     * 该函数几乎没什么用
     */

    static getDerivedStateFromProps(props, state) {

        console.log('[getSnapshotBeforeUpdate]');

        console.log(props, state);

        // return null;            // 不改变当前状态

        return {                   // 用新对象替换之前的状态

            n: props.n
        }
    }


    /**
     * getSnapshotBeforeUpdate
     *
     *
     * 真实的 DOM 构建完成，但还未实际渲染到页面中
     * 在该函数中，通常用于实现一些附加的 dom操作
     * 该函数的返回值，会作为 getSnapshotBeforeUpdate 的第三个参数
     */

    getSnapshotBeforeUpdate(prevProps, prevState) {

        console.log('[getSnapshotBeforeUpdate]', prevProps, prevState);

        return 'componentDidUpdate.snapshot';
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        console.log('[componentDidUpdate]')
    }

    render() {

        return (

            <div>
                <h1>{this.state.n}</h1>
                <p>
                    <button onClick={() => {

                        this.setState({

                            n: this.state.n + 1
                        });
                    }}
                    >n + 1
                    </button>
                </p>
            </div>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
