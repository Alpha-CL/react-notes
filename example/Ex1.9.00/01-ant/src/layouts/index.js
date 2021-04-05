///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import Layout from "@/components/Layout";
import Aside from "@/components/Aside";
import MenuContainer from "@/components/containers/MenuContainer";


//-------------------------------------------------------------------------------------------------------------------//


export default function (props) {

	if (props.location.pathname === '/login') {

		return props.children;

	} else {

		return (

			<Layout
				header={<MenuContainer/>}
				aside={<Aside/>}
				main={props.children}
			/>
		);
	}
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////