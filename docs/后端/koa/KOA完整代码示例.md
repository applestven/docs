# koa项目结构总结 ： 
    仓库地址 ： https://gitee.com/big_insect/koa
# 代码实例  总结购物车逻辑接口写法（其他接口类同） ：

## 购物车路由 
``` bash

// 1. 导入koa-router
const Router = require('koa-router')

// 中间件 
const { auth } = require("../middleware/auth.middleware")
const { validator } = require("../middleware/cart.middleware")

// 控制器 
const { add, findAll,update,remove,selected } = require("../controller/cart.controller")

//2. 实例化router对象
const router = new Router({ prefix: '/carts' })
//3.编写路由规则

// 3.1 添加到购物车接口：登录 格式
router.post('/', auth, validator({
    goods_id: { type: 'number' }
}), add)

// 3.2 获取购物车列表
router.get("/", auth, findAll)

// 3.3 更新购物车
router.patch(
    '/:id',
    auth, 
    validator({
        number: { type: 'number', required: false },
        selected: { type: 'bool', required: false },
    }),
    update
)
// 3.4 删除购物车 
router.delete("/",auth ,validator({
    ids:{type:'array',required:true}
}),remove)

// 3.5 全选中于全不选  
router.post("/selectedAll",validator({
    selected:{type:'number' , required:false,},
}),auth,selected)



// 4. 导出router 

module.exports = router 
```

## 购物车中间件
``` bash 
const {commonFormatError }  = require("../constant/err.type")
const validator = (rules)=>{
    return async (ctx,next)=>{
        try {
            ctx.verifyParams(rules)
        } catch (err) {
            console.log(err)
            commonFormatError.result = err
            return ctx.app.emit("error",commonFormatError,ctx)
        }
        await next()
    }
}
module.exports ={
    validator
} 
```

## 购物车controller层

``` bash
const {creteOrUpdate ,findCarts ,updateCarts ,removeCarts,selectedCart}  = require("../service/cart.service")
const { cartFormatError} = require("../constant/err.type")
const Cart = require("../model/cart.model")
class CartController{
    async add(ctx){
        // 将商品添加到购物车 
        // 1. 解析user_id , goods_id
        const user_id  = ctx.state.user.id
        const goods_id = ctx.request.body.goods_id
        // console.log("user_id" , user_id , goods_id)
        // 2.操作数据库 
        const res = await creteOrUpdate(user_id,goods_id)
        // 3. 返回结果 
        ctx.body = {
            code : 0,
            message:'添加到购物车成功',
            result:res
        }


    }
    async findAll(ctx){
        // 1.解析请求参数
        const { pageNum =1 ,pageSize = 10} = ctx.request.query 
        // 2.操作数据库
        const res =await findCarts(pageNum , pageSize)
        // 3.返回结果 
        ctx.body = {
            code : 0 ,
            message : "获取购物车列表成功",
            result : res ,
        }
    }
    async update(ctx){
        //1.解析参数  
            const {id} = ctx.request.params
            const { number , selected} = ctx.request.body
            if(number === undefined && selected == undefined){
                cartFormatError.message = 'number和selectd不能同时为空'
                return ctx.app.emit('error',cartFormatError,ctx)
            }
        //2.操作数据库 
        const res = await updateCarts({id , number , selected})
        //3. 返回数据 
        ctx.body = {
            code:0 ,
            message:'更新购物车成功',
            result:res
        }
    }
    async remove(ctx){
        //1.解析参数 
        const { ids} = ctx.request.body
        // 2. 操作数据库
        const res = await removeCarts(ids)
        //3. 返回数据 
        ctx.body = {
            code : 0 ,
            message : '删除购物车成功',
            result:res
        }
    }
    async selected(ctx){
        console.log("选中数据",ctx.state)
        const { selected = 1 } = ctx.request.body
        const user_id = ctx.state.user.id
        const res  =await selectedCart(selected,user_id)

        ctx.body = {
            code : 0 , 
            message:'修改成功',
            // result:res
        }
    }
}
module.exports = new CartController()

```

## 购物车serive层

``` bash 

const {Op} = require('sequelize')
const Cart = require("../model/cart.model")
const Goods = require("../model/goods.model")
// service 业务层 处理逻辑相关
class CartService {
    async creteOrUpdate(user_id,goods_id){
        // 根据user_id 和 goods_id查找有没有记录
        let res = await Cart.findOne({
            where:{
                [Op.and]:{
                    user_id,
                    goods_id,
                },
            },
        })

        if(res){
            // 已经存在一条记录 , 将number+1
            await res.increment('number')
            return await res.reload 
        }else{
            return await Cart.create({
                user_id,
                goods_id
            })
        }
    }
    async findCarts(pageNum , pageSize){
        const offset = (pageNum -1 ) * pageSize
        const {count ,rows} =await Cart.findAndCountAll({
            attributes:['id','number','selected'],
            offset :offset,
            limit:pageSize * 1,
            include:{
                model:Goods,
                as:'goods_info', // 别名
                attributes:['id','goods_name','goods_price','goods_img'] 
            }
        })
        return {
            pageNum,
            pageSize,
            total:count,
            list:rows 
        }
    }
    async updateCarts(params){
        const {id , number , selected} = params
        const res = await Cart.findByPk(id)
        if(!res) return ""

        number !== undefined ? (res.number =number):''
        selected !== undefined ? res.selected =selected :''

        return res.save()
    }
    async removeCarts(ids){
        Cart.destroy({
            where:{
                id:{
                    [Op.in]:ids,
                }
            }
        })
    }
    async selectedCart(selected,user_id){
        return await Cart.update({selected:selected},{
            where:{
                user_id,
            }
        })
    }
}

module.exports  = new CartService()
```

