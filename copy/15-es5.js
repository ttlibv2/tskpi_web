!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{OHUZ:function(o,i,e){"use strict";e.r(i),e.d(i,"SignupModule",(function(){return C}));var r=e("2kYt"),a=e("nIj0"),c=e("Tu4v"),b=e("K8Gv"),s=e("8j5Y"),u=e("EM62"),p=e("sEIs"),l=e("U6NZ"),f=e("5VY1"),g=e("mybp"),m=e("1spV"),d=e("duTG"),h=e("ZTwM"),T=e("JbzU");function y(n,t){1&n&&u.Ob(0,"i",17)}function z(n,t){1&n&&u.Ob(0,"i",18),2&n&&u.jc("nzType","sync")("nzSpin",!0)}var S,v,k=((S=function(){function o(t,i,e,r,a,c){n(this,o),this.router=t,this.aRouter=i,this.user=e,this.nzModal=r,this.alert=a,this.fb=c,this.isAsyncLogin=!1}var i,e,c;return i=o,(e=[{key:"ngOnInit",value:function(){var n=this;this.aRouter.queryParamMap.pipe(Object(s.a)((function(t){t.get("pass")!==n.getPassAdmin()&&n.nzModal.error({nzTitle:"C\u1ea3nh b\xe1o",nzContent:"Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u truy c\u1eadp.",nzOkText:"Oki",nzOnOk:function(){return"oki"},nzClosable:!1,nzCancelDisabled:!0}).afterClose.subscribe((function(t){n.router.navigate(["/","login"])}))}))).subscribe((function(t){n.form=n.fb.group({name:[void 0,a.s.required],email:[void 0,a.s.required],token:[void 0,a.s.required],pwd_ts24:[void 0,a.s.required]})}))}},{key:"getPassAdmin",value:function(){return"@".concat(new r.d("en-US").transform(new Date,"yyyyMMdd"),"!p@ssW0rd")}},{key:"onSignUp",value:function(){var n=this;if(this.form.invalid)this.alert.warning("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin.");else{this.isAsyncLogin=!0;var t=this.form.getRawValue(),o=Object.assign(Object.assign({},t),{pwd_sys:t.token});this.user.createUser(o).subscribe((function(){n.alert.success("T\u1ea1o t\xe0i kho\u1ea3n th\xe0nh c\xf4ng. <b>M\u1eadt kh\u1ea9u l\xe0: ".concat(t.token,"</b>")),n.router.navigate(["/","tickets"],{queryParams:{set_default:1}}),n.isAsyncLogin=!1}),(function(t){b.f.log("onSignUp()",t),n.isAsyncLogin=!1}))}}}])&&t(i.prototype,e),c&&t(i,c),o}()).\u0275fac=function(n){return new(n||S)(u.Nb(p.d),u.Nb(p.a),u.Nb(c.a),u.Nb(l.c),u.Nb(f.b),u.Nb(a.e))},S.\u0275cmp=u.Hb({type:S,selectors:[["app-signup"]],decls:43,vars:5,consts:[[1,"signup-form",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-12","form-group"],["for","name"],[1,"required"],["nz-input","","placeholder","Nh\u1eadp h\u1ecd v\xe0 t\xean","id","name","formControlName","name",1,"form-control"],["for","email"],["nz-input","","placeholder","Nh\u1eadp e-mail","id","email","formControlName","email",1,"form-control"],["for","token"],["nz-input","","placeholder","Nh\u1eadp m\xe3 -> vd: NQNGOC","id","token","formControlName","token",1,"form-control"],["for","pwd_ts24"],["nz-input","","type","password","placeholder","Nh\u1eadp m\u1eadt kh\u1ea9u TS24","id","pwd_ts24","formControlName","pwd_ts24",1,"form-control"],[1,"col-12"],["nz-button","",1,"btnLogin",3,"nzType","disabled"],["nz-icon","","nzType","login","theme","outline",4,"ngIf"],["nz-icon","",3,"nzType","nzSpin",4,"ngIf"],["nz-checkbox","","formControlName","remember",1,"float-right"],["nz-icon","","nzType","login","theme","outline"],["nz-icon","",3,"nzType","nzSpin"]],template:function(n,t){1&n&&(u.Tb(0,"form",0),u.ac("ngSubmit",(function(){return t.onSignUp()})),u.Tb(1,"div",1),u.Tb(2,"div",2),u.Tb(3,"label",3),u.Dc(4,"H\u1ecd v\xe0 T\xean "),u.Tb(5,"span",4),u.Dc(6,"(*)"),u.Sb(),u.Dc(7,": "),u.Sb(),u.Tb(8,"nz-input-group"),u.Ob(9,"input",5),u.Sb(),u.Sb(),u.Tb(10,"div",2),u.Tb(11,"label",6),u.Dc(12,"E-mail"),u.Tb(13,"span",4),u.Dc(14,"(*)"),u.Sb(),u.Dc(15,": "),u.Sb(),u.Tb(16,"nz-input-group"),u.Ob(17,"input",7),u.Sb(),u.Sb(),u.Tb(18,"div",2),u.Tb(19,"label",8),u.Dc(20,"Token"),u.Tb(21,"span",4),u.Dc(22,"(*)"),u.Sb(),u.Dc(23,": "),u.Sb(),u.Tb(24,"nz-input-group"),u.Ob(25,"input",9),u.Sb(),u.Sb(),u.Tb(26,"div",2),u.Tb(27,"label",10),u.Dc(28,"MK TS24"),u.Tb(29,"span",4),u.Dc(30,"(*)"),u.Sb(),u.Dc(31,": "),u.Sb(),u.Tb(32,"nz-input-group"),u.Ob(33,"input",11),u.Sb(),u.Sb(),u.Sb(),u.Tb(34,"div",1),u.Tb(35,"div",12),u.Tb(36,"button",13),u.Bc(37,y,1,0,"i",14),u.Bc(38,z,1,2,"i",15),u.Tb(39,"span"),u.Dc(40,"\u0110\u0103ng k\xfd"),u.Sb(),u.Sb(),u.Tb(41,"label",16),u.Dc(42,"Ghi nh\u1edb"),u.Sb(),u.Sb(),u.Sb(),u.Sb()),2&n&&(u.jc("formGroup",t.form),u.zb(36),u.jc("nzType","primary")("disabled",t.isAsyncLogin),u.zb(1),u.jc("ngIf",!t.isAsyncLogin),u.zb(1),u.jc("ngIf",t.isAsyncLogin))},directives:[a.t,a.m,a.h,g.c,m.a,g.b,a.d,a.l,a.g,d.a,h.a,r.n,T.a],styles:[".signup-form[_ngcontent-%COMP%]{max-width:300px;margin:50px auto auto}.signup-form[_ngcontent-%COMP%]   [nz-button][_ngcontent-%COMP%]{margin-right:0}.signup-form[_ngcontent-%COMP%]   .btnLogin[_ngcontent-%COMP%]{width:49%;float:left}.signup-form[_ngcontent-%COMP%]   .btnLogin.btnGoogle[_ngcontent-%COMP%]{margin-left:6px}"]}),S),w=e("vobO"),O=[{path:"",component:k}],C=((v=function t(){n(this,t)}).\u0275mod=u.Lb({type:v}),v.\u0275inj=u.Kb({factory:function(n){return new(n||v)},imports:[[r.b,p.g.forChild(O),w.d,a.i,a.q,g.e,d.c,T.b,f.a]]}),v)}}])}();