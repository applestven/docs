# CICD 

## 持续集成部署实践 

总过程 ： 

以下几个示例都为 可持续集成部署的例子 

## 静态网站持续集成托管到github 

过程  ： git-gitAction-dockerHub-gitpage 可部署静态网站 托管到github 

github demo地址 ： https://github.com/applestven/action-ReactDemo

[演示跳转](https://applestven.github.io/action-ReactDemo/)

[主要部署代码示例](https://github.com/applestven/action-ReactDemo/blob/main/.github/workflows/ci.yml)

```yaml
name: GitHub Actions Build and Deploy Demo
on:
  push:
    branches:
      - main
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@v2 # If you're using actions/checkout@v2 you must set persist-credentials to false in most cases for the deployment to work correctly.
      with:
        persist-credentials: false
    - name: Install and Build
      run: |
        npm install
        npm run build
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        personal_token: ${{ secrets.ACCESS_TOKEN }}
        publish_dir: ./build
```



## 静态网站持续集成部署到云服务器 

过程 ： git push- gitAction - dockerHub - 云服务器 

github demo地址 ： https://github.com/applestven/autoDeplyDemo/tree/demoforVite



主要部署代码地址展示 ： [deploy.yml](https://github.com/applestven/autoDeplyDemo/blob/demoforVite/.github/workflows/deploy.yml) ，需要放置在服务器上 ，[deploy.sh](https://github.com/applestven/autoDeplyDemo/blob/demoforVite/deploy.sh)

```yml
name: GitHub Actions Build and Deploy Demo
on:
  push:
    branches:
      - latest
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
        with:
          persist-credentials: false    
      - name: Install and Build
        run: |
          cd ./vite-Veu
          yarn install
          yarn build
          cd ../
      - name: Log in to Docker Hub #登陆docker
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          username: ${{ secrets.DOCKER_USERNAME }}  #docker的用户名
          password: ${{ secrets.DOCKER_PASSWORD }}	#docker的密码

      - name: Extract metadata (tags, labels) for Docker # 获取元数据包括tag和labels
        id: meta
        uses: docker/metadata-action@98669ae865ea3cffbcbaa878cf57c20bbf1c6c38
        with:
          images: applestven/vite-project

      - name: Build and push Docker image  #构建和发布 docker镜像
        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
        with:
          context: .
          push: true
          tags: ${{ steps.meta.outputs.tags }}  #上一步所拿到的tags，默认是分支名字
          labels: ${{ steps.meta.outputs.labels }} # 上一步所拿到的labels

      # - name: Build and push
      #   uses: docker/build-push-action@v2
      #   with:
      #     context: .
      #     # file: ./Dockerfile
      #     # 所需要的体系结构，可以在 Available platforms 步骤中获取所有的可用架构  但报错
      #     # platforms: linux/amd64,linux/arm64/v8
      #     # 镜像推送时间
      #     push: ${{ github.event_name != 'pull_request' }}
      #     # 给清单打上多个标签
      #     tags: ${{ steps.meta.outputs.tags }}
      - name: ssh docker login    # 登陆云服务器
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.TENCENT_CLOUD_IP }} #云服务器的ip
          username: ${{ secrets.TENCENT_CLOUD_NAME }} #云服务器的用户名
          password: ${{ secrets.TENCENT_CLOUD_PASSWORD }} #云服务器的密码
          script: cd ~ && sh deploy.sh ${{ secrets.DOCKER_USERNAME }} ${{ secrets.DOCKER_PASSWORD }} #运行脚本


```



deploy.sh    linux服务器执行脚本

```shell
## 放在linux服务器上的文件   applestven是dockerHub用户名  $1是需要填的密码
docker ps
echo -e "---------docker Login--------"
docker login --username=$1  --password=$2 # 这个是yml文件最后一行所传递的参数，你docker的用户名和密码
echo -e "---------docker Stop--------"
docker stop vite-project
echo -e "---------docker Rm--------"
docker rm vite-project
docker rmi applestven/applestven:latest
echo -e "---------docker Pull--------"
docker pull applestven/vite-project:latest 
echo -e "---------docker Create and Start--------"
docker run --rm -d -p 9000:80 --name vite-project applestven/vite-project:latest
echo -e "---------deploy Success--------"

# echo -e "---------docker Login--------"
# docker login --username=$1  --password=$2 # 这个是yml文件最后一行所传递的参数，你docker的用户名和密码
# echo -e "---------docker Stop--------"
# docker stop <你镜像的别名(在下面 会生成)>  # 注意修改
# echo -e "---------docker Rm--------"
# docker rm <你容器名字> 									 # 注意修改
# docker rmi <你镜像的名字>									# 注意修改
# echo -e "---------docker Pull--------"
# docker pull <docker服务器上镜像的名字>:<镜像的tag默认是github分支的名字>  		 # 注意修改
# echo -e "---------docker Create and Start--------"
# docker run --rm -d -p 80:80 --name <容器的名字> <docker服务器上镜像的名字>:<镜像的tag默认是github分支的名字> # 注意修改
# echo -e "---------deploy Success--------" 
```



## node后端持续集成部署到云服务器

demo地址 ：https://github.com/applestven/autoDeplyDemo/tree/demoforNode

主要部署代码地址展示 ： [deploy.yml](https://github.com/applestven/autoDeplyDemo/blob/demoforNode/.github/workflows/deploy.yml) ，需要放置在服务器上 ，**[demoforNode.sh](https://github.com/applestven/autoDeplyDemo/blob/demoforNode/demoforNode.sh)**



```yaml
name: node-ci

on:
  push:
    branches:
      - 'demoforNode'

jobs:
  docker:
    runs-on: ubuntu-latest
    steps:
      -
        name: Set up QEMU
        uses: docker/setup-qemu-action@v1
      -
        name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v1
      -
        name: Login to DockerHub
        uses: docker/login-action@v1 
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
      -
        name: Build and push
        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
        with:
          # context: ../
          file: ./koa/Dockerfile
          push: true
          tags: applestven/nodejstest:latest
      - 
        name: executing remote ssh commands using password
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.TENCENT_CLOUD_IP }}
          username: ${{ secrets.TENCENT_CLOUD_NAME }}
          password: ${{ secrets.TENCENT_CLOUD_PASSWORD }}
          # port: ${{ secrets.TENCENT_CLOUD_PASSWORD  }}
          script: cd  /home/ubuntu && sh demoforNode.sh ${{ secrets.DOCKER_USERNAME }} ${{ secrets.DOCKER_PASSWORD }} #运行脚本

```



demoforNode.sh    linux服务器执行脚本

```sh
docker stop nodejstest
docker rm nodejstest
docker pull applestven/nodejstest:latest
# docker run -d -p 8282:3000 --name nodejstest applestven/nodejstest:latest sh -c "npm i && pm2 start /service/koa/src/main.js --no-daemon"
docker run -d -p 8282:3000 --name nodejstest applestven/nodejstest:latest
```



## 前后端托管项目

demo地址 ：[ https://github.com/applestven/autoDeplyDemo](https://github.com/applestven/autoDeplyDemo/tree/viteAndNode)