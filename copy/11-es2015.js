(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"6hlU":function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return s})),i.d(t,"d",(function(){return l})),i.d(t,"e",(function(){return c}));var n=i("HYj3"),o=i("EM62");let r=(()=>{class e{constructor(e){this.cdkConnectedOverlay=e,this.cdkConnectedOverlay.backdropClass="nz-overlay-transparent-backdrop"}}return e.\u0275fac=function(t){return new(t||e)(o.Nb(n.a))},e.\u0275dir=o.Ib({type:e,selectors:[["","cdkConnectedOverlay","","nzConnectedOverlay",""]],exportAs:["nzConnectedOverlay"]}),e})(),s=(()=>{class e{}return e.\u0275mod=o.Lb({type:e}),e.\u0275inj=o.Kb({factory:function(t){return new(t||e)}}),e})();const l={top:new n.c({originX:"center",originY:"top"},{overlayX:"center",overlayY:"bottom"}),topCenter:new n.c({originX:"center",originY:"top"},{overlayX:"center",overlayY:"bottom"}),topLeft:new n.c({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),topRight:new n.c({originX:"end",originY:"top"},{overlayX:"end",overlayY:"bottom"}),right:new n.c({originX:"end",originY:"center"},{overlayX:"start",overlayY:"center"}),rightTop:new n.c({originX:"end",originY:"top"},{overlayX:"start",overlayY:"top"}),rightBottom:new n.c({originX:"end",originY:"bottom"},{overlayX:"start",overlayY:"bottom"}),bottom:new n.c({originX:"center",originY:"bottom"},{overlayX:"center",overlayY:"top"}),bottomCenter:new n.c({originX:"center",originY:"bottom"},{overlayX:"center",overlayY:"top"}),bottomLeft:new n.c({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),bottomRight:new n.c({originX:"end",originY:"bottom"},{overlayX:"end",overlayY:"top"}),left:new n.c({originX:"start",originY:"center"},{overlayX:"end",overlayY:"center"}),leftTop:new n.c({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"}),leftBottom:new n.c({originX:"start",originY:"bottom"},{overlayX:"end",overlayY:"bottom"})},a=[l.top,l.right,l.bottom,l.left];function c(e){for(const t in l)if(e.connectionPair.originX===l[t].originX&&e.connectionPair.originY===l[t].originY&&e.connectionPair.overlayX===l[t].overlayX&&e.connectionPair.overlayY===l[t].overlayY)return t}},fp1I:function(e,t,i){"use strict";i.r(t),i.d(t,"LoginFormModule",(function(){return P}));var n=i("2kYt"),o=i("sEIs"),r=i("nIj0"),s=i("vobO"),l=i("8j5Y"),a=i("Tu4v"),c=i("qBiZ"),h=i("8SNO"),g=i("K8Gv"),p=i("J50X"),u=i("EM62"),d=i("PlhU"),b=i("mybp"),m=i("1spV"),y=i("duTG"),v=i("ZTwM"),f=i("MaY1"),z=i("JbzU");function C(e,t){if(1&e&&(u.Tb(0,"div",4),u.Tb(1,"nz-input-group",5),u.Ob(2,"input",18),u.Sb(),u.Sb()),2&e){u.dc();const e=u.rc(29);u.zb(1),u.jc("nzPrefix",e)}}function T(e,t){1&e&&u.Ob(0,"i",19)}function O(e,t){1&e&&u.Ob(0,"i",20),2&e&&u.jc("nzType","sync")("nzSpin",!0)}function _(e,t){1&e&&u.Ob(0,"i",21)}function w(e,t){1&e&&u.Ob(0,"i",22)}let D=(()=>{class e{constructor(e,t,i,n,o,r,s){this.appVersion=e,this.config=t,this.fb=i,this.router=n,this.activeR=o,this.userCtrl=r,this.shared=s,this.isAsyncLogin=!1,this.redirectUrl=""}ngOnInit(){if(this.userCtrl.read().isAuthenticated())this.router.navigate(["/",this.redirectUrl]);else{let e=null,t=null,i=!1;this.activeR.queryParams.subscribe(n=>{this.redirectUrl=n.redirect_url||"";let o=this.shared.getRememberLogin();Object(g.h)(o)||(e=o.username,t=o.password,i=o.remember)}),this.loginForm=this.fb.group({email:[e,r.s.required],code:[t,r.s.required],url_dev:[this.config.read().api_url_dev],remember:[i],isDev:!1})}}onLogin(){if(this.loginForm.invalid)return void this.shared.alert.error("Vui l\xf2ng nh\u1eadp \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin.");const{remember:e,email:t,code:i,url_dev:n}=this.loginForm.value;this.config.load().then(o=>{o=o.assign({api_url_dev:n,isDev:this.isDev,api_key:this.isDev?"api_url_dev":"api_url"},!0).saveBy(this.shared),this.shared.setRememberLogin(e,t,i);let r=this.shared.loading("<b>\u0110ang ki\u1ec3m tra \u0111\u0103ng nh\u1eadp</b>");this.isAsyncLogin=!0,this.userCtrl.login(t,i).pipe(Object(l.a)(e=>this.isAsyncLogin=!1)).subscribe(e=>{console.log("User Login: "+e.email),this.shared.alert.remove(r.messageId);let t=e.config.isCfigDef||!1,i=Object(g.m)(t)?{save_default:1}:{};this.router.navigate(["/",this.redirectUrl],{queryParams:i})},e=>{this.isAsyncLogin=!1,this.shared.alert.remove(r.messageId),g.f.log("Login Error",e),Object(g.i)(e.staus)&&!Object(g.l)(e.msg)&&this.shared.alert.error(e.msg)})})}get isDev(){return this.loginForm.get("isDev").value}changeApiUrl(e){console.log(e),this.loginForm.get("url_dev").setValue(e.url)}}return e.\u0275fac=function(t){return new(t||e)(u.Nb(p.c),u.Nb(c.a),u.Nb(r.e),u.Nb(o.d),u.Nb(o.a),u.Nb(a.a),u.Nb(h.a))},e.\u0275cmp=u.Hb({type:e,selectors:[["t2t-login-form"]],decls:32,vars:12,consts:[["nz-form","",1,"login-form",3,"formGroup","ngSubmit"],[1,"row","pb-2"],[1,"col-12"],[1,"row"],[1,"col-12","form-group"],[3,"nzPrefix"],["type","text","id","email","nz-input","","formControlName","email","placeholder","E-mail NV"],["type","password","id","code","nz-input","","formControlName","code","placeholder","Nh\u1eadp MK"],["class","col-12 form-group",4,"ngIf"],[1,"col-12","d-flex","align-items-center"],["nz-button","",1,"btnLogin",3,"nzType","disabled"],["nz-icon","","nzType","login","theme","outline",4,"ngIf"],["nz-icon","",3,"nzType","nzSpin",4,"ngIf"],["nz-checkbox","","formControlName","isDev",1,"ml-2"],["isDev",""],["nz-checkbox","","formControlName","remember",1,"ml-auto"],["userIcon",""],["passwordIcon",""],["type","text","id","url_dev","nz-input","","formControlName","url_dev","placeholder","Url Dev"],["nz-icon","","nzType","login","theme","outline"],["nz-icon","",3,"nzType","nzSpin"],["nz-icon","","nzType","user"],["nz-icon","","nzType","lock"]],template:function(e,t){if(1&e&&(u.Tb(0,"form",0),u.ac("ngSubmit",(function(){return t.onLogin()})),u.Tb(1,"div",1),u.Tb(2,"div",2),u.Tb(3,"span"),u.Dc(4,"Version: "),u.Sb(),u.Tb(5,"em"),u.Dc(6),u.ec(7,"date"),u.Sb(),u.Sb(),u.Sb(),u.Tb(8,"div",3),u.Tb(9,"div",4),u.Tb(10,"nz-input-group",5),u.Ob(11,"input",6),u.Sb(),u.Sb(),u.Tb(12,"div",4),u.Tb(13,"nz-input-group",5),u.Ob(14,"input",7),u.Sb(),u.Sb(),u.Bc(15,C,3,1,"div",8),u.Sb(),u.Tb(16,"div",3),u.Tb(17,"div",9),u.Tb(18,"button",10),u.Bc(19,T,1,0,"i",11),u.Bc(20,O,1,2,"i",12),u.Tb(21,"span"),u.Dc(22,"\u0110\u0103ng nh\u1eadp"),u.Sb(),u.Sb(),u.Tb(23,"label",13,14),u.Dc(25,"isDev"),u.Sb(),u.Tb(26,"label",15),u.Dc(27,"Ghi nh\u1edb"),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Bc(28,_,1,0,"ng-template",null,16,u.Cc),u.Bc(30,w,1,0,"ng-template",null,17,u.Cc)),2&e){const e=u.rc(24),i=u.rc(29),n=u.rc(31);u.jc("formGroup",t.loginForm),u.zb(6),u.Ec(u.gc(7,9,t.appVersion,"yyyyMMddHHmmss")),u.zb(4),u.jc("nzPrefix",i),u.zb(3),u.jc("nzPrefix",n),u.zb(2),u.jc("ngIf",e.nzChecked),u.zb(3),u.jc("nzType","primary")("disabled",t.isAsyncLogin),u.zb(1),u.jc("ngIf",!t.isAsyncLogin),u.zb(1),u.jc("ngIf",t.isAsyncLogin)}},directives:[r.t,r.m,d.b,r.h,b.c,m.a,b.d,b.b,r.d,r.l,r.g,n.n,y.a,v.a,f.a,z.a],pipes:[n.d],styles:[".ant-form-item{margin:0}.login-form{max-width:300px;margin:50px auto auto}.login-form [nz-button]{margin-right:0}.login-form .btnLogin{float:left}.login-form .btnLogin.btnGoogle{margin-left:6px}"],encapsulation:2}),e})();var S=i("jY47");const N=[{path:"",component:D}];let P=(()=>{class e{}return e.\u0275mod=u.Lb({type:e}),e.\u0275inj=u.Kb({factory:function(t){return new(t||e)},imports:[[n.b,o.g.forChild(N),s.d,r.i,r.q,s.d,S.c,b.e,f.c,y.c,z.b,d.d]]}),e})()},t8yx:function(e,t,i){"use strict";i.d(t,"a",(function(){return T})),i.d(t,"b",(function(){return z}));var n=i("EM62"),o=i("ZXq0");const r=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];var s=i("D69K"),l=i("HYj3"),a=i("6hlU"),c=i("7ucf"),h=i("ZTXN"),g=i("Ohay"),p=i("kuMc"),u=i("2kYt"),d=i("kZKz");const b=["overlay"];function m(e,t){if(1&e&&(n.Rb(0),n.Dc(1),n.Qb()),2&e){const e=n.dc(2);n.zb(1),n.Ec(e.nzTitle)}}function y(e,t){if(1&e&&(n.Tb(0,"div",2),n.Tb(1,"div",3),n.Tb(2,"div",4),n.Ob(3,"span",5),n.Sb(),n.Tb(4,"div",6),n.Bc(5,m,2,1,"ng-container",7),n.Sb(),n.Sb(),n.Sb()),2&e){const e=n.dc();n.jc("ngClass",e._classMap)("ngStyle",e.nzOverlayStyle)("@.disabled",null==e.noAnimation?null:e.noAnimation.nzNoAnimation)("nzNoAnimation",null==e.noAnimation?null:e.noAnimation.nzNoAnimation)("@zoomBigMotion","active"),n.zb(3),n.jc("ngStyle",e._contentStyleMap),n.zb(1),n.jc("ngStyle",e._contentStyleMap),n.zb(1),n.jc("nzStringTemplateOutlet",e.nzTitle)}}let v=(()=>{class e{constructor(e,t,i,o,r){this.elementRef=e,this.hostView=t,this.resolver=i,this.renderer=o,this.noAnimation=r,this.visibleChange=new n.n,this.internalVisible=!1,this.destroy$=new h.a,this.triggerDisposables=[]}get _title(){return this.title||this.directiveTitle||null}get _content(){return this.content||this.directiveContent||null}get _trigger(){return void 0!==this.trigger?this.trigger:"hover"}get _placement(){const e=this.placement;return Array.isArray(e)&&e.length>0?e:"string"==typeof e&&e?[e]:["top"]}get _visible(){return(void 0!==this.visible?this.visible:this.internalVisible)||!1}get _mouseEnterDelay(){return this.mouseEnterDelay||.15}get _mouseLeaveDelay(){return this.mouseLeaveDelay||.1}get _overlayClassName(){return this.overlayClassName||null}get _overlayStyle(){return this.overlayStyle||null}getProxyPropertyMap(){return{noAnimation:["noAnimation",()=>this.noAnimation]}}ngOnChanges(e){const{specificTrigger:t}=e;t&&!t.isFirstChange()&&this.registerTriggers(),this.component&&this.updatePropertiesByChanges(e)}ngAfterViewInit(){this.createComponent(),this.registerTriggers()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.clearTogglingTimer(),this.removeTriggerListeners()}show(){var e;null===(e=this.component)||void 0===e||e.show()}hide(){var e;null===(e=this.component)||void 0===e||e.hide()}updatePosition(){this.component&&this.component.updatePosition()}createComponent(){const e=this.hostView.createComponent(this.componentFactory);this.component=e.instance,this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),e.location.nativeElement),this.component.setOverlayOrigin({elementRef:this.origin||this.elementRef}),this.initProperties(),this.component.nzVisibleChange.pipe(Object(g.a)(),Object(p.a)(this.destroy$)).subscribe(e=>{this.internalVisible=e,this.visibleChange.emit(e)})}registerTriggers(){const e=this.elementRef.nativeElement,t=this.trigger;if(this.removeTriggerListeners(),"hover"===t){let t;this.triggerDisposables.push(this.renderer.listen(e,"mouseenter",()=>{this.delayEnterLeave(!0,!0,this._mouseEnterDelay)})),this.triggerDisposables.push(this.renderer.listen(e,"mouseleave",()=>{var e;this.delayEnterLeave(!0,!1,this._mouseLeaveDelay),(null===(e=this.component)||void 0===e?void 0:e.overlay.overlayRef)&&!t&&(t=this.component.overlay.overlayRef.overlayElement,this.triggerDisposables.push(this.renderer.listen(t,"mouseenter",()=>{this.delayEnterLeave(!1,!0,this._mouseEnterDelay)})),this.triggerDisposables.push(this.renderer.listen(t,"mouseleave",()=>{this.delayEnterLeave(!1,!1,this._mouseLeaveDelay)})))}))}else"focus"===t?(this.triggerDisposables.push(this.renderer.listen(e,"focus",()=>this.show())),this.triggerDisposables.push(this.renderer.listen(e,"blur",()=>this.hide()))):"click"===t&&this.triggerDisposables.push(this.renderer.listen(e,"click",e=>{e.preventDefault(),this.show()}))}updatePropertiesByChanges(e){this.updatePropertiesByKeys(Object.keys(e))}updatePropertiesByKeys(e){var t;const i=Object.assign({title:["nzTitle",()=>this._title],directiveTitle:["nzTitle",()=>this._title],content:["nzContent",()=>this._content],directiveContent:["nzContent",()=>this._content],trigger:["nzTrigger",()=>this._trigger],placement:["nzPlacement",()=>this._placement],visible:["nzVisible",()=>this._visible],mouseEnterDelay:["nzMouseEnterDelay",()=>this._mouseEnterDelay],mouseLeaveDelay:["nzMouseLeaveDelay",()=>this._mouseLeaveDelay],overlayClassName:["nzOverlayClassName",()=>this._overlayClassName],overlayStyle:["nzOverlayStyle",()=>this._overlayStyle]},this.getProxyPropertyMap());(e||Object.keys(i).filter(e=>!e.startsWith("directive"))).forEach(e=>{if(i[e]){const[t,n]=i[e];this.updateComponentValue(t,n())}}),null===(t=this.component)||void 0===t||t.updateByDirective()}initProperties(){this.updatePropertiesByKeys()}updateComponentValue(e,t){void 0!==t&&(this.component[e]=t)}delayEnterLeave(e,t,i=-1){this.delayTimer?this.clearTogglingTimer():i>0?this.delayTimer=setTimeout(()=>{this.delayTimer=void 0,t?this.show():this.hide()},1e3*i):t&&e?this.show():this.hide()}removeTriggerListeners(){this.triggerDisposables.forEach(e=>e()),this.triggerDisposables.length=0}clearTogglingTimer(){this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=void 0)}}return e.\u0275fac=function(t){return new(t||e)(n.Nb(n.l),n.Nb(n.P),n.Nb(n.j),n.Nb(n.E),n.Nb(s.a))},e.\u0275dir=n.Ib({type:e,features:[n.xb]}),e})(),f=(()=>{class e{constructor(e,t){this.cdr=e,this.noAnimation=t,this.nzTitle=null,this.nzContent=null,this.nzOverlayStyle={},this.nzVisibleChange=new h.a,this._visible=!1,this._trigger="hover",this.preferredPlacement="top",this._classMap={},this._hasBackdrop=!1,this._prefix="ant-tooltip",this._positions=[...a.a]}set nzVisible(e){const t=Object(c.m)(e);this._visible!==t&&(this._visible=t,this.nzVisibleChange.next(t))}get nzVisible(){return this._visible}set nzTrigger(e){this._trigger=e}get nzTrigger(){return this._trigger}set nzPlacement(e){const t=e.map(e=>a.d[e]);this._positions=[...t,...a.a]}ngOnDestroy(){this.nzVisibleChange.complete()}show(){this.nzVisible||this.isEmpty()||(this.nzVisible=!0,this.nzVisibleChange.next(!0),this.cdr.detectChanges())}hide(){this.nzVisible&&(this.nzVisible=!1,this.nzVisibleChange.next(!1),this.cdr.detectChanges())}updateByDirective(){this.updateStyles(),this.cdr.detectChanges(),Promise.resolve().then(()=>{this.updatePosition(),this.updateVisibilityByTitle()})}updatePosition(){this.origin&&this.overlay&&this.overlay.overlayRef&&this.overlay.overlayRef.updatePosition()}onPositionChange(e){this.preferredPlacement=Object(a.e)(e),this.updateStyles(),this.cdr.detectChanges()}updateStyles(){this._classMap={[this.nzOverlayClassName]:!0,[`${this._prefix}-placement-${this.preferredPlacement}`]:!0}}setOverlayOrigin(e){this.origin=e,this.cdr.markForCheck()}onClickOutside(e){this.origin.elementRef.nativeElement.contains(e.target)||this.hide()}updateVisibilityByTitle(){this.isEmpty()&&this.hide()}}return e.\u0275fac=function(t){return new(t||e)(n.Nb(n.h),n.Nb(s.a))},e.\u0275dir=n.Ib({type:e,viewQuery:function(e,t){var i;1&e&&n.Hc(b,!0),2&e&&n.qc(i=n.bc())&&(t.overlay=i.first)}}),e})(),z=(()=>{class e extends v{constructor(e,t,i,o,r){super(e,t,i,o,r),this.trigger="hover",this.placement="top",this.visibleChange=new n.n,this.componentFactory=this.resolver.resolveComponentFactory(C)}getProxyPropertyMap(){return{nzTooltipColor:["nzColor",()=>this.nzTooltipColor]}}}return e.\u0275fac=function(t){return new(t||e)(n.Nb(n.l),n.Nb(n.P),n.Nb(n.j),n.Nb(n.E),n.Nb(s.a,9))},e.\u0275dir=n.Ib({type:e,selectors:[["","nz-tooltip",""]],hostVars:2,hostBindings:function(e,t){2&e&&n.Fb("ant-tooltip-open",t.visible)},inputs:{trigger:["nzTooltipTrigger","trigger"],placement:["nzTooltipPlacement","placement"],title:["nzTooltipTitle","title"],directiveTitle:["nz-tooltip","directiveTitle"],origin:["nzTooltipOrigin","origin"],visible:["nzTooltipVisible","visible"],mouseEnterDelay:["nzTooltipMouseEnterDelay","mouseEnterDelay"],mouseLeaveDelay:["nzTooltipMouseLeaveDelay","mouseLeaveDelay"],overlayClassName:["nzTooltipOverlayClassName","overlayClassName"],overlayStyle:["nzTooltipOverlayStyle","overlayStyle"],nzTooltipColor:"nzTooltipColor"},outputs:{visibleChange:"nzTooltipVisibleChange"},exportAs:["nzTooltip"],features:[n.wb]}),e})(),C=(()=>{class e extends f{constructor(e,t){super(e,t),this.noAnimation=t,this.nzTitle=null,this._contentStyleMap={}}isEmpty(){return!((e=this.nzTitle)instanceof n.L||""!==e&&Object(c.g)(e));var e}updateStyles(){const e=this.nzColor&&-1!==r.indexOf(this.nzColor);this._classMap={[this.nzOverlayClassName]:!0,[`${this._prefix}-placement-${this.preferredPlacement}`]:!0,[`${this._prefix}-${this.nzColor}`]:e},this._contentStyleMap={backgroundColor:this.nzColor&&!e?this.nzColor:null}}}return e.\u0275fac=function(t){return new(t||e)(n.Nb(n.h),n.Nb(s.a,9))},e.\u0275cmp=n.Hb({type:e,selectors:[["nz-tooltip"]],exportAs:["nzTooltipComponent"],features:[n.wb],decls:2,vars:4,consts:[["cdkConnectedOverlay","","nzConnectedOverlay","",3,"cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayPositions","cdkConnectedOverlayPush","overlayOutsideClick","detach","positionChange"],["overlay","cdkConnectedOverlay"],[1,"ant-tooltip",3,"ngClass","ngStyle","nzNoAnimation"],[1,"ant-tooltip-content"],[1,"ant-tooltip-arrow"],[1,"ant-tooltip-arrow-content",3,"ngStyle"],[1,"ant-tooltip-inner",3,"ngStyle"],[4,"nzStringTemplateOutlet"]],template:function(e,t){1&e&&(n.Bc(0,y,6,8,"ng-template",0,1,n.Cc),n.ac("overlayOutsideClick",(function(e){return t.onClickOutside(e)}))("detach",(function(){return t.hide()}))("positionChange",(function(e){return t.onPositionChange(e)}))),2&e&&n.jc("cdkConnectedOverlayOrigin",t.origin)("cdkConnectedOverlayOpen",t._visible)("cdkConnectedOverlayPositions",t._positions)("cdkConnectedOverlayPush",!0)},directives:[l.a,a.b,u.l,u.o,s.a,d.b],encapsulation:2,data:{animation:[o.f]},changeDetection:0}),e})(),T=(()=>{class e{}return e.\u0275mod=n.Lb({type:e}),e.\u0275inj=n.Kb({factory:function(t){return new(t||e)},imports:[[u.b,l.f,d.a,a.c,s.b]]}),e})()}}]);