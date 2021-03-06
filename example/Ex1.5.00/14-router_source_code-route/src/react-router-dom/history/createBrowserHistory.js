///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {ListenerManager} from "./ListenerManager";
import {BlockManager} from "./BlockManager";


//-------------------------------------------------------------------------------------------------------------------//


// function createBrowserHistory(options = {}) {
//
//     const {
//             basename = '',
//             forceRefresh = false,
//             keyLength = 6,
//             getUserConfirmation = (message, callback) => callback(window.confirm(message))
//         } = options,
//         history = {
//             action: 'POP',
//             go,
//             goBack,
//             goForward,
//             push,
//             replace,
//             listen,
//             createHref,
//             location: createLocation(basename),
//         },
//         listenerManager = new ListenerManager(),
//         blockManager = new BlockManager(getUserConfirmation);
//
//     function go(step) {
//
//         window.history.go(step);
//     }
//
//     function goBack() {
//
//         window.history.back();
//     }
//
//     function goForward() {
//
//         window.history.forward();
//     }
//
//     function push(path, state) {
//
//         // const pathInfo = handlePathAndState(path, state, basename);
//         //
//         // history.action = 'PUSH';
//         //
//         // window.history.pushState({
//         //
//         //     key: createKey(keyLength),
//         //     state: pathInfo.state
//         //
//         // }, null, pathInfo.path);
//         // history.location = createLocation(basename);
//         //
//         // if (forceRefresh) {
//         //
//         //     window.location.href = pathInfo.path;
//         // }
//
//         changePage(path, state, true);
//     }
//
//     function replace(path, state) {
//
//         // const pathInfo = handlePathAndState(path, state, basename);
//         //
//         // history.action = 'REPLACE';
//         //
//         // window.history.replaceState({
//         //
//         //     key: createKey(keyLength),
//         //     state: pathInfo.state
//         //
//         // }, null, pathInfo.path);
//         // history.location = createLocation(basename);
//         //
//         // if (forceRefresh) {
//         //
//         //     window.location.href = pathInfo.path;
//         // }
//
//         changePage(path, state, false);
//
//     }
//
//     function createHref(location) {
//
//         return basename + location.pathname + location.search + location.hash;
//     }
//
//     function listen(listener) {
//
//         addDomListener();
//
//         return listenerManager.addListener(listener);
//     }
//
//     function addDomListener() {
//
//         window.addEventListener('popstate', () => {
//
//             const location = createLocation(basename),
//                 action = 'POP';
//
//             blockManager.triggerBlock(location, action, () => {
//
//                 listenerManager.triggerListener(location, action);
//
//                 history.location = location;
//             });
//         });
//     }
//
//     function handlePathAndState(path, state, basename) {
//
//         if (typeof path === 'string') {
//
//             return {
//                 path,
//                 state
//             };
//
//         } else if (typeof path === 'object') {
//
//             let finallyPath = basename + path.pathname;
//
//             const {search = '', hash = ''} = path;
//
//             if (search.charAt(0) !== '?') {
//
//                 search = '?' + search;
//             }
//
//             if (hash.charAt(0) !== '#') {
//
//                 hash = '#' + hash;
//             }
//
//             finallyPath = finallyPath + finallyPath.search + finallyPath.hash;
//
//             return {
//                 path: finallyPath,
//                 state: path.state
//             };
//         }
//     }
//
//     function createKey(keyLength) {
//
//         return Math.random().toString(36).substr(2, keyLength);
//     }
//
//     function changePage(path, state, isPush) {
//
//         const pathInfo = handlePathAndState(path, state, basename),
//             location = createLocationFromPath(basename);
//
//         let action = 'PUSH';
//
//         blockManager.triggerBlock(location, action, () => {
//
//             if (isPush) {
//
//                 window.history.pushState({
//
//                     key: createKey(keyLength),
//                     state: pathInfo.state
//
//                 }, null, pathInfo.path);
//
//             } else {
//
//                 action = 'REPLACE';
//
//                 window.history.replaceState({
//
//                     key: createKey(keyLength),
//                     state: pathInfo.state
//
//                 }, null, pathInfo.path);
//             }
//
//             listenerManager.triggerListener(location, action);
//
//             history.action = action;
//             history.location = location;
//
//             if (forceRefresh) {
//
//                 window.location.href = pathInfo.path;
//             }
//         });
//     }
// }
//
// function createLocation(basename = '') {
//
//     const {hash, search} = window.location,
//         historyState = window.history.state;
//
//     let pathname = window.location.pathname,
//         location,
//         state;
//
//     pathname = pathname.replace(`^${basename}`, "");
//
//     location = {
//         hash,
//         search,
//         pathname,
//     };
//
//     if (historyState === null) {                        // window.history.state ??? ???
//
//         state = undefined;
//
//     } else if (typeof historyState !== 'object') {      // window.history.state ??? ?????????
//
//         state = historyState;
//
//     } else {                                            // window.history.state ??? ??????
//
//         if ('key' in historyState) {                    // window.history.state ??? history.push();
//                                                         // ????????? react ????????? state( key ??????????????????????????????????????????????????? )
//             location.key = historyState.key;
//             state = historyState.state;
//
//         } else {                                        // window.history.state ?????? key?????????????????????????????????
//
//             state = historyState;
//         }
//     }
//
//     location.state = state;
//
//     return location;
// }
//
// function createLocationFromPath(pathInfo, basename = '') {
//
//     console.log('test', pathInfo);
//
//     const questionIndex = pathInfo.path.indexOf('?'),
//         sharpIndex = pathInfo.path.indexOf('#');
//
//     let pathname = pathInfo.path.replace(/[#?].#$/, ''),
//         search,
//         hash;
//
//     pathname = pathname.replace(`^${basename}`, '');
//
//     if (questionIndex === -1 || questionIndex > sharpIndex) {
//
//         search = '';
//
//     } else {
//
//         search = pathInfo.path.substring(questionIndex, sharpIndex);
//     }
//
//     if (sharpIndex === -1) {
//
//         hash = '';
//
//     } else {
//
//         hash = pathInfo.path.substring(sharpIndex);
//     }
//
//     return {
//         pathname,
//         search,
//         hash,
//         state: pathInfo.state
//     }
// }
//
// // console.log(createLocation('/news'));
//


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//



