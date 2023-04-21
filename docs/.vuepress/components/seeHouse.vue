<template lang="">
  <div class="container-seeHouse" ref="container-seeHouse">
  </div>
</template>
<script>
// threejs\example\node_modules\three\examples\jsm\controls\OrbitControls.js
import * as THREE from "three"
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader" // hdr加载loader
// import hdrImg from "../public/assets/threejs/hdr/202108046_4K.hdr"
export default {
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      controls: null,
    }
  },
  methods: {
    init: function () {
      // 初始化场景 
      this.scene = new THREE.Scene();
      // 初始化相机 
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      // 设置相机位置 
      this.camera.position.z = 5;

      // 初始化渲染器
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight)

      // 一张全景图
      //  添加球
      const geometry = new THREE.SphereGeometry(5, 32, 32);
      const loader = new RGBELoader();
      loader.load('/assets/threejs/hdr/202108050_4K.hdr', (texture) => {
        const material = new THREE.MeshMatcapMaterial({ map: texture })
        const sphere = new THREE.Mesh(geometry, material);
        sphere.geometry.scale(1, 1, -1)
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
      container.appendChild(this.renderer.domElement);
      this.controls = new OrbitControls(this.camera, container)
      this.controls.enableDamping = true; // 阻尼惯性

    },
    animate: function () {
      requestAnimationFrame(this.animate)

      this.renderer.render(this.scene, this.camera)
    },
  },
  mounted(){
      this.init()
      this.animate()
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
  }  
}
</script>
<style lang="">
  
</style>