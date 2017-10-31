import {wxjsurl} from './env'
import {wxConfigData,setErrorLog} from './../service/getData'
import Vue from 'vue'
import Mint from 'mint-ui'
Vue.use(Mint);

/**
 * 统计数据
 */
export const cnzzCount = (data) => {
    var cnzzid = data?data:1260093070;
    if(!document.getElementById("cnzzhead")){
        var countHeadCode = document.createElement("script");
        countHeadCode.setAttribute("id","cnzzhead");
        countHeadCode.appendChild(document.createTextNode("var _czc = _czc || [];_czc.push(['_setAccount', "+cnzzid+"])"))
        document.getElementsByTagName("head")[0].insertBefore(countHeadCode,document.getElementsByTagName("head").childNodes)

        var countFootCode = document.createElement("script");
        countFootCode.src = "https://s4.cnzz.com/z_stat.php?id="+cnzzid+"&web_id="+cnzzid;
        document.getElementsByTagName("body")[0].insertBefore(countFootCode,document.getElementsByTagName("body").childNodes)
    }
}

/**
 * 统计数据
 */
export const BDCount = (data) => {
    var cnzzid = data?data:'7128b5b55aec629269ae692f584e7d1c';
    var countFootCode = document.createElement("script");
    countFootCode.appendChild(document.createTextNode("var _hmt = _hmt || [];(function() {var hm = document.createElement('script');hm.src = 'https://hm.baidu.com/hm.js?"+cnzzid+"';var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(hm, s);})()"));
    var ss = document.getElementsByTagName('script')[0];
    ss.parentNode.insertBefore(countFootCode, ss);
}

/**
 * 统计事件
 */
export const cnzzEvent = (options) => {
    try{
        console.log(options)
        _czc.push(['_trackEvent', options.category, options.action, options.label,options.value]);
    }
    catch(err){
        console.error("未开启统计")
    }
}

/**
 * 微信配置
 */


export const wxConfig = (options) => {
    wxConfigData().then(res => {
        if(res.code==1){
            wx.config({
                debug: options.debug,
                appId: res.data.appId,
                timestamp: res.data.timestamp,
                nonceStr: res.data.nonceStr,
                signature: res.data.signature,
                jsApiList: options.jsApiList
            });
            if(options.ShareTitle && options.ShareLink && options.ShareImgUrl){
                var wxShare = {
                    title: options.ShareTitle,
                    desc: options.ShareDesc,
                    link: options.ShareLink,
                    imgUrl: options.ShareImgUrl,
                    success: function(){options.ShareSuccess && options.ShareSuccess()},
                    cancel: function(){options.ShareCancel && options.ShareCancel()}
                }
                wx.ready(function(){
                    wx.onMenuShareTimeline(wxShare);
                    wx.onMenuShareAppMessage(wxShare);
                })
            }
            wx.error(function(res){
                var logContent={
                    code:"WECHAT_CONFIG",
                    request_data: {
                        "debug": options.debug,
                        "appId": options.appId,
                        "timestamp": options.timestamp,
                        "nonceStr": options.nonceStr,
                        "signature": options.signature,
                        "jsApiList": options.jsApiList
                    },
                    response_data: {
                        msg: res.errMsg,
                    },
                }
                errorLog(logContent);
            });
        }else{
            Vue.$toast(res.msg)
        }
    })
}

/**
 * 上传图片类型检测
 */
export const checkUploadImages = (file,num) => {
    //alert("file="+file.length)
    //alert(JSON.stringify(file))
    if(!file.length) return 0;
    if(file.length>9) return 10;
    if((file.length+num)>9) return 101;
    for(var i=0;i<file.length;i++){
        return 1
        // switch(file[i].path.split('\\')[file[i].path.split('\\').length-1].split(".")[1]){
        //     case "jpg":
        //         alert("1")
        //         return 1
        //     break;
        //     case "gif":
        //         alert("1")
        //         return 1
        //     break;
        //     case "png":
        //         alert("1")
        //         return 1
        //     break;
        //     case "jpeg":
        //         alert("1")
        //         return 1
        //     break;
        //     case "bmp":
        //         alert("1")
        //         return 1
        //     break;
        //     default:
        //         alert("11")
        //         return 11
        //     break;
        // }   
    }
}

/**
 * 图片转Base64
 */
