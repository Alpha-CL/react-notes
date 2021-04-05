///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/** main **/

import React from "react";
import ReactDOM from "react-dom";
import {fetchAllStudentsData} from "./fetch/fetchAllStudentsData";
import {Student} from "./components/Student";
import {AllStudents} from "./components/AllStudents";


//-------------------------------------------------------------------------------------------------------------------//


const stu = {
    "address": "码头",
    "appkey": "xiaodao92_1581511666918",
    "birth": 2000,
    "ctime": 1581564869,
    "email": "xiaodao_92@yeah.com",
    "id": 45991,
    "name": "dwa",
    "phone": "19991299510",
    "sNo": "0001",
    "sex": 1,
    "utime": 1581564869
};


const domRoot = React.createElement(
    'div',                                  // type
    {},                                     // style
    // children
    <Student {...stu}/>,
);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


ReactDOM.render(
    domRoot,
    document.getElementById('root')
);


//-------------------------------------------------------------------------------------------------------------------//


const appkey = 'xiaodao92_1581511666918',
    url = 'http://api.duyiedu.com/api/student/findAll?appkey=' + appkey;


async function render() {

    ReactDOM.render(
        '正在加载中...',
        document.getElementById('root')
    );

    const allStudentsData = await fetchAllStudentsData(url);

    ReactDOM.render(
        (
            <React.Fragment>
                <h1>[ AllStudents Component ]</h1>
                <AllStudents stus={allStudentsData}/>
                <h1>[ Student Component ]</h1>
                {domRoot}
            </React.Fragment>
        ),
        document.getElementById('root')
    );
}

render();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
