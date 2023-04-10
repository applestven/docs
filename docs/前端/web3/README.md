## web3.0 智能合约 :

1 、 以太坊官网，包括了：教程和文档，以及示例游戏 https://ethereum.org/zh/developers/docs/
2、B站视频教程，建议选定一个，从头到尾看完。https://search.bilibili.com/all?keyword=%E6%99%BA%E8%83%BD%E5%90%88%E7%BA%A6%20%E6%95%99%E7%A8%8B&from_source=webtop_search&spm_id_from=333.1007&search_source=5
3、Github项目：Krypt  真枪实弹:第一个Web3项目【上集】用React.js,Solidity,智能合约构建最新区块链应用详细教程
4、社区：WTF，开源免费  https://wtf.academy/



去中心化 ： 

可追溯 不可更改 统一账号地址 

## MetaMask

1. MetaMask是一个浏览器插件，可作为MetaMask Chrome扩展或Firefox附加组件使用。它的核心是它作为以太坊钱包:通过安装它，您将可以访问一个独特的以太坊钱包地址，您可以使用它开始发送和接收以太币或ERC20通证

2. 但MetaMask不仅仅是以太坊钱包，作为浏览器扩展，它可以与您正在浏览的当前网页进行交互。它通过在您访河的每个网页中注入一个名为web3.js的JavaScript库来实现。注入后，web3将通过window.web3的JavaScript代码为你访问的每个网页提供一个对象。（新版本中转账不再需要交互）

book alarm moment fever addict issue mind review banner hover story purse


## Ganache
https://trufflesuite.com/ganache/
Ganache 是一个用与本地开发的区块链，用于在以太坊区块链上开发去中心化的应用程序。Ganache 模拟了以太坊网络，你可以在发布到生产环境之前看到你的 DApp 将如何执行所以我们需要通过 ganache 来帮我们模拟一个以太坊的节点。测试通过后可以直接切换使用真实的以太坊的账号和区块节点就可以了

cnpm i ganache -g

启动 ： ganache
启动 ： ganache -d 保持账号不变


## Web3.js
github  ： https://github.com/web3/web3.js 

<script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>

登链社区 - 开发者最喜欢的区块链技术社区  ：  https://learnblockchain.cn/ 

web3 社区文档 ：https://learnblockchain.cn/docs/web3.js/

官方文档 ： https://web3js.readthedocs.io/en/v1.8.2/

例子 ： index.html




## 编写智能合约 ： 

1. Remix IDE

RemixIDE是开发以太坊能合约的在线IDE工具，部署简单的智能合约非常方便Remix地tt: https://remix.ethereum.org/

2. Truffle

Truffle是一个世界级的智能合约开发框架，专门为智能合约而生
。管理智能合约的生命周期
。自动化合约测试
。可编程，可部署，可发布合约
。不用过多的关注网络管理
。强大的交互式控制台

安装  ：  cnpm install -g truffle 
初始化一个 truffle 项目时，它会创建运行一个完整 dapp 所有必要的文件 truffle xxx
- build 放编译文件 truffle compile 生成文件
- contracts 编写合约
- migrations 部署文件  部署文件以数字开头命名 

 下面这个简单的例子包括了  solidity 简单编写  、 简单语法  、 编译以及部署 

 - /code/contracts/StudentStorage.sol