## 购物车模型  

``` bach
 
// 1.导入sequelize 的连接 
const { DataTypes } = require('sequelize')
const seq = require("../db/seq")
const Goods = require("./goods.model")
// 2.定义Cart模型
const Cart = seq.define("zd_carts",{
    goods_id:{
        type:DataTypes.INTEGER,
        allowNull:false ,
        comment:'商品的id',
    },
    user_id:{
        type:DataTypes.INTEGER,
        allowNull:false , 
        comment:'用户的id',
    },
    number:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:1,
        comment:'商品的数量',
    },
    selected:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true,
        comment:'是否选中'
    }
})

// 3. 同步数据（建表）
Cart.sync()
// Cart.sync({force:true})
// 3. 查购物车 关联 商品（以购物车goods_id 查询 商品）
Cart.belongsTo(Goods,{
    foreignKey:'goods_id', // 外键
    as:'goods_info' // 查出的结果别名
})
// 4. 导出Cart模型
module.exports = Cart 
```

## 常用中间件 auth 
``` bash 
const jwt = require("jsonwebtoken") 
const { JWT_SECRET } = require("../config/config.default")
const { tokenExpiredError ,invalidToken ,hasNOtAdminPermission} = require('../constant/err.type')
const auth = async(ctx,next)=>{
    const { authorization='' } = ctx.request.header
    const token = authorization.replace('Bearer ','')
    // console.log('password',ctx.request.body)
    // console.log('@token',token)
    try {
        //user中包含payload的信息（id ,user_name ,is_admin）
        // console.log('user1',ctx.state.user)
        const user = jwt.verify(token ,JWT_SECRET)
        ctx.state.user = user 
        // console.log('user2用户验证，获取到用户的信息',ctx.state.user)
    } catch (error) {
        switch(error.name){
            case 'TokenExpiredError':
                return ctx.app.emit('error',tokenExpiredError,ctx)
            case 'JsonWebTokenError':
                return ctx.app.emit('error',invalidToken,ctx)
            default :
                console.error("token验证错误")
        }
    }
    await next()
}
// 判断用户是否有管理员权限 
const hadAdminPermission = async (ctx ,next) =>{
    // 使用ctx的is_admin 判断用户是否有管理员权限 
    const { is_admin} = ctx.state.user 
    // console.log("管理员权限",is_admin)
    if(!is_admin){
        console.error("该用户没有管理员权限" ,ctx.state.user)
        return ctx.app.emit('error' , hasNOtAdminPermission,ctx)
    }
    await next()
}

module.exports = {
    auth,
    hadAdminPermission
}
``` 

# 其他 
##  router整合文件夹引入 
```bash
const fs  = require('fs')
const Router = require('koa-router')
const router = new Router()
// 读取本目录router下的文件 进行循环引入，
// 完成一次引入多个路由文件的入口文件
// 供app/index.js做路由配置
fs.readdirSync(__dirname).forEach(file=>{
    // console.log(file)
    if(file !== "index.js"){ 
        let r = require( './'+file )
        router.use(r.routes())
    }
})

module.exports = router 
```

## db/seq.js

``` bash 
// 连接数据库
const { Sequelize } = require('sequelize')

const { 
MYSQL_HOST,
MYSQL_POST ,
MYSQL_USER ,
MYSQL_PWD ,
MYSQL_DB ,

} = require('../config/config.default')
console.log("拿到三位变量",MYSQL_DB,MYSQL_PWD,MYSQL_USER,MYSQL_HOST)
const seq = new Sequelize(MYSQL_DB,MYSQL_USER,MYSQL_PWD,{
    host:MYSQL_HOST,
    dialect:'mysql'
})

// seq.authenticate()
// .then(()=>{
//     console.log('数据库连接成功')
// })
// .catch((err)=>{
//     console.log('数据库连接失败');
// })

module.exports = seq 
```

## 全局变量config/config.default.js  dotenv 
 
``` bash
const dotenv = require("dotenv")

dotenv.config() 

// console.log('....',process.env.APP_PORT);
console.log('....',process.env.MYSQL_HOST);

module.exports = process.env
```

## .env 

```bash
APP_PORT = 5588 

MYSQL_HOST = 127.0.0.1
MYSQL_POST = 3306
MYSQL_USER = root
MYSQL_PWD = 779604436
MYSQL_DB = koa

JWT_SECRET = xzd
```