/**
 * ????????????history api???history??????
 * @param {*} options
 */
export default function createBrowserHistory(options = {}) {
    const {
        basename = "",
        forceRefresh = false,
        keyLength = 6,
        getUserConfirmation = (message, callback) => callback(window.confirm(message))
    } = options;
    const listenerManager = new ListenerManager();
    const blockManager = new BlockManager(getUserConfirmation);

    function go(step) {
        window.history.go(step);
    }
    function goBack() {
        window.history.back();
    }
    function goForward() {
        window.history.forward();
    }

    /**
     * ???????????????????????????????????????
     * @param {*} path ??????????????????????????????????????????????????????
     * @param {*} state ????????????????????????????????????????????????????????????????????????
     */
    function push(path, state) {
        changePage(path, state, true);
    }

    function replace(path, state) {
        changePage(path, state, false);
    }

    /**
     * ???????????????????????????push???replace???????????????
     * @param {*} path
     * @param {*} state
     * @param {*} isPush
     */
    function changePage(path, state, isPush) {

        let action = "PUSH";
        if (!isPush) {
            action = "REPLACE"
        }
        const pathInfo = handlePathAndState(path, state, basename);
        const location = createLoactionFromPath(pathInfo);
        blockManager.triggerBlock(location, action, () => {
            if (isPush) {
                window.history.pushState({
                    key: createKey(keyLength),
                    state: pathInfo.state
                }, null, pathInfo.path);
            }
            else {
                window.history.replaceState({
                    key: createKey(keyLength),
                    state: pathInfo.state
                }, null, pathInfo.path);
            }
            listenerManager.triggerListener(location, action);
            //??????action
            history.action = action;
            //??????location
            history.location = location;
            if (forceRefresh) {
                //????????????
                window.location.href = pathInfo.path;
            }
        })
    }

    /**
     * ??????????????????????????????
     */
    function addDomListener() {
        //popstate??????????????????????????????????????????????????????hash?????????
        //???????????????pushState???replaceState
        window.addEventListener("popstate", () => {
            const location = createLocation(basename);
            const action = "POP";
            blockManager.triggerBlock(location, action, () => {
                listenerManager.triggerListener(location, "POP");
                history.location = location;
            })
        })
    }

    addDomListener();

    /**
     * ????????????????????????????????????????????????????????????????????????
     * @param {*} listener
     */
    function listen(listener) {
        return listenerManager.addListener(listener);
    }

    function block(prompt) {
        return blockManager.block(prompt);
    }

    function createHref(location) {
        return basename + location.pathname + location.search + location.hash;
    }

    const history = {
        action: "POP",
        createHref,
        block,
        length: window.history.length,
        go,
        goBack,
        goForward,
        push,
        replace,
        listen,
        location: createLocation(basename)
    };
    //??????history??????
    return history;
}

