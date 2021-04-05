///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import qs from "querystring";
import {fetch} from "dva";


//-------------------------------------------------------------------------------------------------------------------//


const appkey = "demo13_1545210570249";

/**
 * 获取所有学生
 */
async function getAllStudents() {
	return await fetch("/api/student/findAll?appkey=" + appkey)
		.then(resp => resp.json())
		.then(resp => resp.data);
}

async function getStudents(page = 1, limit = 10) {
	return await fetch(`/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`)
		.then(resp => resp.json())
		.then(resp => resp.data);
}

async function addStudent(stuObj) {

	const queryStr = qs.stringify(stuObj);
	const url = `/api/student/addStudent?appkey=${appkey}&${queryStr}`;

	// console.log(url);

	return await fetch(url)
		.then(resp => resp.json());
}

async function updateStudent(stuObj) {

	const queryStr = qs.stringify(stuObj);
	const url = `/api/student/updateStudent?appkey=${appkey}&${queryStr}`;

	// console.log(url);

	return await fetch(url)
		.then(resp => resp.json());
}

async function getStudentBySNo(sNo) {

	const stus = await getAllStudents();

	return stus.find(s => s.sNo === sNo);
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

	getAllStudents,
	getStudents,
	addStudent,
	updateStudent,
	getStudentBySNo
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
