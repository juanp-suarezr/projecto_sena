import{T as p,g as _,c as o,a as e,u as t,w as s,F as g,o as r,Z as y,i as n,f as h,d as a,n as v,b as l,e as x}from"./app-d8AaaGVx.js";import{G as b,_ as k}from"./ApplicationLogo-iSli05Ey.js";import{_ as w}from"./PrimaryButton-LnwiADtC.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./TAYSU LOGO REGISTRADO-05FDOwhA.js";const V=a("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),B={key:0,class:"mb-4 text-sm font-medium text-green-600"},E={class:"mt-4 flex items-center justify-between"},F={__name:"VerifyEmail",props:{status:String},setup(c){const d=c,i=p(),m=()=>{i.post(route("verification.send"))},u=_(()=>d.status==="verification-link-sent");return(f,N)=>(r(),o(g,null,[e(t(y),{title:"Email Verification"}),e(b,null,{default:s(()=>[e(t(n),{href:"/",class:"mb-4 flex items-center justify-center"},{default:s(()=>[e(k,{class:"h-20 w-20 fill-current text-gray-500"})]),_:1}),V,u.value?(r(),o("div",B," A new verification link has been sent to the email address you provided during registration. ")):h("",!0),a("form",{onSubmit:x(m,["prevent"])},[a("div",E,[e(w,{class:v({"opacity-25":t(i).processing}),disabled:t(i).processing},{default:s(()=>[l(" Resend Verification Email ")]),_:1},8,["class","disabled"]),e(t(n),{href:f.route("logout"),method:"post",as:"button",class:"text-sm text-gray-600 underline hover:text-gray-900"},{default:s(()=>[l(" Log Out ")]),_:1},8,["href"])])],32)]),_:1})],64))}};export{F as default};
