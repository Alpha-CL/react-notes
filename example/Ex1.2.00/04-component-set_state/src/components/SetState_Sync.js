///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


export {
    SetState_Sync
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class SetState_Sync extends Component {

    constructor(props) {

        super(props);

        this.state = {

            n: 0
        };

        setInterval(() => {

            this.setState({

                n: this.state.n + 1,

            });


            this.setState({

                n: this.state.n + 1,

            });


            this.setState({

                n: this.state.n + 1,

            });

        }, 1000)
    }


    render() {

        console.log('[render]');                        // 后输出

        return (

            <div>
                <h1>{this.state.n}</h1>
                <p>
                    <button
                        onClick={this.handleClick}
                    >click
                    </button>
                </p>
            </div>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
