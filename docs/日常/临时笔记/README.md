## 临时笔记 


## 【Markdown编辑器快捷键】汇总  
    https://blog.csdn.net/CRW__DREAM/article/details/123085465
## H5  保存图片到本地

        console.log("H5内");
		var abtn = document.createElement('a');
		abtn.href = "http://h5.shangou.store/static/icon/home/%E9%97%AA%E8%B4%AD%E5%A4%A7%E6%A8%A1%E5%9E%8B-%E5%B7%B2%E9%80%89%E4%B8%AD@2x.png";
		abtn.download = '';
		abtn.target = '_blank';
		abtn.click();
	    
## 内外穿透 

https://dashboard.cpolar.com/get-started

## 学习git 

https://learngitbranching.js.org/?locale=zh_CN

## 效率工具尝试  

devdocs    文档查询


collect UI   设计灵感

fontSpark   字体选择

CSSeffectsSnippets收录了大约20多种cSS动画

CSS Tricks  css开发博客技巧


cssreference.IO  如果需要更新CSS知识或者查询不熟悉S不常用的属性


https://www.zhihu.com/question/618451816/answer/3203738230?utm_psn=1784494945379422208  按键效率工具   

剪切板的使用

https://zhuanlan.zhihu.com/p/673019468?utm_psn=1784499271741087744
31K star! Screenshot to Code:将截图翻译
成代码的黑科技!

【（有声重制）群晖搭建免费chatGPT4教程（利用GitHub copilot）基于docker-哔哩哔哩】 https://b23.tv/c69T988

## github host设置 加速访问

https://gitee.com/klmahuaw/GitHub520


## 需要写一个判断读取本地配置的脚本 并判断是否有显卡 

## 打包tts的推荐项目 

Mozilla TTS

https://www.zhihu.com/search?type=content&q=Mozilla%20TTS

## 打包OCR 
将OCR功能集成到Electron应用程序中涉及到选择合适的OCR库或API，并确保它能够与Electron框架良好集成。以下是一些推荐的OCR项目，可以考虑它们是否适合你的需求：

Tesseract OCR:

描述: Tesseract是一个开源的OCR引擎，由Google开发和维护，支持多种操作系统。
集成: 可以通过Node.js的node-tesseract模块或直接调用Tesseract的命令行工具来集成。
优势: 准确率高，支持多种语言，活跃的社区支持。
GitHub: Tesseract OCR
OCR Space API:

描述: OCR Space提供了一个简单易用的OCR API，支持多种语言和格式的图像。
集成: 可以通过HTTP请求调用OCR Space API来实现OCR功能。
优势: 不需要本地安装OCR引擎，简化了集成和部署。
官网: OCR Space API
OpenCV:

描述: OpenCV是一个强大的计算机视觉库，其中包含一些基本的OCR功能。
集成: 可以使用OpenCV来进行图像处理和文字识别。
优势: 功能丰富，可以集成其他计算机视觉功能，如图像处理和分析。
GitHub: OpenCV
Microsoft Azure Cognitive Services:

描述: Azure提供了丰富的认知服务，包括视觉识别（OCR）、人脸识别等。
集成: 可以通过Azure的REST API调用来使用其OCR服务。
优势: 可靠的云服务，提供了高级别的OCR功能和安全性保障。
官网: Azure Cognitive Services
ABBYY FineReader Engine:

描述: ABBYY提供了一流的OCR技术，支持多语言和高精度的文本识别。
集成: 提供了适用于不同平台和语言的SDK，包括Node.js和Electron。
优势: 高精度的OCR引擎，适合需要处理复杂文档和格式的应用。
官网: ABBYY FineReader Engine
选择合适的OCR解决方案取决于你的具体需求，包括识别精度、多语言支持、集成难度以及成本考虑。以上推荐的项目都是在OCR领域具有广泛应用和良好社区支持的选择，希望能帮助到你找到合适的解决方案。

## npm 包更新的问题  包括单个包更新 各包之间的冲突问题 等 

## art-log  打印 Array[string]


## google插件的开发 

1. 长期学习 
收藏夹-浏览器插件开发 有关于audio录音

https://github.com/arblast/Chrome-Audio-Capturer

https://github.com/sxei/chrome-plugin-demo

https://18055975947.github.io/extension/api/index.html

2. Audio录音的开发

https://chromewebstore.google.com/detail/%E5%8D%B3%E6%97%B6%E9%9F%B3%E9%A2%91%E5%BD%95%E5%88%B6%E5%99%A8-%E6%8D%95%E8%8E%B7%E5%B1%8F%E5%B9%95%E9%9F%B3%E9%A2%91/gilmhnfniipoefkgfaoociaehdcmdcgk?utm_source=chrome-app-launcher-info-dialog

操作流程：
1）安装插件，打开某个直播间（理论上支持所有平台直播间）
2）点击打开插件，选择按tab录制音频
3）停止录制，保存音频为mp3格式

参考代码（上面插件没有开源）：https://github.com/killergerbah/chrome-audio-recorder




开发入门 

https://blog.csdn.net/qq_37860930/article/details/135130830 

开发进阶

https://blog.csdn.net/qimablue/article/details/131304835

