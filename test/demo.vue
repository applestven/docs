<template>
    <div class="container-seeHouse" ref="container-seeHouse">123</div>
</template>
  
<script>
import * as THREE from "three"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader" // hdr加载loader
export default{
  data(){
        return{
            camera: null,
            scene: null,
            renderer: null,
            mesh: null,
            controls:null,

        }
  },
  methods: {
      init: function () {
        // 初始化场景 
        this.scene = new THREE.Scene();
        // 初始化相机 
        this.camera = new THREE.PerspectiveCamera(75 , window.innerWidth / window.innerHeight , 0.1 ,1000 )
        // 设置相机位置 
        camera.position.z = 5;
        
        // 初始化渲染器
        this.renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth , window.innerHeight)

         // 一张全景图
        //  添加球
        const geometry = new THREE.SphereGeometry( 5, 32, 32 );
        const loader = new RGBELoader();
        loader.load("../public/assets/threejs/hdr/202108050_4K.hdr",(texture) =>{
          const material = new THREE.MeshMatcapMaterial({map:texture})
          const sphere = new THREE.Mesh(geometry , material);
          sphere.geometry.scale(1,1,-1)
          this.scene.add(sphere)
        })
          // //  六张图片拼全景图
          // // 添加立方体 
          // const geometry = new THREE.BoxGeometry(10, 10, 10) ;
          // // const material = new THREE.MeshBasicMaterial({ color : 0x00ff00 });
          
          // let boxMaterials = [];
          // let arr = ['px.jpg' ,'nx.jpg' ,'py.jpg' ,'ny.jpg' ,'pz.jpg' ,'nz.jpg'] 
          // arr.forEach((item)=>{
          //   // 纹理加载 
          //   let texture = new THREE.TextureLoader().load(`../public/assets/threejs/living/${item}`);
          //   // 创建材质
          //   boxMaterials.push(new THREE.MeshBasicMaterial({ map : texture}))
          // })
          
          // const cube = new THREE.Mesh(geometry , boxMaterials);
          // cube.geometry.scale(1,1,-1)
          // scene.add(cube)
        
        let container = this.$refs['container-seeHouse']
        container.appendChild(renderer.domElement);
        this.controls = new OrbitControls(this.camera ,container)
        this.controls.enableDamping = true ; // 阻尼惯性

      },
      animate: function () {
            requestAnimationFrame(this.animate)

            this.renderer.render(this.scene, this.camera)
        },
  },
  mounted(){
      // this.init()
      // this.animate()
      
  }  
}
</script>
  
<style lang="css">
  /* * {
    margin: 0;
    padding: 0;
  } */
  .container-seeHouse{
    height: 100vh;
    width: 100vw;
    background-color: #f0f0f0;
  }
  /* #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  } */
</style>
  