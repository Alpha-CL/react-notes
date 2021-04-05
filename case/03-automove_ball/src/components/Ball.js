///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import "./Ball.css";


//-------------------------------------------------------------------------------------------------------------------//


export {
    Ball
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class Ball extends Component {

    _DURATION = 16;

    constructor(props) {

        super(props);

        this.state = {

            left: props.left || 0,
            top: props.top || 0,
            xSpeed: props.xSpeed,
            ySpeed: props.ySpeed,
        };

        setInterval(() => {

            const xDis = this.state.xSpeed * this._DURATION / 1000,
                yDis = this.state.ySpeed * this._DURATION / 1000;

            let newLeft = this.state.left + xDis,
                newTop = this.state.top + yDis;

            if (newLeft <= 0) {

                newLeft = 0;

                this.setState({

                    xSpeed: -this.state.xSpeed
                });

            } else if (newLeft >= document.documentElement.clientWidth - 100) {

                newLeft = document.documentElement.clientWidth - 100;

                this.setState({

                    xSpeed: -this.state.xSpeed
                });
            }

            if (newTop <= 0) {

                newTop = 0;

                this.setState({

                    ySpeed: -this.state.ySpeed
                });

            } else if (newTop >= document.documentElement.clientHeight - 100) {

                newTop = document.documentElement.clientHeight - 100;

                this.setState({

                    ySpeed: -this.state.ySpeed
                });
            }


            this.setState({
                left: this.state.left + xDis,
                top: this.state.top + yDis
            });


        }, this._DURATION);
    }

    render() {

        return (

            <div
                className="ball"
                style={{
                    left: this.state.left,
                    top: this.state.top,
                    backgroundColor: this.props.bgColor || "red",
                }}
            />
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
