console.log("js file at the end of the body loaded");

(function () {
    let para = document.createElement("P");
    para.innerHTML = 'Stuff genareted by js';
    para.setAttribute("style", "color:red");
    para.style.backgroundColor = "yellow";
    para.style.fontFamily = "Impact";
    para.style.fontSize = "4.3rem";
    document.getElementsByTagName("div")[0].appendChild(para); 
    // document.body.appendChild(para);
    let h2var = document.createElement("h2");
    h2var.innerHTML = "h2 mein Text dazu";
    document.body.appendChild(h2var);
})()
