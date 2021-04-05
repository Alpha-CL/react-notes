///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {pathToRegexp, parse, match, compile} from "path-to-regexp";


//-------------------------------------------------------------------------------------------------------------------//


function pathMatch(path, pathname, options) {

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

function getParams(groups, keys = []) {

    const obj = {};

    for (let i = 0; i <= keys.length - 1; i++) {

        const val = groups[i],
            key = keys[i].name;
        obj[key] = val;
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
        sensitive: opts.sensitive,
        strict: opts.strict,
        end: opts.exact
    }
}


function testPathRoRegexp() {

    /**
     * pathToRegexp(path: str, key: arr, options: obj);
     *
     *
     * @path: 字符串数组或正则表达式
     * @key: 数组中存储在 path 中匹配的 关键字 ':key' 等信息
     * @options: {
     *     sesitive: false,             // 是否区分大小写
     *     strict: false,               // 不允许可选的尾随定界符匹配时
     *     end: true,                   // 是否匹配到表达式匹配字符串的结尾
     *     start: true,                 // 是否从表达式从字符串开头开始匹配时
     *     dlimiter: '/#?',             // 默认分隔符段
     *     endsWith: 'x=>x',            // 字符或字符列表，视为“结束”字符
     *     prefixes: './',              // 解析时自动考虑前缀的字符列表
     * }
     */

    const res = pathToRegexp('/news/:id/:page');

    console.log(res);

    console.log(res.exec('/news/123/5'));
}

// testPathRoRegexp();


// const result = pathMatch('/news/:id', "/news/asda/dwad");
//
// console.log(result);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    pathMatch
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
