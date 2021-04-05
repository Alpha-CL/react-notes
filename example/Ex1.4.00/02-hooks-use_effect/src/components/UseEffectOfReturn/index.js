///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useEffect} from "react";


//-------------------------------------------------------------------------------------------------------------------//


const ref = React.createRef();
window.timer = null;

function stopTimer() {

    clearInterval(window.timer);
    window.timer = null;
}

function UseEffectOfReturn(props) {

    console.log('[渲染组件]');

    useEffect(() => {

        console.log('[运行副作用函数]');

        stopTimer();

        const tarDom = ref.current,
            disX = props.tarLeft / 1000,
            dixY = props.tarTop / 1000;

        let curTimes = 0;

        window.timer = setInterval(() => {

            curTimes++;
            const newLeft = curTimes * disX,
                newTop = curTimes * dixY;

            tarDom.style.left = newLeft + 'px';
            tarDom.style.top = newTop + 'px';

            if (curTimes === 1000) {

                stopTimer();
            }

        }, 10);

        return () => {

            console.log('[运行清理函数]');

            return stopTimer
        }
    });

    return (

        <React.Fragment>
            <div
                ref={ref}
                style={{
                    position: 'fixed',
                    width: 100,
                    height: 100,
                    left: 0,
                    top: 0,
                    background: '#f40'
                }}
            />
        </React.Fragment>
    );
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    UseEffectOfReturn
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////