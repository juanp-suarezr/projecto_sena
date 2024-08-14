import{l as d,T as h,c as x,a,w as o,d as s,p as g,R as v,o as U,b as i,u as t,y as k,n as C}from"./app-d8AaaGVx.js";import{_ as m,a as E}from"./Modal-02gXASAj.js";import{_ as q,a as $,b}from"./TextInput-Z9R9OnjG.js";import{_ as V}from"./SecondaryButton-PgiSgp57.js";const j={class:"space-y-6"},z=s("header",null,[s("h2",{class:"text-lg font-medium text-gray-900"},"Eliminar Usuario"),s("p",{class:"mt-1 text-sm text-gray-600"}," Una vez que se elimine la cuenta, todos sus recursos y datos se eliminarán permanentemente. Antes de eliminar la cuenta, descargue cualquier dato o información que desee conservar. ")],-1),B={class:"p-6"},D=s("h2",{class:"text-lg font-medium text-gray-900"}," ¿Estás seguro de que quieres eliminar la cuenta? ",-1),N=s("p",{class:"mt-1 text-sm text-gray-600"}," Una vez que se elimine la cuenta, todos sus recursos y datos se eliminarán permanentemente. Por favor ingrese su contraseña para confirmar que desea eliminar permanentemente su cuenta. ",-1),T={class:"mt-6"},F={class:"mt-6 flex justify-end"},M={__name:"DeleteUserForm",props:{user:{type:Object,default:()=>({})}},setup(p){const _=g("$swal"),r=d(!1),n=d(null),f=p.user,e=h({password:""}),w=()=>{r.value=!0,v(()=>n.value.focus())},c=()=>{e.delete(route("users.destroy",f.id),{preserveScroll:!0,onSuccess:()=>{l(),_({title:"Registro Eliminado",text:"El usuario se ha eliminado exitosamente",icon:"success"})},onError:()=>n.value.focus(),onFinish:()=>e.reset()})},l=()=>{r.value=!1,e.reset()};return(K,u)=>(U(),x("section",j,[z,a(m,{onClick:w},{default:o(()=>[i("Eliminar Usuario")]),_:1}),a(E,{show:r.value,onClose:l},{default:o(()=>[s("div",B,[D,N,s("div",T,[a(q,{for:"password",value:"Password",class:"sr-only"}),a($,{id:"password",ref_key:"passwordInput",ref:n,modelValue:t(e).password,"onUpdate:modelValue":u[0]||(u[0]=y=>t(e).password=y),type:"password",class:"mt-1 block w-3/4",placeholder:"Contraseña",onKeyup:k(c,["enter"])},null,8,["modelValue"]),a(b,{message:t(e).errors.password,class:"mt-2"},null,8,["message"])]),s("div",F,[a(V,{onClick:l},{default:o(()=>[i(" Cancelar ")]),_:1}),a(m,{class:C(["ms-3",{"opacity-25":t(e).processing}]),disabled:t(e).processing,onClick:c},{default:o(()=>[i(" Eliminar Usuario ")]),_:1},8,["class","disabled"])])])]),_:1},8,["show"])]))}};export{M as default};
