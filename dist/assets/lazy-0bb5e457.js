import{N as n,Q as r,R as u,w as l}from"./index-75b434bc.js";const c=n({eager:Boolean},"lazy");function m(e,o){const a=r(!1),s=u(()=>a.value||e.eager||o.value);l(o,()=>a.value=!0);function t(){e.eager||(a.value=!1)}return{isBooted:a,hasContent:s,onAfterLeave:t}}export{c as m,m as u};
