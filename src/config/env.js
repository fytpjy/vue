/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * authorizationUrl:授权域名
 * routerMode: 路由模式  history  hash
 * wxjsurl: 引入微信js文件
 * imgBaseUrl: 图片所在域名地址
 * 
 */
let baseUrl;
let hostUrl;
let authorizationUrl;
let routerMode;
const wxjsurl = 'https://res.wx.qq.com/open/js/jweixin-1.2.0.js';
const imgBaseUrl = '';

if (process.env.NODE_ENV == 'development') {

    baseUrl = 'http://apidev.laidan.com:81';
    hostUrl='http://classroom.youshu.cc';
    authorizationUrl='http://zaiadev.laidan.com';
	routerMode = 'hash'

}else{
    // baseUrl = 'http://apidev.laidan.com:81';
    // authorizationUrl='http://zaiadev.laidan.com';
    // hostUrl='http://zaiadev.laidan.com/m_web';
    baseUrl = 'http://gongdu.youshu.cc';
    hostUrl='http://m.youshu.cc';
    authorizationUrl='http://readooapi.youshu.cc';
    routerMode = 'hash'
}

export {
	baseUrl,
    hostUrl,
    authorizationUrl,
	routerMode,
	imgBaseUrl,
	wxjsurl
}