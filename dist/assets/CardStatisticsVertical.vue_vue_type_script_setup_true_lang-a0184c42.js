import{q as l}from"./vue3-apexcharts-fbda9a54.js";import{V as p}from"./VCardText-3b4da816.js";import{V as m}from"./VAvatar-3ee4c690.js";import{V as h}from"./VCard-1a5b2c5e.js";import{d,o as e,h as s,f as o,b as a,A as _,e as r,y as i}from"./index-5caaa453.js";const f={class:"text-lg font-weight-medium"},u={class:"text-sm"},A=d({__name:"CardStatisticsVertical",props:{title:{},color:{default:"primary"},icon:{},stats:{},height:{},series:{},chartOptions:{}},setup(c){const t=c;return(V,x)=>{const n=l;return e(),s(h,null,{default:o(()=>[a(p,{class:"d-flex flex-column pb-0"},{default:o(()=>[t.icon?(e(),s(m,{key:0,size:"42",variant:"tonal",color:t.color,icon:t.icon,class:"mb-3"},null,8,["color","icon"])):_("",!0),r("h6",f,i(t.stats),1),r("span",u,i(t.title),1)]),_:1}),a(n,{series:t.series,options:t.chartOptions,height:t.height},null,8,["series","options","height"])]),_:1})}}});export{A as _};