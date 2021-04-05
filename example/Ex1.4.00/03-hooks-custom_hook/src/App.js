///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {TestUseAllStudents} from "./components/TestUseAllStudents";
import {TestWithAllStudents} from "./components/TestWithAllStudents";
import {TestUsePageStudents} from "./components/TestUsePageStudents";
import {TestAllStudentsOfRenderProp} from "./components/TestAllStudentsOfRenderProp";
import {TestUseTimer} from "./components/TestUseTimer";



//-------------------------------------------------------------------------------------------------------------------//


/**
 * Custom Hook
 *
 *
 * 自定义 hook 将一些常用的，跨越多个组件的 hook 功能，抽离出来形成一个函数
 * 该函数就是自定义 hook
 *
 ** 1) 函数名必须以 use 开头
 ** 2) 调用自定义 Hook函数 时，应放置在顶层
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class App extends PureComponent {

    constructor(props) {

        super(props);

        this.state = {

        };
    }

    render() {

        return (

            <React.Fragment>
                <h3>custom hook</h3>
                {/*<TestUseAllStudents/>*/}
                <hr/>
                <h3>high-order component</h3>
                {/*<TestWithAllStudents/>*/}
                <hr/>
                {/*<TestUsePageStudents/>*/}
                {/*<hr/>*/}
                {/*<TestAllStudentsOfRenderProp/>*/}
                {/*<hr/>*/}
                <TestUseTimer/>
                <hr/>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {
    App
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
