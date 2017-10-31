<template>
    <div class="loader">
        <div class="loadBox">
            <div class="borLine"></div>
            <img class="scale" src="../../images/ys-logo.jpg" alt="гаЪщ">
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    @keyframes rotate {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        50% {
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes scale {
        50% {
            opacity: 0.5;
            -webkit-transform: scale(0.8);
            transform: scale(0.8);
        }
        100% {
            opacity: 0.8;
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }
    .loader {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0,0,0,0.6);
        text-align: center;
        z-index: 150;
    }
    .loadBox{
        width: 4rem;
        height: 4rem;
        padding: 0.4rem;
        box-sizing: border-box;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
    }
    .scale {
        -webkit-animation: scale 2s linear infinite;
        animation: scale 2s linear infinite;
    }
    .loadBox img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .loadBox .borLine {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: url("../../images/borLine.png") center center no-repeat;
        background-size: 100% 100%;
        box-sizing: border-box;
        -webkit-animation: rotate 1.5s linear infinite;
        animation: rotate 1.5s linear infinite;
    }
</style>
