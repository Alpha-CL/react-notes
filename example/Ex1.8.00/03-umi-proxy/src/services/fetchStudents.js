///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {fetchData} from "./fetchData";


//-------------------------------------------------------------------------------------------------------------------//


const dyedu = 'http://api.duyiedu.com';

async function getAllStudents() {

    const appkey = 'demo13_1545210570249',
        queryPath='/api/student/findAll',
        url = `${queryPath}?appkey=${appkey}`;

    return await fetchData(url);
}


// async function getAllStudents() {
//
//     const appkey = 'demo13_1545210570249',
//         queryPath='/api/student/findAll',
//         url = `${queryPath}?appkey=${appkey}`;
//
//     return await fetchData(url);
// }


async function searchStudents({page = 1, size = 10, key = "", sex = -1} = {}) {

    const appkey = 'demo13_1545210570249',
        queryPath = '/api/student/searchStudent',
        url = `${dyedu}${queryPath}?appkey=${appkey}&page=${page}&size=${size}&search=${key}&sex=${sex}`;

    let resp;

    if (key) {

        // search students of key
        resp = await fetchData(url);

        console.log('11',resp);

        resp.datas = resp.searchList;
        delete resp.searchList;

    } else  {

        // search all students
        resp = await getAllStudents(page, size);

        // console.log('22',resp);

        resp.datas = resp.findByPage;
        delete resp.findByPage;
    }

    // console.log('33',resp);

    return resp;
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    getAllStudents,
    searchStudents
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
