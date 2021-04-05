///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState, useEffect} from "react";
import {Cascader, Button} from "antd";
import {getArea} from "@/services/location";


//-------------------------------------------------------------------------------------------------------------------//


// getArea()
// 	.then(resp => {
// 		console.log('test');
// 		console.log(resp)
// 	});


export default function (props) {

	const [choose, setChoose] = useState([]),
		[options, setOptions] = useState([]);

	useEffect(() => {

		getArea()
			.then(resp => {

				const previnces = resp.map(it => ({
					value: it.id,
					label: it.simpleName,
					isLeaf: false
				}));

				setOptions(previnces);
			});
	}, []);

	// const options = [
	// 	{
	// 		value: 'sichuan',
	// 		label: '四川',
	// 		children: [
	// 			{
	// 				value: 'chengdu',
	// 				label: '成都',
	// 				children: [
	// 					{
	// 						value: 'jinjiang',
	// 						label: '锦江'
	// 					}
	// 				]
	// 			},
	// 			{
	// 				value: 'chongqing',
	// 				label: '重庆'
	// 			}
	// 		]
	// 	},
	// 	{
	// 		value:'shanxi',
	// 		label: '陕西'
	// 	}
	// ];

	return (

		<React.Fragment>
			<Cascader
				value={choose}
				options={options}
				onChange={newValue => {
					setChoose(newValue);
				}}
				loadData={selectedOptions => {

					const opt = selectedOptions[selectedOptions.length - 1],
						parenId = opt.value;
					opt.loading = true;

					getArea(parenId)
						.then(resp => {

							opt.loading = false;
							opt.children = resp.map(it => ({
								value: it.id,
								lable: it.simpleName,
								isLeaf: selectedOptions.length === 3
							}))

							setOptions([...options]);
						});
				}}
			/>
			<Button
				type="primary"
				onClick={() => {
					console.log(choose);
				}}
			>获取选中值</Button>
		</React.Fragment>
	);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////