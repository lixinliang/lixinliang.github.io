/*!
 * @project : tcm-meeting-invitation
 * @version : 0.0.1
 * @author  : UED.lixinliang
 * @update  : 2017-06-03 6:46:12 pm
 */!function(i){function e(a){if(n[a])return n[a].exports;var s=n[a]={exports:{},id:a,loaded:!1};return i[a].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var n={};return e.m=i,e.c=n,e.p="./js/",e(0)}([function(i,e,n){$(function(){if(/lixinliang/.test(location.hostname)){window.swiper=new Swiper("#swiper1",{parallax:!0,speed:600});var i=function(){console.log("slideChangeEnd");var i=swiper.slides[swiper.activeIndex];if(!i.classList.contains("init")){if(0==swiper.activeIndex&&(swiper.lockSwipes(),setTimeout(function(){$(".page-1 .item-2").css("opacity",1).addClass("animated").addClass("flipInX"),swiper.unlockSwipes()},1100)),1==swiper.activeIndex){setTimeout(function(){$(".page-2 .item-1 span").addClass("animated").addClass("fadeInUp")},100),setTimeout(function(){$(".page-2").find(".init-zoom").each(function(){var i=this,e=$(this).data("delay");setTimeout(function(){$(i).css("opacity",1).addClass("animated").addClass("zoomIn").on("animationend",function(){$(i).addClass("done")})},e)})},200);var e="./css/t1.css";$("head").append($('<link rel="stylesheet" href="'+e+'">'))}2==swiper.activeIndex&&setTimeout(function(){$(".item-14").addClass("animated").addClass("fadeIn")},200),3==swiper.activeIndex&&($(".item-26,.item-30").find("span").css("opacity",1).addClass("animated").addClass("slideInRight"),$(".item-28,.item-32").find("span").css("opacity",1).addClass("animated").addClass("slideInLeft")),4==swiper.activeIndex&&setTimeout(function(){$(".page-5").find(".init-zoom").each(function(){var i=this,e=$(this).data("delay");setTimeout(function(){$(i).css("opacity",1).addClass("animated").addClass("zoomIn").on("animationend",function(){$(i).addClass("done")})},e),$(this).is(".item-38")&&$(this).on("animationend",function(){$(".page-5 .touch").show()})})},50),5==swiper.activeIndex&&setTimeout(function(){$(".page-6").find(".init-zoom").each(function(){var i=this,e=$(this).data("delay");setTimeout(function(){$(i).css("opacity",1).addClass("animated").addClass("zoomIn").on("animationend",function(){$(i).addClass("done")})},e),$(this).is(".item-43")&&$(this).on("animationend",function(){$(".page-6 .touch").show()})})},50),6==swiper.activeIndex}console.log(swiper.activeIndex),7==swiper.activeIndex?$(".arrow").hide():$(".arrow").show(),i.classList.add("init")};swiper.on("slideChangeStart",function(){console.log("slideChangeStart"),i()}),swiper.on("transitionEnd",function(){console.log("transitionEnd"),i()}),$(".page-7 .item-47").on("click",function(){swiper.lockSwipes(),location.href="http://www.huodongxing.com/event/1386596098300"}),$(".show-pop1").on("click",function(){swiper.lockSwipes(),$("#swiper1 .swiper-wrapper").css("visibility","hidden"),$(".popup-1").addClass("active"),$(".arrow").hide();var i=new Swiper("#swiper2",{pagination:".swiper-pagination"});$(".popup-1").on("click",function(){swiper.unlockSwipes(),$(".popup-1").removeClass("active"),$("#swiper1 .swiper-wrapper").css("visibility","visible"),$(".arrow").show(),i.destroy(!0,!0)})}),$(".show-pop2").on("click",function(){swiper.lockSwipes(),$("#swiper1 .swiper-wrapper").css("visibility","hidden"),$(".popup-2").addClass("active"),$(".arrow").hide(),$(".popup-2").on("click",function(){swiper.unlockSwipes(),$(".popup-2").removeClass("active"),$("#swiper1 .swiper-wrapper").css("visibility","visible"),$(".arrow").show()})});var e=!0;$(".music").on("click",function(){e?$("audio")[0].volume=0:$("audio")[0].volume=1,$(".music").toggleClass("active"),e=!e}),$(".page-7 .item-47, .show-pop1, .show-pop2").on("touchstart",function(){$(this).addClass("zoom")}).on("touchend",function(){$(this).removeClass("zoom")});var n=function(){loading.done(),i(),$("audio")[0].play();var e=new Image;e.onload=function(){var i=new BubbleHearts,n=i.canvas;n.style.width="100%",n.style.height="130%",$(".stage").append(n),n.width=parseInt(getComputedStyle(n).width),n.height=parseInt(getComputedStyle(n).height),i.bubble(e,15e3),setInterval(function(){i.bubble(e,15e3)},2e3)},e.src="./img/flower.png"};setTimeout(n,1500),$("audio")[0].onload=function(){$("audio")[0].play()},document.addEventListener("WeixinJSBridgeReady",function(){var i=$("audio").attr("src");$("audio")[0].onload=function(){$("audio")[0].play()},$("audio").attr("src",i),$("audio")[0].play()},!1)}})}]);