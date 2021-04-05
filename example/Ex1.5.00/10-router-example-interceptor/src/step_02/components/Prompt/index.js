///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect, withRouter} from "react-router-dom";

//-------------------------------------------------------------------------------------------------------------------//


class Prompt extends PureComponent {

    static propTypes = {

    };

    static defaultProps = {
        when: false,                // 用于判断何时添加阻塞
        message: '',                // 阻塞消息提示信息
    };

    constructor(props) {

        super(props);

        this.state = {

        };
    }

    componentDidMount(): void {

        this.handleBlock();
    }

    componentDidUpdate(): void {

        this.handleBlock();
    }

    componentWillUnmount(): void {

        this.handleBlock();
    }

    handleBlock() {

        if (this.props.when) {

            this.unBlock = this.props.history.block(this.props.message);

        } else  {

            this.unBlock && this.unBlock();
        }
    }

    render() {

        return null;
    }
}

const PromptWrapper = withRouter(Prompt);

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Prompt,
    PromptWrapper
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
