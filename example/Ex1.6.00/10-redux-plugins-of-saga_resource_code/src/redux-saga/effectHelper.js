///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//-------------------------------------------------------------------------------------------------------------------//


const specialEffectName = '@@redux-saga/IO';

export const effectTypes = {

    CALL: 'CALL',
    PUT: 'PUT',
    SELECT: 'SELECT',

    TAKE: 'TAKE',
    FORK: 'FORK',
    CANCEL: 'CANCEL',

    ALL: 'ALL',
};


export function createEffect(type, payload) {

    if (!Object.values(effectTypes).includes(type)) {

        throw new TypeError('这是一个无效的 type 值');
    }

    return {
        [specialEffectName]: true,
        type,
        payload
    }
}

export function isEffect(obj) {

    if (typeof obj !== 'object') {

        return false;
    }

    return obj[specialEffectName] === true;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
