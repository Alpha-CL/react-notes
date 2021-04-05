///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import store from "./index";
import {add, asyncDecrease, asyncIncrease, decrease, increase} from "./actions";
import {setIsLoading} from "./actions/searchResult";


//-------------------------------------------------------------------------------------------------------------------//


window.increase = function () {

    store.dispatch(increase());
};

window.decrease = function () {

    store.dispatch(decrease());
};

window.asyncIncrease = function () {

    store.dispatch(asyncIncrease());
};

window.asyncDecrease = function () {

    store.dispatch(asyncDecrease());
};

window.add = function (num) {

    store.dispatch(add(num));
};


console.log(store.getState());



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
