var tinySlider=function(){"use strict";function t(t){function f(){xt.className="tiny-slider",gn.wrap(Et,xt),mt=xt.clientWidth}function y(){gt=vn(),st=hn(),vt=pn(),Vt=Xt||"page"===t.slideBy?gt:t.slideBy}function b(){var t=At&&Pt?D():Pt+Tt;Et.classList.add("tiny-content",yt,bt),Et.style.cssText+="width: "+(st+1)*Qt+"px; margin-left: "+-(Jt*st+Ct)+"px; padding-left: "+t+"px; "+h+": translate3d(0px, 0px, 0px);"}function g(){navigator.msMaxTouchPoints&&(xt.classList.add("ms-touch"),xt.addEventListener("scroll",et,!1))}function E(){""===Et.id?Et.id=ct=n():ct=Et.id;for(var t=0;t<Mt;t++)wt[t].id=ct+"item"+t}function x(){if(Ft||Pt){for(var t=document.createDocumentFragment(),n=document.createDocumentFragment(),e=Jt;e--;){var i=e%Mt,a=wt[i].cloneNode(!0),r=wt[Mt-1-i].cloneNode(!0);d(a,"id"),d(r,"id"),t.insertBefore(a,t.firstChild),n.appendChild(r)}Et.appendChild(t),Et.insertBefore(n,Et.firstChild),wt=Et.children}o(wt,{style:"width: "+(st-Tt)+"px; "+Lt+": "+Tt+"px","aria-hidden":"true"})}function w(){Nt&&(t.controlsContainer||(gn.append(xt,'<div class="tiny-controls" aria-label="Carousel Navigation"><button data-controls="prev" tabindex="-1" aria-controls="'+ct+'" type="button">'+kt[0]+'</button><button data-controls="next" tabindex="0" aria-controls="'+ct+'" type="button">'+kt[1]+"</button></div>"),Dt=xt.querySelector(".tiny-controls")),lt=Dt.querySelector('[data-controls="prev"]'),ut=Dt.querySelector('[data-controls="next"]'),a(Dt,"tabindex")||(o(Dt,{"aria-label":"Carousel Navigation"}),o(Dt.children,{"aria-controls":ct,tabindex:"-1"})))}function M(){if(Wt){if(!t.navContainer){for(var n="",e=0;e<Mt;e++)n+='<button data-slide="'+e+'" tabindex="-1" aria-selected="false" aria-controls="'+ct+"item"+e+'" type="button"></button>';Ht&&(n+='<button data-action="stop" type="button"><span hidden>Stop Animation</span>'+Gt[0]+"</button>"),n='<div class="tiny-nav" aria-label="Carousel Pagination">'+n+"</div>",gn.append(xt,n),It=xt.querySelector(".tiny-nav")}if(ft=It.querySelectorAll("[data-slide]"),!a(It,"aria-label")){o(It,{"aria-label":"Carousel Pagination"});for(var i=0;i<Mt;i++)o(ft[i],{tabindex:"-1","aria-selected":"false","aria-controls":ct+"item"+i})}for(var r=vt;r<Mt;r++)o(ft[r],{hidden:""});Zt=vt}}function T(){Ht&&(It||(gn.append(xt,'<div class="tiny-nav" aria-label="Carousel Pagination"><button data-action="stop" type="button"><span hidden>Stop Animation</span>'+Gt[0]+"</button></div>"),It=xt.querySelector(".tiny-nav")),rn=It.querySelector("[data-action]"),Y())}function L(){ht=mn();for(var t=ht;t<ht+gt;t++)o(wt[t],{"aria-hidden":"false"});Nt&&(o(ut,{tabindex:"0"}),(0===nn&&!Ft||jt)&&(lt.disabled=!0)),Wt&&o(ft[0],{tabindex:"0","aria-selected":"true"})}function C(){if(p&&Et.addEventListener(p,R,!1),Yt&&(Et.addEventListener("touchstart",it,!1),Et.addEventListener("touchmove",at,!1),Et.addEventListener("touchend",rt,!1),Et.addEventListener("touchcancel",rt,!1)),Wt)for(var t=0;t<Mt;t++)ft[t].addEventListener("click",K,!1),ft[t].addEventListener("keydown",nt,!1);if(Nt&&(lt.addEventListener("click",X,!1),ut.addEventListener("click",V,!1),lt.addEventListener("keydown",tt,!1),ut.addEventListener("keydown",tt,!1)),Ht&&(rn.addEventListener("click",Q,!1),Nt&&(lt.addEventListener("click",Z,!1),ut.addEventListener("click",Z,!1)),Wt))for(var n=0;n<Mt;n++)ft[n].addEventListener("click",Z,!1);Ot&&document.addEventListener("keydown",$,!1),window.addEventListener("resize",ot,!1),window.addEventListener("scroll",dt,!1)}function P(){if(Kt&&gn.isInViewport(Et)){for(var t=[],n=nn+Jt,e=n-1;e<n+gt+1;e++){for(var i=wt[e].querySelectorAll(".tiny-lazy"),a=i.length;a--;t.unshift(i[a]));t.unshift()}for(var o=t.length;o--;){var d=t[o];d.classList.contains("loaded")||(d.src=r(d,"data-src"),d.classList.add("loaded"))}}}function S(){if(Rt){var t=[];ht=mn();for(var n=ht-1;n<ht+gt;n++)for(var e=wt[n].querySelectorAll("img"),i=e.length;i--;)t.push(e[i]);0===t.length?W():A(t)}}function A(t){for(var n=t.length;n--;)u(t[n])&&t.splice(n,1);0===t.length?W():setTimeout(function(){A(t)},16)}function N(){f(),y(),b(),g(),E(),x(),w(),M(),T(),L(),C(),k(),P(),S()}function k(){Mt<=gt?(Wt=Nt=Ht=Ft=jt=!1,nn=0,It&&s(It),Dt&&s(Dt),rn&&s(rn)):(Wt=t.nav,Nt=t.controls,Ht=t.autoplay,Ft=!t.rewind&&t.loop,jt=t.rewind,Wt&&l(It),Nt&&l(Dt),Ht&&l(rn))}function D(){return(mt-st*Math.floor(mt/st)+Tt)/2}function W(){var t,n=[];ht=mn();for(var e=ht-St;e<ht+gt;e++)n.push(wt[e].offsetHeight);t=Math.max.apply(null,n),bn(1),Et.style.height=t+"px"}function I(){xt.style.msScrollSnapPointsX="snapInterval(0%, "+st+")"}function O(){var t,n,e,i,a=ht;ht=mn(),ht!==a&&(ht>a?(t=a,n=Math.min(a+gt,ht),e=Math.max(a+gt,ht),i=ht+gt):(t=Math.max(ht+gt,a),n=a+gt,e=ht,i=Math.min(ht+gt,a))),Vt%1!==0&&(t=Math.round(t),n=Math.round(n),e=Math.round(e),i=Math.round(i));for(var r=t;r<n;r++)o(wt[r],{"aria-hidden":"true"});for(var d=e;d<i;d++)o(wt[d],{"aria-hidden":"false"})}function B(){if(vt!==Zt)if(vt>Zt)for(var t=Zt;t<vt;t++)d(ft[t],"hidden");else for(var n=vt;n<Zt;n++)o(ft[n],{hidden:""});Zt=vt}function H(){var n;if($t===-1){var e=nn<0?nn+Mt:nn%Mt;return t.navContainer?e:(n=Math.floor(e/gt),Ft||Mt%gt===0||nn!==Mt-gt||(n+=1),n)}return n=$t,$t=-1,n}function z(){Wt&&(_t=H(),_t!==tn&&(o(ft[tn],{tabindex:"-1","aria-selected":"false"}),o(ft[_t],{tabindex:"0","aria-selected":"true"}),tn=_t))}function q(){if(Nt&&!Ft)if(0===nn||!jt&&nn===Mt-gt){var t=0===nn?lt:ut,n=0===nn?ut:lt;_(t,n),t.disabled=!0,o(t,{tabindex:"-1"}),n.disabled=!1,o(n,{tabindex:"0"})}else lt.disabled=!1,ut.disabled=!1}function G(t,n){v&&bn(t),En(n)}function j(){var t=Vt-Jt+St,n=Mt+Jt-gt-Vt-1;(nn<t||nn>n)&&(nn-Mt>=t&&nn-Mt<=n?nn-=Mt:nn+=Mt,G(0))}function F(t){o(Et,{"aria-busy":"true"}),G(t),p||R()}function R(t){"height"!==t.propertyName&&(Ft&&j(),O(),z(),q(),P(),S(),d(Et,"aria-busy"))}function U(t){if("true"!==r(Et,"aria-busy")){var n=nn+t*Vt,e=Math.abs(t*Vt);nn=Ft?n:Math.max(0,Math.min(n,Mt-gt)),F(e)}}function X(){U(-1)}function V(){U(jt&&nn===Mt-gt?(gt-Mt)/Vt:1)}function K(n){if("true"!==r(Et,"aria-busy")){for(var e,i=n.target||n.srcElement;gn.indexOf(ft,i)===-1;)i=i.parentNode;$t=e=Number(r(i,"data-slide"));var a,o;a=t.navContainer?e:e*gt,a=Ft?a:Math.min(a,Mt-gt),o=Math.abs(a-nn),nn=a,F(o)}}function Y(){an=setInterval(function(){U(qt)},zt),rn.setAttribute("data-action","stop"),rn.innerHTML="<span hidden>Stop Animation</span>"+Gt[1],on=!0}function J(){clearInterval(an),rn.setAttribute("data-action","start"),rn.innerHTML="<span hidden>Stop Animation</span>"+Gt[0],on=!1}function Q(){on?J():Y()}function Z(){on&&J()}function $(t){t=t||window.event,t.keyCode===m.LEFT?U(-1):t.keyCode===m.RIGHT&&U(jt&&nn===Mt-gt?(gt-Mt)/Vt:1)}function _(t,n){"object"==typeof t&&"object"==typeof n&&t===document.activeElement&&(t.blur(),n.focus())}function tt(t){t=t||window.event;var n=t.keyCode,e=document.activeElement;switch(n){case m.LEFT:case m.UP:case m.HOME:case m.PAGEUP:e!==lt&&lt.disabled!==!0&&_(e,lt);break;case m.RIGHT:case m.DOWN:case m.END:case m.PAGEDOWN:e!==ut&&ut.disabled!==!0&&_(e,ut);break;case m.ENTER:case m.SPACE:e===ut?V():X()}}function nt(t){t=t||window.event;var n=t.keyCode,e=document.activeElement,i=r(e,"data-slide");switch(n){case m.LEFT:case m.PAGEUP:i>0&&_(e,e.previousElementSibling);break;case m.UP:case m.HOME:0!==i&&_(e,ft[0]);break;case m.RIGHT:case m.PAGEDOWN:i<vt-1&&_(e,e.nextElementSibling);break;case m.DOWN:case m.END:i<vt-1&&_(e,ft[vt-1]);break;case m.ENTER:case m.SPACE:K(t)}}function et(){G(0,Et.scrollLeft())}function it(t){var n=t.changedTouches[0];un=parseInt(n.clientX),fn=parseInt(n.clientY),dn=Number(Et.style[h].slice(12,-13))}function at(t){var n=t.changedTouches[0];cn=parseInt(n.clientX)-un,sn=parseInt(n.clientY)-fn,"horizontal"===i(e(sn,cn),15)&&(ln=!0,t.preventDefault(),G(0,dn+cn))}function rt(t){var n=t.changedTouches[0];if(cn=parseInt(n.clientX)-un,ln&&0!==cn){ln=!1,t.preventDefault();var e=Ft?-Jt:0,i=Ft?Mt+Jt-gt:Mt-gt,a=-(dn+cn)/st;a=cn>0?Math.floor(a):Math.ceil(a),nn=Math.max(e,Math.min(a,i));var r=-nn*st;Ft||Pt||!At||(r=Math.max(-(st*Mt-mt),r)),G(1,r),p||R()}}function ot(){clearTimeout(pt),pt=setTimeout(function(){xt.clientWidth!==mt&&(mt=xt.clientWidth,y(),k(),yn(),B(),navigator.msMaxTouchPoints&&I(),G(0),p||R())},100)}function dt(){en||window.requestAnimationFrame(function(){P(),en=!1}),en=!0}if(t=gn.extend({container:document.querySelector(".slider"),mode:"carousel",direction:"horizontal",items:1,gutter:0,gutterPosition:"right",edgePadding:0,fixedWidth:!1,slideByPage:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:250,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],loop:!0,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,rewind:!1},t||{}),"object"!=typeof t.container||null===t.container)return{init:function(){},destory:function(){}};var ct,st,lt,ut,ft,vt,ht,pt,mt,yt=t.mode,bt=t.direction,gt=t.items,Et=t.container,xt=document.createElement("div"),wt=Et.children,Mt=wt.length,Tt=t.gutter,Lt="right"===t.gutterPosition?"margin-right":"margin-left",Ct="left"===t.gutterPosition?Tt:0,Pt=t.edgePadding,St=Pt?1:0,At=t.fixedWidth,Nt=t.controls,kt=t.controlsText,Dt=!!t.controlsContainer&&t.controlsContainer,Wt=t.nav,It=!!t.navContainer&&t.navContainer,Ot=t.arrowKeys,Bt=v?t.speed:0,Ht=t.autoplay,zt=t.autoplayTimeout,qt="forward"===t.autoplayDirection?1:-1,Gt=t.autoplayText,jt=t.rewind,Ft=!t.rewind&&t.loop,Rt=t.autoHeight,Ut=!At&&t.responsive,Xt=t.slideByPage,Vt=Xt||"page"===t.slideBy?gt:t.slideBy,Kt=t.lazyload,Yt=t.touch,Jt=Ft?Math.ceil(1.5*Mt):Pt?1:0,Qt=Mt+2*Jt,Zt=Mt,$t=-1,_t=0,tn=0,nn=0,en=!1;if(Ht)var an,rn,on=!1;if(Yt)var dn,cn,sn,ln,un=0,fn=0;var vn=function(){return At?function(){return Math.max(1,Math.min(Mt,Math.floor(mt/At)))}:function(){var n=t.items,e=document.documentElement.clientWidth,i="object"==typeof Ut&&Object.keys(Ut);if(i)for(var a=0;a<i.length;a++)e>=i[a]&&(n=Ut[i[a]]);return Math.max(1,Math.min(Mt,n))}}(),hn=function(){return At?function(){return At+Tt}:navigator.appVersion.indexOf("MSIE 8")>0?function(){return Math.round((mt-Tt-2*Pt)/gt)}:function(){return(mt-Tt-2*Pt)/gt}}(),pn=function(){return t.navContainer?function(){return Mt}:function(){return Math.ceil(Mt/gt)}}(),mn=function(){return Jt+nn},yn=function(){return At?function(){Et.style.paddingLeft=D()+"px"}:function(){Et.style.width=(st+1)*Qt+"px",Et.style.marginLeft=-(Jt*st+Ct)+"px";for(var t=Qt;t--;)wt[t].style.width=st-Tt+"px"}}(),bn=function(){return v?function(t){Et.style[v]=Bt*t/1e3+"s"}:function(){}}(),En=function(){return h?function(t){var n=t||-st*nn;Et.style[h]="translate3d("+n+"px, 0, 0)"}:function(t){var n=t||-st*nn;Et.style.left=n+"px"}}();return{init:N,destory:function(){if(gn.unwrap(xt),xt=null,Et.classList.remove("tiny-content",yt,bt),d(Et,["id","style"]),Ft)for(var n=Jt;n--;)wt[0].remove(),wt[wt.length-1].remove();d(wt,["id","style","aria-hidden"]),ct=Mt=null,Nt&&(t.controlsContainer?(d(Dt,["aria-label"]),d(Dt.children,["aria-controls","tabindex"]),c(Dt)):(Dt.remove(),Dt=lt=ut=null)),Wt&&(t.navContainer?(d(It,["aria-label"]),d(ft,["aria-selected","aria-controls","tabindex"]),c(It)):(It.remove(),It=null),ft=null),Ht&&(t.navContainer||null===It?c(rn):(It.remove(),It=null)),c(Et),Ot&&document.removeEventListener("keydown",$,!1),window.removeEventListener("resize",ot,!1),window.removeEventListener("scroll",dt,!1)},hasAttr:a,getAttr:r,setAttrs:o,removeAttrs:d,removeEvents:c,getSlideId:n,toDegree:e,getPanDirection:i,hideElement:s,showElement:l,mode:yt,direction:bt,gutter:Tt,gutterPosition:t.gutterPosition,edgePadding:Pt,fixedWidth:At,controls:Nt,nav:Wt,rewind:jt,loop:Ft,autoHeight:Rt,slideBy:Vt,lazyload:Kt,touch:Yt,speed:Bt,items:vn(),cloneCount:Jt,navCountVisible:function(){return vt},index:function(){return nn},slideWidth:function(){return st},slideContainer:Et,slideItems:wt,slideCount:Mt,controlsContainer:function(){return Dt},prevButton:function(){return lt},nextButton:function(){return ut},navContainer:function(){return It},allNavs:function(){return ft}}}function n(){return void 0===window.tinySliderNumber?window.tinySliderNumber=1:window.tinySliderNumber++,"tinySlider"+window.tinySliderNumber}function e(t,n){return Math.atan2(t,n)*(180/Math.PI)}function i(t,n){return Math.abs(90-Math.abs(t))>=90-n?"horizontal":Math.abs(90-Math.abs(t))<=n&&"vertical"}function a(t,n){return t.hasAttribute(n)}function r(t,n){return t.getAttribute(n)}function o(t,n){if(t=gn.isNodeList(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(n))for(var e=t.length;e--;)for(var i in n)t[e].setAttribute(i,n[i])}function d(t,n){t=gn.isNodeList(t)||t instanceof Array?t:[t],n=n instanceof Array?n:[n];for(var e=n.length,i=t.length;i--;)for(var a=e;a--;)t[i].removeAttribute(n[a])}function c(t){var n=t.cloneNode(!0),e=t.parentNode;e.insertBefore(n,t),t.remove(),t=null}function s(t){a(t,"hidden")||o(t,{hidden:""})}function l(t){a(t,"hidden")&&d(t,"hidden")}function u(t){return"boolean"==typeof t.complete?t.complete:"number"==typeof t.naturalWidth?0!==t.naturalWidth:void 0}function f(){var t,n=document.createElement("fakeelement"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in e)if(void 0!==n.style[t])return e[t];return!1}var v=gn.getSupportedProp(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]),h=gn.getSupportedProp(["transform","WebkitTransform","MozTransform","OTransform"]),p=f(),m={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40};return t}();
//# sourceMappingURL=../sourcemaps/tiny-slider.native.js.map
