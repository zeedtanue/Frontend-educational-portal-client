(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c13295f2"],{"36a7":function(t,e,i){},"5bc1":function(t,e,i){"use strict";i("498a");var s=i("5530"),a=i("9d26"),n=i("8336"),r=i("2b0e");e["a"]=r["default"].extend({name:"v-app-bar-nav-icon",functional:!0,render:function(t,e){var i=e.slots,r=e.listeners,o=e.props,c=e.data,l=Object.assign(c,{staticClass:"v-app-bar__nav-icon ".concat(c.staticClass||"").trim(),props:Object(s["a"])(Object(s["a"])({},o),{},{icon:!0}),on:r}),d=i().default;return t(n["a"],l,d||[t(a["a"],"$menu")])}})},"701e":function(t,e,i){"use strict";var s=i("af8f"),a=i.n(s);a.a},"8efc":function(t,e,i){},"90a2":function(t,e,i){"use strict";i("7db0");var s=i("53ca");function a(t,e){var i=e.modifiers||{},a=e.value,r="object"===Object(s["a"])(a)?a:{handler:a,options:{}},o=r.handler,c=r.options,l=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],s=arguments.length>1?arguments[1]:void 0;if(t._observe){if(o&&(!i.quiet||t._observe.init)){var a=Boolean(e.find((function(t){return t.isIntersecting})));o(e,s,a)}t._observe.init&&i.once?n(t):t._observe.init=!0}}),c);t._observe={init:!1,observer:l},l.observe(t)}function n(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var r={inserted:a,unbind:n};e["a"]=r},adda:function(t,e,i){"use strict";i("a15b"),i("a9e3"),i("8efc");var s=i("90a2"),a=(i("36a7"),i("24b2")),n=i("58df"),r=Object(n["a"])(a["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),o=r,c=i("7560"),l=i("d9f7"),d=i("d9bd"),u="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(n["a"])(o,c["a"]).extend({name:"v-img",directives:{intersect:s["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!u||i||this.eager){if(this.normalisedSrc.lazySrc){var s=new Image;s.src=this.normalisedSrc.lazySrc,this.pollForSize(s,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(d["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var a=t.naturalHeight,n=t.naturalWidth;a||n?(e.naturalWidth=n,e.calculatedAspectRatio=n/a):null!=i&&!e.hasError&&setTimeout(s,i)};s()},genContent:function(){var t=o.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=o.options.render.call(this,t),i=Object(l["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:u?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},af8f:function(t,e,i){},d89f:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"text-center"},[i("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,a=e.attrs;return[i("v-app-bar-nav-icon",t._g(t._b({attrs:{color:"light-green accent-4"}},"v-app-bar-nav-icon",a,!1),s))]}}])},[i("v-card",{staticClass:"mx-auto overflow-hidden",attrs:{height:"500",width:"344"}},[i("v-list",[i("v-list-item",[i("v-list-item-title",[i("router-link",{attrs:{to:"/admin/home"}},[t._v(" Home ")])],1)],1),i("v-list-item",[i("v-list-item-title",[i("router-link",{attrs:{to:"/admin/section"}},[t._v(" Section ")])],1)],1),i("v-list-item",[i("v-list-item-title",[i("router-link",{attrs:{to:"/admin/class"}},[t._v(" Class ")])],1)],1),i("v-list-item",[i("v-list-item-title",[i("router-link",{attrs:{to:"/admin/students"}},[t._v(" Students ")])],1)],1),i("v-list-item",[i("v-list-item-title",[i("router-link",{attrs:{to:"/admin/teachers"}},[t._v(" Teachers ")])],1)],1),i("v-list-item",[i("v-list-item-title",[i("router-link",{attrs:{to:"/admin/parents"}},[t._v(" Parents ")])],1)],1),i("v-list-item",[i("v-list-item-title",[i("router-link",{attrs:{to:"/admin/books"}},[t._v(" Books ")])],1)],1),i("v-list-item",[i("v-list-item-title",[i("router-link",{attrs:{to:"/admin/notice"}},[t._v(" All notice ")])],1)],1)],1)],1)],1)],1)},a=[],n={data:function(){return{}}},r=n,o=i("2877"),c=i("6544"),l=i.n(c),d=i("5bc1"),u=i("b0af"),h=i("8860"),v=i("da13"),m=i("5d23"),p=i("e449"),f=Object(o["a"])(r,s,a,!1,null,null,null);e["a"]=f.exports;l()(f,{VAppBarNavIcon:d["a"],VCard:u["a"],VList:h["a"],VListItem:v["a"],VListItemTitle:m["b"],VMenu:p["a"]})},fd3b:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("v-container",[i("v-row",{attrs:{justify:"space-between"}},[i("v-row",[i("Drawer"),i("h1",{staticClass:"title",staticStyle:{"padding-top":"10px"}},[t._v("Parents")])],1),i("v-btn",{staticClass:"ma-2",attrs:{tile:"",outlined:"",color:"success"},on:{click:t.addstudent}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-plus")]),t._v(" Add A Parent ")],1)],1),i("h3",[t._v("Total Parents: "+t._s(t.parents.length))]),i("v-card",[i("div",{staticClass:"padding-card"},[i("v-row",{staticClass:"d-flex",attrs:{justify:"center"}},t._l(t.parents,(function(e){return i("div",{key:e.id,staticClass:"student"},[i("router-link",{attrs:{to:{name:"Parent",params:{id:e.id}}}},[i("v-img",{staticClass:"rounded-circle",staticStyle:{"border-radious":"25"},attrs:{height:"100px",width:"100px",src:e.profileImage}}),i("p",{staticClass:"text-center"},[t._v(t._s(e.name))])],1)],1)})),0)],1)]),i("div")],1)],1)},a=[],n=i("d89f"),r=i("bc3a"),o=i.n(r),c={name:"AllStudent",components:{Drawer:n["a"]},data:function(){return{parents:[]}},mounted:function(){var t=this;o.a.get("https://creatixa-student-portal.herokuapp.com/api/admin/parent").then((function(e){t.parents=e.data.parent,console.log("Data: ",e.data.parent)})).catch((function(t){console.log("Error: ",t)}))},methods:{addstudent:function(){this.$router.push("register-parents")}}},l=c,d=(i("701e"),i("2877")),u=i("6544"),h=i.n(u),v=i("8336"),m=i("b0af"),p=i("a523"),f=i("132d"),g=i("adda"),b=i("0fd9"),_=Object(d["a"])(l,s,a,!1,null,"7ef7c649",null);e["default"]=_.exports;h()(_,{VBtn:v["a"],VCard:m["a"],VContainer:p["a"],VIcon:f["a"],VImg:g["a"],VRow:b["a"]})}}]);
//# sourceMappingURL=chunk-c13295f2.38e9d5dc.js.map