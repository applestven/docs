## docker 获取镜像 image 的两种方式 

```bash

1. registry   

ps:（换源）

 sudo tee /etc/docker/daemon.json   

{
"registry-mirrors": ["https://yxzrazem.mirror.aliyuncs.com"]
}
 复制黏贴如下  然后回车换行  再输入 :wq   ctrl+C 退出  



```

## 开机报错 



Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?


service docker restart   解决


## docker 常用命令 

```bash



1.  docker history 13b66b487594[ IMAGE ID] 查看镜像历史丛操作
2. 查看所有容器（包括退出的） docker container ls -a
查看正在运行的容器 docker container ls
3. 进入container容器    docker run -it ubuntu

4. docker container stop 3f55ff4befe1[CONTAINER ID] 停止容器
5. docker comtainer rm  82c24063e6e1 [id 可以不写全 ，82也可] 删除容器
简便写法以及扩展
 docker comtainer rm  82
 docker rm 82 （默认删除容器）
  docker rm -f 82 （强制删除容器）  
docker rmi 33（删除镜像）

docker container ls -aq（打印所有容器id）
docker rm $(docker container ls -aq) （删除所有的容器）

docker container ls -f "status=exited" （列出已经退出的容器）
docker container ls -f "status=exited" -q （列出已经退出的ID）  
docker rm $( docker container ls -f "status=exited" -q ) （删除已经推退出的容器）

6. 构建一个自己的容器
6.1  基于一个以及存在的container 创建image
docker commit wizardly_swirles[NAMES]  wizardly_swirles/applestven
docker commit 容器名  重新命名 
此时就构建了自己的镜像 
但是这种创建镜像（docker image）并不推荐 ，因为别人拿到我们的镜像 image ，不知道怎么产生的 ，也可能有不安全的东西放入这里面 ，然后发布出去 

6.2  dockerfile 通过dockerbuild 创建image镜像 
- mkdir docker-centos-vim (创建文件夹)
cd  docker-centos-vim
- vim Dockerfile （创建/编辑文件Dockerfile）

FROM centos
RUN cd /etc/yum.repos.d/
RUN sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-*;sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.re
pos.d/CentOS-*
RUN yum makecache
RUN yum update -y
RUN yum -y install vim

- docker build -t  applestven/centos-vim-new .  (.执行Dockerfile)

7.Dockerfile 语法梳理及实践

7.1 制作base image  

  FROM centos 

7.2 Metadata信息    不可少！ （类似注释）
  LABEL maintainer=“applestven@gmail.com” 
  LABEL version = "1.0" 
  LABEL description ="THis is description"

7.3 RUN 运行
  RUN yum update && yum install -y vim \
python-dev #反斜杠换行
  RUN apt-get update && apt-get install -y perl \
pwgen --no-install-recommends && rm -rf \ 
/var/lib/apt/lists/*  #注意清理cache
  RUN /bin/bash -c'source $HOME/.bashrc;echo$HOME'
注意 ： 为了美观 ，复杂的RUN 请用反斜线换行 ！ 
避免无用分层 ，合并多条命令成一行

7.4 WORKDIR /root  当前工作目录 
  WORKDIR  /root
  WORKDOR /test  #如果没有会自动创建test目录
  WORKDIR demo 
  RUN pwd  ​          # 输出结果应该是 /text/demo
​注意 ： 用WORKDIR ，不要使用RUN cd 尽量使用绝对目录

7.5 ADD and COPY 

ADD hello /   # 添加hello 到根目录
ADD test.tar.gz / # 添加到根目录并解压 

WORKDIR /root  
ADD hello test/    ## 此时  #/root/test/hello

WORKDIR /root
COPY hello test/

注意 ： 大部分情况 ，COPY 优于 ADD ！ 
ADD 除了COPY 还有额外功能 （解压 ）！
添加远程文件/目录请使用curl或者 wget ！ 

7.6 ENV  环境
ENV MYSQL_VERSION 5.6   # 设置常量 
RUN apt-get install -y mysql-server = '${MYSQL_VERSION}' \
&& rm -rf /var/lib/apt/list/*  # 引用常量 

注意 ： 尽量使用ENV增加可维护性！

7.7 VOLUME and EXPOSE  (存储和网络 )

7.8 CMD and ENTRYPOINT    
RUN vs CMD vs ENTRYPOINT  ( entrypoint )
  RUN :执行命令并创建 新的Image Layer 
  CMD : 设置容器启动后默认执行的命令和参数 （多条只执行最后一条 ，多条会被覆盖）
   ENTRYPOINT ： 设置容器启动时运行的命令   （一定会执行）  

## 镜像的发布 
``` bash 
##  docker push 

