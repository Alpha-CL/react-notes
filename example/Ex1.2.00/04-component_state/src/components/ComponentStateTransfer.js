///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


export {
    GrandFather
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class GrandFather extends Component {

    constructor(props) {

        super(props);

        this.state = {

            num: props.num
        };

        this.timer = setInterval(() => {

            this.setState({

                num: this.state.num - 1,
            })

        }, 1000);
    }

    render() {

        return (
            <div>
                <h3>[ Component State Transfer ]</h3>
                <Father num={this.state.num}/>
                <hr/>
            </div>

        );
    }
}

function Father(props) {

    console.log('[Father_ComponentRe-render]');

    return (

        <div>
            [Father]: {props.num}
            <Son num={props.num}/>
        </div>
    )
}

function Son(props) {

    console.log('[Son_ComponentRe-render]');

    return (

        <div>
            [Son]: {props.num}
        </div>
    )
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
