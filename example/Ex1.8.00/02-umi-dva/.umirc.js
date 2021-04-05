
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {

      antd: false,                            // babel-plugin-import 是否开启

      dva: true,                              // 开启 dva
      immer: true,                            // dva-immer: 规定 object 都为不可变的
      routes: {                               // 去除 pages 文件夹中不匹配路由的页面规则
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },


      dynamicImport: false,                   // 按需加载
      title: '02-umi-dva',
      dll: false,



      // 引用文件操作等
      scripts: [
        { src: 'http://cdn/a.js' },
        // { src: '<%= PUBLIC_PATH %>a.js' },
        // { content: `alert('a');` },
      ],
      headScripts: [],
      metas: [{ charset: 'utf-8' }],
      links: [{ rel: 'stylesheet', href: 'http://cdn/a.css' }],

    }],
  ],
}
