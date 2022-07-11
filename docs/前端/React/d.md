# 第4章：React ajax 
## 前置说明

1. React本身只关注于界面, 并不包含发送ajax请求的代码

2. 前端应用需要通过ajax请求与后台进行交互(json数据)

3. react应用中需要集成第三方ajax库(或自己封装)

## 常用的ajax请求库

1. jQuery: 比较重, 如果需要另外引入不建议使用

2. axios: 轻量级, 建议使用

    1)封装XmlHttpRequest对象的ajax

    2) promise风格

    3)可以用在浏览器端和node服务器端

## 文档
https://github.com/axios/axios

## 相关API GET/POST
    GET请求 
``` js
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

    POST请求
```js
axios.post('/user', {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
});
```
## 案例—github用户搜索（跨域）
https://gitee.com/big_insect/study-class/tree/master/react/react-cli/hello-react/ 04_github搜索案例（跨域）
```js {1,3}
//方法一 ： package.json中添加 
"proxy": "http://localhost:5000/"
//方法二 : src/setupProxy.js 
const proxy = require('http-proxy-middleware')//引入http-proxy-middleware，react脚手架已经安装

module.exports = function(app){
	app.use(
		proxy.createProxyMiddleware('/api',{ //遇见/api1前缀的请求，就会触发该代理配置
			target:'http://localhost:5000', //请求转发给谁
			changeOrigin:true,//控制服务器收到的请求头中Host的值
			pathRewrite:{'^/api':''} //重写请求路径，下面有示例解释
		}),
		proxy.createProxyMiddleware('/api2',{
			target:'http://localhost:5001',
			changeOrigin:true,
			pathRewrite:{'^/api2':''}
		}),
	)
}

```

## 案例-消息订阅-发布机制 pubsub-js
	https://gitee.com/big_insect/study-class/tree/master/react/react-cli/hello-react/05_发布订阅pubsub-js
1. yarn add pubsub-js
2. 订阅  
 import PubSub from 'pubsub-js'  
 


## 扩展：Fetch 
### 文档
1.https://github.github.io/fetch/

2.https://segmentfault.com/a/1190000003810652
### 特点
1.fetch: 原生函数，不再使用XmlHttpRequest对象提交ajax请求

2.老版本浏览器可能不支持
```js
    //发送网络请求---使用fetch发送（未优化）
		/* fetch(`/api1/search/users2?q=${keyWord}`).then(
			response => {
				console.log('联系服务器成功了');
				return response.json()
			},
			error => {
				console.log('联系服务器失败了',error);
				return new Promise(()=>{})
			}
		).then(
			response => {console.log('获取数据成功了',response);},
			error => {console.log('获取数据失败了',error);}
		) */
        //GET请求
        // fetch(url).then(function(response) {
        //     return response.json()
        //   }).then(function(data) {
        //     console.log(data)
        //   }).catch(function(e) {
        //     console.log(e)
        //   });
        // POST请求
        // fetch(url, {
        //     method: "POST",
        //     body: JSON.stringify(data),
        //   }).then(function(data) {
        //     console.log(data)
        //   }).catch(function(e) {
        //     console.log(e)
        //   })

		//发送网络请求---使用fetch发送（优化）
		try {
			const response= await fetch(`/api/search/users2?q=${searchInfo}`)
			const data = await response.json()
			console.log(data);
			this.setState({isnone:false,iserr:false,isloading:false,listItems:data.items})
		} catch (error) {
			console.log('请求出错',error);
      this.setState({isnone:false,iserr:true,isloading:false,errmsg:error.message})
		}
```
