(function(t){function e(e){for(var d,c,a=e[0],s=e[1],i=e[2],l=0,b=[];l<a.length;l++)c=a[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&b.push(r[c][0]),r[c]=0;for(d in s)Object.prototype.hasOwnProperty.call(s,d)&&(t[d]=s[d]);o&&o(e);while(b.length)b.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],d=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(d=!1)}d&&(u.splice(e--,1),t=c(c.s=n[0]))}return t}var d={},r={app:0},u=[];function c(e){if(d[e])return d[e].exports;var n=d[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=d,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var d in t)c.d(n,d,function(e){return t[e]}.bind(null,d));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var i=0;i<a.length;i++)e(a[i]);var o=s;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0c2e":function(t,e,n){"use strict";n("9e92")},"12b6":function(t,e,n){},"18bd":function(t,e,n){"use strict";n("d0a5")},"46c9":function(t,e,n){},"509a":function(t,e,n){"use strict";n("12b6")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var d=n("7a23"),r={id:"app"},u=Object(d["d"])("h1",null,"Student Sign In",-1);function c(t,e,n,c,a,s){var i=Object(d["i"])("NewStudentForm"),o=Object(d["i"])("StudentTable"),l=Object(d["i"])("StudentMessage");return Object(d["e"])(),Object(d["c"])("div",r,[u,Object(d["d"])(i,{onStudentAdded:s.newStudentAdded},null,8,["onStudentAdded"]),Object(d["d"])(o,{students:a.students,onStudentPresent:s.studentArrivedOrLeft,onDeleteStudent:s.studentDeleted},null,8,["students","onStudentPresent","onDeleteStudent"]),Object(d["d"])(l,{student:a.mostRecentStudent},null,8,["student"])])}n("a15b");var a=Object(d["o"])("data-v-015888ab");Object(d["g"])("data-v-015888ab");var s={class:"alert alert-danger"},i={class:"card add-student m-2 p-2"},o=Object(d["d"])("h4",{class:"card-title"},"Add new student",-1),l={class:"form-group"},b=Object(d["d"])("label",{for:"name"},"Name",-1),f={class:"form-group"},j=Object(d["d"])("label",{for:"starID"},"Star ID",-1);Object(d["f"])();var p=a((function(t,e,n,r,u,c){return Object(d["e"])(),Object(d["c"])("div",null,[Object(d["n"])(Object(d["d"])("div",s,[(Object(d["e"])(!0),Object(d["c"])(d["a"],null,Object(d["h"])(u.errors,(function(t){return Object(d["e"])(),Object(d["c"])("li",{key:t},Object(d["j"])(t),1)})),128))],512),[[d["m"],u.errors.length>0]]),Object(d["d"])("div",i,[o,Object(d["d"])("div",l,[b,Object(d["n"])(Object(d["d"])("input",{id:"name",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=function(t){return u.newStudentName=t})},null,512),[[d["l"],u.newStudentName,void 0,{trim:!0}]])]),Object(d["d"])("div",f,[j,Object(d["n"])(Object(d["d"])("input",{id:"starID",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=function(t){return u.newStarID=t})},null,512),[[d["l"],u.newStarID,void 0,{trim:!0}]])]),Object(d["d"])("button",{class:"btn btn-primary",onClick:e[3]||(e[3]=function(){return c.addStudent&&c.addStudent.apply(c,arguments)})},"Add")])])})),O={name:"NewStudentForm",emits:["student-added"],data:function(){return{newStudentName:"",newStarID:"",errors:[]}},methods:{addStudent:function(){if(this.errors=[],this.newStudentName||this.errors.push("Student name is required"),this.newStarID||this.errors.push("StarID is required"),0==this.errors.length){var t={name:this.newStudentName,starID:this.newStarID,present:!1};this.$emit("student-added",t),this.newStudentName="",this.newStarID=""}}}};n("0c2e");O.render=p,O.__scopeId="data-v-015888ab";var h=O,m=(n("b0c0"),{class:"card student-list m-2 p-2"}),S=Object(d["d"])("h4",{class:"card-title"},"Students",-1),v={class:"edit-table-toggle form-check"},A=Object(d["d"])("label",{for:"edit-table",class:"form-check-label"},"Edit table?",-1),g={id:"student-table"},y={class:"table"},w=Object(d["d"])("th",null,"Name",-1),I=Object(d["d"])("th",null,"StarID",-1),M=Object(d["d"])("th",null,"Present?",-1);function k(t,e,n,r,u,c){var a=Object(d["i"])("StudentRow");return Object(d["e"])(),Object(d["c"])("div",null,[Object(d["d"])("div",m,[S,Object(d["d"])("div",v,[Object(d["n"])(Object(d["d"])("input",{id:"edit-table",type:"checkbox",class:"form-check-input","onUpdate:modelValue":e[1]||(e[1]=function(t){return u.editTable=t})},null,512),[[d["k"],u.editTable]]),A]),Object(d["d"])("div",g,[Object(d["d"])("table",y,[Object(d["d"])("tr",null,[w,I,M,Object(d["n"])(Object(d["d"])("th",null,"Delete",512),[[d["m"],u.editTable]])]),(Object(d["e"])(!0),Object(d["c"])(d["a"],null,Object(d["h"])(n.students,(function(t){return Object(d["e"])(),Object(d["c"])(a,{key:t.name,student:t,edit:u.editTable,onStudentArrivedOrLeft:c.arrivedOrLeft,onDeleteStudent:c.studentDeleted},null,8,["student","edit","onStudentArrivedOrLeft","onDeleteStudent"])})),128))])])])])}var D=n("ed3a"),x=n.n(D);function C(t,e,n,r,u,c){return Object(d["e"])(),Object(d["c"])("tr",{class:{present:n.student.present,absent:!n.student.present}},[Object(d["d"])("td",null,Object(d["j"])(n.student.name),1),Object(d["d"])("td",null,Object(d["j"])(n.student.starID),1),Object(d["d"])("td",null,[Object(d["d"])("input",{type:"checkbox",checked:n.student.present,onChange:e[1]||(e[1]=function(t){return c.arrivedOrLeft(n.student,t.target.checked)})},null,40,["checked"])]),Object(d["n"])(Object(d["d"])("td",null,[Object(d["d"])("img",{class:"delete-icon",onClick:e[2]||(e[2]=function(){return c.deleteStudent&&c.deleteStudent.apply(c,arguments)}),src:x.a})],512),[[d["m"],n.edit]])],2)}var U={name:"StudentRow",emits:["student-arrived-or-left","delete-student"],props:{student:Object,edit:Boolean},methods:{arrivedOrLeft:function(t,e){this.$emit("student-arrived-or-left",t,e)},deleteStudent:function(){confirm("Delete ".concat(this.student.name,"?"))&&this.$emit("delete-student",this.student)}}};n("18bd");U.render=C;var R=U,T={name:"StudentTable",components:{StudentRow:R},emits:["student-present","delete-student"],data:function(){return{editTable:!1}},props:{students:Array},methods:{arrivedOrLeft:function(t,e){this.$emit("student-present",t,e)},studentDeleted:function(t){this.$emit("delete-student",t)}}};n("509a");T.render=k;var N=T,P=Object(d["o"])("data-v-3da39674");Object(d["g"])("data-v-3da39674");var E={key:0,class:"alert alert-success"},F={key:1,class:"alert alert-info"};Object(d["f"])();var G=P((function(t,e,n,r,u,c){return Object(d["e"])(),Object(d["c"])("div",null,[Object(d["n"])(Object(d["d"])("div",null,[n.student.present?(Object(d["e"])(),Object(d["c"])("div",E," Welcome, "+Object(d["j"])(n.student.name)+"! ",1)):(Object(d["e"])(),Object(d["c"])("div",F," Goodbye, "+Object(d["j"])(n.student.name)+". See you later! ",1))],512),[[d["m"],n.student.name]])])})),L={name:"StudentMessage",props:{student:Object}};n("87fa");L.render=G,L.__scopeId="data-v-3da39674";var Q=L,J={name:"app",data:function(){return{students:[],mostRecentStudent:{}}},components:{NewStudentForm:h,StudentTable:N,StudentMessage:Q},mounted:function(){this.updateStudents()},methods:{updateStudents:function(){var t=this;this.$student_api.getAllStudents().then((function(e){t.students=e}))["catch"]((function(){return alert("Unable to fetch student list")}))},newStudentAdded:function(t){var e=this;this.$student_api.addStudent(t).then((function(){e.updateStudents()}))["catch"]((function(t){var e=t.response.data.join(",");alert("Error adding student\n"+e)}))},studentArrivedOrLeft:function(t,e){var n=this;t.present=e,this.$student_api.updateStudent(t).then((function(){n.mostRecentStudent=t,n.updateStudents()}))["catch"]((function(){return alert("Unable to update student")}))},studentDeleted:function(t){var e=this;this.$student_api.deleteStudent(t.id).then((function(){e.updateStudents(),e.mostRecentStudent={}}))["catch"]((function(){return alert("Unable to delete student")}))}}};n("6358");J.render=c;var K=J,B=n("bc3a"),Y=n.n(B),V="/api/students",W={getAllStudents:function(){return Y.a.get(V).then((function(t){return t.data}))},addStudent:function(t){return Y.a.post(V,t).then((function(t){return t.data}))},updateStudent:function(t){return Y.a.patch("".concat(V,"/").concat(t.id),t).then((function(t){return t.data}))},deleteStudent:function(t){return Y.a["delete"]("".concat(V,"/").concat(t)).then((function(t){return t.data}))}},Z=Object(d["b"])(K);Z.config.globalProperties.$student_api=W,Z.mount("#app")},6358:function(t,e,n){"use strict";n("46c9")},"87fa":function(t,e,n){"use strict";n("b900")},"9e92":function(t,e,n){},b900:function(t,e,n){},d0a5:function(t,e,n){},ed3a:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAM2SURBVGhD7ZnLbtNAFIYjbgt23FbAC7BCSmYIUqWIcalYsCTitoMtrItgwQKJdE0rlcsjoCJVFCQeAygPAJQNAVTiJCqgZjhneiyF5Iztie1JkfxLnxTLM+f8x554xuNKqVKlsks3m3t7s7LeVfIusNINxAfgRxjI3wj+7gZy3ZyDNthW36/soe7TU3+udhIMLoRKfAGD2oUwEBvYt9eQJyicP3Ua1aOhkk+BX5w5FzAGFLKMMSl8sYIrd62rxHfOTEbaGJvS5C/dPHUArtQzJnGuQBGPdbW6n9LmI32xehDMv+YSFgEU8QpzUvpsoivvzXwEFLGay53wMWxs4HAiG5MJAlznAvskDGqXyY6bOhdOH4NJ5xsX1DPtn4E4QrbSC28fE2xKiCWylU5mhnWZpM7Xdf/2Tf4cg2kLfbhzHOilp+rHyV6y4I+7wAViASN/3qxpvb2ttx7c49sMgW2wLfZxLKJF9uKFiywYPhtckDEi85ESiojMR3IpAgr4lGoB2A/EWS4AR//WjX8MGVmKGDVvBMcYY7StjZ6qSrJpl1kSM51t2IwNF5GmTSpmxR2yaReM/xds5xjiDOZm3iCek027oOH6eMdkWKMDOB4M6IA0sXlAyfdk0y56e+IDJMAWMaws5hGYWMmmXU7PfwZTBF75UcGdyGQeQG9k0658ChgZNigoyksB//0Qwj8K2zkB1jzeidHhlKUIJd6RTbuggBW2cwyseTIad46LFU+ax+hunsiUmCebdpkNKq4zg/elRFATZNMuWsx95gKMsRsXcyho3OKCsERFJJiPiIpwMY+ESjwke8nC7T6n+QCMFPxCs+X0QoOCRd0yF2w6iEWylV74Io0TBx/QI0p+3ZyrHyZbbgrPyatsUI/A8GmSnckEf54nXGAvKPmIbEyuna1FscomKBDMiR9OyEY2mc1dJda4REUAw+Zlbpu7kXCj1c9ml1jUjcY+Spu/QnXmCiRqjyfOTLuj5CVKU6zMIzYQS06TnQWcpPCqb87MHKLw/kQzdgv4yJmLA/vg8sB5hi1CuMjCTSfct8E1O7544Hc0vEPIzjc18ZbOzeOqMvXCrFSpUjGqVP4C/xYkeiCFjZAAAAAASUVORK5CYII="}});
//# sourceMappingURL=app.48f6e331.js.map