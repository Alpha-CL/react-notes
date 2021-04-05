///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import pic1 from "./assets/pic-1.jpg";
import pic2 from "./assets/pic-2.jpg";
import pic3 from "./assets/pic-3.jpg";


//-------------------------------------------------------------------------------------------------------------------//


const srcList = [pic1, pic2, pic3],
    domRoot = document.getElementById('root');

let index = 0,
    timer = null;


//-------------------------------------------------------------------------------------------------------------------//


function render() {

    ReactDOM.render(

        (<img
            src={srcList[index]}
            alt="pic"
        />),

        domRoot
    )
}

function start() {

    stop();

    timer = setInterval(() => {

        if (index < srcList.length - 1) {

            index++;

            render();

        } else {

            index = 0;
            render();
        }

    }, 1000);
}

function stop() {

    clearInterval(timer);
}

render();
start();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
