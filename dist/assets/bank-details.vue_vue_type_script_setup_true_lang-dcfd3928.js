import{_ as i}from"./AppTextField.vue_vue_type_script_setup_true_lang-298ad98d.js";import{V as n}from"./VCol-bcc5388c.js";import{V as f}from"./VRow-e44df108.js";import{d as h,o as c,h as b,f as o,b as e,c as u,j as k,p as B,F as r,e as _}from"./index-5caaa453.js";const U=_("h6",{class:"text-h6 font-weight-medium"}," Bank Details ",-1),A=_("p",{class:"mb-0"}," Edit Bank Details ",-1),T=h({__name:"bank-details",props:{programsdata:{},banksAsPerBank:{}},emits:["update:banksAsPerBank"],setup(p,{emit:N}){const m=p,s=m.banksAsPerBank;for(const t of m.programsdata.bank_details)s.push({name_as_per_bank:t.name_as_per_bank,account_number:t.account_number,bank_name:t.bank_name,branch:t.branch,swift_code:t.swift_code,account_type:t.account_type});return(t,w)=>{const d=i;return c(),b(f,null,{default:o(()=>[e(n,{cols:"12"},{default:o(()=>[U,A]),_:1}),(c(!0),u(r,null,k(B(s),(a,V)=>(c(),u(r,{key:V},[e(n,{cols:"12",md:"6"},{default:o(()=>[e(d,{modelValue:a.name_as_per_bank,"onUpdate:modelValue":l=>a.name_as_per_bank=l,placeholder:"Name as per Bank",label:"Name as per Bank"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(n,{cols:"12",md:"6"},{default:o(()=>[e(d,{modelValue:a.account_number,"onUpdate:modelValue":l=>a.account_number=l,placeholder:"Account No",label:"Account No"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(n,{cols:"12",md:"6"},{default:o(()=>[e(d,{modelValue:a.bank_name,"onUpdate:modelValue":l=>a.bank_name=l,placeholder:"Bank Name",label:"Bank Name"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(n,{cols:"12",md:"6"},{default:o(()=>[e(d,{modelValue:a.branch,"onUpdate:modelValue":l=>a.branch=l,placeholder:"Branch",label:"Branch"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(n,{cols:"12",md:"6"},{default:o(()=>[e(d,{modelValue:a.swift_code,"onUpdate:modelValue":l=>a.swift_code=l,placeholder:"SWIFT Code",label:"SWIFT Code"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(n,{cols:"12",md:"6"},{default:o(()=>[e(d,{modelValue:a.account_type,"onUpdate:modelValue":l=>a.account_type=l,placeholder:"Account Type",label:"Account Type"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)],64))),128))]),_:1})}}});export{T as _};