docker push [OPTIONS] NAME[:TAG]
docker push applestven/centos-vim-new:latest

##  与github建立联系 便于查看Dockerfile  create Automated Build  
 dockerhub 收费才能链接GitHub构建了 （弃）
##  创建私有registry    创建一个私人 或团队私有的dockerHub 

1.在dockerHub上搜索 registry   翻 文档 找到    
2.在目标服务器上使用 创建私有registry   实际container ：   
docker run -d -p 5000:5000 --restart always --name registry registry:2
可能会很慢 ，或者拉取registry不成功  ， 可以换源 加代理 可快速解决这个问题

3. 在“客户端 ” telent 192.168.0.188 :5000 测试端口是否开放使用 
（nas上开放端口有问题放弃）
4. 使用Dockerfile  重新build(先删除先前使用同一Dockerfile创建的image) ： 
docker build -t 192.168.0.188:5000/centos-vim .
5. 使用docker push  192.168.0.188:5000/centos-vim  
5.1  直接push 会报错   192.168.0.188:5000地址不安全 ，需要修改
修改/添加    
在 /etc/docker/daemon.json 中 ，
 { "insecure-registries":["192.168.0.188:5000"]}   
 
在 sudo vim /lib/systemd/system/docker.service
加一行 ： （在ExecStart=/usr/bin/dockerd下）
EnvironmentFile=-/etc/docker/daemon.json (加载会读取这个文件)

最后，
sudo service docker restart 

 重启push  就会push到我们的私有dockerHub里面   

没有web界面  ，如果需要验证是否搭建成功访问 :

 192.168.0.188:5000/v2/_catalog  
 
