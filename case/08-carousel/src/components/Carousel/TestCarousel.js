///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import {Carousel} from "./index";

import src_01 from "../../images/banner_01.jpg";
import src_02 from "../../images/banner_02.jpg";
import src_03 from "../../images/banner_03.jpg";
import src_04 from "../../images/banner_04.jpg";
import src_05 from "../../images/banner_05.jpg";


//-------------------------------------------------------------------------------------------------------------------//


const carouselDefaultProps = {
    width: 520,
    height: 280,
    autoDuration: 3000,
    clickDuration: 500,
    imgSrcs: [src_01, src_02, src_03, src_04, src_05],
};

function TestCaroursel(props) {

    return (

        <React.Fragment>
            <Carousel
                {...carouselDefaultProps}
            />
        </React.Fragment>
    );
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    TestCaroursel
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////