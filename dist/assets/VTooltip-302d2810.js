import{m as p,a as u}from"./VOverlay-da001e16.js";import{f as S}from"./forwardRefs-8348545e.js";import{N as h,at as O,aj as T,au as x,bw as w,R as e,r as R,t as d,X as k,b as A}from"./index-5caaa453.js";import{u as C}from"./scopeId-484eb469.js";const I=h({id:String,text:String,...O(p({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),B=T()({name:"VTooltip",props:I(),emits:{"update:modelValue":t=>!0},setup(t,m){let{slots:o}=m;const n=x(t,"modelValue"),{scopeId:v}=C(),f=w(),r=e(()=>t.id||`v-tooltip-${f}`),l=R(),g=e(()=>t.location.split(" ").length>1?t.location:t.location+" center"),V=e(()=>t.origin==="auto"||t.origin==="overlap"||t.origin.split(" ").length>1||t.location.split(" ").length>1?t.origin:t.origin+" center"),P=e(()=>t.transition?t.transition:n.value?"scale-transition":"fade-transition"),b=e(()=>d({"aria-describedby":r.value},t.activatorProps));return k(()=>{const[y]=u.filterProps(t);return A(u,d({ref:l,class:["v-tooltip",t.class],style:t.style,id:r.value},y,{modelValue:n.value,"onUpdate:modelValue":a=>n.value=a,transition:P.value,absolute:!0,location:g.value,origin:V.value,persistent:!0,role:"tooltip",activatorProps:b.value,_disableGlobalStack:!0},v),{activator:o.activator,default:function(){var c;for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return((c=o.default)==null?void 0:c.call(o,...s))??t.text}})}),S({},l)}});export{B as V};
