///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import LoadingContainer from "@/components/containers/LoadingContainer";
import StudentSearchBarContainer from "@/components/containers/StudentSearchBarContainer";
import StudentTableContainer from "@/components/containers/StudentTableContainer";
import PageContainer from "@/components/containers/PageContainer";


//-------------------------------------------------------------------------------------------------------------------//


export default function (props) {

	return (

		<React.Fragment>
			<LoadingContainer/>
			<StudentSearchBarContainer/>
			<StudentTableContainer/>
			{/*<PageContainer/>*/}
		</React.Fragment>
	);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////