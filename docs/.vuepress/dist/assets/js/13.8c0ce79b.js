(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{524:function(e,n,i){"use strict";i.r(n);var t=i(444),r=i(509),s=i(508),a={data:function(){return{camera:null,scene:null,renderer:null,mesh:null,controls:null}},methods:{init:function(){var e=this;this.scene=new t.n,this.camera=new t.k(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=5,this.renderer=new t.v,this.renderer.setSize(window.innerWidth,window.innerHeight);var n=new t.p(5,32,32);(new s.a).load("/assets/threejs/hdr/202108050_4K.hdr",(function(i){var r=new t.j({map:i}),s=new t.i(n,r);s.geometry.scale(1,1,-1),e.scene.add(s)}));var i=this.$refs["container-seeHouse"];i.appendChild(this.renderer.domElement),this.controls=new r.a(this.camera,i),this.controls.enableDamping=!0},animate:function(){requestAnimationFrame(this.animate),this.renderer.render(this.scene,this.camera)}},mounted:function(){var e=this;this.init(),this.animate(),window.addEventListener("resize",(function(){e.camera.aspect=window.innerWidth/window.innerHeight,e.camera.updateProjectionMatrix(),e.renderer.setSize(window.innerWidth,window.innerHeight),e.renderer.setPixelRatio(window.devicePixelRatio)}))}},o=i(38),d=Object(o.a)(a,(function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"container-seeHouse",staticClass:"container-seeHouse"})}),[],!1,null,null,null);n.default=d.exports}}]);