import{T as f,m as g,c as h,a as s,u as e,w as t,F as x,p as v,o as b,Z as w,i as y,b as i,t as R,d as o,e as $,S as n}from"./app-d8AaaGVx.js";import{_ as V}from"./AuthenticatedLayout-7PUwO0No.js";import{_ as d,a as N,b as c}from"./TextInput-Z9R9OnjG.js";import{_ as k}from"./PrimaryButton-LnwiADtC.js";import{M as S}from"./MultiCheckbox-7o9ahNGq.js";import{_ as B}from"./SecondaryButton-PgiSgp57.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./TAYSU LOGO REGISTRADO-05FDOwhA.js";const C={class:"flex flex-col bg-white border shadow-sm rounded-xl lg:w-1/2 md:w-2/3"},M={class:"bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 grid grid-cols-2 gap-4"},j=o("h3",{class:"mt-1 text-gray-500"}," Nuevo Rol ",-1),E={class:"text-right"},F={class:"p-4 md:p-5"},T={class:"mx-auto sm:grid sm:grid-cols-2 sm:px-2 lg:px-2 p-4"},U={class:"mx-2"},q={class:"sm:mx-2 sm:w-full"},D=o("i",{class:"fa-solid fa-save"},null,-1),I={__name:"Create",props:{permission:Object},setup(p){const u=v("$swal"),a=f({name:"",permisos:[]}),_=()=>{a.post(route("roles.store"),{onSuccess:()=>u({title:"Registro Guardado",text:"El rol se ha registrado exitosamente",icon:"success"})})};return g(()=>n().props.flash.code,()=>{n().props.flash.code}),(m,r)=>(b(),h(x,null,[s(e(w),{title:"Nuevo Rol"}),s(V,null,{header:t(()=>[s(e(y),{class:"text-indigo-400 hover:text-indigo-600",href:"/roles"},{default:t(()=>[i(" Roles ")]),_:1}),i(" / "+R(e(a).name),1)]),default:t(()=>[o("div",C,[o("div",M,[j,o("div",E,[s(B,{href:m.route("roles.index")},{default:t(()=>[i(" Regresar ")]),_:1},8,["href"])])]),o("div",F,[o("form",{onSubmit:$(_,["prevent"])},[o("div",T,[o("div",U,[s(d,{for:"name",value:"Rol"}),s(N,{id:"name",modelValue:e(a).name,"onUpdate:modelValue":r[0]||(r[0]=l=>e(a).name=l),autofocus:"",required:"",type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),s(c,{message:e(a).errors.name,class:"mt-2"},null,8,["message"])]),o("div",q,[s(d,{for:"name",value:"Permisos"}),s(c,{message:e(a).errors.permisos,class:"mt-2"},null,8,["message"]),s(S,{name:m.permisos,value:e(a).permisos,"onUpdate:value":r[1]||(r[1]=l=>e(a).permisos=l),options:p.permission},null,8,["name","value","options"]),s(k,{disabled:e(a).processing,class:"my-2"},{default:t(()=>[D,i(" Registrar ")]),_:1},8,["disabled"])])])],32)])])]),_:1})],64))}};export{I as default};
