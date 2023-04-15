# threejs

## threejs官网 以及本地搭建
<!-- 视频教程：https://www.bilibili.com/video/BV1Gg411X7FY/?p=3&spm_id_from=pageDriver&vd_source=0c88b82560db687e3ba0427782c655e3 -->

https://three.org/
https://github.com/mrdoob/three.js/    下载文档  本地搭建threejs官方网站  /public/file/文档/three.js-dev 
安装依赖npm i ，npm run dev 运行

### 路由器本地docker 下载node容器部署 thressjs文档

每次启动本地文档太麻烦 ，路由器刚好支持docker（tp-link6088） ，部署上去自启动

1. cat /etc/issue 查看容器的系统 不同系统docker容器对应不同下载工具 ，测一下就知道了 
apt-get update ； apk update  ； 

下载curl工具 
apt-get install curl

文件太大 ， 改用本地文件映射  

### docker容器内解压 ：
unzip three.js-dev.zip 

### node容器内安装 pm2
npm install -g pm2 

**threejs 是npm run dev 运行 ，未能打包成build  ，暂放弃** 

## 使用parcel搭建threejs开发环境 

**官网 ： https://www.parceljs.cn/getting_started.html**

- 介绍 ： Parcel 是 Web 应用打包工具，适用于经验不同的开发者。它利用多核处理提供了极快的速度，并且不需要任何配置。

npm init -y

yarn add parcel-bundler --dev

yarn add three --save


修改你的package.json来添加这些任务脚本
```js
{
  "scripts": {
    "dev": "parcel src/index.html",
    "build": "parcel build src/index.html"
  }
}
```
解决npm run dev报错 ： parcelRequire 
<script>var parcelRequire;</script>  

最终配置成模板 ： study-class/thresjs/constructParcel



## three.js最基本的内容
**案例** : main01
**主要代码示例:**
```js
import * as THREE from "three"

console.log(THREE);

// 目标 ： 链接three.js最基本的内容

// 1.创建场景
const scene = new THREE.Scene();

// 2.创建相机 相机多种 这里创建透视相机
const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight,
     0.1, 
     1000
)

// 设置相机位置 
camera.position.set(0,0,10);
scene.add(camera);

// 添加物体 
// 创建几何体 
const cubGeometry = new THREE.BoxGeometry();

// 材质
const cubeMaterial = new THREE.MeshBasicMaterial({ color:0xfff00 });

// 根据几何体和材质创建物体
const cube = new THREE.Mesh(cubGeometry,cubeMaterial);
// 将几何体添加到场景中 
scene.add(cube);

// 初始化渲染器
const renderer = new THREE.WebGLRenderer();
// 设置渲染的尺寸大小 
renderer.setSize(window.innerWidth,window.innerHeight)
console.log("@renderer",renderer);

// 将webgl渲染的canvas内容添加到body
document.body.appendChild(renderer.domElement)

// 使用渲染器，通过相机将场景渲染进来
renderer.render(scene,camera);

```

## 使用控制器查看3d物体
**案例** : main02
**主要代码示例:**
```js
// 导入轨道控制器 
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js' 
// 创建轨道控制器 
const controls = new OrbitControls(camera ,renderer.domElement) // renderer渲染器  
```

## 控制3d物体移动
**案例** : main03
**主要代码示例:**
```js
//  控制3d物体移动
const cube = new THREE.Mesh(cubGeometry,cubeMaterial);
console.log("@Mesh查看物体的位置属性position cube",cube)
// 修改物体的位置 ：
// cube.position.set(5,0,0)
cube.position.x =3;
// 控制物体每帧(可能因为计算量 不均匀移动)进行移动
function render(){
    cube.position.x+=0.01
    if(cube.position.x > 5){
        cube.position.x = 0
    }
    renderer.render(scene,camera)
    // 请求下一帧就会调用render函数
    requestAnimationFrame(render)
}
```

## 控制3d物体缩放  旋转
**案例** : main04
**主要代码示例:**
```js

// 根据几何体和材质创建物体
const cube = new THREE.Mesh(cubGeometry,cubeMaterial);
console.log("@Mesh查看物体的位置属性position cube",cube)

//旋转 45度
cube.rotation.set(Math.PI / 4 , 0 , 0)

// 缩放 
cube.scale.set(3,2,1)
cube.scale.x = 5;


```

