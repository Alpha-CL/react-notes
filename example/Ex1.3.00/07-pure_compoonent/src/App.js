///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import {TaskContainerOfComponent} from "./components/Component/TaskContainerOfComponent";
import {TaskContainerOfPureComponent} from "./components/PureComponent/TaskContainerOfPureComponent";


//-------------------------------------------------------------------------------------------------------------------//


export {
    App
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class App extends Component {

    constructor(props) {

        super(props);

        this.state = {

        };
    }

    render() {

        console.log("[App.render]");

        return (

            <React.Fragment>
                <h3>Component</h3>
                <p>存在多次渲染问题( 祖先的数据更改，引发后代组件部分不必要的 render(); )</p>
                <TaskContainerOfComponent/>
                <hr/>
                <h3>PureComponent</h3>
                <p>利用浅比较( 仅比较数据的第一层子项 是否相同返回是否需要渲染，从而 提升性能优化 )</p>
                <TaskContainerOfPureComponent/>
                <hr/>
            </React.Fragment>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
