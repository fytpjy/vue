 <template>
    <div class="alet_container">
	    <section class="tip_text_container">
            <!--<div class="tip_icon">-->
                <!--<span></span>-->
                <!--<span></span>-->
            <!--</div>-->
            <p class="tip_text_title">提示</p>
            <p class="tip_text">{{alertText}}</p>
            <div class="confrim" @click="closeTip">确认</div>
        </section>
    </div>
</template>

<script>
    export default {
    	data(){
            return{
                positionY: 0,
                timer: null,
            }
        },
        mounted(){

        },
        props: ['alertText'],
        methods: {
            closeTip(){
                this.$emit('closeTip')
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../style/_variables.scss";
  @import '../../style/_mixins.scss';
	@keyframes tipMove{
       0%   { transform: scale(1) }
       35%  { transform: scale(.8) }
       70%  { transform: scale(1.1) }
       100% { transform: scale(1) }
    }
    .alet_container{
    	  position: fixed;
    	  top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 200;
    }
    .tip_text_container{
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -6rem;
        margin-left: -6rem;
        width: 12rem;
        animation: tipMove .4s ;
        background-color: rgba(255,255,255,1);
        box-shadow: 0 0 0.5rem rgba(0,0,0,0.2);
        border: 1px;
        padding-top: .6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 1px;
        border-radius: 0.25rem;
        .tip_text_title{
            font-size: 0.75rem;
            line-height: 2;
            color: $dark-gray;
            font-weight: 600;
            letter-spacing: 0.1rem;
        }
        .tip_text{
            text-align: center;
            padding: 0.5rem 0.4rem 0;
            font-size: 0.65rem;
            line-height: 2;
            color: $gray;
          }
        .confrim{
            /*@include sc(.8rem, #fff);*/
            font-weight: bold;
            margin-top: .8rem;
            background-color: #4cd964;
            width: 100%;
            text-align: center;
            font-size: 0.7rem;
            color: $white;
            line-height: 1.8rem;
            border: 1px;
            border-bottom-left-radius: 0.25rem;
            border-bottom-right-radius: 0.25rem;
        }
    }

</style>
