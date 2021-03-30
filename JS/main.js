window.onload = function(){
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    ctx.fillStyle="#FF0000";
    ctx.fillRect(10,10,150,75);

    var c1 = document.getElementById("myCanvasY");
    var ctx1=c1.getContext("2d");
    ctx1.beginPath();
    ctx1.arc(95,50,40,0,2*Math.PI);
    // 实心和虚心的区别
    // ctx1.fill();
    ctx1.stroke();

    var c2 = document.getElementById("myCanvasX");
    var ctx2=c2.getContext("2d");
    // var grd = ctx2.createLinearGradient(0,0,200,0);
    var grd = ctx2.createRadialGradient(75,50,50,90,60,50);
    grd.addColorStop(0,"red");
    grd.addColorStop(1,"white");
    ctx2.fillStyle = grd;
    ctx2.fillRect(0,0,160,120);
}