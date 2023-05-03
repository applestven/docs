<template>
    <div class="home-containter">
        <div class="directory">
            <h1>
                欢迎回来！
            </h1>
        </div>
        <div class="project">
            <!-- <div v-for="item in projectList" :key="item.key">
                <div class="item-project" @mouseover="(e) => { changeFlag(1, 1, item.key) }"
                    @mouseleave="changeFlag(0, 1, item.key)">
                    THREEjs
                </div>
                <ul v-if="item.flag" style="text-align: center;list-style: none;" @mouseleave="changeFlag(0, 2, item.key)">
                    <router-link v-for="(items, indexs) in item.projectItem" :key="indexs" class="item-project"
                        style="background-color: #2C3E50;border-radius: 0%;"
                        :to="item.projectItem[0]['toName']">{{ item.projectItem[0]['projectName'] }}</router-link>
                </ul>
            </div> -->
            <div class="proItme">
                <div class="item-project" @click="clickTo('/homes.html')">网络日志(Blog)</div>
            </div>
            <div class="proItme">
                <div class="item-project" @click="showItem(200)">项目</div>
            </div>
        </div>
        <!--  -->
        <div class="project" style="justify-content:center;width: 90%;" >
            <div v-for=" item in projectLists" :key="item.key" :class="{proItme:true,animated:true,rotateOut:!item.showFlag ,changed:item.showFlag,opacityNone:true}" style="width: 8rem;margin-left: 1.5rem;margin-top: 2rem;">
                <div class="item-project" @click="clickTo(item.url)">{{ item.name}} </div>
            </div>
        </div>
       
    </div>
</template>

<script>
export default{
    data(){
        return{
            projectList:[
                {
                    key:0,
                    showFlag:false,
                    name:"图片自动裁剪",
                    url:'http://43.139.236.50/#/'
                },
                {
                    key:1,
                    showFlag:false,
                    name:"vr看房/景",
                    url:'/case/threejsOne/'
                },
                {
                    key:2,
                    showFlag:false,
                    name:"网络日志3(Blog)",
                    url:'/homes.html'
                },
                
            ],
            projectLists:[], // 用来做动画添加    
            showFlag:false,
            flag:0,
        }
    },
    methods: {
        async showItem(timer){ // timer 动画间隔时间
            if(this.projectLists.length === this.projectList.length ){ // 清除页面
                for(const key in this.projectLists){ // 从这里为动画执行添加item
                    
                    // this.projectList[key].showFlag = true ;
                    this.$set(this.projectLists , key ,{...this.projectList[key],showFlag:false  } )
                    await this.waitTime(timer)
                    if(key == this.projectLists.length-1){
                        this.projectLists = []
                    }
                }
            }else{
                // this.showFlag = !this.showFlag ; 
                this.projectLists = this.projectList
                for(const key in this.projectList){ // 从这里为动画执行添加item
                    await this.waitTime(timer)
                    this.$set(this.projectLists , key ,{...this.projectList[key],showFlag:true } )
                    console.log('key',key, this.projectLists[key].showFlag )
                }
            }
            
        },
        waitTime(timer){
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(true)
                }, timer);
            })
        },
        clickTo(url){
            window.location.href = url
        },
        // changeFlag(isflag, evenType, key) {
        //     console.log(isflag, evenType);
        //     if (!isflag && evenType == 1) {
        //         setTimeout(() => {
        //             // flag.value = isflag
        //             this.projectList[key].flag = isflag
        //         }, 1000);
        //     } else {
        //         console.log("立即执行");
        //         this.projectList[key].flag = isflag
        //     }
        // }
    },
    mounted() {
       
    },
}
</script>

<style lang="css" scoped>
/* 动画动作 */
.animated{
    transition: all 1s ease;
}
.changed{
    /* transform: rotate(270deg); */
    /* transform:  rotateY(360deg); */
    opacity: 1 !important;
}
.rotateOut{
    /* transform:  rotateX(360deg) !important; */
    /* opacity: 0 !important; */

}
.opacityNone{
    opacity: 0 ;
}

.home-containter {
    width: 100%;
    /* margin: auto auto; */
    height: 100%;
    padding: 20px;
}


.home-containter .directory {
    height: 10%;
    color: #f5deb3;
    text-align: center;
}

.home-containter .project {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

}


.home-containter .project .item-project {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 60px;
    border: 1px solid #fff;
    color: #fff;
    border-radius: 0.5rem;
    /* background-color: rgb(0 0% 10% , .1); */
    backdrop-filter: blur(8px);
    /* 偏黑背景 */
    /* background-color: rgb(85 0 0 / 46%); */
}

.home-containter .project .item-project .animate-list {
    transition: all 1s ease;
}

.proItme{
    width:100%;display: flex;justify-content: center;
    margin-top: 5rem;
}
</style>