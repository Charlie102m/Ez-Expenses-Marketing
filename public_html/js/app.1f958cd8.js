(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("8a23"),s=a.n(n);s.a},"091d":function(t,e,a){"use strict";var n=a("a698"),s=a.n(n);s.a},"0cab":function(t,e,a){},2592:function(t,e,a){"use strict";var n=a("8207"),s=a.n(n);s.a},"30dc":function(t,e,a){t.exports=a.p+"img/responsive-devices.d83abad7.png"},"35ca":function(t,e,a){"use strict";var n=a("0cab"),s=a.n(n);s.a},3728:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"body"},[a("v-content",{attrs:{id:"main"}},[a("TopNav"),a("router-view"),a("Footer")],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{app:"",flat:""}},[a("v-toolbar-title",[t._v("EZ Expenses")]),a("div",{staticClass:"flex-grow-1"}),a("a",{attrs:{href:"https://app.ez-expenses.co.uk/login"}},[a("v-btn",{attrs:{color:"teal-button mr-3",dark:""}},[t._v("Login")])],1),a("a",{attrs:{href:"https://app.ez-expenses.co.uk/register"}},[a("v-btn",{staticClass:"dark-button",attrs:{dark:""}},[t._v("Sign Up")])],1)],1)},o=[],c={name:"TopNav"},l=c,u=(a("35ca"),a("2877")),d=a("6544"),p=a.n(d),f=a("40dc"),v=a("8336"),m=a("2a7f"),h=Object(u["a"])(l,i,o,!1,null,null,null),b=h.exports;p()(h,{VAppBar:f["a"],VBtn:v["a"],VToolbarTitle:m["a"]});var g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("v-container",{attrs:{fluid:""}},[a("h4",{staticClass:"headline ma-5 white--text"},[t._v("© EZ Expenses 2020")])])],1)},y=[],C={name:"Footer"},w=C,_=(a("760c"),a("a523")),x=Object(u["a"])(w,g,y,!1,null,null,null),k=x.exports;p()(x,{VContainer:_["a"]});var S={name:"App",components:{TopNav:b,Footer:k}},j=S,E=(a("034f"),a("7496")),V=a("a75b"),O=Object(u["a"])(j,s,r,!1,null,null,null),T=O.exports;p()(O,{VApp:E["a"],VContent:V["a"]});var F=a("8c4f"),$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("HeroImage"),a("DemoSection"),a("MobileFriendly"),a("ResponseSection"),a("FooterImage")],1)},M=[],P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top-section"},[a("div",{staticClass:"dark-filter"},[a("v-container",{staticStyle:{height:"100%"},attrs:{fluid:""}},[a("v-row",{staticStyle:{height:"100%"},attrs:{align:"center"}},[a("v-col",{staticClass:"text-center",attrs:{id:"fade-away"}},[a("h1",{staticClass:"main-h1 mb-8"},[t._v("Welcome to EZ Expenses")]),a("h2",{staticClass:"section-heading mb-5"},[t._v(" Business miles and expenses made EZ! ")]),a("p",{staticClass:"width-600 mx-auto"},[t._v(" The perfect companion app for all working professionals who travel or make purchases on the job! ")])])],1)],1)],1)])},R=[],I={name:"HeroImage",methods:{handleScroll:function(){var t=document.getElementById("fade-away"),e=window.scrollY,a=window.innerHeight-400;if(e>200){var n=(a-e)/a;t.style.opacity=n}else t.style.opacity=1}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},B=I,H=(a("2592"),a("62ad")),A=a("0fd9"),N=Object(u["a"])(B,P,R,!1,null,null,null),Z=N.exports;p()(N,{VCol:H["a"],VContainer:_["a"],VRow:A["a"]});var z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-section"},[n("v-container",[n("v-row",{staticClass:"pa-5",attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-center px-5",attrs:{cols:"12",sm:"12",md:"6"}},[n("video",{attrs:{src:a("a47c"),autoplay:"true",loop:"true",muted:"true"},domProps:{muted:!0}})]),n("v-col",{staticClass:"white--text px-5",attrs:{cols:"12",sm:"12",md:"6"}},[n("h3",{staticClass:"section-heading my-3"},[t._v("Don't wait to get paid!")]),n("p",{},[t._v("Take the pain out of getting reimbursed for your efforts!")]),n("div",{staticClass:"ma-3"},[n("i",{staticClass:"fas fa-check-circle mr-5"}),t._v(" Fast ")]),n("div",{staticClass:"ma-3"},[n("i",{staticClass:"fas fa-check-circle mr-5"}),t._v(" Simple ")]),n("div",{staticClass:"ma-3"},[n("i",{staticClass:"fas fa-check-circle mr-5"}),t._v(" Mobile friendly ")]),n("p",{staticClass:"width-600"},[t._v("With EZ Expenses you can log your purchases and work trips in seconds. Then your claim is just a click of a button away!")]),n("p",[n("strong",[t._v("And did we mention...it's 100% FREE!")])])])],1),n("v-row",{staticClass:"mb-5",attrs:{align:"center",justify:"center"}},[n("a",{attrs:{href:"https://app.ez-expenses.co.uk/register"}},[n("v-btn",{staticClass:"dark-button",attrs:{large:"",dark:""}},[t._v("Sign Up Now!")])],1)])],1)],1)},D=[],U={name:"DemoSection"},L=U,W=(a("091d"),Object(u["a"])(L,z,D,!1,null,null,null)),J=W.exports;p()(W,{VBtn:v["a"],VCol:H["a"],VContainer:_["a"],VRow:A["a"]});var Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mobile-friendly-section"},[a("div",{staticClass:"light-filter"},[a("v-container",{staticStyle:{height:"100%"},attrs:{fluid:""}},[a("v-row",{staticStyle:{height:"100%"},attrs:{align:"center"}},[a("v-col",{staticClass:"text-center"},[a("div",{staticClass:"floating-text"},[a("p",{staticClass:"ma-5"},[t._v("Completely Mobile Responsive")])])])],1)],1)],1)])},q=[],G={name:"MobileFriendly"},K=G,Q=(a("cdd3"),Object(u["a"])(K,Y,q,!1,null,null,null)),X=Q.exports;p()(Q,{VCol:H["a"],VContainer:_["a"],VRow:A["a"]});var tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"response-section pa-5"},[n("v-container",[n("div",{staticClass:"text-center"},[n("h3",{staticClass:"section-heading"},[t._v("Use on all of your devices!")]),n("p",{staticClass:"width-600 mt-5 mb-10 mx-auto"},[t._v("We are designed to work perfectly on all of your devices; from your phone to your PC... and everything in between!")])]),n("div",{attrs:{align:"center",justify:"center"}},[n("v-img",{attrs:{src:a("30dc"),"max-width":"600","max-height":"300"}})],1)])],1)},et=[],at={name:"ResponseSection"},nt=at,st=(a("9655"),a("adda")),rt=Object(u["a"])(nt,tt,et,!1,null,null,null),it=rt.exports;p()(rt,{VContainer:_["a"],VImg:st["a"]});var ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-section"},[a("div",{staticClass:"light-filter"},[a("v-container",{staticStyle:{height:"100%"},attrs:{fluid:""}},[a("v-row",{staticStyle:{height:"100%"},attrs:{align:"center"}},[a("v-col",{staticClass:"text-center"},[a("div",{staticClass:"floating-text"},[a("p",{staticClass:"ma-5"},[t._v("Save time, money and get back to what matters!")])]),a("a",{staticClass:"d-block my-10",attrs:{href:"https://app.ez-expenses.co.uk/register"}},[a("v-btn",{staticClass:"dark-button",attrs:{large:"",dark:""}},[t._v("Sign Up Now!")])],1)])],1)],1)],1)])},ct=[],lt={name:"FooterImage"},ut=lt,dt=(a("ed1e"),Object(u["a"])(ut,ot,ct,!1,null,null,null)),pt=dt.exports;p()(dt,{VBtn:v["a"],VCol:H["a"],VContainer:_["a"],VRow:A["a"]});var ft={name:"Home",components:{HeroImage:Z,DemoSection:J,MobileFriendly:X,ResponseSection:it,FooterImage:pt},created:function(){}},vt=ft,mt=Object(u["a"])(vt,$,M,!1,null,null,null),ht=mt.exports;n["a"].use(F["a"]);var bt=new F["a"]({mode:"history",base:"/",routes:[{path:"*",name:"home",component:ht}]}),gt=a("f309");n["a"].use(gt["a"]);var yt=new gt["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:bt,vuetify:yt,render:function(t){return t(T)}}).$mount("#app")},"760c":function(t,e,a){"use strict";var n=a("a4bc"),s=a.n(n);s.a},8207:function(t,e,a){},"8a23":function(t,e,a){},9655:function(t,e,a){"use strict";var n=a("3728"),s=a.n(n);s.a},a47c:function(t,e,a){t.exports=a.p+"media/AddTripHd.min.0d909f11.mp4"},a4bc:function(t,e,a){},a5db:function(t,e,a){},a698:function(t,e,a){},cdd3:function(t,e,a){"use strict";var n=a("d7c3"),s=a.n(n);s.a},d7c3:function(t,e,a){},ed1e:function(t,e,a){"use strict";var n=a("a5db"),s=a.n(n);s.a}});
//# sourceMappingURL=app.1f958cd8.js.map