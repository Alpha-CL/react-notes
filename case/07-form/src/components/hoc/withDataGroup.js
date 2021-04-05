///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import {commonTypes} from "../../utils/commonTypes";


//-------------------------------------------------------------------------------------------------------------------//


export {

    withDataGroup
};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function withDataGroup(Comp) {

    return class DataGroupWrapper extends Component {

        static defaultProps = {

            datas: []
        };

        static propTypes = {

            datas: commonTypes.groupDatas
        };

        constructor(props) {

            super(props);

            this.state = {};
        }

        render() {

            const comps = this.props.datas.map(item => {

                return (

                    <Comp
                        key={item.value}
                        info={item}
                        {...this.props}
                    />
                );
            });

            return (
                <React.Fragment>
                    {comps}
                </React.Fragment>
            );
        }
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////