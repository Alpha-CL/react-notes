///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";


//-------------------------------------------------------------------------------------------------------------------//


class StrictMode extends PureComponent {

    /** 使用遗留 API **/
    static childContextTypes = {};

    /** 使用遗留 API **/
    getChildContext() {

        return {};
    }



    static propTypes = {

    };

    static defaultProps = {

    };

    constructor(props) {

        super(props);

        /** 异步代码会调用两次: 无法检测异步代码中是否有不符合规定的代码 **/
        setTimeout(() => {

            console.log('hello world');

        }, 3000);

        this.state = {

        };
    }

    render() {

        return (

            <React.Fragment>

            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    StrictMode
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