export const convertImgToBase64 = (url, callback, outputFormat) => {
    var canvas = document.createElement('CANVAS'),
        ctx = canvas.getContext('2d'),
        img = new Image;
    img.crossOrigin = 'Anonymous';
    img.onload = function(){
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img,0,0);
        var dataURL = canvas.toDataURL(outputFormat || 'image/png');
        callback.call(this, dataURL);
        canvas = null;
    };
    img.crossOrigin = '';
    img.src = url;
}


/**
 * html2canvas
 */
export const html2images = (app,id,success) => {
    var node = document.getElementById(id),
        canvascard = document.createElement("canvas");
        canvascard.setAttribute("id","canvascard");
        canvascard.setAttribute("style","position: fixed;top:0");
        node.appendChild(canvascard)
    html2canvas(node, {
        canvas: createHiDPICanvas(2,id,"canvascard"),
        onrendered: function(canvas) {
            console.log("111111")
            console.log(canvas)

            var dataUrl = canvas.toDataURL("image/png");
            var img = new Image();
            img.src = dataUrl;
            img.style.width = "100%";
            node.style.display = "none";
            document.getElementById("canvascard").style.display = "none";
            document.getElementById(app).appendChild(img);
            console.log(img)

            success();
        }
    })

    function PIXEL_RATIO(card) {
        var ctx = document.getElementById(card).getContext("2d"),
            dpr = window.devicePixelRatio || 1,
            bsr = ctx.webkitBackingStorePixelRatio ||
                ctx.mozBackingStorePixelRatio ||
                ctx.msBackingStorePixelRatio ||
                ctx.oBackingStorePixelRatio ||
                ctx.backingStorePixelRatio || 1;

        return dpr / bsr;
    }

    function createHiDPICanvas(ratio,id,card) {
        if (!ratio) { ratio = PIXEL_RATIO(card); }
        var can = document.getElementById(card);
        var w = document.getElementById(id).offsetWidth,
            h = document.getElementById(id).offsetHeight;
        can.width = w * ratio;
        can.height = h * ratio;
        can.style.width = w + "px";
        can.style.height = h + "px";
        can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
        return can;
    }
}

/**
 * 删除Cookies数据
 */
export const delCookie = (name) => {
    var exp = new Date();
    exp.setTime(exp.getTime() + (-1 * 24 * 60 * 60 * 1000));
    var cval = getCookie(name);
    document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString()+"; path=/; domain=fengwo.com";
}

/**
 * 获取Cookies数据
 */
export const getCookie = (c_name) => {
    if (document.cookie.length>0){ 
        let c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1){ 
            c_start=c_start + c_name.length+1 
            let c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        } 
    }
    return ""
}

/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
	if (!name) return;
	return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
	if (!name) return;
	window.localStorage.removeItem(name);
}

/**
 * 获取style样式
 */
export const getStyle = (element, attr, NumberMode = 'int') => {
    let target;
    // scrollTop 获取方式不同，没有它不属于style，而且只有document.body才能用
    if (attr === 'scrollTop') { 
        target = element.scrollTop;
    }else if(element.currentStyle){
        target = element.currentStyle[attr]; 
    }else{ 
        target = document.defaultView.getComputedStyle(element,null)[attr]; 
    }
    //在获取 opactiy 时需要获取小数 parseFloat
    return  NumberMode == 'float'? parseFloat(target) : parseInt(target);
} 

/**
 * 页面到达底部，加载更多
 */
export const loadMore = (element, callback) => {
	let windowHeight = window.screen.height;
	let height;
	let setTop;
	let paddingBottom;
	let marginBottom;
    let requestFram;
    let oldScrollTop;

    document.body.addEventListener('scroll',() => {
       loadMore();
    }, false)
    //运动开始时获取元素 高度 和 offseTop, pading, margin
	element.addEventListener('touchstart',() => {
        height = element.offsetHeight;
        setTop = element.offsetTop;
        paddingBottom = getStyle(element,'paddingBottom');
        marginBottom = getStyle(element,'marginBottom');
    },{passive: true})

    //运动过程中保持监听 scrollTop 的值判断是否到达底部
    element.addEventListener('touchmove',() => {
       loadMore();
    },{passive: true})

    //运动结束时判断是否有惯性运动，惯性运动结束判断是非到达底部
    element.addEventListener('touchend',() => {
       	oldScrollTop = document.body.scrollTop;
       	moveEnd();
    },{passive: true})
    
    const moveEnd = () => {
        //console.log("loading more end")
        requestFram = requestAnimationFrame(() => {
            if (document.body.scrollTop != oldScrollTop) {
                oldScrollTop = document.body.scrollTop;
                loadMore();
                moveEnd();
            }else{
            	cancelAnimationFrame(requestFram);
            	//为了防止鼠标抬起时已经渲染好数据从而导致重获取数据，应该重新获取dom高度
            	height = element.offsetHeight;
                loadMore();
            }
        })
    }

    const loadMore = () => {
        if (document.body.scrollTop + windowHeight >= height + setTop + paddingBottom + marginBottom) {
            callback();
        }
    }
}

