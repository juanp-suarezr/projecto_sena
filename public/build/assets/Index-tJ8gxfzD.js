import{l as c,m as w,c as a,a as d,u as x,w as p,F as h,o as i,Z as k,b as u,d as e,h as f,q as v,s as m,x as C,y as B,z as N,O as V,t as s,f as _}from"./app-L7MhuUTX.js";import{_ as q}from"./AuthenticatedLayout-WleU4Dgz.js";import{_ as j}from"./PrimaryLink-L7Q2eBi7.js";import{_ as A}from"./avatar.esm-0kdTnwHU.js";import{_ as E}from"./SecondaryButton--VgPWlYN.js";import"./dialog.esm-5cVq0hn0.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./TAYSU LOGO REGISTRADO-05FDOwhA.js";import"./basecomponent.esm-UC0zPN6_.js";import"./portal.esm-YJxe5s0R.js";import"./ripple.esm-USHROrf7.js";const F={class:"inline-block min-w-full overflow-hidden mb-3 grid md:grid-cols-3 gap-4"},O=e("option",{selected:"",value:""},"Filtrar por estado",-1),S=e("option",{value:"Activo"},"Nuevo",-1),D=e("option",{value:"Agotado"},"Fiel",-1),K=e("option",{value:"Bloqueado"},"Master",-1),M=[O,S,D,K],T={class:"..."},z=e("label",{for:"default-search",class:"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"},"Search",-1),I={class:"relative"},U=e("div",{class:"absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"},[e("svg",{class:"w-4 h-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})])],-1),Z={class:"text-right p-4"},$={class:"flex flex-col overflow-x-auto"},L={class:"inline-block rounded-lg shadow"},R={class:"inline-block min-w-full py-2"},G={class:"overflow-x-auto"},H={class:"min-w-full whitespace-no-wrap"},J=e("thead",null,[e("tr",{class:"border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500"},[e("th",{class:"border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"}," Nombre "),e("th",{class:"border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"}," Identificación "),e("th",{class:"border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"}," Dirección "),e("th",{class:"border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"}," Telefono "),e("th",{class:"border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"}," Correo "),e("th",{class:"border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"}," Cantidad Compras "),e("th",{class:"border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"}," Estado "),e("th",{class:"border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"}," Acciones ")])],-1),P={class:"border-b border-gray-200 bg-white px-5 py-5 text-sm"},Q={class:"text-gray-900 whitespace-no-wrap"},W={class:"border-b border-gray-200 bg-white px-5 py-5 text-sm"},X={class:"text-gray-900 whitespace-no-wrap"},Y={class:"border-b border-gray-200 bg-white px-5 py-5 text-sm"},ee={class:"text-gray-900 whitespace-no-wrap"},te={class:"border-b border-gray-200 bg-white px-5 py-5 text-sm"},se={class:"text-gray-900 whitespace-no-wrap"},re={class:"border-b border-gray-200 bg-white px-5 py-5 text-sm"},oe={class:"text-gray-900 whitespace-no-wrap"},ae=e("td",{class:"border-b border-gray-200 bg-white px-5 py-5 text-sm"},[e("p",{class:"text-gray-900 whitespace-no-wrap"},"0")],-1),de={class:"border-b border-gray-200 bg-white px-5 py-5 text-sm"},ie={key:0,class:"bg-lime-500 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded"},le={key:1,class:"bg-red-500 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-500"},ne={class:"border-b border-gray-200 bg-white px-5 py-5 text-sm"},ce={class:"flex flex-col items-center border-t bg-white px-5 py-5 xs:flex-row xs:justify-between"},ke={__name:"Index",props:{clientes:{type:Object,default:()=>({})},filters:{type:Object,default:()=>({})}},setup(b){const y=b;c(!1),c("");let r=c(y.filters.search),o=c(y.filters.estado??"");const g=()=>{V.get("/clientes",{search:r.value,estado:o.value},{preserveState:!0,replace:!0})};return w(r,l=>{console.log("Valor de búsqueda actualizado:",l)}),(l,n)=>(i(),a(h,null,[d(x(k),{title:"Clientes"}),d(q,null,{header:p(()=>[u(" Clientes ")]),default:p(()=>[e("div",F,[e("div",null,[f(e("select",{id:"estado_users",name:"estado","onUpdate:modelValue":n[0]||(n[0]=t=>m(o)?o.value=t:o=t),onChange:g,class:"block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"},M,544),[[v,x(o)]])]),e("div",T,[z,e("div",I,[U,f(e("input",{type:"search",onKeydown:B(g,["enter"]),"onUpdate:modelValue":n[1]||(n[1]=t=>m(r)?r.value=t:r=t),id:"default-search",class:"block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-0 focus:border-transparent",placeholder:"Busqueda de usuarios",required:""},null,544),[[C,x(r)]]),e("button",{type:"submit",onClick:g,class:"text-white absolute end-2.5 bottom-2.5 bg-sky-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-sky-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},"Buscar")])]),e("div",Z,[d(j,{href:l.route("clientes.create")},{default:p(()=>[u(" Agregar ")]),_:1},8,["href"])])]),e("div",$,[e("div",L,[e("div",R,[e("div",G,[e("table",H,[J,e("tbody",null,[(i(!0),a(h,null,N(b.clientes.data,t=>(i(),a("tr",{key:t.id,class:"text-gray-700"},[e("td",P,[e("p",Q,s(t.nombre),1)]),e("td",W,[e("p",X,s(t.identificacion),1)]),e("td",Y,[e("p",ee,s(t.direccion),1)]),e("td",te,[e("p",se,s(t.telefono),1)]),e("td",re,[e("p",oe,s(t.correo),1)]),ae,e("td",de,[t.estado=="Nuevo"?(i(),a("span",ie,s(t.estado),1)):_("",!0),t.estado=="Bloqueado"?(i(),a("span",le,s(t.estado),1)):_("",!0)]),e("td",ne,[d(E,{class:"flex w-full justify-center",href:l.route("clientes.edit",t.id)},{default:p(()=>[u(" Editar ")]),_:2},1032,["href"])])]))),128))])])])])])]),e("div",ce,[d(A,{links:b.clientes.links},null,8,["links"])])]),_:1})],64))}};export{ke as default};