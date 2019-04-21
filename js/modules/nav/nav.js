define(["text!./nav.html","Et","jingxuanMain"],function(navHTML,Et){
    var nav = document.createElement("nav");
    var oarticle = document.getElementsByTagName("article")[0];
    oarticle.appendChild(nav);
    
    var navLists = [
        {name: "精选"},
        {name: "优惠"},
        {name: "海淘"},
        {name: "发现"},
        {name: "原创"}
    ];
    var rs = Et.template(navHTML,{navLists:navLists});
    nav.innerHTML = rs;
    
    var main = document.getElementsByClassName("shouyemain")[0];
    var num;
    nav.children[1].children[0].className = "init";
    nav.onclick = function(ev){
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        while(target !== nav){
            if(target.nodeName == "LI"){
                for(var i=0; i<nav.children[1].children.length; i++){
                    nav.children[1].children[i].removeAttribute("class");
                    if(nav.children[1].children[i] === target){
                        num = i;
                    }
                }
                target.className = "init";
                main.style.left = -100*num+"%";
                break;
            }
            target = target.parentNode;
        }
    }
});