/**
 * 显示返回顶部按钮，开始、结束、运动 三个过程中调用函数判断是否达到目标点
 */
export const showBack = callback => {
    let requestFram;
    let oldScrollTop;

    document.addEventListener('scroll',() => {
       showBackFun();
    }, false)
    document.addEventListener('touchstart',() => {
       showBackFun();
    },{passive: true})

    document.addEventListener('touchmove',() => {
       showBackFun();
    },{passive: true})

    document.addEventListener('touchend',() => {
        oldScrollTop = document.body.scrollTop;
        moveEnd();
    },{passive: true})
    
    const moveEnd = () => {
        requestFram = requestAnimationFrame(() => {
            if (document.body.scrollTop != oldScrollTop) {
                oldScrollTop = document.body.scrollTop;
                moveEnd();
            }else{
                cancelAnimationFrame(requestFram);
            }
            showBackFun();
        })
    }

    //判断是否达到目标点
    const showBackFun = () => {
        if (document.body.scrollTop > 500) {
            callback(true);
        }else{
            callback(false);
        }
    }
}


/**
 * 运动效果
 * @param {HTMLElement} element   运动对象，必选
 * @param {JSON}        target    属性：目标值，必选
 * @param {number}      duration  运动时间，可选
 * @param {string}      mode      运动模式，可选
 * @param {function}    callback  可选，回调函数，链式动画
 */
export const animate = (element, target, duration = 400, mode = 'ease-out', callback) => {
    clearInterval(element.timer);

    //判断不同参数的情况
    if (duration instanceof Function) {
        callback = duration;
        duration = 400;
    }else if(duration instanceof String){
        mode = duration;
        duration = 400;
    }

    //判断不同参数的情况
    if (mode instanceof Function) {
        callback = mode;
        mode = 'ease-out';
    }

    //获取dom样式
    const attrStyle = attr => {
        if (attr === "opacity") { 
            return Math.round(getStyle(element, attr, 'float') * 100);
        } else {
            return getStyle(element, attr);
        }
    }
    //根字体大小，需要从此将 rem 改成 px 进行运算
    const rootSize = parseFloat(document.documentElement.style.fontSize);

    const unit = {};
    const initState = {};

    //获取目标属性单位和初始样式值
    Object.keys(target).forEach(attr => {
        if (/[^\d^\.]+/gi.test(target[attr])) {
            unit[attr] = target[attr].match(/[^\d^\.]+/gi)[0] || 'px';
        }else{
            unit[attr] = 'px';
        }
        initState[attr] = attrStyle(attr);
    });

    //去掉传入的后缀单位
    Object.keys(target).forEach(attr => {
        if (unit[attr] == 'rem') {
            target[attr] = Math.ceil(parseInt(target[attr])*rootSize);
        }else{
            target[attr] = parseInt(target[attr]);
        }
    });


    let flag = true; //假设所有运动到达终点
    const remberSpeed = {};//记录上一个速度值,在ease-in模式下需要用到
    element.timer = setInterval(() => {
        Object.keys(target).forEach(attr => {
            let iSpeed = 0;  //步长
            let status = false; //是否仍需运动
            let iCurrent = attrStyle(attr) || 0; //当前元素属性址
            let speedBase = 0; //目标点需要减去的基础值，三种运动状态的值都不同
            let intervalTime; //将目标值分为多少步执行，数值越大，步长越小，运动时间越长
            switch(mode){
                case 'ease-out': 
                    speedBase = iCurrent;
                    intervalTime = duration*5/400;
                    break;
                case 'linear':
                    speedBase = initState[attr];
                    intervalTime = duration*20/400;
                    break;
                case 'ease-in':
                    let oldspeed = remberSpeed[attr] || 0;
                    iSpeed = oldspeed + (target[attr] - initState[attr])/duration;
                    remberSpeed[attr] = iSpeed
                    break;
                default:
                    speedBase = iCurrent;
                    intervalTime = duration*5/400; 
            }
            if (mode !== 'ease-in') {
                iSpeed = (target[attr] - speedBase) / intervalTime;
                iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            }
            //判断是否达步长之内的误差距离，如果到达说明到达目标点
            switch(mode){
                case 'ease-out': 
                    status = iCurrent != target[attr]; 
                    break;
                case 'linear':
                    status = Math.abs(Math.abs(iCurrent) - Math.abs(target[attr])) > Math.abs(iSpeed);
                    break;
                case 'ease-in':
                    status = Math.abs(Math.abs(iCurrent) - Math.abs(target[attr])) > Math.abs(iSpeed);
                    break;
                default:
                    status = iCurrent != target[attr]; 
            }

            if (status) {
                flag = false; 
                //opacity 和 scrollTop 需要特殊处理
                if (attr === "opacity") {
                    element.style.filter = "alpha(opacity:" + (iCurrent + iSpeed) + ")";
                    element.style.opacity = (iCurrent + iSpeed) / 100;
                } else if (attr === 'scrollTop') {
                    element.scrollTop = iCurrent + iSpeed;
                }else{
                    element.style[attr] = iCurrent + iSpeed + 'px';
                }
            } else {
                flag = true;
            }

            if (flag) {
                clearInterval(element.timer);
                if (callback) {
                    callback();
                }
            }
        })
    }, 20);
}


