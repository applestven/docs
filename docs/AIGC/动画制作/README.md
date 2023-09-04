# 参考 https://www.bilibili.com/video/BV1uX4y1H7U3/?spm_id_from=333.337.search-card.all.click&vd_source=0c88b82560db687e3ba0427782c655e3 

## 1. 安装ffmpeg

## 2. 安装 ebsynth.com 
 下载解压 不需要额外操作 

## 3. sd安装 ebsynth.com 插件  

列表查询   直接下包都可以 

仓库链接 https://github.com/s9roll7/ebsynth_utility

## 4.电脑安装transparent-background  提取蒙版有大用处

pip install transparent-background 


## 开始生成动画

1. 使用ebsynth 拆帧&蒙版 

stage 1 
transparent-background 

transparent-background option 0.05 

2. 抽关键帧  默认参数 ，如果画面闪烁严重 ，可适当调节这个几个参数

3. 关键帧重绘制， 
   到第二步生成的种子文件的根目录，取一帧 图生图 到你满意为止 ， 也可以loRA 或ControlNet 的 
   再下面找到关键帧ebsynth扩展  


在这里难住了 ， 图生图不会  ，clip总爆显存 装不了 





