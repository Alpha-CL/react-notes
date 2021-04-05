///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import {routConfig} from "../../pages/routeConfig";
import {BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect} from "react-router-dom";


//-------------------------------------------------------------------------------------------------------------------//


function RootRouteView() {

    return (

        <React.Fragment>
            {getRoutes(routConfig, "/")}
        </React.Fragment>
    );
}

function getRoutes(routes, basePath) {

    if (!Array.isArray(routes)) {

        return null;
    }

    let rs = routes.map((val, i) => {

        const {children, path, component: Comp, ...rest} = val;

        let newPath = `${basePath}${path}`;

        newPath = newPath.replace(/\/\//g, "/");

        // console.log(newPath);

        return (

            <Route
                key={i}
                {...rest}
                path={newPath}
                render={context => (
                    <Comp {...context}>{ getRoutes(val.children, newPath) }</Comp>
                )}
            />
        );
    });

    return (

        <Switch>
            {rs}
        </Switch>
    )
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    RootRouteView
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
