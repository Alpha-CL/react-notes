///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {pathToRegexp, parse, match, compile} from "path-to-regexp";


//-------------------------------------------------------------------------------------------------------------------//


function matchPath(path, pathname, options) {

    // testPathRoRegexp();

    const keys = [],
        rergExp = pathToRegexp(path, keys, getOptions(options)),
        // pathname = window.location.pathname,
        result = rergExp.exec(pathname);

    if (!result) {

        return null;
    }

    let groups = Array.from(result);
    groups = groups.slice(1);

    const params = getParams(groups, keys);

    return {
        isExact: pathname === result[0],
        params,
        path,
        url: result[0],
    }
}


function getParams(groups, keys) {

    const obj = {};
    for (let i = 0; i < groups.length; i++) {
        const value = groups[i];
        const name = keys[i].name;
        obj[name] = value;
    }
    return obj;
}


function getOptions(options = {}) {

    const defaultOptions = {
        exact: false,
        sensitive: false,
        strict: false
    }, opts = {...defaultOptions, ...options};

    return {
        exact: opts.exact,
        sensitive: opts.sensitive,
        end: opts.strict
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    matchPath
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
