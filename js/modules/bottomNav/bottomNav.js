require.config({
    paths: {
        fenlei: "modules/fenleiModules/fenlei",
    }
});

define(["text!./bottomNav.html","Et","fenlei"],function(bottomNHTML,Et,fenlei){
    var lists = [
        {name: "首页"},
        {name: "分类"},
        {name: "我的"},
    ]; 
    var rs = Et.template(bottomNHTML,{lists: lists});
    document.body.innerHTML = rs;

    var ofooter = document.getElementsByTagName("footer")[0];
    var aarticle = document.getElementsByTagName("article");

    ofooter.children[0].children[0].className = "initli";
    ofooter.onclick = function(ev){
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        var num;
        while(target !== ofooter){
            if(target.nodeName == "LI"){
                for(var i=0; i<target.parentNode.children.length; i++){
                    target.parentNode.children[i].removeAttribute("class");
                    aarticle[i].removeAttribute("class");
                    if(target === target.parentNode.children[i]){
                        num = i;
                    }
                }
                target.className = "initli";
                switch(num){
                    case 0:
                        break;
                    case 1:
                        fenlei.text();
                        break;
                    case 2:
                        break;
                }
                aarticle[num].className = "dashow";
                break;
            }
            target = target.parentNode;
        }
    }
});