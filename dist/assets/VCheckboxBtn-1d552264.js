import{m as V,V as o}from"./VSelectionControl-e0df1dbd.js";import{N as f,bs as v,aj as I,au as c,R as l,X as b,at as k,b as x,t as h}from"./index-5caaa453.js";const C=f({indeterminate:Boolean,indeterminateIcon:{type:v,default:"$checkboxIndeterminate"},...V({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),B=I()({name:"VCheckboxBtn",props:C(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,r){let{slots:s}=r;const t=c(e,"indeterminate"),n=c(e,"modelValue");function u(a){t.value&&(t.value=!1)}const i=l(()=>t.value?e.indeterminateIcon:e.falseIcon),m=l(()=>t.value?e.indeterminateIcon:e.trueIcon);return b(()=>{const a=k(o.filterProps(e)[0],["modelValue"]);return x(o,h(a,{modelValue:n.value,"onUpdate:modelValue":[d=>n.value=d,u],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:i.value,trueIcon:m.value,"aria-checked":t.value?"mixed":void 0}),s)}),{}}});export{B as V,C as m};
