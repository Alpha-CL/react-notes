///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import {CmpA, CmpB} from "./components/Comps";
import {withLog} from "./HOC/withLog";
import {withLogin} from "./HOC/withLogin";


//-------------------------------------------------------------------------------------------------------------------//


export {
    App
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 高阶组件使用注意事项:
 *
 *
 * 1) 禁止在 render(); 中使用 高阶组件
 *
 * 2) 禁止在 高阶组件 内部修改 传入的组件           // 单一应用: 仅做包裹添加组件功能
 */


/** HOC 需要在 函数之外，因组件会重复调用，会造成状态丢失和重复创建&销毁 **/
const Alog = withLog(CmpA),
    Blog = withLog(CmpB),
    Alogin = withLogin(CmpA),
    BLogin = withLogin(CmpB),
    AwithLogLogin = withLogin(withLog(CmpA)),
    BwithLogLoginParam = withLogin(withLog(CmpB, 'param'));


class App extends Component {

    constructor(props) {

        super(props);

        this.state = {};
    }

    render() {

        /** 禁止将 HOC 创建在 render 中，类组件会重用( 产生多次创建&销毁，及状态丢失 ) **/
        // const Alog = withLog(CmpA),
        //     Blog = withLog(CmpB),
        //     Alogin = withLogin(CmpA),
        //     BLogin = withLogin(CmpB),
        //     AwithLogLogin = withLogin(withLog(CmpA)),
        //     BwithLogLoginParam = withLogin(withLog(CmpB, 'param'));

        return (

            <React.Fragment>

                <h3>withLog</h3>
                <Alog a={1}/>
                <Blog b={2}/>
                <hr/>

                <h3>withLogin</h3>
                <Alogin isLogin/>
                <BLogin/>
                <hr/>

                <h3>AwithLogLogin</h3>
                <AwithLogLogin
                    isLogin
                    a={1}
                />
                <hr/>

                <h3>BwithLogLoginParam</h3>
                <BwithLogLoginParam
                    isLogin
                    b={2}
                />
                <hr/>

            </React.Fragment>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
