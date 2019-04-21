define(["text!./banner.html","Et","axios"],function(bannerHTML,Et,axios){
    var obox = document.createElement("div");
    var oarticle = document.getElementsByTagName("article")[0];
    obox.className = "banner";
    oarticle.appendChild(obox);
    
    
    axios.get("http://localhost:3000/zh-cn/api/focus").then(function(resp){
        var dataFocus = resp.focus;
        var rs = Et.template(bannerHTML,{dataFocus:dataFocus});
        obox.innerHTML = rs;

        var showBox = document.getElementsByClassName("nav_box");
        var aimg = document.getElementsByClassName("navimg");
        var oul = document.getElementsByClassName("nav_list")[0];
        var ali = oul.children;
        var arr = Array.from(ali);
        
        showBox[0].classList.add("show");
        for(var i=0; i<aimg.length; i++){
            var img1 = resp.focus[1].imageUrl;
            var img2 = resp.focus[3].imageUrl;
            i%2 == 1 ? aimg[i].setAttribute("src",img2) : aimg[i].setAttribute("src",img1);
        }

        var timer = null;
        var num = 0;
        timer = setInterval(function(){
            for(var i=0; i<showBox.length; i++){
                if(num == i){
                    showBox[i].classList.add("show");
                    ali[i].classList.add("nav_init");
                }else{
                    showBox[i].classList.remove("show");
                    ali[i].classList.remove("nav_init");
                }
            }
            num++;
            if(num > showBox.length-1){
                num = 0;
            }
        },5000);

        oul.onclick = function(ev){
            var ev = ev || window.event;
            var target = ev.target || ev.srcElement;
            while(target !== oul){
                if(target.nodeName == "LI"){
                    num = arr.indexOf(target);
                    for(var i=0; i<showBox.length; i++){
                        if(num == i){
                            showBox[i].classList.add("show");
                            ali[i].classList.add("nav_init");
                        }else{
                            showBox[i].classList.remove("show");
                            ali[i].classList.remove("nav_init");
                        }
                    }
                    break;
                }
                target = target.parentNode;
            }
        }
    });
});