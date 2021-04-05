///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


export {
    FormSelect
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class FormSelect extends Component {

    constructor(props) {

        super(props);

        this.state = {

            selVal: 'beijing'
        };
    }

    render() {

        return (

            <>
                <select
                    value={this.state.selVal}
                    onChange={(e)=>{
                        this.setState({
                            selVal: e.target.value
                        });
                    }}
                >
                    <option value='beijing'>北京</option>
                    <option value='shanghai'>上海</option>
                    <option value='shenzhen'>深圳</option>
                </select>
            </>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
