import{s as J,n as G,r as K,b as O}from"../chunks/scheduler.iXXlly_q.js";import{S as Q,i as V,e as S,s as j,t as R,c as T,k as N,f as q,a as H,d,b as g,n as z,g as b,h as k,w as D,j as M}from"../chunks/index.CGXjPJL2.js";function W(l){var I;let i,o="Play",h,a,c="Pause",r,n,m="Record",p,f,w,u,U,_=((I=l[6])==null?void 0:I.size)+"",B,y,s,C,P=l[5].length+"",v,E,L,A;return{c(){i=S("button"),i.textContent=o,h=j(),a=S("button"),a.textContent=c,r=j(),n=S("button"),n.textContent=m,p=j(),f=S("audio"),w=j(),u=S("pre"),U=R("  audioblob="),B=R(_),y=R(`
  mediaRecorder=`),s=R(l[4]),C=R(`
  audioRecordingStreamChunks.length=`),v=R(P),E=R(`
`),this.h()},l(t){i=T(t,"BUTTON",{class:!0,"data-svelte-h":!0}),N(i)!=="svelte-1ih1sda"&&(i.textContent=o),h=q(t),a=T(t,"BUTTON",{class:!0,"data-svelte-h":!0}),N(a)!=="svelte-vf1j02"&&(a.textContent=c),r=q(t),n=T(t,"BUTTON",{class:!0,"data-svelte-h":!0}),N(n)!=="svelte-grk6ij"&&(n.textContent=m),p=q(t),f=T(t,"AUDIO",{}),H(f).forEach(d),w=q(t),u=T(t,"PRE",{});var e=H(u);U=g(e,"  audioblob="),B=g(e,_),y=g(e,`
  mediaRecorder=`),s=g(e,l[4]),C=g(e,`
  audioRecordingStreamChunks.length=`),v=g(e,P),E=g(e,`
`),e.forEach(d),this.h()},h(){z(i,"class","svelte-bqrwul"),z(a,"class","svelte-bqrwul"),z(n,"class","svelte-bqrwul"),f.controls=!0,f.hidden=!0},m(t,e){b(t,i,e),l[10](i),b(t,h,e),b(t,a,e),l[11](a),b(t,r,e),b(t,n,e),l[12](n),b(t,p,e),b(t,f,e),l[13](f),b(t,w,e),b(t,u,e),k(u,U),k(u,B),k(u,y),k(u,s),k(u,C),k(u,v),k(u,E),L||(A=[D(i,"click",l[7]),D(a,"click",l[8]),D(n,"click",l[9])],L=!0)},p(t,[e]){var F;e&64&&_!==(_=((F=t[6])==null?void 0:F.size)+"")&&M(B,_),e&16&&M(s,t[4]),e&32&&P!==(P=t[5].length+"")&&M(v,P)},i:G,o:G,d(t){t&&(d(i),d(h),d(a),d(r),d(n),d(p),d(f),d(w),d(u)),l[10](null),l[11](null),l[12](null),l[13](null),L=!1,K(A)}}}function X(l,i,o){let h,a,c,r,n,m=[],p;function f(){p&&r.play()}function w(){r.pause()}async function u(){if(!n||n.state==="inactive"){const s=await navigator.mediaDevices.getUserMedia({audio:!0});o(4,n=new MediaRecorder(s)),o(4,n.ondataavailable=C=>{m.push(C.data)},n),o(4,n.onstop=()=>{o(6,p=new Blob(m,{type:"audio/webm"})),o(5,m=[]);const C=URL.createObjectURL(p);o(3,r.src=C,r)},n),n.start(),o(2,c.textContent="Stop",c)}else n.stop(),o(2,c.textContent="Record",c)}function U(s){O[s?"unshift":"push"](()=>{a=s,o(1,a)})}function _(s){O[s?"unshift":"push"](()=>{h=s,o(0,h)})}function B(s){O[s?"unshift":"push"](()=>{c=s,o(2,c)})}function y(s){O[s?"unshift":"push"](()=>{r=s,o(3,r)})}return[h,a,c,r,n,m,p,f,w,u,U,_,B,y]}class x extends Q{constructor(i){super(),V(this,i,X,W,J,{})}}export{x as component};