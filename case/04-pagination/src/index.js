///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import ReactDOM from "react-dom";
import {Pager} from "./components/Pager";
import {PagerTest} from "./components/PagerTest";


//-------------------------------------------------------------------------------------------------------------------//


//-------------------------------------------------------------------------------------------------------------------//


const root = document.getElementById('root');

ReactDOM.render(
    (
        <React.Fragment>

            <h3>Pager</h3>
            <Pager
                current={3}
                total={100}
                limit={9}
                panelNumber={5}
            />
            {/*<hr/>*/}

            {/*<h3>PagerTest</h3>*/}
            {/*<PagerTest/>*/}
            <hr/>

        </React.Fragment>
    )
    , root);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