``` sol 
// SPDX-License-Identifier: GPL-3.0
// 源码遵循协议，MIT...
pragma solidity >=0.4.16 < 0.9.0 ;// 限定solidity编译器版本 

contract StudentStorage{

    // 创建 两个变量 user,age    // 默认为storage 存在链上的 
    uint age ; //  能存2的256次方   // uint8 // 2的8次方 能存0-255
    string public name ;  //obj.name()


    // 函数可以指定为external，public，internal或者private
    // external
    // ·外部函数是合约接口的一部分，这意味着可以从其他合约或通过事务调用它们。但是内部无法调用
    // public
    // 外部调用和内部都可以调用
    // internal
    // ·只能从当前合约或从当前合约派生的合约中访问，外部无法访问它们，由于它们没有通过合约的 
    // ABI向外部公开，所以它们可以接受内部类型的参数，比如映射或存储引用。
    // private
    // .私有函数类似于内部函数，但它们在派生合约中不可见。 

    // 3.Solidity语言
    // 3-1数据位置
    // solidity数据存储位置有三类: storage，memory和calldata。不同存储位置的gas成本不同storage类型的数推存在链上，
    // 类似计算机的硬盘，消耗gas多;memory和calldata类型的临时存在内存里，消耗gas少。大致用法：
    // 1，storage:合约里的状态变量默认都是storage，存储在链上。 // 存在链上 需要花费gas
    // 2，memory:函数里的参数和临时变量一般用memory，存储在内存中，不上链  // 临时变量  不需要花费gas   
    // 3，calldata: 和memory类似，存储在内存中，不上链。与memory的不同点在于calldata变量不能修改(immutable)，一般用于函数的参数

    // struct ,动态数组，映射，string   修改状态 就不能写 view pure
    function setData(string memory _name ,uint _age ) public{
        name = _name ;
        age  = _age;
    }

    // function test(uint x,uint y) public pure returns (uint){
    //     return x+y ;
    // }
    // view(视图函数，只访问不修改 状态) ，pure(纯函数， 不访问，也不修改)  节省gas
    function getData() public view returns(string memory ,uint) {
        return (name,age);
    }

    // 3-2 作用域
    // 变量的作用域: Solidity中变量按作用域划分有三种，分别是状态变量 (state variable)，局部变量(localvariable)和全局变量(globalvariable)。
    // 1. 状态变量:状态变量是数据存储在链上的变量，所有合约内函数都可以访问，gas消耗高。状态变量在合约内、函数外声明。可以在函数里更改状态变量的值!
    // 2. 局部变量:局部变量是仅在函数执行过程中有效的变量，函数退出后，变量无效。局部变量的数据存储在内存里，不上链，gas低。局部变量在函数内声明。
    // 3. 全局变量:全局变量是全局范围工作的变量，都是soliditv预留关键字。他们可以在函数内不声明直接使用(类似于msg.sender,block.number)

    // truffle compile  // 编译  可以检测一些错误 

    //truffle migrate  // 编译并部署 会先执行truffle compile  // 如果已经部署过了 则会跳过 ，需要--reset 才能强制重新部署

    //  truffle console 调试   

    // 输入  ： const obj  = await StudentStorage.deployed()

    // 查看链上地址 ： obj.address   // 调用里面的方法 obj.setData('kevin',100)   obj.getData()
}

``` 

部署文件  ： 
/code/migrations/1_deploy.js 

``` js // 部署 
    

const Contacts = artifacts.require("StudentStorage.sol")

module.exports = function (deployer){
    deployer.deploy(Contacts)
}
```

 执行编译部署 ：  truffle migrate --reset
