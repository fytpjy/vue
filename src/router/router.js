import App from '../App'

const study = r => require.ensure([], () => r(require('../page/study/study')), 'study')
const packList = r => require.ensure([], () => r(require('../page/packList/packList')), 'packList')
const packDetail = r => require.ensure([], () => r(require('../page/packDetail/packDetail')), 'packDetail')
const packHistory = r => require.ensure([], () => r(require('../page/packHistory/packHistory')), 'packHistory')
const discovery = r => require.ensure([], () => r(require('../page/discovery/discovery')), 'discovery')
const planList = r => require.ensure([], () => r(require('../page/planList/planList')), 'planList')
const myself = r => require.ensure([], () => r(require('../page/myself/myself')), 'myself')
const shareCard = r => require.ensure([], () => r(require('../page/myself/children/shareCard')), 'shareCard')
const advice = r => require.ensure([], () => r(require('../page/advice/advice')), 'advice')
const grant = r => require.ensure([], () => r(require('../page/grant/grant')), 'grant')
const myGrant = r => require.ensure([], () => r(require('../page/grant/myGrant')), 'myGrant')
const introduce = r => require.ensure([], () => r(require('../page/introduce/introduce')), 'introduce')
const generalizeOrders = r => require.ensure([], () => r(require('../page/generalizeOrders/generalizeOrders')), 'generalizeOrders')
const generalizeCard = r => require.ensure([], () => r(require('../page/generalizeCard/generalizeCard')), 'generalizeCard')
const visitUser = r => require.ensure([], () => r(require('../page/visitUser/visitUser')), 'visitUser')
const withdrawDeposit = r => require.ensure([], () => r(require('../page/withdrawDeposit/withdrawDeposit')), 'withdrawDeposit')
const invitationCard = r => require.ensure([], () => r(require('../page/invitationCard/invitationCard')), 'invitationCard')
const privilege = r => require.ensure([], () => r(require('../page/privilege/privilege')), 'privilege')
const presentRecord = r => require.ensure([], () => r(require('../page/presentRecord/presentRecord')), 'presentRecord')
const presentDetail = r => require.ensure([], () => r(require('../page/presentDetail/presentDetail')), 'presentDetail')


//新加的训练营页面
const studySys = r => require.ensure([], () => r(require('../page/educationalSystem/studySys')), 'studySys')
const catalogue = r => require.ensure([], () => r(require('../page/educationalSystem/catalogue')), 'catalogue')
const studyDire = r => require.ensure([], () => r(require('../page/educationalSystem/directories')), 'directories')
const planSys = r => require.ensure([], () => r(require('../page/educationalSystem/planSys')), 'planSys')
const myselfSys = r => require.ensure([], () => r(require('../page/educationalSystem/myselfSys')), 'myselfSys')
const studyCard = r => require.ensure([], () => r(require('../page/educationalSystem/signCard')), 'signCard')
const packDetailSys= r => require.ensure([], () => r(require('../page/educationalSystem/packDetails')), 'packDetails')
const myGrade= r => require.ensure([], () => r(require('../page/educationalSystem/myGrade')), 'myGrade')
const burseRule= r => require.ensure([], () => r(require('../page/educationalSystem/burseRule')), 'burseRule')

export default [{
    path: '',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转发现页
        {
            path: '',
            redirect: 'discovery'
        },
        //训练营-学习
        {
            path: 'studySys',
            meta: {
                title: '学习'
            },
            component: studySys,
        },
        //训练营-计划
        {
            path: 'planSys',
            meta: {
                title: '计划'
            },
            component: planSys,
        },
        //训练营-我的
        {
            path: 'myselfSys',
            meta: {
                title: '我的'
            },
            component: myselfSys,
        },
        //学习内容目录
        {
            path: 'catalogue',
            meta: {
                title: '今日学习内容'
            },
            component: catalogue,
        },
        //拆书包卡片列表
        {
            path: 'studyDire',
            meta: {
                title: ''
            },
            component: studyDire,
        },
        //签到打卡
        {
            path: 'studyCard',
            meta: {
                title: '签到打卡'
            },
            component: studyCard,
        },
        //训练营-拆书包详情
        {
            path: 'packDetailSys',
            meta: {
                title: '今日学习'
            },
            component: packDetailSys,
        },
        //训练营-我的班级
        {
            path: 'myGrade',
            meta: {
                title: '班级'
            },
            component: myGrade,
        },
        //训练营-奖学金规则
        {
            path: 'burseRule',
            meta: {
                title: '奖学金规则'
            },
            component: burseRule,
        },
















        //学习
        {
            path: 'study',
            meta: {
                title: '学习'
            },
            component: study,
        },
        //拆书包列表页
        {
            path: 'packList',
            meta: {
                title: '有书课堂'
            },
            component: packList,
        },
        //拆书包详情页
        {
            path: 'packDetail',
            meta: {
                title: '阅读内容'
            },
            component: packDetail,
        },
        //领读合辑
        {
            path: 'packHistory',
            meta: {
                title: '领读合辑'
            },
            component: packHistory,
        },
        //发现页
        {
            path: 'discovery',
            meta: {
                title: '首页'
            },
            component: discovery,
        },
        //计划列表
        {
            path: 'planList',
            meta: {
                title: '计划列表',
            },
            component: planList,
        },
        //我的
        {
            path: 'myself',
            meta: {
                title: '我的'
            },
            component: myself,
            children: [{
                path: 'shareCard',
                meta: {
                    title: '分享卡片',
                },
                component: shareCard,
            }]
        },
        //意见反馈
        {
            path: 'advice',
            meta: {
                title: '意见反馈'
            },
            component: advice,
        },
        //助学金中心
        {
            path: 'grant',
            meta: {
                title: '助学金中心'
            },
            component: grant,
        },
        //我的助学金
        {
            path: 'myGrant',
            meta: {
                title: '我的助学金'
            },
            component: myGrant,
        },
        //有书助学金招募计划
        {
            path: 'introduce',
            meta: {
                title: '有书助学金招募计划'
            },
            component: introduce,
        },
        //成功订单
        {
            path: 'generalizeOrders',
            meta: {
                title: '成功订单'
            },
            component: generalizeOrders,
        },
        //推广卡片
        {
            path: 'generalizeCard',
            meta: {
                title: '推广卡片'
            },
            component: generalizeCard,
        },
        //访问用户
        {
            path: 'visitUser',
            meta: {
                title: '访问用户'
            },
            component: visitUser,
        },
        //提现
        {
            path: 'withdrawDeposit',
            meta: {
                title: '提现'
            },
            component: withdrawDeposit,
        },
        //邀请卡
        {
            path: 'invitationCard',
            meta: {
                title: '长按保存图片'
            },
            component: invitationCard,
        },
        //特权兑换
        {
            path: 'privilege',
            meta: {
                title: '特权兑换'
            },
            component: privilege,
        },
		//特权礼物
        {
            path: 'presentRecord',
            meta: {
                title: '特权礼物'
            },
            component: presentRecord,
        },
        //赠送好友详情页
        {
            path: 'presentDetail',
            meta: {
                title: '赠送好友'
            },
            component: presentDetail,
        },
    ]
}]
