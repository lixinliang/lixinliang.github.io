/*!
 * @project : tcm-meeting-invitation
 * @version : 0.0.1
 * @author  : UED.lixinliang
 * @update  : 2017-06-03 12:15:47 pm
 */
!function(e){function i(a){if(s[a])return s[a].exports;var p=s[a]={exports:{},id:a,loaded:!1};return e[a].call(p.exports,p,p.exports,i),p.loaded=!0,p.exports}var s={};return i.m=e,i.c=s,i.p="./js/",i(0)}([function(e,i,s){$(function(){if(/lixinliang/.test(location.hostname)){var e="./css/p7.css";$("head").append($('<link rel="stylesheet" href="'+e+'">')),window.swiper=new Swiper("#swiper1",{parallax:!0,speed:600,initialSlide:0});var i=function(){console.log("slideChangeEnd");var e=swiper.slides[swiper.activeIndex];if(!e.classList.contains("init")){if(0==swiper.activeIndex&&(swiper.lockSwipes(),setTimeout(function(){$(".page-1 .item-2").css("opacity",1).addClass("animated").addClass("flipInX"),swiper.unlockSwipes()},1300)),1==swiper.activeIndex){setTimeout(function(){$(".page-2 .item-1 span").addClass("animated").addClass("fadeInUp")},300);var i="./css/p5.css";$("head").append($('<link rel="stylesheet" href="'+i+'">'))}if(2==swiper.activeIndex){var s="./css/p6.css";$("head").append($('<link rel="stylesheet" href="'+s+'">'))}if(3==swiper.activeIndex){$(".item-26,.item-30").find("span").css("opacity",1).addClass("animated").addClass("slideInRight"),$(".item-28,.item-32").find("span").css("opacity",1).addClass("animated").addClass("slideInLeft");var a="./css/p7.css";$("head").append($('<link rel="stylesheet" href="'+a+'">'))}if(4==swiper.activeIndex){var p="./css/p8.css";$("head").append($('<link rel="stylesheet" href="'+p+'">'))}5==swiper.activeIndex,6==swiper.activeIndex}e.classList.add("init")};swiper.on("slideChangeStart",function(){i()}),$(".page-7 .item-47").on("click",function(){}),$(".show-pop1").on("click",function(){swiper.lockSwipes(),$("#swiper1 .swiper-wrapper").css("visibility","hidden"),$(".popup-1").addClass("active");var e=new Swiper("#swiper2",{pagination:".swiper-pagination"});$(".popup-1").on("click",function(){swiper.unlockSwipes(),$(".popup-1").removeClass("active"),$("#swiper1 .swiper-wrapper").css("visibility","visible"),e.destroy()})}),$(".show-pop2").on("click",function(){swiper.lockSwipes(),$("#swiper1 .swiper-wrapper").css("visibility","hidden"),$(".popup-2").addClass("active"),$(".popup-2").on("click",function(){swiper.unlockSwipes(),$(".popup-2").removeClass("active"),$("#swiper1 .swiper-wrapper").css("visibility","visible")})}),$(".page-7 .item-47, .show-pop1, .show-pop2").on("touchstart",function(){$(this).addClass("zoom")}).on("touchend",function(){$(this).removeClass("zoom")});var s=function(){loading.done(),i(),$("audio")[0].play()};setTimeout(s,1500),document.addEventListener("WeixinJSBridgeReady",function(){var e=$("audio").attr("src");$("audio").attr("src",e),$("audio")[0].play()},!1)}})}]);