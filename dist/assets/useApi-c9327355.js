import{c2 as c,b4 as o,c3 as n}from"./index-5caaa453.js";const i=c({baseUrl:"http://nomasana.local:8000/api",fetchOptions:{headers:{Accept:"application/json"}},options:{refetch:!0,async beforeFetch({options:e}){const a=o("adminAccessToken").value;return a&&(e.headers={...e.headers,Authorization:`Bearer ${a}`}),{options:e}},afterFetch(e){const{data:a,response:t}=e;let r=null;try{r=n(a)}catch(s){console.error(s)}return{data:r,response:t}}}});export{i as u};