```
## dockerfile 实战 
``` bash
## DockerFile 
FROM python:2.7
LABEL maintainer="stven Wen<applestven@gmail.com>"
RUN pip install flask
COPY app.py /app/
WORKDIR /app
EXPOSE 5000
CMD ["python" , "app.py"]
```
## app.py
from flask import Flask
app = Flask(__name__)
@app.route("/")
def hello():
return "hello docker"
if__name__ == '__main__':
app.run()

总结 ： 如何调试Dockerfile   ？   docker build  运行会一层一层执行 ，可以看到在哪一层执行错误 ， 并且每一层都会生成零时镜像 ，可在出错误的前一层   执行镜像 ，进入容器中调试下一层命令 。 

## container 容器的操作 
先运行一个容器   * -it  交互式运行  

 docker exec -it [容器id]  /bin/bash  进入容器根目录  

docker exec -it [容器id]  python   进入运行容器，执行python 

docker exec -it [容器id] ip a  打印运行容器ip地址 

docker run -d --name=demo [镜像名]  给容器取一个名字为demo
（未注定名字就随机取）

docker stop demo 停止demo 容器

docker start demo 启动demo 容器 

docker inspect [容器id]  显示容器详细 ，主要内容包括 ： 
1.容器完整id  ：ID
2. 创建时间  ： Created
3. 参数 ： Args 
4. 状态 ： State
5. 镜像: Image
6. host配置 ： HostConfig
7. Config配置 ：Config   em:  Hostname 
8.环境变量 ： ENV  
9.Cmd ： em:["python","app.py"]
10. 网络方面 ： NetworkSettings 
em：Networks ， Gateway:172.17.0.1 ，IPAddress:172.17.0.2 ,MacAddress

docker logs [容器id]  ： 运行信息  可做调试用

## 网络基础回顾
ping 和 telnet  
ping 验证ip可达性 
telnet  验证服务可用性
em ： 
ping www.imooc.com
telnet www.imooc.com 80
能ping通  telent 不能  ，考虑防火墙

抓包工具 ： wireshark

## Linux 网络命名空间 
sudo docker exec [容器id] ip a  查看容器网络

sudo ip netns list 查看本机网络命名空间（ network linux space ）

sudo ip netns delete test1  删除

sudo ip netns add test1  创建/添加

sudo ip netns exec test1 ip a ,在test1的  linux   network Namespace中 运行ip a ，查询网络信息 

ip link 查看本机网络信息 （本地回环口， 端口） 

sudo ip netns exec test1 ip link set dev lo up   在test1的network linux space中 运行 ip link set dev lo up ，启动端口   

##  连接两个network namespace 使得能够ping通

过程 ： 创建一对（可连通）端口' veth-test1 ， veth-test2‘  并将这两个端口添加到容器test1 test2中    ping通 
 
添加一对link ： sudo ip link add veth-test1 type veth peer name veth-test2 (可连接通)
ip link 查询到这一对link 

1. sudo ip link set veth-test1 netns test1
    - sudo docker exec test1 ip a  查看test1容器网络是否有端口： veth-test1 ， 
    - ip link 查看本地网络发现本地端口   veth-test1 不见了 被添加到容器test1 里面 

2.  sudo ip link set veth-test2 netns test2  
    -   ip link 查看本地网络发现本地端口   veth-test2 不见了 被添加到容器test2 里面 

    - sudo ip netns exec test2 ip link  发现test2里面也多了一个端口  veth-test2

3. 给两个端口分配ip地址
" veth-test1 ， veth-test2 " 只有物理地址  ，且都是down（未执行未打开）的 

3.1 sudo ip netns exec test1 ip addr 192.168.1.1/24 dev veth-test1 
在test1 linux network namespace里面执行 给  dev veth-test1端口
分配一个ip地址是 192.168.1.1  ， 掩码是24

3.2 sudo ip netns exec test2 ip addr 192.168.1.2/24 dev veth-test2

执行完后 ，查询  sudo ip netns exec test2 ip link 还是只有物理地址

4.  sudo ip netns exec test1 ip link set dev veth-test1 up  将test1的linux network namespace 的端口veth-test1 给up启动起来 
同样 ， 再把 test2的 veth-test1端口 给up启动起来 

5. 查询test1 test2 的linux network space ，分配的端口是否启动
 sudo ip netns exec test1 ip a  

6. 查询是否能ping通 
sudo ip netns exec test1 ping 192.168.1.2 

完结撒花 。。。。 。。。。。。

##  Docker bridge 详解 

``` bash
前提 ： 已经创建有test1容器 且容器绑定有自建端口（network namespace） 以做下面查询
##  列举docker有哪些网络 sudo docker network ls 
docker network inspect [network ID] 查看网络详情
##  如何去查看 veth端口（容器端口） 连接到 docker0上 

centos 安装 工具 ： sudo yum install bridge-utils
ubuntu 安装工具  ： sudo agt-get install bridge-utils

brctl show 查看机器上的linux bridge  连接 （interfaces）
 （em:docker0  可以看到接口interfaces  ： veth26d281c）

ip a  查看到最后一个端口为(em : veth26d281c@xxx  )  表示我们的接口连接到了 docker0 
```

## 容器端口的映射 （nginx）
``` bash
1. run 一个持久化运行的nginx （取名为web）
 sudo docker run --name web -d nginx (-d 持久化运行)

2. 进入nginx里面 
docker exec -it web /bin/bash （-it交互式运行） 

3. 查询网络（nginx默认连接到docker0 bridge）
sudo docker network inspect bridge  查询到ipv4地址：em：172.17.0.2/16