## requestAnimationFrame的应用  时间参数 控制物体动画
**案例** : main05
**主要代码示例:**
```js
function render(timer){

    let t =timer/1000 %5 ; // /1000 控制计算量 ，每一帧去改图 ，不均匀移动（计算时快时慢，没有给足时间去计算） 
    cube.position.x = t * 1  ;
    renderer.render(scene,camera);
    // 请求下一帧就会调用render函数
    requestAnimationFrame(render)
}

render()
```

## clock跟踪时间处理动画
**案例** : main06
**主要代码示例:**
```js
// 设置时钟
const clock = new THREE.Clock();

function render(timer){
    // 获取时钟的总时长
    // let time = clock.getElapsedTime();
    // console.log("时长总运行时间",time);
    let deltaTime = clock.getDelta();
    console.log("两次获取时间的间隔时间(秒)："+deltaTime); // 大概是 0.016秒（一帧间隔时间）  帧数为1000/16 =62.5 

    
    // let t =time%5 ; // /1000 控制计算量 ，每一帧去改图 ，不均匀移动（计算时快时慢，没有给足时间去计算） 
    // cube.position.x = t*1
    renderer.render(scene,camera);
    // 请求下一帧就会调用render函数
    requestAnimationFrame(render)
}
```

## 掌握gsap(动画插件库)各种设置 效果   控制动画属性与方法
**案例** : main07 
**主要代码示例:**
```js
//  cnpm i gsap (gsap不支持商用？？)
// gsap官网 https://greensock.com/docs
import gsap from "gsap"; 

var animatel = gsap.to(cube.position, {
    x: 5, duration: 5, ease: "power1.out", repeat:2, yoyo: true ,delay:0.5,
    onComplete: () => {
        console.log("动画完成");
    },
    onStart: ()=>{
        console.log("动画开始");
    }
})
gsap.to(cube.rotation, { x: 2 * Math.PI, duration: 5, ease: "power1.out" })

window.addEventListener("dblclick",()=>{ // 双击控制
    console.log("@animatel",animatel);
    
    if(animatel.isActive()){
        animatel.pause() // 暂停
    }else{
        animatel.resume() // 恢复
    }
})

```


## 根据尺寸实现自适应画面 
**案例** : main08
**主要代码示例:**
```js
// 监听画面变化 ，更新渲染画面 

window.addEventListener('resize',()=>{
    console.log("画面变化了");
    // 更新摄像头  
    camera.aspect = window.innerWidth/window.innerHeight
    // 更新摄像机的投影矩阵 
    camera.updateProjectionMatrix();

    // 更新渲染器 
    renderer.setSize(window.innerWidth,window.innerHeight) ; 

    // 设置渲染器的像素比 
    renderer.setPixelRatio(window.devicePixelRatio)

})
```

## 调用js接口控制画布全屏或退出全屏
**案例** : main09
**主要代码示例:**
```js
window.addEventListener("dblclick",()=>{ // 双击控制
    //进入全屏 退出全屏 renderer.domElement为画布  
     // 控制台 document.fullscreenElement  可以看到元素canvas
    
    if(!document.fullscreenElement){
        renderer.domElement.requestFullscreen() // 让画布对象全屏
    }else{
        document.exitFullscreen() // 退出全屏
    }

})
```

##  应用图形用户界面更改变量  
**案例** : main10
**主要代码示例:**
```js
// cnpm i dat.gui --save
import * as dat from "dat.gui";
const gui = new dat.GUI();
// step 移动最小精度   
gui.add(cube.position,"x").min(0).max(5).step(0.01).name("移动x轴").onChange((value)=>{
    console.log("值被修改",value);
}).onFinishChange((value)=>{
    console.log("完全停下来");
});
// 修改物体颜色 
const params = {
    color:'#ffff00',
    fn:()=>{
        // 让立方体运动起来
        gsap.to(cube.position , {x:5, duration: 5,repeat:-1 ,yoyo:true})
    }
}
gui.addColor(params,'color').onChange((value)=>{
    console.log("值被修改",value);
    cube.material.color.set(value)
})
// 设置选项框
gui.add(cube,"visible").name("是否显示");
// // 设置按钮点击触发事件
// gui.add(params,'fn').name("立方体运动");

var floder = gui.addFolder("设置立方体")
floder.add(cube.material,"wireframe")
floder.add(params,'fn').name("立方体运动");
```

