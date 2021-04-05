///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


function WithContentRef(Comp) {

     class WithContentRefWrapper extends Component {

        render() {

            const {customRef, ...lave} = this.props;

            return (
                <React.Fragment>
                    <Comp
                        ref={customRef}
                        {...lave}
                    />
                </React.Fragment>
            );
        }
    }

    return React.forwardRef((props, ref) => {

        return (

            <WithContentRefWrapper
                {...props}
                customRef={ref}
            />
        );
    });
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    WithContentRef
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////