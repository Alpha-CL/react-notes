// ref: https://umijs.org/config/
export default {
	treeShaking: true,


	// routes: [
	//   {
	//     path: '/',
	//     component: '../layouts/index',
	//     routes: [
	//       { path: '/', component: '../pages/index' },
	//       { path: '/student', component: '../pages/student' },
	//     ]
	//   }
	// ],


	proxy: {
		"/api": {
			target: "http://api.duyiedu.com/",
			changeOrigin: true,
		},
		"/api/upload": {
			target: "http://101.132.72.36:5100",
			changeOrigin: true,
		},
		"/api/local": {
			target: "http://101.132.72.36:5100/",
			changeOrigin: true
		},
	},


	plugins: [
		// ref: https://umijs.org/plugin/umi-plugin-react.html
		['umi-plugin-react', {
			antd: true,
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
