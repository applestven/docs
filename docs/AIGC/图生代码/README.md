## Screenshot to Code

本地安装参考 ： https://zhuanlan.zhihu.com/p/678493760 


1. 克隆代码

    git clone https://github.com/abi/screenshot-to-code.git

2. 环境准备 
**主要是python >= 3.10 node >= 18**

    Node: v18.12.1
    npm: 8.19.2
    Python: 3.11.5
    Yarn: 1.22.19

3. 安装依赖 

``` bash
git clone https://github.com/abi/screenshot-to-code
# 进入软件目录
cd screenshot-to-code
# 进入后台目录
cd backend
# GPT4 的API key
echo "OPENAI_API_KEY=sk-your-key" > .env
# 安装Poetry 依赖包管理器
pip install poetry
# 安装依赖包
poetry install
# 激活命令行
poetry shell
# 运行程序
poetry run uvicorn main:app --reload --port 7000

```

4. 运行前台程序：后台运行好之后，再打开另外一个命令行，来运行前端程序 

**这里注意必须yarn  npm会报错**

``` bash

# 同样的进入软件目录
cd screenshot-to-code
# 进入前台目录
cd frontend
# 安装前台依赖包
yarn
yarn dev
```


### 安装完成的日常使用 
**需要梯子**

- 后台
``` bash
cd backend
    poetry run uvicorn main:app --reload --port 7001
```   

- 前台
``` bash
cd frontend
    yarn dev
```      

