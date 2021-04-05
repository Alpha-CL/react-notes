
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

	/** 仅在 dev_mode 下有效 **/
	proxy: {                                        // 相当于 webpack 中的 devServer 中的 proxy 配置

		"/api": {                                   // step_01: 设置了需要代理的请求头
			target: "http://api.duyiedu.com",       // step_02: 设置代理的目标，即真实的服务器地址
			changeOrigin: true,                     // step_03: 设置是否跨域请求资源
			// "pathRewrite": { "^/api" : "" },        // step_04: 表示是否重写请求地址，比如这里的配置，就是把 /api 替换成空字符
		}
	},

	plugins: [
		// ref: https://umijs.org/plugin/umi-plugin-react.html
		['umi-plugin-react', {
			antd: false,
			dva: true,
			dynamicImport: false,
			title: 'test',
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
};
