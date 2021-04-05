///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import {Modal} from "../Modal";
import {ModalContent} from "../ModalContent";
import "./index.css"


//-------------------------------------------------------------------------------------------------------------------//


export {
    Test
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class Test extends Component {

    constructor(props) {

        super(props);

        this.state = {

            showModal: false
        };
    }

    handleShowModal = () => {

        this.setState({
            showModal: true
        })
    };

    handleHideModal = () => {

        this.setState({
            showModal: false
        })
    };

    render() {

        return (
            <>
                {
                    this.state.showModal ?
                        (<Modal
                            isShowModal={this.handleHideModal}
                        >
                            <ModalContent
                                bgColor="rgba(0,0,0,.4)"
                            >
                                <button
                                    className="btn"
                                >hideModal
                                </button>
                            </ModalContent>
                        </Modal>)
                        : null
                }
                <button
                    onClick={this.handleShowModal}
                >
                    showShadow
                </button>
            </>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
