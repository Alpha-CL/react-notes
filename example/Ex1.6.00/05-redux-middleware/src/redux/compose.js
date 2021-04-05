///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//-------------------------------------------------------------------------------------------------------------------//


export default function compose (...funcs) {

    if (funcs.length === 0) {

        return args => args;

    } else if (funcs.length === 1) {

        return funcs[0];
    }

    return funcs.reduce((a, b) => (...args) => a(b(...args)));

    // return function (...args) {
    //
    //     let lastReturn = null;
    //
    //     for (let i = funcs.length - 1; i >= 0; i--) {
    //
    //         const func = funcs[i];
    //
    //         if (i === funcs.length - 1) {
    //
    //             lastReturn = func(...args);
    //
    //         } else {
    //
    //             lastReturn = func(lastReturn);
    //         }
    //     }
    //
    //     return lastReturn;
    // }
}

//
// function func1(n) {
//
//     return n * 2;
// }
//
// function func2(n) {
//
//     return n + n;
// }
//
// let func = compose(func1, func2);
//
// const result = func(3);
//
// console.log(result);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





























