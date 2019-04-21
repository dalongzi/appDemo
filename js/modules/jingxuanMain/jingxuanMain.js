define(["text!./jingxuanMain.html","text!./modules/jingxuanMain/qitaMain.html","Et","axios","banner","nav"],function(jingxuanMHTML,qitaMHTML,Et,axios){
    var main = document.createElement("main");
    var oarticle = document.getElementsByTagName("article")[0];
    main.className = "shouyemain";
    oarticle.appendChild(main);

    
    async function test(){
        await axios.get("http://localhost:3000/api/home",{params:{sectionId:99}}).then(function(resp){
            var data = resp.listIndex;
            var rs = Et.template(jingxuanMHTML,{data:data});
            main.innerHTML += rs;
        });
        await axios.get("http://localhost:3000/api/home",{params:{sectionId:0}}).then(function(resp){
            var data = resp.data;
            var rs = Et.template(qitaMHTML,{data:data});
            main.innerHTML += rs;
        });
        await axios.get("http://localhost:3000/api/home",{params:{sectionId:1}}).then(function(resp){
            var data = resp.data;
            var rs = Et.template(qitaMHTML,{data:data});
            main.innerHTML += rs;
        });
        await axios.get("http://localhost:3000/api/home",{params:{sectionId:2}}).then(function(resp){
            var data = resp.data;
            var rs = Et.template(qitaMHTML,{data:data});
            main.innerHTML += rs;
        });
        await axios.get("http://localhost:3000/api/home",{params:{sectionId:34}}).then(function(resp){
            var data = resp.data;
            var rs = Et.template(qitaMHTML,{data:data});
            main.innerHTML += rs;
        });
    }
    test();
   
});