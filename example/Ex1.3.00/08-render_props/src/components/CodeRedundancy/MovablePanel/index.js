///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import "./index.css"


//-------------------------------------------------------------------------------------------------------------------//


class MovabelPanel extends Component {

    refMoveAreaWrap = React.createRef();

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {

        super(props);

        this.state = {
            x: 0,
            y: 0,
        };
    }

    handleMouseMove = (e) => {

        const {left, top} = this.refMoveAreaWrap.current.getBoundingClientRect(),
            x = e.clientX - left,
            y = e.clientY - top;

        this.setState({
            x,
            y
        });
    };

    render() {

        return (

            <React.Fragment>
                <div
                    ref={this.refMoveAreaWrap}
                    className="move_area-wrap"
                    onMouseMove={this.handleMouseMove}
                >
                    <div
                        className="move_tar"
                        style={{
                            left: this.state.x - 50,
                            top: this.state.y - 50,
                        }}
                    />
                </div>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {
    MovabelPanel
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
