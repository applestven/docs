## spleeter  人声分离  

https://github.com/deezer/spleeter

https://www.u72.net/code/show-148602.html#3_74 参考文档(安装前的需求)
ffmpeg && python3.9
1. 
pip install spleeter 



2. 运行后发现正常生成人音频 ，但是分离出来的人声没有分离需要下载分离模型

spleeter separate -p spleeter:2stems -o [导出路径] [待分离音频]

    spleeter separate -p spleeter:2stems -o "H:\study\gitee\about-al\testData" "H:\study\gitee\about-al\testData\vioce1.mp3"

"-p spleeter:2stems" 表示将音频分离成两个音轨，其中一个是歌声，另一个是伴奏

 "4stems" 表示将音频分离成四个音轨，可以分别表示歌声、伴奏、鼓和其他乐器

3. 下载预训练模型
<!-- spleeter separate -i "H:\study\gitee\about-al\testData\vioce1.wav" -p spleeter:2stems -o "H:\study\gitee\about-al\testData" -->
https://github.com/deezer/spleeter/releases/tag/v1.4.0  

将下载的模型 解压 放入 上面命令执行生成的pretrained_models 目录中  再次执行即可  