4.在nginx容器外ping  172.17.0.2 是可以ping通的 
ip a 可以看到容器外面有docker0 bridge

5. telnet 172.17.0.2 80 测试80端口是否可以访问 

6. 可以通过curl 172.17.0.2访问网站 ，测试能否访问nginx页面  由此 docker host里面是可以访问nginx的80服务的 
### 上面是推演学习过程（1-6） 下面是直接步骤（7-）
7. 把nginx 80端口映射到本地 80 （- p  ）
删除前面容器（docker rm web） 重新创建容器 ： 
- 7.1 sudo docker run --name web -d -p 80:80 nginx   （-p 80:80 把80端口映射到本地   ，第一个80是本地 ，第二个80是内部bridge）
- 7.2 docker ps 查询到nginx 的ports 为 0.0.0.0:80->80/tcp   已经连接到本地

8. curl 127.0.0.1  查询是否能访问到container容器里面的nginx服务

9. ip a 查询到ens33本地虚拟化 地址 192.168.31.129 

10. vmware 虚拟网络编辑-NAT设置 将虚拟地址 192.168.31.129  映射到 本地端口 xxxx 

11. 127.0.0.1:xxxx 如果要再做局域网（nas/路由器）访问 ， 需要再做端口映射 把虚拟地址映射到本地地址 
以windows为例 ，需要在防火墙中添加入站规则   将xxxx映射出去

``` 

## 容器网络之host与none 
1. docker network ls  查询到网络 bridge 和 host 以及 none 三个网络 
2. docker run -d --name test1 --network none busybox /bin/sh -c "while true; do sleep 3600 ;done" 创建容器test1 用--network 指定网络 none ,一般来说指定为none的使用场景只有是只供内网访问的应用 
3. docker network inspect none 查询none网络 发现test1绑定 
4. docker exec -it test1 /bin/sh   //   ip a 进入  查询到none的网络只有本地回环口lo
5. docker run -d --name test1 --network host busybox /bin/sh -c "while true; do sleep 3600 ;done" 创建容器test1 用--network 指定网络 host , 进入容器 ip a再查网络  本地网络回环口 ，内网网络回环口就都在了 跟linux主机是一样的

## 多容器的复杂应用部署 

## underlay和overlay 
1. underlay: 现实的物理基础层网络设备。-数据中心基础转发架构的网络。
    - 以太网最初设计的时候就是一个分布式的网络架构，没有中心控制节点，网络中的节点通过协议传递学习网络的可达性信息。underlay就是数据中心场景的基础物理设施，保证任何两个点路由可达，其中包含了传统的网络技术。

2. overlay：一个基于物理网络之上构建的逻辑网络。
    - overlay是在网络技术领域指的是一种网络架构上叠加的虚拟化技术模式，Overlay网络也是一个网络，不过是建立在Underlay网络之上的网络。overlay网络节点通过虚拟或者逻辑链路进行通信，其实现基于ip技术的基础网络为主。Overlay网络技术多种多样，一般采用TRILL、VxLan、GRE、NVGRE等隧道技术。
    更多连接 ： https://blog.csdn.net/xinquanv1/article/details/102509858/    

## Docker Overlay 网络 和etcd实现多容器通信

## 部署一个wordPress 

``` bash
### 创建数据库  -v volume  持续化存储  
docker run -d --name mysql -v mysql-data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=779604436 -e MYSQL_DATABASE=wordpress mysql

### 创建wordpress容器 ， --link 创建内网桥连接 到容器mysql -p 将内网80端口 映射到虚拟机本地8080端口
docker run -d -e WORDPRESS_DB_HOST=mysql:3306 -e WORDPRESS_DB_USER=root -e WORDPRESS_DB_PASSWORD=779604436  --link mysql -p 8877:80 wordpress

