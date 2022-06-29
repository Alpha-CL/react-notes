///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//-------------------------------------------------------------------------------------------------------------------//


const urlConfig = {
    user: {
        root: '/user',
        update: '/update',
        pay: {
            root: '/pay',
            beforePay: '/before',
            afterPay: '/after'
        }
    }
};

function setUrlConfig() {

    _setUrlConfig(urlConfig, "");
}

function _setUrlConfig(obj, baseStr) {

    const newBaseStr = baseStr + (obj.root === undefined ? "" : obj.root);

    for (let prop in obj) {

        const value = obj[prop];

        if (typeof value === "string") {

            if (prop === "root") {

                obj[prop] = baseStr + value;

            } else {

                obj[prop] = newBaseStr + value;
            }

        } else  {

            _setUrlConfig(obj[prop], newBaseStr);
        }

    }
}

setUrlConfig();


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    urlConfig
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
