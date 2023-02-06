# 第7章: redux :集中式状态管理
    
## 案例 ：   
	https://gitee.com/big_insect/study-class/tree/master/react/react-cli/redux_test/8_src_最终版
## 模型图 ： 
<img class="custom" :src="$withBase('/assets/redux/react-redux模型图.png')" alt="xiao" />

## 原理图：
 <img class="custom" :src="$withBase('/assets/redux/redux原理图.png')" alt="xiao">

 主要代码示例 : 
 ::: tip
 store.js
 :::
 	
``` js
 // 引入createStore ，专门用于创建redux中最为核心的store对象
import { createStore , applyMiddleware} from 'redux' 
// 引入Count组件服务的reducer

import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk'
import reducer from './reducers'

// 暴露store 
export default createStore(reducer ,composeWithDevTools(applyMiddleware(thunk)) )
```

 ::: tip
constant.js
 :::
``` js
// 该模块用于定义action对象中type类型的常量值 ，目的只有一个 ；便于管理的同时防止程序员写错单词
// 放置容易写错的type值 
export const INCREMENT = 'increment' 
export const DECREMENT = 'decrement' 
export const ADD_PERSON = 'add_person' 
```	

### 如果要写一个count redux组件 那么你需要 : 
 ::: tip
创建count的action  该文件专门为Count组件生成action对象   
 ::: 
 ``` js
//  
import {INCREMENT , DECREMENT} from '../constant' 
//  同步action ，就是指action的值为Object类型的一般对象
export const increment = data => ({type:INCREMENT , data}) 
export const decrement  = data => ({type:DECREMENT ,data})

//  异步action，就是指action的值为函数 ， 异步action中一般会调用同步action，异步action不是必须要用的
export const incrementAsync = ( data,time) =>{
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(increment(data))
        }, time);
    }
}
 ```

::: tip
在containers目录下创建count组件 引入connect用于连接UI组件与redux 
::: 

``` js
	import {Component} from 'react'
//  引入Count的UI组件 
// import CountUI from '../../components/Count'
//  引入action 
import {
  increment,decrement,incrementAsync
} from '../../redux/actions/count'

// 引入connect用于连接UI组件与redux 
import {connect} from 'react-redux'

//使用connect()() 创建暴露一个Count容器组件 
class Count extends Component {
    state = { carName:'奔驰c63'}
  
  increment = ()=>{
      const { value} = this.selectNumber
      this.props.increment(value*1)
  
  }    
  decrement = ()=>{
    const { value} = this.selectNumber
    this.props.decrement(value*1)
  }
  incrementIfOdd = ()=>{
      const { value} = this.selectNumber
     
      if(this.props.count % 2 !==0){
        this.props.increment(value*1)
      }
  }
  incrementAsync = ()=>{
    const { value} = this.selectNumber
    this.props.incrementAsync(value*1,500)
      
  }
    render() {
      return (
        <div>
            <h2>我是Count组件，下方组件总人数为：{this.props.personCount}</h2>
            <h2>当前求和为 ： {this.props.count}</h2>
            <select ref={c => this.selectNumber = c}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>&nbsp;
            <button onClick={this.increment}>+</button>&nbsp;
            <button onClick={this.decrement}>-</button>&nbsp;
            <button onClick={this.incrementIfOdd}>当前求和为奇数加</button>&nbsp;
            <button onClick={this.incrementAsync}>异步加</button>
        </div>
      )
    }
  } 
export default connect(
    state=>({
        count:state.sum,
        personCount:state.persons.length 
    }),{increment,decrement,incrementAsync}
)(Count)

```

::: tip
创建count的reducers 用来初始化状态和处理数据
::: 

```js

 // reducers 用来初始化状态和处理数据改变(根据action的type决定处理的方式)
const initState  = 0 // 初始化状态 
export default function countReducer(preState=initState,action){
    const {type ,data} = action 
    //根据type决定如何加工数据 
    
    switch(type){
        case 'increment' : 
            return preState + data
        case 'decrement' : 
            return preState - data
        default:
            return preState     
    }
}

```

### 文件结构如下 :
	

```js
│  App.jsx
│  index.js
│  result.txt
│  
├─containers  //用来存放需要进行集中式状态管理的组件
│  ├─Count
│  │      index.jsx  // count组件
│  │      
│  └─Person
│          index.jsx
│          
└─redux
    │  constant.js // 用于定义action对象中type类型的常量值 ，便于管理的写错单词
    │  store.js
    │  
    ├─actions //存放生成action的js文件
    │      count.js 
    │      perosn.js
    │      
    └─reducers // 用来初始化状态和处理数据改变
            count.js
            index.js
            person.js 
```