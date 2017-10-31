import {baseUrl} from './env'
import {errorLog} from './mUtils'
import axios from 'axios'
import Vue from 'vue'
import Qs from 'qs'

export default async(type = 'GET',hostUrl='', url = '', data = {}, method = 'axios') => {
    type = type.toUpperCase();
    if(hostUrl){
        url = hostUrl + url;
    }else{
        url = baseUrl + url;
    }
    if (type == 'GET') {
        let dataStr = ''; //数据拼接字符串
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&';
    })

    if (dataStr !== '') {
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
        url = url + '?' + dataStr;
    }
}

if (window.fetch && method == 'fetch') {
    let requestConfig = {
        credentials: 'include',
        method: type,
        headers: {
            'Accept': 'application/json',
            //'Content-Type': 'application/x-www-form-urlencoded'
            'Content-Type': 'multipart/form-data'
        },
        mode: "cors",
        cache: "force-cache"
    }

    if (type == 'POST') {
        Object.defineProperty(requestConfig, 'body', {
            value: JSON.stringify(data)
        })
    }

    try {
        var response = await fetch(url, requestConfig);
        var responseJson = await response.json();
    } catch (error) {
        throw new Error(error)
    }

    switch(responseJson.code){
        case "-1":
            console.log(responseJson.msg)
            break;
    }

    return responseJson

}else if(method == 'axios'){

    var responseJson = await axios({
        method: type,
        url: url,
        data: Qs.stringify(data),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        withCredentials: true
    });

    if(responseJson.data.code!="1"){
        var logContent={
            code:"AJAX_CODE",
            ajaxUrl: url,
            request_data:Qs.stringify(data),
            response_data: {
                code: responseJson.data.code,
                msg: responseJson.data.msg
            },
        }
        errorLog(logContent);
    }

    switch(responseJson.data.code){
        case 3001:
            location.href = baseUrl+"/FwhWeChat/entry?callback=callback"
            break;
        case 3002:
            location.href = baseUrl+"/FwhWeChat/entry?callback=callback"
            break;
        case 3003:
            location.href = baseUrl+"/FwhWeChat/entry?callback=callback"
            break;
        default:
            return responseJson.data;
            break;
    }

} else if(method == 'jquery'){
    var responseJson = await jQ.ajax({
        url: url,
        type: type,
        cache: false,
        data: data.file,
        processData: false,
        contentType: false,
    })
    return responseJson;

} else {

    let requestObj;
    if (window.XMLHttpRequest) {
        requestObj = new XMLHttpRequest();
    } else {
        requestObj = new ActiveXObject;
    }

    requestObj.open(type, url, true);
    requestObj.withCredentials = true;
    requestObj.send(data.file);

    requestObj.onreadystatechange = () => {
        if (requestObj.readyState == 4) {
            if (requestObj.status == 200) {
                let obj = requestObj.response
                if (typeof obj !== 'object') {
                    obj = JSON.parse(obj);
                }
                return data.callback(obj)
            } else {
                throw new Error(requestObj)
            }
        }
    }

    // requestObj.addEventListener("progress" , function(evt){
    // 	console.log("evt="+evt.loaded)
    // 	console.log(evt)
    // }, false);
}
}