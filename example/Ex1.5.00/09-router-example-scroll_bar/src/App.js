///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {Page} from "./pages/Page";
import {PageOfHoc} from "./pages/PageOfHoc";
import {PageOfUse} from "./pages/PageOfUse";
import {PageOfRouteGuard} from "./pages/PageOfRouteGuard";


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
                {/*<h1 style={{marginTop: 80}}>页面无刷新切换，但滚动条不动</h1>*/}
                {/*<Page/>*/}
                {/*<PageOfHoc/>*/}
                {/*<PageOfUse/>*/}

                <PageOfRouteGuard/>

            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {
    App
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
