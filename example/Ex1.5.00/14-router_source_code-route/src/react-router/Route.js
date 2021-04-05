///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {context as ctx} from "./RouterContext";
import PropTypes from "prop-types";
import {matchPath} from "./matchPath";



//-------------------------------------------------------------------------------------------------------------------//


class Route extends PureComponent {

    static propTypes = {
        // path: PropTypes.string || PropTypes.arrayOf(PropTypes.string),      // 路径规则: str || [str...]
        // children: PropTypes.node,                                           // 无论是否匹配，都会渲染的 子元素
        // render: PropTypes.func,                                             // 匹配成功后，渲染该函数
        // component: PropTypes.element,                                       // 匹配成功后，渲染该组件
        // exact: PropTypes.bool,                                              // 是否精确匹配
        // strict: PropTypes.bool,                                             // 是否严格匹配
        // sensitive: PropTypes.bool,                                          // 是否不区分大小写匹配
    };

    static defaultProps = {

    };

    constructor(props) {

        super(props);

        this.state = {

        };
    }

    renderChildren(ctx) {

        // const children = this.props.children;

        if (this.props.children !== undefined && this.props.children !== null) {

            if (typeof this.props.children === 'function') {

                return this.props.children(ctx);

            } else {

                return this.props.children;
            }
        }

        if (!ctx.match) {

            return null;
        }

        if (typeof this.props.render === 'function') {

            return this.props.render(ctx);
        }

        if (this.props.component) {

            const Comp = this.props.component;

            return <Comp {...ctx}/>
        }

        return null;
    }

    matchRoute(location) {

        const {
            exact = false,
            strict = false,
            sensitive = false
        } = this.props;

        // debugger;

        return matchPath(this.props.path || '/', location.pathname, {
            exact,
            strict,
            sensitive
        });
    }

    consumerFunc = (val) => {

        // console.log('this', this);
        // console.log(val);
        // debugger;

        const ctxVal = {
            history: val.history,
            location: val.location,
            match: this.matchRoute(val.location)
        };

        return (

            <ctx.Provider
                value={ctxVal}
            >
                {this.renderChildren(ctxVal)}
            </ctx.Provider>
        );
    };

    render() {

        return (

            <ctx.Consumer>

                {this.consumerFunc}

                {/*{context => {*/}
                {/*    // console.log(context);*/}
                {/*    return this.consumerFunc(context);*/}
                {/*}}*/}

            </ctx.Consumer>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Route
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