### web3 一些简单api的应用例子 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
</head>
<body>
    <h1 id="title"> </h1>
    <input type="text" id="toAccout">
    <button id="send">转账</button>
   <script>
        var web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
        //  返回当前区块号。
        web3.eth.getBlockNumber().then(res=>{
            console.log('@返回当前区块号:',res)
        })
        // 返回当前所连接节点的链 ID。
        web3.eth.getChainId().then(res=>{
            console.log('@返回当前所连接节点的链ID:',res)
        })
        // 返回地址在指定区块的余额。
        web3.eth.getBalance('0x8395b80508Ea1e89d3ac12Cc5F0ad849F693268D').then(res=>{
            console.log('@返回地址在指定区块的余额:(默认单位为wei *18位)，  ',res)
            console.log("转换为ether ，",web3.utils.fromWei(res,"ether"))
            // js只能算 2*-53  到 2*53+1  ， 
            // 有bigInt  超大数值的运算  new BigNumber()  但浮点数超过20位 仍然会出错  ，   
            // 综上  ， 我们推荐让账号余额 以wei为单位 ， 仅在需要向用户展示才转换为其他单位
             //  0.1 + 0.2  在js中的计算  (0.1*1000 + 0.2*1000 )/1000   , wei单位的计算也差不多  
        })
        //  将交易发送到网络  转账
        // web3.eth.sendTransaction({
        //     from:"0x8395b80508Ea1e89d3ac12Cc5F0ad849F693268D",
        //     to:"0xD7Dc4BA778092Ec93d2FFBbd658c4A755A8FD24b",
        //     value:web3.utils.toWei('1','ether')
        // }).then(reject=>{
        //     console.log("交易",reject)
        // })

        // 授权 ： (新版本不再需要小狐狸交互授权) // 至少内网链不用
        // web3.eth.requestAccounts().then(res=>{
        //     console.log("授权账号 ： ",res)
        // })
        
        //  获取账号  返回节点所控制的账户列表。
        web3.eth.getAccounts().then(res=>{
            console.log("@返回节点所控制的账户列表。",res)

            title.innerHTML = '账号:'+res[0]  
        })

        // 交互转账 
        send.onclick = function(){
            console.log("dddd");
            web3.eth.sendTransaction({
                from:title.innerHTML,
                to:toAccout.value,
                value:web3.utils.toWei('1','ether')
            }).then(function (reject ){
                console.log("转完了")
            })
        }

   </script>
</body>
</html>
```

### 连接智能合约的例子 

``` html 
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
</head>

<body>

    <input type="text" id="myname">
    <input type="number" id="myage">
    <button id="add">add</button>
    <div id="list"></div>
    <script type="module">
        // if (typeof window.ethereum !== 'undefined') {
        //     console.log('MetaMask is installed!');
        // }else{
        //     alert("MetaMask is not installed")
        // }

        // var web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
        // 新版授权写法   
        let web3Provider;
        if (window['ethereum']) {
            console.log("存在");
            web3Provider = window.ethereum;
            try {
                // 请求用户授权
                await window.ethereum.enable();
            } catch (error) {
                // 用户不授权时
                console.error("User denied account access")
            }
        } else if (window.web3) {   // 老版 MetaMask Legacy dapp browsers...
            web3Provider = window.web3.currentProvider;
        } else {
            console.log("都不存在");
            web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
        }
        let web3 = new Web3(web3Provider);//web3就是你需要的web3实例

        // 先授权
        // let account = await web3.eth.requestAccounts()
        // console.log('account',account); 
        // 请求用户授权 解决web3js无法直接唤起Meta Mask获取用户身份
        // const enable = await ethereum.enable();
        // console.log(enable,11)

        //  获取账号  返回节点所控制的账户列表。
        let accounts = await web3.eth.getAccounts()
        console.log('@accounts', accounts);


        // ABI非常类似于APL(应用程序接口)，一种人类可读的代码接口表示。ABI 定义了用于与二进制合约交互的
        //     方法和结构，就像API所做的那样，只是在较低的级别上。 abi 以json格式存在  ，也就是build里面打包文件能够找到abi 以及adress
        // web3.eth.Contract(abi,address)  （在 build中abi 找到abi ， address）
        // 链接智能合约程序 
        const studentListStorage = await new web3.eth.Contract(
            [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "StudentList",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "age",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "age",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_age",
          "type": "uint256"
        }
      ],
      "name": "addList",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getList",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "age",
              "type": "uint256"
            }
          ],
          "internalType": "struct StudentListStorage.Student[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ]
            , "0xcAc27E10d1298f67878e82B1c26BfEEcC5514aA2")

        // console.log("@studentListStorage", studentListStorage);  // methods即是写的哪些方法  

        add.onclick = async function () {
            console.log(myname.value, myage.value)
            // send 从哪个账户付gas
            let res = await studentListStorage.methods.addList(myname.value, myage.value).send({
                from: accounts[0]
            })
            console.log("添加结果", res)
        }

        // 进入首页 ，获取列表 
        getList()

        async function getList(){ 
             // 报错  原因可能是个别状态未设置public ，经查证age未设置 ，重新编译部署   重新部署又是新地址（重新部署了两次  所以一共有三个地址 ） ，
            //   getList能用 ，但addList报错 ：Error: Transaction has been reverted by the EVM:
            // 未解决 
            console.log("@studentListStorage",studentListStorage)
            let res = await studentListStorage.methods.getList().call()
            console.log("@getList",res);
            list.innerHTML = res.map(item =>`
                <li>${item.id}---${item.name}--${item.age}</li>
            `)
            
        }
    </script>
