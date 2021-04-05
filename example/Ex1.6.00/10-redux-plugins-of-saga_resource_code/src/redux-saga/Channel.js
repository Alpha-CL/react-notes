///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//-------------------------------------------------------------------------------------------------------------------//


export class Channel {

    listeners = {};

    /**
     * 添加一个订阅者
     *
     * @prop: 属性名
     * @func: 订阅函数
     */
    take(prop, func) {

        if (this.listeners[prop]) {

            this.listeners[prop].push(func);            // 添加监听函数

        } else {

            this.listeners[prop] = [func];
        }
    }

    /**
     * 发布一个订阅，触发监听函数
     *
     * @prop: 属性名
     * @func: 订阅函数
     */
    put(prop, ...args) {

        if (this.listeners[prop]) {

            let funcs = this.listeners[prop];           // 订阅函数数组

            delete this.listeners[prop];                // 移除订阅

            funcs.forEach(func => {

                func(...args);
            });
        }
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
