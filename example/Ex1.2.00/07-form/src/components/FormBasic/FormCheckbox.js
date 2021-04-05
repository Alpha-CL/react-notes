///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


export {
    FormCheckbox
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class FormCheckbox extends Component {

    constructor(props) {

        super(props);

        this.state = {

            checked: true,

            loves: ['足球', '篮球', '音乐', '其他'],
            chooseLoves: ['音乐'],
        };
    }


    render() {

        const checkboxes = this.state.loves.map(item => {

            return (<label key={item}>
                {item}
                <input
                    type="checkbox"
                    checked={this.state.chooseLoves.includes(item)}
                    onChange={(e) => {
                        if (e.target.checked) {
                            this.setState({
                                chooseLoves: [...this.state.chooseLoves, item]
                            })
                        } else {
                            this.setState({
                                chooseLoves: this.state.chooseLoves.filter(val => {
                                    return val !== item;
                                })
                            })
                        }
                    }}
                />

            </label>)
        });


        return (

            <>
                <h3>checkbox 需设置 input.checked & onChange 后为受控</h3>
                <input
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={(e) => {
                        this.setState({
                            checked: e.target.checked
                        });
                    }}
                />
                <hr/>

                <h3></h3>
                {checkboxes}
                <button onClick={()=>{
                    console.log(this.state.chooseLoves);
                }}
                >获取选中的值</button>
                <hr/>
            </>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