```

## Docker 的持久化存储 和数据共享 
Docker持久化数据的方案 
1. 基于本地系统的Volume 。
可以在执行Docker create 和 Docker run时 ,通过 -v参数将主机的目录作为容器的数据卷 ，这部分功能便是基于本地系统文件系统的volume管理
- 基于 plugin 的volume ，支持第三方的存储方案，比如NAS ，aws 

- Volume 的类型 
    + 受管理的data volume ，由docker后台自动创建
    + 绑定挂载的volume ，具体挂载位置可以由用户指定 
2. Bind Mouting 

``` bash
### Data Volume  
1. sudo docker run -d --name mysql -e MYSQL_ALLOW_EMPTY_PASSWORD mysql 

“数据库未初始化，密码没设置。你需要设置MYSQL_ROOT_PASSWORD, MYSQL_ALLOW_EMPTY_PASSWORD and MYSQL_RANDOM_ROOT_PASSWORD三个中的任意一项”

其中 MYSQL_ROOT_PASSWORD即root账户的密码。

MYSQL_ALLOW_EMPTY_PASSWORD即允许密码为空。

MYSQL_RANDOM_ROOT_PASSWORD随机一个root账户密码。

2. volume mysql的运用 
mysql没有运行起来  查询 docker logs mysql
删除镜像    docker rm mysql 
查询volume  docker volume ls 
删除volume  docker volume rm [volume id]
重新执行将mysql执行起来： docker run -d --name mysql2 -e MYSQL_ALLOW_EMPTY_PASSWORD=true mysql
查询 volume 详情 docker volume inspect [volume id]  可以查询到volume的存储地址 
总结以上 ： volume id 太长且无意义 无法分辨 删除以上 

对volume -v进行命名 mysql 以及设置存储位置:/var/lib/mysql
docker run -d -v mysql:/var/lib/mysql --name mysql -e MYSQL_ALLOW_EMPTY_PASSWORD=true mysql

进入mysql中 ：
docker exec -it 2d0656c1669c /bin/bash

mysql -u root; 
show databases; 
创建数据表 docker
create database docker 
强制删除容器 
docker rm -f  2d0656c1669c

使用volume 创建新的mysql容器
docker run -d -v mysql:/var/lib/mysql --name mysqlre -e MYSQL_ALLOW_EMPTY_PASSWORD=true mysql

查询数据库 docker表依在 由此 删除容器 但不影响volume

### 数据持久化 ： Bind Mouting 
 
docker run -v /home/aaa:/root/aaa  本地目录 映射 目录

将本地目录 $(pwd) 映射到 /usr/share/nginx/html
docker run -d -v $(pwd):/usr/share/nginx/html -p 80:80 --name web xxx 
```
## docker-compose  
1. docker-compose 解决什么问题   
 - 要从Dockerfile build image 或者 dockerhub 拉去image 太恶心 
 - 要创建多个container 
 - 要管理这些container（启动停止删除）
 + 总结 ： 多个容器部署问题  

2. docker-compose 是什么
    - Docker Compose 是一个工具 
    - 这个工具可以通过一个yml文件定义多容器的docker应用 
    - 通过一条命令就可以根据yml文件的定义去创建或者管理这多个容器
    + 总结 ： docker-compose  “一个批处理工具”  一个docker up 命令管理 多个container



###  docker-compose.yml 是compose默认名字 
## docker compose三大概念 ： 
1. services : 
    - 一个service代表一个container ，这个container可以从dockerhub的image来创建 ，或者从本地的Dockerfile build出来的image来创建
    - Service的启动类似docker run ，我们可以给其指定network 和volume ，所以可以给service指定network和volume的引用
2. Networks ：

3. Volumes

## docker-compose的安装 使用
1. dockerHub的 compose地址 ： 
  https://github.com/docker/compose/releases 

  https://github.com/docker/compose/releases/download/1.18.0/docker-compose


2. 下载compose 到/usr/local/bin/docker-compose
sudo curl -L  https://github.com/docker/compose/releases/download/1.18.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose

3. 修改权限
 sudo chmod +x /usr/local/bin/docker-compose 
 <!-- chmod 777 docker-compose -->

4. 启动yml文件      
- docker-compose up (默认文件docker-compose.yml)

- docker-compose -f docker-compose.yml up (-f 指定执行的文件夹yml文件 )

- 部分常用命令 
  + docker-compose up 启动  -d(后台启动 不打印log)
  + docker-compose stop 停止服务
  + docker-compose start 开启服务
  + docker-compose down 删除容器
  + docker-compose images 列举docker-compose的image 
  + docker-compose ps 列举docker-compose的container 
  + docker-compose exec mysql bash  进入service容器
    - docker-compose exec wordpress bash
  docker network ls 查看docker-compose创建的网络  
  docker-compose exec mysql bash 进入mysql的bash
 
## docker-compose部署wordpress 
1. docker-compose.yml
``` js
version: '3'

