///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


export {
    NumberInput
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class NumberInput extends Component {

    constructor(props) {

        super(props);

        this.state = {
            val: ''
        };
    }

    render() {

        return (

            <>
                <input
                    type="text"
                    value={this.state.val}
                    onChange={(e)=>{
                        let val = e.target.value;
                        val = val.replace(/\D/g, '');
                        this.setState({
                            val
                        });
                    }}
                />
            </>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
