///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import "./index.css";


//-------------------------------------------------------------------------------------------------------------------//


export {
    ModalContent
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class ModalContent extends Component {

    constructor(props) {

        super(props);

        this.state = {};
    }

    hideModal = (e) => {


    };

    render() {

        return (

            <div
                className="modal_content"
                onClick={e => {

                    console.log(e.target.className);

                    if (e.target.className === 'btn') {

                        return this.props.hideModal;
                    }
                }}>
                <button
                    className='btn'
                >hideModal
                </button>
            </div>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
