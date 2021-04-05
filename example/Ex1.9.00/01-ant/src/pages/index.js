/**
 * Routes:
 *      - src/router/PrivateRouter
 */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import {addStudent, getAllStudents, updateStudent, getStudentBySNo} from "@/services/student";

//-------------------------------------------------------------------------------------------------------------------//


// addStudent({
// 	sNo: '3122',
// 	name: 'alpha',
// 	sex: 0,
// 	birth: '2000',
// 	phone: '12341231211',
// 	address: 'dwadwa',
// 	email: 'dnwaidw@qq.com'
// }).then(resp => {
//
// 	console.log(resp);
// });
//
// getAllStudents().then(resp => console.log(resp));
//
// updateStudent({
// 	sNo: '3122',
// 	name: 'alpha2',
// 	sex: 0,
// 	birth: '2000',
// 	phone: '12341231211',
// 	address: 'dwadwa',
// 	email: 'dnwaidw@qq.com'
// })
// 	.then(resp => {
// 		console.log(resp);
// 	});

// getStudentBySNo('00001').then(resp => console.log(resp));


export default function (props) {

	return (

		<React.Fragment>
			<h3>Welcome</h3>
		</React.Fragment>
	);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////