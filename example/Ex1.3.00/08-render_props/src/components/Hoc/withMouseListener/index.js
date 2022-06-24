///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


function withMouseListener(Comp) {

    return class withMouseListenerWrapper extends Component {

        refMoveAreaWrap = React.createRef();

        static defaultProps = {

        };

        static propTypes = {

        };

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
                        className="move_area-wrap"
                        ref={this.refMoveAreaWrap}
                        onMouseMove={this.handleMouseMove}
                    >
                        <Comp
                            {...this.props}
                            x={this.state.x}
                            y={this.state.y}
                        />
                    </div>
                </React.Fragment>
            );
        }
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    withMouseListener
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////