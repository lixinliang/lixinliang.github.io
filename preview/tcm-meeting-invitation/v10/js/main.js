/*!
 * @project : tcm-meeting-invitation
 * @version : 0.0.1
 * @author  : UED.lixinliang
 * @update  : 2017-06-04 2:39:35 pm
 */!function(i){function n(e){if(a[e])return a[e].exports;var t=a[e]={exports:{},id:e,loaded:!1};return i[e].call(t.exports,t,t.exports,n),t.loaded=!0,t.exports}var a={};return n.m=i,n.c=a,n.p="./js/",n(0)}([function(i,n,a){$(function(){if(/lixinliang/.test(location.hostname)){window.swiper=new Swiper("#swiper1",{parallax:!0,speed:600});var i=function(){console.log("slideChangeEnd");var i=swiper.slides[swiper.activeIndex];i.classList.contains("init")||(0==swiper.activeIndex&&(swiper.lockSwipes(),setTimeout(function(){$(".page-1 .item-2").css("opacity",1).addClass("animated").addClass("flipInX"),swiper.unlockSwipes()},1100)),1==swiper.activeIndex&&(setTimeout(function(){$(".page-2 .item-1 span").addClass("animated").addClass("fadeInUp")},100),setTimeout(function(){$(".page-2").find(".init-zoom").each(function(){var i=this,n=$(this).data("delay");setTimeout(function(){$(i).css("opacity",1).addClass("animated").addClass("zoomIn").on("animationend",function(){$(i).addClass("done")})},n)})},200)),2==swiper.activeIndex&&setTimeout(function(){$(".item-14").addClass("animated").addClass("fadeIn")},200),3==swiper.activeIndex&&($(".item-26,.item-30").find("span").css("opacity",1).addClass("animated").addClass("slideInRight"),$(".item-28,.item-32").find("span").css("opacity",1).addClass("animated").addClass("slideInLeft")),4==swiper.activeIndex&&setTimeout(function(){$(".page-5").find(".init-zoom").each(function(){var i=this,n=$(this).data("delay");setTimeout(function(){$(i).css("opacity",1).addClass("animated").addClass("zoomIn").on("animationend",function(){$(i).addClass("done")})},n),$(this).is(".item-38")&&$(this).on("animationend",function(){$(".page-5 .touch").show()})})},50),6==swiper.activeIndex&&setTimeout(function(){$(".page-6").find(".init-zoom").each(function(){var i=this,n=$(this).data("delay");setTimeout(function(){$(i).css("opacity",1).addClass("animated").addClass("zoomIn").on("animationend",function(){$(i).addClass("done")})},n),$(this).is(".item-43")&&$(this).on("animationend",function(){$(".page-6 .touch").show()})})},50),6==swiper.activeIndex),console.log(swiper.activeIndex),9==swiper.activeIndex?$(".arrow").hide():$(".arrow").show(),i.classList.add("init")};swiper.on("slideChangeStart",function(){console.log("slideChangeStart"),i()}),swiper.on("transitionEnd",function(){console.log("transitionEnd"),i()}),$(".page-7 .item-47").on("click",function(){location.href="http://www.huodongxing.com/event/1386596098300"});var n=(new Swiper("#swiper3",{pagination:".swiper-pagination"}),!0);$(".music").on("click",function(){n?$("audio")[0].pause():$("audio")[0].play(),$(".music").toggleClass("active"),n=!n}),$(".page-7 .item-47").on("touchstart",function(){$(this).addClass("zoom")}).on("touchend",function(){$(this).removeClass("zoom")});var a=function(){loading.done(),i(),$("audio")[0].play();var n=new Image;n.onload=function(){var i=new BubbleHearts,a=i.canvas;a.style.width="100%",a.style.height="130%",$(".stage").append(a),a.width=parseInt(getComputedStyle(a).width),a.height=parseInt(getComputedStyle(a).height),i.bubble(n,15e3),setInterval(function(){i.bubble(n,15e3)},2e3)},n.src="./img/flower.png"};setTimeout(a,1500),$("audio")[0].onload=function(){$("audio")[0].play()},document.addEventListener("WeixinJSBridgeReady",function(){var i=$("audio").attr("src");$("audio")[0].onload=function(){$("audio")[0].play()},$("audio").attr("src",i),$("audio")[0].play()},!1)}})}]);