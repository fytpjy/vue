<template>
    <div>
        <div class="feedback">
            <div class="textarea">
                <textarea id="textarea" placeholder="请填写您的反馈意见"  v-model="content"></textarea>
            </div>
            <p class="contactWay">
                <input v-model="contactWay" type="text" placeholder="请留下您的邮箱或其他联系方式，有书会尽快提供反馈">
            </p>
        </div>
        <mt-button class="subBtn" type="primary" size="large" @click="sendBtn">提交反馈</mt-button>
        <alert-tip v-if="showAlert" @closeTip="showAlert = false" :alertText="alertText"></alert-tip>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {Indicator,MessageBox} from 'mint-ui';
    import {saveMsg} from '../../service/getData'
    import alertTip from '../../components/common/alertTip'
    import {cnzzCount} from '../../config/mUtils'
    export default {
        data(){
        return {
            content:"",//内容
            contactWay:"",//联系方式
            showAlert: false,//是否显示弹出框
            alertText: null,//弹出框信息
        }
    },
    created(){

    },

    mounted(){
        this.$nextTick(function(){
            //开启统计
            cnzzCount(1260093070)   //传递CNZZ统计ID
        })
    },

    components:{
        alertTip
    },

    computed:{},

    methods:{
        sendBtn: function(){
            let that = this;
            let msg = that.content,  //内容
                lianxi=that.contactWay;//联系方式
            if (!msg) {
                this.showAlert = true;
                this.alertText = '请填写您的反馈意见';
                return
            }else if(!lianxi){
                this.showAlert = true;
                this.alertText = '请输入您的邮箱或其他联系方式';
                return
            }
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            saveMsg(msg,lianxi).then(res => {
                Indicator.close();
                if(res.code==1){
                    that.$router.go(-1);
                }else{
                    MessageBox('错误提示', res.msg);
                }
            })
        }
    },
    }
</script>

<style lang="scss" rel="stylesheet/scss" spend>
  @import "../../style/_variables.scss";
  @import "../../style/_mixins.scss";
  .subBtn{
    background-color: #3dd571;
    font-size: 0.75rem;
    height: 2rem;
    line-height: 2rem;
    width: 88%;
    margin: 0 auto;
  }
  :-moz-placeholder{
    color: $light-gray;
  }
  ::-moz-placeholder{
    color: $light-gray;
  }
  :-ms-input-placeholder{
    color: $light-gray;
  }
  ::-webkit-input-placeholder{
    color: $light-gray;
  }
  .feedback{
    background: $white;
    margin-bottom: 0.5rem;
    .contactWay{
      width: 100%;
      background: $white;
      height: 2.5rem;
      text-align: center;
      color: $light-gray;
      border-top: 1px solid #e6e6e6;
      border-bottom: 1px solid #e6e6e6;
      @include flex();
      input{
        margin: auto 0;
        width: 100%;
        color: $gray;
        font-size: 0.65rem;
        padding: 0 0.75rem;
      }
    }
    .textarea{
      padding: 0.75rem 0.75rem 0.25rem;
      textarea{
        width: 100%;
        resize: none;
        height: 6rem;
        max-height: 10rem;
        overflow-y:scroll;
        font-size: 0.65rem;
        line-height:1rem;
        word-wrap: break-word;
        color: $gray;
      }
    }
  }
</style>
