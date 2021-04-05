///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//-------------------------------------------------------------------------------------------------------------------//


let scrollTopTimer,
    scrollLeftTimer;

function resetScroll() {

    clearInterval(scrollTopTimer);
    clearInterval(scrollLeftTimer);

    const html = document.documentElement;

    scrollTopTimer = animate(html.scrollTop, 0, (start) => {

        html.scrollTop = start;

    });

    scrollLeftTimer =animate(html.scrollLeft, 0, (start) => {

        html.scrollLeft = start;

    });
}

function animate(start, end, callback, tick = 16, totalTime = 1000) {

    const times = Math.ceil(totalTime / tick),
        dis = (end - start) / times;

    let curTimes = 0;

    let timer =  setInterval(() => {

        curTimes++;

        start += dis;

        if (curTimes === times) {

            start = end;
            clearInterval(timer);
        }

        callback(start);

    }, tick);
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    resetScroll
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
