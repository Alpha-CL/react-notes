///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {Layout} from "./components/Layout";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import {Login} from "./pages/login";
import {Admin} from "./pages/Admin";


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
                <BrowserRouter>
                    <Switch>
                        <Route
                            path="/login"
                            component={Login}
                        />
                        <Route
                            path="/"
                            component={Admin}
                        />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {
    App
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
