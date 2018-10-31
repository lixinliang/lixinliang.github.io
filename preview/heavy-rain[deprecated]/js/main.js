/*!
 * @project : heavy-rain
 * @version : 1.0.0
 * @author  : UED.lixinliang
 * @update  : 2017-11-21 9:40:23 am
 */!function(e){function o(t){if(r[t])return r[t].exports;var n=r[t]={exports:{},id:t,loaded:!1};return e[t].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}var r={};return o.m=e,o.c=r,o.p="./js/",o(0)}([function(e,o){document.addEventListener("DOMContentLoaded",function(){[].slice.call(document.querySelectorAll(".swiper-container")).forEach(function(e,o){0==o&&new Swiper(e,{loop:!0}),1==o&&new Swiper(e,{loop:!0,speed:1200,autoplay:4e3})}),[].slice.call(document.querySelectorAll('[data-role="video"]')).forEach(function(e,o){e.addEventListener("click",function(){var o=e.querySelector("iframe");o.src||(o.style.display="block",o.src=o.dataset.src)},!1)})},!1)}]);