services:

  wordpress:
    image: wordpress
    ports:
      - 8080:80
    environment:
        WORDPRESS_DB_HOST: mysql
        WORDPRESS_DB_PASSWORD: 779604436
    networks:
      - my-bridge

  mysql:
    image: mysql
    environment:
      WORDPRESS_DB_USE: root
      WORDPRESS_DB_PASSWORD: 779604436
      MYSQL_DATABASE: wordpress
    volumes:
      - mysql-data:/var/lib/mysql
    networks:
      - my-bridge

volumes:
  mysql-data:

networks:
  my-bridge:
    driver: bridge  

```
## docker-compose 以DockerFile build为service
1. docker-compose.yml
``` js 
version: "3"

services:

  redis:
    image: redis
  
  web:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - 8080: 5000
    environment: 
      REDIS_HOST: redis 
```

## 水平扩展和负载均衡 

1. 
    - docker-compose up -d 后台运行
    - docker-compose ps 
    - docker-compose up --scale web=3 将web容器启动三个
    ```bash
     docker-compose文件参考 ：
      version: "3"

      services:

        redis:
          image: redis

        web:
          build:
            context: .
            dockerfile: Dockerfile
          ports:
            - 8080:5000
          environment:
            REDIS_HOST: redis   
     ```

2. docker-compose up --scale web=10 需要注意posts端口占用 可以删除ports项
  - 负载均衡 ：  haproxy -- 10web -- redis

  - 负载均衡的写法lb
  ```bash
    version: "3"

    services:

      redis:
        image: redis

      web:
        build:
          context: .
          dockerfile: Dockerfile
        environment:
          REDIS_HOST: redis
      lb:
        image: dockercloud/haproxy 
        links: 
          - web
        ports:
          - 8080:80
        volumes:
          - /var/run/docker.sock:/var/run/docker.sock
  ```
  
## swarm集群  
  创建一个三节点的swarm集群 
1. 初始化swarm manager节点为 192.168.31.132
docker swarm init --advertise-addr=192.168.31.132 

2. 在其他docker mechine 中添加 worker 角色 （需要几个worker 就加几次） 
 docker swarm join \
    --token SWMTKN-1-5cu6khq67uei50zki7wyvvgadr398rjb19aiwl688irex8ekrm-9meb9up8wvs8jo2d3dbubshju \
    192.168.31.132:2377

3. 查看节点（manager  worker）
docker node ls

### Swarm  service的创建和水平扩展维护
 在manager中创建service 类似（docker run）
docker service create --name demo busybox sh -c "while true;do sleep 3600;done"
- 查询 ： docker service ls  
  + MODE:replicated ; REPLICAS:1/1  表示支持水平扩展scale  目前运行的服务有1个/ 总共服务有1个
  + 水平扩展 ： docker serivce scale demo=5 
    水平扩展后查询docker service ps demo 可看到service水平扩展的5个demo服务分布在不同的worker中 
  + 在某个workr中 删除其中某个正在服务容器（demo） docker rm -f [容器id]   
    重新查询   docker service ls  发现 REPLICAS:4/5 ,过一会再次查询 发现 REPLICAS:5/5
    总结 ：也就是sacle不仅能保持横向扩展 ，更能保证我们扩展的容器（服务）是有效的 ，发现错误会去我们的worker节点重启一个demo服务

  + 删除水平扩展的五个demo服务 ，在manager中 ：  
    docker service rm demo 
    过一会再到worker中查询 ：docker ps 

### 在swarm集群里通过service部署wordpress 
  通过swarm 创建service  mysql 和wordpress  很可能不在一个worker中  这时候用overlay网络去解决通信问题  
  ps： swarm为了保持通信： overlay网络demo 会在其他worker中同步创建

  1. 创建mysql 指定网络demo（overlay）
  - 创建overlay网络 docker network create -d overlay demo 
    + 查询网络 docker network ls
  - 在swarm中创建mysql服务 并以demo (overlay) 为指定网络   
  docker service create --name mysql --env MYSQL_ROOT_PASSWORD=root --env MYSQL_DATABASE=wordpress --network demo --mount type=volume ,source=mysql-data,destination=var/lib/mysql mysql （ps ： --mount 类似于 -v volume ;destination 指定文件夹地址 ）
    + docker ps 查看起动没有

  2. 创建wordpress service 并指定network 
  docker service create --name wordpress -p 80:80 --env WORDPRESS_DB_PASSWORD=root --env WORDPRESS_DB_HOST=mysql --network demo wordpress 

  此时去访问worker1  、 workder2 地址（192.168.31.129/192.168.31.131）等都可以访问到我们部署的wordpress  由此引出集群服务间通信的Routing Mesh

 ###   集群服务间通信的 Routing Mesh 
 关键字流程 ： request --》 dns  --》 vip（虚拟ip 10.0.0.7） --》iptable --》 ipvs（负载均衡） -》service/worker（A.B.C）
 流程 ： 
  1. 水平扩展scale demo= 5  ，会有共同的一个虚拟ip （virtual ip） ，访问（ping demo）任意容器的demo服务 ，都会访问一个dns 虚拟ip（em：10.0.0.7）  
  2. nslookup demo 可查询dns  
      nslookup tasks.demo 查询背后容器的真正地址 。。

  Routing Mesh的两种体现 
  - Internal -- Container和Container之间的访问听过通过overlay网络（通过VIP虚拟IP）
  - Ingress -- 如果服务有绑定接口 ，则此服务可以通过任意swarm节点的相应接口访问

  查看本地转发规则 : 
  sudo iptabels -nL -t nat 

  查看docker创建的本地网络 ： 
  sudo ls /var/run/docker/nets 


##  docker stack 部署wordpress 
<!-- 文件夹 / -->
在manager中执行部署stack ：  取名为example ，执行文件为docker.compose.yml
docker stack deploy example --compose-file=docker.compose.yml 

查询stack 
docker stack ls 
 
docker stack ps [stack name]  查看stacak 详情

docker stack services [stack name] 查看服务详情 

docker stack rm  [stack name] 删除该stack 的服务与网络 

总结 ： docker stack 是用来部署swarm集群的 ， 写法与docekr-compose一样 ，只是多一些参数 比如ddeploy 中mode: replicated /global 是否支持水平扩展 ， 配置关闭重启 ， 更新等 以及网络一般为overlay  ， 还有区别于docker-compose的就是image，不能使用Dockerfile再docker build，只能上传dockerhub拉取， 
参考文件 docker-compose.yml 
<!-- /home/applestven/d-compose/swarm-stack -->

``` bash
version: '3'

