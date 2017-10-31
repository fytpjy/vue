<template>
    <div>
        <router-link :to="{path: '/discovery'}">
            <div class="goHome">
                <p><img class="homeImg" src="../../images/home.png" alt="">回到首页</p>
            </div>
        </router-link>
    </div>
</template>
<style lang="scss" rel="stylesheet/scss">
    .goHome{
    	box-sizing: border-box;
    	background: #ccc;
    	border-radius: 2rem;
        font-size: 0.6rem;
        color: #fff;
        padding: 0.375rem 0;
        padding-right: 2rem;
        overflow: hidden;
        z-index: 100;
        position: fixed;
        bottom: 6rem;
        right: -1.5rem;
        p{
            height: 0.75rem;
            line-height: 0.75rem;
            padding-left: 1.5rem;
            position: relative;
            .homeImg{
            	width: 0.75rem;
                height: 0.75rem;
                position: absolute;
                left: 0.5rem;
                top: 0;
            }
        }
    }
</style>