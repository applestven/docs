(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{602:function(t,e,r){"use strict";r.r(e);var a=r(38),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"第6章-常用ui组件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第6章-常用ui组件"}},[t._v("#")]),t._v(" 第6章: 常用UI组件")]),t._v(" "),r("h2",{attrs:{id:"antd的按需引入-自定主题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#antd的按需引入-自定主题"}},[t._v("#")]),t._v(" antd的按需引入+自定主题")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v('1.安装依赖：yarn add react-app-rewired customize-cra babel-plugin-import less less-loader\n2.修改package.json\n\t\t....\n\t\t\t"scripts": {\n\t\t\t\t"start": "react-app-rewired start",\n\t\t\t\t"build": "react-app-rewired build",\n\t\t\t\t"test": "react-app-rewired test",\n\t\t\t\t"eject": "react-scripts eject"\n\t\t\t},\n\t\t....\n3.根目录下创建config-overrides.js\n\t//配置具体的修改规则\n\tconst { override, fixBabelImports,addLessLoader} = require(\'customize-cra\');\n\tmodule.exports = override(\n\t\tfixBabelImports(\'import\', {\n\t\t\tlibraryName: \'antd\',\n\t\t\tlibraryDirectory: \'es\',\n\t\t\tstyle: true,\n\t\t}),\n\t\taddLessLoader({\n\t\t\tlessOptions:{\n\t\t\t\tjavascriptEnabled: true,\n\t\t\t\tmodifyVars: { \'@primary-color\': \'green\' },\n\t\t\t}\n\t\t}),\n\t);\n4.备注：不用在组件里亲自引入样式了，即：import \'antd/dist/antd.css\'应该删掉 \n')])])]),r("p",[t._v("ps : react 18以前可用\n模板 ：https://gitee.com/big_insect/study-class/tree/master/react/react-cli/antd-react17")])])}),[],!1,null,null,null);e.default=s.exports}}]);