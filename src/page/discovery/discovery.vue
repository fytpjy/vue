<template>
    <div style="position: relative;" class="discovery">
        <div class="banner">
            <mt-swipe :auto="3000" class="bannerImg">
                <mt-swipe-item v-for="item in bannerListData">
                    <img :src="item.img" @click="jumpToBanner(item.href)">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="iconBox clear">
            <div class="icon left" v-for="item in iconData" :style="{width:iconWidth}">
            	<div class="main" @click="jumpToPlanList(item.type)">
            		<img :src="item.img"/>
            		<p class="title">{{item.title}}</p>
            	</div>
            </div>
        </div>
        <div class="hotCourse">
            <div class="titleBox">
                <p class="title">热门课程</p>
                <p class="moreBox">
                    <span class="more" @click="jumpToPlanList('')">查看更多<i class="icon-right"></i></span>
                </p>
            </div>
            <div class="courseList" v-if="planlistData.length>0">
                <div class="courseBox" v-for="item in planlistData" @click="jumpTo(item)">
                    <div class="img felt">
                        <img :src="item.medium_img" alt="">
                    </div>
                    <div class="cont">
                        <p class="courseName">
                            <span class="title">{{item.plan_name}}</span>
                        </p>
                        <p class="intro">{{item.plan_desc}}</p>
                        <p class="price" v-if="item.is_join==0">
                            <span class="subSum">{{item.join_nums}}人订阅</span>
                            <span class="planPrice">{{item.money_type}}</span>
                        </p>
                        <p class="joined" v-else>
                            <span class="subSum">{{item.join_nums}}人订阅</span>
                            <span class="planJioned">已订阅</span></p>
                    </div>
                </div>
            	<div class="allBox">
                    <span class="all" @click="jumpToPlanList('')">查看全部<i class="icon-right"></i><i class="icon-right two"></i></span>
                </div>
            </div>
            <div class="Default" v-else>
                <div class="defaultImg">
                    <img src="../../images/study/default.png">
                    <p>暂无计划内容</p>
                </div>
            </div>
        </div>
        <foot-guide></foot-guide>
        <transition name="router-slid">
            <router-view></router-view>
        </transition>
        <loading v-if="loading"></loading>
    </div>
</template>

<script>
    import {Indicator,MessageBox} from 'mint-ui';
    import {planList,bannerList} from '../../service/getData'
    import {loadMore} from '../../components/common/mixin'
    import loading from '../../components/common/loading'
    import footGuide from '../../components/footer/footGuide'
    import {cnzzCount,setStore} from '../../config/mUtils'

    export default {
    data(){
        return{
            planlistData:[],//计划列表数据
            bannerListData:[],//banner图列表
            iconData:[],//图标数据
            iconWidth:'',//图标宽度
            loading:false,//是否显示加载
        }
    },
    //实时监测变化触发函数
    computed:{
    },
    components: {
        footGuide,loading
    },
    created(){

    },
    mixins: [loadMore],
    //钩子函数
    mounted(){
        this.$nextTick(function(){
            //开启统计
            cnzzCount(1260093070)   //传递CNZZ统计ID
            this.initData();
        })

    },
    //方法
    methods:{
        //初始化基本数据
        async initData(){
            this.loading=true;
            //计划列表
            planList('','hot','1').then(res => {
                if(res.code==1){
                    if(res.data.length>10){
                        for(var i=0;i<10;i++){
                            if(res.data[i].is_join==0){
                                this.planlistData=this.planlistData.concat(res.data[i]);
                            }
                        }
                    }else{
                        this.planlistData=res.data;
                    }
                }else{
                    MessageBox('错误提示', res.msg);
                }
            });
            //轮播图
            bannerList().then(res => {
                if(res.code==1){
                    this.bannerListData=res.data;
                    //图标
                    this.iconData=res.icons;
                    //图标宽度
                    this.iconWidth=100/res.icons.length+'%';
                }else{
                    MessageBox('错误提示', res.msg);
                }
                this.loading=false;//结束加载动画
            });
        },
        //计划列表跳转
        jumpToPlanList:function(name){
        	this.$router.push({path:'/planList',query:{planType:name}});
        },
        //计划跳转
        jumpTo:function(item){
            if(item.is_join==1 && !this.isStartClass(item.start_time)){
                MessageBox('提示', "课程还没有开课!");
            }else if(item.is_join==1 && item.is_training_camp==1){
                this.$router.push({path:'/studySys', query:{plan_id:item.id}});
                setStore("plan_id",item.plan_id);
            }else if(item.is_join==1 && item.is_training_camp==0){
                this.$router.push({path:'/packList', query:{plan_id:item.id}});
            }else{
                if(item.plan_info_url.indexOf("?")>=0){
                    window.location.href=item.plan_info_url+"&utm_source=weike&utm_medium=menu_faxian";
                }else{
                    window.location.href=item.plan_info_url+"?utm_source=weike&utm_medium=menu_faxian";
                }
            }
        },
        //判断课程是否开课
        isStartClass:function (date) {
            var now = Date.parse(new Date());
            var d = Date.parse(date.replace(/\-/g, '\/'));
            if (now > d) {
                return true;
            }else {
                return false;
            }
        },
        //banner图跳转
        jumpToBanner:function(url){
            window.location.href=url;
        },
    }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  	@import "../../style/_variables.scss";
  	@import "../../style/_mixins.scss";
  	@import "../../style/_routerChange.scss";
  	@import "../../style/discovery/_banner.scss";
  	@import "../../style/discovery/_titleBox.scss";
  	@import "../../style/discovery/_discovery.scss";
  	@import "../../style/study/_Default.scss";
  	.discovery{
      	background: $white;
  	}
  	.joined{
      	font-size: .7rem;
      	line-height: 1rem;
      	color: #9a9a9a;
      	display: flex;
	  	.subSum{
	     	width: 60%;
	     	margin: auto 0;
	     	font-size: .6rem;
	      	line-height: 1;
	      	color: #666;
	      	overflow: hidden;
	      	text-overflow: ellipsis;
	      	white-space: nowrap;
	      	word-wrap: normal;
	      	display: block;
	      	text-align: left;
	  	}
  		.planJioned{
      		width: 40%;
      		text-align: right;
  		}
  	}
  	.iconBox{
      	background: $white;
      	width: 100%;
      	height: 3.6rem;
      	padding: 0.5rem 0 0.4rem;
      	margin: 0 auto;
      	text-align: center;
      	border-bottom: 1px solid #ccc;
      	border-top: 1px solid #ccc;
      	.icon{
      		.main{
      			img{
      				width: 1.45rem;
      				height: 1.45rem;
      			}
      			.title{
      				font-size: 0.65rem;
      				color: $gray;
      			}
      		}
      	}
  	}
  	.hotCourse{
  	  	.courseList{
  	  		.allBox{
  	  			height: 3rem;
			    margin: auto 0;
			    background: #f2f2f2;
			    text-align: center;
			    .all{
			      padding-right: 1rem;
			      font-size: 0.75rem;
			      line-height: 2.5rem;
			      color: #ccc;
			      position: relative;
			    }
			    .icon-right{
			      position: absolute;
			      top: 50%;
			      right: 0;
			      width: 1rem;
			      height: 1rem;
			      margin-top: -.5rem;
			      display: block;
			      background: url("../../images/icon-right-gray.png") center center no-repeat;
			      background-size: auto 75%;
			      color: #999;
			    }
			    .two{
			    	right: -0.4rem;
			    }
			}
  	  	}	
  	}
</style>
