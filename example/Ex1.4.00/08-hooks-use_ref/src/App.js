///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {Problem} from "./components/Problem";
import {UseRef} from "./components/UseRef";
import {Timer} from "./components/Timer";


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
                <h1>Problem</h1>
                <h3>React.createRef(); 每次渲染都会返回一个新的引用地址</h3>
                <Problem/>
                <hr/>
                <h1>useRef</h1>
                <h3>useRef(): fixedAddress; 会返回一个固定的引用地址</h3>
                <UseRef/>
                <hr/>
                <h1>Timer of useRef</h1>
                <Timer/>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {
    App
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
