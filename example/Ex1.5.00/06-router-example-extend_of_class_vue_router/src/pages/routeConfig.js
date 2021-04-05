///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {Home} from "./Home";
import {News} from "./News";
import {NewsDetail} from "./NewsDetail";
import {NewsHome} from "./NewsHome";
import {NewsSearch} from "./NewsSearch";


//-------------------------------------------------------------------------------------------------------------------//


const routConfig = [

    {
        path: '/news', name: 'news', component: News,
        children: [
            {path: '/', name: 'newsHome', exact: true, component: NewsHome},
            {path: '/detail', name: 'newsDetail', exact: true, component: NewsDetail},
            {path: '/search', name: 'newsSearch', exact: true, component: NewsSearch},
        ]
    },
    {path: '/', name: 'home', component: Home}
];


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    routConfig
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
