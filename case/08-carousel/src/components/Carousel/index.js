///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import PropTypes from "prop-types";
import "./index.css";
import {ImgContainer} from "./ImgContainer";
import {SwitchArrow} from "./SwitchArrow";
import {SwitchDot} from "./SwitchDot";


//-------------------------------------------------------------------------------------------------------------------//


class Carousel extends Component {

    timer = null;

    static propTypes = {
        width: 520,
        height: 280,
        imgSrcs: [],
        autoDuration: 3000,
        clickDuration: 500,
    };

    static defaultProps = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        imgSrcs: PropTypes.arrayOf(PropTypes.string),
        autoDuration: PropTypes.number.isRequired,
        clickDuration: PropTypes.number.isRequired,
    };

    componentDidMount() {

            this.autoSwitch();
    }

    componentWillMount() {

        clearInterval(this.timer);
    }

    autoSwitch() {

        let curIndex = this.state.curIndex;

        clearInterval(this.timer);

        this.timer = setInterval(() => {

            curIndex = (curIndex + 1) % this.props.imgSrcs.length;

            this.handleSwitchTo(curIndex);
            this.handleDotChange(curIndex);

        }, this.props.autoDuration);

    }

    constructor(props) {

        super(props);

        this.state = {

            curIndex: 0,
        };
    }

    handleSwitchTo = (index) => {

        // console.log(this.refImgContainer);

        this.refImgContainerObj.switchTo(index);
    };

    handleArrowChange = (type) => {

        let curIndex = this.state.curIndex--;

        if (type === 'left') {

            curIndex--;

            if (curIndex < 0) {

                curIndex = this.props.imgSrcs.length - 1;
            }

        } else if (type === 'right') {

            curIndex++;

            if (curIndex > this.props.imgSrcs.length - 1) {

                curIndex = 0;
            }
        }

        this.setState({

            curIndex
        });

        this.handleSwitchTo(curIndex);
    };

    handleDotChange = (curIndex) => {

        this.setState({

            curIndex
        });

        this.handleSwitchTo(curIndex);
    };

    refImgContainer = (el) => {

        this.refImgContainerObj = el;
    };

    render() {

        return (

            <div
                className="carousel_wrap"
                style={{
                    width: this.props.width,
                    height: this.props.height,
                }}
                onMouseEnter={() => {
                    clearInterval(this.timer);
                }}
                onMouseLeave={() => {
                    this.autoSwitch();
                }}
            >
                <ImgContainer
                    ref={this.refImgContainer}
                    imgSrcs={this.props.imgSrcs}
                    imgWidth={this.props.width}
                    imgHeight={this.props.height}
                    clickDuration={this.props.clickDuration}
                />
                <SwitchArrow
                    onChange={this.handleArrowChange}
                />
                <SwitchDot
                    totalNum={this.props.imgSrcs.length}
                    curIndex={this.state.curIndex}
                    onChange={this.handleDotChange}
                />
            </div>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Carousel
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
