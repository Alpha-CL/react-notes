///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export {
    getAllStudents
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


const appkey = 'demo13_1545210570249';

async function  getAllStudents(props) {

    return await fetch('https://open.duyiedu.com/api/student/findAll?appkey=' + appkey)
        .then(resp => resp.json())
        .then(resp => resp.data);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
