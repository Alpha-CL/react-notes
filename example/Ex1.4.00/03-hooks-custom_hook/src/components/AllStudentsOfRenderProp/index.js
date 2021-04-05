///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {getStudents} from "../../services/getStudents";


//-------------------------------------------------------------------------------------------------------------------//


class AllStudentsOfRenderProp extends PureComponent {

    static propTypes = {

    };

    static defaultProps = {

    };

    constructor(props) {

        super(props);

        this.state = {

            stus: []
        };
    }

    async componentDidMount() {

        const stus = await getStudents();

        console.log(stus);

        this.setState({

            stus: stus.findByPage
        });

    }

    render() {

        if (typeof this.props.render === 'function') {

            return this.props.render(this.state.stus);
        }

        return null;
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    AllStudentsOfRenderProp
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
