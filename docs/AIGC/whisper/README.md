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


## 口播神器,基于Edge,微软TTS(text-to-speech)文字转语音免费开源库edge-tts实践(Python3.10) 

    pip3 install edge-tts


该命令可以将Edge浏览器中，内置的语言角色列表列出来：   
    edge-tts --list-voices 

几乎支持所有主流的通用语，Gender字段为合成语音的性别，Male代表男性，Female代表女性，zh开头的就是中文语音角色，这里以微软的小伊为例子：

    edge-tts --voice zh-CN-XiaoyiNeural --text "你好啊，我是智能语音助手" --write-media hello_in_cn.mp3


可以调整合成语音的语速 
    edge-tts --rate=-50% --voice zh-CN-XiaoyiNeural --text "你好啊，我是智能语音助手" --write-media hello_in_cn.mp3

可以调整合成语音的音量 
    edge-tts --volume=+50% --voice zh-CN-XiaoyiNeural --text "你好啊，我是智能语音助手" --write-media hello_in_cn.mp3

遗憾的是，和微软Azure官方的语音合成库相比，开源的语音合成库并不支持基于标记语言 (SSML)的语音调优，比如语调、情绪的调整，但这毕竟是免费的，要求也不能太高了。

开源语音合成edge-tts库可以提高语音合成效率，并且极大地降低了语音合成门槛，为自动化视频剪辑铺平了道路，未来结合基于Stable-Diffusion算法的AI绘图框架，人工智能AI一键式绘制、配音、上字幕的一条龙服务指日可待。