##  BufferGeometry 设置顶点创建矩形
**案例** : main11
**主要代码示例:**
```js
// BufferGeometry 设置顶点创建矩形
const geometry = new THREE.BufferGeometry();
const vertices =new Float32Array([
    -1.0, -1.0,  1.0,
    1.0, -1.0,  1.0,
    1.0,  1.0,  1.0,

    1.0,  1.0,  1.0,
   -1.0,  1.0,  1.0,
   -1.0, -1.0,  1.0
])
geometry.setAttribute('position',new THREE.BufferAttribute(vertices ,3)) // 3 每三个值为一个坐标
// 材质
const Material = new THREE.MeshBasicMaterial({ color: 0xfff00 });
// 根据几何体和材质创建物体 
const mesh = new THREE.Mesh(geometry,Material)

console.log("@mesh",mesh);
scene.add(mesh)

```

##  BufferGeometry 打造酷炫三角形
**案例** : main12
**主要代码示例:**
```js
//  打造酷炫三角形
for(let i = 0 ; i<50 ; i++){
     // 每一个三角形 ，需要三个顶点 ，每个顶点需要3个值
    const geometry = new THREE.BufferGeometry();
    const positionArray = new Float32Array(9);
    
    for(let j = 0 ; j <9 ; j++){
        positionArray[j]=Math.random()*10-5
        
    }
    // 创建几何体 （矩形）
    geometry.setAttribute('position',new THREE.BufferAttribute(positionArray ,3)) ;
        // 材质
    let color = new THREE.Color(Math.random(),Math.random(),Math.random())   // 颜色随机
    const Material = new THREE.MeshBasicMaterial({ color: color ,transparent:true,opacity:0.5 });

    // 根据几何体和材质创建物体 
    const mesh = new THREE.Mesh(geometry,Material)
    // 添加到场景
    scene.add(mesh)
    console.log("@mesh",mesh);
}


```

## 纹理以及材质  
**案例** : main13
**主要代码示例:**
``` js
// 导入纹理
const textureLoader = new THREE.TextureLoader()
const doorColorTexture = textureLoader.load("./textures/texture (4).jpg")

// 纹理以及材质
// 
// 添加几何体
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// 材质 
const basicMaterial = new THREE.MeshBasicMaterial({
    color:'#ffff00',
    map:doorColorTexture
});
const cube = new THREE.Mesh(geometry,basicMaterial)
scene.add(cube);

```

##  纹理常用属性  纹理偏移  旋转  纹理算法显示与 mipmap
**案例** : main14
**主要代码示例:**
```js
// 导入纹理
const textureLoader = new THREE.TextureLoader()
const doorColorTexture = textureLoader.load("./textures/texture (2).jpg")

console.log("@doorColorTexture",doorColorTexture);

// 纹理偏移
// doorColorTexture.offset.x =0.5;
// doorColorTexture.offset.y =0.5;
// doorColorTexture.offset.set(0.5,0.5)

// 设置旋转的中心点 
// doorColorTexture.center.set(0.5,0.5)

// // 纹理旋转 
// doorColorTexture.rotation =Math.PI/4

// 设置纹理的重复 
doorColorTexture.repeat.set(2,3)
// 设置纹理重复的模式 
// wrapS这个值定义了纹理贴图在水平方向上将如何包裹，在UV映射中对应于U
// wrapT这个值定义了纹理贴图在垂直方向上将如何包裹，在UV映射中对应于V
// RepeatWrapping 使用RepeatWrapping，纹理将简单地重复到无穷大
// 使用MirroredRepeatWrapping， 纹理将重复到无穷大，在每次重复时将进行镜像。
doorColorTexture.wrapS = THREE.MirroredRepeatWrapping;
doorColorTexture.wrapT = THREE.RepeatWrapping;

// texture 纹理显示设置 
doorColorTexture.minFilter  = THREE.NearestFilter
doorColorTexture.magFilter   = THREE.NearestFilter
doorColorTexture.minFilter   = THREE.LinearFilter //(默认)
doorColorTexture.magFilter   = THREE.LinearFilter //(默认)
```

