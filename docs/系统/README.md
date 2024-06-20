## window 打开自动运行 目录 命令 

``` bash
    shell:Common Startup
```

## window 给命令起别名 

在Windows命令行（CMD）中为命令创建别名，可以使用doskey命令或者创建一个批处理文件来持久化这些别名

1. 创建批处理文件 

``` bat 
    @echo off
    doskey p=pnpm $*
    doskey n=npm $*
```

2. 将批处理文件 放入到自动运行目录中 

