"use strict";(self.webpackChunkTS24AppWeb=self.webpackChunkTS24AppWeb||[]).push([[546],{4546:(et,k,l)=>{l.d(k,{Fd:()=>ot,Lr:()=>nt,Nx:()=>g,U5:()=>st});var u=l(226),i=l(5113),w=l(925),A=l(9808),n=l(5e3),R=l(969),$=l(1894),F=l(3087),O=l(6695),x=l(3075),N=l(7579),P=l(727),b=l(2722),z=l(9300),E=l(4004),r=l(8505),c=l(8675),m=l(8076),f=l(1721),v=l(7904),T=l(655),C=l(9439);const V=["*"];function W(o,p){if(1&o&&n._UZ(0,"i",6),2&o){const t=n.oxw();n.Q6J("nzType",t.iconType)}}function K(o,p){if(1&o&&(n.ynx(0),n._uU(1),n.BQk()),2&o){const t=n.oxw(2);n.xp6(1),n.Oqu(t.innerTip)}}const G=function(o){return[o]},H=function(o){return{$implicit:o}};function h(o,p){if(1&o&&(n.TgZ(0,"div",7)(1,"div",8),n.YNc(2,K,2,1,"ng-container",9),n.qZA()()),2&o){const t=n.oxw();n.Q6J("@helpMotion",void 0),n.xp6(1),n.Q6J("ngClass",n.VKq(4,G,"ant-form-item-explain-"+t.status)),n.xp6(1),n.Q6J("nzStringTemplateOutlet",t.innerTip)("nzStringTemplateOutletContext",n.VKq(6,H,t.validateControl))}}function _(o,p){if(1&o&&(n.ynx(0),n._uU(1),n.BQk()),2&o){const t=n.oxw(2);n.xp6(1),n.Oqu(t.nzExtra)}}function e(o,p){if(1&o&&(n.TgZ(0,"div",10),n.YNc(1,_,2,1,"ng-container",11),n.qZA()),2&o){const t=n.oxw();n.xp6(1),n.Q6J("nzStringTemplateOutlet",t.nzExtra)}}let g=(()=>{class o{constructor(t,s,y){this.cdr=y,this.status=null,this.hasFeedback=!1,this.withHelpClass=!1,this.destroy$=new N.x,s.addClass(t.nativeElement,"ant-form-item")}setWithHelpViaTips(t){this.withHelpClass=t,this.cdr.markForCheck()}setStatus(t){this.status=t,this.cdr.markForCheck()}setHasFeedback(t){this.hasFeedback=t,this.cdr.markForCheck()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(n.SBq),n.Y36(n.Qsj),n.Y36(n.sBO))},o.\u0275cmp=n.Xpm({type:o,selectors:[["nz-form-item"]],hostVars:12,hostBindings:function(t,s){2&t&&n.ekj("ant-form-item-has-success","success"===s.status)("ant-form-item-has-warning","warning"===s.status)("ant-form-item-has-error","error"===s.status)("ant-form-item-is-validating","validating"===s.status)("ant-form-item-has-feedback",s.hasFeedback&&s.status)("ant-form-item-with-help",s.withHelpClass)},exportAs:["nzFormItem"],ngContentSelectors:V,decls:1,vars:0,template:function(t,s){1&t&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),o})();const j={type:"question-circle",theme:"outline"};let nt=(()=>{class o{constructor(t,s,y,D){var M;this.nzConfigService=t,this.renderer=y,this.directionality=D,this._nzModuleName="form",this.nzLayout="horizontal",this.nzNoColon=!1,this.nzAutoTips={},this.nzDisableAutoTips=!1,this.nzTooltipIcon=j,this.dir="ltr",this.destroy$=new N.x,this.inputChanges$=new N.x,this.renderer.addClass(s.nativeElement,"ant-form"),this.dir=this.directionality.value,null===(M=this.directionality.change)||void 0===M||M.pipe((0,b.R)(this.destroy$)).subscribe(S=>{this.dir=S})}getInputObservable(t){return this.inputChanges$.pipe((0,z.h)(s=>t in s),(0,E.U)(s=>s[t]))}ngOnChanges(t){this.inputChanges$.next(t)}ngOnDestroy(){this.inputChanges$.complete(),this.destroy$.next(),this.destroy$.complete()}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(C.jY),n.Y36(n.SBq),n.Y36(n.Qsj),n.Y36(u.Is,8))},o.\u0275dir=n.lG2({type:o,selectors:[["","nz-form",""]],hostVars:8,hostBindings:function(t,s){2&t&&n.ekj("ant-form-horizontal","horizontal"===s.nzLayout)("ant-form-vertical","vertical"===s.nzLayout)("ant-form-inline","inline"===s.nzLayout)("ant-form-rtl","rtl"===s.dir)},inputs:{nzLayout:"nzLayout",nzNoColon:"nzNoColon",nzAutoTips:"nzAutoTips",nzDisableAutoTips:"nzDisableAutoTips",nzTooltipIcon:"nzTooltipIcon"},exportAs:["nzForm"],features:[n.TTD]}),(0,T.gn)([(0,C.oS)(),(0,f.yF)()],o.prototype,"nzNoColon",void 0),(0,T.gn)([(0,C.oS)()],o.prototype,"nzAutoTips",void 0),(0,T.gn)([(0,f.yF)()],o.prototype,"nzDisableAutoTips",void 0),(0,T.gn)([(0,C.oS)()],o.prototype,"nzTooltipIcon",void 0),o})();const it={error:"close-circle-fill",validating:"loading",success:"check-circle-fill",warning:"exclamation-circle-fill"};let ot=(()=>{class o{constructor(t,s,y,D,M,S){var I,B;this.nzFormItemComponent=s,this.cdr=y,this.nzFormDirective=S,this._hasFeedback=!1,this.validateChanges=P.w0.EMPTY,this.validateString=null,this.destroyed$=new N.x,this.status=null,this.validateControl=null,this.iconType=null,this.innerTip=null,this.nzAutoTips={},this.nzDisableAutoTips="default",D.addClass(t.nativeElement,"ant-form-item-control"),this.subscribeAutoTips(M.localeChange.pipe((0,r.b)(U=>this.localeId=U.locale))),this.subscribeAutoTips(null===(I=this.nzFormDirective)||void 0===I?void 0:I.getInputObservable("nzAutoTips")),this.subscribeAutoTips(null===(B=this.nzFormDirective)||void 0===B?void 0:B.getInputObservable("nzDisableAutoTips").pipe((0,z.h)(()=>"default"===this.nzDisableAutoTips)))}get disableAutoTips(){var t;return"default"!==this.nzDisableAutoTips?(0,f.sw)(this.nzDisableAutoTips):null===(t=this.nzFormDirective)||void 0===t?void 0:t.nzDisableAutoTips}set nzHasFeedback(t){this._hasFeedback=(0,f.sw)(t),this.nzFormItemComponent&&this.nzFormItemComponent.setHasFeedback(this._hasFeedback)}get nzHasFeedback(){return this._hasFeedback}set nzValidateStatus(t){t instanceof x.TO||t instanceof x.On?(this.validateControl=t,this.validateString=null,this.watchControl()):t instanceof x.u?(this.validateControl=t.control,this.validateString=null,this.watchControl()):(this.validateString=t,this.validateControl=null,this.setStatus())}watchControl(){this.validateChanges.unsubscribe(),this.validateControl&&this.validateControl.statusChanges&&(this.validateChanges=this.validateControl.statusChanges.pipe((0,c.O)(null),(0,b.R)(this.destroyed$)).subscribe(t=>{this.disableAutoTips||this.updateAutoErrorTip(),this.setStatus(),this.cdr.markForCheck()}))}setStatus(){this.status=this.getControlStatus(this.validateString),this.iconType=this.status?it[this.status]:null,this.innerTip=this.getInnerTip(this.status),this.nzFormItemComponent&&(this.nzFormItemComponent.setWithHelpViaTips(!!this.innerTip),this.nzFormItemComponent.setStatus(this.status))}getControlStatus(t){let s;return s="warning"===t||this.validateControlStatus("INVALID","warning")?"warning":"error"===t||this.validateControlStatus("INVALID")?"error":"validating"===t||"pending"===t||this.validateControlStatus("PENDING")?"validating":"success"===t||this.validateControlStatus("VALID")?"success":null,s}validateControlStatus(t,s){if(this.validateControl){const{dirty:y,touched:D,status:M}=this.validateControl;return(!!y||!!D)&&(s?this.validateControl.hasError(s):M===t)}return!1}getInnerTip(t){switch(t){case"error":return!this.disableAutoTips&&this.autoErrorTip||this.nzErrorTip||null;case"validating":return this.nzValidatingTip||null;case"success":return this.nzSuccessTip||null;case"warning":return this.nzWarningTip||null;default:return null}}updateAutoErrorTip(){var t,s,y,D,M,S,I,B,U,J,Q,X,Z;if(this.validateControl){const q=this.validateControl.errors||{};let tt="";for(const Y in q)if(q.hasOwnProperty(Y)&&(tt=null!==(Q=null!==(I=null!==(M=null!==(s=null===(t=q[Y])||void 0===t?void 0:t[this.localeId])&&void 0!==s?s:null===(D=null===(y=this.nzAutoTips)||void 0===y?void 0:y[this.localeId])||void 0===D?void 0:D[Y])&&void 0!==M?M:null===(S=this.nzAutoTips.default)||void 0===S?void 0:S[Y])&&void 0!==I?I:null===(J=null===(U=null===(B=this.nzFormDirective)||void 0===B?void 0:B.nzAutoTips)||void 0===U?void 0:U[this.localeId])||void 0===J?void 0:J[Y])&&void 0!==Q?Q:null===(Z=null===(X=this.nzFormDirective)||void 0===X?void 0:X.nzAutoTips.default)||void 0===Z?void 0:Z[Y]),tt)break;this.autoErrorTip=tt}}subscribeAutoTips(t){null==t||t.pipe((0,b.R)(this.destroyed$)).subscribe(()=>{this.disableAutoTips||(this.updateAutoErrorTip(),this.setStatus(),this.cdr.markForCheck())})}ngOnChanges(t){const{nzDisableAutoTips:s,nzAutoTips:y,nzSuccessTip:D,nzWarningTip:M,nzErrorTip:S,nzValidatingTip:I}=t;s||y?(this.updateAutoErrorTip(),this.setStatus()):(D||M||S||I)&&this.setStatus()}ngOnInit(){this.setStatus()}ngOnDestroy(){this.destroyed$.next(),this.destroyed$.complete()}ngAfterContentInit(){!this.validateControl&&!this.validateString&&(this.nzValidateStatus=this.defaultValidateControl instanceof x.oH?this.defaultValidateControl.control:this.defaultValidateControl)}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(n.SBq),n.Y36(g,9),n.Y36(n.sBO),n.Y36(n.Qsj),n.Y36(v.wi),n.Y36(nt,8))},o.\u0275cmp=n.Xpm({type:o,selectors:[["nz-form-control"]],contentQueries:function(t,s,y){if(1&t&&n.Suo(y,x.a5,5),2&t){let D;n.iGM(D=n.CRH())&&(s.defaultValidateControl=D.first)}},inputs:{nzSuccessTip:"nzSuccessTip",nzWarningTip:"nzWarningTip",nzErrorTip:"nzErrorTip",nzValidatingTip:"nzValidatingTip",nzExtra:"nzExtra",nzAutoTips:"nzAutoTips",nzDisableAutoTips:"nzDisableAutoTips",nzHasFeedback:"nzHasFeedback",nzValidateStatus:"nzValidateStatus"},exportAs:["nzFormControl"],features:[n.TTD],ngContentSelectors:V,decls:7,vars:3,consts:[[1,"ant-form-item-control-input"],[1,"ant-form-item-control-input-content"],[1,"ant-form-item-children-icon"],["nz-icon","",3,"nzType",4,"ngIf"],["class","ant-form-item-explain ant-form-item-explain-connected",4,"ngIf"],["class","ant-form-item-extra",4,"ngIf"],["nz-icon","",3,"nzType"],[1,"ant-form-item-explain","ant-form-item-explain-connected"],["role","alert",3,"ngClass"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"],[1,"ant-form-item-extra"],[4,"nzStringTemplateOutlet"]],template:function(t,s){1&t&&(n.F$t(),n.TgZ(0,"div",0)(1,"div",1),n.Hsn(2),n.qZA(),n.TgZ(3,"span",2),n.YNc(4,W,1,1,"i",3),n.qZA()(),n.YNc(5,h,3,8,"div",4),n.YNc(6,e,2,1,"div",5)),2&t&&(n.xp6(4),n.Q6J("ngIf",s.nzHasFeedback&&s.iconType),n.xp6(1),n.Q6J("ngIf",s.innerTip),n.xp6(1),n.Q6J("ngIf",s.nzExtra))},directives:[A.O5,F.Ls,A.mk,R.f],encapsulation:2,data:{animation:[m.c8]},changeDetection:0}),o})(),st=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[u.vT,A.ez,$.Jb,F.PV,O.cg,i.xu,w.ud,R.T],$.Jb]}),o})()},1894:(et,k,l)=>{l.d(k,{Jb:()=>b,SK:()=>N,t3:()=>P});var u=l(5e3),i=l(4707),w=l(7579),A=l(2722),n=l(4090),R=l(5113),$=l(925),F=l(226),O=l(1721),x=l(9808);let N=(()=>{class z{constructor(r,c,m,f,v,T,C){this.elementRef=r,this.renderer=c,this.mediaMatcher=m,this.ngZone=f,this.platform=v,this.breakpointService=T,this.directionality=C,this.nzAlign=null,this.nzJustify=null,this.nzGutter=null,this.actualGutter$=new i.t(1),this.dir="ltr",this.destroy$=new w.x}getGutter(){const r=[null,null],c=this.nzGutter||0;return(Array.isArray(c)?c:[c,null]).forEach((f,v)=>{"object"==typeof f&&null!==f?(r[v]=null,Object.keys(n.WV).map(T=>{const C=T;this.mediaMatcher.matchMedia(n.WV[C]).matches&&f[C]&&(r[v]=f[C])})):r[v]=Number(f)||null}),r}setGutterStyle(){const[r,c]=this.getGutter();this.actualGutter$.next([r,c]);const m=(f,v)=>{null!==v&&this.renderer.setStyle(this.elementRef.nativeElement,f,`-${v/2}px`)};m("margin-left",r),m("margin-right",r),m("margin-top",c),m("margin-bottom",c)}ngOnInit(){var r;this.dir=this.directionality.value,null===(r=this.directionality.change)||void 0===r||r.pipe((0,A.R)(this.destroy$)).subscribe(c=>{this.dir=c}),this.setGutterStyle()}ngOnChanges(r){r.nzGutter&&this.setGutterStyle()}ngAfterViewInit(){this.platform.isBrowser&&this.breakpointService.subscribe(n.WV).pipe((0,A.R)(this.destroy$)).subscribe(()=>{this.setGutterStyle()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return z.\u0275fac=function(r){return new(r||z)(u.Y36(u.SBq),u.Y36(u.Qsj),u.Y36(R.vx),u.Y36(u.R0b),u.Y36($.t4),u.Y36(n.r3),u.Y36(F.Is,8))},z.\u0275dir=u.lG2({type:z,selectors:[["","nz-row",""],["nz-row"],["nz-form-item"]],hostAttrs:[1,"ant-row"],hostVars:18,hostBindings:function(r,c){2&r&&u.ekj("ant-row-top","top"===c.nzAlign)("ant-row-middle","middle"===c.nzAlign)("ant-row-bottom","bottom"===c.nzAlign)("ant-row-start","start"===c.nzJustify)("ant-row-end","end"===c.nzJustify)("ant-row-center","center"===c.nzJustify)("ant-row-space-around","space-around"===c.nzJustify)("ant-row-space-between","space-between"===c.nzJustify)("ant-row-rtl","rtl"===c.dir)},inputs:{nzAlign:"nzAlign",nzJustify:"nzJustify",nzGutter:"nzGutter"},exportAs:["nzRow"],features:[u.TTD]}),z})(),P=(()=>{class z{constructor(r,c,m,f){this.elementRef=r,this.nzRowDirective=c,this.renderer=m,this.directionality=f,this.classMap={},this.destroy$=new w.x,this.hostFlexStyle=null,this.dir="ltr",this.nzFlex=null,this.nzSpan=null,this.nzOrder=null,this.nzOffset=null,this.nzPush=null,this.nzPull=null,this.nzXs=null,this.nzSm=null,this.nzMd=null,this.nzLg=null,this.nzXl=null,this.nzXXl=null}setHostClassMap(){const r=Object.assign({"ant-col":!0,[`ant-col-${this.nzSpan}`]:(0,O.DX)(this.nzSpan),[`ant-col-order-${this.nzOrder}`]:(0,O.DX)(this.nzOrder),[`ant-col-offset-${this.nzOffset}`]:(0,O.DX)(this.nzOffset),[`ant-col-pull-${this.nzPull}`]:(0,O.DX)(this.nzPull),[`ant-col-push-${this.nzPush}`]:(0,O.DX)(this.nzPush),"ant-col-rtl":"rtl"===this.dir},this.generateClass());for(const c in this.classMap)this.classMap.hasOwnProperty(c)&&this.renderer.removeClass(this.elementRef.nativeElement,c);this.classMap=Object.assign({},r);for(const c in this.classMap)this.classMap.hasOwnProperty(c)&&this.classMap[c]&&this.renderer.addClass(this.elementRef.nativeElement,c)}setHostFlexStyle(){this.hostFlexStyle=this.parseFlex(this.nzFlex)}parseFlex(r){return"number"==typeof r?`${r} ${r} auto`:"string"==typeof r&&/^\d+(\.\d+)?(px|em|rem|%)$/.test(r)?`0 0 ${r}`:r}generateClass(){const c={};return["nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"].forEach(m=>{const f=m.replace("nz","").toLowerCase();if((0,O.DX)(this[m]))if("number"==typeof this[m]||"string"==typeof this[m])c[`ant-col-${f}-${this[m]}`]=!0;else{const v=this[m];["span","pull","push","offset","order"].forEach(C=>{c[`ant-col-${f}${"span"===C?"-":`-${C}-`}${v[C]}`]=v&&(0,O.DX)(v[C])})}}),c}ngOnInit(){this.dir=this.directionality.value,this.directionality.change.pipe((0,A.R)(this.destroy$)).subscribe(r=>{this.dir=r,this.setHostClassMap()}),this.setHostClassMap(),this.setHostFlexStyle()}ngOnChanges(r){this.setHostClassMap();const{nzFlex:c}=r;c&&this.setHostFlexStyle()}ngAfterViewInit(){this.nzRowDirective&&this.nzRowDirective.actualGutter$.pipe((0,A.R)(this.destroy$)).subscribe(([r,c])=>{const m=(f,v)=>{null!==v&&this.renderer.setStyle(this.elementRef.nativeElement,f,v/2+"px")};m("padding-left",r),m("padding-right",r),m("padding-top",c),m("padding-bottom",c)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return z.\u0275fac=function(r){return new(r||z)(u.Y36(u.SBq),u.Y36(N,9),u.Y36(u.Qsj),u.Y36(F.Is,8))},z.\u0275dir=u.lG2({type:z,selectors:[["","nz-col",""],["nz-col"],["nz-form-control"],["nz-form-label"]],hostVars:2,hostBindings:function(r,c){2&r&&u.Udp("flex",c.hostFlexStyle)},inputs:{nzFlex:"nzFlex",nzSpan:"nzSpan",nzOrder:"nzOrder",nzOffset:"nzOffset",nzPush:"nzPush",nzPull:"nzPull",nzXs:"nzXs",nzSm:"nzSm",nzMd:"nzMd",nzLg:"nzLg",nzXl:"nzXl",nzXXl:"nzXXl"},exportAs:["nzCol"],features:[u.TTD]}),z})(),b=(()=>{class z{}return z.\u0275fac=function(r){return new(r||z)},z.\u0275mod=u.oAB({type:z}),z.\u0275inj=u.cJS({imports:[[F.vT,x.ez,R.xu,$.ud]]}),z})()},6695:(et,k,l)=>{l.d(k,{cg:()=>H,SY:()=>K});var u=l(655),i=l(5e3),w=l(8076);const n=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];var F=l(1721),O=l(7579),x=l(1884),N=l(2722),P=l(6950),b=l(4832),z=l(9439),E=l(226),r=l(1314),c=l(9808),m=l(969);const f=["overlay"];function v(h,_){if(1&h&&(i.ynx(0),i._uU(1),i.BQk()),2&h){const e=i.oxw(2);i.xp6(1),i.Oqu(e.nzTitle)}}function T(h,_){if(1&h&&(i.TgZ(0,"div",2)(1,"div",3)(2,"div",4),i._UZ(3,"span",5),i.qZA(),i.TgZ(4,"div",6),i.YNc(5,v,2,1,"ng-container",7),i.qZA()()()),2&h){const e=i.oxw();i.ekj("ant-tooltip-rtl","rtl"===e.dir),i.Q6J("ngClass",e._classMap)("ngStyle",e.nzOverlayStyle)("@.disabled",null==e.noAnimation?null:e.noAnimation.nzNoAnimation)("nzNoAnimation",null==e.noAnimation?null:e.noAnimation.nzNoAnimation)("@zoomBigMotion","active"),i.xp6(3),i.Q6J("ngStyle",e._contentStyleMap),i.xp6(1),i.Q6J("ngStyle",e._contentStyleMap),i.xp6(1),i.Q6J("nzStringTemplateOutlet",e.nzTitle)("nzStringTemplateOutletContext",e.nzTitleContext)}}let C=(()=>{class h{constructor(e,a,d,g,L,j){this.elementRef=e,this.hostView=a,this.resolver=d,this.renderer=g,this.noAnimation=L,this.nzConfigService=j,this.visibleChange=new i.vpe,this.internalVisible=!1,this.destroy$=new O.x,this.triggerDisposables=[]}get _title(){return this.title||this.directiveTitle||null}get _content(){return this.content||this.directiveContent||null}get _trigger(){return void 0!==this.trigger?this.trigger:"hover"}get _placement(){const e=this.placement;return Array.isArray(e)&&e.length>0?e:"string"==typeof e&&e?[e]:["top"]}get _visible(){return(void 0!==this.visible?this.visible:this.internalVisible)||!1}get _mouseEnterDelay(){return this.mouseEnterDelay||.15}get _mouseLeaveDelay(){return this.mouseLeaveDelay||.1}get _overlayClassName(){return this.overlayClassName||null}get _overlayStyle(){return this.overlayStyle||null}getProxyPropertyMap(){return{noAnimation:["noAnimation",()=>!!this.noAnimation]}}ngOnChanges(e){const{trigger:a}=e;a&&!a.isFirstChange()&&this.registerTriggers(),this.component&&this.updatePropertiesByChanges(e)}ngAfterViewInit(){this.createComponent(),this.registerTriggers()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.clearTogglingTimer(),this.removeTriggerListeners()}show(){var e;null===(e=this.component)||void 0===e||e.show()}hide(){var e;null===(e=this.component)||void 0===e||e.hide()}updatePosition(){this.component&&this.component.updatePosition()}createComponent(){const e=this.componentRef;this.component=e.instance,this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),e.location.nativeElement),this.component.setOverlayOrigin(this.origin||this.elementRef),this.initProperties(),this.component.nzVisibleChange.pipe((0,x.x)(),(0,N.R)(this.destroy$)).subscribe(a=>{this.internalVisible=a,this.visibleChange.emit(a)})}registerTriggers(){const e=this.elementRef.nativeElement,a=this.trigger;if(this.removeTriggerListeners(),"hover"===a){let d;this.triggerDisposables.push(this.renderer.listen(e,"mouseenter",()=>{this.delayEnterLeave(!0,!0,this._mouseEnterDelay)})),this.triggerDisposables.push(this.renderer.listen(e,"mouseleave",()=>{var g;this.delayEnterLeave(!0,!1,this._mouseLeaveDelay),(null===(g=this.component)||void 0===g?void 0:g.overlay.overlayRef)&&!d&&(d=this.component.overlay.overlayRef.overlayElement,this.triggerDisposables.push(this.renderer.listen(d,"mouseenter",()=>{this.delayEnterLeave(!1,!0,this._mouseEnterDelay)})),this.triggerDisposables.push(this.renderer.listen(d,"mouseleave",()=>{this.delayEnterLeave(!1,!1,this._mouseLeaveDelay)})))}))}else"focus"===a?(this.triggerDisposables.push(this.renderer.listen(e,"focusin",()=>this.show())),this.triggerDisposables.push(this.renderer.listen(e,"focusout",()=>this.hide()))):"click"===a&&this.triggerDisposables.push(this.renderer.listen(e,"click",d=>{d.preventDefault(),this.show()}))}updatePropertiesByChanges(e){this.updatePropertiesByKeys(Object.keys(e))}updatePropertiesByKeys(e){var a;const d=Object.assign({title:["nzTitle",()=>this._title],directiveTitle:["nzTitle",()=>this._title],content:["nzContent",()=>this._content],directiveContent:["nzContent",()=>this._content],trigger:["nzTrigger",()=>this._trigger],placement:["nzPlacement",()=>this._placement],visible:["nzVisible",()=>this._visible],mouseEnterDelay:["nzMouseEnterDelay",()=>this._mouseEnterDelay],mouseLeaveDelay:["nzMouseLeaveDelay",()=>this._mouseLeaveDelay],overlayClassName:["nzOverlayClassName",()=>this._overlayClassName],overlayStyle:["nzOverlayStyle",()=>this._overlayStyle],arrowPointAtCenter:["nzArrowPointAtCenter",()=>this.arrowPointAtCenter]},this.getProxyPropertyMap());(e||Object.keys(d).filter(g=>!g.startsWith("directive"))).forEach(g=>{if(d[g]){const[L,j]=d[g];this.updateComponentValue(L,j())}}),null===(a=this.component)||void 0===a||a.updateByDirective()}initProperties(){this.updatePropertiesByKeys()}updateComponentValue(e,a){void 0!==a&&(this.component[e]=a)}delayEnterLeave(e,a,d=-1){this.delayTimer?this.clearTogglingTimer():d>0?this.delayTimer=setTimeout(()=>{this.delayTimer=void 0,a?this.show():this.hide()},1e3*d):a&&e?this.show():this.hide()}removeTriggerListeners(){this.triggerDisposables.forEach(e=>e()),this.triggerDisposables.length=0}clearTogglingTimer(){this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=void 0)}}return h.\u0275fac=function(e){return new(e||h)(i.Y36(i.SBq),i.Y36(i.s_b),i.Y36(i._Vd),i.Y36(i.Qsj),i.Y36(b.P),i.Y36(z.jY))},h.\u0275dir=i.lG2({type:h,features:[i.TTD]}),h})(),V=(()=>{class h{constructor(e,a,d){this.cdr=e,this.directionality=a,this.noAnimation=d,this.nzTitle=null,this.nzContent=null,this.nzArrowPointAtCenter=!1,this.nzOverlayStyle={},this.nzBackdrop=!1,this.nzVisibleChange=new O.x,this._visible=!1,this._trigger="hover",this.preferredPlacement="top",this.dir="ltr",this._classMap={},this._prefix="ant-tooltip",this._positions=[...P.Ek],this.destroy$=new O.x}set nzVisible(e){const a=(0,F.sw)(e);this._visible!==a&&(this._visible=a,this.nzVisibleChange.next(a))}get nzVisible(){return this._visible}set nzTrigger(e){this._trigger=e}get nzTrigger(){return this._trigger}set nzPlacement(e){const a=e.map(d=>P.yW[d]);this._positions=[...a,...P.Ek]}ngOnInit(){var e;null===(e=this.directionality.change)||void 0===e||e.pipe((0,N.R)(this.destroy$)).subscribe(a=>{this.dir=a,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.nzVisibleChange.complete(),this.destroy$.next(),this.destroy$.complete()}show(){this.nzVisible||(this.isEmpty()||(this.nzVisible=!0,this.nzVisibleChange.next(!0),this.cdr.detectChanges()),this.origin&&this.overlay&&this.overlay.overlayRef&&"rtl"===this.overlay.overlayRef.getDirection()&&this.overlay.overlayRef.setDirection("ltr"))}hide(){!this.nzVisible||(this.nzVisible=!1,this.nzVisibleChange.next(!1),this.cdr.detectChanges())}updateByDirective(){this.updateStyles(),this.cdr.detectChanges(),Promise.resolve().then(()=>{this.updatePosition(),this.updateVisibilityByTitle()})}updatePosition(){this.origin&&this.overlay&&this.overlay.overlayRef&&this.overlay.overlayRef.updatePosition()}onPositionChange(e){this.preferredPlacement=(0,P.d_)(e),this.updateStyles(),this.cdr.detectChanges()}setOverlayOrigin(e){this.origin=e,this.cdr.markForCheck()}onClickOutside(e){!this.origin.nativeElement.contains(e.target)&&null!==this.nzTrigger&&this.hide()}updateVisibilityByTitle(){this.isEmpty()&&this.hide()}updateStyles(){this._classMap={[this.nzOverlayClassName]:!0,[`${this._prefix}-placement-${this.preferredPlacement}`]:!0}}}return h.\u0275fac=function(e){return new(e||h)(i.Y36(i.sBO),i.Y36(E.Is,8),i.Y36(b.P))},h.\u0275dir=i.lG2({type:h,viewQuery:function(e,a){if(1&e&&i.Gf(f,5),2&e){let d;i.iGM(d=i.CRH())&&(a.overlay=d.first)}}}),h})(),K=(()=>{class h extends C{constructor(e,a,d,g,L){super(e,a,d,g,L),this.titleContext=null,this.trigger="hover",this.placement="top",this.visibleChange=new i.vpe,this.componentRef=this.hostView.createComponent(G)}getProxyPropertyMap(){return Object.assign(Object.assign({},super.getProxyPropertyMap()),{nzTooltipColor:["nzColor",()=>this.nzTooltipColor],nzTooltipTitleContext:["nzTitleContext",()=>this.titleContext]})}}return h.\u0275fac=function(e){return new(e||h)(i.Y36(i.SBq),i.Y36(i.s_b),i.Y36(i._Vd),i.Y36(i.Qsj),i.Y36(b.P,9))},h.\u0275dir=i.lG2({type:h,selectors:[["","nz-tooltip",""]],hostVars:2,hostBindings:function(e,a){2&e&&i.ekj("ant-tooltip-open",a.visible)},inputs:{title:["nzTooltipTitle","title"],titleContext:["nzTooltipTitleContext","titleContext"],directiveTitle:["nz-tooltip","directiveTitle"],trigger:["nzTooltipTrigger","trigger"],placement:["nzTooltipPlacement","placement"],origin:["nzTooltipOrigin","origin"],visible:["nzTooltipVisible","visible"],mouseEnterDelay:["nzTooltipMouseEnterDelay","mouseEnterDelay"],mouseLeaveDelay:["nzTooltipMouseLeaveDelay","mouseLeaveDelay"],overlayClassName:["nzTooltipOverlayClassName","overlayClassName"],overlayStyle:["nzTooltipOverlayStyle","overlayStyle"],arrowPointAtCenter:["nzTooltipArrowPointAtCenter","arrowPointAtCenter"],nzTooltipColor:"nzTooltipColor"},outputs:{visibleChange:"nzTooltipVisibleChange"},exportAs:["nzTooltip"],features:[i.qOj]}),(0,u.gn)([(0,F.yF)()],h.prototype,"arrowPointAtCenter",void 0),h})(),G=(()=>{class h extends V{constructor(e,a,d){super(e,a,d),this.nzTitle=null,this.nzTitleContext=null,this._contentStyleMap={}}isEmpty(){return function W(h){return!(h instanceof i.Rgc||""!==h&&(0,F.DX)(h))}(this.nzTitle)}updateStyles(){const e=this.nzColor&&function R(h){return-1!==n.indexOf(h)}(this.nzColor);this._classMap={[this.nzOverlayClassName]:!0,[`${this._prefix}-placement-${this.preferredPlacement}`]:!0,[`${this._prefix}-${this.nzColor}`]:e},this._contentStyleMap={backgroundColor:this.nzColor&&!e?this.nzColor:null}}}return h.\u0275fac=function(e){return new(e||h)(i.Y36(i.sBO),i.Y36(E.Is,8),i.Y36(b.P,9))},h.\u0275cmp=i.Xpm({type:h,selectors:[["nz-tooltip"]],exportAs:["nzTooltipComponent"],features:[i.qOj],decls:2,vars:5,consts:[["cdkConnectedOverlay","","nzConnectedOverlay","",3,"cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayPositions","cdkConnectedOverlayPush","nzArrowPointAtCenter","overlayOutsideClick","detach","positionChange"],["overlay","cdkConnectedOverlay"],[1,"ant-tooltip",3,"ngClass","ngStyle","nzNoAnimation"],[1,"ant-tooltip-content"],[1,"ant-tooltip-arrow"],[1,"ant-tooltip-arrow-content",3,"ngStyle"],[1,"ant-tooltip-inner",3,"ngStyle"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"]],template:function(e,a){1&e&&(i.YNc(0,T,6,11,"ng-template",0,1,i.W1O),i.NdJ("overlayOutsideClick",function(g){return a.onClickOutside(g)})("detach",function(){return a.hide()})("positionChange",function(g){return a.onPositionChange(g)})),2&e&&i.Q6J("cdkConnectedOverlayOrigin",a.origin)("cdkConnectedOverlayOpen",a._visible)("cdkConnectedOverlayPositions",a._positions)("cdkConnectedOverlayPush",!0)("nzArrowPointAtCenter",a.nzArrowPointAtCenter)},directives:[r.pI,P.hQ,c.mk,c.PC,b.P,m.f],encapsulation:2,data:{animation:[w.$C]},changeDetection:0}),h})(),H=(()=>{class h{}return h.\u0275fac=function(e){return new(e||h)},h.\u0275mod=i.oAB({type:h}),h.\u0275inj=i.cJS({imports:[[E.vT,c.ez,r.U8,m.T,P.e4,b.g]]}),h})()}}]);