/**
 * ??????path???state????????????????????????????????????
 * @param {*} path
 * @param {*} state
 */
function handlePathAndState(path, state, basename) {
    if (typeof path === "string") {
        return {
            path,
            state
        }
    }
    else if (typeof path === "object") {
        let pathResult = basename + path.pathname;
        let { search = "", hash = "" } = path;
        if (search.charAt(0) !== "?") {
            search = "?" + search;
        }
        if (hash.charAt(0) !== "#") {
            hash = "#" + hash;
        }
        pathResult += search;
        pathResult += hash;
        return {
            path: pathResult,
            state: path.state
        }
    }
    else {
        throw new TypeError("path must be string or object");
    }
}

/**
 * ????????????location??????
 */
function createLocation(basename = "") {
    // window.location
    let pathname = window.location.pathname;
    //??????basename?????????
    const reg = new RegExp(`^${basename}`);
    pathname = pathname.replace(reg, "");
    const location = {
        hash: window.location.hash,
        search: window.location.search,
        pathname
    };
    //??????state
    let state, historyState = window.history.state;
    if (historyState === null) {
        state = undefined;
    }
    else if (typeof historyState !== "object") {
        state = historyState;
    }
    else {
        if ("key" in historyState) {
            location.key = historyState.key;
            state = historyState.state;
        }
        else {
            state = historyState;
        }
    }
    location.state = state;
    return location;
}

/**
 * ??????pathInfo????????????location??????
 * @param {*} pathInfo  {path:"/news/asdf#aaaaaa?a=2&b=3", state:??????}
 * @param {*} basename
 */
function createLoactionFromPath(pathInfo, basename) {
    //??????pathname
    let pathname = pathInfo.path.replace(/[#?].*$/, "");
    //??????basename?????????
    let reg = new RegExp(`^${basename}`);
    pathname = pathname.replace(reg, "");
    //search
    var questionIndex = pathInfo.path.indexOf("?");
    var sharpIndex = pathInfo.path.indexOf("#");
    let search;
    if (questionIndex === -1 || questionIndex > sharpIndex) {
        search = "";
    }
    else {
        search = pathInfo.path.substring(questionIndex, sharpIndex);
    }
    //hash
    let hash;
    if (sharpIndex === -1) {
        hash = "";
    }
    else {
        hash = pathInfo.path.substr(sharpIndex);
    }
    return {
        hash,
        pathname,
        search,
        state: pathInfo.state
    }
}

window.createLoactionFromPath = createLoactionFromPath;

/**
 * ??????????????????????????????????????????????????????????????????????????????????????????
 * @param {*} keyLength
 */
function createKey(keyLength) {
    return Math.random().toString(36).substr(2, keyLength);
}





//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    createBrowserHistory
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////