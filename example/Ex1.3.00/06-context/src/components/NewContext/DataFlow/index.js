///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * React.createContext(defVal);
 *
 *
 * @defVal: any;                                      // 默认值
 *
 * 上下文独立于于组件的对象，该对象通过 React.createContext(defVal); 创建
 *
 * return: {
 *
 *     Consumer:
 *
 *     Provider: 该组件会创建一个 Context               // Create
 * }
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


const ctx = React.createContext({       // default value
    name: 'alpha',
    age: 18
});

console.log(ctx);


class DataFlow extends Component {

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {

        super(props);

        this.state = {                              // state value

            name: 'beta',
            age: 17
        };
    }

    render() {

        const Provider = ctx.Provider;

        return (

            <ctx.Provider
                value={{                            // used valuee
                    name: 'omega',
                    age: 16
                }}
            >
            </ctx.Provider>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    DataFlow
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