##   AO环境遮挡贴图与强度（增加纹理真实性 ，贴图上再给一层） 
**案例** : main15
**主要代码示例:**
```js
// 导入纹理
const textureLoader = new THREE.TextureLoader()
const doorColorTexture = textureLoader.load("./textures/texture (2).jpg")

// console.log("@doorColorTexture",doorColorTexture);

// 透明材质与透明纹理 
// 如铁栅栏  
// alpha贴图是一张灰度纹理，用于控制整个表面的不透明度。（黑色：完全透明；白色：完全不透明）。 默认值为null。
const doorAplhaTexture = textureLoader.load("./textures/aplha.jpg") // 黑底白面照片

// 添加几何体
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// 材质 
const basicMaterial = new THREE.MeshBasicMaterial({
    color:'#ffff00',
    map:doorColorTexture ,
    alphaMap:doorAplhaTexture,
    transparent:true,
    // opacity:0.3 ,
    // side:DoubleSide // 渲染两面  默认渲染一面 
});
basicMaterial.side = DoubleSide;

// .transparent : Boolean
// 定义此材质是否透明。这对渲染有影响，因为透明对象需要特殊处理，并在非透明对象之后渲染。
// 设置为true时，通过设置材质的opacity属性来控制材质透明的程度。
// 默认值为false。

// 添加平面 
const plane = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(1,1),
    basicMaterial
)


plane.position.set(3,0,0);
scene.add(plane);
```

## 透明材质与透明纹理
**案例** : main15
**主要代码示例:**
``` js
// alpha贴图是一张灰度纹理，用于控制整个表面的不透明度。（黑色：完全透明；白色：完全不透明）。 默认值为null。
const doorAplhaTexture = textureLoader.load("./textures/aplha.jpg") // 黑底白面照片

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// 材质 
const basicMaterial = new THREE.MeshBasicMaterial({
    color:'#ffff00',
    map:doorColorTexture ,
    alphaMap:doorAplhaTexture,
    transparent:true,
    // opacity:0.3 ,
    // side:DoubleSide // 渲染两面  默认渲染一面 
});
basicMaterial.side = DoubleSide;



```

