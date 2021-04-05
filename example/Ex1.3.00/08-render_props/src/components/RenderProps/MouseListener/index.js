///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import "./index.css";


//-------------------------------------------------------------------------------------------------------------------//


class MouseListener extends PureComponent {

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

        /**
         * render prop
         *
         *
         * 1) 某个组件，需要某个属性
         * 2) 该属性是一个函数，函数的返回值用渲染
         * 3) 函数的参数会传递为需要的数据
         * 4) 注意纯组件的属性( 尽量避免每次传递的 render prop 地址不一致 )
         * 5) 通常该属性命名为 render( 当然也可以是其他的命名 )
         */

        return (

            <React.Fragment>
                <div
                    className="move_area-wrap"
                    ref={this.refMoveAreaWrap}
                    onMouseMove={this.handleMouseMove}
                >
                    {/**  **/}
                    {/*{this.props.children(this.state)}*/}

                    {/**  **/}
                    {this.props.render ? this.props.render(this.state) : "defaut value"}
                </div>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    MouseListener
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
