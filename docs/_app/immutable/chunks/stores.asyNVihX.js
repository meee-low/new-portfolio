import{d,w as s}from"./index.BDd1sOfL.js";let i=s([{label:"Python",filterEnabled:!1,baseOrder:1,orderClicked:0},{label:"Data",filterEnabled:!1,baseOrder:2,orderClicked:0},{label:"Business",filterEnabled:!1,baseOrder:3,orderClicked:0},{label:"Backend/CLI",filterEnabled:!1,baseOrder:4,orderClicked:0},{label:"Other",filterEnabled:!1,baseOrder:5,orderClicked:0},{label:"Fun",filterEnabled:!1,baseOrder:6,orderClicked:0}]),b=d(i,e=>e.some(l=>l.filterEnabled));function n(e){const l=e.some(r=>r.filterEnabled);let t=[];for(let r of e)(!l||r.filterEnabled)&&t.push(r.label);return t}let c=d(i,e=>n(e));function o(){const{subscribe:e,set:l,update:t}=s(!1);return{subscribe:e,set:a=>(typeof document<"u"&&(a?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")),typeof localStorage<"u"&&localStorage.setItem("dark",JSON.stringify(a)),l(a)),update:t}}let u=o();export{c as a,u as d,b as f,i as p};
