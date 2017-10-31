<template>
    <section id='foot_guide'>
        <section @click = "gotoAddress('/discovery')" class="guide_item discovery" :class="$route.path.indexOf('discovery') !== -1? 'active' : ''">
            <i></i>
            <span>首页</span>
        </section>
        <section @click = "gotoAddress('/study')" class="guide_item study" :class="$route.path.indexOf('study') !== -1? 'active' : ''">
            <i></i>
            <span>学习</span>
        </section>
        <section @click = "gotoAddress('/myself')" class="guide_item myself" :class="$route.path.indexOf('myself') !== -1? 'active' : ''">
          <i></i>
          <span>我的</span>
        </section>
    </section>
</template>

<script>
    import {cnzzEvent} from '../../config/mUtils'

    export default {
    	data(){
            return{

            }
        },
        created(){

        },
        mounted(){

        },
        computed: {
        },
        methods: {
        	gotoAddress(path){
                let clickName="";
                if(path=="/study"){
                    clickName="微课-学习"
                }else if(path=="/discovery"){
                    clickName="微课-首页"
                }else{
                    clickName="微课-我的"
                }
                cnzzEvent({
                    category: clickName,
                    action: "点击事件",
                    label: "1",
                    value: "",
                });
        		this.$router.push(path)
        	}
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    #foot_guide{
        background-color: #494949;
        position: fixed;
        z-index: 100;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
        width: 100%;
        height: 2.5rem;
      padding: 0.2rem 0;
      box-sizing: border-box;
    }
    .guide_item{
    	flex: 1;
    	display: flex;
    	text-align: center;
    	flex-direction: column;
    	align-items: center;
      	color: #fff;
      	span{
        	font-size: 0.55rem;
		}
      	i{
        	display: block;
        	width: 1.25rem;
        	height: 1.1rem;
        	margin-bottom: 0.1rem;
        	background: url("../../images/tabbar/tabbar.png") no-repeat;
        	background-size: auto 100%;
      	}
      	&.active{
        	color: #ffbf00;
      	}
      	&.study{
      		position: relative;
        	i{
          		background-position: 20% top;
        	}
        	&.active{
          		i{
            		background-position: left top;
          		}
        	}
        	&:before{
			    content: "";
			    display: block;
			    width: 1px;
			    height: 1.25rem;
			    background: -webkit-linear-gradient(#686767,#7e7c7c,#646464);
				background: -o-linear-gradient(#686767,#7e7c7c,#646464);
				background: -moz-linear-gradient(#686767,#7e7c7c,#646464);
				background: linear-gradient(#686767,#7e7c7c,#646464);
			    position: absolute;
			    top: 50%;
			    left: 0;
			    margin-top: -0.625rem;
			}
        	&:after{
			    content: "";
			    display: block;
			    width: 1px;
			    height: 1.25rem;
			    background: -webkit-linear-gradient(#686767,#7e7c7c,#646464);
				background: -o-linear-gradient(#686767,#7e7c7c,#646464);
				background: -moz-linear-gradient(#686767,#7e7c7c,#646464);
				background: linear-gradient(#686767,#7e7c7c,#646464);
			    position: absolute;
			    top: 50%;
			    right: 0;
			    margin-top: -0.625rem;
			}
      	}
      	&.discovery{
        	i{
          		background-position:60% top ;
        	}
    		&.active{
          		i{
            		background-position:40% top ;
          		}
        	}
      	}
      	&.myself{
        	i{
          		background-position: right top;
        	}
        	&.active{
          		i{
            		background-position:80% top ;
          		}
        	}
      	}
    }
</style>
