///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//-------------------------------------------------------------------------------------------------------------------//


// async function fetchData(url) {
//
// 	console.log(url);
//
// 	return await fetch(url)
//         .then(resp => resp.json())
//         .then(resp => resp.data)
// 		.then(resp => console.log(resp));
// }

async function fetchData(url) {

	return await fetch(url)

		.then(resp => {

			console.log(url);
			console.log(resp);

			return resp.json()

		})
		.then(resp => {

			console.log(url);
			console.log(resp);

			return resp.data;
		});
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    fetchData
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
