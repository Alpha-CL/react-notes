///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {MemoVsCallBack} from "./components/MemoVsCallBack";
import {Problem} from "./components/Problem";
import {UseMemo} from "./components/UseMemo";



//-------------------------------------------------------------------------------------------------------------------//


class App extends PureComponent {

    constructor(props) {

        super(props);

        this.state = {

        };
    }

    render() {

        return (

            <React.Fragment>
                <h3>useMemo: 若依赖项未发生改变，则不会重新渲染 "高开销的代码( 多用于解决多次循环渲染 )"</h3>
                <UseMemo/>
                <hr/>
                <h3>Problem: 每当 input.value 发生改变，都会重新循环渲染( 性能消耗 )</h3>
                <Problem/>
                <hr/>
                {/*<h3>useMemo vs useCallback</h3>*/}
                {/*<MemoVsCallBack/>*/}
                {/*<hr/>*/}
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {
    App
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
