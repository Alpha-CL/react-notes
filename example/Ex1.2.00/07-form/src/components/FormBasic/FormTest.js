///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


export {
    FormTest
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class FormTest extends Component {

    constructor(props) {

        super(props);

        this.state = {

            loginId: '',
            loginPwd: '',
            sex: 'male',
            loves: [
                {value: 'football', text: '足球'},
                {value: 'basketball', text: '篮球'},
                {value: 'movie', text: '电影'},
                {value: 'music', text: '音乐'},
                {value: 'other', text: '其他'},
            ],
            chooseLoves: [],
            city: 'beijing'
        };
    }

    getLoveCheckBoxes() {

        return this.state.loves.map(item => {

            return (<label key={item.value}>
                {item.text}
                <input
                    type="checkbox"
                    name="chooseLoves"
                    value={item.value}
                    checked={this.state.chooseLoves.includes(item.value)}
                    onChange={this.handleChange}
                />
            </label>);
        });
    }

    handleChange = (e) => {

        let val = e.target.value,
            name = e.target.name;

        if (e.target.type === 'checkbox') {

            if (e.target.checked) {

                val = [...this.state.chooseLoves, val];

            } else {

                val = this.state.chooseLoves.filter(it => it !== val);
            }
        }

        // console.log(val);

        this.setState({
            [name]: val
        });
    };

    render() {

        return (

            <>

                <p>
                    loginId: <input
                    name="loginId"
                    type="text"
                    value={this.state.loginId}
                    onChange={this.handleChange}
                />
                </p>
                <p>
                    loginPwd: <input
                    name="loginPwd"
                    type="password"
                    value={this.state.loginPwd}
                    onChange={this.handleChange}
                />
                </p>
                <p>
                    <label>
                        男
                        <input
                            name="sex"
                            value="male"
                            type="radio"
                            checked={this.state.sex === 'male'}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        女
                        <input
                            name="sex"
                            value="female"
                            type="radio"
                            checked={this.state.sex === 'female'}
                            onChange={this.handleChange}
                        />
                    </label>

                </p>
                <p>
                    city:
                    <select
                        name='city'
                        value={this.state.city}
                        onChange={this.handleChange}
                    >
                        <option value="beijing">北京</option>
                        <option value="shanghai">上海</option>
                        <option value="guangzhou">广州</option>

                    </select>
                </p>
                <p>
                    {this.getLoveCheckBoxes()}
                </p>
                <p>
                    <button onClick={() => {
                        console.log(this.state);
                    }}
                    >获取表单数据
                    </button>
                </p>

            </>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
