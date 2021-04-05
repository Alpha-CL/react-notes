///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import "./index.css"


//-------------------------------------------------------------------------------------------------------------------//


class MovabelPanel extends Component {

    // refMoveAreaWrap = React.createRef();

    static propTypes = {};

    static defaultProps = {
        x: 50,
        y: 50
    };

    constructor(props) {

        super(props);

        this.state = {
            // x: 0,
            // y: 0,
        };
    }

    // handleMouseMove = (e) => {
    //
    //     const {left, top} = this.refMoveAreaWrap.current.getBoundingClientRect(),
    //         x = e.clientX - left,
    //         y = e.clientY - top;
    //
    //     this.setState({
    //         x,
    //         y
    //     });
    // };

    render() {

        // return (
        //
        //     <React.Fragment>
        //         <div
        //             ref={this.refMoveAreaWrap}
        //             className="move_area-wrap"
        //             onMouseMove={this.handleMouseMove}
        //         >
        //             <div
        //                 className="move_tar"
        //                 style={{
        //                     left: this.state.x - 50,
        //                     top: this.state.y - 50,
        //                 }}
        //             ></div>
        //         </div>
        //     </React.Fragment>
        // );

        return (

            <React.Fragment>
                <div
                    className="move_tar"
                    style={{
                        position: "absolute",
                        width: 100,
                        height: 100,
                        backgroundColor: "#008c8c",
                        left: this.props.x - 50,
                        top: this.props.y - 50,
                    }}
                ></div>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    MovabelPanel
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
