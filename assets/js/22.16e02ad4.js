(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{535:function(e,t,a){"use strict";a.r(t);var s=a(38),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"whisper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#whisper"}},[e._v("#")]),e._v(" whisper")]),e._v(" "),a("p",[e._v("whisper temp.mp4 --model medium --language Chinese --device cuda")]),e._v(" "),a("p",[e._v("--task")]),e._v(" "),a("p",[e._v("指定转录方式，默认使用 --task transcribe 转录模式，--task translate 则为翻译模式，目前只支持英文。")]),e._v(" "),a("p",[e._v("--model")]),e._v(" "),a("p",[e._v("指定使用模型，默认使用 --model small，Whisper 还有英文专用模型，就是在名称后加上 .en，这样速度更快。")]),e._v(" "),a("p",[e._v("--language")]),e._v(" "),a("p",[e._v("指定转录语言，默认会截取 30 秒来判断语种，但最好指定为某种语言，比如指定中文是 --language Chinese。")]),e._v(" "),a("p",[e._v("--device")]),e._v(" "),a("p",[e._v("指定硬件加速，默认使用 auto 自动选择，--device cuda 则为显卡，cpu 就是 CPU， mps 为苹果 M1 芯片。")]),e._v(" "),a("h2",{attrs:{id:"翻译工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#翻译工具"}},[e._v("#")]),e._v(" 翻译工具")]),e._v(" "),a("p",[e._v("或者，你也可以选择更专业的字幕工具，比如 Subtitle Edit。")]),e._v(" "),a("p",[e._v("地址：https://github.com/SubtitleEdit/subtitleedit")]),e._v(" "),a("h2",{attrs:{id:"口播神器-基于edge-微软tts-text-to-speech-文字转语音免费开源库edge-tts实践-python3-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#口播神器-基于edge-微软tts-text-to-speech-文字转语音免费开源库edge-tts实践-python3-10"}},[e._v("#")]),e._v(" 口播神器,基于Edge,微软TTS(text-to-speech)文字转语音免费开源库edge-tts实践(Python3.10)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("pip3 install edge-tts\n")])])]),a("p",[e._v("该命令可以将Edge浏览器中，内置的语言角色列表列出来："),a("br"),e._v("\nedge-tts --list-voices")]),e._v(" "),a("p",[e._v("几乎支持所有主流的通用语，Gender字段为合成语音的性别，Male代表男性，Female代表女性，zh开头的就是中文语音角色，这里以微软的小伊为例子：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('edge-tts --voice zh-CN-XiaoyiNeural --text "你好啊，我是智能语音助手" --write-media hello_in_cn.mp3\n')])])]),a("p",[e._v('可以调整合成语音的语速\nedge-tts --rate=-50% --voice zh-CN-XiaoyiNeural --text "你好啊，我是智能语音助手" --write-media hello_in_cn.mp3')]),e._v(" "),a("p",[e._v('可以调整合成语音的音量\nedge-tts --volume=+50% --voice zh-CN-XiaoyiNeural --text "你好啊，我是智能语音助手" --write-media hello_in_cn.mp3')]),e._v(" "),a("p",[e._v("遗憾的是，和微软Azure官方的语音合成库相比，开源的语音合成库并不支持基于标记语言 (SSML)的语音调优，比如语调、情绪的调整，但这毕竟是免费的，要求也不能太高了。")]),e._v(" "),a("p",[e._v("开源语音合成edge-tts库可以提高语音合成效率，并且极大地降低了语音合成门槛，为自动化视频剪辑铺平了道路，未来结合基于Stable-Diffusion算法的AI绘图框架，人工智能AI一键式绘制、配音、上字幕的一条龙服务指日可待。")])])}),[],!1,null,null,null);t.default=i.exports}}]);