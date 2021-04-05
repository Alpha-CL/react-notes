///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import ctx from "./ctx";
import {bindActionCreators} from "redux";
import React,{useState,useEffect,useReducer,useContext,useCallback,useMemo,useRef,useImperativeHandle,useLayoutEffect,useDebugValue} from "react";


//-------------------------------------------------------------------------------------------------------------------//


export default function (mapStateToProps, mapDispatchToProps) {

    return function hoc(Comp) {
        function Temp(props) {

            const store = useContext(ctx);

            const [state, setState] = useState(mapStateToProps && mapStateToProps(store.getState()));

            useEffect(() => {

                return store.subscribe(() => {

                    const newState = mapStateToProps && mapStateToProps(store.getState());

                    setState(prevState => {

                        return  compare(prevState, newState) ? prevState : newState;
                    });
                });

            }, [store]);
            function getEventHandles(mapDispatchToProps) {

                if (typeof mapStateToProps === 'function') {

                    return mapDispatchToProps(store.dispatch, props);

                } else if (typeof mapDispatchToProps === 'object') {

                    return bindActionCreators(mapDispatchToProps, store.dispatch);
                }
            }

            let handles = getEventHandles && getEventHandles(mapDispatchToProps);

            return <Comp {...state} {...handles} {...props}/>
        }

        Temp.displayName = Comp.displayName || Comp.name;

        return Temp;
    };
};


function compare(obj1, obj2) {

    for (const key in obj1) {

        if (obj1[key] !== obj2[key]) {

            return false;
        }
    }

    return true;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
