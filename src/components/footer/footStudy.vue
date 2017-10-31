<template>
    <section id='study_guide'>
        <section @click = "gotoAddress('/studySys')" class="study_item study_index" :class="$route.path.indexOf('studySys') !== -1? 'active' : ''">
            <i></i>
            <span>学习</span>
        </section>
        <section @click = "gotoAddress('/planSys')" class="study_item study_plan" :class="$route.path.indexOf('planSys') !== -1? 'active' : ''">
            <i></i>
            <span>计划</span>
        </section>
        <section @click = "gotoAddress('/myselfSys')" class="study_item study_self" :class="$route.path.indexOf('myselfSys') !== -1? 'active' : ''">
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
                if(path=="/studySys"){
                    clickName="教务系统-学习"
                }else if(path=="/planSys"){
                    clickName="教务系统-计划"
                }else{
                    clickName="教务系统-我的"
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

<style type="text/scss" lang="scss" rel="stylesheet/scss" scoped>
    #study_guide{
        background-color: #fff;
        position: fixed;
        z-index: 80;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        box-shadow: 0 0 1px rgba(0,0,0,.1);
        width: 100%;
        height: 2.5rem;
        box-sizing: border-box;
        zoom: 1;
        &:after{
            content: '';
            height: 0;
            clear: both;
            display: block;
            visibility: hidden;
        }

        .study_item{
            float: left;
            color: #999;
            display: block;
            width: 33.33%;
            text-align: center;
            padding-top: 0.2rem;
            span{
                font-size: 0.6rem;
                display: block;
            }
            i{
                display: block;
                width: 1.25rem;
                height: 1.25rem;
                margin: 0 auto;
            }
            &.active{
                color: #16a15e;
            }
        }
        .study_index{
            i{
                background: url("../../images/educationalSystem/icon_study1.png") center center no-repeat;
                background-size: auto 100%;
            }
            &.active i{
                background: url("../../images/educationalSystem/icon_study2.png") center center no-repeat;
                background-size: auto 100%;
            }
        }
        .study_plan{
            i{
                background: url("../../images/educationalSystem/icon_plan1.png") center center no-repeat;
                background-size: auto 100%;
            }
            &.active i{
                background: url("../../images/educationalSystem/icon_plan2.png") center center no-repeat;
                background-size: auto 100%;
            }
        }
        .study_self{
            i{
                background: url("../../images/educationalSystem/icon_self1.png") center center no-repeat;
                background-size: auto 100%;
            }
            &.active i{
                background: url("../../images/educationalSystem/icon_self2.png") center center no-repeat;
                background-size: auto 100%;
            }
        }
    }
</style>
