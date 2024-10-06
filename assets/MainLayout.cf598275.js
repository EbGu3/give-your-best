import{Q as T,g as B,a as U,_ as E,b as K,c as M}from"./plugin-vue_export-helper.a89cce7f.js";import{c as $,a as r,h as c,i as N,e as x,r as h,w as z,o as G,g as F,l as O,p as j,b as J,d as A,f as q,j as D,k as X,m as Y,n as Z,q as b,s as _,t as W}from"./index.3b25383c.js";import{h as k,a as ee,b as te}from"./dom.06ee0e24.js";var ae=$({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:m}){const l=r(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>c("div",{class:l.value,role:"toolbar"},k(m.default))}}),ne=$({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:m,emit:l}){const{proxy:{$q:n}}=F(),o=N(O,x);if(o===x)return console.error("QHeader needs to be child of QLayout"),x;const i=h(parseInt(e.heightHint,10)),d=h(!0),w=r(()=>e.reveal===!0||o.view.value.indexOf("H")!==-1||n.platform.is.ios&&o.isContainer.value===!0),g=r(()=>{if(e.modelValue!==!0)return 0;if(w.value===!0)return d.value===!0?i.value:0;const t=i.value-o.scroll.value.position;return t>0?t:0}),u=r(()=>e.modelValue!==!0||w.value===!0&&d.value!==!0),Q=r(()=>e.modelValue===!0&&u.value===!0&&e.reveal===!0),C=r(()=>"q-header q-layout__section--marginal "+(w.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),H=r(()=>{const t=o.rows.value.top,v={};return t[0]==="l"&&o.left.space===!0&&(v[n.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),t[2]==="r"&&o.right.space===!0&&(v[n.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),v});function f(t,v){o.update("header",t,v)}function y(t,v){t.value!==v&&(t.value=v)}function R({height:t}){y(i,t),f("size",t)}function P(t){Q.value===!0&&y(d,!0),l("focusin",t)}z(()=>e.modelValue,t=>{f("space",t),y(d,!0),o.animate()}),z(g,t=>{f("offset",t)}),z(()=>e.reveal,t=>{t===!1&&y(d,e.modelValue)}),z(d,t=>{o.animate(),l("reveal",t)}),z(o.scroll,t=>{e.reveal===!0&&y(d,t.direction==="up"||t.position<=e.revealOffset||t.position-t.inflectionPoint<100)});const L={};return o.instances.header=L,e.modelValue===!0&&f("size",i.value),f("space",e.modelValue),f("offset",g.value),G(()=>{o.instances.header===L&&(o.instances.header=void 0,f("size",0),f("offset",0),f("space",!1))}),()=>{const t=ee(m.default,[]);return e.elevated===!0&&t.push(c("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(c(T,{debounce:0,onResize:R})),c("header",{class:C.value,style:H.value,onFocusin:P},t)}}}),oe=$({name:"QPageContainer",setup(e,{slots:m}){const{proxy:{$q:l}}=F(),n=N(O,x);if(n===x)return console.error("QPageContainer needs to be child of QLayout"),x;j(J,!0);const o=r(()=>{const i={};return n.header.space===!0&&(i.paddingTop=`${n.header.size}px`),n.right.space===!0&&(i[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(i.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(i[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),i});return()=>c("div",{class:"q-page-container",style:o.value},k(m.default))}}),le=$({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:m,emit:l}){const{proxy:{$q:n}}=F(),o=h(null),i=h(n.screen.height),d=h(e.container===!0?0:n.screen.width),w=h({position:0,direction:"down",inflectionPoint:0}),g=h(0),u=h(A.value===!0?0:B()),Q=r(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),C=r(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),H=r(()=>u.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),f=r(()=>u.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function y(a){if(e.container===!0||document.qScrollPrevented!==!0){const s={position:a.position.top,direction:a.direction,directionChanged:a.directionChanged,inflectionPoint:a.inflectionPoint.top,delta:a.delta.top};w.value=s,e.onScroll!==void 0&&l("scroll",s)}}function R(a){const{height:s,width:p}=a;let S=!1;i.value!==s&&(S=!0,i.value=s,e.onScrollHeight!==void 0&&l("scrollHeight",s),L()),d.value!==p&&(S=!0,d.value=p),S===!0&&e.onResize!==void 0&&l("resize",a)}function P({height:a}){g.value!==a&&(g.value=a,L())}function L(){if(e.container===!0){const a=i.value>g.value?B():0;u.value!==a&&(u.value=a)}}let t=null;const v={instances:{},view:r(()=>e.view),isContainer:r(()=>e.container),rootRef:o,height:i,containerHeight:g,scrollbarWidth:u,totalWidth:r(()=>d.value+u.value),rows:r(()=>{const a=e.view.toLowerCase().split(" ");return{top:a[0].split(""),middle:a[1].split(""),bottom:a[2].split("")}}),header:q({size:0,offset:0,space:!1}),right:q({size:300,offset:0,space:!1}),footer:q({size:0,offset:0,space:!1}),left:q({size:300,offset:0,space:!1}),scroll:w,animate(){t!==null?clearTimeout(t):document.body.classList.add("q-body--layout-animate"),t=setTimeout(()=>{t=null,document.body.classList.remove("q-body--layout-animate")},155)},update(a,s,p){v[a][s]=p}};if(j(O,v),B()>0){let p=function(){a=null,s.classList.remove("hide-scrollbar")},S=function(){if(a===null){if(s.scrollHeight>n.screen.height)return;s.classList.add("hide-scrollbar")}else clearTimeout(a);a=setTimeout(p,300)},V=function(I){a!==null&&I==="remove"&&(clearTimeout(a),p()),window[`${I}EventListener`]("resize",S)},a=null;const s=document.body;z(()=>e.container!==!0?"add":"remove",V),e.container!==!0&&V("add"),D(()=>{V("remove")})}return()=>{const a=te(m.default,[c(U,{onScroll:y}),c(T,{onResize:R})]),s=c("div",{class:Q.value,style:C.value,ref:e.container===!0?void 0:o,tabindex:-1},a);return e.container===!0?c("div",{class:"q-layout-container overflow-hidden",ref:o},[c(T,{onResize:P}),c("div",{class:"absolute-full",style:H.value},[c("div",{class:"scroll",style:f.value},[s])])]):s}}});const re=Object.assign({name:"MainLayout"},{__name:"MainLayout",setup(e){return h(!1),(m,l)=>{const n=X("router-view");return Y(),Z(le,{view:"lHh Lpr lFf"},{default:b(()=>[_(ne,{elevated:""},{default:b(()=>[_(ae,{class:"toolbar"},{default:b(()=>[_(K,null,{default:b(()=>[_(M,{class:"by",caption:""},{default:b(()=>l[0]||(l[0]=[W("by")])),_:1}),_(M,{class:"my-name",caption:""},{default:b(()=>l[1]||(l[1]=[W("Jared. G")])),_:1})]),_:1})]),_:1})]),_:1}),_(oe,null,{default:b(()=>[_(n)]),_:1})]),_:1})}}});var ce=E(re,[["__scopeId","data-v-7024a50e"]]);export{ce as default};