services:

  wordpress:
    image: wordpress
    ports: # 将80 映射到 8000
      - 8080:80
    environment:
        WORDPRESS_DB_HOST: mysql:3306
        WORDPRESS_DB_USER: root
        WORDPRESS_DB_PASSWORD: 779604436
    networks:
      - my-network
    depends_on: # 运行依赖于 mysql  先启mysql 
      - mysql
    deploy:
      mode: replicated #该参数表示可进行水平扩展scale
      replicas: 3 # 水平扩展的格式 
      restart_policy:  # 配置关闭 如何重启参数
        condition: on-failure # 有失败的重启
        delay: 5s
        max_attempts: 3
      update_config: # 配置更新参数
        parallelism: 2 # 更新最多两个
        delay: 10s


  mysql:
    image: mysql
    environment:
      MYSQL_ROOT_PASSWORD: 779604436
      MYSQL_DATABASE: wordpress
    volumes:
      - mysql-data:/var/lib/mysql
    networks:
      - my-network
    deploy:
      mode: global  # 该参数表示在manager中部署 且不能进行水平扩展 
      placement:
            constraints: 
                  - node.role == manager
  visualizer: # swarm可视化工具
  image: dockersamples/visualizer:stable
  ports:
    - "8080:8080"
  stop_grace_period: 1m30s
  volumes:
    - "/var/run/docker.sock:/var/run/docker.sock"
  deploy:      
    placement:
      constrinsts: [node.role == manager]    
