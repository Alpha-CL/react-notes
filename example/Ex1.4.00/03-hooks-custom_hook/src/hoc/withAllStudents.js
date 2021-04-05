///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {getStudents} from "../services/getStudents";


//-------------------------------------------------------------------------------------------------------------------//


function withAllStudents(Comp) {

    return class withAllStudentsWrapper extends PureComponent {

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

            return (
                <React.Fragment>
                    <Comp
                        {...this.props}
                        stus={this.state.stus}
                    />
                </React.Fragment>
            );
        }
    }
}



//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    withAllStudents
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////