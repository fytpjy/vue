 <template>
     <div class="indicator">
         <div class="indicator-wrapper">
             <span class="indicator-spin">
                 <div class="indicator-img" style="width: 32px; height: 32px;">
                     <img src="../../images/loading-img.gif">
                 </div>
             </span>
             <span class="indicator-text" style="">图片生成中...</span>
         </div>
         <div class="indicator-mask"></div>
     </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    .indicator{
        transition: opacity .2s linear;
    }
    .indicator-wrapper{
        padding: 20px;
        z-index: 200;
        top: 50%;
        left: 50%;
        position: fixed;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        box-sizing: border-box;
        text-align: center;
    }
    .indicator-spin{
        display: inline-block;
        text-align: center;
    }
    .indicator-img{
        width: 32px;
        height: 32px;
        position: relative;
    }
    .indicator-img img{
        width: 100%;
    }
    .indicator-text{
        display: block;
        color: #fff;
        text-align: center;
        margin-top: 10px;
        font-size: 16px;
    }
    .indicator-mask{
        top: 0;
        left: 0;
        position: fixed;
        width: 100%;
        height: 100%;
        opacity: 1;
        background: #fff;
        z-index: 199;
    }
</style>
