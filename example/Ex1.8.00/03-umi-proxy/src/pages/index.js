///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import {getAllStudents} from "../../../03-umi-proxy/src/services/fetchStudents";


//-------------------------------------------------------------------------------------------------------------------//


export default function (props) {

	return (

		<React.Fragment>
			<h3>Home_page</h3>
			<br/>
			<button
				onClick={() => {
					getAllStudents()
						.then(resp => console.log(resp));
				}}
			>
				getAllStudents
			</button>
		</React.Fragment>
	);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////