</body>

</html>
```

### 脚本测试 
    mocha测试  需要学习

    truffle脚本

写一个truffle脚本   ./scripts/test.js : 

``` js //  测试脚本 


const Contacts = artifacts.require("StudentStorage.sol") 

module.exports = async function (callback){
    // console.log(1111);

    const studentStorage = await Contacts.deployed()

    await studentStorage.setData('kervin' ,18)
    let res =  await studentStorage.getData()
    console.log(res);
    console.log(await studentStorage.name());
    console.log(await studentStorage.age());  // 未设置public  不能访问
    callback()
}   


//  执行该脚本 

// truffle exec .\scripts\test.js
```


### 加密货币 
**什么叫做代币?**
代币可以在以太坊中表示任何东西
+ 在线平台中的信誉积分
+ 金融资产类似于公司股份的资产
+ 像美元一样的法定货币
+ 一盎司黄金
+ 及更多...

*ERC-20就是一套基于以太坊网络的标准代币发行协议。有了ERC-20，开发者们得以高效、可靠、低成本地创造专属自己项目的代币;我们甚至可以将ERC-20视为以大坊网络为早期区块链世界做出的最重要贡献*

https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md


**ERC-20的功能示例包括**
将代币从一个帐户转到另一个帐户.
获取帐户的当前代币余额
获取网络上可用代币的总供应量
批准一个帐户中一定的代币金额由第三方帐户使用

###   ERC-20 发行一个kervinToken代币 
1. kervinToken
<!--D:\studyClass\study-class\web3.0\code\contracts\KervinToken.sol  -->
``` sol
// SPDX-License-Identifier: GPL-3.0
// 源码遵循协议，MIT...
// pragma solidity ^0.8.0;// 限定solidity编译器版本 
pragma solidity >=0.6.0 <0.9.0;
import "openzeppelin-solidity/contracts/math/SafeMath.sol";



