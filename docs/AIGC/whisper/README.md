## whisper 



 whisper temp.mp4 --model medium --language Chinese --device cuda


--task

指定转录方式，默认使用 --task transcribe 转录模式，--task translate 则为翻译模式，目前只支持英文。

--model

指定使用模型，默认使用 --model small，Whisper 还有英文专用模型，就是在名称后加上 .en，这样速度更快。

--language

指定转录语言，默认会截取 30 秒来判断语种，但最好指定为某种语言，比如指定中文是 --language Chinese。

--device

指定硬件加速，默认使用 auto 自动选择，--device cuda 则为显卡，cpu 就是 CPU， mps 为苹果 M1 芯片。 


## 翻译工具 

或者，你也可以选择更专业的字幕工具，比如 Subtitle Edit。

地址：https://github.com/SubtitleEdit/subtitleedit

## whisper 的安装 ： 

https://www.jianshu.com/p/3f7abe0de65f

