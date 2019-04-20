define(["text!./jingxuanMain.html","Et","axios","banner","nav"],function(jingxuanMHTML,Et,axios){
    var main = document.createElement("main");
    var oarticle = document.getElementsByTagName("article")[0];
    main.className = "shouyemain";
    oarticle.appendChild(main);

    axios.get("http://localhost:3000/api/home",{params:{sectionId:99}}).then(function(resp){
        var data = resp.listIndex;
        console.log(data);
        var rs = Et.template(jingxuanMHTML,{data:data});
        main.innerHTML += rs;
    });
    
   
});