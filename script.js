let redBtn=document.querySelector("#red");
let blueBtn=document.querySelector("#blue");
let blackBtn=document.querySelector("#black");

let bg=document.querySelector("#bike");

redBtn.onclick=function(){
    bg.style.backgroundImage="url(images/BMW1.png)";
}
blueBtn.onclick=function(){
    bg.style.backgroundImage="url(images/BMW2.png)";
}
blackBtn.onclick=function(){
    bg.style.backgroundImage="url(images/BMW3.png)";
    
}




