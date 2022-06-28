///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent,useImperativeHandle} from "react";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * useImperativeHandle(ref, fn, diffArr);
 *
 *
 * @ref: 外部传入的 ref
 * @fn: 该函数的返回值 会覆盖 ref.current
 * @diffArr: 依赖项( 若使用该依赖项，第一次调用后，会进行缓存，仅依赖项发生变化时才会发生重新渲染 )
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function Child(props, ref) {

    useImperativeHandle(ref, () => {

        return {

            method() {

                console.log('[Child.method()]');
            }
        }

    }, []);

    return (

        <React.Fragment>
            <p>Child Component</p>
        </React.Fragment>
    );
}


const ChildWrapper = React.forwardRef(Child);



function UnUseImperativeHandleChild(props, ref) {

    /** 未使用 useImperativeHandle 时，仅可控制 dom **/

    return (

        <React.Fragment>
            <p ref={ref}>Child Component</p>
        </React.Fragment>
    );
}



class ClsChild extends PureComponent {

    static propTypes = {

    };

    static defaultProps = {

    };

    constructor(props) {

        super(props);

        this.state = {

        };
    }

    method() {

        console.log('[Child.method()]');
    }

    render() {

        return (

            <React.Fragment>
                <p>Child Component</p>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Child,
    ChildWrapper
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