// 对标以太坊币 写 一个kervin币
contract KervinToken{

    // 代币协议  https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md
    using SafeMath for uint256; //为了uint256后面使用 sub ,add方法，扩展  // 引入SafeMath的时候 ，合约版本冲突 ，直接改了SafeMath源文件版本（不推荐）
    string public name = "KervinToken" ; // 代币名
    string public symbol = "KWT" ;  // 代币符号

    uint256 public decimals = 18 ;// 1kervintoken = 10 *decimals 代币单位
    uint256 public totalSupply;  // 代币总量 

    //mapping 类似键值对类型   没有object   事件/日志存储 永久存在链上
    mapping(address => uint256) public balanceOf ;   // 存放某个账号有多少kervinToken币  相当于数据存储

    mapping(address => mapping(address => uint256)) public allowance ;  // 定额   哪个账号授权给交易所多少额度

    constructor(){
        totalSupply = 1000000 * (10 ** decimals);
        // 部署账号
        balanceOf[msg.sender] = totalSupply ; //创建者拥有所有的代币
    }
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);

    function transfer(address _to, uint256 _value) public returns 
    (bool success){ // 转账
        require(_to!=address(0));    
        _tranfer(msg.sender, _to, _value);
        return true;
    }
    function _tranfer(address _from,address _to, uint256 _value) 
    internal { // internal 内部调用 
        require(balanceOf[_from]>=_value ); // require(true) 继续执行 否则抛错                       
        
        //从哪个账号发起的调用者
        balanceOf[_from]  = balanceOf[_from].sub(_value) ;  // 从发起人余额哪里减去这笔钱
        balanceOf[_to] = balanceOf[_to].add(_value); // 被发起人添加这笔钱

        // 触发事件 记录交易功能

        emit Transfer(_from, _to, _value); //// 协议要求必须触发
    }

    function approve(address _spender,uint256 _value) public returns
    (bool success){ // 委托转账
        // msg.sender 当前网页登陆的账号
        // _spender 第三方的交易所账户地址
        // _value 收取得钱数
        require(_spender!=address(0)); // 出错 gas会退回 报错   比 if else

        allowance[msg.sender][_spender] = _value;  // msg.sneder账号授权 _spender交易所   ——value钱 

        emit Approval(msg.sender, _spender, _value); // 协议要求必须触发
        return true ;

    }
    
    // 被授权得交易所调用
    function transferFrom(address _from ,address _to ,uint256 _value)
    public returns (bool success){
        // _from 某个放款账号 
        // _to 收款账号
        // msg.sender 

        require(balanceOf[_from] >= _value);
        require(allowance[_from][msg.sender]>=_value);

        allowance[_from][msg.sender] = allowance[_from][msg.sender];
        balanceOf[_from].sub(_value);
        _tranfer(_from, _to, _value);
        return true;
    }
   
    // 自动生成getter方法（public 对外提供）

    // truffle 调试  
    
    // truffle console   
    // const token =await  KervinToken.deployed() 
    //  token.name()  token.symbol()  token.totalSupply()
}



// 代币协议  https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md

// function name() public view returns (string)
// function symbol() public view returns (string)
// function decimals() public view returns (uint8)
// function totalSupply() public view returns (uint256)
// function balanceOf(address _owner) public view returns (uint256 balance)
// function transfer(address _to, uint256 _value) public returns (bool success)
// function transferFrom(address _from, address _to, uint256 _value) public returns (bool success)
// function approve(address _spender, uint256 _value) public returns (bool success)
// function allowance(address _owner, address _spender) public view returns (uint256 remaining)
// event  (address indexed _from, address indexed _to, uint256 _value)
// event Approval(address indexed _owner, address indexed _spender, uint256 _value)

```

 - 测试脚本 
 <!-- D:\studyClass\study-class\web3.0\code\scripts\test-tranfer.js -->
 ``` sol
 
const KervinToken = artifacts.require('KervinToken.sol') 

const fromWei = (bn) =>{
    return web3.utils.fromWei(bn,'ether')
}
const toWei = (number )=>{
    return web3.utils.toWei(number.toString(),'ether')
}

module.exports = async function (callback){ 
    const Kervintoken  = await KervinToken.deployed()

    let res1 = await Kervintoken.balanceOf('0xB12Fbbd20452a2A202bF046F70e499F068cC569A')

    console.log('第一个账号：',fromWei(res1));

    await Kervintoken.transfer("0x04551dFAf0A90Bc44a8d597dBF05Ce0b5F64b607",toWei(10000),{
        from:"0xB12Fbbd20452a2A202bF046F70e499F068cC569A"
    })
    
    let res2 = await Kervintoken.balanceOf('0x04551dFAf0A90Bc44a8d597dBF05Ce0b5F64b607')

    console.log('第二个账号：',fromWei(res2));

    callback()
}

// truffle exec .\script\test-tranfer.js

 ```

2. 交易所 
<!-- D:\studyClass\study-class\web3.0\code\contracts\Exchange.sol -->
``` sol 
// SPDX-License-Identifier: GPL-3.0
// 源码遵循协议，MIT...
pragma solidity >=0.6.0 <0.9.0;
import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import "./KervinToken.sol";


