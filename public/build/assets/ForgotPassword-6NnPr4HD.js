import{T as d,c as i,a as e,u as t,w as o,F as f,r as _,o as m,Z as p,t as w,f as y,d as a,n as g,b as x,e as b}from"./app-d8AaaGVx.js";import{G as k,_ as h}from"./ApplicationLogo-iSli05Ey.js";import{_ as v,a as V,b as F}from"./TextInput-Z9R9OnjG.js";import{_ as N}from"./PrimaryButton-LnwiADtC.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./TAYSU LOGO REGISTRADO-05FDOwhA.js";const $=a("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),C={key:0,class:"mb-4 text-sm font-medium text-green-600"},L={class:"flex justify-end items-center mt-4"},q={__name:"ForgotPassword",props:{status:String},setup(l){const s=d({email:""}),n=()=>{s.post(route("password.email"))};return(j,r)=>{const u=_("Link");return m(),i(f,null,[e(t(p),{title:"Forgot Password"}),e(k,null,{default:o(()=>[e(u,{href:"/",class:"flex justify-center items-center mb-4"},{default:o(()=>[e(h,{class:"w-1/2 text-gray-500 fill-current"})]),_:1}),$,l.status?(m(),i("div",C,w(l.status),1)):y("",!0),a("form",{onSubmit:b(n,["prevent"])},[a("div",null,[e(v,{for:"email",value:"Email"}),e(V,{id:"email",type:"email",class:"block mt-1 w-full",modelValue:t(s).email,"onUpdate:modelValue":r[0]||(r[0]=c=>t(s).email=c),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),e(F,{class:"mt-2",message:t(s).errors.email},null,8,["message"])]),a("div",L,[e(N,{class:g(["w-full justify-center flex",{"opacity-25":t(s).processing}]),disabled:t(s).processing},{default:o(()=>[x(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64)}}};export{q as default};
