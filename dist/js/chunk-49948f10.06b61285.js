(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49948f10"],{"5bc1":function(t,e,a){"use strict";a("498a");var n=a("5530"),i=a("9d26"),r=a("8336"),s=a("2b0e");e["a"]=s["default"].extend({name:"v-app-bar-nav-icon",functional:!0,render:function(t,e){var a=e.slots,s=e.listeners,o=e.props,l=e.data,c=Object.assign(l,{staticClass:"v-app-bar__nav-icon ".concat(l.staticClass||"").trim(),props:Object(n["a"])(Object(n["a"])({},o),{},{icon:!0}),on:s}),v=a().default;return t(r["a"],c,v||[t(i["a"],"$menu")])}})},"8b2a":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-app-bar-nav-icon",t._g(t._b({attrs:{color:"light-green accent-4"}},"v-app-bar-nav-icon",i,!1),n))]}}])},[a("v-card",{staticClass:"mx-auto overflow-hidden",attrs:{height:"500",width:"344"}},[a("v-list",[a("v-list-item",[a("v-list-item-title",[a("router-link",{attrs:{to:"/student/home"}},[t._v(" Home ")])],1)],1),a("v-list-item",[a("v-list-item-title",[a("router-link",{attrs:{to:"/student/profile"}},[t._v(" Profile ")])],1)],1),a("v-list-item",[a("v-list-item-title",[a("router-link",{attrs:{to:"/student/class"}},[t._v(" Classes & Events ")])],1)],1),a("v-list-item",[a("v-list-item-title",[a("router-link",{attrs:{to:"/student/performance"}},[t._v(" Performance ")])],1)],1),a("v-list-item",[a("v-list-item-title",[a("router-link",{attrs:{to:"/student/books"}},[t._v(" Books ")])],1)],1),a("v-list-item",[a("v-list-item-title",[a("router-link",{attrs:{to:"/student/payment"}},[t._v(" Payment ")])],1)],1)],1)],1)],1)],1)},i=[],r={data:function(){return{}}},s=r,o=a("2877"),l=a("6544"),c=a.n(l),v=a("5bc1"),u=a("b0af"),d=a("8860"),p=a("da13"),m=a("5d23"),f=a("e449"),h=Object(o["a"])(s,n,i,!1,null,null,null);e["a"]=h.exports;c()(h,{VAppBarNavIcon:v["a"],VCard:u["a"],VList:d["a"],VListItem:p["a"],VListItemTitle:m["b"],VMenu:f["a"]})},b1cf:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",[a("div",[a("v-row",[a("Drawer"),a("h1",{staticClass:"title"},[t._v("Payment")])],1)],1),a("v-card",{staticStyle:{padding:"30px"}},[a("h2",[t._v(" Payment History ")]),t.payment?a("div",[t._l(t.payment,(function(e){return a("div",{key:e.description},[a("div",[a("h3",{directives:[{name:"if!",rawName:"v-if!",value:e.paid,expression:"item.paid"}]},[t._v(" Unpaid Payment ")]),a("p",[t._v(" "+t._s(e.description))]),a("p",[t._v(" "+t._s(e.amount))])])])})),a("h3",[t._v("No Paid Payment")])],2):a("div",[a("p",[t._v(" No payment history")])]),a("div",{attrs:{align:"end"}},[a("v-btn",{attrs:{color:"light-green",dark:""},on:{click:t.pay}},[t._v("Pay Now")])],1)])],1)],1)},i=[],r=a("8b2a"),s=a("bc3a"),o=a.n(s),l={components:{Drawer:r["a"]},data:function(){return{payment:[]}},mounted:function(){var t=this,e=localStorage.getItem("token");o.a.get("https://creatixa-student-portal.herokuapp.com/api/student/payment",{headers:{Authorization:e}}).then((function(e){t.payment=e.data,console.log("Class: ",t.payment)})).catch((function(t){console.log("Error: ",t)}))},methods:{pay:function(){alert("this section will be created upon school's payment version")}}},c=l,v=a("2877"),u=a("6544"),d=a.n(u),p=a("8336"),m=a("b0af"),f=a("a523"),h=a("0fd9"),_=Object(v["a"])(c,n,i,!1,null,"68ef3709",null);e["default"]=_.exports;d()(_,{VBtn:p["a"],VCard:m["a"],VContainer:f["a"],VRow:h["a"]})}}]);
//# sourceMappingURL=chunk-49948f10.06b61285.js.map