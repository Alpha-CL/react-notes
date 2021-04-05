///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import styles from "./index.css";


//-------------------------------------------------------------------------------------------------------------------//


export {
    Modal
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class Modal extends Component {

    // static defaultProps = {
    //     bgColor: props.bgColor || 'rgba(0,0,0,.5)',
    // };

    constructor(props) {

        super(props);

        this.state = {
            bgColor: props.bgColor || 'rgba(0,0,0,.5)',
        };
    }

    render() {

        return (

            <div
                className={styles.modal}
                style={{
                    backgroundColor: this.state.bgColor
                }}
            >
                <div
                    className={styles['modal-center']}
                >{this.props.children}</div>
            </div>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
