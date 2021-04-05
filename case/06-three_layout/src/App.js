///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import {Main} from "./components/Main/Main";
import {AsideLeft} from "./components/AsideLeft/AsideLeft";
import {AsideRight} from "./components/AsideRight/AsideRight";
import {ThreeLayout} from "./components/ThreeLayout";


//-------------------------------------------------------------------------------------------------------------------//


export {
    App
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function App() {

    return (

        <div>
            <ThreeLayout
                left={<AsideLeft/>}
                right={<AsideRight/>}
            >
                <Main/>
            </ThreeLayout>
        </div>
    );
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
