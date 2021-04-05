///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {AllStudentsOfRenderProp} from "./AllStudentsOfRenderProp";


//-------------------------------------------------------------------------------------------------------------------//


function Test(props) {

    const list = props.stus.map(it => <li key={it.id}>{it.name}</li>);

    return (

        <ul>
            {list}
        </ul>
    );
}


class TestAllStudentsOfRenderProp extends PureComponent {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {

        super(props);

        this.state = {};
    }

    render() {

        return (

            <React.Fragment>
                <AllStudentsOfRenderProp
                    render={stus => <Test stus={stus}/>}
                />
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    TestAllStudentsOfRenderProp
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
