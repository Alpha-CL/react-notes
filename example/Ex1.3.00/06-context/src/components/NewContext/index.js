///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import {DataFlow} from "./DataFlow";
import {Provider} from "./Provider";
import {Consumer} from "./Consumer";
import {MultiConsumer} from "./MultiConsumers";
import {NoOptimization} from "./PerformanceOptimization/NoOptimization";
import {Optimized} from "./PerformanceOptimization/Optimized";


//-------------------------------------------------------------------------------------------------------------------//


class NewContext extends Component {

    static propTypes = {

    };

    static defaultProps = {

    };

    constructor(props) {

        super(props);

        this.state = {

        };
    }

    render() {

        return (

            <React.Fragment>
                <h1>DataFlow</h1>
                <DataFlow/>
                <hr/>
                <h1>Provider</h1>
                <Provider/>
                <hr/>
                <h1>Consumer</h1>
                <Consumer/>
                <hr/>
                <h1>MultiConsumer</h1>
                <MultiConsumer/>
                <hr/>
                <h1>PerformanceOptimization-No_Optimization</h1>
                <p>当 Context.Provider.value 发生变化，引用该 context 的后代组件 render(); 都会强制重新渲染</p>
                <NoOptimization/>
                <hr/>
                <h1>Optimized</h1>
                <Optimized/>
                <hr/>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    NewContext
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
