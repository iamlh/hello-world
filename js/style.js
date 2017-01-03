$(function(){
    //鼠标悬停，自动切换到对应图片
   $(".market-tip").mouseenter(function(){
     window.clearInterval(automatic);  
     var num=$(this).index();
     $(".phone-pic").animate({marginLeft:-453*num},"slow");

   });
  // 图片自动轮播效果
   var a=0;
   var automatic=setInterval(function(){
     a++;
     a=a%4;
     $(".phone-pic").animate({marginLeft:-453*a},"slow");
     $(".market-tip").eq().addClass("on").siblings().removeClass("on");
   },3000);

});