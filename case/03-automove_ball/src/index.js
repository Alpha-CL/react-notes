///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import ReactDOM from "react-dom";
import {Ball} from "./components/Ball";
import {BallList} from "./components/BallList";


//-------------------------------------------------------------------------------------------------------------------//


// ReactDOM.render(
//     (
//         <Ball
//             xSpeed={200}
//             ySpeed={200}
//             left={100}
//             top={100}
//             bgColor="blue"
//         />
//
//
//     ), document.getElementById('root'));

ReactDOM.render(

    (
        <BallList/>

    ), document.getElementById('root'));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
