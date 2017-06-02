/*!
 * @project : tcm-meeting-invitation
 * @version : 0.0.1
 * @author  : UED.lixinliang
 * @update  : 2017-06-02 10:38:58 pm
 */!function(e){function n(t){if(i[t])return i[t].exports;var o=i[t]={exports:{},id:t,loaded:!1};return e[t].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var i={};return n.m=e,n.c=i,n.p="./js/",n(0)}([function(e,n,i){$(function(){window.swiper=new Swiper(".swiper-container",{parallax:!0,speed:600,initialSlide:0}),swiper.on("slideChangeEnd",function(){var e=swiper.slides[swiper.activeIndex];e.classList.add("init")}),$(".page-7 .item-47").on("tap",function(){swiper.lockSwipes();location.href="http://www.huodongxing.com/event/1386596098300"}),setTimeout(function(){return loading.done()},1e3)})}]);