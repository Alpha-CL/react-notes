///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";


//-------------------------------------------------------------------------------------------------------------------//


class AllStudents extends PureComponent {

    static propTypes = {

    };

    static defaultProps = {

    };

    constructor(props) {

        super(props);

        this.state = {

        };
    }

    createDomStus() {

        return this.props.stus.map(item => {

            return (

                <li
                    key={item.id}
                >{item.name}</li>
            );
        });
    }

    render() {

        const list = this.createDomStus();

        return (

            <React.Fragment>
                <ul>
                    {list}
                </ul>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    AllStudents
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
