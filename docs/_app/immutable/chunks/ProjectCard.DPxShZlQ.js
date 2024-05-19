import{r as oe,a as ae,e as ue,u as fe,g as de,f as he,h as ge,d as ne,j as V,k as pe}from"./scheduler.UubVa_LB.js";import{t as Q,b as X,S as ie,i as re,e as I,s as A,f as E,r as P,v as C,g as _e,k,h as c,j as U,w as _,A as N,B as me,C as be,D as ve,q,c as we,u as x,a as ke,m as Me,x as O,o as ce,d as Ie}from"./index.C3OHPa4N.js";function J(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Ee(t,e){t.d(1),e.delete(t.key)}function Se(t,e){X(t,1,1,()=>{e.delete(t.key)})}function He(t,e){t.f(),Ee(t,e)}function Le(t,e){t.f(),Se(t,e)}function Ve(t,e,l,o,a,n,s,u,d,b,i,g){let f=t.length,M=n.length,m=f;const v={};for(;m--;)v[t[m].key]=m;const w=[],p=new Map,H=new Map,G=[];for(m=M;m--;){const h=g(a,n,m),T=l(h);let D=s.get(T);D?G.push(()=>D.p(h,e)):(D=b(T,h),D.c()),p.set(T,w[m]=D),T in v&&H.set(T,Math.abs(m-v[T]))}const $=new Set,F=new Set;function L(h){Q(h,1),h.m(u,i),s.set(h.key,h),i=h.first,M--}for(;f&&M;){const h=w[M-1],T=t[f-1],D=h.key,r=T.key;h===T?(i=h.first,f--,M--):p.has(r)?!s.has(D)||$.has(D)?L(h):F.has(r)?f--:H.get(D)>H.get(r)?(F.add(D),L(h)):($.add(r),f--):(d(T,s),f--)}for(;f--;){const h=t[f];p.has(h.key)||d(h,s)}for(;M;)L(w[M-1]);return oe(G),w}function je(t){let e,l,o,a,n=`<i class="fa-solid fa-xmark"></i>
      X`,s,u,d;const b=t[3].default,i=ue(b,t,t[2],null);return{c(){e=I("dialog"),l=I("div"),i&&i.c(),o=A(),a=I("button"),a.innerHTML=n,this.h()},l(g){e=E(g,"DIALOG",{class:!0});var f=P(e);l=E(f,"DIV",{});var M=P(l);i&&i.l(M),o=C(M),a=E(M,"BUTTON",{class:!0,"data-svelte-h":!0}),_e(a)!=="svelte-1x0pf8o"&&(a.innerHTML=n),M.forEach(k),f.forEach(k),this.h()},h(){c(a,"class","absolute -right-3 -top-3 h-10 w-10 rounded-full border bg-white"),a.autofocus=!0,c(e,"class","mx-auto overflow-visible p-0 lg:max-w-[80vw] xl:max-w-[60vw] svelte-2gmbsh")},m(g,f){U(g,e,f),_(e,l),i&&i.m(l,null),_(l,o),_(l,a),t[6](e),s=!0,a.focus(),u||(d=[N(a,"click",t[5]),N(l,"click",me(t[4])),N(e,"close",t[7]),N(e,"click",be(t[8]))],u=!0)},p(g,[f]){i&&i.p&&(!s||f&4)&&fe(i,b,g,g[2],s?he(b,g[2],f,null):de(g[2]),null)},i(g){s||(Q(i,g),s=!0)},o(g){X(i,g),s=!1},d(g){g&&k(e),i&&i.d(g),t[6](null),u=!1,oe(d)}}}function ye(t,e,l){let{$$slots:o={},$$scope:a}=e,{showModal:n}=e,s;function u(f){ge.call(this,t,f)}const d=()=>s.close();function b(f){ne[f?"unshift":"push"](()=>{s=f,l(1,s)})}const i=()=>l(0,n=!1),g=()=>s.close();return t.$$set=f=>{"showModal"in f&&l(0,n=f.showModal),"$$scope"in f&&l(2,a=f.$$scope)},t.$$.update=()=>{t.$$.dirty&3&&s&&n&&s.showModal()},[n,s,a,o,u,d,b,i,g]}class Pe extends ie{constructor(e){super(),re(this,e,ye,je,ae,{showModal:0})}}function Ue(t,e){for(let l=0;l<t.length;l++)if(e.includes(t[l]))return!0;return!1}function $e(t){return t?1:0}const W={BeautifulSoup4:"img/toolbadges/beautifulsoup_cropped_shrunk.png","C++":"img/toolbadges/cpp_cropped_shrunk.png",CSS:"img/toolbadges/css_cropped_shrunk.png",Diesel:"img/toolbadges/diesel.jpeg",GitHub:"img/toolbadges/GitHub-Mark-removebg-preview_cropped_shrunk.png",Golang:"img/toolbadges/golang-removebg-preview_cropped_shrunk.png","Google Forms":"img/toolbadges/forms_cropped_shrunk.png","Google Sheets":"img/toolbadges/sheets-removebg-preview_cropped_shrunk.png",HTML:"img/toolbadges/html3.webp",Julia:"img/toolbadges/julia-removebg-preview_cropped_shrunk.png","Jupyter Notebook":"img/toolbadges/jupyter_cropped_shrunk.png",Kaggle:"img/toolbadges/189_Kaggle-512.webp",Matplotlib:"img/toolbadges/matplotlib.png","MS Excel":"img/toolbadges/msexcel-removebg-preview_cropped_shrunk.png",Numpy:"img/toolbadges/numpybetter.png",Pandas:"img/toolbadges/pandas_cropped_shrunk.png",PyGame:"img/toolbadges/pygame1_cropped_shrunk.png",Python:"img/toolbadges/python-logo-only_cropped_shrunk.png",React:"img/toolbadges/react_cropped_shrunk.png",Rust:"img/toolbadges/rust_cropped_shrunk.png",Serde:"img/toolbadges/serde.png",SQLite:"img/toolbadges/sqlitepngwing.com.png",SpotifyAPI:"img/toolbadges/spotify_cropped_shrunk.png",TypeScript:"img/toolbadges/typescript_cropped_shrunk.png"};function K(t){return W.hasOwnProperty(t)?W[t]:""}function Y(t,e,l){const o=t.slice();return o[5]=e[l],o}function Z(t,e,l){const o=t.slice();return o[5]=e[l],o}function ee(t){let e,l,o,a,n,s;return{c(){e=I("div"),l=I("img"),s=A(),this.h()},l(u){e=E(u,"DIV",{class:!0});var d=P(e);l=E(d,"IMG",{class:!0,src:!0,alt:!0,title:!0}),s=C(d),d.forEach(k),this.h()},h(){c(l,"class","m-auto max-h-full max-w-full"),V(l.src,o=K(t[5]))||c(l,"src",o),c(l,"alt",a=t[5]),c(l,"title",n=t[5]),c(e,"class","max-h-12 max-w-12")},m(u,d){U(u,e,d),_(e,l),_(e,s)},p(u,d){d&2&&!V(l.src,o=K(u[5]))&&c(l,"src",o),d&2&&a!==(a=u[5])&&c(l,"alt",a),d&2&&n!==(n=u[5])&&c(l,"title",n)},d(u){u&&k(e)}}}function te(t){let e,l=J(t[1]),o=[];for(let a=0;a<l.length;a+=1)o[a]=le(Y(t,l,a));return{c(){e=I("ul");for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){e=E(a,"UL",{class:!0});var n=P(e);for(let s=0;s<o.length;s+=1)o[s].l(n);n.forEach(k),this.h()},h(){c(e,"class","mb-6")},m(a,n){U(a,e,n);for(let s=0;s<o.length;s+=1)o[s]&&o[s].m(e,null)},p(a,n){if(n&2){l=J(a[1]);let s;for(s=0;s<l.length;s+=1){const u=Y(a,l,s);o[s]?o[s].p(u,n):(o[s]=le(u),o[s].c(),o[s].m(e,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=l.length}},d(a){a&&k(e),ce(o,a)}}}function le(t){let e,l,o,a,n,s=t[5]+"",u,d;return{c(){e=I("li"),l=I("div"),o=I("img"),n=A(),u=q(s),d=A(),this.h()},l(b){e=E(b,"LI",{class:!0});var i=P(e);l=E(i,"DIV",{class:!0});var g=P(l);o=E(g,"IMG",{class:!0,src:!0,alt:!0}),g.forEach(k),n=C(i),u=x(i,s),d=C(i),i.forEach(k),this.h()},h(){c(o,"class","m-auto max-h-full max-w-full"),V(o.src,a=K(t[5]))||c(o,"src",a),c(o,"alt",""),c(l,"class","mr-2 max-h-8 max-w-8"),c(e,"class","mb-2 flex align-middle")},m(b,i){U(b,e,i),_(e,l),_(l,o),_(e,n),_(e,u),_(e,d)},p(b,i){i&2&&!V(o.src,a=K(b[5]))&&c(o,"src",a),i&2&&s!==(s=b[5]+"")&&O(u,s)},d(b){b&&k(e)}}}function se(t){let e,l,o;return{c(){e=I("a"),l=q("Source code"),this.h()},l(a){e=E(a,"A",{class:!0,href:!0});var n=P(e);l=x(n,"Source code"),n.forEach(k),this.h()},h(){c(e,"class","text-blue-600 visited:text-purple-600 hover:text-blue-800 hover:underline"),c(e,"href",o=t[0].projectUrl)},m(a,n){U(a,e,n),_(e,l)},p(a,n){n&1&&o!==(o=a[0].projectUrl)&&c(e,"href",o)},d(a){a&&k(e)}}}function Ge(t){let e,l,o,a,n,s=t[0].title+"",u,d,b,i=t[0].description+"",g,f,M,m=t[1].length>0&&te(t),v=t[0].projectUrl&&se(t);return{c(){e=I("div"),l=I("img"),a=A(),n=I("h2"),u=q(s),d=A(),b=I("p"),g=q(i),f=A(),m&&m.c(),M=A(),v&&v.c(),this.h()},l(w){e=E(w,"DIV",{class:!0});var p=P(e);l=E(p,"IMG",{src:!0,alt:!0,class:!0}),a=C(p),n=E(p,"H2",{class:!0});var H=P(n);u=x(H,s),H.forEach(k),d=C(p),b=E(p,"P",{class:!0});var G=P(b);g=x(G,i),G.forEach(k),f=C(p),m&&m.l(p),M=C(p),v&&v.l(p),p.forEach(k),this.h()},h(){V(l.src,o=t[0].imagePath)||c(l,"src",o),c(l,"alt",""),c(l,"class","mx-auto mb-4 max-h-[40vh]"),c(n,"class","mb-2 text-center text-xl font-bold"),c(b,"class","mb-6"),c(e,"class","max-h-[90vh] max-w-[80vw] px-[5%] py-6 lg:min-w-[30vw] lg:max-w-[40vw]")},m(w,p){U(w,e,p),_(e,l),_(e,a),_(e,n),_(n,u),_(e,d),_(e,b),_(b,g),_(e,f),m&&m.m(e,null),_(e,M),v&&v.m(e,null)},p(w,p){p&1&&!V(l.src,o=w[0].imagePath)&&c(l,"src",o),p&1&&s!==(s=w[0].title+"")&&O(u,s),p&1&&i!==(i=w[0].description+"")&&O(g,i),w[1].length>0?m?m.p(w,p):(m=te(w),m.c(),m.m(e,M)):m&&(m.d(1),m=null),w[0].projectUrl?v?v.p(w,p):(v=se(w),v.c(),v.m(e,null)):v&&(v.d(1),v=null)},d(w){w&&k(e),m&&m.d(),v&&v.d()}}}function De(t){let e,l,o,a,n,s,u,d=t[0].title+"",b,i,g,f=t[0].description+"",M,m,v,w,p,H,G,$,F,L=J(t[1]),h=[];for(let r=0;r<L.length;r+=1)h[r]=ee(Z(t,L,r));function T(r){t[4](r)}let D={$$slots:{default:[Ge]},$$scope:{ctx:t}};return t[2]!==void 0&&(D.showModal=t[2]),p=new Pe({props:D}),ne.push(()=>ve(p,"showModal",T)),{c(){e=I("div"),l=I("img"),n=A(),s=I("div"),u=I("h3"),b=q(d),i=A(),g=I("p"),M=q(f),m=A(),v=I("div");for(let r=0;r<h.length;r+=1)h[r].c();w=A(),we(p.$$.fragment),this.h()},l(r){e=E(r,"DIV",{class:!0,role:!0,"aria-haspopup":!0,tabindex:!0});var S=P(e);l=E(S,"IMG",{src:!0,alt:!0,class:!0}),n=C(S),s=E(S,"DIV",{class:!0});var j=P(s);u=E(j,"H3",{class:!0});var y=P(u);b=x(y,d),y.forEach(k),i=C(j),g=E(j,"P",{class:!0});var B=P(g);M=x(B,f),B.forEach(k),m=C(j),v=E(j,"DIV",{class:!0});var z=P(v);for(let R=0;R<h.length;R+=1)h[R].l(z);z.forEach(k),j.forEach(k),S.forEach(k),w=C(r),ke(p.$$.fragment,r),this.h()},h(){V(l.src,o=t[0].imagePath)||c(l,"src",o),c(l,"alt",a="Thumbnail for '"+t[0].title+"'"),c(l,"class","col-span-2 m-auto xl:col-span-1"),c(u,"class","mb-4 text-lg font-bold"),c(g,"class","mb-8"),c(v,"class","flex flex-wrap justify-around gap-6"),c(s,"class","relative col-span-3 p-4 text-left xl:col-span-1"),c(e,"class","grid h-full min-h-[230px] w-full grid-cols-5 items-stretch gap-3 border xl:grid-cols-2"),c(e,"role","button"),c(e,"aria-haspopup","dialog"),c(e,"tabindex","0")},m(r,S){U(r,e,S),_(e,l),_(e,n),_(e,s),_(s,u),_(u,b),_(s,i),_(s,g),_(g,M),_(s,m),_(s,v);for(let j=0;j<h.length;j+=1)h[j]&&h[j].m(v,null);U(r,w,S),Me(p,r,S),G=!0,$||(F=N(e,"mousedown",t[3]),$=!0)},p(r,[S]){if((!G||S&1&&!V(l.src,o=r[0].imagePath))&&c(l,"src",o),(!G||S&1&&a!==(a="Thumbnail for '"+r[0].title+"'"))&&c(l,"alt",a),(!G||S&1)&&d!==(d=r[0].title+"")&&O(b,d),(!G||S&1)&&f!==(f=r[0].description+"")&&O(M,f),S&2){L=J(r[1]);let y;for(y=0;y<L.length;y+=1){const B=Z(r,L,y);h[y]?h[y].p(B,S):(h[y]=ee(B),h[y].c(),h[y].m(v,null))}for(;y<h.length;y+=1)h[y].d(1);h.length=L.length}const j={};S&1027&&(j.$$scope={dirty:S,ctx:r}),!H&&S&4&&(H=!0,j.showModal=r[2],pe(()=>H=!1)),p.$set(j)},i(r){G||(Q(p.$$.fragment,r),G=!0)},o(r){X(p.$$.fragment,r),G=!1},d(r){r&&(k(e),k(w)),ce(h,r),Ie(p,r),$=!1,F()}}}function Te(t,e,l){let{projectInfo:o}=e,a=[];o&&o.languagesAndFrameworks&&(a=o.languagesAndFrameworks);let n=!1;const s=()=>l(2,n=!0);function u(d){n=d,l(2,n)}return t.$$set=d=>{"projectInfo"in d&&l(0,o=d.projectInfo)},[o,a,n,s,u]}class qe extends ie{constructor(e){super(),re(this,e,Te,De,ae,{projectInfo:0})}}export{qe as P,Le as a,$e as b,J as e,He as f,Ue as h,Ve as u};