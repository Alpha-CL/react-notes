///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {PureComponent} from "react";
import {Page} from "./pages/Page";
import {createBrowserHistory, createHashHistory, createMemoryHistory} from "history";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * history                      // 第三方库: 用于控制或监听浏览器地址的变化
 *
 *
 * createBrowserHistroy();      // 创建控制浏览器真实地址的 history 对象
 * createHashHistory();         // 创建控制浏览器 hash 的 history 对象
 * createMemoryHistory();       // 创建控制 内存中 地址数组的 history 对象
 * ...
 *
 ** history 对象共同特点: 维护同一个 地址栈
 ** 库中 以下三个函数，虽然名称和参数不同，但返回的对象结构(history)完全一致
 */


/**
 * hisory
 *
 *
 * .lenght();                   // 当前地址栈中存在的地址数量
 *
 *
 * .action();                   // 当前地址栈中最后一次的 操作类型
 *      - 若通过 create(Browser, Hash, Memory)History 创建的 histiry, action 固定为 POP
 *      - 若调用了 history.push(); 则 action 为 PUSH
 *      - 若调用了 history.replace(); 则 action 为 REPLACE
 * .push();                     // 向当前地址栈指针位置，入栈一个新的地址
 * .place();                    // 替换当前地址栈指针指向的地址
 *
 *
 * .go(number);                 // 控制当前地址栈指针偏移( 负数: 后退; 零: 不变; 正数: 前进; )
 * .goBack(); === go(-1);
 * .goForward(); === go(1);
 *
 *
 * listen(fn): unListen;        // 用于监听地址栈指针的变化
 *
 *
 * block(msg): unblock;         // 创建一个阻塞，用于 createBrowserHistory.getUserConfirmation(msg, callback){};
 *                              // 当 创建阻塞后，则该阻塞中创建的 msg 会作为参数传递给 getUserConfirmation 的第一个参数
 *
 *
 * createHref(location): basename + url;            // 用于获取当前页面 "basename + url 的完整路径"
 *
 */


/**
 * listen((location, action)=>{
 *
 *
 * }): unlisten
 *
 * @loaction: 新地址信息
 * @action: 进入新地址的方式
 *      - POP: 指针移动，调用 history.(go, goBack, goFroward)，用户点击浏览器( 前进，后退 )
 *      - PUSH: history.push();
 *      - REPLACE: history.replace();
 *
 * return: unlisten 用于取消监听地址栈指针变化
 */
// const unlisten = window.h.listen((location, action) => {});
// unlisten();


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** createBrowserHistory **/

window.bh = createBrowserHistory({

	basename: '/basename',                          // 配置 基础路径( 每个页面路径都会包含的起始路径 )
	forceRefresh: false,                            // 地址变更时，是否强制刷新页面
	keyLength: 3,                                   // 地址栈中 每个子项(location) 都会对应一个不同的 key( 因可能会重名，区分不同的子项 )

	getUserConfirmation: (msg, callback) => {       // 分布式的 listen();

		console.log(msg);                           // block(msg) 中传入的 msg 会作为参数传入
		callback(true);                             // 仅当 callback(true); 时，页面才允许跳转

		// callback(window.confirm(msg));           // 默认返回
	}
});

window.unblock = window.bh.block('真的要跳转嘛');

console.log('[hisotory.createBrowserHistory]', window.bh);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** createHashHistory **/

window.hh = createHashHistory({

	hashType: 'slash',          // 设置路径 # 后的路径格式
								// 1) hashbang:     #!xxx               已被 chrome 弃用
								// 2) noslash:      #x/x/x
								// 3) slash:        #/x/x/x
});


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/** createMemoryHistory **/

window.mh = createMemoryHistory({

	initialEntries: ['/home','/target'],            // 配置地址栈的初始数组
	initialIndex: 0,                                // 指定指针初始指向
});



//-------------------------------------------------------------------------------------------------------------------//


class App extends PureComponent {

    constructor(props) {

        super(props);

        this.state = {

        };
    }

    render() {

        return (

            <React.Fragment>
                <Page/>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {
    App
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
