define(["text!./search.html","Et","bottomNav"],function(searchHTML,Et){
    var oarticle = document.getElementsByTagName("article")[1];
    var box = document.createElement("div");
    box.className = "search";
    oarticle.appendChild(box);

    var rs = Et.template(searchHTML,{});
    box.innerHTML = rs;
});