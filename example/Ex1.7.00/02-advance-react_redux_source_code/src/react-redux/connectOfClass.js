///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import ctx from "./ctx";
import {bindActionCreators} from "redux";


//-------------------------------------------------------------------------------------------------------------------//


export default function (mapStateToProps, mapDispatchToProps) {

    return function hoc(Comp) {

        class Temp extends React.PureComponent {

            static contextType = ctx;

            constructor(props, context) {

                super(props, context);

                this.store = context;

                if (mapStateToProps) {

                    this.state = mapStateToProps(this.store.getState(), this.props);

                    this.unlisten = this.store.subscribe(() => {

                        this.setState(mapStateToProps(this.store.getState(), this.props));
                    });
                }

                this.handles = this.getEventHandles(mapDispatchToProps);
            }

            componentWillUnmount() {

                this.unlisten && this.unlisten();
            }
            getEventHandles(mapDispatchToProps) {

                if (typeof mapStateToProps === 'function') {

                    return mapDispatchToProps(this.store.dispatch, this.props);

                } else if (typeof mapDispatchToProps === 'object') {

                    return bindActionCreators(mapDispatchToProps, this.store.dispatch);
                }
            }

            render() {

                console.log(`[${Temp.displayName} re-render]`);

                return <Comp {...this.state} {...this.handles} {...this.props}/>;
            }
        }

        Temp.displayName = Comp.displayName || Comp.name;

        return Temp;
    };
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
