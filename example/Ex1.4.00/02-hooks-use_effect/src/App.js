///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {UseEffect} from "./components/UseEffect";
import {TestUseEffectOfReturn} from "./components/TestUseEffectOfReturn";
import {TestUseEffectOfSecondParam} from "./components/TestUseEffectOfSecondParam";
import {TestUseEffectExecutionTimeline} from "./components/TestUseEffectExecutionTimeline";
import {TestUseEffectOfFuncClosure} from "./components/TestUseEffectOfFuncClosure";
import {TestUseEffectOfTimer} from "./components/TestUseEffectOfTimer";
import {TestUseEffectOfUnstableFnParam} from "./components/TestUseEffectOfUnstableFnParam";


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
                {/*<TestUseEffectOfReturn/>*/}
                {/*<hr/>*/}
                {/*<TestUseEffectOfSecondParam/>*/}
                {/*<hr/>*/}
                {/*<TestUseEffectExecutionTimeline/>*/}
                {/*<hr/>*/}
                {/*<TestUseEffectOfFuncClosure/>*/}
                {/*<hr/>*/}
                {/*<TestUseEffectOfTimer/>*/}
                <TestUseEffectOfUnstableFnParam/>
                <hr/>
                {/*<hr/>*/}
                {/*<UseEffect/>*/}
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
