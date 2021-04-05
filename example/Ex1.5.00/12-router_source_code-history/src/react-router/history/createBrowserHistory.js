///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {ListenterManager} from "./ListenterManager";
import {BlockManager} from "./BlockManager";


//-------------------------------------------------------------------------------------------------------------------//


function createBrowserHistory(options = {}) {

	const {
			basename = '',
			forceRefresh = false,
			keyLength = 6,
			getUserConfirmation = (message, callback) => callback(window.confirm(message))
		} = options,
		history = {
			action: 'POP',
			go,
			goBack,
			goForward,
			push,
			replace,
			listen,
			block,
			// createHref,
			location: createLocation(basename),
		},
		listenerManager = new ListenterManager(),
		blockManager = new BlockManager(getUserConfirmation);

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

		// const pathInfo = handlePathAndState(path, state, basename);
		//
		// history.action = 'PUSH';
		//
		// window.history.pushState({
		//
		//     key: createKey(keyLength),
		//     state: pathInfo.state
		//
		// }, null, pathInfo.path);
		//
		// history.location = createLocation(basename);
		//
		// if (forceRefresh) {
		//
		//     window.location.href = pathInfo.path;
		// }

		changePage(path, state, true);
	}

	function replace(path, state) {

		// const pathInfo = handlePathAndState(path, state, basename);
		//
		// history.action = 'REPLACE';
		//
		// window.history.replaceState({
		//
		//     key: createKey(keyLength),
		//     state: pathInfo.state
		//
		// }, null, pathInfo.path);
		// history.location = createLocation(basename);
		//
		// if (forceRefresh) {
		//
		//     window.location.href = pathInfo.path;
		// }

		changePage(path, state, false);
	}

	function handlePathAndState(path, state, basename) {

		if (typeof path === 'string') {

			return {
				path,
				state
			};

		} else if (typeof path === 'object') {

			let finallyPath = basename + path.pathname;

			let {search = '', hash = ''} = path;

			if (search.charAt(0) !== '?') {

				search = '?' + search;
			}

			if (hash.charAt(0) !== '#') {

				hash = '#' + hash;
			}

			finallyPath = finallyPath + search + hash;

			return {
				path: finallyPath,
				state: path.state
			};

		} else {

			throw new TypeError('path must be string or object');
		}
	}

	function changePage(path, state, isPush) {

		const pathInfo = handlePathAndState(path, state, basename),
			location = createLocation(basename);

		// const pathInfo = handlePathAndState(path, state, basename),
		// 	location = createLocationFromPath(basename);

		let action = 'PUSH';

		blockManager.triggerBlock(location, action, () => {

			if (isPush) {

				window.history.pushState({

					key: createKey(keyLength),
					state: pathInfo.state

				}, null, pathInfo.path);

			} else {

				action = 'REPLACE';

				window.history.replaceState({

					key: createKey(keyLength),
					state: pathInfo.state

				}, null, pathInfo.path);
			}

			listenerManager.triggerListener(location, action);

			history.action = action;
			history.location = location;

			if (forceRefresh) {

				window.location.href = pathInfo.path;
			}
		});

		listenerManager.triggerListener(location, action);
	}

	// function createHref(location) {
	//
	//     return basename + location.pathname + location.search + location.hash;
	// }

	function listen(listener) {

		addDomListener();

		return listenerManager.addListener(listener);
	}

	function addDomListener() {

		window.addEventListener('popstate', () => {

			/** popstate 无法监听 **/
			console.log('[地址变化了]');

			const location = createLocation(basename),
				action = 'POP';

			blockManager.triggerBlock(location, action, () => {

				listenerManager.triggerListener(location, action);

				history.location = location;
			});
		});
	}

	addDomListener();

	function createKey(keyLength) {

		return Math.random().toString(36).substr(2, keyLength);
	}

	function block(prompt) {

		return blockManager.block(prompt);
	}

	return history;
}

function createLocation(basename = '') {

	const {hash, search} = window.location;

	let pathname = window.location.pathname,
		location,
		state,
		historyState = window.history.state;

	pathname = pathname.replace(`^${basename}`, "");

	location = {
		hash,
		search,
		pathname,
	};

	// console.log(historyState);

	if (historyState === null) {                        // window.history.state 为 空

		state = undefined;

	} else if (typeof historyState !== 'object') {      // window.history.state 为 原始值

		state = historyState;

	} else {                                            // window.history.state 为 对象

		if ('key' in historyState) {                    // window.history.state 为 history.push();
			// 此时为 react 添加的 state( key 为标识，并和其他框架或使用者区别开 )
			location.key = historyState.key;
			state = historyState.state;

		} else {                                        // window.history.state 没有 key，属于其他使用者创建的

			state = historyState;
		}
	}

	location.state = state;

	return location;
}

// function createLocationFromPath(pathInfo, basename = '') {
//
//     const questionIndex = pathInfo.path.indexOf('?'),
//         sharpIndex = pathInfo.path.indexOf('#');
//
//     let pathname = pathInfo.path.replace(/[#?].#$/, ''),
//         search,
//         hash;
//
//     pathname = pathname.replace(`^${basename}`, '');
//
//     if (questionIndex === -1 || questionIndex > sharpIndex) {
//
//         search = '';
//
//     } else {
//
//         search = pathInfo.path.substring(questionIndex, sharpIndex);
//     }
//
//     if (sharpIndex === -1) {
//
//         hash = '';
//
//     } else {
//
//         hash = pathInfo.path.substring(sharpIndex);
//     }
//
//     return {
//         pathname,
//         search,
//         hash,
//         state: pathInfo.state
//     }
// }


// console.log(createLocation('/aaa'), 123);
// console.log(createLocation({
//
// 	pathname: '/aaa',
// 	search: 'a=1&b=2',
// 	hash: 'ccc',
//
// }, 123));


window.myHistory = createBrowserHistory({
	basename: '/news',
	forceRefresh: true,
});

console.log('[myHistory]', window.myHistory);


window.onpopstate = function(event) {
	alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

	createBrowserHistory
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
