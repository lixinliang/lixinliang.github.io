/*!
 * @project : tcm-meeting-invitation
 * @version : 0.0.1
 * @author  : UED.lixinliang
 * @update  : 2017-06-03 12:25:13 pm
 */!function(i){function e(a){if(s[a])return s[a].exports;var n=s[a]={exports:{},id:a,loaded:!1};return i[a].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var s={};return e.m=i,e.c=s,e.p="./js/",e(0)}([function(i,e,s){$(function(){if(/lixinliang/.test(location.hostname)){window.swiper=new Swiper("#swiper1",{parallax:!0,speed:600});var i=function(){console.log("slideChangeEnd");var i=swiper.slides[swiper.activeIndex];if(!i.classList.contains("init")){if(0==swiper.activeIndex&&(swiper.lockSwipes(),setTimeout(function(){$(".page-1 .item-2").css("opacity",1).addClass("animated").addClass("flipInX"),swiper.unlockSwipes()},1300)),1==swiper.activeIndex){setTimeout(function(){$(".page-2 .item-1 span").addClass("animated").addClass("fadeInUp")},300);var e="./css/p5.css";$("head").append($('<link rel="stylesheet" href="'+e+'">'))}if(2==swiper.activeIndex){var s="./css/p6.css";$("head").append($('<link rel="stylesheet" href="'+s+'">'))}if(3==swiper.activeIndex){$(".item-26,.item-30").find("span").css("opacity",1).addClass("animated").addClass("slideInRight"),$(".item-28,.item-32").find("span").css("opacity",1).addClass("animated").addClass("slideInLeft");var a="./css/p7.css";$("head").append($('<link rel="stylesheet" href="'+a+'">'))}if(4==swiper.activeIndex){var n="./css/p8.css";$("head").append($('<link rel="stylesheet" href="'+n+'">'))}5==swiper.activeIndex,6==swiper.activeIndex}i.classList.add("init")};swiper.on("slideChangeStart",function(){i()}),$(".page-7 .item-47").on("click",function(){swiper.lockSwipes(),location.href="http://www.huodongxing.com/event/1386596098300"}),$(".show-pop1").on("click",function(){swiper.lockSwipes(),$("#swiper1 .swiper-wrapper").css("visibility","hidden"),$(".popup-1").addClass("active");var i=new Swiper("#swiper2",{pagination:".swiper-pagination"});$(".popup-1").on("click",function(){swiper.unlockSwipes(),$(".popup-1").removeClass("active"),$("#swiper1 .swiper-wrapper").css("visibility","visible"),i.destroy()})}),$(".show-pop2").on("click",function(){swiper.lockSwipes(),$("#swiper1 .swiper-wrapper").css("visibility","hidden"),$(".popup-2").addClass("active"),$(".popup-2").on("click",function(){swiper.unlockSwipes(),$(".popup-2").removeClass("active"),$("#swiper1 .swiper-wrapper").css("visibility","visible")})}),$(".page-7 .item-47, .show-pop1, .show-pop2").on("touchstart",function(){$(this).addClass("zoom")}).on("touchend",function(){$(this).removeClass("zoom")});var e=function(){loading.done(),i(),$("audio")[0].play()};setTimeout(e,1500),$("audio")[0].onload=function(){$("audio")[0].play()},document.addEventListener("WeixinJSBridgeReady",function(){var i=$("audio").attr("src");$("audio")[0].onload=function(){$("audio")[0].play()},$("audio").attr("src",i),$("audio")[0].play()},!1)}})}]);