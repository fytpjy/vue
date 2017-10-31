import Vue from 'vue'
import Mint from 'mint-ui'
Vue.use(Mint);

/**
 * 日期数据转换(年-月-日)
 */
export const formatDate = (datatime) => {
    if(datatime){
        let date = new Date(parseInt(datatime));
        let year=date.getFullYear();
        let month=date.getMonth()+1;
        let dateD=date.getDate();
        return year + "-" + month + "-" + dateD;
    }
}
/**
 * 日期数据转换(时-分-秒)
 */
export const formatTime = (datatime) => {
    let oldData=new Date(datatime);
    let date = new Date(parseInt(oldData));
    let hour=date.getHours();
    let minute=date.getMinutes();
    let second=date.getSeconds();
    return hour + ":" + minute + ":" + second;
}
/**
 * 日期数据转换(时-分)
 */
export const formatShortTime = (datatime) => {
    let oldData=new Date(datatime);
    let date = new Date(parseInt(oldData));
    let hour=date.getHours();
    let minute=date.getMinutes();
    return hour + ":" + minute;
}