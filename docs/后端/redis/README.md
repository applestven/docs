## redis 入门记

## window 安装redis
下载地址 ： https://github.com/MicrosoftArchive/redis/releases

<!--视频学习 ： https://www.bilibili.com/video/BV1GY41187d5/?p=10&spm_id_from=pageDriver&vd_source=0c88b82560db687e3ba0427782c655e3 -->
1. 基本概念
      Redis 是一个高性能的key-value数据库。
      NoSQL：一类新出现的数据库(not only sql)；泛指非关系型的数据库，不支持SQL语法
配置
Redis的配置信息在/etc/redis/redis.conf下。
查看
sudo vi /etc/redis/redis.conf
核心配置选项
绑定ip：如果需要远程访问，可将此⾏注释，或绑定⼀个真实ip
bind 127.0.0.1
端⼝，默认为6379
port 6379
数据⽂件 : dbfilename dump.rdb

数据⽂件存储路径 : dir /var/lib/redis

⽇志⽂件 : logfile "/var/log/redis/redis-server.log"

数据库，默认有16个 : database 16

2. 连接启动方式
1.启动redis服务器命令： redis-server 配置文件名称 (可以不填，读取默认配置)
2.连接redis客户端命令： redis-cli -h ip地址 -p 端口   -c:连接集群
  如：redis-cli -h 47.101.63.222 -p 56379
3. 连接本地：redis-cli

4. 设置密码：config set requirepass pass_123456

5. 获取密码：config get requirepass

6. 登录：auth pass_123456

7. 切换数据库：

     数据库没有名称，默认有16个，通过0-15来标识，连接redis默认选择第一个数据库

      select 10

## redis 的安装  
1. 环境准备 ： 
- windows 安装ubuntu  
    + Windows  控制面板 - 启动或关闭windows功能 - 适用linux的windows子系统  
    + microsoft Store 安装Ubuntu 
    + 打开Ubuntu报错 ：  Installing, this may take a few minutes...
    WslRegisterDistribution failed with error: 0x800701bc
    Error: 0x800701bc WSL 2 ?????????????????? https://aka.ms/wsl2kernel
    + 解决参考  http://kuaixun.yndtjj.com/kuaixun/20220507/079017.html  首先下载Windows Subsystem for Linux Update setup 官方版将WSL1升级到WSL2。下载地址：http://www.xitongzhijia.net/soft/244754.html
    然后再次尝试即可。
    如果还没有解决问题，就需要用管理权限打开cmd或者powershell，分别输入下面代码

    用管理权限打开cmd或者powershell，分别输入下面代码

    bcdedit /set hypervisorlaunchtype Auto

    Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All

    Enable-WindowsOptionalFeature -Online -FeatureName VirtualMachinePlatform

    Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux

    到这里就应该都没有问题了。

    + 可以应用打开ubuntu  ， 也可以cmd 输入ubuntu 打开

2. 安装redis-serve     
    
    sudo apt update 
    sudo apt install redis-server
    sudo service redis-server start 

# redis 基本操作 

基本的数据格式和操作

``` bash
string类型：
    # 保存：
	设置值：set key value
        (设置键为name值为itcast的数据)
        set name itcast
 
    设置值,过期时长：setex key seconds value
        (设置键为aa值为aa过期时间为3秒的数据)
        setex aa 3 aa
 
    设置多个键值： mset key1 value1 key2 value2 ...
        (设置键为'a1'值为'python'、键为'a2'值为'java'、键为'a3'值为'c')
        mset a1 python a2 java a3 c
 
        
    追加值：append key value
        （向键为a1中追加值' haha'）
         append 'a1' 'haha'
 
    
    # 获取：
    根据键获取值，如果不存在此键则返回nil --  get key
        (获取键'name'的值)
        get 'name'
 
    根据多个键获取多个值: mget key1 key2 ...
        (获取键a1、a2、a3'的值)
        mget a1 a2 a3
```

``` bash 
键命令
    
    查找键，参数⽀持正则表达式；--  keys pattern
 
    1. 查看所有键     keys *
 
    2. 查看名称中包含 a 的键    keys 'a*'
 
    3. 判断键是否存在，如果存在返回1，不存在返回0  exists key1
 
    4. 查看键对应的value的类型  type key
 
    5. 删除键及对应的值  del key1 key2 ...
         (删除键a2、a3) -- del a2 a3
 
    6. 设置过期时间，以秒为单位，如果没有指定过期时间则⼀直存在，直到使⽤DEL移除
           expire key seconds
 
         (设置键'a1'的过期时间为3秒) -- expire 'a1' 3
 
    7. 查看有效时间，以秒为单位  ttl key
         (查看键'bb'的有效时间) --  ttl 'bb'
```

``` bash
hash类型
    ⽤于存储对象，对象的结构为属性、值; 值的类型为string
 
    1. 设置单个属性  hset key field value
         (设置键 user的属性name为itheima) -- hset user name itheima
 
    2. 设置多个属性  hmset key field1 value1 field2 value2 ...
         (设置键u2的属性name为itcast、属性age为11)
            hmset u2 name itcast age 11
 
    3. 获取指定键所有的属性  hkeys key
 
    4. 获取⼀个属性的值   hget key field
         (获取键u2属性'name'的值)
            hget u2 'name'
 
    5. 获取多个属性的值  hmget key field1 field2 ...
 
    6. 获取所有属性的值  hvals key
 
    7. 删除属性的值： hdel key field
         (删除键'u2'的属性'age')
          hdel u2 age
```

``` bash

set类型:
    属性：   ⽆序集合
            元素为string类型
            元素具有唯⼀性，不重复
            说明：对于集合没有修改操作
 
    1. 增加
    添加元素: sadd key member1 member2 
 
    2. 获取
    返回所有的元素: smembers key
 
    3. 删除
    删除指定元素： srem key
      (删除键'a3'的集合中元素'wangwu')
        srem a3 wangwu
```
```bash 
zset类型(有序集合):
    属性：sorted set，有序集合
         元素为string类型
         元素具有唯⼀性，不重复
         每个元素都会关联⼀个double类型的score，表示权重，通过权重将元素从⼩到⼤排序
         说明：没有修改操作 
 
    1. 增加
       添加元素: zadd key score1 member1 score2 member2
        (向键'a4'的集合中添加元素'lisi'、'wangwu'、'zhaoliu'、'zhangsan'，权重分别为4、5、6、3)
         zadd a4 4 lisi 5 wangwu 6 zhaoliu 3 zhangsan
 
    2. 获取
       返回所有的元素: zrange key start stop  
        start、stop为元素的下标索引
        索引从左侧开始，第⼀个元素为0
        索引可以是负数，表示从尾部开始计数，如-1表示最后⼀个元素 
 
    3. 删除
       删除指定元素： zrem key member1 member2 ...
 
       删除权重在指定范围的元素： zremrangebyscore key min max
        (删除集合'a4'中权限在5、6之间的元素)
         zremrangebyscore a4 5 6
```