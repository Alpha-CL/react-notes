///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {resetScroll} from "../../untils/resetScroll";


//-------------------------------------------------------------------------------------------------------------------//


function withScrollTop(Comp) {

    return class withScrollTopWrapper extends PureComponent {

        static defaultProps = {

        };

        static propTypes = {

        };

        constructor(props) {

            super(props);

            this.state = {};
        }

        componentDidMount(){

            // window.scrollTo(0, 0);

            resetScroll();
        }

        render() {

            return (
                <React.Fragment>
                    <Comp {...this.props} />
                </React.Fragment>
            );
        }
    }
}



//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    withScrollTop
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////