///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {BrowserRouter as Router, Route} from "./react-router-dom";


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
                <Router>

                    <div className="container">
                        <div className="nav">
                        </div>
                        <div className="route-view">
                            <Route path="/page1" component={Page1}/>
                            <Route path="/page2" component={Page2}/>
                            <Route path='/' component={Nav}/>
                        </div>
                    </div>

                </Router>
            </React.Fragment>
        );
    }
}


function Page1(props) {

    return (

        <React.Fragment>
            <h3>Page_01</h3>
        </React.Fragment>
    );
}

function Page2(props) {

    return (

        <React.Fragment>
            <h3>Page_02</h3>
        </React.Fragment>
    );
}

function Nav({history}) {

    return (

        <React.Fragment>
            <button
                onClick={() => {

                    console.log(history);

                    history.push('/page1');
                }}
            >Page_01</button>
            <button
                onClick={() => {
                    history.push('/page2');
                }}
            >Page_02</button>
        </React.Fragment>
    );
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {
    App
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
