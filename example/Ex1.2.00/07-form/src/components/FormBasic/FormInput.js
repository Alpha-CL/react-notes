///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import {NumberInput} from "./NumberInput";

//-------------------------------------------------------------------------------------------------------------------//


export {
    FormInput
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class FormInput extends Component {

    constructor(props) {

        super(props);

        this.state = {
            val: 'defVal'
        };
    }

    render() {

        return (

            <>
                <h3>默认情况下，是非受控组件</h3>
                <input type="text"/>
                <hr/>

                <h3>添加 value 属性后，变成受控组件，但无法更改 input 的 value 值，仍然无法受控</h3>
                <h3>若想要该控件只读，则需要设置 readyOnly，否则仍然会报错</h3>
                <input type="text" readOnly value="受控组件"/>
                <hr/>

                <h3>添加 defaultValue 后，仍然是非受控组件</h3>
                <input type="text" defaultValue="defaultValue"/>
                <hr/>

                <h3>利用 state.val 和 onChange 将 input 变为受控组件 val: e.target.value</h3>
                <input
                    type="text"
                    value={this.state.val}
                    onChange={(e) => {
                        this.setState({
                            val: e.target.value
                        });
                    }}
                />
                <button
                    onClick={() => {
                        console.log(this.state.val);
                    }}
                >get input.value
                </button>
                <hr/>

                <h3>NumberInput Component</h3>
                <NumberInput/>
                <hr/>
            </>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
