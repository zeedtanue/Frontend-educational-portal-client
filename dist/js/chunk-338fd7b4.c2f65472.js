(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-338fd7b4"],{"4db1":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"text-center"},[e("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,n=a.attrs;return[e("v-app-bar-nav-icon",t._g(t._b({attrs:{color:"light-green accent-4"}},"v-app-bar-nav-icon",n,!1),s))]}}])},[e("v-card",{staticClass:"mx-auto overflow-hidden",attrs:{height:"500",width:"344"}},[e("v-list",[e("v-list-item",[e("v-list-item-title",[e("router-link",{attrs:{to:"/teacher/home"}},[t._v(" Home ")])],1)],1),e("v-list-item",[e("v-list-item-title",[e("router-link",{attrs:{to:"/teacher/profile"}},[t._v(" Profile ")])],1)],1),e("v-list-item",[e("v-list-item-title",[e("router-link",{attrs:{to:"/teacher/class"}},[t._v(" Classes & Events ")])],1)],1),e("v-list-item",[e("v-list-item-title",[e("router-link",{attrs:{to:"/teacher/marking"}},[t._v(" Marking & Performance ")])],1)],1),e("v-list-item",[e("v-list-item-title",[e("router-link",{attrs:{to:"/teacher/books"}},[t._v(" Books ")])],1)],1)],1)],1)],1)],1)},n=[],r={data:function(){return{}}},i=r,o=e("2877"),c=e("6544"),l=e.n(c),u=e("5bc1"),v=e("b0af"),d=e("8860"),f=e("da13"),b=e("5d23"),m=e("e449"),p=Object(o["a"])(i,s,n,!1,null,null,null);a["a"]=p.exports;l()(p,{VAppBarNavIcon:u["a"],VCard:v["a"],VList:d["a"],VListItem:f["a"],VListItemTitle:b["b"],VMenu:m["a"]})},"5bc1":function(t,a,e){"use strict";e("498a");var s=e("5530"),n=e("9d26"),r=e("8336"),i=e("2b0e");a["a"]=i["default"].extend({name:"v-app-bar-nav-icon",functional:!0,render:function(t,a){var e=a.slots,i=a.listeners,o=a.props,c=a.data,l=Object.assign(c,{staticClass:"v-app-bar__nav-icon ".concat(c.staticClass||"").trim(),props:Object(s["a"])(Object(s["a"])({},o),{},{icon:!0}),on:i}),u=e().default;return t(r["a"],l,u||[t(n["a"],"$menu")])}})},"7a85":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-row",[e("Drawer"),e("h1",{staticClass:"title"},[t._v("Performance & Marking")])],1),e("div",[e("v-card",[e("v-row",{attrs:{justify:"space-around"}},t._l(t.classes,(function(a){return e("div",{key:a.id,staticClass:"classes"},[e("router-link",{attrs:{to:{name:"Class-Student",params:{id:a._id,class:a.subject,classID:a._id}}}},[e("h1",[t._v(t._s(a.subject))])])],1)})),0)],1)],1)],1)},n=[],r=e("4db1"),i=e("bc3a"),o=e.n(i),c={data:function(){return{classes:[]}},components:{Drawer:r["a"]},mounted:function(){var t=this,a=localStorage.getItem("token");o.a.get("http://46.101.188.213:5000/api/teacher/class",{headers:{Authorization:a}}).then((function(a){t.classes=a.data,console.log("Class: ",t.classes)})).catch((function(t){console.log("Error: ",t)}))}},l=c,u=(e("d429"),e("2877")),v=e("6544"),d=e.n(v),f=e("b0af"),b=e("a523"),m=e("0fd9"),p=Object(u["a"])(l,s,n,!1,null,"3cebb3a3",null);a["default"]=p.exports;d()(p,{VCard:f["a"],VContainer:b["a"],VRow:m["a"]})},b5b4:function(t,a,e){},d429:function(t,a,e){"use strict";var s=e("b5b4"),n=e.n(s);n.a}}]);
//# sourceMappingURL=chunk-338fd7b4.c2f65472.js.map