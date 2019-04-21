require.config({
    paths: {
        
    }
});

define(["text!./fenlei.html","Et","axios"],function(fenleiHTML,Et,axios,search){
    var obj = {};
    var oarticle;
    var main = document.createElement("main");
    main.className = "fenleimain";
    obj.text = function(){
        oarticle = document.getElementsByTagName("article")[1];
        oarticle.appendChild(main);
        axios.get("http://localhost:3000/api/category").then(function(resp){
            console.log(resp);
            var rs = Et.template(fenleiHTML,{});
            main.innerHTML = rs;
        });
    }
    return obj;
});