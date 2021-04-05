import {ListenerManager} from "./ListenerManager";
import {BlockManager} from "./BlockManager";

function createBrowserHistory(options = {}) {
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

    function push(path, state) {
        changePage(path, state, true);
    }

    function replace(path, state) {
        changePage(path, state, false);
    }

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
            //改变action
            history.action = action;
            //改变location
            history.location = location;
            if (forceRefresh) {
                //强制刷新
                window.location.href = pathInfo.path;
            }
        })
    }

    function addDomListener() {
        //popstate事件，仅能监听前进、后退、用户对地址hash的改变
        //无法监听到pushState、replaceState
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
    //返回history对象
    return history;
}

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

function createLocation(basename = "") {
    // window.location
    let pathname = window.location.pathname;
    //处理basename的情况
    const reg = new RegExp(`^${basename}`);
    pathname = pathname.replace(reg, "");
    const location = {
        hash: window.location.hash,
        search: window.location.search,
        pathname
    };
    //处理state
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

function createLoactionFromPath(pathInfo, basename) {
    //取出pathname
    let pathname = pathInfo.path.replace(/[#?].*$/, "");
    //处理basename的情况
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

function createKey(keyLength) {
    return Math.random().toString(36).substr(2, keyLength);
}


export {
    createBrowserHistory
}