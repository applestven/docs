<template lang="">
    <div class="containers" ref="containers" >
      <div class="direction">
        <projectDirectory></projectDirectory>
      </div>
      
    </div>
</template>
<script>

import * as THREE from "three"
import loginBg from "../public/assets/bg/login-bg-zip2.jpg"
import DeeoLoginBg from "../public/assets/bg/login-bg_depth.jpg"

export default {
    data(){
        return{
            camera: null,
            scene: null,
            renderer: null,
            mesh: null,
            mouse:{
                x:0,
                y:0
            }
        }
    },
    methods: {
        clickTo(){
            let url = window.location.href+'home.html'
            window.location.href=url
           
        },
        animate: function () {
            requestAnimationFrame(this.animate)
            this.material.uniforms.uMouse.value = this.mouse ; // 图深随鼠标移动
            this.material.uniforms.uTime.value = performance.now() /1000 ; // 图打开到多少秒的一个时间 
            this.renderer.render(this.scene, this.camera)
        },
        init: function () {
            let container = this.$refs['containers']
            this.camera = new THREE.PerspectiveCamera(90, container.clientWidth / container.clientHeight, 0.01, 1000)
            this.camera.position.z = 4.9
            // 创建场景
            this.scene = new THREE.Scene()
            // 创建平面 
            let geometry =  new THREE.PlaneGeometry( 19.2, 12.8);
              // 加载纹理
            const textureLoader = new THREE.TextureLoader().load(loginBg);
            const depthTextureLoader  = new THREE.TextureLoader().load(DeeoLoginBg);
            // const textureLoader = new THREE.TextureLoader().load('http://43.139.236.50/login-bg.png');
            // const depthTextureLoader  = new THREE.TextureLoader().load('http://43.139.236.50/login-bg_depth.jpg');
            // 鼠标坐标 
            this.mouse = new THREE.Vector2()
            
            // 材质
            // let material = new THREE.MeshBasicMaterial({map : textureLoader}) 
            // 使用着色器材质 
            this.material = new THREE.ShaderMaterial({
                uniforms:{
                    uTime : {value : 0 },
                    uTexture : {value :textureLoader},
                    uDepthTexture:{value : depthTextureLoader},
                    uMouse:{value : this.mouse}
                },
                // 顶点着色器 模型的顶点数据如何映射到屏幕上
                vertexShader: ` 
                    varying vec2 vUv;
                    void main()
                    {
                        vUv = uv;
                        gl_Position = projectionMatrix  * modelViewMatrix * vec4(position, 1.0);
                    }
                `,
                // 片源着色器  怎么去渲染每一个像素  vUv 为顶点坐标
                // vec4 color  = texture2D(uTexture , vUv); 采集坐标颜色
                fragmentShader: `
                    uniform sampler2D uTexture;
                    uniform sampler2D uDepthTexture;
                    uniform vec2 uMouse;
                    varying vec2 vUv;
                    uniform float uTime;
                    void main()
                    {
                        vec4 color = texture2D(uTexture , vUv);
                        vec4 depath = texture2D(uDepthTexture , vUv);
                        float depthValue = depath.r;
                        float x = vUv.x + (uMouse.x + sin(uTime))  * 0.02 * depthValue;
                        float y = vUv.y + (uMouse.y + cos(uTime)) * 0.02 * depthValue;
                        vec4 newColor = texture2D(uTexture ,vec2(x,y) );
                        gl_FragColor = newColor;
                    }
                `
            })

            this.mesh = new THREE.Mesh(geometry, this.material)
            this.scene.add(this.mesh)
             // // 渲染器 antialias - 是否执行抗锯齿。默认为false.
            this.renderer = new THREE.WebGLRenderer({antialias: true})
            this.renderer.setSize(container.clientWidth, container.clientHeight)
            container.appendChild(this.renderer.domElement)
         },
    },
    mounted() {
        this.init()
        this.animate()
        window.addEventListener("mousemove",(event)=>{
            // 取一个 1 到 -1 的值
            this.mouse.x = (event.clientX / window.innerWidth ) * 2 - 1 ; 
            this.mouse.y = -(event.clientY / window.innerHeight ) * 2 - 1 ; 
        })
        window.addEventListener('resize',()=>{
        // 更新摄像头  
        this.camera.aspect = window.innerWidth/window.innerHeight
          // 更新摄像机的投影矩阵 
        this.camera.updateProjectionMatrix();
        // 更新渲染器 
        this.renderer.setSize(window.innerWidth,window.innerHeight) ; 
        // 设置渲染器的像素比 
        this.renderer.setPixelRatio(window.devicePixelRatio)
      })
    },
}
</script>
<style lang="css">
    .containers{
        height: 100vh;
        width: 100vw;
        /* background:url("../public/assets/bg/login-bg.png") */
        /* background-color: aqua; */
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    canvas{
        width: 100vw;
        height: 100vh;
        display: block;
        position: fixed;
        top:0;
        left:0
    }
    .direction{
        position: fixed;
        height: 100%;
        width: 100%;
        color: white;
        margin:0 auto;
        left: 50%;
        top:0;
        transform: translateX(-50%);
        z-index: 100;
        text-align: center;
    }
</style>