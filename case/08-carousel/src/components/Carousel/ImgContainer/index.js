///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import PropTypes from "prop-types";


//-------------------------------------------------------------------------------------------------------------------//


class ImgContainer extends Component {

    tick = 16;
    timer = null;

    static propTypes = {
        imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired,
        imgWidth: PropTypes.number.isRequired,
        imgHeight: PropTypes.number.isRequired,
        clickDuration: PropTypes.number.isRequired,
    };

    static defaultProps = {
        imgSrcs: [],
        imgWidth: 520,
        imgHeight: 280,
        clickDuration: 500,
    };

    constructor(props) {

        super(props);

        this.state = {};
    }

    createDomImgs() {

        return this.props.imgSrcs.map((val, idx) => {

            return (

                <img
                    src={val}
                    key={idx}
                    alt="banner"
                    style={{
                        width: this.props.imgWidth,
                        height: this.props.imgHeight,
                        float: "left",
                    }}
                />
            );
        });
    }

    switchTo(index) {

        if (index < 0) {

            index = 0;

        } else if (index > this.props.imgSrcs.length - 1) {

            index = this.props.imgSrcs.length - 1;
        }

        const tarLeft = -index * this.props.imgWidth,
            curLeft = parseFloat(window.getComputedStyle(this.refImgContentDom).marginLeft);

        clearInterval(this.timer);
        this.animation(tarLeft, curLeft, this.props.clickDuration, this.tick);
    }

    animation(tarLeft, curLeft, duartion, tick) {

        const totalMoveNum = Math.ceil(duartion / tick),
            totalMoveDistance = tarLeft - curLeft,
            singleMoveDistance = totalMoveDistance / totalMoveNum;

        let curNum = 0;

        this.timer = setInterval(() => {

            curNum++;
            curLeft += singleMoveDistance;

            this.refImgContentDom.style.marginLeft = curLeft + 'px';

            // console.log(curLeft);

            if (curNum === totalMoveNum) {

                this.refImgContentDom.style.marginLeft = curLeft + 'px';

                clearInterval(this.timer);
            }

        }, tick);
    }

    refImgContent = (el) => {

        this.refImgContentDom = el;
    };

    render() {

        const domImgs = this.createDomImgs();

        return (

            <div
                className=""
                ref={this.refImgContent}
                style={{
                    width: this.props.imgSrcs.length * this.props.imgWidth,
                    height: this.props.imgHeight
                }}
            >
                {domImgs}
            </div>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    ImgContainer
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
