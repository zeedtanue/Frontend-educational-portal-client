(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36bc3834"],{"0e8f":function(t,e,i){"use strict";i("20f6");var n=i("e8f2");e["a"]=Object(n["a"])("flex")},"0fd9":function(t,e,i){"use strict";i("99af"),i("4160"),i("caad"),i("13d5"),i("4ec9"),i("b64b"),i("d3b7"),i("ac1f"),i("2532"),i("3ca3"),i("5319"),i("159b"),i("ddb0");var n=i("ade3"),a=i("5530"),r=(i("4b85"),i("2b0e")),s=i("d9f7"),o=i("80d2"),c=["sm","md","lg","xl"],d=["start","end","center"];function l(t,e){return c.reduce((function(i,n){return i[t+Object(o["w"])(n)]=e(),i}),{})}var u=function(t){return[].concat(d,["baseline","stretch"]).includes(t)},h=l("align",(function(){return{type:String,default:null,validator:u}})),f=function(t){return[].concat(d,["space-between","space-around"]).includes(t)},g=l("justify",(function(){return{type:String,default:null,validator:f}})),p=function(t){return[].concat(d,["space-between","space-around","stretch"]).includes(t)},v=l("alignContent",(function(){return{type:String,default:null,validator:p}})),m={align:Object.keys(h),justify:Object.keys(g),alignContent:Object.keys(v)},b={align:"align",justify:"justify",alignContent:"align-content"};function S(t,e,i){var n=b[t];if(null!=i){if(e){var a=e.replace(t,"");n+="-".concat(a)}return n+="-".concat(i),n.toLowerCase()}}var y=new Map;e["a"]=r["default"].extend({name:"v-row",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u}},h),{},{justify:{type:String,default:null,validator:f}},g),{},{alignContent:{type:String,default:null,validator:p}},v),render:function(t,e){var i=e.props,a=e.data,r=e.children,o="";for(var c in i)o+=String(i[c]);var d=y.get(o);return d||function(){var t,e;for(e in d=[],m)m[e].forEach((function(t){var n=i[t],a=S(e,t,n);a&&d.push(a)}));d.push((t={"no-gutters":i.noGutters,"row--dense":i.dense},Object(n["a"])(t,"align-".concat(i.align),i.align),Object(n["a"])(t,"justify-".concat(i.justify),i.justify),Object(n["a"])(t,"align-content-".concat(i.alignContent),i.alignContent),t)),y.set(o,d)}(),t(i.tag,Object(s["a"])(a,{staticClass:"row",class:d}),r)}})},"21d6":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-container",[i("v-card",[i("div",{staticStyle:{padding:"20px"}},[i("v-row",{attrs:{justify:"space-between"}},[i("v-text",{staticClass:"title"},[t._v("Profile")])],1),i("v-row",{attrs:{justify:"center"}},[i("div",{staticStyle:{"padding-right":"40px"}},[i("v-flex",[i("v-img",{staticClass:"rounded-circle",staticStyle:{"border-radious":"25"},attrs:{height:"100px",width:"100px",src:t.user.profileImage}})],1)],1),i("div",{staticStyle:{"padding-left":"40px"}},[i("h4",[t._v("Name: "+t._s(t.user.name))]),i("h4",[t._v("User ID: "+t._s(t.user.userid))]),i("h4",[t._v("Email: "+t._s(t.user.email))])])])],1)])],1)],1)},a=[],r=i("bc3a"),s=i.n(r),o={name:"Parent",data:function(){return{user:[]}},mounted:function(){var t=this;s.a.get("http://46.101.188.213:5000/api/admin/parent/".concat(this.$route.params.id)).then((function(e){t.user=e.data,console.log("Data: ",e.data)})).catch((function(t){console.log("Error: ",t)}))}},c=o,d=i("2877"),l=i("6544"),u=i.n(l),h=i("b0af"),f=i("a523"),g=i("0e8f"),p=i("adda"),v=i("0fd9"),m=Object(d["a"])(c,n,a,!1,null,null,null);e["default"]=m.exports;u()(m,{VCard:h["a"],VContainer:f["a"],VFlex:g["a"],VImg:p["a"],VRow:v["a"]})},"36a7":function(t,e,i){},"8efc":function(t,e,i){},"90a2":function(t,e,i){"use strict";i("7db0");var n=i("53ca");function a(t,e){var i=e.modifiers||{},a=e.value,s="object"===Object(n["a"])(a)?a:{handler:a,options:{}},o=s.handler,c=s.options,d=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(t._observe){if(o&&(!i.quiet||t._observe.init)){var a=Boolean(e.find((function(t){return t.isIntersecting})));o(e,n,a)}t._observe.init&&i.once?r(t):t._observe.init=!0}}),c);t._observe={init:!1,observer:d},d.observe(t)}function r(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var s={inserted:a,unbind:r};e["a"]=s},a523:function(t,e,i){"use strict";i("99af"),i("4de4"),i("b64b"),i("2ca0"),i("20f6"),i("4b85");var n=i("e8f2"),a=i("d9f7");e["a"]=Object(n["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var i,n=e.props,r=e.data,s=e.children,o=r.attrs;return o&&(r.attrs={},i=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),t(n.tag,Object(a["a"])(r,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(i||[])}),s)}})},adda:function(t,e,i){"use strict";i("a15b"),i("a9e3"),i("8efc");var n=i("90a2"),a=(i("36a7"),i("24b2")),r=i("58df"),s=Object(r["a"])(a["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),o=s,c=i("7560"),d=i("d9f7"),l=i("d9bd"),u="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(r["a"])(o,c["a"]).extend({name:"v-img",directives:{intersect:n["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!u||i||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(l["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function n(){var a=t.naturalHeight,r=t.naturalWidth;a||r?(e.naturalWidth=r,e.calculatedAspectRatio=r/a):null!=i&&!e.hasError&&setTimeout(n,i)};n()},genContent:function(){var t=o.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=o.options.render.call(this,t),i=Object(d["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:u?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})}}]);
//# sourceMappingURL=chunk-36bc3834.2f84ea07.js.map