!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(){const e=Object.create(null);return e.initEvent=function(e,t,n){this.elem=document.getElementById(e),this.eventType=t,this.args=n,Array.isArray(n)&&(this.args=Object.assign({},n))},e.addEvent=function(e,t){this.boundFunc=e.bind(this.elem,this.args),this.boundOptions=t,this.elem.addEventListener(this.eventType,this.boundFunc,this.boundOptions)},e.removeEvent=function(){this.elem.removeEventListener(this.eventType,this.boundFunc,this.boundOptions)},e}n.r(t),n(4);const o=n(2),i=Object.create(null),u=function(){const e=Object.create(null);return e.init=function(){this.elems=Object.create(null)},e.subscribe=function(e,t){this.elems[e]=t},e.unsubscribe=function(e){"string"==typeof e?delete this.elems[e]:e.forEach(e=>delete this.elems[e])},e.broadcast=function(e,...t){const n=Object.keys(this.elems);for(let r=0;r<n.length;r+=1)this.elems[n[r]][e](...t)},e}();function a(e,t){const n=s(e,t);u.elems[n].getRandomColour()}function s(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function c(){const e=Object.create(function(){const e=Object.create(null);return e.create=function(e,t){this.elem=document.createElement(e),this.elem.id=t,this.id=t},e.init=function(e){this.id=e,this.elem=document.getElementById(this.id)},e}());return e.getRandomColour=function(){const e=o({hue:"random",luminosity:"light"});this.elem.style.backgroundColor=e},e.getRandomHue=function(){const e=function(e){let t=e;return t.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)}(this.elem.style.backgroundColor),t=(n=e[1],r=e[2],i=e[3],`#${d(n)}${d(r)}${d(i)}`);var n,r,i;this.elem.style.backgroundColor=o({hue:t,luminosity:"light"})},e}function l(e,t,n=0,r=1e3,o="",i=20,u=100){let a=n,s=r;"desc"===o?(s-=i)<=u&&(s=u):"asc"===o&&(s+=i)>=u&&(s=u),a+=1,t(),a<e&&setTimeout(l,s,e,t,a,s)}function d(e){let t=e;"string"==typeof e&&(t=parseInt(t,10));const n=t.toString(16);return 1===n.length?`0${n}`:n}u.init(),i.initApplication=function(){const e=r();e.initEvent("eventSandbox","mouseover",{tags:["DIV"]}),e.addEvent(o);const t=r();t.initEvent("eventSandbox","mouseout",{tags:["DIV"]}),t.addEvent(o);const n=r();function o(e,t){const n=function(e,t){if(e.target!==e.currentTarget&&t.indexOf(e.target.tagName)>-1)return e.stopPropagation(),e.target.id;e.stopPropagation()}(t,e.tags);if(void 0!==n){const e=u.elems[n];"mouseover"===t.type?(e.getRandomColour(),l(5,a.bind(null,1,25),0,300)):"mouseout"===t.type?(e.getRandomHue(),l(5,function(e,t){const n=s(e,t);u.elems[n].getRandomHue()}.bind(null,1,25),0,300)):"click"===t.type&&(u.broadcast("getRandomColour"),l(25,a.bind(null,1,25),0,300,"desc",20,100))}}n.initEvent("eventSandbox","click",{tags:["DIV"]}),n.addEvent(o),i.main()},i.main=function(){!function(e){let t=25;const n=document.getElementById("eventSandbox");let r=1;const i=o({hue:"random",luminosity:"light",count:t+=1});for(;r<t;r+=1){const e=c();e.create("DIV",r),e.elem.className="item",e.elem.style.backgroundColor=i[r],n.appendChild(e.elem),u.subscribe(e.id,e)}}()},document.onreadystatechange=function(){"complete"===document.readyState&&i.initApplication()}},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){(function(e){var n;n=function(){var e=null,t={};i("monochrome",null,[[0,0],[100,0]]),i("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),i("orange",[19,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),i("yellow",[47,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),i("green",[63,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),i("blue",[179,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),i("purple",[258,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),i("pink",[283,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]);var n=function(i){if(void 0!==(i=i||{}).seed&&null!==i.seed&&i.seed===parseInt(i.seed,10))e=i.seed;else if("string"==typeof i.seed)e=function(e){for(var t=0,n=0;n!==e.length&&!(t>=Number.MAX_SAFE_INTEGER);n++)t+=e.charCodeAt(n);return t}(i.seed);else{if(void 0!==i.seed&&null!==i.seed)throw new TypeError("The seed value must be an integer or string");e=null}var s,c;if(null!==i.count&&void 0!==i.count){var l=i.count,d=[];for(i.count=null;l>d.length;)e&&i.seed&&(i.seed+=1),d.push(n(i));return i.count=l,d}return function(e,t){switch(t.format){case"hsvArray":return e;case"hslArray":return a(e);case"hsl":var n=a(e);return"hsl("+n[0]+", "+n[1]+"%, "+n[2]+"%)";case"hsla":var r=a(e),o=t.alpha||Math.random();return"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+o+")";case"rgbArray":return u(e);case"rgb":return"rgb("+u(e).join(", ")+")";case"rgba":var i=u(e);o=t.alpha||Math.random();return"rgba("+i.join(", ")+", "+o+")";default:return function(e){var t=u(e);function n(e){var t=e.toString(16);return 1==t.length?"0"+t:t}return"#"+n(t[0])+n(t[1])+n(t[2])}(e)}}([s=function(e){var n=o(function(e){if("number"==typeof parseInt(e)){var n=parseInt(e);if(n<360&&n>0)return[n,n]}if("string"==typeof e)if(t[e]){var r=t[e];if(r.hueRange)return r.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var o=function(e){e=3===(e=e.replace(/^#/,"")).length?e.replace(/(.)/g,"$1$1"):e;var t=parseInt(e.substr(0,2),16)/255,n=parseInt(e.substr(2,2),16)/255,r=parseInt(e.substr(4,2),16)/255,o=Math.max(t,n,r),i=o-Math.min(t,n,r),u=o?i/o:0;switch(o){case t:return[(n-r)/i%6*60||0,u,o];case n:return[60*((r-t)/i+2)||0,u,o];case r:return[60*((t-n)/i+4)||0,u,o]}}(e)[0];return[o,o]}return[0,360]}(i.hue));return n<0&&(n=360+n),n}(),c=function(e,t){if("monochrome"===t.hue)return 0;if("random"===t.luminosity)return o([0,100]);var n=function(e){return r(e).saturationRange}(e),i=n[0],u=n[1];switch(t.luminosity){case"bright":i=55;break;case"dark":i=u-10;break;case"light":u=55}return o([i,u])}(s,i),function(e,t,n){var i=function(e,t){for(var n=r(e).lowerBounds,o=0;o<n.length-1;o++){var i=n[o][0],u=n[o][1],a=n[o+1][0],s=n[o+1][1];if(t>=i&&t<=a){var c=(s-u)/(a-i);return c*t+(u-c*i)}}return 0}(s,c),u=100;switch(n.luminosity){case"dark":u=i+20;break;case"light":i=(u+i)/2;break;case"random":i=0,u=100}return o([i,u])}(0,0,i)],i)};function r(e){for(var n in e>=334&&e<=360&&(e-=360),t){var r=t[n];if(r.hueRange&&e>=r.hueRange[0]&&e<=r.hueRange[1])return t[n]}return"Color not found"}function o(t){if(null===e)return Math.floor(t[0]+Math.random()*(t[1]+1-t[0]));var n=t[1]||1,r=t[0]||0,o=(e=(9301*e+49297)%233280)/233280;return Math.floor(r+o*(n-r))}function i(e,n,r){var o=r[0][0],i=r[r.length-1][0],u=r[r.length-1][1],a=r[0][1];t[e]={hueRange:n,lowerBounds:r,saturationRange:[o,i],brightnessRange:[u,a]}}function u(e){var t=e[0];0===t&&(t=1),360===t&&(t=359),t/=360;var n=e[1]/100,r=e[2]/100,o=Math.floor(6*t),i=6*t-o,u=r*(1-n),a=r*(1-i*n),s=r*(1-(1-i)*n),c=256,l=256,d=256;switch(o){case 0:c=r,l=s,d=u;break;case 1:c=a,l=r,d=u;break;case 2:c=u,l=r,d=s;break;case 3:c=u,l=a,d=r;break;case 4:c=s,l=u,d=r;break;case 5:c=r,l=u,d=a}return[Math.floor(255*c),Math.floor(255*l),Math.floor(255*d)]}function a(e){var t=e[0],n=e[1]/100,r=e[2]/100,o=(2-n)*r;return[t,Math.round(n*r/(o<1?o:2-o)*1e4)/100,o/2*100]}return n}(),"object"==typeof e&&e&&e.exports&&(t=e.exports=n),t.randomColor=n}).call(this,n(1)(e))},,function(e,t,n){}]);
//# sourceMappingURL=app.bundle.js.map