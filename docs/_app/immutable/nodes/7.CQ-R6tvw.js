import{s as we,n as z}from"../chunks/scheduler.BNGhfCF4.js";import{S as ke,i as Se,e as d,s as b,t as A,c as p,a as _,d as h,f as $,b as R,l as g,g as M,h as c,j as me,m as xe,y as Ae,q as he,r as N,u as j,v as H,n as S,o as Ge,p as L,w as G,x as Me}from"../chunks/index.CZuHTZHy.js";import{e as x}from"../chunks/each.ChBEH9cA.js";function nt(i){let e,t,l,r,s,o,u;return{c(){e=d("h2"),t=d("i"),r=b(),s=A(i[1]),o=b(),u=d("hr"),this.h()},l(m){e=p(m,"H2",{class:!0});var v=_(e);t=p(v,"I",{class:!0,"aria-hidden":!0}),_(t).forEach(h),r=$(v),s=R(v,i[1]),v.forEach(h),o=$(m),u=p(m,"HR",{class:!0}),this.h()},h(){g(t,"class",l=i[0]+" mr-1"),g(t,"aria-hidden","true"),g(e,"class","text-lg font-semibold uppercase"),g(u,"class","print:-mt-1.5 print:mb-1 mb-2")},m(m,v){M(m,e,v),c(e,t),c(e,r),c(e,s),M(m,o,v),M(m,u,v)},p(m,[v]){v&1&&l!==(l=m[0]+" mr-1")&&g(t,"class",l),v&2&&me(s,m[1])},i:z,o:z,d(m){m&&(h(e),h(o),h(u))}}}function at(i,e,t){let{faIcon:l}=e,{sectionTitle:r}=e;return i.$$set=s=>{"faIcon"in s&&t(0,l=s.faIcon),"sectionTitle"in s&&t(1,r=s.sectionTitle)},[l,r]}class fe extends ke{constructor(e){super(),Se(this,e,at,nt,we,{faIcon:0,sectionTitle:1})}}function Re(i,e,t){const l=i.slice();return l[2]=e[t],l}function ze(i){let e,t=x(i[0]),l=[];for(let r=0;r<t.length;r+=1)l[r]=Qe(Re(i,t,r));return{c(){e=d("ul");for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){e=p(r,"UL",{class:!0,style:!0});var s=_(e);for(let o=0;o<l.length;o+=1)l[o].l(s);s.forEach(h),this.h()},h(){g(e,"class","list-disc pl-8 grid print:leading-snug tracking-tight"),Ae(e,"grid-template-columns","repeat("+i[1]+", minmax(0, 1fr))")},m(r,s){M(r,e,s);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(e,null)},p(r,s){if(s&1){t=x(r[0]);let o;for(o=0;o<t.length;o+=1){const u=Re(r,t,o);l[o]?l[o].p(u,s):(l[o]=Qe(u),l[o].c(),l[o].m(e,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=t.length}s&2&&Ae(e,"grid-template-columns","repeat("+r[1]+", minmax(0, 1fr))")},d(r){r&&h(e),he(l,r)}}}function Qe(i){let e,t=i[2]+"",l;return{c(){e=d("li"),l=A(t),this.h()},l(r){e=p(r,"LI",{class:!0});var s=_(e);l=R(s,t),s.forEach(h),this.h()},h(){g(e,"class"," svelte-9ja709")},m(r,s){M(r,e,s),c(e,l)},p(r,s){s&1&&t!==(t=r[2]+"")&&me(l,t)},d(r){r&&h(e)}}}function it(i){let e,t=i[0]&&i[0].length>0&&ze(i);return{c(){t&&t.c(),e=xe()},l(l){t&&t.l(l),e=xe()},m(l,r){t&&t.m(l,r),M(l,e,r)},p(l,[r]){l[0]&&l[0].length>0?t?t.p(l,r):(t=ze(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:z,o:z,d(l){l&&h(e),t&&t.d(l)}}}function st(i,e,t){let{bullets:l}=e,{gridCols:r=1}=e;return i.$$set=s=>{"bullets"in s&&t(0,l=s.bullets),"gridCols"in s&&t(1,r=s.gridCols)},[l,r]}class ue extends ke{constructor(e){super(),Se(this,e,st,it,we,{bullets:0,gridCols:1})}}function rt(i){let e,t,l,r,s,o,u,m,v;return{c(){e=d("div"),t=d("h3"),l=A(i[0]),r=b(),s=d("h3"),o=A(i[1]),u=b(),m=d("h3"),v=A(i[2]),this.h()},l(I){e=p(I,"DIV",{class:!0});var C=_(e);t=p(C,"H3",{class:!0});var O=_(t);l=R(O,i[0]),O.forEach(h),r=$(C),s=p(C,"H3",{class:!0});var D=_(s);o=R(D,i[1]),D.forEach(h),u=$(C),m=p(C,"H3",{class:!0});var T=_(m);v=R(T,i[2]),T.forEach(h),C.forEach(h),this.h()},h(){g(t,"class","text-left"),g(s,"class","text-center"),g(m,"class","text-right"),g(e,"class","mx-2 grid grid-cols-3 text-nowrap font-semibold overflow-visible")},m(I,C){M(I,e,C),c(e,t),c(t,l),c(e,r),c(e,s),c(s,o),c(e,u),c(e,m),c(m,v)},p(I,[C]){C&1&&me(l,I[0]),C&2&&me(o,I[1]),C&4&&me(v,I[2])},i:z,o:z,d(I){I&&h(e)}}}function ot(i,e,t){let{left:l}=e,{center:r}=e,{right:s}=e;return i.$$set=o=>{"left"in o&&t(0,l=o.left),"center"in o&&t(1,r=o.center),"right"in o&&t(2,s=o.right)},[l,r,s]}class Ze extends ke{constructor(e){super(),Se(this,e,ot,rt,we,{left:0,center:1,right:2})}}function Ve(i,e,t){const l=i.slice();return l[1]=e[t],l}function We(i,e,t){const l=i.slice();return l[4]=e[t],l}function Je(i,e,t){const l=i.slice();return l[7]=e[t],l}function qe(i,e,t){const l=i.slice();return l[10]=e[t],l}function Ue(i){let e,t,l=i[10].label+"",r,s;return{c(){e=d("a"),t=d("i"),r=A(l),s=b(),this.h()},l(o){e=p(o,"A",{class:!0,href:!0});var u=_(e);t=p(u,"I",{class:!0}),_(t).forEach(h),r=R(u,l),s=$(u),u.forEach(h),this.h()},h(){g(t,"class",i[10].icon+" mr-1 text-teal-600 svelte-1np163l"),g(e,"class","text-nowrap svelte-1np163l"),g(e,"href",i[10].link)},m(o,u){M(o,e,u),c(e,t),c(e,r),c(e,s)},p:z,d(o){o&&h(e)}}}function Ke(i){let e,t,l,r,s,o;return t=new Ze({props:{left:i[7].position,center:i[7].company,right:i[7].periodStart+"–"+i[7].periodEnd}}),r=new ue({props:{bullets:i[7].bullets}}),{c(){e=d("div"),N(t.$$.fragment),l=b(),N(r.$$.fragment),s=b(),this.h()},l(u){e=p(u,"DIV",{class:!0});var m=_(e);j(t.$$.fragment,m),l=$(m),j(r.$$.fragment,m),s=$(m),m.forEach(h),this.h()},h(){g(e,"class","svelte-1np163l")},m(u,m){M(u,e,m),H(t,e,null),c(e,l),H(r,e,null),c(e,s),o=!0},p:z,i(u){o||(S(t.$$.fragment,u),S(r.$$.fragment,u),o=!0)},o(u){L(t.$$.fragment,u),L(r.$$.fragment,u),o=!1},d(u){u&&h(e),G(t),G(r)}}}function Ye(i){let e,t,l,r;return e=new Ze({props:{left:i[4].institution,center:i[4].degree,right:i[4].periodStart+"–"+i[4].periodEnd+(i[4].estimate?" (est.)":"")}}),l=new ue({props:{bullets:i[4].bullets}}),{c(){N(e.$$.fragment),t=b(),N(l.$$.fragment)},l(s){j(e.$$.fragment,s),t=$(s),j(l.$$.fragment,s)},m(s,o){H(e,s,o),M(s,t,o),H(l,s,o),r=!0},p:z,i(s){r||(S(e.$$.fragment,s),S(l.$$.fragment,s),r=!0)},o(s){L(e.$$.fragment,s),L(l.$$.fragment,s),r=!1},d(s){s&&h(t),G(e,s),G(l,s)}}}function Xe(i){let e,t,l=i[1].title+"",r,s,o,u=i[1].description+"",m,v,I,C,O;return I=new ue({props:{bullets:i[1].bullets}}),{c(){e=d("div"),t=d("h3"),r=A(l),s=b(),o=d("p"),m=A(u),v=b(),N(I.$$.fragment),C=b(),this.h()},l(D){e=p(D,"DIV",{class:!0});var T=_(e);t=p(T,"H3",{class:!0});var F=_(t);r=R(F,l),F.forEach(h),s=$(T),o=p(T,"P",{class:!0});var oe=_(o);m=R(oe,u),oe.forEach(h),v=$(T),j(I.$$.fragment,T),C=$(T),T.forEach(h),this.h()},h(){g(t,"class","font-semibold svelte-1np163l"),g(o,"class","ml-6 print:leading-snug svelte-1np163l"),g(e,"class"," svelte-1np163l")},m(D,T){M(D,e,T),c(e,t),c(t,r),c(e,s),c(e,o),c(o,m),c(e,v),H(I,e,null),c(e,C),O=!0},p:z,i(D){O||(S(I.$$.fragment,D),O=!0)},o(D){L(I.$$.fragment,D),O=!1},d(D){D&&h(e),G(I)}}}function ct(i){let e,t,l,r=i[0].name+"",s,o,u,m,v,I=i[0].location+"",C,O,D,T,F,oe,U,Te,Q,K,Ie,Ce,V,Y,Le,X,Pe,W,Z,De,ee,Be,J,te,ye,le,Ne,q,ne,je,ae,ge,ce=x(i[0].contact),P=[];for(let n=0;n<ce.length;n+=1)P[n]=Ue(qe(i,ce,n));F=new fe({props:{faIcon:"fa-solid fa-briefcase",sectionTitle:"Experience"}});let ie=x(i[0].workExperience),E=[];for(let n=0;n<ie.length;n+=1)E[n]=Ke(Je(i,ie,n));const et=n=>L(E[n],1,1,()=>{E[n]=null});K=new fe({props:{faIcon:"fa-solid fa-graduation-cap",sectionTitle:"Education"}});let se=x(i[0].education),w=[];for(let n=0;n<se.length;n+=1)w[n]=Ye(We(i,se,n));const tt=n=>L(w[n],1,1,()=>{w[n]=null});Y=new fe({props:{faIcon:"fa-solid fa-wrench",sectionTitle:"Projects"}});let re=x(i[0].projects),k=[];for(let n=0;n<re.length;n+=1)k[n]=Xe(Ve(i,re,n));const lt=n=>L(k[n],1,1,()=>{k[n]=null});return Z=new fe({props:{faIcon:"fa-solid fa-shapes",sectionTitle:"Skills"}}),ee=new ue({props:{bullets:i[0].skills}}),te=new fe({props:{faIcon:"fa-solid fa-certificate",sectionTitle:"Certificates and Courses"}}),le=new ue({props:{bullets:i[0].certificates.map(ft),gridCols:2}}),ne=new fe({props:{faIcon:"fa-solid fa-comments",sectionTitle:"Languages"}}),ae=new ue({props:{bullets:i[0].languages.map(ut),gridCols:2}}),{c(){e=d("article"),t=d("section"),l=d("h1"),s=A(r),o=b(),u=d("section"),m=d("p"),v=d("i"),C=A(I),O=b();for(let n=0;n<P.length;n+=1)P[n].c();D=b(),T=d("section"),N(F.$$.fragment),oe=b(),U=d("div");for(let n=0;n<E.length;n+=1)E[n].c();Te=b(),Q=d("section"),N(K.$$.fragment),Ie=b();for(let n=0;n<w.length;n+=1)w[n].c();Ce=b(),V=d("section"),N(Y.$$.fragment),Le=b(),X=d("div");for(let n=0;n<k.length;n+=1)k[n].c();Pe=b(),W=d("section"),N(Z.$$.fragment),De=b(),N(ee.$$.fragment),Be=b(),J=d("section"),N(te.$$.fragment),ye=b(),N(le.$$.fragment),Ne=b(),q=d("section"),N(ne.$$.fragment),je=b(),N(ae.$$.fragment),this.h()},l(n){e=p(n,"ARTICLE",{class:!0});var f=_(e);t=p(f,"SECTION",{class:!0});var a=_(t);l=p(a,"H1",{class:!0});var y=_(l);s=R(y,r),y.forEach(h),a.forEach(h),o=$(f),u=p(f,"SECTION",{class:!0});var de=_(u);m=p(de,"P",{class:!0});var He=_(m);v=p(He,"I",{class:!0}),_(v).forEach(h),C=R(He,I),He.forEach(h),O=$(de);for(let B=0;B<P.length;B+=1)P[B].l(de);de.forEach(h),D=$(f),T=p(f,"SECTION",{class:!0});var pe=_(T);j(F.$$.fragment,pe),oe=$(pe),U=p(pe,"DIV",{class:!0});var Oe=_(U);for(let B=0;B<E.length;B+=1)E[B].l(Oe);Oe.forEach(h),pe.forEach(h),Te=$(f),Q=p(f,"SECTION",{class:!0});var _e=_(Q);j(K.$$.fragment,_e),Ie=$(_e);for(let B=0;B<w.length;B+=1)w[B].l(_e);_e.forEach(h),Ce=$(f),V=p(f,"SECTION",{class:!0});var ve=_(V);j(Y.$$.fragment,ve),Le=$(ve),X=p(ve,"DIV",{class:!0});var Fe=_(X);for(let B=0;B<k.length;B+=1)k[B].l(Fe);Fe.forEach(h),ve.forEach(h),Pe=$(f),W=p(f,"SECTION",{class:!0});var be=_(W);j(Z.$$.fragment,be),De=$(be),j(ee.$$.fragment,be),be.forEach(h),Be=$(f),J=p(f,"SECTION",{class:!0});var $e=_(J);j(te.$$.fragment,$e),ye=$($e),j(le.$$.fragment,$e),$e.forEach(h),Ne=$(f),q=p(f,"SECTION",{class:!0});var Ee=_(q);j(ne.$$.fragment,Ee),je=$(Ee),j(ae.$$.fragment,Ee),Ee.forEach(h),f.forEach(h),this.h()},h(){g(l,"class","mb-4 text-center text-4xl uppercase font-bold tracking-wide print:mb-2 print:text-[14pt] svelte-1np163l"),g(t,"class","svelte-1np163l"),g(v,"class","fa-solid fa-location-dot aria-hidden mr-1 text-teal-600 svelte-1np163l"),g(m,"class"," svelte-1np163l"),g(u,"class","mb-10 flex max-w-full flex-wrap gap-x-4 gap-y-2 place-content-between text-xs print:mb-2 print:gap-y-1 print:text-[6pt] svelte-1np163l"),g(U,"class","grid grid-cols-1 gap-2 print:gap-1 svelte-1np163l"),g(T,"class","mb-6 print:mb-2 svelte-1np163l"),g(Q,"class","mb-6 print:mb-2 svelte-1np163l"),g(X,"class","grid grid-cols-1 gap-2 px-2 print:gap-1 svelte-1np163l"),g(V,"class","mb-6 print:mb-2 svelte-1np163l"),g(W,"class","mb-6 print:mb-2 svelte-1np163l"),g(J,"class","mb-6 print:mb-2 svelte-1np163l"),g(q,"class","mb-6 print:mb-2 svelte-1np163l"),g(e,"class","svelte-1np163l")},m(n,f){M(n,e,f),c(e,t),c(t,l),c(l,s),c(e,o),c(e,u),c(u,m),c(m,v),c(m,C),c(u,O);for(let a=0;a<P.length;a+=1)P[a]&&P[a].m(u,null);c(e,D),c(e,T),H(F,T,null),c(T,oe),c(T,U);for(let a=0;a<E.length;a+=1)E[a]&&E[a].m(U,null);c(e,Te),c(e,Q),H(K,Q,null),c(Q,Ie);for(let a=0;a<w.length;a+=1)w[a]&&w[a].m(Q,null);c(e,Ce),c(e,V),H(Y,V,null),c(V,Le),c(V,X);for(let a=0;a<k.length;a+=1)k[a]&&k[a].m(X,null);c(e,Pe),c(e,W),H(Z,W,null),c(W,De),H(ee,W,null),c(e,Be),c(e,J),H(te,J,null),c(J,ye),H(le,J,null),c(e,Ne),c(e,q),H(ne,q,null),c(q,je),H(ae,q,null),ge=!0},p(n,[f]){if(f&1){ce=x(n[0].contact);let a;for(a=0;a<ce.length;a+=1){const y=qe(n,ce,a);P[a]?P[a].p(y,f):(P[a]=Ue(y),P[a].c(),P[a].m(u,null))}for(;a<P.length;a+=1)P[a].d(1);P.length=ce.length}if(f&1){ie=x(n[0].workExperience);let a;for(a=0;a<ie.length;a+=1){const y=Je(n,ie,a);E[a]?(E[a].p(y,f),S(E[a],1)):(E[a]=Ke(y),E[a].c(),S(E[a],1),E[a].m(U,null))}for(Me(),a=ie.length;a<E.length;a+=1)et(a);Ge()}if(f&1){se=x(n[0].education);let a;for(a=0;a<se.length;a+=1){const y=We(n,se,a);w[a]?(w[a].p(y,f),S(w[a],1)):(w[a]=Ye(y),w[a].c(),S(w[a],1),w[a].m(Q,null))}for(Me(),a=se.length;a<w.length;a+=1)tt(a);Ge()}if(f&1){re=x(n[0].projects);let a;for(a=0;a<re.length;a+=1){const y=Ve(n,re,a);k[a]?(k[a].p(y,f),S(k[a],1)):(k[a]=Xe(y),k[a].c(),S(k[a],1),k[a].m(X,null))}for(Me(),a=re.length;a<k.length;a+=1)lt(a);Ge()}},i(n){if(!ge){S(F.$$.fragment,n);for(let f=0;f<ie.length;f+=1)S(E[f]);S(K.$$.fragment,n);for(let f=0;f<se.length;f+=1)S(w[f]);S(Y.$$.fragment,n);for(let f=0;f<re.length;f+=1)S(k[f]);S(Z.$$.fragment,n),S(ee.$$.fragment,n),S(te.$$.fragment,n),S(le.$$.fragment,n),S(ne.$$.fragment,n),S(ae.$$.fragment,n),ge=!0}},o(n){L(F.$$.fragment,n),E=E.filter(Boolean);for(let f=0;f<E.length;f+=1)L(E[f]);L(K.$$.fragment,n),w=w.filter(Boolean);for(let f=0;f<w.length;f+=1)L(w[f]);L(Y.$$.fragment,n),k=k.filter(Boolean);for(let f=0;f<k.length;f+=1)L(k[f]);L(Z.$$.fragment,n),L(ee.$$.fragment,n),L(te.$$.fragment,n),L(le.$$.fragment,n),L(ne.$$.fragment,n),L(ae.$$.fragment,n),ge=!1},d(n){n&&h(e),he(P,n),G(F),he(E,n),G(K),he(w,n),G(Y),he(k,n),G(Z),G(ee),G(te),G(le),G(ne),G(ae)}}}const ft=i=>i.institution+": "+i.title,ut=i=>i.language+": "+i.level;function ht(i){return[{name:"Matheus Ferreira Drumond",location:"Brasília, DF - Brazil",contact:[{label:"@meee-low",link:"https://www.github.com/meee-low/",icon:"fa-brands fa-github"},{label:"in/mfdrumond",link:"https://www.linkedin/in/mfdrumond/",icon:"fa-brands fa-linkedin"},{label:"mat_drumond@hotmail.com",link:"mailto:mat_drumon@hotmaild.com",icon:"fa fa-envelope"},{label:"+55 51 98101-6400",link:"https://wa.me/555181016400/",icon:"fa-solid fa-mobile-screen-button"},{label:"meee-low.github.io/",link:"https://meee-low.github.io/",icon:"fa-solid fa-globe"}],workExperience:[{company:"Grau Técnico Taguatinga",position:"Junior IT Technician",periodStart:"apr 2024",periodEnd:"now",bullets:["Provided technical support for our employees, general eletronics maintenance and also guided students in our computer skills interactive courses.","Developed complex spreadsheets and software to help with management and logistics, as well as some customer-facing products like a resume builder webpage."]},{company:"Gazeus Games",position:"Game Translator",periodStart:"nov 2020",periodEnd:"dec 2020",bullets:["Worked from home and translated the mobile game Top Gun Legends from English to Brazilian Portuguese."]}],education:[{institution:"UFRGS",degree:"B.S. Applied Mathematics",periodStart:"jun 2022",periodEnd:"jun 2026",estimate:!0,bullets:["Focused on data science and programming.","Scientific Initiation: Studied advanced graduate-level topics in Representation Theory (Algebra) under the guidance of Leonardo Duarte Silva, delivering weekly lectures on what I learned.","Strong background in Business and Economics from coursework completed in an Economics major before transitioning to Applied Mathematics (Economics degree not completed)."]}],accomplishments:[],certificates:[{institution:"DataCamp",title:"SQL Fundamentals"},{institution:"Yale (Coursera)",title:"Intro to Machine Learning"}],projects:[{title:"Web Portfolio",description:"",bullets:[]},{title:"Tomato Wars: What Makes Critics and Audiences Disagree on Movies?",description:"An exploration of the Rotten Tomatoes dataset with the goal of finding out critical factors that make audiences' and critics' scores diverge."}],skills:["Data Science Technologies: Python (Numpy, Pandas, Matplotlib, Seaborn, Jupyter Notebooks; basic knowledge of PyTorch); Excel (including pivot tables and Power Query); Power BI; SQL","General Programming: Git; Linux and terminal environments; SQL (SQLite, Postgres).","Web Development: HTML, JavaScript, TypeScript, CSS; Tailwind; Svelte; Django backends; Familiar with React.","Theory: Machine Learning; Statistical modeling (regression, hypothesis testing).","Soft Skills: Experienced in education, presentation, research, teaching and communicating technical concepts to non-technical audiences.","Other Programming Languages and Tools: Neovim wizard; Beginner at Go, Kotlin and Rust."],languages:[{language:"English",level:"Fluent"},{language:"Brazilian Portuguese",level:"Native"},{language:"French",level:"Basic"},{language:"Spanish",level:"Basic"}],awards:[],extraSessions:[]}]}class pt extends ke{constructor(e){super(),Se(this,e,ht,ct,we,{})}}export{pt as component};
