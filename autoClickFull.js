var delayTime = 3000;

var a = document.getRootNode();
var NKUST_LINK = a.location["href"];
console.log(NKUST_LINK);
a.body.innerHTML = "";
var h1 = document.createElement("iframe");
h1.setAttribute("src", NKUST_LINK.split("/Stu", 1)[0]+"/StuFillIn");
a.body.appendChild(h1);
h1.setAttribute("height", 1000);
h1.setAttribute("width", 1000);

function cdf(){
    var ccgh = h1.contentDocument.getElementById("excollect");
    if(ccgh === None){
        var ccgb = h1.contentDocument.getElementsByTagName('a');
        for(int i=0; i< ccgb.lengh; i++){
            if(ccgb[i].innerText == "填寫問卷"){
                ccgb[i].click();
            }
        }
    }else{
        ccgh.click();
        h1.onload = ccaa;
    }
}


function ccaa(){
fetch("https://raw.githubusercontent.com/meteorTriangle/NKUST_AUTO/refs/heads/main/autoClick.js").then(response => response.text()).then(data => {
    var ca = "javascript: "+ data;
    h1.setAttribute("src", ca);
});
h1.onload = cdf;
};


h1.onload = cdf;
