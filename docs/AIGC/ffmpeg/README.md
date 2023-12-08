## ffmpeg 的命令  


## ffmpeg 提取音频 

<!-- 注意这两条命令可能音频文件可能为mp3 aac等不同格式 ，实际应用可能需要统一转mp3 -->

ffmpeg -i input_video.mp4 -vn -acodec copy output_audio.mp3


cuda ： 

ffmpeg -i 2小时.mp4 -vn -acodec copy -c:v h264_cuvid output.mp3 
