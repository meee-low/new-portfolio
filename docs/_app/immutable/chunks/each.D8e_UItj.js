import{p as j,q as z}from"./index.DkRZ5pmh.js";import{r as B}from"./scheduler.BlDD8Q_K.js";function H(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function C(e,i){e.d(1),i.delete(e.key)}function D(e,i){z(e,1,1,()=>{i.delete(e.key)})}function I(e,i){e.f(),C(e,i)}function J(e,i){e.f(),D(e,i)}function K(e,i,v,E,S,_,o,k,p,q,l,A){let d=e.length,c=_.length,f=d;const u={};for(;f--;)u[e[f].key]=f;const a=[],w=new Map,y=new Map,g=[];for(f=c;f--;){const n=A(S,_,f),s=v(n);let t=o.get(s);t?g.push(()=>t.p(n,i)):(t=q(s,n),t.c()),w.set(s,a[f]=t),s in u&&y.set(s,Math.abs(f-u[s]))}const x=new Set,M=new Set;function m(n){j(n,1),n.m(k,l),o.set(n.key,n),l=n.first,c--}for(;d&&c;){const n=a[c-1],s=e[d-1],t=n.key,h=s.key;n===s?(l=n.first,d--,c--):w.has(h)?!o.has(t)||x.has(t)?m(n):M.has(h)?d--:y.get(t)>y.get(h)?(M.add(t),m(n)):(x.add(h),d--):(p(s,o),d--)}for(;d--;){const n=e[d];w.has(n.key)||p(n,o)}for(;c;)m(a[c-1]);return B(g),a}export{J as a,C as d,H as e,I as f,K as u};
