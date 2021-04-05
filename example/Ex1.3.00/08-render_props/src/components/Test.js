///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {MouseListener} from "./RenderProps/MouseListener";
import {MovabelPanel} from "./MovablePanel";
import {ShowMousePoint} from "./ShowMousePoint";
import {withMouseListener} from "./Hoc/withMouseListener";


//-------------------------------------------------------------------------------------------------------------------//


const MousePoint = withMouseListener(ShowMousePoint),
    MousePanel = withMouseListener(MovabelPanel);


class Test extends PureComponent {


    static propTypes = {};

    static defaultProps = {};

    constructor(props) {

        super(props);

        this.state = {

            x: 0,
            y: 0
        };
    }

    renderPoint = data => {
        return (
            <React.Fragment>
                <p>Mouse_X: {data.x}</p>
                <p>Mouse_Y: {data.y}</p>
            </React.Fragment>
        );
    };

    renderPanel = data => {
        return (
            <React.Fragment>
                <div
                    className="move_tar"
                    style={{
                        position: "absolute",
                        width: 100,
                        height: 100,
                        backgroundColor: "#008c8c",
                        left: data.x - 50,
                        top: data.y - 50,
                    }}
                />
            </React.Fragment>
        );
    };

    render() {

        return (

            <React.Fragment>
                <MouseListener render={this.renderPoint}/>
                <br/>
                <MouseListener render={this.renderPanel}/>
                <hr/>
                <MousePoint/>
                <br/>
                <MousePanel/>
            </React.Fragment>
        );

        // return (
        //
        //     <React.Fragment>
        //         <MouseListener>
        //             {this.renderPoint}
        //         </MouseListener>
        //         <br/>
        //         <MouseListener>
        //             {this.renderPanel}
        //         </MouseListener>
        //     </React.Fragment>
        // );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Test
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
