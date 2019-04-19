


define([],function(){
    'use strict';
    var axios = {};
    var promise;

    function formsParams(data){
        var arr = [];
        for(var key in data){
            arr.push(key+"="+data[key]);
        }
        return arr.join("&");
    }

    axios.get = function(url,data){
        return promise = new Promise(function(resolve,reject){
            var xhr = null;

            if(window.XMLHttpRequest){
                xhr = new XMLHttpRequest();
            }else{
                xhr = ActiveXObject("Microsoft.XMLHTTP");
            }

            if(!data){
                xhr.open('GET',url,true);
            }else if(data){
                var params = formsParams(data.params);
                xhr.open('GET',url+'?'+params,true);
            }
            xhr.send(null);
            
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4 && xhr.status == 200){
                    resolve(JSON.parse(xhr.responseText));
                }
                if(xhr.status===404){
                    reject("404,页面不存在")
                }
                if(xhr.status===500){
                    reject("500，服务器出错！请检查代码或者联系后台人员")
                }
            }
        });
    }

    axios.post = function(url,data){
        return promise = new Promise(function(resolve,reject){
            var xhr = null;

            if(window.XMLHttpRequest){
                xhr = new XMLHttpRequest();
            }else{
                xhr = ActiveXObject('Microsoft.XMLHTTP');
            }

            xhr.open('POST',url,true);
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            if(!data){
                xhr.send("");
            }else if(data){
                var params = formsParams(data.params);
                xhr.send(params);
            }

            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4 && xhr.status == 200){
                    resolve(JSON.parse(xhr.responseText));
                }
                if(xhr.status===404){
                    reject("404,页面不存在")
                }
                if(xhr.status===500){
                    reject("500，服务器出错！请检查代码或者联系后台人员")
                }
            }
        });
    }

    var _axios = window.axios;

    axios.noConflict = function(){
        if(window.axios === axios){
            window.axios = _axios;
        }
        return axios;
    }

    window.axios = axios;
    return axios;
});