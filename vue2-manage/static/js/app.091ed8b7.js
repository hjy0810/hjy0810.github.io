(function(e){function t(t){for(var r,a,s=t[0],i=t[1],u=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);m&&m(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function s(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-25ef4fa1":"c5c01ed2","chunk-2d0a3e2c":"a9b52e65","chunk-2d0af84e":"0ef5f6a4","chunk-2d0b6a9b":"c4ad28bf","chunk-2d0c73f1":"76967092","chunk-2d0e5357":"603e525e","chunk-2d0e88c0":"554dcf90","chunk-5e8de404":"54014256","chunk-7c0e9ee6":"b59fbc29","chunk-aeedd8fa":"58177ac3"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-25ef4fa1":1,"chunk-5e8de404":1,"chunk-aeedd8fa":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="static/css/"+({}[e]||e)+"."+{"chunk-25ef4fa1":"a539152c","chunk-2d0a3e2c":"31d6cfe0","chunk-2d0af84e":"31d6cfe0","chunk-2d0b6a9b":"31d6cfe0","chunk-2d0c73f1":"31d6cfe0","chunk-2d0e5357":"31d6cfe0","chunk-2d0e88c0":"31d6cfe0","chunk-5e8de404":"d0177e08","chunk-7c0e9ee6":"31d6cfe0","chunk-aeedd8fa":"22e8af5f"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],m.parentNode.removeChild(m),n(c)},m.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(m)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue2-manage/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var m=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0f9a":function(e,t,n){"use strict";n.r(t);var r=n("b775");function a(e){return Object(r["a"])({url:"/mock/user/login",method:"post",data:e})}function o(e){return Object(r["a"])({url:"/mock/user/info",method:"get",params:{token:e}})}function c(){return Object(r["a"])({url:"/mock/user/logout",method:"post"})}var s=n("5f87"),i=n("a18c");const u={token:Object(s["a"])(),name:"",roles:[],introduction:"",avatar:""},l={SET_TOKEN:(e,t)=>{e.token=t},SET_NAME:(e,t)=>{e.name=t},SET_ROLES:(e,t)=>{e.roles=t},SET_INTRODUCTION:(e,t)=>{e.introduction=t},SET_AVATAR:(e,t)=>{u.avatar=t}},d={login({commit:e},t){const{username:n,password:r}=t;return new Promise((t,o)=>{a({username:n.trim(),password:r}).then(n=>{const{data:r}=n;e("SET_TOKEN",r.token),Object(s["c"])(r.token),t()}).catch(e=>{o(e)})})},getInfo({commit:e,state:t}){return new Promise((n,r)=>{o(t.token).then(t=>{const{data:a}=t;a||r("Verification failed, please Login again.");const{roles:o,name:c,introduction:s,avatar:i}=a;o||r("getInfo: roles must be given a array"),e("SET_ROLES",o),e("SET_NAME",c),e("SET_INTRODUCTION",s),e("SET_AVATAR",i),n(a)}).catch(e=>{r(e)})})},logout({commit:e,state:t}){return new Promise((n,r)=>{c(t.token).then(()=>{e("SET_TOKEN",""),e("SET_ROLES",""),Object(s["b"])(),Object(i["d"])(),n()}).catch(e=>{r(e)})})},resetToken({commit:e}){return new Promise(t=>{e("SET_TOKEN",""),e("SET_ROLES",[]),Object(s["b"])(),t()})}};t["default"]={namespaced:!0,state:u,mutations:l,actions:d}},"31c2":function(e,t,n){"use strict";n.r(t);n("14d9");var r=n("a18c");function a(e){if(!e||"object"!==typeof e)return e;const t=e.constructor===Array?[]:{};for(const[n,r]of Object.entries(e))t[n]="object"===typeof r?a(r):r;return t}function o(e,t){const n=[];return e.forEach(e=>{const r=a(e);c(t,r)&&(r.children&&(r.children=o(r.children,t)),n.push(r))}),n}function c(e,t){return!t.meta||!t.meta.roles||e.some(e=>t.meta.roles.includes(e))}const s={routes:[]},i={SET_ROUTES:(e,t)=>{e.routes=r["b"].concat(t)}},u={generateRoutes({commit:e},t){return new Promise(n=>{let a;a=t.includes("admin")?r["a"]||[]:o(r["a"],t),e("SET_ROUTES",a),n(a)})}};t["default"]={namespaced:!0,state:s,mutations:i,actions:u}},"331a":function(e,t){const n={admin:{token:"admin-token"},normal:{token:"normal-token"}},r={"admin-token":{roles:["admin"],introduction:"超级管理员",avatar:"https://img.zcool.cn/community/019fb65925bc32a801216a3ef77f7b.png@1280w_1l_2o_100sh.png",name:"Super-Admin"},"normal-token":{roles:["normal"],introduction:"普通用户",avatar:"https://img2.baidu.com/it/u=351990390,4250122652&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",name:"Normal-User"}};e.exports=[{url:"/mock/user/login",type:"post",response:e=>{const{username:t}=e.body,r=n[t];return r?{code:200,data:r}:{code:403,message:"Account and password are incorrect."}}},{url:"/mock/user/info",type:"get",response:e=>{const{token:t}=e.query,n=r[t];return n?{code:200,data:n}:{code:403,message:"Login failed, unable to get user details."}}},{url:"/mock/user/logout",type:"post",response:()=>({code:200,data:"success"})}]},3590:function(e,t,n){e.exports={sideBarWidth:"210px",navbarHeight:"60px",menuBg:"#284762",menuHover:"#263445",menuText:"#bfcbd9",menuActiveText:"#409eff",subMenuBg:"#1f2d3d",subMenuHover:"#001528",subMenuActiveText:"#f4f4f5"}},"388e":function(e,t,n){},3979:function(e,t,n){"use strict";n.r(t);var r=n("e017"),a=n.n(r),o=n("21a1"),c=n.n(o),s=new a.a({id:"icon-permission",use:"icon-permission-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="icon-permission"><path d="M544 648.256a64 64 0 1 1-64 0V568.64a64 64 0 1 1 64 0v79.616zm-280.704-389.12a256.128 256.128 0 0 1 497.408 0H832a128 128 0 0 1 128 128V832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V387.072a128 128 0 0 1 128-128h71.296zm66.56 0h364.288a192.192 192.192 0 0 0-364.288 0zM192 323.072a64 64 0 0 0-64 64V832a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V387.072a64 64 0 0 0-64-64H192z" fill="#f0ebeb" /></symbol>'});c.a.add(s);t["default"]=s},"3cf0":function(e,t,n){},4360:function(e,t,n){"use strict";n("13d5");var r=n("2b0e"),a=n("2f62");const o={accessRoutes:e=>e.permission.routes,roles:e=>e.user.roles,token:e=>e.user.token,avatar:e=>e.user.avatar,name:e=>e.user.name,introduction:e=>e.user.introduction,opened:e=>e.app.opened};var c=o;r["default"].use(a["a"]);const s=n("c653"),i=s.keys().reduce((e,t)=>{const n=t.replace(/^\.\/(.*)\.\w+$/,"$1"),r=s(t);return e[n]=r.default,e},{});t["a"]=new a["a"].Store({modules:i,getters:c})},"47f1":function(e,t,n){"use strict";n.r(t);var r=n("e017"),a=n.n(r),o=n("21a1"),c=n.n(o),s=new a.a({id:"icon-table",use:"icon-table-usage",viewBox:"0 0 128 128",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-table"><path d="M.006.064h127.988v31.104H.006V.064zm0 38.016h38.396v41.472H.006V38.08zm0 48.384h38.396v41.472H.006V86.464zM44.802 38.08h38.396v41.472H44.802V38.08zm0 48.384h38.396v41.472H44.802V86.464zM89.598 38.08h38.396v41.472H89.598zm0 48.384h38.396v41.472H89.598z" /><path d="M.006.064h127.988v31.104H.006V.064zm0 38.016h38.396v41.472H.006V38.08zm0 48.384h38.396v41.472H.006V86.464zM44.802 38.08h38.396v41.472H44.802V38.08zm0 48.384h38.396v41.472H44.802V86.464zM89.598 38.08h38.396v41.472H89.598zm0 48.384h38.396v41.472H89.598z" /></symbol>'});c.a.add(s);t["default"]=s},"4b0f":function(e,t,n){const r=n("96eb"),a=n("4d91"),o=n("331a"),{param2Obj:c}=n("8a60"),s=[...a,...o];function i(){for(const e of s)r.mock(new RegExp(e.url),e.method,u(e.response))}function u(e){return function(t){let n=null;const{url:r,body:a}=t;return n=e instanceof Function?e({body:JSON.parse(a),query:c(r)}):e,n}}e.exports={mocks:s,mockXHR:i}},"4d91":function(e,t,n){n("14d9");const r=n("96eb"),a=r.Random,o=[],c=100;r.Random.extend({phone:function(){var e=["132","135","189"];return this.pick(e)+r.mock(/\d{8}/)}});for(let s=0;s<c;s++)o.push(r.mock({id:"@increment",name:a.cname(),IDNumber:a.id(),age:a.integer(20,50),phone:"@phone",gender:"@integer(0,1)",job:"@integer(0,3)",entryDate:"@date",address:`${a.province()}-${a.city()}-${a.county()}`}));e.exports=[{url:"/mock/employee/list",method:"get",response:e=>{let t=[];const n=o.length,{limit:r=10,page:a=1,name:c,job:s,gender:i}=e.query;return t=o.filter(e=>!(c&&e.name.indexOf(c)<0)&&((!s||e.job===+s)&&(!i||e.gender===+i))),t=t.filter((e,t)=>t<r*a&&t>=r*(a-1)),{code:200,data:{total:n,list:t}}}},{url:"/mock/employee/create",method:"post",response:()=>({code:200,data:"create success"})},{url:"/mock/employee/delete",method:"get",response:()=>({code:200,data:"delete success"})},{url:"/mock/employee/update",method:"post",response:()=>({code:200,data:"update success"})}]},"51ff":function(e,t,n){var r={"./dashboard.svg":"f782","./exit-fullscreen.svg":"dbc7","./fullscreen.svg":"9921","./permission.svg":"3979","./tab.svg":"8fb7","./table.svg":"47f1","./tree.svg":"93cd","./user.svg":"b3b5"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="51ff"},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],c={name:"App"},s=c,i=n("2877"),u=Object(i["a"])(s,a,o,!1,null,null,null),l=u.exports,d=n("a18c"),m=n("4360"),h=n("4b0f"),p=(n("f5df1"),n("b20f"),function(){var e=this,t=e._self._c;return t("svg",e._g({class:e.svgClass,attrs:{"aria-hidden":"true"}},e.$listeners),[t("use",{attrs:{"xlink:href":e.iconName}})])}),f=[],b={name:"SvgIcon",props:{iconClass:{type:String,default:""},className:{type:String,default:""}},computed:{iconName(){return"#icon-"+this.iconClass},svgClass(){return this.className?"svg-icon "+this.className:"svg-icon"}}},v=b,g=(n("f333"),Object(i["a"])(v,p,f,!1,null,"10577448",null)),w=g.exports;const k=n("51ff");k.keys().map(k),r["default"].component("SvgIcon",w);var y=n("5c96"),x=n.n(y),O=(n("0fae"),n("5f87")),_=n("323e"),S=n.n(_);n("a5d8");S.a.configure({showSpinner:!1}),d["c"].beforeEach(async(e,t,n)=>{S.a.start();const r=Object(O["a"])();if(r)if("/login"===e.path)n({path:"/"});else{const t=m["a"].getters.roles&&m["a"].getters.roles.length>0;if(t)n();else try{const{roles:t}=await m["a"].dispatch("user/getInfo"),r=await m["a"].dispatch("permission/generateRoutes",t);r.forEach(e=>{d["c"].addRoute(e)}),n({...e,replace:!0})}catch(a){await m["a"].dispatch("user/resetToken"),y["Message"].error(a||"Has Error"),n("/login?redirect="+e.path),S.a.done()}}else"/login"===e.path?n():(n("/login?redirect="+e.path),S.a.done())}),d["c"].afterEach(()=>{S.a.done()}),r["default"].use(x.a),Object(h["mockXHR"])(),r["default"].config.productionTip=!1,new r["default"]({router:d["c"],store:m["a"],render:e=>e(l)}).$mount("#app")},"5f87":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return i}));var r=n("852e"),a=n.n(r);const o="Admin-Token";function c(){return a.a.get(o)}function s(e){return a.a.set(o,e)}function i(){return a.a.remove(o)}},"616e":function(e,t,n){},"6b62":function(e,t,n){"use strict";n("616e")},7760:function(e,t,n){"use strict";n("bc1b")},"8a60":function(e,t,n){"use strict";function r(e){const t=decodeURIComponent(e.split("?")[1]).replace(/\+/g," ");if(!t)return{};const n={},r=t.split("&");return r.forEach(e=>{const t=e.indexOf("=");if(-1!==t){const r=e.substring(0,t),a=e.substring(t+1,e.length);n[r]=a}}),n}n.r(t),n.d(t,"param2Obj",(function(){return r}))},"8dd0":function(e,t,n){"use strict";n("c459")},"8fb7":function(e,t,n){"use strict";n.r(t);var r=n("e017"),a=n.n(r),o=n("21a1"),c=n.n(o),s=new a.a({id:"icon-tab",use:"icon-tab-usage",viewBox:"0 0 128 128",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-tab"><path d="M78.921.052H49.08c-1.865 0-3.198 1.599-3.198 3.464v6.661c0 1.865 1.6 3.464 3.198 3.464h29.84c1.865 0 3.198-1.599 3.198-3.464V3.516C82.385 1.65 80.786.052 78.92.052zm45.563 0H94.642c-1.865 0-3.464 1.599-3.464 3.464v6.661c0 1.865 1.599 3.464 3.464 3.464h29.842c1.865-.266 3.464-1.599 3.464-3.464V3.516c0-1.865-1.599-3.464-3.464-3.464zm0 22.382H40.02c-1.866 0-3.464-1.599-3.464-3.464V3.516c0-1.865-1.599-3.464-3.464-3.464H3.516C1.65.052.052 1.651.052 3.516V124.75c0 1.598 1.599 3.197 3.464 3.197h120.968c1.865 0 3.464-1.599 3.464-3.464V25.898c0-1.865-1.599-3.464-3.464-3.464z" /></symbol>'});c.a.add(s);t["default"]=s},"93cd":function(e,t,n){"use strict";n.r(t);var r=n("e017"),a=n.n(r),o=n("21a1"),c=n.n(o),s=new a.a({id:"icon-tree",use:"icon-tree-usage",viewBox:"0 0 128 128",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-tree"><path d="M.002 9.2c0 5.044 3.58 9.133 7.998 9.133 4.417 0 7.997-4.089 7.997-9.133 0-5.043-3.58-9.132-7.997-9.132S.002 4.157.002 9.2zM31.997.066h95.981V18.33H31.997V.066zm0 45.669c0 5.044 3.58 9.132 7.998 9.132 4.417 0 7.997-4.088 7.997-9.132 0-3.263-1.524-6.278-3.998-7.91-2.475-1.63-5.524-1.63-7.998 0-2.475 1.632-4 4.647-4 7.91zM63.992 36.6h63.986v18.265H63.992V36.6zm-31.995 82.2c0 5.043 3.58 9.132 7.998 9.132 4.417 0 7.997-4.089 7.997-9.132 0-5.044-3.58-9.133-7.997-9.133s-7.998 4.089-7.998 9.133zm31.995-9.131h63.986v18.265H63.992V109.67zm0-27.404c0 5.044 3.58 9.133 7.998 9.133 4.417 0 7.997-4.089 7.997-9.133 0-3.263-1.524-6.277-3.998-7.909-2.475-1.631-5.524-1.631-7.998 0-2.475 1.632-4 4.646-4 7.91zm31.995-9.13h31.991V91.4H95.987V73.135z" /></symbol>'});c.a.add(s);t["default"]=s},9921:function(e,t,n){"use strict";n.r(t);var r=n("e017"),a=n.n(r),o=n("21a1"),c=n.n(o),s=new a.a({id:"icon-fullscreen",use:"icon-fullscreen-usage",viewBox:"0 0 128 128",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-fullscreen"><path d="M38.47 52L52 38.462l-23.648-23.67L43.209 0H.035L0 43.137l14.757-14.865L38.47 52zm74.773 47.726L89.526 76 76 89.536l23.648 23.672L84.795 128h43.174L128 84.863l-14.757 14.863zM89.538 52l23.668-23.648L128 43.207V.038L84.866 0 99.73 14.76 76 38.472 89.538 52zM38.46 76L14.792 99.651 0 84.794v43.173l43.137.033-14.865-14.757L52 89.53 38.46 76z" /></symbol>'});c.a.add(s);t["default"]=s},a18c:function(e,t,n){"use strict";n.d(t,"b",(function(){return he})),n.d(t,"a",(function(){return pe})),n.d(t,"d",(function(){return ve}));var r,a,o=n("2b0e"),c=n("8c4f"),s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-container",class:{hideSidebar:e.opened}},[t("Sidebar",{staticClass:"sidebar-container"}),t("div",{staticClass:"main-container"},[t("Navbar"),t("AppMain")],1)],1)},i=[],u=function(){var e=this,t=e._self._c;return t("el-scrollbar",{attrs:{"wrap-class":"scrollbar-container"}},[t("el-menu",{attrs:{mode:"vertical",collapse:e.opened,"default-active":e.activeMenu,"background-color":e.variable.menuBg,"text-color":e.variable.menuText,"active-text-color":e.variable.menuActiveText,"unique-opened":!1,router:!0}},e._l(e.accessRoutes,(function(e){return t("SidebarItem",{key:e.path,attrs:{route:e,"base-path":e.path}})})),1)],1)},l=[],d=n("3590"),m=n.n(d),h=function(){var e=this,t=e._self._c;return e.route.hidden?e._e():t("li",[e.menuRoute?t("el-menu-item",{class:{"submenu-title-noDropdown":!e.isNest},attrs:{index:e.resolvePath(e.menuRoute.path)}},[t("Item",{attrs:{icon:e.menuRoute.meta&&e.menuRoute.meta.icon,title:e.menuRoute.meta&&e.menuRoute.meta.title}})],1):t("el-submenu",{attrs:{index:e.resolvePath(e.route.path),"popper-append-to-body":""}},[e.route.meta?t("template",{slot:"title"},[t("Item",{attrs:{icon:e.route.meta.icon,title:e.route.meta.title}})],1):e._e(),e._l(e.subMenuRoutes,(function(n){return t("SidebarItem",{key:n.path,staticClass:"nest-menu",attrs:{route:n,"is-nest":!0,"base-path":e.resolvePath(n.path)}})}))],2)],1)},p=[],f=n("df7c"),b=n.n(f),v=(n("14d9"),{name:"Item",functional:!0,props:{icon:{type:String,default:""},title:{type:String,default:""}},render(e,t){const{icon:n,title:r}=t.props,a=[];return n&&(n.includes("el-icon")?a.push(e("i",{class:[n,"sub-el-icon"]})):a.push(e("svg-icon",{attrs:{"icon-class":n}}))),r&&a.push(e("span",{slot:"title"},[r])),a}}),g=v,w=(n("a94d"),n("2877")),k=Object(w["a"])(g,r,a,!1,null,"41914590",null),y=k.exports,x={name:"SidebarItem",components:{Item:y},props:{route:{type:Object,required:!0},basePath:{type:String,default:""},isNest:{type:Boolean,default:!1}},computed:{menuRoute(){const e=this.route.children;return e?!(!e||1!==e.length)&&e[0]:this.route},subMenuRoutes(){const e=this.route.children&&this.route.children.length>=1;return e?this.route.children:[]}},methods:{resolvePath(e){return this.menuRoute&&0===this.subMenuRoutes.length?b.a.resolve(this.basePath,""):b.a.resolve(this.basePath,e)}}},O=x,_=Object(w["a"])(O,h,p,!1,null,null,null),S=_.exports,T=n("2f62"),E={name:"Sidebar",components:{SidebarItem:S},computed:{...Object(T["b"])(["accessRoutes","opened"]),variable(){return m.a},activeMenu(){return this.$route.path}}},j=E,z=Object(w["a"])(j,u,l,!1,null,null,null),M=z.exports,C=function(){var e=this,t=e._self._c;return t("section",{staticClass:"app-main"},[t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("router-view")],1)],1)},B=[],H={name:"AppMain"},L=H,R=(n("d399"),Object(w["a"])(L,C,B,!1,null,"134546aa",null)),A=R.exports,N=function(){var e=this,t=e._self._c;return t("div",{staticClass:"navbar-container"},[t("hamburger",{staticClass:"hamburger-container",attrs:{"is-active":e.opened},on:{toggleClick:e.toggleSideBar}}),t("Breadcrumb",{staticClass:"breadcrumb-container"}),t("div",{staticClass:"right-menu"},[t("el-tooltip",{staticClass:"right-menu-item",attrs:{content:"全屏",placement:"bottom"}},[t("Screenfull")],1),t("el-dropdown",{staticClass:"right-menu-item",attrs:{trigger:"click"}},[t("div",[t("img",{staticClass:"avatar",attrs:{src:e.avatar}}),e.opened?t("i",{staticClass:"el-icon-caret-bottom el-icon--right"}):t("i",{staticClass:"el-icon-caret-top el-icon--right"})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("router-link",{attrs:{to:"/"}},[t("el-dropdown-item",{attrs:{icon:"el-icon-s-home"}},[e._v("Dashboard")])],1),t("router-link",{attrs:{to:"/profile/index"}},[t("el-dropdown-item",{attrs:{icon:"el-icon-user"}},[e._v("User-Info")])],1),t("el-dropdown-item",{attrs:{icon:"el-icon-unlock"},nativeOn:{click:function(t){return e.logout.apply(null,arguments)}}},[e._v("Log Out")])],1)],1)],1)],1)},P=[],V=function(){var e=this,t=e._self._c;return t("el-breadcrumb",{attrs:{separator:"/"}},e._l(e.levelList,(function(n){return t("el-breadcrumb-item",{key:n.path},[n.path===e.$route.path||n.redirect===e.$route.path?t("span",{staticClass:"text"},[e._v(e._s(n.meta.title))]):t("a",{staticClass:"hyper",on:{click:function(t){return t.preventDefault(),e.handleClick(n)}}},[e._v(e._s(n.meta.title))])])})),1)},I=[],$={name:"Breadcrumb",data(){return{levelList:[]}},watch:{$route:{handler(){this.getBreadcrumb()},immediate:!0}},methods:{getBreadcrumb(){let e=this.$route.matched.filter(e=>e.meta&&e.meta.title);const t=e[0];t.path.startsWith("/dashboard")||(e=[{path:"/dashboard",meta:{title:"首页"}}].concat(e)),this.levelList=e},handleClick(e){if(e.path===this.$route.path||e.redirect===this.$route.path)return this.jump=!1,!1;this.jump=!0,this.$router.push(e.path)}}},D=$,U=(n("7760"),Object(w["a"])(D,V,I,!1,null,"7f74fbda",null)),F=U.exports,q=function(){var e=this,t=e._self._c;return t("div",[t("svg-icon",{attrs:{"icon-class":e.isFullscreen?"exit-fullscreen":"fullscreen"},on:{click:e.handleScreenFull}})],1)},G=[],K=n("93bf"),J=n.n(K),W={name:"Screenfull",data(){return{isFullscreen:!1}},mounted(){this.init()},beforeDestroy(){this.destrory()},methods:{handleScreenFull(){if(!J.a.enabled)return this.$message({message:"screenfull can not work on your browser",type:"error"}),!1;J.a.toggle()},change(){this.isFullscreen=J.a.isFullscreen},init(){J.a.enabled&&J.a.on("change",this.change)},destrory(){J.a.enabled&&J.a.off("change",this.change)}}},X=W,Y=Object(w["a"])(X,q,G,!1,null,"5a17dcd5",null),Q=Y.exports,Z=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{padding:"0 15px"},on:{click:e.toggleClick}},[t("svg",{staticClass:"hamburger",class:{"is-active":e.isActive},attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64"}},[t("path",{attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"}})])])},ee=[],te={name:"Hamburger",props:{isActive:{type:Boolean,default:!1}},methods:{toggleClick(){this.$emit("toggleClick")}}},ne=te,re=(n("8dd0"),Object(w["a"])(ne,Z,ee,!1,null,"49e15297",null)),ae=re.exports,oe={name:"Navbar",components:{Breadcrumb:F,Screenfull:Q,Hamburger:ae},computed:{...Object(T["b"])(["avatar","opened"])},methods:{toggleSideBar(){this.$store.dispatch("app/toggleSideBar")},async logout(){await this.$store.dispatch("user/logout"),this.$notify({type:"success",title:"退出成功",message:"请重新登陆"}),this.$router.push("/login?redirect="+this.$route.fullPath)}}},ce=oe,se=(n("6b62"),Object(w["a"])(ce,N,P,!1,null,"8cbfa6cc",null)),ie=se.exports,ue={name:"Layout",components:{Sidebar:M,AppMain:A,Navbar:ie},computed:{...Object(T["b"])(["opened"])}},le=ue,de=Object(w["a"])(le,s,i,!1,null,null,null),me=de.exports;o["default"].use(c["a"]);const he=[{path:"/login",component:()=>n.e("chunk-aeedd8fa").then(n.bind(null,"9ed6")),hidden:!0},{path:"/",component:me,redirect:"/dashboard",children:[{path:"/dashboard",name:"Dashboard",component:()=>n.e("chunk-2d0e5357").then(n.bind(null,"9406")),meta:{title:"首页",icon:"dashboard"}}]},{path:"/404",component:()=>n.e("chunk-2d0b6a9b").then(n.bind(null,"1db4")),hidden:!0},{path:"/tree",component:me,redirect:"/tree/tree1",meta:{title:"普通权限路由",icon:"tree"},children:[{path:"tree1",name:"Tree1",component:()=>n.e("chunk-2d0c73f1").then(n.bind(null,"5099")),meta:{title:"Tree 1"}},{path:"tree2",name:"Tree2",component:()=>n.e("chunk-2d0e88c0").then(n.bind(null,"8a78")),meta:{title:"Tree2"},redirect:"/tree/tree2/tree2-1",children:[{path:"tree2-1",name:"Tree2-1",component:()=>n.e("chunk-2d0a3e2c").then(n.bind(null,"03a4")),meta:{title:"Tree 2-1"}},{path:"tree2-2",name:"Tree2-2",component:()=>n.e("chunk-2d0af84e").then(n.bind(null,"0f57")),meta:{title:"Tree 2-2"}}]}]}],pe=[{path:"/user",component:me,redirect:"/user/table",meta:{role:"admin",title:"管理员权限路由",icon:"user"},children:[{path:"/user/table",name:"Table",component:()=>n.e("chunk-5e8de404").then(n.bind(null,"90fe")),meta:{title:"Table"}},{path:"/user/tab",name:"Tab",component:()=>n.e("chunk-7c0e9ee6").then(n.bind(null,"99ac")),meta:{title:"Tab"}}]},{path:"/profile",component:me,redirect:"/profile/index",hidden:!0,children:[{path:"index",component:()=>n.e("chunk-25ef4fa1").then(n.bind(null,"ecac")),name:"Profile",meta:{title:"Profile",icon:"user"}}]},{path:"*",redirect:"/404",hidden:!0}],fe=()=>new c["a"]({scrollBehavior:()=>({y:0}),routes:he}),be=fe();function ve(){const e=fe();be.matcher=e.matcher}const ge=c["a"].prototype.push;c["a"].prototype.push=function(e,t,n){return t||n?ge.call(this,e,t,n):ge.call(this,e).catch(e=>e)};t["c"]=be},a94d:function(e,t,n){"use strict";n("388e")},b20f:function(e,t,n){e.exports={sideBarWidth:"210px",navbarHeight:"60px",menuBg:"#284762",menuHover:"#263445",menuText:"#bfcbd9",menuActiveText:"#409eff",subMenuBg:"#1f2d3d",subMenuHover:"#001528",subMenuActiveText:"#f4f4f5"}},b278:function(e,t,n){},b3b5:function(e,t,n){"use strict";n.r(t);var r=n("e017"),a=n.n(r),o=n("21a1"),c=n.n(o),s=new a.a({id:"icon-user",use:"icon-user-usage",viewBox:"0 0 130 130",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 130" id="icon-user"><path d="M63.444 64.996c20.633 0 37.359-14.308 37.359-31.953 0-17.649-16.726-31.952-37.359-31.952-20.631 0-37.36 14.303-37.358 31.952 0 17.645 16.727 31.953 37.359 31.953zM80.57 75.65H49.434c-26.652 0-48.26 18.477-48.26 41.27v2.664c0 9.316 21.608 9.325 48.26 9.325H80.57c26.649 0 48.256-.344 48.256-9.325v-2.663c0-22.794-21.605-41.271-48.256-41.271z" stroke="#979797" /></symbol>'});c.a.add(s);t["default"]=s},b775:function(e,t,n){"use strict";n("d9e2");var r=n("cee4"),a=n("5c96"),o=n("4360"),c=n("5f87");const s=r["a"].create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/vue2-manage/"}).VUE_APP_BASE_API,timeout:5e3});s.interceptors.request.use(e=>(o["a"].getters.token&&(e.headers["X-Token"]=Object(c["a"])()),e),e=>(console.log(e),Promise.reject(e))),s.interceptors.response.use(e=>{const t=e.data;return 200!==t.code?(Object(a["Message"])({message:t.message||"Error",type:"error",duration:5e3}),403===t.code&&a["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then(()=>{o["a"].dispatch("user/resetToken").then(()=>{location.reload()})}),Promise.reject(new Error(t.message||"Error"))):t},e=>(console.log("err"+e),Object(a["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e))),t["a"]=s},bc1b:function(e,t,n){},c459:function(e,t,n){},c653:function(e,t,n){var r={"./app.js":"d9cd","./permission.js":"31c2","./user.js":"0f9a"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="c653"},d399:function(e,t,n){"use strict";n("3cf0")},d9cd:function(e,t,n){"use strict";n.r(t);var r=n("852e"),a=n.n(r);const o={opened:!a.a.get("sidebarStatus")||!!+a.a.get("sidebarStatus")},c={TOGGLE_SIDEBAR:e=>{e.opened=!e.opened,e.opened?a.a.set("sidebarStatus",1):a.a.set("sidebarStatus",0)}},s={toggleSideBar({commit:e}){e("TOGGLE_SIDEBAR")}};t["default"]={namespaced:!0,state:o,mutations:c,actions:s}},dbc7:function(e,t,n){"use strict";n.r(t);var r=n("e017"),a=n.n(r),o=n("21a1"),c=n.n(o),s=new a.a({id:"icon-exit-fullscreen",use:"icon-exit-fullscreen-usage",viewBox:"0 0 128 128",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="icon-exit-fullscreen"><path d="M49.217 41.329l-.136-35.24c-.06-2.715-2.302-4.345-5.022-4.405h-3.65c-2.712-.06-4.866 2.303-4.806 5.016l.152 19.164-24.151-23.79a6.698 6.698 0 0 0-9.499 0 6.76 6.76 0 0 0 0 9.526l23.93 23.713-18.345.074c-2.712-.069-5.228 1.813-5.64 5.02v3.462c.069 2.721 2.31 4.97 5.022 5.03l35.028-.207c.052.005.087.025.133.025l2.457.054a4.626 4.626 0 0 0 3.436-1.38c.88-.874 1.205-2.096 1.169-3.462l-.262-2.465c0-.048.182-.081.182-.136h.002zm52.523 51.212l18.32-.073c2.713.06 5.224-1.609 5.64-4.815v-3.462c-.068-2.722-2.317-4.97-5.021-5.04l-34.58.21c-.053 0-.086-.021-.138-.021l-2.451-.06a4.64 4.64 0 0 0-3.445 1.381c-.885.868-1.201 2.094-1.174 3.46l.27 2.46c.005.06-.177.095-.177.141l.141 34.697c.069 2.713 2.31 4.338 5.022 4.397l3.45.006c2.705.062 4.867-2.31 4.8-5.026l-.153-18.752 24.151 23.946a6.69 6.69 0 0 0 9.494 0 6.747 6.747 0 0 0 0-9.523L101.74 92.54v.001zM48.125 80.662a4.636 4.636 0 0 0-3.437-1.382l-2.457.06c-.05 0-.082.022-.137.022l-35.025-.21c-2.712.07-4.957 2.318-5.022 5.04v3.462c.409 3.206 2.925 4.874 5.633 4.814l18.554.06-24.132 23.928c-2.62 2.626-2.62 6.89 0 9.524a6.694 6.694 0 0 0 9.496 0l24.155-23.79-.155 18.866c-.06 2.722 2.094 5.093 4.801 5.025h3.65c2.72-.069 4.962-1.685 5.022-4.406l.141-34.956c0-.05-.182-.082-.182-.136l.262-2.46c.03-1.366-.286-2.592-1.166-3.46h-.001zM80.08 47.397a4.62 4.62 0 0 0 3.443 1.374l2.45-.054c.055 0 .088-.02.143-.028l35.08.21c2.712-.062 4.953-2.312 5.021-5.033l.009-3.463c-.417-3.211-2.937-5.084-5.64-5.025l-18.615-.073 23.917-23.715c2.63-2.623 2.63-6.879.008-9.513a6.691 6.691 0 0 0-9.494 0L92.251 26.016l.155-19.312c.065-2.713-2.097-5.085-4.802-5.025h-3.45c-2.713.069-4.954 1.693-5.022 4.406l-.139 35.247c0 .054.18.088.18.136l-.267 2.465c-.028 1.366.288 2.588 1.174 3.463v.001z" /></symbol>'});c.a.add(s);t["default"]=s},f333:function(e,t,n){"use strict";n("b278")},f782:function(e,t,n){"use strict";n.r(t);var r=n("e017"),a=n.n(r),o=n("21a1"),c=n.n(o),s=new a.a({id:"icon-dashboard",use:"icon-dashboard-usage",viewBox:"0 0 128 100",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 100" id="icon-dashboard"><path d="M27.429 63.638c0-2.508-.893-4.65-2.679-6.424-1.786-1.775-3.94-2.662-6.464-2.662-2.524 0-4.679.887-6.465 2.662-1.785 1.774-2.678 3.916-2.678 6.424 0 2.508.893 4.65 2.678 6.424 1.786 1.775 3.94 2.662 6.465 2.662 2.524 0 4.678-.887 6.464-2.662 1.786-1.775 2.679-3.916 2.679-6.424zm13.714-31.801c0-2.508-.893-4.65-2.679-6.424-1.785-1.775-3.94-2.662-6.464-2.662-2.524 0-4.679.887-6.464 2.662-1.786 1.774-2.679 3.916-2.679 6.424 0 2.508.893 4.65 2.679 6.424 1.785 1.774 3.94 2.662 6.464 2.662 2.524 0 4.679-.888 6.464-2.662 1.786-1.775 2.679-3.916 2.679-6.424zM71.714 65.98l7.215-27.116c.285-1.23.107-2.378-.536-3.443-.643-1.064-1.56-1.762-2.75-2.094-1.19-.33-2.333-.177-3.429.462-1.095.639-1.81 1.573-2.143 2.804l-7.214 27.116c-2.857.237-5.405 1.266-7.643 3.088-2.238 1.822-3.738 4.152-4.5 6.992-.952 3.644-.476 7.098 1.429 10.364 1.905 3.265 4.69 5.37 8.357 6.317 3.667.947 7.143.474 10.429-1.42 3.285-1.892 5.404-4.66 6.357-8.305.762-2.84.619-5.607-.429-8.305-1.047-2.697-2.762-4.85-5.143-6.46zm47.143-2.342c0-2.508-.893-4.65-2.678-6.424-1.786-1.775-3.94-2.662-6.465-2.662-2.524 0-4.678.887-6.464 2.662-1.786 1.774-2.679 3.916-2.679 6.424 0 2.508.893 4.65 2.679 6.424 1.786 1.775 3.94 2.662 6.464 2.662 2.524 0 4.679-.887 6.465-2.662 1.785-1.775 2.678-3.916 2.678-6.424zm-45.714-45.43c0-2.509-.893-4.65-2.679-6.425C68.68 10.01 66.524 9.122 64 9.122c-2.524 0-4.679.887-6.464 2.661-1.786 1.775-2.679 3.916-2.679 6.425 0 2.508.893 4.65 2.679 6.424 1.785 1.774 3.94 2.662 6.464 2.662 2.524 0 4.679-.888 6.464-2.662 1.786-1.775 2.679-3.916 2.679-6.424zm32 13.629c0-2.508-.893-4.65-2.679-6.424-1.785-1.775-3.94-2.662-6.464-2.662-2.524 0-4.679.887-6.464 2.662-1.786 1.774-2.679 3.916-2.679 6.424 0 2.508.893 4.65 2.679 6.424 1.785 1.774 3.94 2.662 6.464 2.662 2.524 0 4.679-.888 6.464-2.662 1.786-1.775 2.679-3.916 2.679-6.424zM128 63.638c0 12.351-3.357 23.78-10.071 34.286-.905 1.372-2.19 2.058-3.858 2.058H13.93c-1.667 0-2.953-.686-3.858-2.058C3.357 87.465 0 76.037 0 63.638c0-8.613 1.69-16.847 5.071-24.703C8.452 31.08 13 24.312 18.714 18.634c5.715-5.68 12.524-10.199 20.429-13.559C47.048 1.715 55.333.035 64 .035c8.667 0 16.952 1.68 24.857 5.04 7.905 3.36 14.714 7.88 20.429 13.559 5.714 5.678 10.262 12.446 13.643 20.301 3.38 7.856 5.071 16.09 5.071 24.703z" /></symbol>'});c.a.add(s);t["default"]=s}});