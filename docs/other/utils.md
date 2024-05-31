## 收集一些项目常用的模块 方便书写工具类 

### carry-video-gitee  


#### 打开指定文件夹 
``` js
const { shell } = require('electron')

  openDir: (path)=>{
    shell.openPath(path)
  },
  
```