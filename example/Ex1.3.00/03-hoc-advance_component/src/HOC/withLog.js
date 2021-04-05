///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, {Component} from "react";

//-------------------------------------------------------------------------------------------------------------------//


export {

    withLog
};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function withLog(Comp, str) {

    return class LogWrapper extends Component {

        componentDidMount() {

            console.log(`日志: 组件${Comp.name}被创建了，${Date.now()}`);
        }

        componentWillMount() {

            console.log(`日志: 组件${Comp.name}被销毁了，${Date.now()}`);
        }

        render() {

            return (
                <React.Fragment>
                    <Comp {...this.props}/>
                    <h3>{str}</h3>
                </React.Fragment>
            );
        }
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
