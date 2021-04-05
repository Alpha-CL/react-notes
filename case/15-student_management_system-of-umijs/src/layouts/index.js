///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import Layout from "../components/Layout";
import TopNav from "@/components/TopNav";
import Aside from "@/components/Aside";
import MenuContainer from "@/components/containers/MenuContainer";
import styles from "./index.css";
import LoadingContainer from "@/components/containers/LoadingContainer";


//-------------------------------------------------------------------------------------------------------------------//


export default function (props) {

	if (props.location.pathname === '/login') {

		return props.children;

	} else {

		return (

			<React.Fragment>
				<Layout
					header={<MenuContainer/>}
					aside={<Aside/>}
					main={props.children}
				/>
			</React.Fragment>
		);
	}
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////