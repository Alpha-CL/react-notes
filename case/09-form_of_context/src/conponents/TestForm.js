///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import {Form} from "./Form";


//-------------------------------------------------------------------------------------------------------------------//


class TestForm extends Component {

    static propTypes = {

    };

    static defaultProps = {

    };

    constructor(props) {

        super(props);

        this.state = {

        };
    }

    render() {

        return (

            <React.Fragment>
                <Form
                    onSubmit={datas => {

                        console.log(datas);
                    }}
                >
                    <div>
                        账号: <Form.input name="loginId" />
                    </div>
                    <div>
                        密码: <Form.input name="loginPwd" type="password" />
                    </div>
                    <Form.button


                    >提交</Form.button>
                </Form>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    TestForm
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
