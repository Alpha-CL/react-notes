///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


class ClsComp extends Component {

    constructor(props) {

        super(props);

        this.state = {

        };
    }

    handleClick = () => {

        console.log("customRef: ", this.refs.customRef);
        console.log("customRef.innerHTML: ", this.refs.customRef.innerHTML);
    };

    render() {

        return (

            <React.Fragment>
                <h4 ref="customRef">hello world</h4>
                <button
                    onClick={this.handleClick}
                >调用自定义组件的事件</button>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    ClsComp
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
