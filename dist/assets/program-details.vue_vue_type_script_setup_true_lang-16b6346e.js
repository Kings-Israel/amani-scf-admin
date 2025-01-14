import{_ as I}from"./AppTextField.vue_vue_type_script_setup_true_lang-298ad98d.js";import{_ as f}from"./AppSelect.vue_vue_type_script_setup_true_lang-67ce80f3.js";import{_ as T}from"./AppDateTimePicker.vue_vue_type_style_index_0_lang-56955411.js";import{V as c}from"./VCol-bcc5388c.js";import{V as C}from"./VRow-e44df108.js";import{V as N}from"./VFileInput-cab9861f.js";import{d as k,r as p,w as l,o as i,h as s,f as u,b as d,c as y,j as L,F as D,e as h}from"./index-5caaa453.js";const _=h("h6",{class:"text-h6 font-weight-medium"}," Program Details ",-1),w=h("p",{class:"mb-0"}," Edit Program Details ",-1),M=k({__name:"program-details",props:{anchor:{},programName:{},productType:{},productCode:{},eligibility:{},totalProgramLimit:{},programApprovalDate:{},limitExpiryDate:{},maximumLimitPerAccount:{},requestAutoFinance:{type:Boolean},minimumFinancingDays:{},maximumFinancingDays:{},staleInvoicePeriod:{},stopSupply:{},autoDebitAnchorForFinancedInvoices:{type:Boolean},autoDebitAnchorForNonFinancedInvoices:{type:Boolean},allowAnchorToChangeDueDate:{type:Boolean},maximumNoOfDaysForInvoiceDueDateExtensions:{},noOfDaysLimitForChangingInvoiceDueDate:{},defaultPaymentTerms:{},allowAnchorToChangePaymentTerms:{type:Boolean},recourse:{},mandatoryForInvoiceAttachment:{type:Boolean},dueDateCalculatedFrom:{},companyBoardResolutionAttachment:{},status:{}},emits:["update:anchor","update:programName","update:productType","update:productCode","update:eligibility","update:totalProgramLimit","update:programApprovalDate","update:limitExpiryDate","update:maximumLimitPerAccount","update:requestAutoFinance","update:minimumFinancingDays","update:maximumFinancingDays","update:staleInvoicePeriod","update:stopSupply","update:autoDebitAnchorForFinancedInvoices","update:autoDebitAnchorForNonFinancedInvoices","update:allowAnchorToChangeDueDate","update:maximumNoOfDaysForInvoiceDueDateExtensions","update:noOfDaysLimitForChangingInvoiceDueDate","update:defaultPaymentTerms","update:allowAnchorToChangePaymentTerms","update:recourse","update:mandatoryForInvoiceAttachment","update:dueDateCalculatedFrom","update:companyBoardResolutionAttachment","update:status"],setup(v,{emit:g}){const o=v,t=g,a=p({anchor:o.anchor,productType:o.productType,productCode:o.productCode,programName:o.programName,programCode:o.productCode,eligibilityPercentage:o.eligibility,totalProgramLimit:o.totalProgramLimit,programApprovalDate:o.programApprovalDate,limitExpiryDate:o.limitExpiryDate,maximumLimitPerAccount:o.maximumLimitPerAccount,requestAutoFinance:o.requestAutoFinance?1:0,minimumFinancingDays:o.minimumFinancingDays,maximumFinancingDays:o.maximumFinancingDays,staleInvoicePeriod:o.staleInvoicePeriod,stopSupply:o.stopSupply,autoDebitAnchorForFinancedInvoices:o.autoDebitAnchorForFinancedInvoices?1:0,autoDebitAnchorForNonFinancedInvoices:o.autoDebitAnchorForNonFinancedInvoices?1:0,allowAnchorToChangeDueDate:o.allowAnchorToChangeDueDate?1:0,maximumNoOfDaysForInvoiceDueDateExtensions:o.maximumNoOfDaysForInvoiceDueDateExtensions,noOfDaysLimitForChangingInvoiceDueDate:o.noOfDaysLimitForChangingInvoiceDueDate,defaultPaymentTerms:o.defaultPaymentTerms,allowAnchorToChangePaymentTerms:o.allowAnchorToChangePaymentTerms?1:0,recourse:o.recourse,mandatoryForInvoiceAttachment:o.mandatoryForInvoiceAttachment?1:0,dueDateCalculatedFrom:o.dueDateCalculatedFrom,companyBoardResolutionAttachment:o.companyBoardResolutionAttachment,status:o.status}),m=[{name:"Yes",value:1},{name:"No",value:0}],A=[{name:"Active",value:"active"},{name:"Suspended",value:"suspended"}];l(()=>a.value.productType,e=>t("update:productType",e)),l(()=>a.value.productCode,e=>t("update:productCode",e)),l(()=>a.value.programName,e=>t("update:programName",e)),l(()=>a.value.eligibilityPercentage,e=>t("update:eligibility",e)),l(()=>a.value.totalProgramLimit,e=>t("update:totalProgramLimit",e)),l(()=>a.value.programApprovalDate,e=>t("update:programApprovalDate",e)),l(()=>a.value.limitExpiryDate,e=>t("update:limitExpiryDate",e)),l(()=>a.value.maximumLimitPerAccount,e=>t("update:maximumLimitPerAccount",e)),l(()=>a.value.requestAutoFinance,e=>t("update:requestAutoFinance",e)),l(()=>a.value.minimumFinancingDays,e=>t("update:minimumFinancingDays",e)),l(()=>a.value.maximumFinancingDays,e=>t("update:maximumFinancingDays",e)),l(()=>a.value.staleInvoicePeriod,e=>t("update:staleInvoicePeriod",e)),l(()=>a.value.stopSupply,e=>t("update:stopSupply",e)),l(()=>a.value.autoDebitAnchorForFinancedInvoices,e=>t("update:autoDebitAnchorForFinancedInvoices",e)),l(()=>a.value.autoDebitAnchorForNonFinancedInvoices,e=>t("update:autoDebitAnchorForNonFinancedInvoices",e)),l(()=>a.value.allowAnchorToChangeDueDate,e=>t("update:allowAnchorToChangeDueDate",e)),l(()=>a.value.maximumNoOfDaysForInvoiceDueDateExtensions,e=>t("update:maximumNoOfDaysForInvoiceDueDateExtensions",e)),l(()=>a.value.noOfDaysLimitForChangingInvoiceDueDate,e=>t("update:noOfDaysLimitForChangingInvoiceDueDate",e)),l(()=>a.value.defaultPaymentTerms,e=>t("update:defaultPaymentTerms",e)),l(()=>a.value.allowAnchorToChangePaymentTerms,e=>t("update:allowAnchorToChangePaymentTerms",e)),l(()=>a.value.recourse,e=>t("update:recourse",e)),l(()=>a.value.mandatoryForInvoiceAttachment,e=>t("update:mandatoryForInvoiceAttachment",e)),l(()=>a.value.dueDateCalculatedFrom,e=>t("update:dueDateCalculatedFrom",e)),l(()=>a.value.companyBoardResolutionAttachment,e=>t("update:companyBoardResolutionAttachment",e));const F=p([{key:"productType",type:"text",model:"productType",label:"Product Type",placeholder:"Product Type",readonly:!0,rules:[]},{key:"anchor",type:"text",model:"anchor",label:"Anchor",placeholder:"Anchor",readonly:!0,rules:[]},{key:"programName",type:"text",model:"programName",label:"Name",placeholder:"Name",readonly:!1,rules:[]},{key:"productCode",type:"text",model:"productCode",label:"Product Code",placeholder:"Product Code",readonly:!0,rules:[]},{key:"eligibilityPercentage",type:"text",model:"eligibilityPercentage",label:"Eligibility Percentage",placeholder:"Eligibility Percentage",readonly:!1,rules:[]},{key:"totalProgramLimit",type:"text",model:"totalProgramLimit",label:"Total Program Limit",placeholder:"Total Program Limit",readonly:!1,rules:[]},{key:"programApprovalDate",type:"date",model:"programApprovalDate",label:"Program Approval Date",placeholder:"Program Approval Date",readonly:!1,rules:[]},{key:"limitExpiryDate",type:"date",model:"limitExpiryDate",label:"Limit Expiry Date",placeholder:"Limit Expiry Date",readonly:!1,rules:[]},{key:"maximumLimitPerAccount",type:"text",model:"maximumLimitPerAccount",label:"Maximum Limit Per Account",placeholder:"Maximum Limit Per Account",readonly:!1,rules:[]},{key:"requestAutoFinance",type:"select",items:m,model:"requestAutoFinance",label:"Request Auto Finance",placeholder:"Request Auto Finance",readonly:!1,rules:[]},{key:"staleInvoicePeriod",type:"text",model:"staleInvoicePeriod",label:"Stale Invoice Period",placeholder:"Stale Invoice Period",readonly:!1,rules:[]},{key:"stopSupply",type:"text",model:"stopSupply",label:"Stop Supply (Days)",placeholder:"Stop Supply (Days)",readonly:!1,rules:[]},{key:"autoDebitAnchorForFinancedInvoices",type:"select",items:m,model:"autoDebitAnchorForFinancedInvoices",label:"Auto Debit Anchor for Financed Invoices",placeholder:"Auto Debit Anchor for Financed Invoices",readonly:!1,rules:[]},{key:"autoDebitAnchorForNonFinancedInvoices",type:"select",items:m,model:"autoDebitAnchorForNonFinancedInvoices",label:"Auto Debit Anchor for Non-Financed Invoices",placeholder:"Auto Debit Anchor for Non-Financed Invoices",readonly:!1,rules:[]},{key:"allowAnchorToChangeDueDate",type:"select",items:m,model:"allowAnchorToChangeDueDate",label:"Allow Anchor to change due date",placeholder:"Allow Anchor to change due date",readonly:!1,rules:[]},{key:"maximumNoOfDaysForInvoiceDueDateExtensions",type:"text",model:"maximumNoOfDaysForInvoiceDueDateExtensions",label:"Maximum No. of days for Invoice Due Date Extensions",placeholder:"Maximum No. of days for Invoice Due Date Extensions",readonly:!1,rules:[]},{key:"noOfDaysLimitForChangingInvoiceDueDate",type:"text",model:"noOfDaysLimitForChangingInvoiceDueDate",label:"No. of Days Limit for changing Invoice Due Date",placeholder:"No. of Days Limit for changing Invoice Due Date",readonly:!1,rules:[]},{key:"defaultPaymentTerms",type:"text",model:"defaultPaymentTerms",label:"Default Payment Terms(Days)",placeholder:"Default Payment Terms",readonly:!1,rules:[]},{key:"allowAnchorToChangePaymentTerms",type:"select",items:m,model:"allowAnchorToChangePaymentTerms",label:"Allow Anchor to change Payment Terms",placeholder:"Allow Anchor to change Payment Terms",readonly:!1,rules:[]},{key:"recourse",type:"text",model:"recourse",label:"Recourse",placeholder:"Recourse",readonly:!1,rules:[]},{key:"mandatoryForInvoiceAttachment",type:"select",items:m,model:"mandatoryForInvoiceAttachment",label:"Mandatory For Invoice Attachment",placeholder:"Mandatory For Invoice Attachment",readonly:!1,rules:[]},{key:"companyBoardResolutionAttachment",type:"file",model:"companyBoardResolutionAttachment",label:"Company Board Resolution Attachment",accept:"image/*",placeholder:"Company Board Resolution Attachment",readonly:!1,rules:[]},{key:"status",type:"select",items:A,model:"status",label:"Status",placeholder:"Status",readonly:!1,rules:[]}]);return(e,E)=>{const b=T,x=f,P=I;return i(),s(C,null,{default:u(()=>[d(c,{cols:"12"},{default:u(()=>[_,w]),_:1}),(i(!0),y(D,null,L(F.value,n=>(i(),y(D,{key:n.key},[n.type==="date"?(i(),s(c,{key:0,cols:"12",md:"6"},{default:u(()=>[d(b,{modelValue:a.value[n.model],"onUpdate:modelValue":r=>a.value[n.model]=r,label:n.label,class:"me-3","clear-icon":"tabler-x",clearable:"",placeholder:"Select Date"},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1024)):n.type==="select"?(i(),s(c,{key:1,cols:"12",md:"6"},{default:u(()=>[d(x,{modelValue:a.value[n.model],"onUpdate:modelValue":r=>a.value[n.model]=r,items:n.items,"item-title":"name","item-value":"value",rules:n.rules,label:n.label,placeholder:n.placeholder},null,8,["modelValue","onUpdate:modelValue","items","rules","label","placeholder"])]),_:2},1024)):n.type==="file"?(i(),s(c,{key:2,cols:"12",md:"6"},{default:u(()=>[d(N,{modelValue:a.value[n.model],"onUpdate:modelValue":r=>a.value[n.model]=r,label:n.label,accept:n.accept},null,8,["modelValue","onUpdate:modelValue","label","accept"])]),_:2},1024)):(i(),s(c,{key:3,cols:"12",md:"6"},{default:u(()=>[d(P,{modelValue:a.value[n.model],"onUpdate:modelValue":r=>a.value[n.model]=r,label:n.label,placeholder:n.placeholder,readonly:n.readonly,rules:n.rules},null,8,["modelValue","onUpdate:modelValue","label","placeholder","readonly","rules"])]),_:2},1024))],64))),128))]),_:1})}}});export{M as _};
