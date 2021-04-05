///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//-------------------------------------------------------------------------------------------------------------------//


/**
 * 迭代               // 类似遍历
 *
 *
 * 遍历: 可在数据集合( map，set，array，类数组 等 )中，依次获取数据进行某种处理
 *  vs
 * 迭代: 按照某种逻辑，可不断获取下一个数据的数据进行处理
 */

/**
 * 迭代器          // JS 语言规定: 若一个对象具有 next(); 方法
 *                // 并且 next(); 方法满足一定约束，则该对象为 可迭代对象
 *
 * obj = {
 *     value: any,          // 下一个数据的值( 若下一个数据值为假，则返回 undefined )
 *     done: bool,          // 是否迭代完成所有数据
 * };
 *
 ** 通过迭代器中 next(); 方法，可依次获取数据，并可以根据返回的 done 属性判断是否迭代完成所有数据
 *
 *
 *
 * 可迭代创建函数      // 返回 迭代器的 函数
 *
 *
 * 调用该函数，返回一个 "迭代器"
 */

/**
 * 可迭代协议
 *
 *
 ** 1) 对象必须含有 知名符号属性 Symbol.iterator
 ** 2) 该属性必须是一个 "无参的迭代器创建函数"
 *
 *
 * ES6 中 for...of.. 循环          // 必须是 "满足可迭代协议" 才可以被 for...of... 遍历
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** 迭代器 **/

// const iterator = {
//
//     i: 1,
//     total: 3,
//     next() {
//
//         const obj = {
//             value: this.i > this.total ? undefined : this.i,
//             done: this.i > this.total,
//         };
//
//         this.i++;
//
//         return obj;
//     }
// };
//
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());               // 迭代完成: value: undefined;

// const fibonacci = {
//
//     a: 1,
//     b: 1,
//     curIndex: 1,
//     next() {
//
//         if (this.curIndex === 1 || this.curIndex === 2) {
//
//             this.curIndex++;
//             return {
//                 value: 1,
//                 done: false,
//             };
//         }
//
//         this.curIndex++;
//         const c = this.a + this.b;
//         this.a = this.b;
//         this.b = c;
//
//         return {
//             value: c,
//             done: false,
//         };
//     }
// };
//
// console.log(fibonacci.next());
// console.log(fibonacci.next());
// console.log(fibonacci.next());
// console.log(fibonacci.next());
// console.log(fibonacci.next());

// const randomIterator = {
//     i: 1,
//     total: 3,
//     next() {
//
//         const obj = {
//             value: this.i > this.total ? undefined : Math.random(),
//             done: this.i > this.total,
//         };
//
//         this.i++;
//
//         return obj;
//     }
// };
//
// let next = randomIterator.next();
//
// while (!next.done) {
//
//     console.log(next.value);
//     next = randomIterator.next();
// }


/** 迭代器创建函数 **/

// function createRandomIterator(total) {
//
//     let i = 1;
//
//     return {
//
//         next() {
//
//             const obj = {
//                 value: i > total ? undefined : Math.random(),
//                 done: i > total
//             };
//             i++;
//
//             return obj;
//         }
//     }
// }
//
// const randomIterator = createRandomIterator(3);
//
// let next = randomIterator.next();
//
// while (!next.done) {
//
//     console.log(next.value);
//     next = randomIterator.next();
// }

// function createArrayIterator(arr) {
//
//     let i = 0;
//
//     return {
//
//         next() {
//
//             return {
//
//                 value: arr[i++],
//                 done: i > arr.length
//             }
//         }
//     }
// }
//
// const arrayIteraot = createArrayIterator([1, 3, 5]);
//
// console.log(arrayIteraot.next());
// console.log(arrayIteraot.next());
// console.log(arrayIteraot.next());
// console.log(arrayIteraot.next());


/** 可迭代协议 **/

const iteratorObj = {

    [Symbol.iterator]: function () {

        let total = 3,
            i = 1;

        return {

            next() {

                const obj = {

                    value: i > total ? undefined : Math.random(),
                    done: i  > total,
                };

                i++;

                return obj;
            }
        }
    }
};


/** for..of... 原理 **/

// for (const item of iteratorObj) {
//
//     console.log(item);
// }


/** 模拟 for...of... **/

// let iterator = iteratorObj[Symbol.iterator](),              // 获取 迭代器函数
//     nextObj = iterator.next();                              // 获取下一个 数据对象
//
// while (!nextObj.done) {                                     // 判断 是否存 下一个数据对象
//     const item = nextObj.value;
//     console.log(item);
//     nextObj = iterator.next();
// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
