import{_ as f}from"./_plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as n,d as o,t as b,l as k,r as h,h as g,v as y,F as u,z as p,j as _}from"./app-d8AaaGVx.js";const v={props:{label:String,fieldId:{type:String,required:!0},checked:{type:Boolean}}},x={class:"flex items-center mb-4"},A=["checked","id"],I=["for"];function O(c,l,e,s,i,a){return d(),n("div",x,[o("input",{onInput:l[0]||(l[0]=r=>c.$emit("update:checked",r.target.checked)),type:"checkbox",checked:e.checked,id:e.fieldId,class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"},null,40,A),o("label",{for:e.fieldId,class:"ms-2 text-sm font-medium text-gray-900"},b(e.label),9,I)])}const B=f(v,[["render",O]]),C={emits:["update:value"],props:{value:{type:Array,required:!0},options:{type:Array,required:!0,validator:c=>{const l=c.every(s=>Object.keys(s).includes("name")),e=c.every(s=>Object.keys(s).includes("id"));return l&&e}}},setup(c,l){const e=k(!1);return{selectAll:e,selectAllOptions:()=>{if(console.log(e.value),e.value){const a=c.options.map(r=>r.id);l.emit("update:value",a)}else l.emit("update:value",[])},check:(a,r)=>{let t=[...c.value];r?t.push(a):(t.splice(t.indexOf(a),1),e.value=!1),l.emit("update:value",t)}}},components:{"check-box":B}},j={class:"mt-3 mb-6 flex items-center"},S=o("label",{for:"selectall",class:"ms-2 font-medium text-gray-700"},"Seleccionar todos",-1),q={class:"flex flex-col items-start justify-center w-64 border-2 border-gray-400 p-8 rounded-lg bg-gray-100"};function w(c,l,e,s,i,a){const r=h("check-box");return d(),n(u,null,[o("div",j,[g(o("input",{type:"checkbox",id:"selectall","onUpdate:modelValue":l[0]||(l[0]=t=>s.selectAll=t),onChange:l[1]||(l[1]=(...t)=>s.selectAllOptions&&s.selectAllOptions(...t)),class:"text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"},null,544),[[y,s.selectAll]]),S]),o("div",q,[(d(!0),n(u,null,p(e.options,t=>(d(),_(r,{checked:e.value.includes(t.id),"onUpdate:checked":m=>s.check(t.id,m),fieldId:t.name,label:t.name,key:t},null,8,["checked","onUpdate:checked","fieldId","label"]))),128))])],64)}const V=f(C,[["render",w]]);export{V as M};
