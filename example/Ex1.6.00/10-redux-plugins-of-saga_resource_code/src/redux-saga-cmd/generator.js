///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import isPromise from "is-promise";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * generator            // 由内置 Generator 创建的对象
 *                      // 该对象 即是 "迭代器", 也是 "可迭代对对象"
 *
 * 由构造函数Generator创建的对象，该对象既是一个迭代器，同时，又是一个可迭代对象( 满足可迭代协议的对象 )
 */


// 因 Generator 不对开发者开放( 仅作为 JS引擎内部使用 )，以下代码仅模拟原理
//
//
// let generator = new Generator();                     // 创建 "生成器"
//
// generator.next();                                    // 1) 具有 next(); 方法
//
// let iterator = generator[Symbol.iterator];           // 2) 满足迭代协议的 "可迭代对象"
//
// for (const item of generator) {
//
//      .....
// }


/**
 * 生成器创建函数
 *
 *
 ** 在 "function关键字" 与 "函数名" 之间添加 '*'，则该函数 返回一个 "生成器"
 *
 *
 * 1) 调用 生成器创建函数，会返回一个 生成器，但 "并不执行函数体内的任何代码"
 *    ( 生成器创建函数 内的代码 受 生成器的 generator.next(); 方法控制 )
 *
 * 2) 每当调用 generator.next(); 生成器函数体内则会 "从上一次 yield" 位置 "执行到 下一次 yield" 位置
 *
 *      - yield 关键字，仅在生成器创建函数内部可用
 *      - yield 表示 "暂停"，执行后 返回当前迭代数据
 *      - 若执行到无 yield，则函数结束( 生成器数据迭代完成后，最后一次迭代数据中的 done: true; )
 *
 * 3) yield 关键字后 表达式返回的返回值，为当前迭代的数据的 value 值
 *    ( yield 'hello world' => { value: 'hello world', done: bool })
 *
 ** 4) 生成器创建函数的返回值，仅作为最后一次迭代数据的 lastDataObj.value 的值 )
 *    ( 若最后一次迭代数据后，仍然调用数据迭代，则 "lastDataObj.value 的值" 会被 undefined 覆盖 )
 *
 * 5) 调用 generator.next(); 可以传递参数，该参数会作为 "上一个 yield 表达式的返回值" 可以向下传递
 *
 *      - 生成器第一次调用 generator.next(); 传递的参数无意义( 因为并没有上一个 yield 表达式 )
 *
 * 6) 生成器 自带 throw(); 方法，该方法与 next(); 用法类似
 *
 *      - next: 传递参数会被返回为 正常值
 **     - throw: 传递参数 为一个 错误对象，会导致生成器内部发生一个报错
 *
 * 7) 生成器创建函数可在外部调用 generator.return(); 方法，则直接结束 生成器函数创建函数
 *
 * 8) 若在 生成器创建函数内部 调用 其他生成器
 *
 *      - 普通调用: 返回一个生成器( 并且不会执行该生成器中的任何代码 )
 **     - 加 * 调用: eg: yeild* anotherGenerator();
 *                  则会进入 指定生成器内部，并执行该生成器中的代码
 */


/** 在 function 关键字 与 函数名之间添加 '*'，则该函数 返回一个 生成器 **/
// function* createGenerator() {
//
//     console.log('[gernerator] - start');
//     yield 'invoking_01';
//     console.log('[gernerator]');
//     yield 'invoking_02';
//     console.log('[gernerator]');
//     yield 'invoking_03';
//
//     return 'end';
// }
//
// const generator = createGenerator();            // 调用后，返回一个生成器( 不执行生成器创建函数体中的 任何代码 )
//
// console.log(generator[Symbol.iterator]);
//
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// function* createArrayIterator(arr) {
//
//     console.log('[数据迭代开始]');
//
//     for (let i = 1; i <= arr.length; i++) {
//
//         const item = arr[i];
//
//         console.log(`[第 ${i} 次数据迭代]`);
//
//         yield item;
//     }
//
//     return console.log('[数据迭代结束]: 最后一次数据迭代会以函数的返回值 作为 nextDatasObj.value 的值');
// }
//
// const arrIterator = createArrayIterator([1, 2, 3]);
//
// arrIterator.next();
// arrIterator.next();
// arrIterator.next();
// arrIterator.next();
// arrIterator.next();
// arrIterator.next();
//
// console.log('[数据迭代结束后，若继续调用 next(); 方法，则 { value: undefined, done: true }');


// function* createGenerator() {
//
//     let prevExpressVal;
//
//     console.log('[gernerator] - start: 第一次传入参数无意义');        // 第一次传入参数 无意义
//     console.log('');
//
//     prevExpressVal = yield 1;
//     console.log('[prevExpressVal]: ', prevExpressVal);  // 传入的参数会作为 上一次 yield 表达式的返回值，并继续向下传递
//     console.log('');
//
//     prevExpressVal = yield 2;
//     console.log('[prevExpressVal]: ', prevExpressVal);  // 传入的参数会作为 上一次 yield 表达式的返回值，并继续向下传递
//     console.log('');
//
//     prevExpressVal = yield 3;
//     console.log('[prevExpressVal]: ', prevExpressVal);  // 传入的参数会作为 上一次 yield 表达式的返回值，并继续向下传递
//     console.log('');
//
//     return '[gernerator] - end';
// }
//
// const generator = createGenerator();            // 调用后，返回一个生成器( 不执行生成器创建函数体中的 任何代码 )
//
// console.log(generator.next(22));
// console.log(generator.next(33));
// console.log(generator.next(44));
// console.log(generator.next(55));
// console.log('');
//
// console.log(generator.next(66));
// console.log(generator.next(77));


