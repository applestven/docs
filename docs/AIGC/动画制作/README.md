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



## 模型 

AbyssOrangeMix  深渊菊  二次元风格 



1. 模型存放目录 ：stable-diffusion-webui\models\Stable-diffusion
2. 生图保存地址：stable-diffusion-webui\outputs

## 提示词 （prompt）

![1694014829631](C:\Users\applestven\AppData\Roaming\Typora\typora-user-images\1694014829631.png)

## 词权重

()可以给提示词增加权重，一层就是1.1倍 ，可以套多层

（white flower:1.5） 给白花1.5倍的权重

{}1.05倍  

[] 0.9倍

1.5 几乎是最佳  ， 但赋值权重超2  画面就扭曲了 ，这种时候一般需要转换思路 ，去增加同类词 ，或者其他词条添加效果

## 采样迭代步数（去噪） 

理论上步数越高画面越来越清晰  ，但实际上 大于20步 ，画面的提升不大  30-40 就很清晰了

 ，需要更多的算力 ，最低不要低于10

##  采样方法

去噪不同的算法 ， 每个模型一般都有推荐的算法 ， 如果没有 一般使用带+ 的算法 ，会更稳定  ，比如深渊橘推荐DPM++  照做就好 

## 宽高

一般设置1000-1500会更加清晰  默认500图片再好都会糊一些 ，  受显卡显存的影响 ,一般3070 在1500左右就会爆显存  

分辨率太大 也会出现多人多手的情况  。 模型训练的模型图一般都比较小  设置得太大 al会以为你是两张图拼接而成的 。一般出现这样的情况 ，我们会采用低分辨率先绘制 再靠这个高清修复（hires Fix）来放大 ，本质上是进行了一次额外的图生图 。

## 面部修复 

一般都会勾选上 ，它会采用一些对抗算法识别人物面部并进行修复

平铺是用来生成那种可以无缝贴满整个屏幕的纹理性图片的 ，如果没有需要 千万别勾 ，也是一个会让你画面变得奇怪的东西 ，

## 提示词相关性 

一般和词权重一样 ， 不会设置太高   7-12 是安全的数值   太高容易变形

## 随机种子

可以用来控制画面内容一致性的重要参数 

## 生成批次   每批数量 

  生成批次   生成多少次   提高抽卡次数 ，让显卡打工 ，不用一张一张点 

每批数量：可以让你每次批次绘制的图像数量更多    一般不调 ，容易爆显存 

## 提示词应该怎么写 ？ 

1. 翻译  

   2. 借助工具   

      网站 ： [AI词汇加速器 AcceleratorI Prompt (dawnmark.cn)](https://ai.dawnmark.cn/)

      3. 抄作业 第一  模型库找    第二  [新建标签页 (openart.ai)](https://openart.ai/)     [Arthub.ai: Discover, Upload and Share AI Generated Art](https://arthub.ai/)

         

         

