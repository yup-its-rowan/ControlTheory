//for pfp
img = document.getElementById("pfp");
var reg1 = true;
if (img != null){
    img.addEventListener("click", onClick1);
}
function onClick1(){
    var currentWidth = img.clientWidth;
    if(reg1){
        img.style.width = (currentWidth+75) + "px";
        reg1 = false;
    } else {
        img.style.width = (currentWidth-75) + "px";
        reg1 = true;
    }
}
//for pid
img2 = document.getElementById("pidp");
var reg2 = true;
if (img2 != null){
    img2.addEventListener("click", onClick2);
}
function onClick2(){
    var currentWidth2 = img2.clientWidth;
    if(reg2){
        img2.style.width = (currentWidth2+75) + "px";
        reg2 = false;
    } else {
        img2.style.width = (currentWidth2-75) + "px";
        reg2 = true;
    }
}    
//for time
time = document.getElementById("time");
var reg3 = true;
if (time != null){
    time.addEventListener("click", onClick3);
}
function onClick3(){
    var currentWidth3 = time.clientWidth;
    if(reg3){
        time.style.width = (currentWidth3+75) + "px";
        reg3 = false;
    } else {
        time.style.width = (currentWidth3-75) + "px";
        reg3 = true;
    }
}  
//for encoder
encoder = document.getElementById("encoder");
var reg4 = true;
if (encoder != null){
    encoder.addEventListener("click", onClick4);
}
function onClick4(){
    var currentWidth4 = encoder.clientWidth;
    if(reg4){
        encoder.style.width = (currentWidth4+75) + "px";
        reg4 = false;
    } else {
        encoder.style.width = (currentWidth4-75) + "px";
        reg4 = true;
    }
}
