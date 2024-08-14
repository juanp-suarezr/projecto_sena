import{l as i,T as f,c as y,a,w as t,d as s,R as w,o as h,b as c,u as o,y as x,n as g}from"./app-d8AaaGVx.js";import{_ as m,a as v}from"./Modal-02gXASAj.js";import{_ as k,a as C,b}from"./TextInput-Z9R9OnjG.js";import{_ as B}from"./SecondaryButton-PgiSgp57.js";const U={class:"space-y-6"},V=s("header",null,[s("h2",{class:"text-lg font-medium text-gray-900"},"Borrar cuenta"),s("p",{class:"mt-1 text-sm text-gray-600"}," Una vez que se elimine su cuenta, todos sus recursos y datos se eliminarán permanentemente. Antes de eliminar su cuenta, descargue cualquier dato o información que desee conservar. ")],-1),$={class:"p-6"},q=s("h2",{class:"text-lg font-medium text-gray-900"}," Are you sure you want to delete your account? ",-1),D=s("p",{class:"mt-1 text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ",-1),N={class:"mt-6"},P={class:"mt-6 flex justify-end"},K={__name:"DeleteUserForm",setup(T){const r=i(!1),n=i(null),e=f({password:""}),_=()=>{r.value=!0,w(()=>n.value.focus())},d=()=>{e.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>l(),onError:()=>n.value.focus(),onFinish:()=>e.reset()})},l=()=>{r.value=!1,e.reset()};return(z,u)=>(h(),y("section",U,[V,a(m,{onClick:_},{default:t(()=>[c("Borrar cuenta")]),_:1}),a(v,{show:r.value,onClose:l},{default:t(()=>[s("div",$,[q,D,s("div",N,[a(k,{for:"password",value:"Password",class:"sr-only"}),a(C,{id:"password",ref_key:"passwordInput",ref:n,modelValue:o(e).password,"onUpdate:modelValue":u[0]||(u[0]=p=>o(e).password=p),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:x(d,["enter"])},null,8,["modelValue"]),a(b,{message:o(e).errors.password,class:"mt-2"},null,8,["message"])]),s("div",P,[a(B,{onClick:l},{default:t(()=>[c(" Cancel ")]),_:1}),a(m,{class:g(["ms-3",{"opacity-25":o(e).processing}]),disabled:o(e).processing,onClick:d},{default:t(()=>[c(" Borrar cuenta ")]),_:1},8,["class","disabled"])])])]),_:1},8,["show"])]))}};export{K as default};