/**
 * 设置微信网页中标题
 */
export const setWechatTitle = (title) => {
    document.title = title
    var mobile = navigator.userAgent.toLowerCase()
    if (/iphone|ipad|ipod/.test(mobile)) {
        var iframe = document.createElement('iframe')
        iframe.style.visibility = 'hidden'
        // 替换成站标favicon路径或者任意存在的较小的图片即可
        iframe.setAttribute('src', '../../favicon.ico')
        var iframeCallback = function () {
            setTimeout(function () {
                iframe.removeEventListener('load', iframeCallback)
                document.body.removeChild(iframe)
            }, 0)
        }
        iframe.addEventListener('load', iframeCallback)
        document.body.appendChild(iframe)
    }
}
/**
 * 错误日志
 */
export const errorLog = (content) => {
    var postData = content !=  null ? content : {};
    var timestamp=new Date().getTime();
    var user_id = getCookie("HTTP_X_YS_UID");

    //请求url
    postData.request_url = window.location.href;
    //PHPSESSID
    postData.phpsessID=getCookie("PHPSESSID");
    //用户token
    postData.usertoken=getCookie("HTTP_X_YS_USER_TOKEN");
    //微信版本号
    var wechatInfo = navigator.userAgent.split("MicroMessenger")[1].split("/")[1].split(" ")[0];
    //数据参数
    //level取值：DEBUG,INFO,WARN,ERR,FATAL
    //type取值WEB - H5 WP - 小程序 IOS - iOS-App AND - Android-App
    var messages=[{
        level:"ERR",
        timestamp:timestamp,
        data:postData
    }];
    //存储log日志
    setErrorLog('WK',user_id,"wechat_"+wechatInfo,versions(),JSON.stringify(messages)).then(res => {

    })
}


/**
 * 是否为移动终端、ios终端、android终端
 */
export const versions = (content) => {
    var u = navigator.userAgent,os;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

    if(isiOS){
        os= "ios";
    }else if(isAndroid){
        os = "android";
    }else {
        os = "";
    }
    return os;
}


/**
 * 数据base64加密
 */
export const Base64 = (str) => {
    var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var base64DecodeChars = new Array(
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
        52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
        -1,　0,　1,　2,　3,  4,　5,　6,　7,　8,　9, 10, 11, 12, 13, 14,
        15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
        -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
    var out, i, len;
    var c1, c2, c3;
    len = str.length;
    i = 0;
    out = "";
    while(i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if(i == len)
        {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if(i == len)
        {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt((c2 & 0xF) << 2);
            out += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
        out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >>6));
        out += base64EncodeChars.charAt(c3 & 0x3F);
    }
    return out;
}


/**
 * 随机数
 * @param  num min 范围区间最小值
 * @param  num max 范围区间最大值
 */
export const getRandomNum = (min,max) => {
    var Range = max - min;
    var Rand = Math.random();
    return min + Math.round(Rand * Range);
}