volumes:
  mysql-data:

networks:
  my-network:
    driver: overlay
``` 

## docker Secret
1. Secret Management
 - 存在Swarm Manager节点Raft database 
 - Secret可以给assign给一个service  ，这个service就能看到secret
 - 在container 内部Secret看起来像文件 ，但实际是在内存中

2. 创建secret 可从文件中创建 也可以输入创建
 - 2.1 docker secret create [OPTIONS] SECRET file|
 - 2.2 vim pssword  创建 密钥文件 
    password
 - 2.3 以password文件形式创建secret 
   + docker secret create my-pw password 
   + rm -rf password 删除password文件
 - 2.4 查看密钥列表
  + docker secret ls
 - 2.5 删除密钥 
  + docker secret rm [secret name:my-pw2]

3. 常用操作 
  - docker service create --name client --secret my-pw busybox sh -c "while true;do sleep 3600; done"  
  - docker service ls
  - docker ps client 
  - docker ps 
  - docker exec -it ccee sh //
  - cd /run/secrets/    查看密码 ls  
  - cat my-pw 查看原文密码 
4. secret使用 
  - 4.1  docker service create --name db --secret my-pw -e MYSQL_ROOT_PASSWORD_FILE=/run/secrets/my-pw mysql 
  - 4.2 cd /run/secrets/my-pw   em :admin123
    + mysql -u root -p 登录使用 admin123 测试密码生效

5. 参考docker-compose.yml 
``` bash 
version: '3'

services:

  web:
    image: wordpress
    ports:
      - 8080:80
    secrets:
        - my-pw
    environment:
        WORDPRESS_DB_HOST: mysql:3306
        WORDPRESS_DB_USER: root
        WORDPRESS_DB_PASSWORD_FILE: /run/secrets/my-pw # 密钥文件
    networks:
      - my-network
    depends_on:
      - mysql
    deploy:
      mode: replicated
      replicas: 3
      restart_policy:
        condition: on-failure
        delay: 5s
        max_attempts: 3
      update_config:
        parallelism: 1
        delay: 10s


  mysql:
    image: mysql
    secrets: 
        - my-pw # 指定密钥
    environment:
      MYSQL_ROOT_PASSWORD_FILE: /run/secrets/my-pw # 指定密钥文件位置
      MYSQL_DATABASE: wordpress
    volumes:
      - mysql-data:/var/lib/mysql
    networks:
      - my-network
    deploy:
      mode: global
      placement:
            constraints: 
                  - node.role == manager

volumes:
  mysql-data:

networks:
  my-network:
    driver: overlay

#  可以这样去创建密钥文件 ，但一般不推荐 ， 有一定风险，违背加密初衷 ，一般单独创建加密文件
# secrets 
# my-pw
# file: ./password  
```

6. 使用swarm集群 stack方式创建 -c为--compose= 缩写 ，执行文件为docker.compose.yml
docker stack deploy wordpress -c=docker-compose.yml 


  














## finally : 
1. github 上有很多官方提供的的 Dockerfile供参考实践 
for example 
  search ：  
dockerl-library/redis   
 docker-library/mysql
2. dockerFile 官网文档 ：https://docs.docker.com/engine/reference/builder/

 
``` 