// ref: https://umijs.org/config/
export default {
	treeShaking: true,

	// routes: [
	//   {
	//     path: '/',
	//     component: '../layouts/index',
	//     routes: [
	//       { path: '/', component: '../pages/index' }
	//     ]
	//   }
	// ],

	proxy: {
		"/api": {
			target: "http://api.duyiedu.com/",
			changeOrigin: true,
		}
	},

	plugins: [
		// ref: https://umijs.org/plugin/umi-plugin-react.html
		['umi-plugin-react', {
			antd: false,
			dva: true,
			dynamicImport: false,
			title: '15-student_management_system-of-umijs',
			dll: false,

			routes: {
				exclude: [
					/models\//,
					/services\//,
					/model\.(t|j)sx?$/,
					/service\.(t|j)sx?$/,
					/components\//,
				],
			},
		}],
	],
}
