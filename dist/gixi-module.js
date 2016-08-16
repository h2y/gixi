module.exports=function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=r(/*! ./gixi */1),o=n(i);"undefined"!=typeof jQuery&&jQuery?!function(t){t.fn.gixi=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];void 0===t.seed&&(t.seed=this.data("gixiseed"));var e=new o["default"](this.height(),t.seed);"undefined"!==t.color&&(e.fillStyle=t.color);var r=e.getImage();"IMG"!==this.prop("tagName")?this.css({"background-image":"url("+r+")"}):this.attr("src",r)}}(jQuery):"undefined"!=typeof window?window.GIXI=o["default"]:t.exports=o["default"],e["default"]=o["default"]},/*!*********************!*\
  !*** ./lib/gixi.js ***!
  \*********************/
function(t,e){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=function(){function t(e){r(this,t),this.r=Math.floor(200*e.random()),this.g=Math.floor(200*e.random()),this.b=Math.floor(200*e.random()),this.t=1}return n(t,[{key:"rgba",value:function(){return"rgba("+this.r+","+this.g+","+this.b+","+this.t+")"}}]),t}(),o=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?60:arguments[0],n=arguments.length<=1||void 0===arguments[1]?Math.random():arguments[1];r(this,t),this.w=e,this.h=e,this.PARTITIONS=3,this.LESS_SEED=6,this.BASE_SEED=5,this.SEED_H=this.h/this.BASE_SEED,this.SEED_W=this.w/this.BASE_SEED,this.random_seed=0,n=n.toString();for(var i=0;i<n.length;i++)this.random_seed+=n.charCodeAt(i)}return n(t,[{key:"random",value:function(){return this.random_seed=Math.sin(34812*this.random_seed+.3),Math.abs(this.random_seed)}},{key:"getImage",value:function(){var t=document.createElement("canvas"),e=null;if(t.width=this.w,t.height=this.h,!t&&!t.getContext)throw new Error("Canvas does not supported");return this.drw=t.getContext("2d"),this.drw.fillStyle=this.fillStyle||new i(this).rgba(),this.map(this.grid()),e=t.toDataURL(),t=null,e}},{key:"draw",value:function(){this.drw.fillRect.apply(this.drw,arguments)}},{key:"map",value:function(t){for(var e=0;e<t.length;e++)for(var r=0;r<t[e].length;r++)t[e][r]===!0&&(this.draw(this.SEED_H*e,this.SEED_W*r,this.SEED_W,this.SEED_H),e<this.PARTITIONS-1&&this.draw(this.SEED_H*(this.PARTITIONS+1-e),this.SEED_W*r,this.SEED_W,this.SEED_H))}},{key:"grid",value:function(){for(var t=this,e=function(){for(var e=[],r=0;r<t.PARTITIONS;r++){e[r]=[];for(var n=0;n<t.BASE_SEED;n++)e[r][n]=!!Math.floor(2*t.random())}return e[t.PARTITIONS-1]=e[t.PARTITIONS-1].map(function(r,n){return e[t.PARTITIONS-2][n]!==r&&!!Math.floor(2*t.random())}),{map:e,dots:function(){return e.map(function(t){return t.reduce(function(t,e){return e?t+e:t})}).reduce(function(t,e){return e+t})},isFilledTop:function(){return e.map(function(t){return t[0]}).reduce(function(t,e){return!(!t&&!e)})},isFilledBottom:function(){return e.map(function(t){return t[t.length-1]}).reduce(function(t,e){return!(!t&&!e)})}}},r=e();r.dots()<this.LESS_SEED||!r.isFilledTop()||!r.isFilledBottom();)r=e();return r.map}}]),t}();e["default"]=o}]);
//# sourceMappingURL=gixi-module.js.map