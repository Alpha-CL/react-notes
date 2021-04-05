///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useRef} from "react";
import {Modal} from "../Modal";


//-------------------------------------------------------------------------------------------------------------------//


export default function (props) {

    const inputRef = useRef();

    function handleAdd() {

        const val = parseInt(inputRef.current.value);
        props.onAdd(val);
    }

    return (

        <React.Fragment>
            {
                props.isLoading && <Modal>
                    <div style={{color: '#fff', fontSize: '2em'}}>
                        Loading...
                    </div>
                </Modal>
            }
            <div>
                <button onClick={props.onAsyncDecrease}>asyncDecrease</button>
                <button onClick={props.onDecrease}>decrase</button>
                <span style={{margin: '0 10px'}}>{props.number}</span>
                <button onClick={props.onIncrease}>increase</button>
                <button onClick={props.onAsyncIncrease}>asyncIncrease</button>
            </div>
            <br/>
            <div>
                <input type="text" ref={inputRef}/>
                <button onClick={handleAdd}>add number of input
                </button>
            </div>
        </React.Fragment>
    );
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////