## 详解BPR材质物理渲染 
- 网络材质与光照物理效果 
- 置换贴图与顶点细分设置 
- 设置粗糙度与粗糙度贴图 
- 法线贴图应用 
- 如何获取各种类型纹理贴图
**案例** : main16
**主要代码示例:**
``` js
// 导入纹理
const textureLoader = new THREE.TextureLoader()
const doorColorTexture = textureLoader.load("./textures/door/veiecgofw_4K_Albedo.jpg")

// console.log("@doorColorTexture",doorColorTexture);

// 透明材质与透明纹理 
// 如铁栅栏  
// alpha贴图是一张灰度纹理，用于控制整个表面的不透明度。（黑色：完全透明；白色：完全不透明）。 默认值为null。

// 黑底白面照片  环境遮挡贴图  遮住环境多余部分
const doorAplhaTexture = textureLoader.load("./textures/door/veiecgofw_4K_Opacity.jpg") 
//  AO贴图       环境遮挡贴图  
const doorAoTexture = textureLoader.load("./textures/door/veiecgofw_4K_AO.jpg")
// 导入置换贴图  高低凹凸
const doorHeightTexture = textureLoader.load("./textures/door/veiecgofw_4K_Displacement.jpg")
// 导入粗糙度贴图 
const roughnessTexture = textureLoader.load("./textures/door/veiecgofw_4K_Roughness.jpg")
// 导入金属贴图 （找的源图没有）metalness 
// const metalnessTexture = textureLoader.load("./textures/door/veiecgofw_4K_Roughness.jpg")
// 导入法线贴图 （光的朝向）
const normalTexture = textureLoader.load("./textures/door/veiecgofw_4K_Normal.jpg")



// PBR 基于物理渲染  以前的渲染是模仿灯光的外观   现在是在模仿光的实际行为  试图看起来更真实 
// PBR 的组成部分  灯光属性 : 直接/间接照明  直接/间接高光  阴影 环境光闭塞   表面属性 : 基础色 法线 高光 粗糙度 金属度(Metallic)
// 直接照明: 直接从光源发射阴影物体表面的光  间接照明: 环境光和直接光经过反弹第二次进入的光  (入射)
// 镜面光:在经过表面反射聚焦在同一个方向上进入人眼的高亮光  漫反射 : 光被散射并沿着各个方向离开表面 (反射光)

//  法线: 折射光线路径(与直接光呈一定角度(90)度射线)

// 六、总结
// 1.PBR是基于物理渲染的着色模型，PBR着色模型分为材质和灯光两个属性
// 2.材质部分由:甚础色、法线、高光、粗越度、金属度来定义材质表面属性的。
// 3.灯光部分是由:直接照明、间接照明、直接高光、间接高光、阴影、环境光闭塞来定义照明属性的.
// 4.通常我们写材质的时候只需要关注材质部分的属性即可，灯光属性都是引擎定义好的直接使用即可.
// 5.PBR渲染模型不但指的是PBR材质，还有灯光，两者缺一不可


// 添加几何体  后面三参数为细分 
const geometry = new THREE.BoxGeometry( 1, 1, 1 ,100,100,100 );
// 材质 MeshStandardMaterial标准材质
const StandardMaterial = new THREE.MeshStandardMaterial({
    // color:'#ffff00',
    map:doorColorTexture ,
    alphaMap:doorAplhaTexture,  // 环境zhe'd
    transparent:true,// 定义此材质是否透明。这对渲染有影响，因为透明对象需要特殊处理，并在非透明对象之后渲染。// 设置为true时，通过设置材质的opacity属性来控制材质透明的程度。
    // opacity:0.3 ,
    // side:DoubleSide // 渲染两面  默认渲染一面 
    aoMap:doorAoTexture,
    aoMapIntensity:1,
    displacementMap:doorHeightTexture,
    displacementScale:0.1,
    roughness:1, // 粗糙度
    roughnessMap:roughnessTexture,
    metalness:1,//金属度
    // metalnessMap: ...  // 
    normalMap:normalTexture
});
StandardMaterial.side = DoubleSide;

// console.log("@StandardMaterial",StandardMaterial);
const cube = new THREE.Mesh(geometry,StandardMaterial)
scene.add(cube);
// 给cube添加第二组uv
geometry.setAttribute(
    "uv2",
    new THREE.BufferAttribute(geometry.attributes.uv.array,2)
)
// ## 环境贴图纹理素材网 ： 
// - https://www.poliigon.com/
// - https://3dtextures.me/
// - https://www.arroway-textures.ch/products/
// - 
// - 软件 ： https://zhuanlan.zhihu.com/p/496534797  Quixel Bridge 如何免费使用 


```




## 环境贴图纹理素材网 ： 
- https://www.poliigon.com/
- https://3dtextures.me/
- https://www.arroway-textures.ch/products/
- 
- 软件 ： https://zhuanlan.zhihu.com/p/496534797  Quixel Bridge 如何免费使用 




## 纹理加载进度 

``` js
// 单张纹理图的加载进度 
const doorColorTexture = textureLoader.load("./textures/door/veiecgofw_4K_Albedo.jpg",
    ()=>{console.log("单张图片加载完成监听");},
    (pre)=>{console.log("加载过程中"+pre);},
    (onError)=>{console.log("加载错误"+onError) ;},
)

// 多张纹理图的加载进度 
let div = document.createElement("div")
div.style.position = 'fixed'
div.style.height = '200px'
div.style.width = '200px'
div.style.color = '#fff'
div.style.right = 0
div.style.top = 0

document.body.appendChild(div)
// 设置加载管理器 
const manager  = new THREE.LoadingManager();
manager.onStart = function ( url, itemsLoaded, itemsTotal ) {
	console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
};
manager.onLoad = function ( ) {
	console.log( 'Loading complete!');
};
manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
	console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
    let value = (itemsLoaded/itemsTotal *100).toFixed(2) + '%'
    console.log("进度",value);
    div.innerHTML = value
};
manager.onError = function ( url ) {
	console.log( 'There was an error loading ' + url );
};

//
const cubeTextureLoader = new THREE.CubeTextureLoader(manager) // 
```


