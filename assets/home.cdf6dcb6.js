import{i as Ae,a as ee,r as Ee,b as be,c as Be,d as le,u as ye,e as w,f as z,g as t,w as Q,s as Fe,o as re,n as We,h as $e,j as Pe,p as Re,k as m,l as I,m as i,q as L,t as A,v as ae,x as te,y as F,z as K,A as E,B as Ve,E as ne,T as pe,C as X,D as ze,F as ke,G as oe,H as O,I as D,J as Oe,_ as we,K as De,L as He,M as Le,N as Xe,O as Ue,P as Ge,Q as Ke,R as Ye,S as qe,U as Je,V as Ce,W as se,X as Z,Y as Qe}from"./index.3d57055d.js";var Ze=/\s/,ea=/^\s+/;function aa(l){return l&&l.slice(0,function(u){for(var n=u.length;n--&&Ze.test(u.charAt(n)););return n}(l)+1).replace(ea,"")}var me=NaN,ta=/^[-+]0x[0-9a-f]+$/i,la=/^0b[01]+$/i,sa=/^0o[0-7]+$/i,ia=parseInt;function ge(l){if(typeof l=="number")return l;if(Ae(l))return me;if(ee(l)){var u=typeof l.valueOf=="function"?l.valueOf():l;l=ee(u)?u+"":u}if(typeof l!="string")return l===0?l:+l;l=aa(l);var n=la.test(l);return n||sa.test(l)?ia(l.slice(2),n?2:8):ta.test(l)?me:+l}const ie=function(){return Ee.Date.now()};var na="Expected a function",ra=Math.max,oa=Math.min;function ua(l,u,n){var e,o,r,y,v,g,s=0,b=!1,h=!1,C=!0;if(typeof l!="function")throw new TypeError(na);function f(c){var p=e,j=o;return e=o=void 0,s=c,y=l.apply(j,p)}function N(c){var p=c-g;return g===void 0||p>=u||p<0||h&&c-s>=r}function k(){var c=ie();if(N(c))return R(c);v=setTimeout(k,function(p){var j=u-(p-g);return h?oa(j,r-(p-s)):j}(c))}function R(c){return v=void 0,C&&e?f(c):(e=o=void 0,y)}function B(){var c=ie(),p=N(c);if(e=arguments,o=this,g=c,p){if(v===void 0)return function(j){return s=j,v=setTimeout(k,u),b?f(j):y}(g);if(h)return clearTimeout(v),v=setTimeout(k,u),f(g)}return v===void 0&&(v=setTimeout(k,u)),y}return u=ge(u)||0,ee(n)&&(b=!!n.leading,r=(h="maxWait"in n)?ra(ge(n.maxWait)||0,u):r,C="trailing"in n?!!n.trailing:C),B.cancel=function(){v!==void 0&&clearTimeout(v),s=0,e=g=o=v=void 0},B.flush=function(){return v===void 0?y:R(ie())},B}function he(l,u,n){var e=!0,o=!0;if(typeof l!="function")throw new TypeError("Expected a function");return ee(n)&&(e="leading"in n?!!n.leading:e,o="trailing"in n?!!n.trailing:o),ua(l,u,{leading:e,maxWait:u,trailing:o})}const xe=Symbol("carouselContextKey"),ca=be({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},indicator:{type:Boolean,default:!0},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0}}),da=["onMouseenter","onMouseleave"],va=["onMouseenter","onClick"],fa={key:0},pa=le({name:"ElCarousel",props:ca,emits:{change:(l,u)=>[l,u].every(Be)},setup(l,{expose:u,emit:n}){const e=l,o=ye("carousel"),r=w(-1),y=w(null),v=w(!1),g=w(),s=w([]),b=z(()=>e.arrow!=="never"&&!t(k)),h=z(()=>s.value.some(a=>a.props.label.toString().length>0)),C=z(()=>{const a=[o.b(),o.m(e.direction)];return t(N)&&a.push(o.m("card")),a}),f=z(()=>{const a=[o.e("indicators"),o.em("indicators",e.direction)];return h.value&&a.push(o.em("indicators","labels")),(e.indicatorPosition==="outside"||t(N))&&a.push(o.em("indicators","outside")),a}),N=z(()=>e.type==="card"),k=z(()=>e.direction==="vertical"),R=he(a=>{W(a)},300,{trailing:!0}),B=he(a=>{(function(d){e.trigger==="hover"&&d!==r.value&&(r.value=d)})(a)},300);function c(){y.value&&(clearInterval(y.value),y.value=null)}function p(){e.interval<=0||!e.autoplay||y.value||(y.value=setInterval(()=>j(),e.interval))}const j=()=>{r.value<s.value.length-1?r.value=r.value+1:e.loop&&(r.value=0)};function W(a){if(De(a)){const $=s.value.filter(V=>V.props.name===a);$.length>0&&(a=s.value.indexOf($[0]))}if(a=Number(a),Number.isNaN(a)||a!==Math.floor(a))return;const d=s.value.length,M=r.value;r.value=a<0?e.loop?d-1:0:a>=d?e.loop?0:d-1:a,M===r.value&&H(M),T()}function H(a){s.value.forEach((d,M)=>{d.translateItem(M,r.value,a)})}function Y(){v.value=!0,e.pauseOnHover&&c()}function U(){v.value=!1,p()}function q(a){t(k)||s.value.forEach((d,M)=>{a===function($,V){var J,ue,ce,de;const G=t(s),ve=G.length;if(ve===0||!$.states.inStage)return!1;const _e=V+1,Se=V-1,fe=ve-1,Me=G[fe].states.active,Ne=G[0].states.active,je=(ue=(J=G[_e])==null?void 0:J.states)==null?void 0:ue.active,Te=(de=(ce=G[Se])==null?void 0:ce.states)==null?void 0:de.active;return V===fe&&Ne||je?"left":!!(V===0&&Me||Te)&&"right"}(d,M)&&(d.states.hover=!0)})}function x(){t(k)||s.value.forEach(a=>{a.states.hover=!1})}function _(){W(r.value+1)}function T(){c(),p()}Q(()=>r.value,(a,d)=>{H(d),d>-1&&n("change",a,d)}),Q(()=>e.autoplay,a=>{a?p():c()}),Q(()=>e.loop,()=>{W(r.value)}),Q(()=>e.interval,()=>{T()});const S=Fe();return re(async()=>{await We(),S.value=$e(g.value,()=>{H()}),e.initialIndex<s.value.length&&e.initialIndex>=0&&(r.value=e.initialIndex),p()}),Pe(()=>{c(),g.value&&S.value&&S.value.stop()}),Re(xe,{root:g,isCardType:N,isVertical:k,items:s,loop:e.loop,addItem:function(a){s.value.push(a)},removeItem:function(a){const d=s.value.findIndex(M=>M.uid===a);d!==-1&&(s.value.splice(d,1),r.value===d&&_())},setActiveItem:W}),u({setActiveItem:W,prev:function(){W(r.value-1)},next:_}),(a,d)=>(m(),I("div",{ref_key:"root",ref:g,class:F(t(C)),onMouseenter:K(Y,["stop"]),onMouseleave:K(U,["stop"])},[i("div",{class:F(t(o).e("container")),style:oe({height:a.height})},[t(b)?(m(),L(pe,{key:0,name:"carousel-arrow-left",persisted:""},{default:A(()=>[ae(i("button",{type:"button",class:F([t(o).e("arrow"),t(o).em("arrow","left")]),onMouseenter:d[0]||(d[0]=M=>q("left")),onMouseleave:x,onClick:d[1]||(d[1]=K(M=>t(R)(r.value-1),["stop"]))},[E(t(ne),null,{default:A(()=>[E(t(Ve))]),_:1})],34),[[te,(a.arrow==="always"||v.value)&&(e.loop||r.value>0)]])]),_:1})):X("v-if",!0),t(b)?(m(),L(pe,{key:1,name:"carousel-arrow-right",persisted:""},{default:A(()=>[ae(i("button",{type:"button",class:F([t(o).e("arrow"),t(o).em("arrow","right")]),onMouseenter:d[2]||(d[2]=M=>q("right")),onMouseleave:x,onClick:d[3]||(d[3]=K(M=>t(R)(r.value+1),["stop"]))},[E(t(ne),null,{default:A(()=>[E(t(ze))]),_:1})],34),[[te,(a.arrow==="always"||v.value)&&(e.loop||r.value<s.value.length-1)]])]),_:1})):X("v-if",!0),ke(a.$slots,"default")],6),a.indicatorPosition!=="none"?(m(),I("ul",{key:0,class:F(t(f))},[(m(!0),I(O,null,D(s.value,(M,$)=>(m(),I("li",{key:$,class:F([t(o).e("indicator"),t(o).em("indicator",a.direction),t(o).is("active",$===r.value)]),onMouseenter:V=>t(B)($),onClick:K(V=>function(J){r.value=J}($),["stop"])},[i("button",{class:F(t(o).e("button"))},[t(h)?(m(),I("span",fa,Oe(M.props.label),1)):X("v-if",!0)],2)],42,va))),128))],2)):X("v-if",!0)],42,da))}});var ma=we(pa,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue"]]),Ie=we(le({name:"ElCarouselItem",props:be({name:{type:String,default:""},label:{type:[String,Number],default:""}}),setup(l){const u=l,n=ye("carousel"),e=He(xe),o=Ue(),r=.83,y=w(!1),v=w(0),g=w(1),s=w(!1),b=w(!1),h=w(!1),C=w(!1),{isCardType:f,isVertical:N}=e,k=z(()=>({transform:[`${"translate"+(t(N)?"Y":"X")}(${t(v)}px)`,`scale(${t(g)})`].join(" ")})),R=(c,p,j)=>{var W;const H=t(f),Y=(W=e.items.value.length)!=null?W:Number.NaN,U=c===p;H||Ge(j)||(C.value=U||c===j),!U&&Y>2&&e.loop&&(c=function(x,_,T){const S=T-1,a=T/2;return _===0&&x===S?-1:_===S&&x===0?T:x<_-1&&_-x>=a?T+1:x>_+1&&x-_>=a?-2:x}(c,p,Y));const q=t(N);s.value=U,H?(h.value=Math.round(Math.abs(c-p))<=1,v.value=function(x,_){var T;const S=((T=e.root.value)==null?void 0:T.offsetWidth)||0;return h.value?S*(1.17*(x-_)+1)/4:x<_?-1.83*S/4:3.83*S/4}(c,p),g.value=t(s)?1:r):v.value=function(x,_,T){const S=e.root.value;return S?((T?S.offsetHeight:S.offsetWidth)||0)*(x-_):0}(c,p,q),b.value=!0};function B(){if(e&&t(f)){const c=e.items.value.findIndex(({uid:p})=>p===o.uid);e.setActiveItem(c)}}return re(()=>{e.addItem({props:u,states:Le({hover:y,translate:v,scale:g,active:s,ready:b,inStage:h,animating:C}),uid:o.uid,translateItem:R})}),Xe(()=>{e.removeItem(o.uid)}),(c,p)=>ae((m(),I("div",{class:F([t(n).e("item"),t(n).is("active",s.value),t(n).is("in-stage",h.value),t(n).is("hover",y.value),t(n).is("animating",C.value),{[t(n).em("item","card")]:t(f)}]),style:oe(t(k)),onClick:B},[t(f)?ae((m(),I("div",{key:0,class:F(t(n).e("mask"))},null,2)),[[te,!s.value]]):X("v-if",!0),ke(c.$slots,"default")],6)),[[te,b.value]])}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue"]]);const ga=Ke(ma,{CarouselItem:Ie}),ha=Ye(Ie),P=l=>(qe("data-v-09c4fbd6"),l=l(),Je(),l),ba={class:"carouselFl"},ya=["onClick"],ka=["src"],wa={key:0,class:"mask"},Ca={class:"home-container"},xa={class:"popular"},Ia=P(()=>i("div",{class:"title"},"Popular Bounty Event",-1)),_a=P(()=>i("div",{class:"more"},"View all >>",-1)),Sa={class:"popularFl"},Ma={class:"popular-img"},Na=["src"],ja=Ce('<div class="shrapnel" data-v-09c4fbd6>Write game strategy<br data-v-09c4fbd6> for Shrapnel</div><div class="tagFl" data-v-09c4fbd6><div class="tag" data-v-09c4fbd6>999 USDT</div><div class="tag exp" data-v-09c4fbd6>EXP 100</div></div><div class="heroFl" data-v-09c4fbd6><div class="hero" data-v-09c4fbd6></div><div class="name" data-v-09c4fbd6>Nintendo Switch</div>&gt; </div>',3),Ta={class:"popular recommend"},Aa=P(()=>i("div",{class:"title"},"Recommend Creator",-1)),Ea=P(()=>i("div",{class:"more"},"View all >>",-1)),Ba={class:"recommend-carousel"},Fa={class:"carousel-con"},Wa=P(()=>i("div",{class:"lf"},[i("div",{class:"hraf"}),i("div",{class:"mark"},"mark"),i("div",null,"LV1"),i("div",null,"game hero")],-1)),$a={class:"rg"},Pa=P(()=>i("div",{class:"follow"},"Follow",-1)),Ra={class:"shieldFl"},Va=P(()=>i("div",{class:"href"},[se(" The weather was very hot in"),i("br"),se(" summer. So my friends and I am"),i("br"),se(" together ")],-1)),za={class:"popular"},Oa=P(()=>i("div",{class:"title"},"Recommend Game Strategy",-1)),Da=P(()=>i("div",{class:"more"},"View all >>",-1)),Ha={class:"popularFl"},La={class:"popular-img"},Xa=["src"],Ua=Ce('<div class="shrapnel" data-v-09c4fbd6>Write game strategy<br data-v-09c4fbd6> for Shrapnel</div><div class="tagFl" data-v-09c4fbd6><div class="tag" data-v-09c4fbd6>999 USDT</div><div class="tag exp" data-v-09c4fbd6>EXP 100</div></div><div class="heroFl" data-v-09c4fbd6><div class="hero" data-v-09c4fbd6></div><div class="name" data-v-09c4fbd6>Nintendo Switch</div>&gt; </div>',3),Ga=le({name:"dashboard"}),Ka=le({...Ga,setup(l){re(()=>{});const u=w(null),n=w(null),e=["https://img.js.design/assets/img/64a9568b8b68bdce2aa506f4.jpg#cc49027560e80a451f4ed43140aa6488","https://img.js.design/assets/img/64a97a2c57a545dde1963c2a.png#188655d9d22a5cb0adbe3c9eb9323655","https://img.js.design/assets/img/64a97a4d738dc8aec930f2d1.png#e930c1c8dde1e9c699e8e0199d1d68b2","https://img.js.design/assets/img/64a97ae88bcac05a23f08cfa.jpg#2b778a02463e460c82d41d9da3f5804d","https://img.js.design/assets/img/64a97a2c57a545dde1963c2a.png#188655d9d22a5cb0adbe3c9eb9323655"],o=["https://img.js.design/assets/img/64a97ae88bcac05a23f08cfa.jpg#2b778a02463e460c82d41d9da3f5804d","https://img.js.design/assets/img/64a97a2c57a545dde1963c2a.png#188655d9d22a5cb0adbe3c9eb9323655","https://img.js.design/assets/img/64a97a4d738dc8aec930f2d1.png#e930c1c8dde1e9c699e8e0199d1d68b2"],r=w(0),y=w(e[0]),v=(g,s)=>{var b,h,C,f;g==="Carousel"?s==="prev"?(b=u==null?void 0:u.value)==null||b.prev():(h=u==null?void 0:u.value)==null||h.next():s==="prev"?(C=n==null?void 0:n.value)==null||C.prev():(f=n==null?void 0:n.value)==null||f.next()};return(g,s)=>{const b=ne,h=ha,C=ga;return m(),I("div",null,[i("div",{class:"carousel-container",style:oe({backgroundImage:`url(${e[r.value]})`})},[i("div",ba,[E(b,{size:26,color:"#8C8A87",onClick:s[0]||(s[0]=f=>v("Carousel","prev"))},{default:A(()=>[(m(),L(Z("ArrowLeftBold")))]),_:1}),E(C,{ref_key:"Carousel",ref:u,loop:!0,autoplay:!1,arrow:"never",height:"90px","indicator-position":"none"},{default:A(()=>[(m(),I(O,null,D(3,f=>E(h,{class:"el-car-item",key:f},{default:A(()=>[(m(),I(O,null,D(e,(N,k)=>i("div",{class:F(["car",r.value===k?"car-active":""]),key:k,onClick:R=>(B=>{r.value=B,y.value=e[B]})(k)},[i("img",{class:"car-img skeletion-loading",src:N},null,8,ka),r.value!==k?(m(),I("div",wa)):X("",!0)],10,ya)),64))]),_:2},1024)),64))]),_:1},512),E(b,{size:26,color:"#8C8A87",onClick:s[1]||(s[1]=f=>v("Carousel","next"))},{default:A(()=>[(m(),L(Z("ArrowRightBold")))]),_:1})])],4),i("div",Ca,[i("div",xa,[Ia,_a,i("div",Sa,[(m(),I(O,null,D(o,f=>i("div",{class:"popular-item",key:f},[i("div",Ma,[i("img",{class:"img",src:f,alt:""},null,8,Na)]),ja])),64))])]),i("div",Ta,[Aa,Ea,i("div",Ba,[E(b,{size:26,color:"#8C8A87",onClick:s[2]||(s[2]=f=>v("RecCarousel","prev"))},{default:A(()=>[(m(),L(Z("ArrowLeftBold")))]),_:1}),E(C,{ref_key:"RecCarousel",ref:n,interval:6e3,loop:!0,"indicator-position":"none",arrow:"never",type:"card",height:"200px"},{default:A(()=>[(m(),I(O,null,D(6,f=>E(h,{key:f},{default:A(()=>[i("div",Fa,[Wa,i("div",$a,[Pa,i("div",Ra,[(m(),I(O,null,D(3,N=>i("img",{class:"shield",key:N,src:"https://img.js.design/assets/img/64abe5d093bee0daace8f49d.png#ccf4721ae745c4b50e02f8db7b738123",alt:""})),64))]),Va])])]),_:2},1024)),64))]),_:1},512),E(b,{size:26,color:"#8C8A87",onClick:s[3]||(s[3]=f=>v("RecCarousel","next"))},{default:A(()=>[(m(),L(Z("ArrowRightBold")))]),_:1})])]),i("div",za,[Oa,Da,i("div",Ha,[(m(),I(O,null,D(o,f=>i("div",{class:"popular-item",key:f},[i("div",La,[i("img",{class:"img",src:f,alt:""},null,8,Xa)]),Ua])),64))])])])])}}}),qa=Qe(Ka,[["__scopeId","data-v-09c4fbd6"]]);export{qa as default};
