webpackJsonp([0],[,function(e,t,s){"use strict";function a(e,t){var s,a=e&&e.a;!(s=e&&e.hsl?(0,i.default)(e.hsl):e&&e.hex&&e.hex.length>0?(0,i.default)(e.hex):(0,i.default)(e))||void 0!==s._a&&null!==s._a||s.setAlpha(a||1);var n=s.toHsl(),o=s.toHsv();return 0===n.s&&(o.h=n.h=e.h||e.hsl&&e.hsl.h||t||0),{hsl:n,hex:s.toHexString().toUpperCase(),rgba:s.toRgb(),hsv:o,oldHue:e.h||t||n.h,source:e.source,a:e.a||s.getAlpha()}}Object.defineProperty(t,"__esModule",{value:!0});var n=s(34),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={props:["value"],data:function(){return{val:a(this.value)}},computed:{colors:{get:function(){return this.val},set:function(e){this.val=e,this.$emit("input",e)}}},watch:{value:function(e){this.val=a(e)}},methods:{colorChange:function(e,t){this.oldHue=this.colors.hsl.h,this.colors=a(e,t||this.oldHue)},isValidHex:function(e){return(0,i.default)(e).isValid()},simpleCheckForValidColor:function(e){for(var t=["r","g","b","a","h","s","l","v"],s=0,a=0,n=0;n<t.length;n++){var i=t[n];e[i]&&(s++,isNaN(e[i])||a++)}if(s===a)return e}}}},function(e,t,s){"use strict";function a(e){s(32)}Object.defineProperty(t,"__esModule",{value:!0});var n=s(10),i=s.n(n);for(var o in n)"default"!==o&&function(e){s.d(t,e,function(){return n[e]})}(o);var l=s(33),c=s(0),r=a,u=c(i.a,l.a,!1,r,null,null);t.default=u.exports},function(e,t,s){"use strict";function a(e){s(48)}Object.defineProperty(t,"__esModule",{value:!0});var n=s(15),i=s.n(n);for(var o in n)"default"!==o&&function(e){s.d(t,e,function(){return n[e]})}(o);var l=s(49),c=s(0),r=a,u=c(i.a,l.a,!1,r,null,null);t.default=u.exports},,function(e,t,s){"use strict";function a(e){s(53)}Object.defineProperty(t,"__esModule",{value:!0});var n=s(17),i=s.n(n);for(var o in n)"default"!==o&&function(e){s.d(t,e,function(){return n[e]})}(o);var l=s(55),c=s(0),r=a,u=c(i.a,l.a,!1,r,null,null);t.default=u.exports},function(e,t,s){"use strict";function a(e){s(56)}Object.defineProperty(t,"__esModule",{value:!0});var n=s(18),i=s.n(n);for(var o in n)"default"!==o&&function(e){s.d(t,e,function(){return n[e]})}(o);var l=s(59),c=s(0),r=a,u=c(i.a,l.a,!1,r,null,null);t.default=u.exports},function(e,t,s){"use strict";function a(e){s(57)}Object.defineProperty(t,"__esModule",{value:!0});var n=s(19),i=s.n(n);for(var o in n)"default"!==o&&function(e){s.d(t,e,function(){return n[e]})}(o);var l=s(58),c=s(0),r=a,u=c(i.a,l.a,!1,r,null,null);t.default=u.exports},function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=s(30),i=a(n),o=s(36),l=a(o),c=s(39),r=a(c),u=s(42),h=a(u),d=s(46),v=a(d),f=s(51),p=a(f),g=s(61),C=a(g),m=s(64),_=a(m),b={hex:"#194d33",hsl:{h:150,s:.5,l:.2,a:1},hsv:{h:150,s:.66,v:.3,a:1},rgba:{r:25,g:77,b:51,a:1},a:1};t.default={components:{"material-picker":i.default,"compact-picker":l.default,"grayscale-picker":r.default,"swatches-picker":h.default,"slider-picker":v.default,"sketch-picker":p.default,"chrome-picker":C.default,"photoshop-picker":_.default},data:function(){return{colors:b}},computed:{bgc:function(){return this.colors.hex}},methods:{onOk:function(){console.log("ok")},onCancel:function(){console.log("cancel")},updateValue:function(e){this.colors=e}},created:function(){}}},function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=s(2),i=a(n),o=s(1),l=a(o);t.default={name:"Material",mixins:[l.default],components:{"ed-in":i.default},methods:{onChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"editableInput",props:{label:String,desc:String,value:[String,Number],max:Number,min:Number,arrowOffset:{type:Number,default:1}},computed:{val:{get:function(){return this.value},set:function(e){if(!(void 0!==this.max&&+e>this.max))return e;this.$refs.input.value=this.max}}},methods:{update:function(e){this.handleChange(e.target.value)},handleChange:function(e){var t={};t[this.label]=e,void 0===t.hex&&void 0===t["#"]?this.$emit("change",t):e.length>5&&this.$emit("change",t)},handleBlur:function(e){console.log(e)},handleKeyDown:function(e){var t=this.val,s=Number(t);if(s){var a=this.arrowOffset||1;38===e.keyCode&&(t=s+a,this.handleChange(t),e.preventDefault()),40===e.keyCode&&(t=s-a,this.handleChange(t),e.preventDefault())}},handleDrag:function(e){console.log(e)},handleMouseDown:function(e){console.log(e)}}}},function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=s(1),i=a(n),o=s(2),l=a(o),c=["#4D4D4D","#999999","#FFFFFF","#F44E3B","#FE9200","#FCDC00","#DBDF00","#A4DD00","#68CCCA","#73D8FF","#AEA1FF","#FDA1FF","#333333","#808080","#CCCCCC","#D33115","#E27300","#FCC400","#B0BC00","#68BC00","#16A5A5","#009CE0","#7B64FF","#FA28FF","#000000","#666666","#B3B3B3","#9F0500","#C45100","#FB9E00","#808900","#194D33","#0C797D","#0062B1","#653294","#AB149E"];t.default={name:"Compact",mixins:[i.default],props:{palette:{type:Array,default:function(){return c}}},components:{"ed-in":l.default},computed:{pick:function(){return this.colors.hex}},methods:{handlerClick:function(e){this.colorChange({hex:e,source:"hex"})}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(1),n=function(e){return e&&e.__esModule?e:{default:e}}(a),i=["#FFFFFF","#F2F2F2","#E6E6E6","#D9D9D9","#CCCCCC","#BFBFBF","#B3B3B3","#A6A6A6","#999999","#8C8C8C","#808080","#737373","#666666","#595959","#4D4D4D","#404040","#333333","#262626","#0D0D0D","#000000"];t.default={name:"Grayscale",mixins:[n.default],props:{palette:{type:Array,default:function(){return i}}},components:{},computed:{pick:function(){return this.colors.hex}},methods:{handlerClick:function(e){this.colorChange({hex:e,source:"hex"})}}}},function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=s(44),i=a(n),o=s(1),l=a(o),c=["red","pink","purple","deepPurple","indigo","blue","lightBlue","cyan","teal","green","lightGreen","lime","yellow","amber","orange","deepOrange","brown","blueGrey","black"],r=["900","700","500","300","100"],u=function(){var e=[];return c.forEach(function(t){var s=[];"black"===t.toLowerCase()||"white"===t.toLowerCase()?s=s.concat(["#000000","#FFFFFF"]):r.forEach(function(e){var a=i.default[t][e];s.push(a.toUpperCase())}),e.push(s)}),e}();t.default={name:"Swatches",mixins:[l.default],props:{palette:{type:Array,default:function(){return u}}},computed:{pick:function(){return this.colors.hex}},methods:{equal:function(e){return e.toLowerCase()===this.colors.hex.toLowerCase()},handlerClick:function(e){this.colorChange({hex:e,source:"hex"})}}}},function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=s(1),i=a(n),o=s(3),l=a(o);t.default={name:"Slider",mixins:[i.default],props:{direction:String},components:{hue:l.default},computed:{activeOffset:function(){return Math.round(100*this.colors.hsl.s)/100==.5?Math.round(100*this.colors.hsl.l)/100:0}},data:function(){return{swatches:[".80",".65",".50",".35",".20"]}},methods:{hueChange:function(e){this.colorChange(e)},handleSwClick:function(e,t){this.colorChange({h:this.colors.hsl.h,s:.5,l:t,source:"hsl"})}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Hue",props:{value:Object,direction:{type:String,default:"horizontal"}},data:function(){return{oldHue:0,pullDirection:""}},computed:{colors:function(){var e=this.value.hsl.h;return 0!==e&&e-this.oldHue>0&&(this.pullDirection="right"),0!==e&&e-this.oldHue<0&&(this.pullDirection="left"),this.oldHue=e,this.value},directionClass:function(){return{"vc-hue--horizontal":"horizontal"===this.direction,"vc-hue--vertical":"vertical"===this.direction}},pointerTop:function(){return"vertical"===this.direction?0===this.colors.hsl.h&&"right"===this.pullDirection?0:-100*this.colors.hsl.h/360+100+"%":0},pointerLeft:function(){return"vertical"===this.direction?0:0===this.colors.hsl.h&&"right"===this.pullDirection?"100%":100*this.colors.hsl.h/360+"%"}},methods:{handleChange:function(e,t){!t&&e.preventDefault();var s,a,n=this.$refs.container,i=n.clientWidth,o=n.clientHeight,l=n.getBoundingClientRect().left+window.pageXOffset,c=n.getBoundingClientRect().top+window.pageYOffset,r=e.pageX||(e.touches?e.touches[0].pageX:0),u=e.pageY||(e.touches?e.touches[0].pageY:0),h=r-l,d=u-c;"vertical"===this.direction?(d<0?s=360:d>o?s=0:(a=-100*d/o+100,s=360*a/100),this.colors.hsl.h!==s&&this.$emit("change",{h:s,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})):(h<0?s=0:h>i?s=360:(a=100*h/i,s=360*a/100),this.colors.hsl.h!==s&&this.$emit("change",{h:s,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"}))},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(e){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=s(1),i=a(n),o=s(2),l=a(o),c=s(5),r=a(c),u=s(3),h=a(u),d=s(6),v=a(d),f=s(7),p=a(f),g=["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF"];t.default={name:"Sketch",mixins:[i.default],components:{saturation:r.default,hue:h.default,alpha:v.default,"ed-in":l.default,checkboard:p.default},props:{presetColors:{type:Array,default:function(){return g}},disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},computed:{hex:function(){return this.colors.hex.replace("#","")},activeColor:function(){var e=this.colors.rgba;return"rgba("+[e.r,e.g,e.b,e.a].join(",")+")"}},methods:{handlePreset:function(e){this.colorChange({hex:e,source:"hex"})},childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(54),n=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={name:"Saturation",props:{value:Object},computed:{colors:function(){return this.value},bgColor:function(){return"hsl("+this.colors.hsv.h+", 100%, 50%)"},pointerTop:function(){return-100*this.colors.hsv.v+1+100+"%"},pointerLeft:function(){return 100*this.colors.hsv.s+"%"}},methods:{throttle:(0,n.default)(function(e,t){e(t)},20,{leading:!0,trailing:!1}),handleChange:function(e,t){!t&&e.preventDefault();var s=this.$refs.container,a=s.clientWidth,n=s.clientHeight,i=s.getBoundingClientRect().left+window.pageXOffset,o=s.getBoundingClientRect().top+window.pageYOffset,l=e.pageX||(e.touches?e.touches[0].pageX:0),c=e.pageY||(e.touches?e.touches[0].pageY:0),r=l-i,u=c-o;r<0?r=0:r>a?r=a:u<0?u=0:u>n&&(u=n);var h=r/a,d=-u/n+1;d=d>0?d:0,d=d>1?1:d,this.throttle(this.onChange,{h:this.colors.hsv.h,s:h,v:d,a:this.colors.hsv.a,source:"hsva"})},onChange:function(e){this.$emit("change",e)},handleMouseDown:function(e){window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(e){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(7),n=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={name:"Alpha",props:{value:Object,onChange:Function},components:{checkboard:n.default},computed:{colors:function(){return this.value},gradientColor:function(){var e=this.colors.rgba,t=[e.r,e.g,e.b].join(",");return"linear-gradient(to right, rgba("+t+", 0) 0%, rgba("+t+", 1) 100%)"}},methods:{handleChange:function(e,t){!t&&e.preventDefault();var s,a=this.$refs.container,n=a.clientWidth,i=a.getBoundingClientRect().left+window.pageXOffset,o=e.pageX||(e.touches?e.touches[0].pageX:0),l=o-i;s=l<0?0:l>n?1:Math.round(100*l/n)/100,this.colors.a!==s&&this.$emit("change",{h:this.colors.hsl.h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:s,source:"rgba"})},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,t,s){"use strict";function a(e,t,s){if("undefined"==typeof document)return null;var a=document.createElement("canvas");a.width=a.height=2*s;var n=a.getContext("2d");return n?(n.fillStyle=e,n.fillRect(0,0,a.width,a.height),n.fillStyle=t,n.fillRect(0,0,s,s),n.translate(s,s),n.fillRect(0,0,s,s),a.toDataURL()):null}function n(e,t,s){var n=e+","+t+","+s;if(i[n])return i[n];var o=a(e,t,s);return i[n]=o,o}Object.defineProperty(t,"__esModule",{value:!0});var i={};t.default={name:"Checkboard",props:{size:{type:[Number,String],default:8},white:{type:String,default:"#fff"},grey:{type:String,default:"#e6e6e6"}},computed:{bgStyle:function(){return{"background-image":"url("+n(this.white,this.grey,this.size)+")"}}}}},function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=s(1),i=a(n),o=s(2),l=a(o),c=s(5),r=a(c),u=s(3),h=a(u),d=s(6),v=a(d),f=s(7),p=a(f);t.default={name:"Chrome",mixins:[i.default],props:{disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},components:{saturation:r.default,hue:h.default,alpha:v.default,"ed-in":l.default,checkboard:p.default},data:function(){return{fields:["hex","rgba","hsla"],fieldsIndex:0,highlight:!1}},computed:{hsl:function(){var e=this.colors.hsl,t=e.h,s=e.s,a=e.l;return{h:t.toFixed(),s:(100*s).toFixed()+"%",l:(100*a).toFixed()+"%"}},activeColor:function(){var e=this.colors.rgba;return"rgba("+[e.r,e.g,e.b,e.a].join(",")+")"}},watch:{colors:function(e){e.a<1&&0===this.fieldsIndex&&(this.fieldsIndex=1)}},methods:{handlePreset:function(e){this.colorChange({hex:e,source:"hex"})},childChange:function(e){this.colorChange(e)},inputChange:function(e){if(e)if(e.hex)this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"});else if(e.r||e.g||e.b||e.a)this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"});else if(e.h||e.s||e.l){var t=e.s?e.s.replace("%","")/100:this.colors.hsl.s,s=e.l?e.l.replace("%","")/100:this.colors.hsl.l;this.colorChange({h:e.h||this.colors.hsl.h,s:t,l:s,source:"hsl"})}},toggleViews:function(){if(this.fieldsIndex>=2)return void(this.fieldsIndex=this.colors.a<1?1:0);this.fieldsIndex++},showHighlight:function(){this.highlight=!0},hideHighlight:function(){this.highlight=!1}}}},function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=s(1),i=a(n),o=s(2),l=a(o),c=s(5),r=a(c),u=s(3),h=a(u),d=s(6),v=a(d);t.default={name:"Photoshop",mixins:[i.default],props:{head:{type:String,default:"Color Picker"},disableFields:{type:Boolean,default:!1}},components:{saturation:r.default,hue:h.default,alpha:v.default,"ed-in":l.default},data:function(){return{currentColor:"#FFF"}},computed:{hsv:function(){var e=this.colors.hsv;return{h:e.h.toFixed(),s:(100*e.s).toFixed(),v:(100*e.v).toFixed()}},hex:function(){var e=this.colors.hex;return e&&e.replace("#","")}},created:function(){this.currentColor=this.colors.hex},methods:{childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e["#"]?this.isValidHex(e["#"])&&this.colorChange({hex:e["#"],source:"hex"}):e.r||e.g||e.b||e.a?this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}):(e.h||e.s||e.v)&&this.colorChange({h:e.h||this.colors.hsv.h,s:e.s/100||this.colors.hsv.s,v:e.v/100||this.colors.hsv.v,source:"hsv"}))},clickCurrentColor:function(){this.colorChange({hex:this.currentColor,source:"hex"})},handleAccept:function(){this.$emit("ok")},handleCancel:function(){this.$emit("cancel")}}}},function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var n=s(23),i=a(n),o=s(27),l=a(o);console.log(i.default.version),new i.default({el:"#app-wrap",render:function(e){return e(l.default)}})},,,,,function(e,t,s){"use strict";function a(e){s(28)}Object.defineProperty(t,"__esModule",{value:!0});var n=s(8),i=s.n(n);for(var o in n)"default"!==o&&function(e){s.d(t,e,function(){return n[e]})}(o);var l=s(67),c=s(0),r=a,u=c(i.a,l.a,!1,r,null,null);t.default=u.exports},function(e,t){},,function(e,t,s){"use strict";function a(e){s(31)}Object.defineProperty(t,"__esModule",{value:!0});var n=s(9),i=s.n(n);for(var o in n)"default"!==o&&function(e){s.d(t,e,function(){return n[e]})}(o);var l=s(35),c=s(0),r=a,u=c(i.a,l.a,!1,r,null,null);t.default=u.exports},function(e,t){},function(e,t){},function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vc-editable-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],ref:"input",staticClass:"vc-input__input",attrs:{"aria-label":e.value},domProps:{value:e.val},on:{keydown:e.handleKeyDown,input:[function(t){t.target.composing||(e.val=t.target.value)},e.update]}}),e._v(" "),s("span",{staticClass:"vc-input__label"},[e._v(e._s(e.label))]),e._v(" "),s("span",{staticClass:"vc-input__desc"},[e._v(e._s(e.desc))])])},n=[],i={render:a,staticRenderFns:n};t.a=i},,function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vc-material"},[s("ed-in",{staticClass:"vc-material-hex",style:{borderColor:e.colors.hex},attrs:{label:"hex"},on:{change:e.onChange},model:{value:e.colors.hex,callback:function(t){e.$set(e.colors,"hex",t)},expression:"colors.hex"}}),e._v(" "),s("div",{staticClass:"vc-material-split"},[s("div",{staticClass:"vc-material-third"},[s("ed-in",{attrs:{label:"r"},on:{change:e.onChange},model:{value:e.colors.rgba.r,callback:function(t){e.$set(e.colors.rgba,"r",t)},expression:"colors.rgba.r"}})],1),e._v(" "),s("div",{staticClass:"vc-material-third"},[s("ed-in",{attrs:{label:"g"},on:{change:e.onChange},model:{value:e.colors.rgba.g,callback:function(t){e.$set(e.colors.rgba,"g",t)},expression:"colors.rgba.g"}})],1),e._v(" "),s("div",{staticClass:"vc-material-third"},[s("ed-in",{attrs:{label:"b"},on:{change:e.onChange},model:{value:e.colors.rgba.b,callback:function(t){e.$set(e.colors.rgba,"b",t)},expression:"colors.rgba.b"}})],1)])],1)},n=[],i={render:a,staticRenderFns:n};t.a=i},function(e,t,s){"use strict";function a(e){s(37)}Object.defineProperty(t,"__esModule",{value:!0});var n=s(11),i=s.n(n);for(var o in n)"default"!==o&&function(e){s.d(t,e,function(){return n[e]})}(o);var l=s(38),c=s(0),r=a,u=c(i.a,l.a,!1,r,null,null);t.default=u.exports},function(e,t){},function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vc-compact"},[s("ul",{staticClass:"vc-compact-colors"},e._l(e.palette,function(t){return s("li",{key:t,staticClass:"vc-compact-color-item",class:{"vc-compact-color-item--white":"#FFFFFF"===t},style:{background:t},on:{click:function(s){e.handlerClick(t)}}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t===e.pick,expression:"c === pick"}],staticClass:"vc-compact-dot"})])}))])},n=[],i={render:a,staticRenderFns:n};t.a=i},function(e,t,s){"use strict";function a(e){s(40)}Object.defineProperty(t,"__esModule",{value:!0});var n=s(12),i=s.n(n);for(var o in n)"default"!==o&&function(e){s.d(t,e,function(){return n[e]})}(o);var l=s(41),c=s(0),r=a,u=c(i.a,l.a,!1,r,null,null);t.default=u.exports},function(e,t){},function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vc-grayscale"},[s("ul",{staticClass:"vc-grayscale-colors"},e._l(e.palette,function(t){return s("li",{key:t,staticClass:"vc-grayscale-color-item",class:{"vc-grayscale-color-item--white":"#FFFFFF"==t},style:{background:t},on:{click:function(s){e.handlerClick(t)}}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t===e.pick,expression:"c === pick"}],staticClass:"vc-grayscale-dot"})])}))])},n=[],i={render:a,staticRenderFns:n};t.a=i},function(e,t,s){"use strict";function a(e){s(43)}Object.defineProperty(t,"__esModule",{value:!0});var n=s(13),i=s.n(n);for(var o in n)"default"!==o&&function(e){s.d(t,e,function(){return n[e]})}(o);var l=s(45),c=s(0),r=a,u=c(i.a,l.a,!1,r,null,null);t.default=u.exports},function(e,t){},,function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vc-swatches",attrs:{"data-pick":e.pick}},[s("div",{staticClass:"vc-swatches-box"},e._l(e.palette,function(t,a){return s("div",{key:a,staticClass:"vc-swatches-color-group"},e._l(t,function(t){return s("div",{key:t,class:["vc-swatches-color-it",{"vc-swatches-color--white":"#FFFFFF"===t}],style:{background:t},attrs:{"data-color":t},on:{click:function(s){e.handlerClick(t)}}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.equal(t),expression:"equal(c)"}],staticClass:"vc-swatches-pick"},[s("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}})])])])}))}))])},n=[],i={render:a,staticRenderFns:n};t.a=i},function(e,t,s){"use strict";function a(e){s(47)}Object.defineProperty(t,"__esModule",{value:!0});var n=s(14),i=s.n(n);for(var o in n)"default"!==o&&function(e){s.d(t,e,function(){return n[e]})}(o);var l=s(50),c=s(0),r=a,u=c(i.a,l.a,!1,r,null,null);t.default=u.exports},function(e,t){},function(e,t){},function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:["vc-hue",e.directionClass]},[s("div",{ref:"container",staticClass:"vc-hue-container",on:{mousedown:e.handleMouseDown,touchmove:e.handleChange,touchstart:e.handleChange}},[s("div",{staticClass:"vc-hue-pointer",style:{top:e.pointerTop,left:e.pointerLeft}},[s("div",{staticClass:"vc-hue-picker"})])])])},n=[],i={render:a,staticRenderFns:n};t.a=i},function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vc-slider"},[s("div",{staticClass:"vc-slider-hue-warp"},[s("hue",{on:{change:e.hueChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),s("div",{staticClass:"vc-slider-swatches"},e._l(e.swatches,function(t,a){return s("div",{staticClass:"vc-slider-swatch",attrs:{"data-index":a},on:{click:function(s){e.handleSwClick(a,t)}}},[s("div",{staticClass:"vc-slider-swatch-picker",class:{"vc-slider-swatch-picker--active":t==e.activeOffset},style:{background:"hsl("+e.colors.hsl.h+", 50%, "+100*t+"%)"}})])}))])},n=[],i={render:a,staticRenderFns:n};t.a=i},function(e,t,s){"use strict";function a(e){s(52)}Object.defineProperty(t,"__esModule",{value:!0});var n=s(16),i=s.n(n);for(var o in n)"default"!==o&&function(e){s.d(t,e,function(){return n[e]})}(o);var l=s(60),c=s(0),r=a,u=c(i.a,l.a,!1,r,null,null);t.default=u.exports},function(e,t){},function(e,t){},,function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"container",staticClass:"vc-saturation",style:{background:e.bgColor},on:{mousedown:e.handleMouseDown,touchmove:e.handleChange,touchstart:e.handleChange}},[s("div",{staticClass:"vc-saturation--white"}),e._v(" "),s("div",{staticClass:"vc-saturation--black"}),e._v(" "),s("div",{staticClass:"vc-saturation-pointer",style:{top:e.pointerTop,left:e.pointerLeft}},[s("div",{staticClass:"vc-saturation-circle"})])])},n=[],i={render:a,staticRenderFns:n};t.a=i},function(e,t){},function(e,t){},function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"vc-checkerboard",style:e.bgStyle})},n=[],i={render:a,staticRenderFns:n};t.a=i},function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vc-alpha"},[s("div",{staticClass:"vc-alpha-checkboard-wrap"},[s("checkboard")],1),e._v(" "),s("div",{staticClass:"vc-alpha-gradient",style:{background:e.gradientColor}}),e._v(" "),s("div",{ref:"container",staticClass:"vc-alpha-container",on:{mousedown:e.handleMouseDown,touchmove:e.handleChange,touchstart:e.handleChange}},[s("div",{staticClass:"vc-alpha-pointer",style:{left:100*e.colors.a+"%"}},[s("div",{staticClass:"vc-alpha-picker"})])])])},n=[],i={render:a,staticRenderFns:n};t.a=i},function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:["vc-sketch",e.disableAlpha?"vc-sketch__disable-alpha":""]},[s("div",{staticClass:"vc-sketch-saturation-wrap"},[s("saturation",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),s("div",{staticClass:"vc-sketch-controls"},[s("div",{staticClass:"vc-sketch-sliders"},[s("div",{staticClass:"vc-sketch-hue-wrap"},[s("hue",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),e.disableAlpha?e._e():s("div",{staticClass:"vc-sketch-alpha-wrap"},[s("alpha",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1)]),e._v(" "),s("div",{staticClass:"vc-sketch-color-wrap"},[s("div",{staticClass:"vc-sketch-active-color",style:{background:e.activeColor}}),e._v(" "),s("checkboard")],1)]),e._v(" "),e.disableFields?e._e():s("div",{staticClass:"vc-sketch-field"},[s("div",{staticClass:"vc-sketch-field--double"},[s("ed-in",{attrs:{label:"hex",value:e.hex},on:{change:e.inputChange}})],1),e._v(" "),s("div",{staticClass:"vc-sketch-field--single"},[s("ed-in",{attrs:{label:"r",value:e.colors.rgba.r},on:{change:e.inputChange}})],1),e._v(" "),s("div",{staticClass:"vc-sketch-field--single"},[s("ed-in",{attrs:{label:"g",value:e.colors.rgba.g},on:{change:e.inputChange}})],1),e._v(" "),s("div",{staticClass:"vc-sketch-field--single"},[s("ed-in",{attrs:{label:"b",value:e.colors.rgba.b},on:{change:e.inputChange}})],1),e._v(" "),e.disableAlpha?e._e():s("div",{staticClass:"vc-sketch-field--single"},[s("ed-in",{attrs:{label:"a",value:e.colors.a,"arrow-offset":.01,max:1},on:{change:e.inputChange}})],1)]),e._v(" "),s("div",{staticClass:"vc-sketch-presets"},e._l(e.presetColors,function(t){return s("div",{key:t,staticClass:"vc-sketch-presets-color",style:{background:t},on:{click:function(s){e.handlePreset(t)}}})}))])},n=[],i={render:a,staticRenderFns:n};t.a=i},function(e,t,s){"use strict";function a(e){s(62)}Object.defineProperty(t,"__esModule",{value:!0});var n=s(20),i=s.n(n);for(var o in n)"default"!==o&&function(e){s.d(t,e,function(){return n[e]})}(o);var l=s(63),c=s(0),r=a,u=c(i.a,l.a,!1,r,null,null);t.default=u.exports},function(e,t){},function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:["vc-chrome",e.disableAlpha?"vc-chrome__disable-alpha":""]},[s("div",{staticClass:"vc-chrome-saturation-wrap"},[s("saturation",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),s("div",{staticClass:"vc-chrome-body"},[s("div",{staticClass:"vc-chrome-controls"},[s("div",{staticClass:"vc-chrome-color-wrap"},[s("div",{staticClass:"vc-chrome-active-color",style:{background:e.activeColor}}),e._v(" "),e.disableAlpha?e._e():s("checkboard")],1),e._v(" "),s("div",{staticClass:"vc-chrome-sliders"},[s("div",{staticClass:"vc-chrome-hue-wrap"},[s("hue",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),e.disableAlpha?e._e():s("div",{staticClass:"vc-chrome-alpha-wrap"},[s("alpha",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1)])]),e._v(" "),e.disableFields?e._e():s("div",{staticClass:"vc-chrome-fields-wrap"},[s("div",{directives:[{name:"show",rawName:"v-show",value:0===e.fieldsIndex,expression:"fieldsIndex === 0"}],staticClass:"vc-chrome-fields"},[s("div",{staticClass:"vc-chrome-field"},[s("ed-in",{attrs:{label:"hex",value:e.colors.hex},on:{change:e.inputChange}})],1)]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1===e.fieldsIndex,expression:"fieldsIndex === 1"}],staticClass:"vc-chrome-fields"},[s("div",{staticClass:"vc-chrome-field"},[s("ed-in",{attrs:{label:"r",value:e.colors.rgba.r},on:{change:e.inputChange}})],1),e._v(" "),s("div",{staticClass:"vc-chrome-field"},[s("ed-in",{attrs:{label:"g",value:e.colors.rgba.g},on:{change:e.inputChange}})],1),e._v(" "),s("div",{staticClass:"vc-chrome-field"},[s("ed-in",{attrs:{label:"b",value:e.colors.rgba.b},on:{change:e.inputChange}})],1),e._v(" "),e.disableAlpha?e._e():s("div",{staticClass:"vc-chrome-field"},[s("ed-in",{attrs:{label:"a",value:e.colors.a,"arrow-offset":.01,max:1},on:{change:e.inputChange}})],1)]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:2===e.fieldsIndex,expression:"fieldsIndex === 2"}],staticClass:"vc-chrome-fields"},[s("div",{staticClass:"vc-chrome-field"},[s("ed-in",{attrs:{label:"h",value:e.hsl.h},on:{change:e.inputChange}})],1),e._v(" "),s("div",{staticClass:"vc-chrome-field"},[s("ed-in",{attrs:{label:"s",value:e.hsl.s},on:{change:e.inputChange}})],1),e._v(" "),s("div",{staticClass:"vc-chrome-field"},[s("ed-in",{attrs:{label:"l",value:e.hsl.l},on:{change:e.inputChange}})],1),e._v(" "),e.disableAlpha?e._e():s("div",{staticClass:"vc-chrome-field"},[s("ed-in",{attrs:{label:"a",value:e.colors.a,"arrow-offset":.01,max:1},on:{change:e.inputChange}})],1)]),e._v(" "),s("div",{staticClass:"vc-chrome-toggle-btn",on:{click:e.toggleViews}},[s("div",{staticClass:"vc-chrome-toggle-icon"},[s("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"},on:{mouseover:e.showHighlight,mouseenter:e.showHighlight,mouseout:e.hideHighlight}},[s("path",{attrs:{fill:"#333",d:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"}})])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.highlight,expression:"highlight"}],staticClass:"vc-chrome-toggle-icon-highlight"})])])])])},n=[],i={render:a,staticRenderFns:n};t.a=i},function(e,t,s){"use strict";function a(e){s(65)}Object.defineProperty(t,"__esModule",{value:!0});var n=s(21),i=s.n(n);for(var o in n)"default"!==o&&function(e){s.d(t,e,function(){return n[e]})}(o);var l=s(66),c=s(0),r=a,u=c(i.a,l.a,!1,r,null,null);t.default=u.exports},function(e,t){},function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:["vc-photoshop",e.disableFields?"vc-photoshop__disable-fields":""]},[s("div",{staticClass:"vc-ps-head"},[e._v(e._s(e.head))]),e._v(" "),s("div",{staticClass:"vc-ps-body"},[s("div",{staticClass:"vc-ps-saturation-wrap"},[s("saturation",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),s("div",{staticClass:"vc-ps-hue-wrap"},[s("hue",{attrs:{direction:"vertical"},on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}},[s("div",{staticClass:"vc-ps-hue-pointer"},[s("i",{staticClass:"vc-ps-hue-pointer--left"}),s("i",{staticClass:"vc-ps-hue-pointer--right"})])])],1),e._v(" "),s("div",{class:["vc-ps-controls",e.disableFields?"vc-ps-controls__disable-fields":""]},[s("div",{staticClass:"vc-ps-previews"},[s("div",{staticClass:"vc-ps-previews__label"},[e._v("new")]),e._v(" "),s("div",{staticClass:"vc-ps-previews__swatches"},[s("div",{staticClass:"vc-ps-previews__pr-color",style:{background:e.colors.hex}}),e._v(" "),s("div",{staticClass:"vc-ps-previews__pr-color",style:{background:e.currentColor},on:{click:e.clickCurrentColor}})]),e._v(" "),s("div",{staticClass:"vc-ps-previews__label"},[e._v("current")])]),e._v(" "),e.disableFields?e._e():s("div",{staticClass:"vc-ps-actions"},[s("div",{staticClass:"vc-ps-ac-btn",on:{click:e.handleAccept}},[e._v("OK")]),e._v(" "),s("div",{staticClass:"vc-ps-ac-btn",on:{click:e.handleCancel}},[e._v("Cancel")]),e._v(" "),s("div",{staticClass:"vc-ps-fields"},[s("ed-in",{attrs:{label:"h",desc:"°",value:e.hsv.h},on:{change:e.inputChange}}),e._v(" "),s("ed-in",{attrs:{label:"s",desc:"%",value:e.hsv.s,max:100},on:{change:e.inputChange}}),e._v(" "),s("ed-in",{attrs:{label:"v",desc:"%",value:e.hsv.v,max:100},on:{change:e.inputChange}}),e._v(" "),s("div",{staticClass:"vc-ps-fields__divider"}),e._v(" "),s("ed-in",{attrs:{label:"r",value:e.colors.rgba.r},on:{change:e.inputChange}}),e._v(" "),s("ed-in",{attrs:{label:"g",value:e.colors.rgba.g},on:{change:e.inputChange}}),e._v(" "),s("ed-in",{attrs:{label:"b",value:e.colors.rgba.b},on:{change:e.inputChange}}),e._v(" "),s("div",{staticClass:"vc-ps-fields__divider"}),e._v(" "),s("ed-in",{staticClass:"vc-ps-fields__hex",attrs:{label:"#",value:e.hex},on:{change:e.inputChange}})],1)])])])])},n=[],i={render:a,staticRenderFns:n};t.a=i},function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("a",{staticClass:"github-fork-ribbon",attrs:{href:"https://github.com/xiaokaike/vue-color",title:"Fork me on GitHub"}},[e._v("Fork me on GitHub")]),e._v(" "),s("div",{staticClass:"header-container"},[s("div",{staticClass:"header-bg",style:{"background-color":e.bgc}}),e._v(" "),s("header",{staticClass:"header"},[e._m(0),e._v(" "),s("div",{staticClass:"demo-item"},[s("chrome-picker",{attrs:{value:e.colors},on:{input:e.updateValue}}),e._v(" "),s("h6",[e._v("Chrome")])],1)])]),e._v(" "),s("div",{staticClass:"demo-container"},[s("div",{staticClass:"demo-list"},[s("div",{staticClass:"demo-item"},[s("sketch-picker",{model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}}),e._v(" "),s("h6",[e._v("Sketch")])],1),e._v(" "),s("div",{staticClass:"demo-item"},[s("photoshop-picker",{on:{ok:e.onOk,cancel:e.onCancel},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}}),e._v(" "),s("h6",[e._v("Photoshop")])],1)]),e._v(" "),s("div",{staticClass:"demo-list"},[s("div",{staticClass:"demo-item"},[s("material-picker",{model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}}),e._v(" "),s("h6",[e._v("Material")])],1),e._v(" "),s("div",{staticClass:"demo-item"},[s("slider-picker",{model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}}),e._v(" "),s("h6",[e._v("Slider")])],1)]),e._v(" "),s("div",{staticClass:"demo-list"},[s("div",{staticClass:"demo-item"},[s("compact-picker",{model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}}),e._v(" "),s("h6",[e._v("Compact")]),e._v(" "),s("br"),e._v(" "),s("br"),e._v(" "),s("grayscale-picker",{attrs:{value:e.colors},on:{input:e.updateValue}}),e._v(" "),s("h6",[e._v("Grayscale")])],1),e._v(" "),s("div",{staticClass:"demo-item"},[s("swatches-picker",{model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}}),e._v(" "),s("h6",[e._v("Swatches")])],1)])])])},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"intro-wrap"},[s("div",{staticClass:"intro"},[s("h1",[e._v("Vue-color")]),e._v(" "),s("p",[e._v("A Collection of Color Pickers from Sketch, Photoshop, Chrome, Github, Twitter, Material Design & more")])])])}],i={render:a,staticRenderFns:n};t.a=i}],[22]);
//# sourceMappingURL=app.685e6adc826196922e15.js.map