// function asyncGetData() {
//
//     return new Promise((resolve, reject) => {
//
//         setTimeout(() => {
//
//             resolve('[Geted-Datas]');
//
//         }, 2000);
//     })
// }


// 01_直接利用 Promise.then(); 获取数据
//
// asyncGetData().then(result => console.log(result));

// 02_利用生成器 间接调用 Promise 并传递数据
//
// function* taskGenerator() {
//
//     console.log('[loading get datas]');
//
//     const data = yield asyncGetData();
//
//     console.log('[datas]: ', data);
// }
//
// const generator = taskGenerator();          // 创建 生成器
//
// const promise = generator.next().value;     // 接收第一次 yield 表达式返回的 Promise 对象
//
// promise.then(resolve => {                   // 利用 Promise，响应后 将数据 作为 next(); 的参数传递
//
//     generator.next(resolve);                // 传入的参数会作为 上一次 yield 表达式的返回值
//
// }).then(resp=>{
//
//     generator.next();
// });

// 03_创建公共函数，判断 prevExpressVal.value 返回的是否是 Promise，并如何传递 数据
//
// function* taskGenerator() {
//
//     let data;
//
//     console.log('[loading get datas]');
//
//     data = yield asyncGetData();
//
//     console.log('[get_datas_01]: ', data);
//
//     data = yield asyncGetData();
//
//     console.log('[get_datas_02]: ', data);
// }
//
// function run(getneratorFunc) {
//
//     const generator = getneratorFunc();
//
//     next();
//
//     function next(nextValue) {
//
//         let prevExpressVal = generator.next(nextValue);
//
//         if (prevExpressVal.done) {
//
//             return;
//         }
//
//         const promise = prevExpressVal.value;
//
//         if (isPromise(promise)) {
//
//                 promise.then(resp => (next(resp)));
//
//         } else  {
//
//             prevExpressVal = generator.next(prevExpressVal.value);
//         }
//     }
// }
//
// run(taskGenerator);


// function* createGeneratorOfErr() {
//
//     try {                                   // 利用 try...catch... 捕获并抛出错误，可以避免错误出现时终止后续代码的情况
//
//         let prevExpressVal;
//
//         console.log('[gernerator] - start: 第一次传入参数无意义');        // 第一次传入参数 无意义
//         console.log('');
//
//         prevExpressVal = yield 1;
//         console.log('[prevExpressVal]: ', prevExpressVal);      // 传入的参数会作为 上一次 yield 表达式的返回值，并继续向下传递
//         console.log('');
//
//         prevExpressVal = yield 2;
//         console.log('[prevExpressVal]: ', prevExpressVal);      // 传入的参数会作为 上一次 yield 表达式的返回值，并继续向下传递
//         console.log('');
//
//         prevExpressVal = yield 3;
//         console.log('[prevExpressVal]: ', prevExpressVal);      // 传入的参数会作为 上一次 yield 表达式的返回值，并继续向下传递
//         console.log('');
//
//         return '[gernerator] - end';
//
//     } catch (err) {
//
//         console.log('[err]: ', err);
//
//         yield 'is ok';                      // 报错后，依然可以继续运行 generator.next();
//     }
// }
//
// const generatorOfErr = createGeneratorOfErr();
//
// const err = new Error('[ err 作为参数传递 ]');
//
//
// generatorOfErr.next(22);
// generatorOfErr.next(err);
// generatorOfErr.next(44);
//
// generatorOfErr.next(55);
// generatorOfErr.next();


// function* creataGenerator() {
//
//     let prevDtatsVal;
//
//     console.log('[generator]-start');
//     console.log('');
//
//     prevDtatsVal = yield 1;
//     console.log('[generator-invoking_01]', prevDtatsVal);
//     console.log('');
//
//     yield* createAnotherGenerator();        // 此时返回的为 生成器创建函数的 return 的返回值
//
//     prevDtatsVal = yield 2;
//     console.log('[generator-invoking_02]', prevDtatsVal);
//     console.log('');
//
//
//     prevDtatsVal = yield 3;
//     console.log('[generator-invoking_03]', prevDtatsVal);
//     console.log('');
// }
//
// function* createAnotherGenerator() {
//
//     let prevDtatsVal;
//
//     console.log('[another_generator]-start');
//     console.log('');
//
//     prevDtatsVal = yield 1;
//     console.log('[another_generator-invoking_01]', prevDtatsVal);
//     console.log('');
//
//     prevDtatsVal = yield 1;
//     console.log('[another_generator-invoking_01]', prevDtatsVal);
//     console.log('');
//
//     prevDtatsVal = yield 1;
//     console.log('[another_generator-invoking_01]', prevDtatsVal);
//     console.log('');
// }
//
// const generator = creataGenerator();
//
// generator.next(11);
// generator.next(22);
// generator.next(33);
// generator.next(44);
// generator.next(55);
// generator.next(66);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
