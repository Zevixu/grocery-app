(function(e){function t(t){for(var a,o,s=t[0],l=t[1],c=t[2],m=0,p=[];m<s.length;m++)o=s[m],i[o]&&p.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,s=1;s<r.length;s++){var l=r[s];0!==i[l]&&(a=!1)}a&&(n.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},i={app:0},n=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("c21b"),i=r.n(a);i.a},"463f":function(e,t,r){e.exports=r.p+"img/404.6b8ae1d0.gif"},"4ee4":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var a=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},n=[],o={name:"app",created:function(){},methods:{}},s=o,l=(r("034f"),r("2877")),c=Object(l["a"])(s,i,n,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,m=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"grocery_list"},[e._m(0),r("div",{staticClass:"table"},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"empty-text":"click button below to add your first item!","header-cell-style":{background:"#AACCC6"}}},[r("el-table-column",{staticStyle:{width:"20%"},attrs:{label:"Completed",prop:"Completed"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-checkbox",{on:{change:function(r){e.onClickItem(t.row)}},model:{value:t.row.Completed,callback:function(r){e.$set(t.row,"Completed",r)},expression:"scope.row.Completed"}})]}}])}),r("el-table-column",{staticStyle:{width:"20%"},attrs:{label:"Quantity",prop:"item_quantity"}}),r("el-table-column",{staticStyle:{width:"20%"},attrs:{label:"Item",prop:"item_name"}}),r("el-table-column",{staticStyle:{width:"20%"},attrs:{label:"Operation",prop:"operation"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"warning",icon:"edit",size:"small"},on:{click:function(r){e.onEditItem(t.row)}}},[e._v("Edit")]),r("el-button",{attrs:{type:"danger",icon:"delete",size:"small"},on:{click:function(r){e.onDeleteItem(t.row)}}},[e._v("Delete\n          ")])]}}])})],1)],1),r("div",{staticClass:"bottom"},[r("el-form",{ref:"add_data",attrs:{inline:!0}},[r("el-form-item",{staticClass:"add_button"},[r("el-button",{attrs:{type:"primary",size:"large",icon:"view"},on:{click:function(t){e.onAddItem()}}},[e._v("+add")])],1),r("el-form-item",{staticClass:"exit_button"},[r("el-button",{attrs:{type:"primary",size:"large",icon:"view"},on:{click:function(t){e.exit()}}},[e._v("log out")])],1)],1)],1),r("DialogFound",{attrs:{dialog_config:e.dialog_config,form:e.form},on:{update:e.getData}})],1)},d=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("h1",[e._v("Grocery List")])])}],f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"logFund"},[r("el-dialog",{attrs:{title:e.dialog_config.title,visible:e.dialog_config.show,"close-on-click-modal":!1,"close-on-press-escape":!1,"modal-append-to-body":!1},on:{"update:visible":function(t){e.$set(e.dialog_config,"show",t)}}},[r("div",{staticClass:"form"},[r("el-form",{ref:"form",staticStyle:{margin:"10px",width:"auto"},attrs:{model:e.form,rules:e.form_rules,"label-width":"120px"}},[r("el-form-item",{attrs:{prop:"item_quantity",label:"Quantity"}},[r("el-input",{attrs:{type:"item_quantity"},model:{value:e.form.item_quantity,callback:function(t){e.$set(e.form,"item_quantity",t)},expression:"form.item_quantity"}})],1),r("el-form-item",{attrs:{prop:"item_name",label:"Item"}},[r("el-input",{attrs:{type:"item_name"},model:{value:e.form.item_name,callback:function(t){e.$set(e.form,"item_name",t)},expression:"form.item_name"}})],1),r("el-form-item",{staticClass:"text_right"},[r("el-button",{on:{click:function(t){e.dialog_config.show=!1}}},[e._v("Cancel")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.onSubmit("form")}}},[e._v("Confirm")])],1)],1)],1)])],1)},g=[],b={name:"logfound",props:{dialog_config:Object,form:Object},data:function(){return{form_rules:{item_quantity:[{required:!0,message:"Can't be empty!",trigger:"blur"}],item_name:[{required:!0,message:"Can't be empty!",trigger:"blur"}]}}},methods:{onSubmit:function(e){var t=this;this.$refs[e].validate(function(e){if(e){var r="add"==t.dialog_config.var?"add/".concat(t.form.user_email):"edit/".concat(t.form.id);t.$axios.post("/api/items/".concat(r),t.form).then(function(){t.$message({message:"Change saved!",type:"success"}),t.dialog_config.show=!1,t.$emit("update")})}})}}},_=b,h=Object(l["a"])(_,f,g,!1,null,null,null);h.options.__file="DialogFound.vue";var v=h.exports,y={name:"index",data:function(){return{tableData:[],dialog_config:{show:!1,title:"",var:""},form:{item_name:"",item_quantity:"",id:"",user_email:""}}},created:function(){this.getData()},components:{DialogFound:v},methods:{getData:function(){var e=this;this.$axios.get("/api/items/".concat(localStorage.user_email)).then(function(t){e.tableData=t.data})},onEditItem:function(e){this.dialog_config={show:!0,title:"Edit an item",var:"edit"},this.form={item_name:e.item_name,item_quantity:e.item_quantity,id:e._id,user_email:""}},onDeleteItem:function(e){var t=this;this.$axios.delete("/api/items/delete/".concat(e._id)).then(function(){t.$message("delete success!"),t.getData()})},onAddItem:function(){this.dialog_config={show:!0,title:"Add an item",var:"add"},this.form={item_name:"",item_quantity:"",id:"",user_email:localStorage.user_email}},onClickItem:function(e){var t=this,r={Completed:!1};r.Completed=e.Completed,this.$axios.post("/api/items/edit/".concat(e._id),r).then(function(){1==r.Completed?t.$message("mark as purchased!"):t.$message("mark as unpurchased!")})},exit:function(){localStorage.removeItem("eleToken"),localStorage.removeItem("user_email"),this.$router.push("/login")}}},w=y,x=(r("dbea"),Object(l["a"])(w,p,d,!1,null,"58f7db4c",null));x.options.__file="Index.vue";var k=x.exports,C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register"},[r("section",{staticClass:"form_container"},[e._m(0),r("el-form",{ref:"registerForm",staticClass:"registerForm",attrs:{model:e.registerUser,rules:e.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"username",prop:"name"}},[r("el-input",{attrs:{placeholder:"enter your name"},model:{value:e.registerUser.name,callback:function(t){e.$set(e.registerUser,"name",t)},expression:"registerUser.name"}})],1),r("el-form-item",{attrs:{label:"email",prop:"email"}},[r("el-input",{attrs:{placeholder:"enter your email"},model:{value:e.registerUser.email,callback:function(t){e.$set(e.registerUser,"email",t)},expression:"registerUser.email"}})],1),r("el-form-item",{attrs:{label:"password",prop:"password"}},[r("el-input",{attrs:{placeholder:"enter your password",type:"password"},model:{value:e.registerUser.password,callback:function(t){e.$set(e.registerUser,"password",t)},expression:"registerUser.password"}})],1),r("el-form-item",{attrs:{label:"confirm password",prop:"password2"}},[r("el-input",{attrs:{placeholder:"enter password again",type:"password"},model:{value:e.registerUser.password2,callback:function(t){e.$set(e.registerUser,"password2",t)},expression:"registerUser.password2"}})],1),r("el-form-item",[r("el-button",{staticClass:"submit_btn",attrs:{type:"primary"},on:{click:function(t){e.submitForm("registerForm")}}},[e._v("register")])],1)],1)],1)])},$=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"manage_tip"},[r("span",{staticClass:"title"},[e._v("Grocery App")])])}],S={name:"register",data:function(){var e=this,t=function(t,r,a){r!==e.registerUser.password?a(new Error("password doesn't match!")):a()};return{registerUser:{name:"",email:"",password:"",password2:"",identity:""},rules:{name:[{required:!0,message:"username can't be empty",trigger:"change"},{min:2,max:30,message:"must be 2 to 30 characters",trigger:"blur"}],email:[{type:"email",required:!0,message:"wrong email format",trigger:"blur"}],password:[{required:!0,message:"password can't be empty",trigger:"blur"},{min:6,max:30,message:"must be 6 to 30 characters",trigger:"blur"}],password2:[{required:!0,message:"password can't be empty",trigger:"blur"},{min:6,max:30,message:"must be 6 to 30 characters",trigger:"blur"},{validator:t,trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.$message("error submit!"),!1;t.$axios.post("/api/users/register",t.registerUser).then(function(){t.$message({message:"register success!",type:"success"}),t.$router.push("/login")})})}}},U=S,j=(r("e8c0"),Object(l["a"])(U,C,$,!1,null,"3a23504b",null));j.options.__file="Register.vue";var q=j.exports,O=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"nofind"},[a("img",{attrs:{src:r("463f"),alt:""}})])}],I=(r("a321"),{}),D=Object(l["a"])(I,O,E,!1,null,"245c3bc2",null);D.options.__file="404.vue";var F=D.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[r("section",{staticClass:"form_container"},[e._m(0),r("el-form",{ref:"loginForm",staticClass:"loginForm",attrs:{model:e.loginUser,rules:e.rules,"label-width":"70px"}},[r("el-form-item",{attrs:{label:"email",prop:"email"}},[r("el-input",{attrs:{placeholder:"input your email here"},model:{value:e.loginUser.email,callback:function(t){e.$set(e.loginUser,"email",t)},expression:"loginUser.email"}})],1),r("el-form-item",{attrs:{label:"password",prop:"password"}},[r("el-input",{attrs:{placeholder:"input your password here",type:"password"},model:{value:e.loginUser.password,callback:function(t){e.$set(e.loginUser,"password",t)},expression:"loginUser.password"}})],1),r("el-form-item",[r("el-button",{staticClass:"submit_btn",attrs:{type:"primary"},on:{click:function(t){e.submitForm("loginForm")}}},[e._v("Sign in")])],1),r("div",{staticClass:"tiparea"},[r("p",[e._v("Don't have an account?"),r("router-link",{attrs:{to:"/register"}},[e._v("Register")])],1)])],1)],1)])},A=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"manage_tip"},[r("span",{staticClass:"title"},[e._v("Grocery App")])])}],P=(r("ac6a"),r("456d"),r("6bde")),M={name:"login",data:function(){return{loginUser:{email:"",password:""},rules:{email:[{type:"email",required:!0,message:"wrong email format!",trigger:"change"}],password:[{required:!0,message:"password can't be empty",trigger:"blur"},{min:6,max:30,message:"length must be between 6 to 30 characters",trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.$message("error submit!"),!1;t.$axios.post("/api/users/login",t.loginUser).then(function(e){var r=e.data,a=r.token,i=r.user_email;localStorage.setItem("eleToken",a),localStorage.setItem("user_email",i),t.$router.push("/index")})})},isEmpty:function(e){return void 0===e||null===e||"object"===Object(P["a"])(e)&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length}}},z=M,G=(r("95d9"),Object(l["a"])(z,T,A,!1,null,"5f8f380b",null));G.options.__file="Login.vue";var L=G.exports;a["default"].use(m["a"]);var J=new m["a"]({mode:"history",base:"/",routes:[{path:"*",name:"/404",component:F},{path:"/",redirect:"/index"},{path:"/register",name:"register",component:q},{path:"/login",name:"login",component:L},{path:"/index",name:"index",component:k}]});J.beforeEach(function(e,t,r){var a=!!localStorage.eleToken;"/login"==e.path||"/register"==e.path?r():a?r():r("/login")});var Q,R=J,B=r("5c96"),H=r.n(B),K=(r("0fae"),r("bc3a")),N=r.n(K);function V(){Q=B["Loading"].service({lock:!0,text:"加载中...",background:"rgba(0, 0, 0, 0.7)"})}function W(){Q.close()}N.a.interceptors.request.use(function(e){return V(),localStorage.eleToken&&(e.headers.Authorization=localStorage.eleToken),e},function(e){return Promise.reject(e)}),N.a.interceptors.response.use(function(e){return W(),e},function(e){W(),B["Message"].error(e.response.data);var t=e.response.status;return 401==t&&(B["Message"].error("The token value is invalid, please log in again!"),localStorage.removeItem("eleToken"),R.push("/login")),Promise.reject(e)});var X=N.a;a["default"].use(H.a),a["default"].prototype.$axios=X,a["default"].config.productionTip=!1,new a["default"]({router:R,render:function(e){return e(u)}}).$mount("#app")},"7ef2":function(e,t,r){},"95d9":function(e,t,r){"use strict";var a=r("7ef2"),i=r.n(a);i.a},a321:function(e,t,r){"use strict";var a=r("4ee4"),i=r.n(a);i.a},b94b:function(e,t,r){},c21b:function(e,t,r){},dbea:function(e,t,r){"use strict";var a=r("b94b"),i=r.n(a);i.a},e01e:function(e,t,r){},e8c0:function(e,t,r){"use strict";var a=r("e01e"),i=r.n(a);i.a}});
//# sourceMappingURL=app.2d5bbc1b.js.map