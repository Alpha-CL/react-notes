///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import {ForwardFnRef} from "./components/FnCmp"
import {ForwardClsRef} from "./components/ClsCmp";
import {Content} from "./components/Content";
import {WithContentRef} from "./Hoc/WithContentRef";


//-------------------------------------------------------------------------------------------------------------------//


const ConRef = WithContentRef(Content);

class App extends Component {

    contentRef = React.createRef();

    constructor(props) {

        super(props);

        this.state = {

        };
    }

    componentDidMount(){

        console.log('[this.contentRef]: ',this.contentRef);
    }

    render() {

        return (

            <React.Fragment>
                <ForwardFnRef/>
                <hr/>
                <ForwardClsRef/>
                <hr/>

                <ConRef
                    ref={this.contentRef}
                    content="hello world"
                />
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
