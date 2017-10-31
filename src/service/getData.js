import fetch from '../config/fetch'
import {baseUrl,hostUrl,authorizationUrl} from '../config/env'

/**
 错误日志
 **/
export const setErrorLog = (type,user_id,soft,os,messages) => fetch('POST', authorizationUrl, '/m/xlog',{
    type,
    user_id,
    soft,
    os,
    messages
},"axios");

/**
	获取微信用户信息
**/
//export const getUserInfo = () => fetch('POST','','/WeChatRelevant/Common/userInfo',{},"axios");

/**
	获取微信授权信息
**/
export const wxConfigData = () => fetch('POST',authorizationUrl,'/WeChatRelevant/Common/sharePrerogativeWechat',{},"axios");

/**
	已订阅微课列表
**/
export const myPlanList = (type) => fetch('POST','','/VKclass//Classroom/home',{
    type
},"axios");

/**
拆书包列表
 **/
export const packlist = (pb_id,plan_id,page) => fetch('POST', '','/VKclass/Classroom/packList',{
    pb_id,
    plan_id,
    page,
},"axios");

/**
 往期历史
 **/
export const bookList = (plan_id,page) => fetch('POST', '', '/VKclass/Classroom/bookList',{
    plan_id,
    page,
},"axios");

/**
 拆书包详情
 **/
export const packInfo = (id,plan_id) => fetch('POST', '', '/VKclass/Classroom/packInfo',{
    id,
    plan_id
},"axios");

/**
 拆书包签到
 **/
export const checkIn = (pb_id,id) => fetch('POST', '', '/VKclass/Classroom/checkIn',{
    pb_id,
    id
},"axios");


/**
 用户信息
 **/
export const userInfo = () => fetch('POST', '', '/VKclass/Classroom/myInfo',{},"axios");

/**
 意见回馈
 **/
export const saveMsg = (msg,lianxi) => fetch('POST', '', '/VKclass/Classroom/saveMsg',{
    msg,
    lianxi
},"axios");


/**
 计划列表
 **/
export const planList = (type,plan_type,page) => fetch('POST', '', '/VKclass/Classroom/hotPlanList',{
    type,
    plan_type,
    page
},"axios");

/**
 banner列表
 **/
export const bannerList = () => fetch('POST', '', '/VKclass/Classroom/bannerList',{},"axios");

/**
 是否已申请推广
 **/
export const isJoinDistribution = () => fetch('POST', '', '/VKclass/Classroom/isJoinDistribution',{

},"axios");

/**
 推广计划列表
 **/
export const getSourceList = (page) => fetch('POST', '', '/VKclass/Classroom/getSourceList',{
    page
},"axios");

/**
 获取推广url
 **/
export const getChannelUrl = (source_id) => fetch('POST', '', '/VKclass/Classroom/getChannelUrl',{
    source_id
},"axios");

/**
 获取推广url
 **/
export const getGeneralizeInfo = (source_id) => fetch('POST', '', '/VKclass/Classroom/getGeneralizeInfo',{
    source_id
},"axios");

/**
 获取推广成功列表
 **/
export const generalizeOrders = (page) => fetch('POST', '', '/VKclass/Classroom/GeneralizeOrders',{
    page
},"axios");

/**
 获取验证码
 **/
export const sendMsg = (phone) => fetch('POST', authorizationUrl, '/Sms/sendMsg',{
    phone
},"axios");

/**
 校验code码
 **/
export const checkCode = (phone,code) => fetch('POST', authorizationUrl, '/MobileLogin/checkCode',{
    phone,
    code
},"axios");

/**
 申请推广员
 **/
export const addDistributionUser = (real_name,mobile) => fetch('POST', '', '/VKclass/Classroom/addDistributionUser',{
    real_name,
    mobile,
},"axios");

/**
 用户推广信息
 **/
export const getUserOverview = () => fetch('POST', '', '/VKclass/Classroom/userOverview',{
},"axios");

/**
 用户收益信息
 **/
export const getDepositEarnings = () => fetch('POST', '', '/VKclass/Classroom/depositEarnings',{

},"axios");

/**
 用户收益信息
 **/
export const getEarningsList = (page) => fetch('POST', '', '/VKclass/Classroom/earningsList',{
    page
},"axios");

/**
 提现
 **/
export const applyWithdraw = (money,real_name) => fetch('POST', '', '/VKclass/Classroom/applyWithdraw',{
    money,
    real_name
},"axios");

/**
 获取赠送记录
 **/
export const getPresentRecord = (page,limit,type) => fetch('POST', '', '/VKclass/Classroom/benefitList ',{
    page,
    limit,
    type
},"axios");

/**
 * 特权支付"
**/
export const useBenefitsPay = (pay_source,pay_type,pay_data,pay_os,total_fee,pay_fee,trade_type,coins) => fetch('POST', '', '/VKclass/Classroom/accountPay',{
    pay_source,
    pay_type,
    pay_data,
    pay_os,
    total_fee,
    pay_fee,
    trade_type,
    coins
},"axios");

/**
 * 特权兑换计划列表"
 **/
export const getBenefitsPlanList = (page,limit) => fetch('POST', '', '/VKclass/Classroom/supportBenefitPlan',{
    page,
    limit
},"axios");

/**
 * 获取特权详情
 **/
export const getBenefitsInfo = (code,about_id) => fetch('POST', '', '/VKclass/Classroom/benefitInfo',{
    code,
    about_id,
},"axios");

/**
 * 领取特权
 **/
export const receiveBenefit = (code,about_id) => fetch('POST', '', '/VKclass/Classroom/receiveBenefit',{
    code,
    about_id
},"axios");

/**
 * 特权分享后记录状态
 **/
export const setBenefitStatus = (code,about_id) => fetch('POST', '', '/VKclass/Classroom/setBenefitStatus',{
    code,
    about_id
},"axios");

/**
 * 计划学习数据
 **/
export const getLearnSpace = (plan_id) => fetch('POST', '', '/VKclass/Classroom/learnSpace',{
    plan_id
},"axios");

/**
 * 学习拆书包目录
 **/
export const getStartLearnPage = (plan_id) => fetch('POST', '', '/VKclass/Classroom/startLearnPage',{
    plan_id
},"axios");


/**
 * 学习拆书包列表
 **/
export const getLearnPackList = (plan_id) => fetch('POST', '', '/VKclass/Classroom/learnPackList',{
    plan_id
},"axios");

/**
 * 签到卡片信息
 **/
export const getCheckCardInfo = (plan_id,share_uid) => fetch('POST', '', '/VKclass/Classroom/checkCardInfo',{
    plan_id,
    share_uid
},"axios");

/**
 * 学习拆书包列表详情
 **/
export const getPackDetail = (plan_id,pack_id) => fetch('POST', '', '/VKclass/Classroom/packDetail',{
    plan_id,
    pack_id
},"axios");

/**
 * 阅读时长
 **/
export const packReadTime = (pack_id,read_time) => fetch('POST', '', '/VKclass/Classroom/packReadTime',{
    pack_id,
    read_time
},"axios");

/**
 * 分享成功后签到
 **/
export const getCheckIn = (id,pb_id,plan_id) => fetch('POST', '', '/VKclass/Classroom/checkIn',{
    id,
    pb_id,
    plan_id
},"axios");

/**
 * 获取奖学金规则数据
 **/
export const getTrainingConfig = (plan_id) => fetch('POST', '', '/VKclass/Classroom/trainingConfig',{
    plan_id
},"axios");