(function(e){function t(t){for(var r,n,l=t[0],s=t[1],c=t[2],m=0,d=[];m<l.length;m++)n=l[m],o[n]&&d.push(o[n][0]),o[n]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,l=1;l<a.length;l++){var s=a[l];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=n(n.s=a[0]))}return e}var r={},o={app:0},i=[];function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("c21b"),o=a.n(r);o.a},"463f":function(e,t,a){e.exports=a.p+"img/404.6b8ae1d0.gif"},"4ee4":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var r=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],n={name:"app",created:function(){},methods:{}},l=n,s=(a("034f"),a("2877")),c=Object(s["a"])(l,o,i,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,m=a("8c4f"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"grocery_list"},[e._m(0),a("div",{staticClass:"selection"},[a("span",[e._v("Current List: ")]),a("el-select",{attrs:{placeholder:"Select"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value,disabled:e.disabled}})}))],1),a("div",{staticClass:"table"},["Meat"===e.type?a("div",[a("listA",{attrs:{tableData:e.tableDataforMeat,type:e.type},on:{update_dialog_config:e.update_dialog_config,update_form:e.update_form,update1:e.getData}})],1):"Vegetable&Fruit"===e.type?a("div",[a("listB",{attrs:{tableData:e.tableDataforVF,type:e.type},on:{update_dialog_config:e.update_dialog_config,update_form:e.update_form,update1:e.getData}})],1):"Dairy"===e.type?a("div",[a("listC",{attrs:{tableData:e.tableDataforDairy,type:e.type},on:{update_dialog_config:e.update_dialog_config,update_form:e.update_form,update1:e.getData}})],1):"Other"===e.type?a("div",[a("listD",{attrs:{tableData:e.tableDataforOther,type:e.type},on:{update_dialog_config:e.update_dialog_config,update_form:e.update_form,update1:e.getData}})],1):e._e()]),a("div",{staticClass:"bottom"},[a("el-form",{ref:"add_data",attrs:{inline:!0}},[a("el-form-item",{staticClass:"add_button"},[a("el-button",{attrs:{type:"primary",size:"large",icon:"view"},on:{click:function(t){e.onAddItem()}}},[e._v("+add")])],1),a("el-form-item",{staticClass:"exit_button"},[a("el-button",{attrs:{type:"primary",size:"large",icon:"view"},on:{click:function(t){e.exit()}}},[e._v("log out")])],1)],1)],1),a("DialogFound",{attrs:{dialog_config:e.dialog_config,form:e.form},on:{update2:e.getData}})],1)},p=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("h1",[e._v("Grocery List")])])}],f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"logFund"},[a("el-dialog",{attrs:{title:e.dialog_config.title,visible:e.dialog_config.show,"close-on-click-modal":!1,"close-on-press-escape":!1,"modal-append-to-body":!1},on:{"update:visible":function(t){e.$set(e.dialog_config,"show",t)}}},[a("div",{staticClass:"form"},[a("el-form",{ref:"form",staticStyle:{margin:"10px",width:"auto"},attrs:{model:e.form,rules:e.form_rules,"label-width":"120px"}},[a("el-form-item",{attrs:{prop:"item_quantity",label:"Quantity"}},[a("el-input",{attrs:{type:"item_quantity"},model:{value:e.form.item_quantity,callback:function(t){e.$set(e.form,"item_quantity",t)},expression:"form.item_quantity"}})],1),a("el-form-item",{attrs:{prop:"item_name",label:"Item"}},[a("el-input",{attrs:{type:"item_name"},model:{value:e.form.item_name,callback:function(t){e.$set(e.form,"item_name",t)},expression:"form.item_name"}})],1),a("el-form-item",{staticClass:"text_right"},[a("el-button",{on:{click:function(t){e.dialog_config.show=!1}}},[e._v("Cancel")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.onSubmit("form")}}},[e._v("Confirm")])],1)],1)],1)])],1)},g=[],b={name:"logfound",props:{dialog_config:Object,form:Object},data:function(){return{form_rules:{item_quantity:[{required:!0,message:"Can't be empty!",trigger:"blur"}],item_name:[{required:!0,message:"Can't be empty!",trigger:"blur"}]}}},methods:{onSubmit:function(e){var t=this;this.$refs[e].validate(function(e){if(e){var a="add"==t.dialog_config.var?"add/".concat(t.form.user_email):"edit/".concat(t.form.id);t.$axios.post("/api/items/".concat(a),t.form).then(function(){t.$message({message:"Change saved!",type:"success"}),t.dialog_config.show=!1,t.$emit("update2")})}})}}},_=b,y=Object(s["a"])(_,f,g,!1,null,null,null);y.options.__file="DialogFound.vue";var h=y.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"listA"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"empty-text":"click button below to add your first item!","header-cell-style":{background:"#AACCC6"}}},[a("el-table-column",{staticStyle:{width:"20%"},attrs:{label:"Completed",prop:"Completed"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-checkbox",{on:{change:function(a){e.onClickItem(t.row)}},model:{value:t.row.Completed,callback:function(a){e.$set(t.row,"Completed",a)},expression:"scope.row.Completed"}})]}}])}),a("el-table-column",{staticStyle:{width:"20%"},attrs:{label:"Quantity",prop:"item_quantity"}}),a("el-table-column",{staticStyle:{width:"20%"},attrs:{label:"Item",prop:"item_name"}}),a("el-table-column",{staticStyle:{width:"20%"},attrs:{label:"Operation",prop:"operation"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"warning",icon:"edit",size:"small"},on:{click:function(a){e.onEditItem(t.row)}}},[e._v("Edit")]),a("el-button",{attrs:{type:"danger",icon:"delete",size:"small"},on:{click:function(a){e.onDeleteItem(t.row)}}},[e._v("Delete\n        ")])]}}])})],1)],1)},w=[];function C(e){var t={show:!0,title:"Edit an item",var:"edit"};this.$emit("update_dialog_config",t);var a={item_name:e.item_name,item_quantity:e.item_quantity,category:this.type,id:e._id,user_email:""};this.$emit("update_form",a)}function k(e){var t=this;this.$axios.delete("/api/items/delete/".concat(e._id)).then(function(){t.$message("delete success!"),t.$emit("update1")})}function x(e){var t=this,a={Completed:!1};a.Completed=e.Completed,this.$axios.post("/api/items/edit/".concat(e._id),a).then(function(){1==a.Completed?t.$message("mark as purchased!"):t.$message("mark as unpurchased!")})}var D={name:"listA",props:{dialog_config:Object,form:Object,tableData:Array,type:String},data:function(){return{}},methods:{onEditItem:C,onDeleteItem:k,onClickItem:x}},$=D,S=Object(s["a"])($,v,w,!1,null,null,null);S.options.__file="ListA.vue";var O=S.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"listB"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"empty-text":"click button below to add your first item!","header-cell-style":{background:"#AACCC6"}}},[a("el-table-column",{staticStyle:{width:"20%"},attrs:{label:"Completed",prop:"Completed"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-checkbox",{on:{change:function(a){e.onClickItem(t.row)}},model:{value:t.row.Completed,callback:function(a){e.$set(t.row,"Completed",a)},expression:"scope.row.Completed"}})]}}])}),a("el-table-column",{staticStyle:{width:"20%"},attrs:{label:"Quantity",prop:"item_quantity"}}),a("el-table-column",{staticStyle:{width:"20%"},attrs:{label:"Item",prop:"item_name"}}),a("el-table-column",{staticStyle:{width:"20%"},attrs:{label:"Operation",prop:"operation"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"warning",icon:"edit",size:"small"},on:{click:function(a){e.onEditItem(t.row)}}},[e._v("Edit")]),a("el-button",{attrs:{type:"danger",icon:"delete",size:"small"},on:{click:function(a){e.onDeleteItem(t.row)}}},[e._v("Delete\n        ")])]}}])})],1)],1)},j=[],E={name:"listB",props:{dialog_config:Object,form:Object,tableData:Array,type:String},data:function(){return{}},methods:{onEditItem:C,onDeleteItem:k,onClickItem:x}},U=E,A=Object(s["a"])(U,I,j,!1,null,null,null);A.options.__file="ListB.vue";var q=A.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"listC"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"empty-text":"click button below to add your first item!","header-cell-style":{background:"#AACCC6"}}},[a("el-table-column",{staticStyle:{width:"20%"},attrs:{label:"Completed",prop:"Completed"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-checkbox",{on:{change:function(a){e.onClickItem(t.row)}},model:{value:t.row.Completed,callback:function(a){e.$set(t.row,"Completed",a)},expression:"scope.row.Completed"}})]}}])}),a("el-table-column",{staticStyle:{width:"20%"},attrs:{label:"Quantity",prop:"item_quantity"}}),a("el-table-column",{staticStyle:{width:"20%"},attrs:{label:"Item",prop:"item_name"}}),a("el-table-column",{staticStyle:{width:"20%"},attrs:{label:"Operation",prop:"operation"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"warning",icon:"edit",size:"small"},on:{click:function(a){e.onEditItem(t.row)}}},[e._v("Edit")]),a("el-button",{attrs:{type:"danger",icon:"delete",size:"small"},on:{click:function(a){e.onDeleteItem(t.row)}}},[e._v("Delete\n        ")])]}}])})],1)],1)},M=[],z={name:"listC",props:{dialog_config:Object,form:Object,tableData:Array,type:String},data:function(){return{}},methods:{onEditItem:C,onDeleteItem:k,onClickItem:x}},T=z,L=Object(s["a"])(T,F,M,!1,null,null,null);L.options.__file="ListC.vue";var P=L.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"listD"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"empty-text":"click button below to add your first item!","header-cell-style":{background:"#AACCC6"}}},[a("el-table-column",{staticStyle:{width:"20%"},attrs:{label:"Completed",prop:"Completed"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-checkbox",{on:{change:function(a){e.onClickItem(t.row)}},model:{value:t.row.Completed,callback:function(a){e.$set(t.row,"Completed",a)},expression:"scope.row.Completed"}})]}}])}),a("el-table-column",{staticStyle:{width:"20%"},attrs:{label:"Quantity",prop:"item_quantity"}}),a("el-table-column",{staticStyle:{width:"20%"},attrs:{label:"Item",prop:"item_name"}}),a("el-table-column",{staticStyle:{width:"20%"},attrs:{label:"Operation",prop:"operation"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"warning",icon:"edit",size:"small"},on:{click:function(a){e.onEditItem(t.row)}}},[e._v("Edit")]),a("el-button",{attrs:{type:"danger",icon:"delete",size:"small"},on:{click:function(a){e.onDeleteItem(t.row)}}},[e._v("Delete\n        ")])]}}])})],1)],1)},B=[],Q={name:"listD",props:{dialog_config:Object,form:Object,tableData:Array,type:String},data:function(){return{}},methods:{onEditItem:C,onDeleteItem:k,onClickItem:x}},G=Q,J=Object(s["a"])(G,V,B,!1,null,null,null);J.options.__file="ListD.vue";var R=J.exports,H={name:"index",data:function(){return{tableDataforMeat:[],tableDataforVF:[],tableDataforDairy:[],tableDataforOther:[],dialog_config:{show:!1,title:"",var:""},form:{item_name:"",item_quantity:"",category:"",id:"",user_email:""},options:[{value:"Meat",label:"Meat"},{value:"Vegetable&Fruit",label:"Vegetable&Fruit"},{value:"Dairy",label:"Dairy"},{value:"Other",label:"Other"}],type:"Meat"}},created:function(){this.getData()},components:{DialogFound:h,listA:O,listB:q,listC:P,listD:R},methods:{getData:function(){var e=this;this.$axios.get("/api/items/".concat(localStorage.user_email)).then(function(t){var a=t.data;e.tableDataforMeat=a.filter(function(e){return"Meat"===e.category}),e.tableDataforVF=a.filter(function(e){return"Vegetable&Fruit"===e.category}),e.tableDataforDairy=a.filter(function(e){return"Dairy"===e.category}),e.tableDataforOther=a.filter(function(e){return"Other"===e.category})})},onAddItem:function(){this.dialog_config={show:!0,title:"Add an item",var:"add"},this.form={item_name:"",item_quantity:"",category:this.type,id:"",user_email:localStorage.user_email}},exit:function(){localStorage.removeItem("eleToken"),localStorage.removeItem("user_email"),this.$router.push("/login")},update_dialog_config:function(e){this.dialog_config=e},update_form:function(e){this.form=e}}},K=H,N=(a("cb3e"),Object(s["a"])(K,d,p,!1,null,"4eeab4f0",null));N.options.__file="Index.vue";var W=N.exports,X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"register"},[a("section",{staticClass:"form_container"},[e._m(0),a("el-form",{ref:"registerForm",staticClass:"registerForm",attrs:{model:e.registerUser,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"username",prop:"name"}},[a("el-input",{attrs:{placeholder:"enter your name"},model:{value:e.registerUser.name,callback:function(t){e.$set(e.registerUser,"name",t)},expression:"registerUser.name"}})],1),a("el-form-item",{attrs:{label:"email",prop:"email"}},[a("el-input",{attrs:{placeholder:"enter your email"},model:{value:e.registerUser.email,callback:function(t){e.$set(e.registerUser,"email",t)},expression:"registerUser.email"}})],1),a("el-form-item",{attrs:{label:"password",prop:"password"}},[a("el-input",{attrs:{placeholder:"enter your password",type:"password"},model:{value:e.registerUser.password,callback:function(t){e.$set(e.registerUser,"password",t)},expression:"registerUser.password"}})],1),a("el-form-item",{attrs:{label:"confirm password",prop:"password2"}},[a("el-input",{attrs:{placeholder:"enter password again",type:"password"},model:{value:e.registerUser.password2,callback:function(t){e.$set(e.registerUser,"password2",t)},expression:"registerUser.password2"}})],1),a("el-form-item",[a("el-button",{staticClass:"submit_btn",attrs:{type:"primary"},on:{click:function(t){e.submitForm("registerForm")}}},[e._v("register")])],1)],1)],1)])},Y=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"manage_tip"},[a("span",{staticClass:"title"},[e._v("Grocery App")])])}],Z={name:"register",data:function(){var e=this,t=function(t,a,r){a!==e.registerUser.password?r(new Error("password doesn't match!")):r()};return{registerUser:{name:"",email:"",password:"",password2:"",identity:""},rules:{name:[{required:!0,message:"username can't be empty",trigger:"change"},{min:2,max:30,message:"must be 2 to 30 characters",trigger:"blur"}],email:[{type:"email",required:!0,message:"wrong email format",trigger:"blur"}],password:[{required:!0,message:"password can't be empty",trigger:"blur"},{min:6,max:30,message:"must be 6 to 30 characters",trigger:"blur"}],password2:[{required:!0,message:"password can't be empty",trigger:"blur"},{min:6,max:30,message:"must be 6 to 30 characters",trigger:"blur"},{validator:t,trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.$message("error submit!"),!1;t.$axios.post("/api/users/register",t.registerUser).then(function(){t.$message({message:"register success!",type:"success"}),t.$router.push("/login")})})}}},ee=Z,te=(a("e8c0"),Object(s["a"])(ee,X,Y,!1,null,"3a23504b",null));te.options.__file="Register.vue";var ae=te.exports,re=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},oe=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"nofind"},[r("img",{attrs:{src:a("463f"),alt:""}})])}],ie=(a("a321"),{}),ne=Object(s["a"])(ie,re,oe,!1,null,"245c3bc2",null);ne.options.__file="404.vue";var le=ne.exports,se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login"},[a("section",{staticClass:"form_container"},[e._m(0),a("el-form",{ref:"loginForm",staticClass:"loginForm",attrs:{model:e.loginUser,rules:e.rules,"label-width":"70px"}},[a("el-form-item",{attrs:{label:"email",prop:"email"}},[a("el-input",{attrs:{placeholder:"input your email here"},model:{value:e.loginUser.email,callback:function(t){e.$set(e.loginUser,"email",t)},expression:"loginUser.email"}})],1),a("el-form-item",{attrs:{label:"password",prop:"password"}},[a("el-input",{attrs:{placeholder:"input your password here",type:"password"},model:{value:e.loginUser.password,callback:function(t){e.$set(e.loginUser,"password",t)},expression:"loginUser.password"}})],1),a("el-form-item",[a("el-button",{staticClass:"submit_btn",attrs:{type:"primary"},on:{click:function(t){e.submitForm("loginForm")}}},[e._v("Sign in")])],1),a("div",{staticClass:"tiparea"},[a("p",[e._v("Don't have an account?"),a("router-link",{attrs:{to:"/register"}},[e._v("Register")])],1)])],1)],1)])},ce=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"manage_tip"},[a("span",{staticClass:"title"},[e._v("Grocery App")])])}],ue=(a("ac6a"),a("456d"),a("6bde")),me={name:"login",data:function(){return{loginUser:{email:"",password:""},rules:{email:[{type:"email",required:!0,message:"wrong email format!",trigger:"change"}],password:[{required:!0,message:"password can't be empty",trigger:"blur"},{min:6,max:30,message:"length must be between 6 to 30 characters",trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.$message("error submit!"),!1;t.$axios.post("/api/users/login",t.loginUser).then(function(e){var a=e.data,r=a.token,o=a.user_email;localStorage.setItem("eleToken",r),localStorage.setItem("user_email",o),t.$router.push("/index")})})},isEmpty:function(e){return void 0===e||null===e||"object"===Object(ue["a"])(e)&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length}}},de=me,pe=(a("95d9"),Object(s["a"])(de,se,ce,!1,null,"5f8f380b",null));pe.options.__file="Login.vue";var fe=pe.exports;r["default"].use(m["a"]);var ge,be=new m["a"]({mode:"history",base:"/",routes:[{path:"*",name:"/404",component:le},{path:"/",redirect:"/index"},{path:"/register",name:"register",component:ae},{path:"/login",name:"login",component:fe},{path:"/index",name:"index",component:W}]}),_e=be,ye=a("5c96"),he=a.n(ye),ve=(a("0fae"),a("bc3a")),we=a.n(ve);function Ce(){ge=ye["Loading"].service({lock:!0,text:"加载中...",background:"rgba(0, 0, 0, 0.7)"})}function ke(){ge.close()}we.a.interceptors.request.use(function(e){return Ce(),localStorage.eleToken&&(e.headers.Authorization=localStorage.eleToken),e},function(e){return Promise.reject(e)}),we.a.interceptors.response.use(function(e){return ke(),e},function(e){ke(),ye["Message"].error(e.response.data);var t=e.response.status;return 401==t&&(ye["Message"].error("The token value is invalid, please log in again!"),localStorage.removeItem("eleToken"),_e.push("/login")),Promise.reject(e)});var xe=we.a;r["default"].use(he.a),r["default"].prototype.$axios=xe,r["default"].config.productionTip=!1,new r["default"]({router:_e,render:function(e){return e(u)}}).$mount("#app")},"58ad":function(e,t,a){},"7ef2":function(e,t,a){},"95d9":function(e,t,a){"use strict";var r=a("7ef2"),o=a.n(r);o.a},a321:function(e,t,a){"use strict";var r=a("4ee4"),o=a.n(r);o.a},c21b:function(e,t,a){},cb3e:function(e,t,a){"use strict";var r=a("58ad"),o=a.n(r);o.a},e01e:function(e,t,a){},e8c0:function(e,t,a){"use strict";var r=a("e01e"),o=a.n(r);o.a}});
//# sourceMappingURL=app.ff10de51.js.map