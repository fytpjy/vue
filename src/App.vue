<template>
	<transition name="router-fade" mode="out-in">
    		<router-view></router-view>
    </transition>
</template>

<script>
import {getCookie,wxConfig} from './config/mUtils'
import {baseUrl} from './config/env'
  	export default {
  		beforeCreate(){
  		  if(getCookie("HTTP_X_YS_UID") && getCookie("HTTP_X_YS_USER_TOKEN")){
//  		      this.$router.push({path:'/groups', query:{from:"index"}})
  		  }else{
//  		    location.href = "http://zaia.fengwo.com/FwhWeChat/entry?msg=WeChatAuth&callback=http://localhost:85"
//            location.href = "http://readooapi.youshu.cc/FwhWeChat/entry?msg=WeChatAuth&callback=http://m.youshu.cc/class_room"
  		  }
  		},
  	}

</script>

<style lang="scss">
  	@import 'style/_common.scss';
	/*.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .1s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}*/
</style>
