var ct=Object.defineProperty;var ut=(a,t,e)=>t in a?ct(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var m=(a,t,e)=>ut(a,typeof t!="symbol"?t+"":t,e);import{s as re,n as K,r as ht,e as dt,C as V,l as mt,c as Ge,o as pt,x as ft,b as Ne}from"../chunks/scheduler.D9M2Mvwn.js";import{S as ae,i as oe,e as q,t as te,s as x,c as A,a as H,b as se,f as S,d as C,n as P,g as le,h as f,z as ne,w as Ce,j as ie,F as gt,l as E,k as Ee,m as M,G as Ue,o as O,p as D,q as R,u as X,I as bt}from"../chunks/index.B9F1qqVi.js";import{V as Y,M as yt,a as vt,b as _t,c as $t,S as wt,O as xt,W as St,C as Bt}from"../chunks/three.module.DzU_tVEa.js";import{a as Oe}from"../chunks/utils.B7PvQ2PK.js";import{w as Pt}from"../chunks/index.C8jM4Ce1.js";import{p as F}from"../chunks/index.COAxAmav.js";function Ae(a,t){const e={},s={},i={$$scope:1};let n=a.length;for(;n--;){const o=a[n],u=t[n];if(u){for(const l in o)l in u||(s[l]=1);for(const l in u)i[l]||(e[l]=u[l],i[l]=1);a[n]=u}else for(const l in o)i[l]=1}for(const o in s)o in e||(e[o]=void 0);return e}function Me(a,t){const e=a.x-t.x,s=a.y-t.y;return e*e+s*s}class We{}class Q extends We{constructor(e,s,i,n){super();m(this,"centerX");m(this,"centerY");m(this,"width");m(this,"height");this.centerX=e,this.centerY=s,this.width=i,this.height=n}static fromTopLeft(e,s,i,n){return new Q(e+i/2,s+n/2,i,n)}leftX(){return this.centerX-this.width/2}rightX(){return this.centerX+this.width/2}topY(){return this.centerY-this.height/2}bottomY(){return this.centerY+this.height/2}debugDirections(){return{left:this.leftX(),right:this.rightX(),top:this.topY(),bottom:this.bottomY()}}contains(e){const s=e.x,i=e.y;return this.leftX()<=s&&this.rightX()>=s&&this.topY()<=i&&this.bottomY()>=i}intersects(e){if(e instanceof Q)return!(this.leftX()>e.rightX()||e.leftX()>this.rightX()||this.topY()>e.bottomY()||e.topY()>this.bottomY());if(e instanceof j){if(this.contains(e.center))return!0;const s={x:Math.max(this.leftX(),Math.min(this.rightX(),e.center.x)),y:Math.max(this.topY(),Math.min(this.bottomY(),e.center.y))};return Me(e.center,s)<e.radius*e.radius}Oe(e)}closestBoundaryPointToPoint(e,s){s.x=Math.max(this.leftX(),Math.min(e.x,this.rightX())),s.y=Math.max(this.topY(),Math.min(e.y,this.bottomY()))}sqDistanceToPoint(e){const s={x:0,y:0};this.closestBoundaryPointToPoint(e,s);const i=e.x-s.x,n=e.y-s.y;return i*i+n*n}}class j extends We{constructor(e,s){super();m(this,"center");m(this,"radius");this.center=e,this.radius=s}contains(e){return Me(this.center,e)<this.radius*this.radius}intersects(e){if(e instanceof j){const s=this.radius+e.radius,i=s*s;return Me(this.center,e.center)<i}if(e instanceof Q)return e.intersects(this);Oe(e)}closestBoundaryPointToPoint(e,s){const i=e.x-this.center.x,n=e.y-this.center.y,o=Math.sqrt(i*i+n*n);o<=1e-4&&(s.x=this.center.x,s.y=this.center.y);const u=this.radius/o;s.x=this.center.x+e.x*u,s.y=this.center.y+e.y*u}sqDistanceToPoint(e){const s=e.x-this.center.x,i=e.y-this.center.y,n=s*s+i*i;return Math.pow(Math.sqrt(n)-this.radius,2)}}class Ze{}class ze extends Ze{constructor(e){super();m(this,"elements",[]);m(this,"accessFunc");this.accessFunc=e}push(e){this.elements.push(e)}query(e){return this.elements.filter(s=>e.contains(this.accessFunc(s)))}queryAll(){return this.elements}rebalance(){}}class W extends Ze{constructor(e,s,i){super();m(this,"elements",[]);m(this,"accessFunc");m(this,"capacity");m(this,"boundaryBox");m(this,"subdivisions");this.accessFunc=s,this.capacity=i,this.boundaryBox=e}push(e){if(this.elements.length<=this.capacity){this.elements.push(e);return}if(typeof this.subdivisions>"u"&&(this.subdivisions={ne:new W(new Q((this.boundaryBox.centerX+this.boundaryBox.rightX())/2,(this.boundaryBox.centerY+this.boundaryBox.topY())/2,this.boundaryBox.width/2,this.boundaryBox.height/2),this.accessFunc,this.capacity),nw:new W(new Q((this.boundaryBox.centerX+this.boundaryBox.leftX())/2,(this.boundaryBox.centerY+this.boundaryBox.topY())/2,this.boundaryBox.width/2,this.boundaryBox.height/2),this.accessFunc,this.capacity),se:new W(new Q((this.boundaryBox.centerX+this.boundaryBox.rightX())/2,(this.boundaryBox.centerY+this.boundaryBox.bottomY())/2,this.boundaryBox.width/2,this.boundaryBox.height/2),this.accessFunc,this.capacity),sw:new W(new Q((this.boundaryBox.centerX+this.boundaryBox.leftX())/2,(this.boundaryBox.centerY+this.boundaryBox.bottomY())/2,this.boundaryBox.width/2,this.boundaryBox.height/2),this.accessFunc,this.capacity)}),this.subdivisions){let s=this.accessFunc(e).x<this.boundaryBox.centerX,i=this.accessFunc(e).y<this.boundaryBox.centerY;s&&i?this.subdivisions.nw.push(e):!s&&i?this.subdivisions.ne.push(e):s&&!i?this.subdivisions.sw.push(e):!s&&!i?this.subdivisions.se.push(e):this.subdivisions.nw.push(e)}}query(e){if(!e.intersects(this.boundaryBox))return[];let s=[];return this.elements.filter(i=>e.contains(this.accessFunc(i))).forEach(i=>s.push(i)),this.subdivisions&&(this.subdivisions.ne.query(e).filter(i=>e.contains(this.accessFunc(i))).forEach(i=>s.push(i)),this.subdivisions.nw.query(e).filter(i=>e.contains(this.accessFunc(i))).forEach(i=>s.push(i)),this.subdivisions.se.query(e).filter(i=>e.contains(this.accessFunc(i))).forEach(i=>s.push(i)),this.subdivisions.sw.query(e).filter(i=>e.contains(this.accessFunc(i))).forEach(i=>s.push(i))),s}queryAll(){let e=[];return this.elements.forEach(s=>e.push(s)),this.subdivisions&&(this.subdivisions.ne.queryAll().forEach(s=>e.push(s)),this.subdivisions.nw.queryAll().forEach(s=>e.push(s)),this.subdivisions.se.queryAll().forEach(s=>e.push(s)),this.subdivisions.sw.queryAll().forEach(s=>e.push(s))),e}rebalance(e){let s=e??this;if(this.elements.forEach((i,n)=>{this.boundaryBox.contains(this.accessFunc(i))||(this.elements.splice(n,1),s.push(i))}),this.subdivisions&&(this.subdivisions.ne.rebalance(s),this.subdivisions.nw.rebalance(s),this.subdivisions.se.rebalance(s),this.subdivisions.sw.rebalance(s)),this.subdivisions){let i=[this.subdivisions.ne,this.subdivisions.nw,this.subdivisions.se,this.subdivisions.sw],n=i.reduce((u,l)=>u+l.elements.length,0),o=i.every(u=>typeof u.subdivisions>"u");n===0&&o&&(this.subdivisions=void 0)}}}const De={maxSpeed:3,minSpeed:2,neighborRange:20,protectedRange:2.5,obstacleRange:50,cohesionFactor:5e-4,separationFactor:.05,alignmentFactor:.05,turnFactor:.25,speedScale:1},Je={...De,numberOfBoids:300,spatialStructure:"quadtree",quadtreeCapacity:20};let w=Pt({...Je});function Ft(a,t){const e={};for(const s in t)a.hasOwnProperty(s)&&t.hasOwnProperty(s)&&a[s]!==t[s]&&(e[s]=t[s]);return e}function qt(a,t){const e={};for(const s in t)s in a&&(e[s]=a[s]);return e}class At{constructor(t,e,s,i={}){m(this,"tooCloseBBox");m(this,"neighborsBBox");m(this,"position");m(this,"heading");m(this,"futureHeadingOffset");m(this,"params");m(this,"id");this.id=t,this.position=e,this.heading=s,this.futureHeadingOffset=s.clone(),this.params={...De,...i},this.tooCloseBBox=new j(e,this.params.protectedRange),this.neighborsBBox=new j(e,this.params.neighborRange)}move(t){this.heading.copy(this.futureHeadingOffset).clampLength(this.params.minSpeed,this.params.maxSpeed).multiplyScalar(this.params.speedScale),this.position.addScaledVector(this.heading,t*60),this.tooCloseBBox.center=this.position,this.neighborsBBox.center=this.position}calculateNewHeading(t){this.futureHeadingOffset.copy(this.heading);let e=t.boidsQt.query(this.neighborsBBox),s=e.filter(l=>this.tooCloseBBox.contains(l.getPosition())),i=new Y(0,0);s.forEach(l=>{i.add(this.position).sub(l.position)});let n=new Y(0,0);e.length>0&&(e.forEach(l=>{n.add(l.heading)}),n.divideScalar(e.length));let o=new Y(0,0);e.length>0&&(e.forEach(l=>{o.add(l.position)}),o.divideScalar(e.length));let u=new Y;t.obstacles.forEach(l=>{let g=this.position.distanceToSquared(l.position),h=Math.pow(g,-l.inverseDistance)*l.attractiveStrength,$=this.position.clone().sub(l.position);u.addScaledVector($,-h)}),this.futureHeadingOffset.addScaledVector(i,this.params.separationFactor),this.futureHeadingOffset.addScaledVector(n,this.params.alignmentFactor),this.futureHeadingOffset.addScaledVector(o,this.params.cohesionFactor),this.futureHeadingOffset.add(u),this.futureHeadingOffset.clampLength(this.params.minSpeed,this.params.maxSpeed)}getPosition(){return this.position}getVelocity(){return this.heading}updateParams(t){t.neighborRange&&(this.neighborsBBox.radius=t.neighborRange),t.protectedRange&&(this.tooCloseBBox.radius=t.protectedRange),this.params={...this.params,...t}}}class Ct{constructor(t,e,s,i){m(this,"boidsQt");m(this,"boidsSprites",[]);m(this,"worldArea");m(this,"worldParams",Je);m(this,"frameCount",0);m(this,"obstacles",[]);m(this,"curId",0);this.worldArea=new Q(t,e,s*2,i*2),this.boidsQt=new W(this.worldArea,n=>n.getPosition(),this.worldParams.quadtreeCapacity),this.addObstacle({position:new Y(t,e),attractiveStrength:6e-8,inverseDistance:-1}),this.addObstacle({position:new Y(t-s/6,e),attractiveStrength:-1e-9,inverseDistance:1}),this.addObstacle({position:new Y(t+s/6,e),attractiveStrength:-1e-9,inverseDistance:1})}addBoid(t,e){let s=new At(this.curId++,t,e);this.boidsQt.push(s);let i=Et();const n=new yt({color:16777215,opacity:.6,transparent:!0});let o=new vt(i,n);o.position.x=t.x,o.position.y=t.y,o.rotateZ(e.angle()),this.boidsSprites.push(o)}getSprites(){return this.boidsSprites}updateHeadings(){this.boidsQt.queryAll().forEach(t=>{t.calculateNewHeading(this)})}move(t){if(this.frameCount++,this.boidsQt.queryAll().forEach(e=>{e.move(t),this.boidsSprites[e.id].position.x=e.getPosition().x,this.boidsSprites[e.id].position.y=e.getPosition().y,this.boidsSprites[e.id].rotation.z=e.getVelocity().angle()}),this.frameCount%180===0){let e=this.boidsQt.queryAll();this.boidsQt=new W(this.worldArea,s=>s.getPosition(),this.worldParams.quadtreeCapacity),e.forEach(s=>this.boidsQt.push(s))}else this.boidsQt.rebalance()}update(t){this.updateHeadings(),this.move(t)}addObstacle(t){this.obstacles.push(t)}destroy(){this.boidsQt=new ze(t=>t.getPosition()),this.boidsSprites=[]}updateParams(t){let e=!1;for(Ft(this.worldParams,t),this.worldParams=t;t.numberOfBoids>this.curId;){e=!0;let i=Math.random()*this.worldArea.width+this.worldArea.leftX(),n=Math.random()*this.worldArea.height+this.worldArea.topY(),o=new Y(i,n);this.addBoid(o,new Y(Math.random(),Math.random()))}if(t.numberOfBoids<this.curId){e=!0;let i=this.boidsQt.queryAll().filter(n=>n.id<t.numberOfBoids);this.reconstructSpace(i),this.boidsSprites=this.boidsSprites.slice(0,t.numberOfBoids),this.curId=t.numberOfBoids}(t.spatialStructure!==this.worldParams.spatialStructure||t.numberOfBoids!==this.worldParams.numberOfBoids)&&this.reconstructSpace(this.boidsQt.queryAll());const s=qt(t,De);return this.boidsQt.queryAll().forEach(i=>{i.updateParams(s)}),e}reconstructSpace(t){this.worldParams.spatialStructure==="array"?this.boidsQt=new ze(e=>e.getPosition()):this.worldParams.spatialStructure==="quadtree"?this.boidsQt=new W(this.worldArea,e=>e.getPosition(),this.worldParams.quadtreeCapacity):Oe(this.worldParams.spatialStructure),t.forEach(e=>this.boidsQt.push(e))}}function Et(){let a=new _t;const t=-.8,e=Math.sin(Math.acos(t)),s=1;let i=new Y(1,0).multiplyScalar(s),n=new Y(t,e).multiplyScalar(s),o=new Y(t,-e).multiplyScalar(s);return a.moveTo(i.x,i.y),a.lineTo(n.x,n.y),a.lineTo(o.x,o.y),new $t(a)}function Mt(a,t,e,s=2){let i=new wt;const n=a/t,o=t/s;let u=new xt(-o*n/2,o*n/2,o/2,-o/2,1,1e3);u.position.z=10;let l=new St({canvas:e});return l.setSize(a,t),{scene:i,camera:u,renderer:l}}function Ot(a,t,e,s,i){const n=()=>{requestAnimationFrame(n);let o=i.getDelta();a({camera:s,scene:e,renderer:t,deltatime:o}),t.render(e,s)};return n}function Dt(a){let t,e=`${a[0]}: ${a[5].toFixed(a[6])}`,s,i,n,o,u=a[1].toFixed(a[6])+"",l,g,h,$,_,c=a[2].toFixed(a[6])+"",y,B,v;return{c(){t=q("label"),s=te(e),i=x(),n=q("div"),o=q("span"),l=te(u),g=x(),h=q("input"),$=x(),_=q("span"),y=te(c),this.h()},l(d){t=A(d,"LABEL",{class:!0});var b=H(t);s=se(b,e),i=S(b),n=A(b,"DIV",{});var I=H(n);o=A(I,"SPAN",{});var T=H(o);l=se(T,u),T.forEach(C),g=S(I),h=A(I,"INPUT",{type:!0,min:!0,max:!0,step:!0}),$=S(I),_=A(I,"SPAN",{});var Z=H(_);y=se(Z,c),Z.forEach(C),I.forEach(C),b.forEach(C),this.h()},h(){P(h,"type","range"),P(h,"min",a[1]),P(h,"max",a[2]),P(h,"step",a[4]),P(t,"class","block")},m(d,b){le(d,t,b),f(t,s),f(t,i),f(t,n),f(n,o),f(o,l),f(n,g),f(n,h),ne(h,a[5]),f(n,$),f(n,_),f(_,y),B||(v=[Ce(h,"change",a[7]),Ce(h,"input",a[7])],B=!0)},p(d,[b]){b&33&&e!==(e=`${d[0]}: ${d[5].toFixed(d[6])}`)&&ie(s,e),b&2&&u!==(u=d[1].toFixed(d[6])+"")&&ie(l,u),b&2&&P(h,"min",d[1]),b&4&&P(h,"max",d[2]),b&16&&P(h,"step",d[4]),b&32&&ne(h,d[5]),b&4&&c!==(c=d[2].toFixed(d[6])+"")&&ie(y,c)},i:K,o:K,d(d){d&&C(t),B=!1,ht(v)}}}function Rt(a,t,e){let s,i=K,n=()=>(i(),i=dt(g,c=>e(5,s=c)),g);a.$$.on_destroy.push(()=>i());let{label:o}=t,{min:u}=t,{max:l}=t,{value:g}=t;n();let{step:h}=t,$=Math.ceil(-Math.log10(h));function _(){s=gt(this.value),g.set(s)}return a.$$set=c=>{"label"in c&&e(0,o=c.label),"min"in c&&e(1,u=c.min),"max"in c&&e(2,l=c.max),"value"in c&&n(e(3,g=c.value)),"step"in c&&e(4,h=c.step)},[o,u,l,g,h,s,$,_]}class k extends ae{constructor(t){super(),oe(this,t,Rt,Dt,re,{label:0,min:1,max:2,value:3,step:4})}}function Xt(a){let t,e,s,i="Array",n,o="Quadtree",u,l,g,h,$,_,c,y,B,v,d,b,I,T,Z,L,ce,N,ue,U,he,z,de,G,ee,me,Re;const Xe=[{label:"numberOfBoids",min:0,max:1e3,step:1,value:F(w,"numberOfBoids")}];let pe={};for(let r=0;r<Xe.length;r+=1)pe=V(pe,Xe[r]);l=new k({props:pe});const Ye=[{label:"quadtreeCapacity",min:1,max:100,step:1,value:F(w,"quadtreeCapacity")}];let fe={};for(let r=0;r<Ye.length;r+=1)fe=V(fe,Ye[r]);h=new k({props:fe});const Te=[{label:"speedScale",min:.1,max:10,step:.1,value:F(w,"speedScale")}];let ge={};for(let r=0;r<Te.length;r+=1)ge=V(ge,Te[r]);_=new k({props:ge});const be=[{label:"minSpeed",min:.5,max:a[0].maxSpeed,step:.01,value:F(w,"minSpeed")}];let ye={};for(let r=0;r<be.length;r+=1)ye=V(ye,be[r]);y=new k({props:ye});const ve=[{label:"maxSpeed",min:a[0].minSpeed,max:5,value:F(w,"maxSpeed"),step:.01}];let _e={};for(let r=0;r<ve.length;r+=1)_e=V(_e,ve[r]);v=new k({props:_e});const Ie=[{label:"neighborRange",min:1,max:50,step:.01,value:F(w,"neighborRange")}];let $e={};for(let r=0;r<Ie.length;r+=1)$e=V($e,Ie[r]);b=new k({props:$e});const we=[{label:"protectedRange",min:1,max:a[0].neighborRange*.9,step:.01,value:F(w,"protectedRange")}];let xe={};for(let r=0;r<we.length;r+=1)xe=V(xe,we[r]);T=new k({props:xe});const Ve=[{label:"obstacleRange",min:0,max:100,step:.01,value:F(w,"obstacleRange")}];let Se={};for(let r=0;r<Ve.length;r+=1)Se=V(Se,Ve[r]);L=new k({props:Se});const ke=[{label:"cohesionFactor",min:0,max:.001,step:1e-6,value:F(w,"cohesionFactor")}];let Be={};for(let r=0;r<ke.length;r+=1)Be=V(Be,ke[r]);N=new k({props:Be});const He=[{label:"separationFactor",min:0,max:.5,step:1e-4,value:F(w,"separationFactor")}];let Pe={};for(let r=0;r<He.length;r+=1)Pe=V(Pe,He[r]);U=new k({props:Pe});const Qe=[{label:"alignmentFactor",min:0,max:.5,step:1e-4,value:F(w,"alignmentFactor")}];let Fe={};for(let r=0;r<Qe.length;r+=1)Fe=V(Fe,Qe[r]);z=new k({props:Fe});const Le=[{label:"turnFactor",min:0,max:1,step:.01,value:F(w,"turnFactor")}];let qe={};for(let r=0;r<Le.length;r+=1)qe=V(qe,Le[r]);return G=new k({props:qe}),{c(){t=q("div"),e=q("select"),s=q("option"),s.textContent=i,n=q("option"),n.textContent=o,u=x(),E(l.$$.fragment),g=x(),E(h.$$.fragment),$=x(),E(_.$$.fragment),c=x(),E(y.$$.fragment),B=x(),E(v.$$.fragment),d=x(),E(b.$$.fragment),I=x(),E(T.$$.fragment),Z=x(),E(L.$$.fragment),ce=x(),E(N.$$.fragment),ue=x(),E(U.$$.fragment),he=x(),E(z.$$.fragment),de=x(),E(G.$$.fragment),this.h()},l(r){t=A(r,"DIV",{});var p=H(t);e=A(p,"SELECT",{class:!0,name:!0,id:!0});var J=H(e);s=A(J,"OPTION",{"data-svelte-h":!0}),Ee(s)!=="svelte-6i4yu4"&&(s.textContent=i),n=A(J,"OPTION",{"data-svelte-h":!0}),Ee(n)!=="svelte-1ktt5v1"&&(n.textContent=o),J.forEach(C),u=S(p),M(l.$$.fragment,p),g=S(p),M(h.$$.fragment,p),$=S(p),M(_.$$.fragment,p),c=S(p),M(y.$$.fragment,p),B=S(p),M(v.$$.fragment,p),d=S(p),M(b.$$.fragment,p),I=S(p),M(T.$$.fragment,p),Z=S(p),M(L.$$.fragment,p),ce=S(p),M(N.$$.fragment,p),ue=S(p),M(U.$$.fragment,p),he=S(p),M(z.$$.fragment,p),de=S(p),M(G.$$.fragment,p),p.forEach(C),this.h()},h(){s.__value="array",ne(s,s.__value),n.__value="quadtree",ne(n,n.__value),n.selected=!0,P(e,"class","rounded-sm border border-black"),P(e,"name","spatial-structure"),P(e,"id","spatial-structure"),a[0].spatialStructure===void 0&&mt(()=>a[1].call(e))},m(r,p){le(r,t,p),f(t,e),f(e,s),f(e,n),Ue(e,a[0].spatialStructure,!0),f(t,u),O(l,t,null),f(t,g),O(h,t,null),f(t,$),O(_,t,null),f(t,c),O(y,t,null),f(t,B),O(v,t,null),f(t,d),O(b,t,null),f(t,I),O(T,t,null),f(t,Z),O(L,t,null),f(t,ce),O(N,t,null),f(t,ue),O(U,t,null),f(t,he),O(z,t,null),f(t,de),O(G,t,null),ee=!0,me||(Re=Ce(e,"change",a[1]),me=!0)},p(r,[p]){p&1&&Ue(e,r[0].spatialStructure);const J={};l.$set(J);const Ke={};h.$set(Ke);const je={};_.$set(je);const et=p&1?Ae(be,[{label:"minSpeed",min:.5,max:r[0].maxSpeed,step:.01,value:F(w,"minSpeed")}]):{};y.$set(et);const tt=p&1?Ae(ve,[{label:"maxSpeed",min:r[0].minSpeed,max:5,value:F(w,"maxSpeed"),step:.01}]):{};v.$set(tt);const st={};b.$set(st);const it=p&1?Ae(we,[{label:"protectedRange",min:1,max:r[0].neighborRange*.9,step:.01,value:F(w,"protectedRange")}]):{};T.$set(it);const nt={};L.$set(nt);const rt={};N.$set(rt);const at={};U.$set(at);const ot={};z.$set(ot);const lt={};G.$set(lt)},i(r){ee||(D(l.$$.fragment,r),D(h.$$.fragment,r),D(_.$$.fragment,r),D(y.$$.fragment,r),D(v.$$.fragment,r),D(b.$$.fragment,r),D(T.$$.fragment,r),D(L.$$.fragment,r),D(N.$$.fragment,r),D(U.$$.fragment,r),D(z.$$.fragment,r),D(G.$$.fragment,r),ee=!0)},o(r){R(l.$$.fragment,r),R(h.$$.fragment,r),R(_.$$.fragment,r),R(y.$$.fragment,r),R(v.$$.fragment,r),R(b.$$.fragment,r),R(T.$$.fragment,r),R(L.$$.fragment,r),R(N.$$.fragment,r),R(U.$$.fragment,r),R(z.$$.fragment,r),R(G.$$.fragment,r),ee=!1},d(r){r&&C(t),X(l),X(h),X(_),X(y),X(v),X(b),X(T),X(L),X(N),X(U),X(z),X(G),me=!1,Re()}}}function Yt(a,t,e){let s;Ge(a,w,n=>e(0,s=n));function i(){s.spatialStructure=bt(this),w.set(s)}return[s,i]}class Tt extends ae{constructor(t){super(),oe(this,t,Yt,Xt,re,{})}}class It{constructor(t){m(this,"capacity");m(this,"head",0);m(this,"tail",0);m(this,"array");m(this,"occupancy",0);this.capacity=t,this.array=new Array(t)}push(t){this.occupancy===this.capacity&&(this.occupancy-=1,this.head=(this.head+1)%this.capacity),this.array[this.tail]=t,this.tail=(this.tail+1)%this.capacity,this.occupancy+=1}pop(){if(this.occupancy===0)return null;const t=this.array[this.head];return this.head=(this.head+1)%this.capacity,this.occupancy-=1,t}peek(){return this.occupancy===0?null:this.array[this.head]}map(t){let e=this.head,s=new Array(this.occupancy);for(let i=0;i<this.occupancy;++i)s[i]=t(this.array[e]),e=(e+1)%this.capacity;return s}reduce(t,e){let s=this.head;for(let i=0;i<this.occupancy;++i)e=t(e,this.array[s]),s=(s+1)%this.capacity;return e}toArray(){return[...this.array.slice(this.head),...this.array.slice(void 0,this.tail)]}}class Vt extends It{constructor(){super(...arguments);m(this,"_sum",0)}mean(){return this.occupancy>0?this.sum()/this.occupancy:null}sum(){return this.reduce((e,s)=>e+s,0)}}function kt(a){let t,e=Math.round(1/(a[0].mean()??-1))+"",s;return{c(){t=q("div"),s=te(e)},l(i){t=A(i,"DIV",{});var n=H(t);s=se(n,e),n.forEach(C)},m(i,n){le(i,t,n),f(t,s)},p(i,[n]){n&1&&e!==(e=Math.round(1/(i[0].mean()??-1))+"")&&ie(s,e)},i:K,o:K,d(i){i&&C(t)}}}function Ht(a,t,e){let s=new Vt(10);function i(n){s.push(n),e(0,s)}return[s,i]}class Qt extends ae{constructor(t){super(),oe(this,t,Ht,kt,re,{pushDeltatime:1})}get pushDeltatime(){return this.$$.ctx[1]}}function Lt(a){let t,e,s,i,n,o,u="",l,g,h,$,_={};return i=new Qt({props:_}),a[2](i),h=new Tt({}),{c(){t=q("div"),e=q("div"),s=q("div"),E(i.$$.fragment),n=x(),o=q("canvas"),o.innerHTML=u,l=x(),g=q("div"),E(h.$$.fragment),this.h()},l(c){t=A(c,"DIV",{class:!0});var y=H(t);e=A(y,"DIV",{class:!0});var B=H(e);s=A(B,"DIV",{class:!0});var v=H(s);M(i.$$.fragment,v),v.forEach(C),n=S(B),o=A(B,"CANVAS",{class:!0,"data-svelte-h":!0}),Ee(o)!=="svelte-1p8lv0v"&&(o.innerHTML=u),B.forEach(C),l=S(y),g=A(y,"DIV",{class:!0});var d=H(g);M(h.$$.fragment,d),d.forEach(C),y.forEach(C),this.h()},h(){P(s,"class","absolute z-10 select-none text-white"),P(o,"class","relative"),P(e,"class","relative overflow-auto md:col-span-6 lg:col-span-8"),P(g,"class","md:col-span-6 lg:col-span-4"),P(t,"class","md:grid md:grid-cols-12 md:gap-2")},m(c,y){le(c,t,y),f(t,e),f(e,s),O(i,s,null),f(e,n),f(e,o),a[3](o),f(t,l),f(t,g),O(h,g,null),$=!0},p(c,[y]){const B={};i.$set(B)},i(c){$||(D(i.$$.fragment,c),D(h.$$.fragment,c),$=!0)},o(c){R(i.$$.fragment,c),R(h.$$.fragment,c),$=!1},d(c){c&&C(t),a[2](null),X(i),a[3](null),X(h)}}}function Nt(a,t,e){let s;Ge(a,w,v=>e(11,s=v));let i,n,o,u,l,g;const h=s.numberOfBoids;let $,_,c;pt(()=>{$=800,_=600,{camera:n,renderer:o,scene:u}=Mt($,_,i,2),console.log("camera boundaries: ",{top:n.top,bottom:n.bottom,left:n.left,right:n.right}),c=new Ct(0,0,n.right-n.left,n.top-n.bottom);for(let d=0;d<h;++d){let b=Math.random()*(n.right-n.left)+n.left,I=Math.random()*(n.top-n.bottom)+n.bottom,T=new Y(b,I);c.addBoid(T,new Y(Math.random(),Math.random()))}u.add(...c.boidsSprites),l=new Bt,w.subscribe(d=>{console.log(d),c.updateParams(d)&&(u.clear(),u.add(...c.getSprites()))}),Ot(d=>{d.deltatime>0&&(g.pushDeltatime(d.deltatime),c.update(Math.min(d.deltatime,1/15)))},o,u,n,l)()}),ft(()=>{c&&c.destroy(),u&&u.clear(),l&&l.stop()});function y(v){Ne[v?"unshift":"push"](()=>{g=v,e(1,g)})}function B(v){Ne[v?"unshift":"push"](()=>{i=v,e(0,i)})}return[i,g,y,B]}class jt extends ae{constructor(t){super(),oe(this,t,Nt,Lt,re,{})}}export{jt as component};
