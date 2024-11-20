import{_ as M}from"./AppStepper.vue_vue_type_style_index_0_lang-c08c6f80.js";import{_ as P}from"./AppTextField.vue_vue_type_script_setup_true_lang-93dc1e26.js";import{_ as I}from"./CustomRadiosWithIcon-e616a02e.js";import{V as u}from"./VCol-35b3d337.js";import{V as U}from"./VRow-d6f20668.js";import{V as x}from"./VForm-e46f5921.js";import{d as v,r as A,w as S,o as _,h as D,f as o,b as e,p as l,e as y,z as Y,aI as F,a4 as T,a9 as k,x as N}from"./index-75b434bc.js";import{_ as h}from"./AppSelect.vue_vue_type_script_setup_true_lang-32a0f469.js";import{V as C,a as c}from"./VRadioGroup-869c346f.js";import{V as w}from"./VCheckbox-e2d8e1ba.js";import{_ as B}from"./AppDateTimePicker.vue_vue_type_style_index_0_lang-544577ba.js";import{_ as z}from"./AppTextarea.vue_vue_type_script_setup_true_lang-c557234d.js";import{V as R}from"./VCardText-76f31582.js";import{V as L,a as g}from"./VWindowItem-04415d19.js";import{V as q}from"./VCard-95c0d706.js";import"./VSlideGroup-3e745b05.js";import"./VSlideGroupItem-95742265.js";import"./form-2b416184.js";import"./VTextField-05e93cc8.js";/* empty css                   */import"./VCounter-3e4b236e.js";import"./transition-6afda34e.js";import"./VField-82993695.js";import"./easing-9f15041e.js";import"./VInput-b46333d7.js";import"./forwardRefs-8348545e.js";import"./index-97808f23.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css              */import"./VSelect-54e8b29a.js";import"./VList-c7d4c8b4.js";import"./ssrBoot-7f224ca6.js";import"./createSimpleFunctional-4b3a0a39.js";import"./VAvatar-071125b9.js";import"./VImg-ba4b392a.js";import"./VDivider-fc890531.js";import"./dialog-transition-14fdab67.js";import"./VMenu-3f143933.js";import"./VOverlay-0b79a00d.js";import"./lazy-0bb5e457.js";import"./scopeId-ee2feb8e.js";import"./VCheckboxBtn-0f22f589.js";import"./VSelectionControl-e1264669.js";import"./VChip-e2ddd660.js";import"./VTextarea-86010cd2.js";const G=v({__name:"PersonalDetails",props:{formData:{}},emits:["update:formData"],setup(b,{emit:V}){const m=b,i=V,t=[{title:"I am the builder",desc:"List property as Builder, list your project and get highest reach fast.",icon:{icon:"custom-office",size:"40"},value:"builder"},{title:"I am the owner",desc:"Submit property as an Individual. Lease, Rent or Sell at the best price.",icon:{icon:"custom-diamond",size:"40"},value:"owner"},{title:"I am the broker",desc:"Earn highest commission by listing your clients properties at best price.",value:"broker",icon:{icon:"custom-suitcase",size:"40"}}],n=A(m.formData);return S(n,()=>{i("update:formData",n.value)}),(a,s)=>{const d=I,r=P;return _(),D(x,null,{default:o(()=>[e(U,null,{default:o(()=>[e(u,{cols:"12"},{default:o(()=>[e(d,{"selected-radio":l(n).userType,"onUpdate:selectedRadio":s[0]||(s[0]=p=>l(n).userType=p),"radio-content":t,"grid-column":{cols:"12",sm:"4"}},null,8,["selected-radio"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(r,{modelValue:l(n).firstName,"onUpdate:modelValue":s[1]||(s[1]=p=>l(n).firstName=p),label:"First Name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(r,{modelValue:l(n).lastName,"onUpdate:modelValue":s[2]||(s[2]=p=>l(n).lastName=p),label:"Last Name",placeholder:"Doe"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(r,{modelValue:l(n).username,"onUpdate:modelValue":s[3]||(s[3]=p=>l(n).username=p),label:"Username",placeholder:"Johndoe"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(r,{modelValue:l(n).password,"onUpdate:modelValue":s[4]||(s[4]=p=>l(n).password=p),autocomplete:"on",type:"password",label:"Password",placeholder:"············"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(r,{modelValue:l(n).email,"onUpdate:modelValue":s[5]||(s[5]=p=>l(n).email=p),type:"email",label:"Email",placeholder:"john.doe@email.com"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(r,{modelValue:l(n).contact,"onUpdate:modelValue":s[6]||(s[6]=p=>l(n).contact=p),type:"number",label:"Contact",placeholder:"+1 123 456 7890"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})}}}),W=y("div",{class:"text-high-emphasis"}," Show Price As ",-1),E=y("div",{class:"text-high-emphasis mb-2 text-base"}," Price Includes ",-1),O=v({__name:"PriceDetails",props:{formData:{}},emits:["update:formData"],setup(b,{emit:V}){const m=b,i=V,t=A(m.formData);return S(t,()=>{i("update:formData",t.value)}),(n,a)=>{const s=P,d=h;return _(),D(x,null,{default:o(()=>[e(U,null,{default:o(()=>[e(u,{cols:"12",sm:"6"},{default:o(()=>[e(s,{modelValue:l(t).expectedPrice,"onUpdate:modelValue":a[0]||(a[0]=r=>l(t).expectedPrice=r),label:"Expected Price",type:"number","append-inner-icon":"tabler-currency-dollar",placeholder:"25,000"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(s,{modelValue:l(t).pricePerSqft,"onUpdate:modelValue":a[1]||(a[1]=r=>l(t).pricePerSqft=r),label:"Price Per SQFT","append-inner-icon":"tabler-currency-dollar",type:"number",placeholder:"500"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(s,{modelValue:l(t).maintenanceCharge,"onUpdate:modelValue":a[2]||(a[2]=r=>l(t).maintenanceCharge=r),label:"Maintenance Charge","append-inner-icon":"tabler-currency-dollar",type:"number",placeholder:"50"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(d,{modelValue:l(t).maintenancePeriod,"onUpdate:modelValue":a[3]||(a[3]=r=>l(t).maintenancePeriod=r),label:"Maintenance Period",placeholder:"Select Maintenance Period",items:["Monthly","Quarterly","Half Yearly","Yearly"]},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(s,{modelValue:l(t).bookingAmount,"onUpdate:modelValue":a[4]||(a[4]=r=>l(t).bookingAmount=r),label:"Booking/Token Amount","append-inner-icon":"tabler-currency-dollar",type:"number",placeholder:"250"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(s,{modelValue:l(t).otherAmount,"onUpdate:modelValue":a[5]||(a[5]=r=>l(t).otherAmount=r),label:"Other Amount","append-inner-icon":"tabler-currency-dollar",type:"number",placeholder:"500"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(C,{modelValue:l(t).priceDisplayType,"onUpdate:modelValue":a[6]||(a[6]=r=>l(t).priceDisplayType=r)},{label:o(()=>[W]),default:o(()=>[e(c,{label:"Negotiable",value:"Negotiable",class:"ms-2"}),e(c,{label:"Call For Price",value:"Call For Price",class:"ms-2"})]),_:1},8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[E,e(w,{modelValue:l(t).priceIncludes,"onUpdate:modelValue":a[7]||(a[7]=r=>l(t).priceIncludes=r),label:"Car Parking",value:"Car Parking"},null,8,["modelValue"]),e(w,{modelValue:l(t).priceIncludes,"onUpdate:modelValue":a[8]||(a[8]=r=>l(t).priceIncludes=r),label:"Club Membership",value:"Club Membership"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})}}}),j=y("div",{class:"text-high-emphasis"}," Possession Status ",-1),J=y("div",{class:"text-high-emphasis"}," Transaction Type ",-1),Q=y("div",{class:"text-high-emphasis"}," Is Property Facing Main Road? ",-1),H=y("div",{class:"text-high-emphasis"}," Gated Colony ",-1),K=v({__name:"PropertyArea",props:{formData:{}},emits:["update:formData"],setup(b,{emit:V}){const m=b,i=V,t=A(m.formData);return S(t,()=>{i("update:formData",t.value)}),(n,a)=>{const s=P,d=B;return _(),D(x,null,{default:o(()=>[e(U,null,{default:o(()=>[e(u,{cols:"12",sm:"6"},{default:o(()=>[e(s,{modelValue:l(t).totalArea,"onUpdate:modelValue":a[0]||(a[0]=r=>l(t).totalArea=r),label:"Total Area",suffix:"sq-ft",type:"number",placeholder:"1000"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(s,{modelValue:l(t).carpetArea,"onUpdate:modelValue":a[1]||(a[1]=r=>l(t).carpetArea=r),label:"Carpet Area",suffix:"sq-ft",type:"number",placeholder:"800"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(s,{modelValue:l(t).plotArea,"onUpdate:modelValue":a[2]||(a[2]=r=>l(t).plotArea=r),label:"Plot Area",suffix:"sq-ft",type:"number",placeholder:"800"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(d,{modelValue:l(t).availableFrom,"onUpdate:modelValue":a[3]||(a[3]=r=>l(t).availableFrom=r),label:"Available From",type:"date",placeholder:"Select Date",format:"YYYY-MM-DD"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(C,{modelValue:l(t).possessionStatus,"onUpdate:modelValue":a[4]||(a[4]=r=>l(t).possessionStatus=r)},{label:o(()=>[j]),default:o(()=>[e(c,{value:"Under Construciton",label:"Under Construction",class:"ms-2"}),e(c,{value:"Ready to Move",label:"Ready to Move",class:"ms-2"})]),_:1},8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(C,{modelValue:l(t).transactionType,"onUpdate:modelValue":a[5]||(a[5]=r=>l(t).transactionType=r)},{label:o(()=>[J]),default:o(()=>[e(c,{value:"New Property",label:"New Property",class:"ms-2"}),e(c,{value:"Resale",label:"Resale",class:"ms-2"})]),_:1},8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(C,{modelValue:l(t).isOnMainRoad,"onUpdate:modelValue":a[6]||(a[6]=r=>l(t).isOnMainRoad=r)},{label:o(()=>[Q]),default:o(()=>[e(c,{value:"Yes",label:"Yes",class:"ms-2"}),e(c,{value:"No",label:"No",class:"ms-2"})]),_:1},8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(C,{modelValue:l(t).isGatedColony,"onUpdate:modelValue":a[7]||(a[7]=r=>l(t).isGatedColony=r)},{label:o(()=>[H]),default:o(()=>[e(c,{value:"Yes",label:"Yes",class:"ms-2"}),e(c,{value:"No",label:"No",class:"ms-2"})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})}}}),Z=v({__name:"PropertyDetails",props:{formData:{}},emits:["update:formData"],setup(b,{emit:V}){const m=b,i=V,t=[{title:"Sell the property",desc:"Post your property for sale. Unlimited free listing.",icon:{icon:"custom-home",size:"40"},value:"sell"},{title:"Rent the property",desc:"Post your property for rent. Unlimited free listing.",icon:{icon:"custom-wallet",size:"40"},value:"rent"}],n=A(m.formData);return S(n,()=>{i("update:formData",n.value)}),(a,s)=>{const d=I,r=h,p=P,$=z;return _(),D(x,null,{default:o(()=>[e(U,null,{default:o(()=>[e(u,{cols:"12"},{default:o(()=>[e(d,{"selected-radio":l(n).propertyDealType,"onUpdate:selectedRadio":s[0]||(s[0]=f=>l(n).propertyDealType=f),"radio-content":t,"grid-column":{cols:"12",sm:"6"}},null,8,["selected-radio"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(r,{modelValue:l(n).propertyType,"onUpdate:modelValue":s[1]||(s[1]=f=>l(n).propertyType=f),label:"Property type",placeholder:"Select Property Type",items:["Residential","Commercial"]},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(p,{modelValue:l(n).zipCode,"onUpdate:modelValue":s[2]||(s[2]=f=>l(n).zipCode=f),label:"Zip Code",type:"number",placeholder:"123456"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(r,{modelValue:l(n).country,"onUpdate:modelValue":s[3]||(s[3]=f=>l(n).country=f),label:"Country",placeholder:"Select country",items:["India","UK","USA","AUS","Germany"]},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(p,{modelValue:l(n).state,"onUpdate:modelValue":s[4]||(s[4]=f=>l(n).state=f),label:"State",placeholder:"California"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(p,{modelValue:l(n).city,"onUpdate:modelValue":s[5]||(s[5]=f=>l(n).city=f),label:"City",placeholder:"Los Angeles"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(p,{modelValue:l(n).landmark,"onUpdate:modelValue":s[6]||(s[6]=f=>l(n).landmark=f),label:"Landmark",placeholder:"Near to bus stop"},null,8,["modelValue"])]),_:1}),e(u,null,{default:o(()=>[e($,{modelValue:l(n).address,"onUpdate:modelValue":s[7]||(s[7]=f=>l(n).address=f),label:"Address",placeholder:"112, 1st Cross, 1st Stage, 1st Phase, BTM Layout, Bangalore - 560068",rows:"2"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})}}}),X=y("div",{class:"text-high-emphasis"}," Is There Any Common Area? ",-1),ee=y("div",{class:"text-high-emphasis"}," Is There Any Common Area? ",-1),le=v({__name:"PropertyFeatures",props:{formData:{}},emits:["update:formData"],setup(b,{emit:V}){const m=b,i=V,t=A(m.formData);return S(t,()=>{i("update:formData",t.value)}),(n,a)=>{const s=P,d=h;return _(),D(x,null,{default:o(()=>[e(U,null,{default:o(()=>[e(u,{cols:"12",sm:"6"},{default:o(()=>[e(s,{modelValue:l(t).bedroomCount,"onUpdate:modelValue":a[0]||(a[0]=r=>l(t).bedroomCount=r),label:"Bedrooms",placeholder:"3"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(s,{modelValue:l(t).floorNo,"onUpdate:modelValue":a[1]||(a[1]=r=>l(t).floorNo=r),label:"Floor No",placeholder:"12"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(s,{modelValue:l(t).bathroomCount,"onUpdate:modelValue":a[2]||(a[2]=r=>l(t).bathroomCount=r),label:"Bathroom",placeholder:"4"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(d,{modelValue:l(t).furnishedStatus,"onUpdate:modelValue":a[3]||(a[3]=r=>l(t).furnishedStatus=r),label:"Furnished Status",placeholder:"Select Furnished Status",items:["Fully Furnished","Furnished","Semi-Furnished","Unfurnished"]},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:o(()=>[e(d,{modelValue:l(t).furnishingDetails,"onUpdate:modelValue":a[4]||(a[4]=r=>l(t).furnishingDetails=r),label:"Furnishing Details",placeholder:"Select Furnishing Details",multiple:"",chips:"",items:["TV","AC","RO","Bed","Fridge","Wifi","Sofa","Cupboard","Microwave","Dining Table","Washing Machine"]},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(C,{modelValue:l(t).isCommonArea1,"onUpdate:modelValue":a[5]||(a[5]=r=>l(t).isCommonArea1=r)},{label:o(()=>[X]),default:o(()=>[e(c,{label:"Yes",value:"true",class:"ms-2"}),e(c,{label:"No",value:"false",class:"ms-2"})]),_:1},8,["modelValue"])]),_:1}),e(u,{cols:"12",sm:"6"},{default:o(()=>[e(C,{modelValue:l(t).isCommonArea2,"onUpdate:modelValue":a[6]||(a[6]=r=>l(t).isCommonArea2=r)},{label:o(()=>[ee]),default:o(()=>[e(c,{label:"Yes",value:"true",class:"ms-2"}),e(c,{label:"No",value:"false",class:"ms-2"})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})}}}),oe={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},Je=v({__name:"property-listing",setup(b){const V=[{title:"Personal Details",subtitle:"Your Name/Email",icon:"tabler-users"},{title:"Property Details",subtitle:"Property Type",icon:"tabler-home"},{title:"Property Features",subtitle:"Bedrooms/Floor No",icon:"tabler-bookmarks"},{title:"Property Area",subtitle:"covered Area",icon:"tabler-map-pin"},{title:"Price Details",subtitle:"Expected Price",icon:"tabler-currency-dollar"}],m=A({personalDetails:{userType:"builder",firstName:"",lastName:"",username:"",password:"",email:"",contact:null},priceDetails:{expectedPrice:null,pricePerSqft:null,maintenanceCharge:null,maintenancePeriod:null,bookingAmount:null,otherAmount:null,priceDisplayType:"Negotiable",priceIncludes:["Car Parking"]},propertyFeatures:{bedroomCount:"",floorNo:"",bathroomCount:"",isCommonArea:!0,furnishedStatus:null,furnishingDetails:["AC","TV","Fridge"],isCommonArea1:"true",isCommonArea2:"false"},propertyArea:{totalArea:null,carpetArea:null,plotArea:null,availableFrom:null,possessionStatus:"Under Construciton",transactionType:"New Property",isOnMainRoad:"No",isGatedColony:"No"},propertyDetails:{propertyDealType:"sell",propertyType:null,zipCode:null,country:null,state:"",city:"",landmark:"",address:""}}),i=A(0),t=()=>{console.log("propertyListingData :>> ",m.value)};return(n,a)=>{const s=M;return _(),D(q,null,{default:o(()=>[e(U,{"no-gutters":""},{default:o(()=>[e(u,{cols:"12",md:"4",class:Y(n.$vuetify.display.smAndDown?"border-b":"border-e")},{default:o(()=>[e(R,null,{default:o(()=>[e(s,{"current-step":l(i),"onUpdate:currentStep":a[0]||(a[0]=d=>F(i)?i.value=d:null),items:V,direction:"vertical","icon-size":"24",class:"stepper-icon-step-bg"},null,8,["current-step"])]),_:1})]),_:1},8,["class"]),e(u,{cols:"12",md:"8"},{default:o(()=>[e(R,null,{default:o(()=>[e(L,{modelValue:l(i),"onUpdate:modelValue":a[6]||(a[6]=d=>F(i)?i.value=d:null),class:"disable-tab-transition"},{default:o(()=>[e(g,null,{default:o(()=>[e(G,{"form-data":l(m).personalDetails,"onUpdate:formData":a[1]||(a[1]=d=>l(m).personalDetails=d)},null,8,["form-data"])]),_:1}),e(g,null,{default:o(()=>[e(Z,{"form-data":l(m).propertyDetails,"onUpdate:formData":a[2]||(a[2]=d=>l(m).propertyDetails=d)},null,8,["form-data"])]),_:1}),e(g,null,{default:o(()=>[e(le,{"form-data":l(m).propertyFeatures,"onUpdate:formData":a[3]||(a[3]=d=>l(m).propertyFeatures=d)},null,8,["form-data"])]),_:1}),e(g,null,{default:o(()=>[e(K,{"form-data":l(m).propertyArea,"onUpdate:formData":a[4]||(a[4]=d=>l(m).propertyArea=d)},null,8,["form-data"])]),_:1}),e(g,null,{default:o(()=>[e(O,{"form-data":l(m).priceDetails,"onUpdate:formData":a[5]||(a[5]=d=>l(m).priceDetails=d)},null,8,["form-data"])]),_:1})]),_:1},8,["modelValue"]),y("div",oe,[e(T,{color:"secondary",variant:"tonal",disabled:l(i)===0,onClick:a[7]||(a[7]=d=>i.value--)},{default:o(()=>[e(k,{icon:"tabler-arrow-left",start:"",class:"flip-in-rtl"}),N(" Previous ")]),_:1},8,["disabled"]),V.length-1===l(i)?(_(),D(T,{key:0,color:"success","append-icon":"tabler-check",onClick:t},{default:o(()=>[N(" submit ")]),_:1})):(_(),D(T,{key:1,onClick:a[8]||(a[8]=d=>i.value++)},{default:o(()=>[N(" Next "),e(k,{icon:"tabler-arrow-right",end:"",class:"flip-in-rtl"})]),_:1}))])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{Je as default};
