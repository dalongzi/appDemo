define(["text!./nav.html","Et","banner"],function(navHTML,Et){
    var nav = document.createElement("nav");
    var oarticle = document.getElementsByTagName("article")[0];
    oarticle.appendChild(nav);
    
    var navLists = [
        {name: "精选"},
        {name: "优惠"},
        {name: "海淘"},
        {name: "发现"},
        {name: "原创"},
    ];
    var rs = Et.template(navHTML,{navLists:navLists});
    nav.innerHTML = rs;

    nav.children[1].children[0].className = "init";
    nav.onclick = function(ev){
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        while(target !== nav){
            if(target.nodeName == "LI"){
                for(var i=0; i<nav.children[1].children.length; i++){
                    nav.children[1].children[i].removeAttribute("class");
                }
                target.className = "init";
                break;
            }
            target = target.parentNode;
        }
    }
});