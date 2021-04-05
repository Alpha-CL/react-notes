///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import {Ball} from "./Ball";
import getRandom from "../until";


//-------------------------------------------------------------------------------------------------------------------//


export {

    BallList
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class BallList extends Component {

    constructor(props) {

        super(props);

        this.state = {

            ballInfos: []
        };

        setInterval(() => {

            let ballInfo = {
                left: getRandom(0, document.documentElement.clientWidth - 100),
                top: getRandom(0, document.documentElement.clientHeight - 100),
                xSpeed: getRandom(50, 500),
                ySpeed: getRandom(50, 500),
                bgColor: `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)})`,
            };

            this.setState({

                ballInfos: [...this.state.ballInfos, ballInfo]
            });

        }, 1000);
    }

    render() {

        const balls = this.state.ballInfos.map((val, i) => <Ball key={i} {...val}/>);

        return (

            <>
                {balls}
            </>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