// 给 kervin币 写 一个交易所
contract Exchange{
    using SafeMath for uint256; //为了uint256后面使用 sub ,add方法，扩展  // 引入SafeMath的时候 ，合约版本冲突 ，直接改了SafeMath源文件版本（不推荐）

    //收费账号地址 
    address public feeAccount ;
    uint256 public feePercent ; //费率 
    address constant ETHER = address(0); // 
    mapping(address => mapping(address=> uint256)) public tokens ;  // 

    constructor(address _feeAccount ,uint256 _feePercent){
        feeAccount = _feeAccount ;
        feePercent = _feePercent ; 
    }

    event Deposit(address token , address user ,uint256 amount ,uint256 balance);  // 规定一个存款事件
    // 此mapping类似于 ： 
    // {
    //     "比特币地址":{ // 币的地址为key值 ，不容易搞错 ，相当于第一个address
    //         "A用户":100,
    //         "B用户":200,
    //     },
    //     "KWT地址":{
    //         "A用户":100,
    //         "B用户":300,
    //     }
    // }
    // 类似于银行买理财产品 ， 需要先将这笔钱打到交易所 ，
    // 存以太币
    function depositEther() payable public{  // payable 方法 由以太坊提供
        // msg.sender
        // msg.value 拿到转到交易所的钱数
        // tokens[以太坊地址][mag.sender] = tokens[以太坊地址][mag.sender]
        // .add(msg.value)  // 
        // ETHER 以太坊地址
        tokens[ETHER][msg.sender] = tokens[ETHER][msg.sender]
        .add(msg.value);

        emit Deposit(ETHER, msg.sender, msg.value, tokens[ETHER][msg.sender]);
    }
    // 存其他货币
    function depositToken(address _token ,uint256 _amount) public{
        // 调用某个方法强行 从你账号往当前交易所账号转钱
       require(_token !=  ETHER);
       require( KervinToken(_token).transferFrom(msg.sender,address(this),_amount));

        tokens[_token][msg.sender] = tokens[_token][msg.sender].add(_amount);   

        emit Deposit((_token), msg.sender, _amount, tokens[_token][msg.sender]);
    }


}

```

 - 测试脚本 
 <!--D:\studyClass\study-class\web3.0\code\scripts\test-deposit.js  -->
 ``` sol
//  存款测试 
const KervinToken = artifacts.require('KervinToken.sol') 

const Exchange = artifacts.require("Exchange.sol")

const ETHER_ADDRESS = 'ox0000000000000000000000000000000000000'
// 0x 后面 40个x

const fromWei = (bn) =>{
    return web3.utils.fromWei(bn,'ether')
}
const toWei = (number )=>{
    return web3.utils.toWei(number.toString(),'ether')
}

module.exports = async function (callback){ 
    const kervintoken  = await KervinToken.deployed()
    const exchange =await Exchange.deployed()
    const accounts =await web3.eth.getAccounts()

    // await exchange.depositEther({ // 测试委托转账测试 存以太币
    //     from: accounts[0], 
    //     value:toWei(10)
    // })
    // let res = await exchange.tokens(ETHER_ADDRESS,accounts[0]) // bigNumber 类型
    // console.log(fromWei(res))

     
    callback()
}

// truffle exec .\script\test-tranfer.js
 ```


### React 框架整合 

1. 创建react项目  create-react-app myapp 

- 改变truffle 生成build文件夹位置 ， 在truffle-config.js  : 
 "contracts_build_directory":"./src/build"

- redux的使用： 使用@reduxjs/toolkit 的 configureStore \ createSlice（提供异步action） 配合react-redux 来使用redux 管理公共状态
注意 ： create-react-app 创建的应用  ， react系列现在要全部cnpm 一遍更到最新 ，否则报错 

-
