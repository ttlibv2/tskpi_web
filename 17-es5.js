!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var i=0;i<e.length;i++){var t=e[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"wik/":function(i,t,r){"use strict";r.r(t),r.d(t,"UserConfigModule",(function(){return S}));var s=r("2kYt"),o=r("Tu4v"),c=r("K8Gv"),a=r("EM62"),b=r("sEIs"),u=r("mybp"),l=r("duTG"),d=r("ZTwM"),p=r("1spV"),f=r("JbzU");function y(n,e){1&n&&a.Ob(0,"i",12),2&n&&a.jc("type","sync")("nzSpin",!0)}function v(n,e){1&n&&a.Ob(0,"i",13)}var h,m,k=[{path:"",component:(h=function(){function i(e,t){n(this,i),this.route=e,this.user=t,this.queryObj=void 0,this.isAsyncSave=!1,this.userObj=void 0,this.versionErr=!1}var t,r,s;return t=i,(r=[{key:"ngOnInit",value:function(){var n=this;Promise.resolve().then((function(e){n.queryObj=n.decodeQuery(),n.userObj=n.user.read()})).then((function(e){return n.checkVersion()}))}},{key:"checkVersion",value:function(){var n=this.userObj.config.apikey_version,e=this.queryObj.apikey_version||1;Object(c.k)(n)?this.userObj.config.apikey_version=e:n!==e&&(this.versionErr=!0,this.sharedCtrl.modal.warning({nzTitle:"Th\xf4ng b\xe1o !!",nzClosable:!1,nzCancelDisabled:!0,nzContent:'Vui l\xf2ng c\u1eadp nh\u1eadt [ApiKey] <a href="/assets/ApiKeyV2.rar">t\u1ea1i \u0111\xe2y</a> !!'}))}},{key:"decodeQuery",value:function(){try{return JSON.parse(decodeURIComponent(atob(this.route.snapshot.queryParams.key)))}catch(n){throw this.sharedCtrl.alert.error("X\u1ea3y ra l\u1ed7i l\u1ea5y th\xf4ng tin <b>[key]</b>"),n}}},{key:"onSaveUser",value:function(){var n=this;this.isAsyncSave=!0;var e=this.queryObj,i={cookie_value:"session_id="+e.session_id,csrf_token:e.csrf_token,config:{apikey_version:this.userObj.config.apikey_version},od_user:{id:e.uid,name:e.name,display_name:e.name,company_id:e.company_id,context:e.user_context,email:e.username,base_url:e["web.base.url"],session_id:e.session_id,csrf_token:e.csrf_token}};this.user.updateOne(this.userObj.id,i).subscribe((function(e){n.sharedCtrl.alert.success("C\u1eadp nh\u1eadt xong r\xf9i"),n.isAsyncSave=!1,n.userObj=n.userObj.assign(i),n.userObj.saveBy(n.user.shared)}),(function(e){n.sharedCtrl.alert.error("X\u1ea3y ra l\u1ed7i c\u1eadp nh\u1eadt > "+e.message),n.isAsyncSave=!1}))}},{key:"sharedCtrl",get:function(){return this.user.shared}}])&&e(t.prototype,r),s&&e(t,s),i}(),h.\u0275fac=function(n){return new(n||h)(a.Nb(b.a),a.Nb(o.a))},h.\u0275cmp=a.Hb({type:h,selectors:[["cy-user-config"]],decls:36,vars:6,consts:[[1,"row"],[1,"col-6","form-group"],["nz-input","","id","name",1,"form-control"],["nz-input","","id","token",1,"form-control"],["nz-input","","id","email",1,"form-control"],["nz-input","","id","csrf_token",1,"form-control"],["nz-input","","id","cookie_value",1,"form-control"],["nz-input","","id","od_user",1,"form-control"],[1,"col-12"],["nz-button","",1,"btn-primary",3,"disabled","click"],["nz-icon","",3,"type","nzSpin",4,"ngIf"],["nz-icon","","type","save",4,"ngIf"],["nz-icon","",3,"type","nzSpin"],["nz-icon","","type","save"]],template:function(n,e){1&n&&(a.Tb(0,"div"),a.Dc(1),a.ec(2,"json"),a.Sb(),a.Tb(3,"form"),a.Tb(4,"div",0),a.Tb(5,"div",1),a.Tb(6,"label"),a.Dc(7,"H\u1ecd v\xe0 T\xean: "),a.Sb(),a.Ob(8,"input",2),a.Sb(),a.Tb(9,"div",1),a.Tb(10,"label"),a.Dc(11,"M\xe3 ND: "),a.Sb(),a.Ob(12,"input",3),a.Sb(),a.Tb(13,"div",1),a.Tb(14,"label"),a.Dc(15,"E-mail: "),a.Sb(),a.Ob(16,"input",4),a.Sb(),a.Tb(17,"div",1),a.Tb(18,"label"),a.Dc(19,"csrf_token: "),a.Sb(),a.Ob(20,"input",5),a.Sb(),a.Tb(21,"div",1),a.Tb(22,"label"),a.Dc(23,"cookie_value: "),a.Sb(),a.Ob(24,"input",6),a.Sb(),a.Tb(25,"div",1),a.Tb(26,"label"),a.Dc(27,"Odoo User: "),a.Sb(),a.Ob(28,"input",7),a.Sb(),a.Sb(),a.Tb(29,"div",0),a.Tb(30,"div",8),a.Tb(31,"button",9),a.ac("click",(function(){return e.onSaveUser()})),a.Bc(32,y,1,2,"i",10),a.Bc(33,v,1,0,"i",11),a.Tb(34,"span"),a.Dc(35,"C\u1eadp nh\u1eadt"),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Sb()),2&n&&(a.zb(1),a.Ec(a.fc(2,4,e.queryObj)),a.zb(30),a.jc("disabled",e.isAsyncSave||e.versionErr),a.zb(1),a.jc("ngIf",e.isAsyncSave),a.zb(1),a.jc("ngIf",!e.isAsyncSave))},directives:[u.b,l.a,d.a,p.a,s.n,f.a],pipes:[s.h],styles:[".ts24-key[_ngcontent-%COMP%]   .ant-modal-body[_ngcontent-%COMP%]{padding:12px}"]}),h)}],S=((m=function e(){n(this,e)}).\u0275mod=a.Lb({type:m}),m.\u0275inj=a.Kb({factory:function(n){return new(n||m)},imports:[[s.b,b.g.forChild(k),l.c,u.e,f.b]]}),m)}}])}();