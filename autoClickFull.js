var delayTime = 3000;

var a = document.getRootNode();
var NKUST_LINK = a.location["href"];
console.log(NKUST_LINK);
a.body.innerHTML = "";
var h1 = document.createElement("iframe");
h1.setAttribute("src", NKUST_LINK);
a.body.appendChild(h1);
h1.setAttribute("height", 1000);
h1.setAttribute("width", 1000);




function cdf(){
    var ccgh = h1.contentDocument.getElementById("excollect");
    ccgh.click();
    h1.onload = ccaa;
}


function ccaa(){
fetch("https://raw.githubusercontent.com/meteorTriangle/NKUST_AUTO/refs/heads/main/autoClick.js").then(response => response.text()).then(data => {
    var ca = "javascript: "+ data;
    h1.setAttribute("src", ca);
});
h1.onload = cdf;
};

function ccac(){
fetch("https://raw.githubusercontent.com/meteorTriangle/NKUST_AUTO/refs/heads/main/autoClickMid.js").then(response => response.text()).then(data => {
    var ca = "javascript: "+ data;
    h1.setAttribute("src", ca);
});
h1.onload = cdf;
};

var ccgh = h1.contentDocument.getElementById("excollect");

h1.onload = cdgf;

function cdgf(){
    var ddcv = h1.contentDocument.getElementsByClassName("pull-right-container");
    ddcv[1].click();
    h1.onload = cdf;
}
