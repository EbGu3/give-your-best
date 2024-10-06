import{c as ee,i as $e,e as Y,a as y,h as E,g as Q,l as rt,b as st,C as ke,P as ut,D as ct,E as U,y as dt,F as ft,G as j,H as ge,I as ie,J as be,K as we,L as K,v as et,r as z,M as vt,w as L,N as He,O as ht,o as F,x as ve,m as I,Q as ae,R as C,s as H,q as M,T as re,t as Oe,S as mt,U as pt,V as Te,W as gt,u as bt,z as se,A as Ce,X as Ae,j as yt,Y as _t,Z as St,n as J}from"./index.3b25383c.js";import{h as tt,b as zt,v as xt,e as lt}from"./dom.06ee0e24.js";import{u as wt,d as Tt,s as ye,Q as Le,a as Ct,e as Ie,_ as te,c as We,b as Ee,g as Et,f as qt,h as Ht}from"./plugin-vue_export-helper.a89cce7f.js";import{Q as je}from"./QIcon.78ab003f.js";var Mt=ee({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:l}){const{proxy:{$q:o}}=Q(),i=$e(rt,Y);if(i===Y)return console.error("QPage needs to be a deep child of QLayout"),Y;if($e(st,Y)===Y)return console.error("QPage needs to be child of QPageContainer"),Y;const r=y(()=>{const n=(i.header.space===!0?i.header.size:0)+(i.footer.space===!0?i.footer.size:0);if(typeof e.styleFn=="function"){const s=i.isContainer.value===!0?i.containerHeight.value:o.screen.height;return e.styleFn(n,s)}return{minHeight:i.isContainer.value===!0?i.containerHeight.value-n+"px":o.screen.height===0?n!==0?`calc(100vh - ${n}px)`:"100vh":o.screen.height-n+"px"}}),a=y(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>E("main",{class:a.value,style:r.value},tt(l.default))}}),Pt=ee({props:["store","barStyle","verticalBarStyle","horizontalBarStyle"],setup(e){return()=>[E("div",{class:e.store.scroll.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:e.store.onVerticalMousedown}),E("div",{class:e.store.scroll.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:e.store.onHorizontalMousedown}),ke(E("div",{ref:e.store.scroll.vertical.ref,class:e.store.scroll.vertical.thumbClass.value,style:e.store.scroll.vertical.style.value,"aria-hidden":"true"}),e.store.thumbVertDir),ke(E("div",{ref:e.store.scroll.horizontal.ref,class:e.store.scroll.horizontal.thumbClass.value,style:e.store.scroll.horizontal.style.value,"aria-hidden":"true"}),e.store.thumbHorizDir)]}});const Me={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},$t=Object.keys(Me);Me.all=!0;function De(e){const l={};for(const o of $t)e[o]===!0&&(l[o]=!0);return Object.keys(l).length===0?Me:(l.horizontal===!0?l.left=l.right=!0:l.left===!0&&l.right===!0&&(l.horizontal=!0),l.vertical===!0?l.up=l.down=!0:l.up===!0&&l.down===!0&&(l.vertical=!0),l.horizontal===!0&&l.vertical===!0&&(l.all=!0),l)}const kt=["INPUT","TEXTAREA"];function Be(e,l){return l.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof l.handler=="function"&&kt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(l.uid)===-1)}function ue(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),ut.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function _e(e,l,o){const i=we(e);let t,r=i.left-l.event.x,a=i.top-l.event.y,n=Math.abs(r),s=Math.abs(a);const u=l.direction;u.horizontal===!0&&u.vertical!==!0?t=r<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?t=a<0?"up":"down":u.up===!0&&a<0?(t="up",n>s&&(u.left===!0&&r<0?t="left":u.right===!0&&r>0&&(t="right"))):u.down===!0&&a>0?(t="down",n>s&&(u.left===!0&&r<0?t="left":u.right===!0&&r>0&&(t="right"))):u.left===!0&&r<0?(t="left",n<s&&(u.up===!0&&a<0?t="up":u.down===!0&&a>0&&(t="down"))):u.right===!0&&r>0&&(t="right",n<s&&(u.up===!0&&a<0?t="up":u.down===!0&&a>0&&(t="down")));let h=!1;if(t===void 0&&o===!1){if(l.event.isFirst===!0||l.event.lastDir===void 0)return{};t=l.event.lastDir,h=!0,t==="left"||t==="right"?(i.left-=r,n=0,r=0):(i.top-=a,s=0,a=0)}return{synthetic:h,payload:{evt:e,touch:l.event.mouse!==!0,mouse:l.event.mouse===!0,position:i,direction:t,isFirst:l.event.isFirst,isFinal:o===!0,duration:Date.now()-l.event.time,distance:{x:n,y:s},offset:{x:r,y:a},delta:{x:i.left-l.event.lastX,y:i.top-l.event.lastY}}}}let Ot=0;var Ve=ct({name:"touch-pan",beforeMount(e,{value:l,modifiers:o}){if(o.mouse!==!0&&U.has.touch!==!0)return;function i(r,a){o.mouse===!0&&a===!0?et(r):(o.stop===!0&&be(r),o.prevent===!0&&ie(r))}const t={uid:"qvtp_"+Ot++,handler:l,modifiers:o,direction:De(o),noop:dt,mouseStart(r){Be(r,t)&&ft(r)&&(j(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(r,!0))},touchStart(r){if(Be(r,t)){const a=r.target;j(t,"temp",[[a,"touchmove","move","notPassiveCapture"],[a,"touchcancel","end","passiveCapture"],[a,"touchend","end","passiveCapture"]]),t.start(r)}},start(r,a){if(U.is.firefox===!0&&ge(e,!0),t.lastEvt=r,a===!0||o.stop===!0){if(t.direction.all!==!0&&(a!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const u=r.type.indexOf("mouse")!==-1?new MouseEvent(r.type,r):new TouchEvent(r.type,r);r.defaultPrevented===!0&&ie(u),r.cancelBubble===!0&&be(u),Object.assign(u,{qKeyEvent:r.qKeyEvent,qClickOutside:r.qClickOutside,qAnchorHandled:r.qAnchorHandled,qClonedBy:r.qClonedBy===void 0?[t.uid]:r.qClonedBy.concat(t.uid)}),t.initialEvent={target:r.target,event:u}}be(r)}const{left:n,top:s}=we(r);t.event={x:n,y:s,time:Date.now(),mouse:a===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:n,lastY:s}},move(r){if(t.event===void 0)return;const a=we(r),n=a.left-t.event.x,s=a.top-t.event.y;if(n===0&&s===0)return;t.lastEvt=r;const u=t.event.mouse===!0,h=()=>{i(r,u);let c;o.preserveCursor!==!0&&o.preservecursor!==!0&&(c=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ue(),t.styleCleanup=v=>{if(t.styleCleanup=void 0,c!==void 0&&(document.documentElement.style.cursor=c),document.body.classList.remove("non-selectable"),u===!0){const w=()=>{document.body.classList.remove("no-pointer-events--children")};v!==void 0?setTimeout(()=>{w(),v()},50):w()}else v!==void 0&&v()}};if(t.event.detected===!0){t.event.isFirst!==!0&&i(r,t.event.mouse);const{payload:c,synthetic:v}=_e(r,t,!1);c!==void 0&&(t.handler(c)===!1?t.end(r):(t.styleCleanup===void 0&&t.event.isFirst===!0&&h(),t.event.lastX=c.position.left,t.event.lastY=c.position.top,t.event.lastDir=v===!0?void 0:c.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||u===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){h(),t.event.detected=!0,t.move(r);return}const _=Math.abs(n),g=Math.abs(s);_!==g&&(t.direction.horizontal===!0&&_>g||t.direction.vertical===!0&&_<g||t.direction.up===!0&&_<g&&s<0||t.direction.down===!0&&_<g&&s>0||t.direction.left===!0&&_>g&&n<0||t.direction.right===!0&&_>g&&n>0?(t.event.detected=!0,t.move(r)):t.end(r,!0))},end(r,a){if(t.event!==void 0){if(K(t,"temp"),U.is.firefox===!0&&ge(e,!1),a===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(_e(r===void 0?t.lastEvt:r,t).payload);const{payload:n}=_e(r===void 0?t.lastEvt:r,t,!0),s=()=>{t.handler(n)};t.styleCleanup!==void 0?t.styleCleanup(s):s()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,o.mouse===!0){const r=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";j(t,"main",[[e,"mousedown","mouseStart",`passive${r}`]])}U.has.touch===!0&&j(t,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,l){const o=e.__qtouchpan;o!==void 0&&(l.oldValue!==l.value&&(typeof value!="function"&&o.end(),o.handler=l.value),o.direction=De(l.modifiers))},beforeUnmount(e){const l=e.__qtouchpan;l!==void 0&&(l.event!==void 0&&l.end(),K(l,"main"),K(l,"temp"),U.is.firefox===!0&&ge(e,!1),l.styleCleanup!==void 0&&l.styleCleanup(),delete e.__qtouchpan)}});function G(e,l,o){return o<=l?l:Math.min(o,Math.max(l,e))}const Fe=["vertical","horizontal"],Se={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Qe={prevent:!0,mouse:!0,mouseAllDir:!0},Ne=e=>e>=250?50:Math.ceil(e/5);var At=ee({name:"QScrollArea",props:{...wt,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],verticalOffset:{type:Array,default:[0,0]},horizontalOffset:{type:Array,default:[0,0]},contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:l,emit:o}){const i=z(!1),t=z(!1),r=z(!1),a={vertical:z(0),horizontal:z(0)},n={vertical:{ref:z(null),position:z(0),size:z(0)},horizontal:{ref:z(null),position:z(0),size:z(0)}},{proxy:s}=Q(),u=Tt(e,s.$q);let h=null,_;const g=z(null),c=y(()=>"q-scrollarea"+(u.value===!0?" q-scrollarea--dark":""));Object.assign(a,{verticalInner:y(()=>a.vertical.value-e.verticalOffset[0]-e.verticalOffset[1]),horizontalInner:y(()=>a.horizontal.value-e.horizontalOffset[0]-e.horizontalOffset[1])}),n.vertical.percentage=y(()=>{const d=n.vertical.size.value-a.vertical.value;if(d<=0)return 0;const f=G(n.vertical.position.value/d,0,1);return Math.round(f*1e4)/1e4}),n.vertical.thumbHidden=y(()=>(e.visible===null?r.value:e.visible)!==!0&&i.value===!1&&t.value===!1||n.vertical.size.value<=a.vertical.value+1),n.vertical.thumbStart=y(()=>e.verticalOffset[0]+n.vertical.percentage.value*(a.verticalInner.value-n.vertical.thumbSize.value)),n.vertical.thumbSize=y(()=>Math.round(G(a.verticalInner.value*a.verticalInner.value/n.vertical.size.value,Ne(a.verticalInner.value),a.verticalInner.value))),n.vertical.style=y(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${n.vertical.thumbStart.value}px`,height:`${n.vertical.thumbSize.value}px`,right:`${e.horizontalOffset[1]}px`})),n.vertical.thumbClass=y(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(n.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),n.vertical.barClass=y(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(n.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),n.horizontal.percentage=y(()=>{const d=n.horizontal.size.value-a.horizontal.value;if(d<=0)return 0;const f=G(Math.abs(n.horizontal.position.value)/d,0,1);return Math.round(f*1e4)/1e4}),n.horizontal.thumbHidden=y(()=>(e.visible===null?r.value:e.visible)!==!0&&i.value===!1&&t.value===!1||n.horizontal.size.value<=a.horizontal.value+1),n.horizontal.thumbStart=y(()=>e.horizontalOffset[0]+n.horizontal.percentage.value*(a.horizontalInner.value-n.horizontal.thumbSize.value)),n.horizontal.thumbSize=y(()=>Math.round(G(a.horizontalInner.value*a.horizontalInner.value/n.horizontal.size.value,Ne(a.horizontalInner.value),a.horizontalInner.value))),n.horizontal.style=y(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[s.$q.lang.rtl===!0?"right":"left"]:`${n.horizontal.thumbStart.value}px`,width:`${n.horizontal.thumbSize.value}px`,bottom:`${e.verticalOffset[1]}px`})),n.horizontal.thumbClass=y(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(n.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),n.horizontal.barClass=y(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(n.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const v=y(()=>n.vertical.thumbHidden.value===!0&&n.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle);function w(){const d={};return Fe.forEach(f=>{const p=n[f];Object.assign(d,{[f+"Position"]:p.position.value,[f+"Percentage"]:p.percentage.value,[f+"Size"]:p.size.value,[f+"ContainerSize"]:a[f].value,[f+"ContainerInnerSize"]:a[f+"Inner"].value})}),d}const $=vt(()=>{const d=w();d.ref=s,o("scroll",d)},0);function k(d,f,p){if(Fe.includes(d)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(d==="vertical"?Ie:ye)(g.value,f,p)}function m({height:d,width:f}){let p=!1;a.vertical.value!==d&&(a.vertical.value=d,p=!0),a.horizontal.value!==f&&(a.horizontal.value=f,p=!0),p===!0&&T()}function S({position:d}){let f=!1;n.vertical.position.value!==d.top&&(n.vertical.position.value=d.top,f=!0),n.horizontal.position.value!==d.left&&(n.horizontal.position.value=d.left,f=!0),f===!0&&T()}function O({height:d,width:f}){n.horizontal.size.value!==f&&(n.horizontal.size.value=f,T()),n.vertical.size.value!==d&&(n.vertical.size.value=d,T())}function b(d,f){const p=n[f];if(d.isFirst===!0){if(p.thumbHidden.value===!0)return;_=p.position.value,t.value=!0}else if(t.value!==!0)return;d.isFinal===!0&&(t.value=!1);const W=Se[f],D=(p.size.value-a[f].value)/(a[f+"Inner"].value-p.thumbSize.value),R=d.distance[W.dist],X=_+(d.direction===W.dir?1:-1)*R*D;P(X,f)}function A(d,f){const p=n[f];if(p.thumbHidden.value!==!0){const W=f==="vertical"?e.verticalOffset[0]:e.horizontalOffset[0],D=d[Se[f].offset]-W,R=p.thumbStart.value-W;if(D<R||D>R+p.thumbSize.value){const X=D-p.thumbSize.value/2,me=G(X/(a[f+"Inner"].value-p.thumbSize.value),0,1);P(me*Math.max(0,p.size.value-a[f].value),f)}p.ref.value!==null&&p.ref.value.dispatchEvent(new MouseEvent(d.type,d))}}function T(){i.value=!0,h!==null&&clearTimeout(h),h=setTimeout(()=>{h=null,i.value=!1},e.delay),e.onScroll!==void 0&&$()}function P(d,f){g.value[Se[f].scroll]=d}let x=null;function le(){x!==null&&clearTimeout(x),x=setTimeout(()=>{x=null,r.value=!0},s.$q.platform.is.ios?50:0)}function ne(){x!==null&&(clearTimeout(x),x=null),r.value=!1}let N=null;L(()=>s.$q.lang.rtl,d=>{g.value!==null&&ye(g.value,Math.abs(n.horizontal.position.value)*(d===!0?-1:1))}),He(()=>{N={top:n.vertical.position.value,left:n.horizontal.position.value}}),ht(()=>{if(N===null)return;const d=g.value;d!==null&&(ye(d,N.left),Ie(d,N.top))}),F($.cancel),Object.assign(s,{getScrollTarget:()=>g.value,getScroll:w,getScrollPosition:()=>({top:n.vertical.position.value,left:n.horizontal.position.value}),getScrollPercentage:()=>({top:n.vertical.percentage.value,left:n.horizontal.percentage.value}),setScrollPosition:k,setScrollPercentage(d,f,p){k(d,f*(n[d].size.value-a[d].value)*(d==="horizontal"&&s.$q.lang.rtl===!0?-1:1),p)}});const he={scroll:n,thumbVertDir:[[Ve,d=>{b(d,"vertical")},void 0,{vertical:!0,...Qe}]],thumbHorizDir:[[Ve,d=>{b(d,"horizontal")},void 0,{horizontal:!0,...Qe}]],onVerticalMousedown(d){A(d,"vertical")},onHorizontalMousedown(d){A(d,"horizontal")}};return()=>E("div",{class:c.value,onMouseenter:le,onMouseleave:ne},[E("div",{ref:g,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[E("div",{class:"q-scrollarea__content absolute",style:v.value},zt(l.default,[E(Le,{debounce:0,onResize:O})])),E(Ct,{axis:"both",onScroll:S})]),E(Le,{debounce:0,onResize:m}),E(Pt,{store:he,barStyle:e.barStyle,verticalBarStyle:e.verticalBarStyle,horizontalBarStyle:e.horizontalBarStyle})])}});const Lt={class:"text-container-prin"},It={class:"text"},Wt={class:"thanks-people",id:"thanks-people"},jt={class:"row no-wrap just-cent"},Dt={class:"card-thanks"},Bt={class:"person"},Vt={class:"name"},Ft={class:"message-text"},Qt={__name:"TextPrincipal",setup(e){ve(()=>{o(),window.addEventListener("resize",o)});const l=z(100),o=()=>{const t=document.getElementById("thanks-people");l.value=t.clientWidth},i=z([{person:"Mam\xE1",text:"Me brindas tu apoyo, amor y consejos. que cada d\xEDa me transforman"},{person:"Hermano, Hermana",text:"Son mis amigos y consejeros, hacen un trabajo maravilloso como hermanos."},{person:"Rubiely",text:"Tu amor me ha hecho mucho bien. Llenas de alegr\xEDa mi coraz\xF3n. T\xFA eres el mejor regalo."}]);return(t,r)=>(I(),ae("section",Lt,[C("div",It,[H(Ee,{class:"text-container"},{default:M(()=>[H(re,{appear:"",name:"slide-fade"},{default:M(()=>[H(We,null,{default:M(()=>r[0]||(r[0]=[Oe(" Cada d\xEDa es un regalo. Motivarnos a dejar el coraz\xF3n en cada acci\xF3n y enriquecer la vida de quienes amamos y nos rodean debe volverse nuestro motivo... ")])),_:1})]),_:1})]),_:1})]),C("div",null,[H(Ee,null,{default:M(()=>[H(We,{class:"thanks-message"},{default:M(()=>r[1]||(r[1]=[Oe(" Thanks. God ")])),_:1})]),_:1})]),C("div",Wt,[H(At,{style:gt(`height: 200px; max-width: ${l.value}px;`)},{default:M(()=>[C("div",jt,[(I(!0),ae(mt,null,pt(i.value,(a,n)=>(I(),ae("div",{key:n,style:{width:"150px"},class:"q-pa-sm"},[C("section",Dt,[H(re,{appear:"",name:"simple-appear"},{default:M(()=>[C("section",null,[C("div",Bt,[C("span",Vt,Te(a.person),1)]),C("p",Ft,Te(a.text),1)])]),_:2},1024)])]))),128))])]),_:1},8,["style"])])]))}};var nt=te(Qt,[["__scopeId","data-v-cfd817ec"]]);const Nt={class:"architecture-web"},Rt={__name:"WebView",setup(e){return(l,o)=>(I(),ae("section",Nt,[H(nt),o[0]||(o[0]=C("div",{class:"img-container"},[C("img",{src:"statics/img/ir-image.jpg",class:"img"})],-1))]))}};var Xt=te(Rt,[["__scopeId","data-v-20a6f4e4"]]);const Yt={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean};function Ut({showing:e,avoidEmit:l,configureAnchorEl:o}){const{props:i,proxy:t,emit:r}=Q(),a=z(null);let n=null;function s(c){return a.value===null?!1:c===void 0||c.touches===void 0||c.touches.length<=1}const u={};o===void 0&&(Object.assign(u,{hide(c){t.hide(c)},toggle(c){t.toggle(c),c.qAnchorHandled=!0},toggleKey(c){bt(c,13)===!0&&u.toggle(c)},contextClick(c){t.hide(c),ie(c),se(()=>{t.show(c),c.qAnchorHandled=!0})},prevent:ie,mobileTouch(c){if(u.mobileCleanup(c),s(c)!==!0)return;t.hide(c),a.value.classList.add("non-selectable");const v=c.target;j(u,"anchor",[[v,"touchmove","mobileCleanup","passive"],[v,"touchend","mobileCleanup","passive"],[v,"touchcancel","mobileCleanup","passive"],[a.value,"contextmenu","prevent","notPassive"]]),n=setTimeout(()=>{n=null,t.show(c),c.qAnchorHandled=!0},300)},mobileCleanup(c){a.value.classList.remove("non-selectable"),n!==null&&(clearTimeout(n),n=null),e.value===!0&&c!==void 0&&ue()}}),o=function(c=i.contextMenu){if(i.noParentEvent===!0||a.value===null)return;let v;c===!0?t.$q.platform.is.mobile===!0?v=[[a.value,"touchstart","mobileTouch","passive"]]:v=[[a.value,"mousedown","hide","passive"],[a.value,"contextmenu","contextClick","notPassive"]]:v=[[a.value,"click","toggle","passive"],[a.value,"keyup","toggleKey","passive"]],j(u,"anchor",v)});function h(){K(u,"anchor")}function _(c){for(a.value=c;a.value.classList.contains("q-anchor--skip");)a.value=a.value.parentNode;o()}function g(){if(i.target===!1||i.target===""||t.$el.parentNode===null)a.value=null;else if(i.target===!0)_(t.$el.parentNode);else{let c=i.target;if(typeof i.target=="string")try{c=document.querySelector(i.target)}catch{c=void 0}c!=null?(a.value=c.$el||c,o()):(a.value=null,console.error(`Anchor: target "${i.target}" not found`))}}return L(()=>i.contextMenu,c=>{a.value!==null&&(h(),o(c))}),L(()=>i.target,()=>{a.value!==null&&h(),g()}),L(()=>i.noParentEvent,c=>{a.value!==null&&(c===!0?h():o())}),ve(()=>{g(),l!==!0&&i.modelValue===!0&&a.value===null&&r("update:modelValue",!1)}),F(()=>{n!==null&&clearTimeout(n),h()}),{anchorEl:a,canShow:s,anchorEvents:u}}function Kt(e,l){const o=z(null);let i;function t(n,s){const u=`${s!==void 0?"add":"remove"}EventListener`,h=s!==void 0?s:i;n!==window&&n[u]("scroll",h,Ce.passive),window[u]("scroll",h,Ce.passive),i=s}function r(){o.value!==null&&(t(o.value),o.value=null)}const a=L(()=>e.noParentEvent,()=>{o.value!==null&&(r(),l())});return F(a),{localScrollTarget:o,unconfigureScrollTarget:r,changeScrollEvent:t}}const Gt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Jt=["beforeShow","show","beforeHide","hide"];function Zt({showing:e,canShow:l,hideOnRouteChange:o,handleShow:i,handleHide:t,processOnMount:r}){const a=Q(),{props:n,emit:s,proxy:u}=a;let h;function _(m){e.value===!0?v(m):g(m)}function g(m){if(n.disable===!0||m!==void 0&&m.qAnchorHandled===!0||l!==void 0&&l(m)!==!0)return;const S=n["onUpdate:modelValue"]!==void 0;S===!0&&(s("update:modelValue",!0),h=m,se(()=>{h===m&&(h=void 0)})),(n.modelValue===null||S===!1)&&c(m)}function c(m){e.value!==!0&&(e.value=!0,s("beforeShow",m),i!==void 0?i(m):s("show",m))}function v(m){if(n.disable===!0)return;const S=n["onUpdate:modelValue"]!==void 0;S===!0&&(s("update:modelValue",!1),h=m,se(()=>{h===m&&(h=void 0)})),(n.modelValue===null||S===!1)&&w(m)}function w(m){e.value!==!1&&(e.value=!1,s("beforeHide",m),t!==void 0?t(m):s("hide",m))}function $(m){n.disable===!0&&m===!0?n["onUpdate:modelValue"]!==void 0&&s("update:modelValue",!1):m===!0!==e.value&&(m===!0?c:w)(h)}L(()=>n.modelValue,$),o!==void 0&&xt(a)===!0&&L(()=>u.$route.fullPath,()=>{o.value===!0&&e.value===!0&&v()}),r===!0&&ve(()=>{$(n.modelValue)});const k={show:g,hide:v,toggle:_};return Object.assign(u,k),k}let oe=[],ce=[];function ot(e){ce=ce.filter(l=>l!==e)}function el(e){ot(e),ce.push(e)}function Re(e){ot(e),ce.length===0&&oe.length!==0&&(oe[oe.length-1](),oe=[])}let tl=1,ll=document.body;function nl(e,l){const o=document.createElement("div");if(o.id=l!==void 0?`q-portal--${l}--${tl++}`:e,Ae.globalNodes!==void 0){const i=Ae.globalNodes.class;i!==void 0&&(o.className=i)}return ll.appendChild(o),o}function ol(e){e.remove()}const Z=[],al=ee({name:"QPortal",setup(e,{slots:l}){return()=>l.default()}});function il(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function rl(e,l,o,i){const t=z(!1),r=z(!1);let a=null;const n={},s=i==="dialog"&&il(e);function u(_){if(_===!0){Re(n),r.value=!0;return}r.value=!1,t.value===!1&&(s===!1&&a===null&&(a=nl(!1,i)),t.value=!0,Z.push(e.proxy),el(n))}function h(_){if(r.value=!1,_!==!0)return;Re(n),t.value=!1;const g=Z.indexOf(e.proxy);g!==-1&&Z.splice(g,1),a!==null&&(ol(a),a=null)}return yt(()=>{h(!0)}),e.proxy.__qPortal=!0,_t(e.proxy,"contentEl",()=>l.value),{showPortal:u,hidePortal:h,portalIsActive:t,portalIsAccessible:r,renderPortal:()=>s===!0?o():t.value===!0?[E(St,{to:a},E(al,o))]:void 0}}const ze={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function sl(e,l=()=>{},o=()=>{}){return{transitionProps:y(()=>{const i=`q-transition--${e.transitionShow||l()}`,t=`q-transition--${e.transitionHide||o()}`;return{appear:!0,enterFromClass:`${i}-enter-from`,enterActiveClass:`${i}-enter-active`,enterToClass:`${i}-enter-to`,leaveFromClass:`${t}-leave-from`,leaveActiveClass:`${t}-leave-active`,leaveToClass:`${t}-leave-to`}}),transitionStyle:y(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function ul(){let e;const l=Q();function o(){e=void 0}return He(o),F(o),{removeTick:o,registerTick(i){e=i,se(()=>{e===i&&(lt(l)===!1&&e(),e=void 0)})}}}function cl(){let e=null;const l=Q();function o(){e!==null&&(clearTimeout(e),e=null)}return He(o),F(o),{removeTimeout:o,registerTimeout(i,t){o(),lt(l)===!1&&(e=setTimeout(()=>{e=null,i()},t))}}}const{notPassiveCapture:de}=Ce,V=[];function fe(e){const l=e.target;if(l===void 0||l.nodeType===8||l.classList.contains("no-pointer-events")===!0)return;let o=Z.length-1;for(;o>=0;){const i=Z[o].$;if(i.type.name==="QTooltip"){o--;continue}if(i.type.name!=="QDialog")break;if(i.props.seamless!==!0)return;o--}for(let i=V.length-1;i>=0;i--){const t=V[i];if((t.anchorEl.value===null||t.anchorEl.value.contains(l)===!1)&&(l===document.body||t.innerRef.value!==null&&t.innerRef.value.contains(l)===!1))e.qClickOutside=!0,t.onClickOutside(e);else return}}function dl(e){V.push(e),V.length===1&&(document.addEventListener("mousedown",fe,de),document.addEventListener("touchstart",fe,de))}function Xe(e){const l=V.findIndex(o=>o===e);l!==-1&&(V.splice(l,1),V.length===0&&(document.removeEventListener("mousedown",fe,de),document.removeEventListener("touchstart",fe,de)))}let Ye,Ue;function Ke(e){const l=e.split(" ");return l.length!==2?!1:["top","center","bottom"].includes(l[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(l[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function fl(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const qe={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{qe[`${e}#ltr`]=e,qe[`${e}#rtl`]=e});function Ge(e,l){const o=e.split(" ");return{vertical:o[0],horizontal:qe[`${o[1]}#${l===!0?"rtl":"ltr"}`]}}function vl(e,l){let{top:o,left:i,right:t,bottom:r,width:a,height:n}=e.getBoundingClientRect();return l!==void 0&&(o-=l[1],i-=l[0],r+=l[1],t+=l[0],a+=l[0],n+=l[1]),{top:o,bottom:r,height:n,left:i,right:t,width:a,middle:i+(t-i)/2,center:o+(r-o)/2}}function hl(e,l,o){let{top:i,left:t}=e.getBoundingClientRect();return i+=l.top,t+=l.left,o!==void 0&&(i+=o[1],t+=o[0]),{top:i,bottom:i+1,height:1,left:t,right:t+1,width:1,middle:t,center:i}}function ml(e,l){return{top:0,center:l/2,bottom:l,left:0,middle:e/2,right:e}}function Je(e,l,o,i){return{top:e[o.vertical]-l[i.vertical],left:e[o.horizontal]-l[i.horizontal]}}function at(e,l=0){if(e.targetEl===null||e.anchorEl===null||l>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{at(e,l+1)},10);return}const{targetEl:o,offset:i,anchorEl:t,anchorOrigin:r,selfOrigin:a,absoluteOffset:n,fit:s,cover:u,maxHeight:h,maxWidth:_}=e;if(U.is.ios===!0&&window.visualViewport!==void 0){const A=document.body.style,{offsetLeft:T,offsetTop:P}=window.visualViewport;T!==Ye&&(A.setProperty("--q-pe-left",T+"px"),Ye=T),P!==Ue&&(A.setProperty("--q-pe-top",P+"px"),Ue=P)}const{scrollLeft:g,scrollTop:c}=o,v=n===void 0?vl(t,u===!0?[0,0]:i):hl(t,n,i);Object.assign(o.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:_,maxHeight:h,visibility:"visible"});const{offsetWidth:w,offsetHeight:$}=o,{elWidth:k,elHeight:m}=s===!0||u===!0?{elWidth:Math.max(v.width,w),elHeight:u===!0?Math.max(v.height,$):$}:{elWidth:w,elHeight:$};let S={maxWidth:_,maxHeight:h};(s===!0||u===!0)&&(S.minWidth=v.width+"px",u===!0&&(S.minHeight=v.height+"px")),Object.assign(o.style,S);const O=ml(k,m);let b=Je(v,O,r,a);if(n===void 0||i===void 0)xe(b,v,O,r,a);else{const{top:A,left:T}=b;xe(b,v,O,r,a);let P=!1;if(b.top!==A){P=!0;const x=2*i[1];v.center=v.top-=x,v.bottom-=x+2}if(b.left!==T){P=!0;const x=2*i[0];v.middle=v.left-=x,v.right-=x+2}P===!0&&(b=Je(v,O,r,a),xe(b,v,O,r,a))}S={top:b.top+"px",left:b.left+"px"},b.maxHeight!==void 0&&(S.maxHeight=b.maxHeight+"px",v.height>b.maxHeight&&(S.minHeight=S.maxHeight)),b.maxWidth!==void 0&&(S.maxWidth=b.maxWidth+"px",v.width>b.maxWidth&&(S.minWidth=S.maxWidth)),Object.assign(o.style,S),o.scrollTop!==c&&(o.scrollTop=c),o.scrollLeft!==g&&(o.scrollLeft=g)}function xe(e,l,o,i,t){const r=o.bottom,a=o.right,n=Et(),s=window.innerHeight-n,u=document.body.clientWidth;if(e.top<0||e.top+r>s)if(t.vertical==="center")e.top=l[i.vertical]>s/2?Math.max(0,s-r):0,e.maxHeight=Math.min(r,s);else if(l[i.vertical]>s/2){const h=Math.min(s,i.vertical==="center"?l.center:i.vertical===t.vertical?l.bottom:l.top);e.maxHeight=Math.min(r,h),e.top=Math.max(0,h-r)}else e.top=Math.max(0,i.vertical==="center"?l.center:i.vertical===t.vertical?l.top:l.bottom),e.maxHeight=Math.min(r,s-e.top);if(e.left<0||e.left+a>u)if(e.maxWidth=Math.min(a,u),t.horizontal==="middle")e.left=l[i.horizontal]>u/2?Math.max(0,u-a):0;else if(l[i.horizontal]>u/2){const h=Math.min(u,i.horizontal==="middle"?l.middle:i.horizontal===t.horizontal?l.right:l.left);e.maxWidth=Math.min(a,h),e.left=Math.max(0,h-e.maxWidth)}else e.left=Math.max(0,i.horizontal==="middle"?l.middle:i.horizontal===t.horizontal?l.left:l.right),e.maxWidth=Math.min(a,u-e.left)}var pl=ee({name:"QTooltip",inheritAttrs:!1,props:{...Yt,...Gt,...ze,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{...ze.transitionShow,default:"jump-down"},transitionHide:{...ze.transitionHide,default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:Ke},self:{type:String,default:"top middle",validator:Ke},offset:{type:Array,default:()=>[14,14],validator:fl},scrollTarget:qt,delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...Jt],setup(e,{slots:l,emit:o,attrs:i}){let t,r;const a=Q(),{proxy:{$q:n}}=a,s=z(null),u=z(!1),h=y(()=>Ge(e.anchor,n.lang.rtl)),_=y(()=>Ge(e.self,n.lang.rtl)),g=y(()=>e.persistent!==!0),{registerTick:c,removeTick:v}=ul(),{registerTimeout:w}=cl(),{transitionProps:$,transitionStyle:k}=sl(e),{localScrollTarget:m,changeScrollEvent:S,unconfigureScrollTarget:O}=Kt(e,X),{anchorEl:b,canShow:A,anchorEvents:T}=Ut({showing:u,configureAnchorEl:R}),{show:P,hide:x}=Zt({showing:u,canShow:A,handleShow:he,handleHide:d,hideOnRouteChange:g,processOnMount:!0});Object.assign(T,{delayShow:W,delayHide:D});const{showPortal:le,hidePortal:ne,renderPortal:N}=rl(a,s,it,"tooltip");if(n.platform.is.mobile===!0){const q={anchorEl:b,innerRef:s,onClickOutside(B){return x(B),B.target.classList.contains("q-dialog__backdrop")&&et(B),!0}},pe=y(()=>e.modelValue===null&&e.persistent!==!0&&u.value===!0);L(pe,B=>{(B===!0?dl:Xe)(q)}),F(()=>{Xe(q)})}function he(q){le(),c(()=>{r=new MutationObserver(()=>p()),r.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),p(),X()}),t===void 0&&(t=L(()=>n.screen.width+"|"+n.screen.height+"|"+e.self+"|"+e.anchor+"|"+n.lang.rtl,p)),w(()=>{le(!0),o("show",q)},e.transitionDuration)}function d(q){v(),ne(),f(),w(()=>{ne(!0),o("hide",q)},e.transitionDuration)}function f(){r!==void 0&&(r.disconnect(),r=void 0),t!==void 0&&(t(),t=void 0),O(),K(T,"tooltipTemp")}function p(){at({targetEl:s.value,offset:e.offset,anchorEl:b.value,anchorOrigin:h.value,selfOrigin:_.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function W(q){if(n.platform.is.mobile===!0){ue(),document.body.classList.add("non-selectable");const pe=b.value,B=["touchmove","touchcancel","touchend","click"].map(Pe=>[pe,Pe,"delayHide","passiveCapture"]);j(T,"tooltipTemp",B)}w(()=>{P(q)},e.delay)}function D(q){n.platform.is.mobile===!0&&(K(T,"tooltipTemp"),ue(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),w(()=>{x(q)},e.hideDelay)}function R(){if(e.noParentEvent===!0||b.value===null)return;const q=n.platform.is.mobile===!0?[[b.value,"touchstart","delayShow","passive"]]:[[b.value,"mouseenter","delayShow","passive"],[b.value,"mouseleave","delayHide","passive"]];j(T,"anchor",q)}function X(){if(b.value!==null||e.scrollTarget!==void 0){m.value=Ht(b.value,e.scrollTarget);const q=e.noParentEvent===!0?p:x;S(m.value,q)}}function me(){return u.value===!0?E("div",{...i,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",i.class],style:[i.style,k.value],role:"tooltip"},tt(l.default)):null}function it(){return E(re,$.value,me)}return F(f),Object.assign(a.proxy,{updatePosition:p}),N}});const gl={class:"text"},bl={__name:"ToolTipE",props:{text:String},setup(e){return(l,o)=>(I(),J(pl,{anchor:"center end",self:"center start"},{default:M(()=>[C("span",gl,Te(e.text),1)]),_:1}))}};var Ze=te(bl,[["__scopeId","data-v-f7fe1d52"]]);const yl={class:"menu-left"},_l={class:"options"},Sl={__name:"LeftMenu",setup(e){return(l,o)=>(I(),J(re,{appear:"",name:"simple-appear"},{default:M(()=>[C("section",yl,[H(Ee,{class:"principal"},{default:M(()=>[H(je,{name:"las la-campground",class:"icon icon-principal",size:"sm"},{default:M(()=>[H(Ze,{text:"Inicio"})]),_:1}),o[0]||(o[0]=C("div",{class:"line"},null,-1))]),_:1}),C("div",_l,[H(je,{size:"sm",name:"las la-book",class:"icon-option"},{default:M(()=>[H(Ze,{text:"Contenido"})]),_:1})])])]),_:1}))}};var zl=te(Sl,[["__scopeId","data-v-2db2eb8e"]]);const xl=Object.assign({name:"IndexPage"},{__name:"IndexPage",setup(e){const l=z(!0);ve(()=>{window.addEventListener("resize",o)});const o=()=>{l.value=window.innerWidth>620};return(i,t)=>(I(),J(Mt,{class:"architecture"},{default:M(()=>[H(zl),C("section",null,[l.value?(I(),J(Xt,{key:0})):(I(),J(nt,{key:1}))])]),_:1}))}});var ql=te(xl,[["__scopeId","data-v-2ddfe7a4"]]);export{ql as default};