## 环境贴图  经纬线贴图 与HDR 
**案例** : main17
**主要代码示例:** 
``` js
// 加载hdr图
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader"

const rgbeLoder = new RGBELoader();
rgbeLoder.loadAsync("textures/environment/202108049_4K.hdr").then((texture)=>{
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = texture ; 
    scene.environment = texture ;
})

// 设置cube纹理加载器
const cubeTextureLoader = new THREE.CubeTextureLoader()
.setPath( 'textures/environments/' )
	.load( [
		'px.jpg',
		'nx.jpg',
		'py.jpg',
		'ny.jpg',
		'pz.jpg',
		'nz.jpg'
	] );

console.log('@envMacubeTextureLoaderpTexture',cubeTextureLoader);

// 标准网格材质
const material = new THREE.MeshStandardMaterial({
    metalness:0.7,
    roughness:0.1,
    // envMap:cubeTextureLoader
})


// 给场景添加背景 
scene.background =  cubeTextureLoader
// 给所有的物体添加默认的环境贴图 
scene.environment = cubeTextureLoader

```

## 环 境贴图  灯光与阴影的关系和设置 设置阴影贴图模糊度 设置平行光投射相机的属性
**案例** : main18
**主要代码示例:** 
```js
// 灯光阴影 (必须满足以下所有)
// 1. 材质满足能够对光照有反应 
// 2. 设置渲染器开启阴影的计算 renderer.shadowMap.enabled = true
// 3. 设置光照投射阴影 directionalLight.castShadow = true ; 
// 4. 设置物体投射阴影 sphere.castShadow = true ;
// 5. 设置物体接受场景 plane.receiveShadow = true ;

// 球缓冲几何体
const sphereGeometry = new THREE.SphereGeometry( 1, 20, 20 ); 
// 标准网格材质
const material = new THREE.MeshStandardMaterial();
// 网格  表示基于以三角形为polygon mesh（多边形网格）的物体的类
const sphere = new THREE.Mesh(sphereGeometry,material)

//  投射阴影 
sphere.castShadow = true ;
scene.add(sphere)

// 创建平面 
const geometry = new THREE.PlaneGeometry( 10, 10 ); 
const plane =new THREE.Mesh(geometry,material)
// plane
plane.position.set(0,-1,0);
plane.rotation.x = -Math.PI /2
// 设置物体接受阴影 
plane.receiveShadow = true ;
scene.add(plane)


// 初始化渲染器
const renderer = new THREE.WebGLRenderer();
// 设置渲染的尺寸大小 
renderer.setSize(window.innerWidth, window.innerHeight) 
// 开启场景中的阴影贴图 
renderer.shadowMap.enabled = true;
// 直线光源 平行光
const directionalLight = new THREE.DirectionalLight(0xffffff,0.5)
directionalLight.position.set( 10 , 10 , 10 )
directionalLight.castShadow = true ; 
scene.add( directionalLight );

```

## 聚光灯各种属性及其运用  
**案例** : main19
**主要代码示例:** 

```js

// // 聚光灯 
const directionalLight = new THREE.SpotLight(0xffffff,0.5)
directionalLight.position.set( 5 , 5 , 5 )
directionalLight.castShadow = true ; 
scene.add( directionalLight );
directionalLight.target =sphere // 目标为球体时 球体移动 ,聚光灯跟着打光
directionalLight.angle = Math.PI / 6 ;
directionalLight.distance = 0 ;//如果非零，那么光强度将会从最大值当前灯光位置处按照距离线性衰减到0。 缺省值为 0.0
directionalLight.distance = 0 ;//从光源发出光的最大距离，其强度根据光源的距离线性衰减。
directionalLight.penumbra = 0 ;//聚光锥的半影衰减百分比。在0和1之间的值。默认为0
directionalLight.decay = 0 ;//沿着光照距离的衰减量

// 设置阴影贴图模糊度 (平行光/聚光灯)
directionalLight.shadow.radius = 20 ; 
// 设置阴影贴图分辨率 (平行光/聚光灯)
directionalLight.shadow.mapSize.set(4096,4096) // 默认 

import * as dat from "dat.gui";
const gui = new dat.GUI();
// 控制聚光灯聚光灯的最大范围
gui.add(directionalLight , "angle").min(0).max(Math.PI/2).step(0.1)
//  从光源发出光的最大距离，其强度根据光源的距离线性衰减
gui.add(directionalLight , "distance").min(0).max(150).step(0.1)
gui.add(directionalLight , "penumbra").min(0).max(1).step(0.1)
gui.add(directionalLight , "decay").min(0).max(105).step(0.1)
```