(function(t){function e(e){for(var n,o,a=e[0],c=e[1],l=e[2],f=0,p=[];f<a.length;f++)o=a[f],i[o]&&p.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,a=1;a<r.length;a++){var c=r[a];0!==i[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},i={app:0},s=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/easy-circular-progress/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},1368:function(t,e,r){"use strict";var n=r("3f74"),i=r.n(n);i.a},"3f74":function(t,e,r){var n=r("63e9");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=r("499e").default;i("7f2c023a",n,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(t,e,r){"use strict";r.r(e);var n=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Progress",{attrs:{value:"16.88"}}),r("Progress",{attrs:{strokeColor:"#FF00AA",value:"16.88"},scopedSlots:t._u([{key:"footer",fn:function(){return[r("b",[t._v("More Color")])]},proxy:!0}])}),r("Progress",{attrs:{radius:50,strokeWidth:10,value:"86.12"},scopedSlots:t._u([{key:"footer",fn:function(){return[r("b",[t._v("Bolder & Bigger One")])]},proxy:!0}])}),r("Progress",{attrs:{transitionDuration:5e3,radius:50,strokeWidth:10,value:"86"},scopedSlots:t._u([{key:"footer",fn:function(){return[r("b",[t._v("Slow One")])]},proxy:!0}])}),r("Progress",{attrs:{transitionDuration:5e3,radius:55,strokeWidth:10,value:"86.12567"},scopedSlots:t._u([{key:"footer",fn:function(){return[r("b",[t._v("More Precise")])]},proxy:!0}])}),r("Progress",{attrs:{transitionDuration:5e3,radius:55,strokeWidth:10,value:"86.12567"},scopedSlots:t._u([{key:"footer",fn:function(){return[r("b",[t._v("More Precise")])]},proxy:!0}])},[r("div",{staticClass:"content"},[t._v("hello")])])],1)},s=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vue-circular-progress"},[r("div",{staticClass:"circle"},[r("svg",{staticClass:"circle__svg",attrs:{width:t.circleSize,height:t.circleSize}},[r("circle",{staticClass:"circle__progress circle__progress--path",style:{"stroke-width":t.strokeWidth,stroke:t.strokeColor},attrs:{cx:t.centralP,cy:t.centralP,r:t.radius}}),r("circle",{staticClass:"circle__progress circle__progress--fill",style:t.fileStyl,attrs:{cx:t.centralP,cy:t.centralP,r:t.radius}})]),r("div",{staticClass:"percent"},[t._t("default",[r("span",{staticClass:"percent__int"},[t._v(t._s(t.int))]),r("span",{staticClass:"dot"},[t._v(".")]),r("span",{staticClass:"percent__dec"},[t._v(t._s(t.dec))]),r("span",{staticClass:"percent_sign"},[t._v("%")])])],2)]),t._t("footer")],2)},a=[];function c(t,e){return f(t)||u(t,e)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(t,e){var r=[],n=!0,i=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done);n=!0)if(r.push(o.value),e&&r.length===e)break}catch(c){i=!0,s=c}finally{try{n||null==a["return"]||a["return"]()}finally{if(i)throw s}}return r}function f(t){if(Array.isArray(t))return t}var p={props:{strokeWidth:{type:Number,default:4},radius:{type:Number,default:38},transitionDuration:{type:Number,default:1e3},strokeColor:{type:String,default:"#aaff00"},value:{validator:function(t){return!Number.isNaN(Number(t))&&Number(t)<=100},default:"0.0"}},data:function(){return{offset:"",int:0,dec:"00"}},computed:{circumference:function(){return this.radius*Math.PI*2},fileStyl:function(){return{strokeDashoffset:this.offset,"--initialStroke":this.circumference,"--transitionDuration":"".concat(this.transitionDuration,"ms"),"stroke-width":this.strokeWidth,stroke:this.strokeColor}},circleSize:function(){return 2*(this.radius+this.strokeWidth)},centralP:function(){return this.circleSize/2}},methods:{increaseNumber:function(t,e){var r=this;if(0!=t){var n=parseInt(this.findClosestNumber(this.transitionDuration/10,t)),i=this.transitionDuration/n,s=0,o="".concat(e,"Interval");this[o]=setInterval(function(){var i=t.toString().length-n.toString().length;r[e]=0==i?s:10*s*i,s===n&&(r[e]=t,window.clearInterval(r[o])),s++},i)}},findClosestNumber:function(t,e){return e<=t?e:this.findClosestNumber(t,e/10)},countNumber:function(t){var e=this;if(this.offset="",this.initTimeoutHandler=setTimeout(function(){e.offset=e.circumference*(100-t)/100},100),!this.$slots.default){var r=t.toString().split("."),n=c(r,2),i=n[0],s=n[1],o=[Number(i),Number(s)];i=o[0],s=o[1],this.increaseNumber(i,"int"),this.increaseNumber(Number.isNaN(s)?0:s,"dec")}},clearHandlers:function(){this.initTimeoutHandler&&clearTimeout(this.initTimeoutHandler),this.intInterval&&clearInterval(this.intInterval),this.decInterval&&clearInterval(this.decInterval)}},watch:{value:{handler:function(t){var e=Number(t);Number.isNaN(e)||0==e||(this.clearHandlers(),this.countNumber(t))},immediate:!0}},beforeDestroy:function(){this.clearHandlers()}},d=p,v=(r("1368"),r("2877")),h=Object(v["a"])(d,o,a,!1,null,null,null),g=h.exports,b={name:"app",components:{Progress:g}},m=b,y=(r("5c0b"),Object(v["a"])(m,i,s,!1,null,null,null)),_=y.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(_)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("e959"),i=r.n(n);i.a},"63e9":function(t,e,r){e=t.exports=r("2350")(!1),e.push([t.i,".vue-circular-progress{display:inline-block}.vue-circular-progress .circle{position:relative}.vue-circular-progress .circle__svg{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.vue-circular-progress .circle__progress{fill:none;stroke-opacity:.3;stroke-linecap:round}.vue-circular-progress .circle__progress--fill{--initialStroke:0;--transitionDuration:0;stroke-opacity:1;stroke-dasharray:var(--initialStroke);stroke-dashoffset:var(--initialStroke);-webkit-transition:stroke-dashoffset var(--transitionDuration) ease;transition:stroke-dashoffset var(--transitionDuration) ease}.vue-circular-progress .percent{width:100%;top:50%;left:50%;position:absolute;font-weight:700;text-align:center;line-height:28px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-circular-progress .percent__int{font-size:28px}.vue-circular-progress .percent__dec,.vue-circular-progress .percent_sign{font-size:12px}.vue-circular-progress .label{font-size:14px;text-transform:uppercase;margin-top:15px}",""])},a33e:function(t,e,r){e=t.exports=r("2350")(!1),e.push([t.i,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;height:100vh;color:#fff;background:#3e423a;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}body{margin:0;padding:0}",""])},e959:function(t,e,r){var n=r("a33e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=r("499e").default;i("6f19147e",n,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=app.d09607a1.js.map