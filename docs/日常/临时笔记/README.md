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