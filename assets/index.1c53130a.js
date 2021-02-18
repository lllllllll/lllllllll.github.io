var e=Object.assign;import{r as t,a,K as l,t as r,u as n,b as s,W as c,l as o,c as i,d as u,e as d,f as m,g as p,P as E}from"./vendor.227a002d.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const l=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,n)=>{const s=new URL(e,l);if(self[t].moduleMap[s])return a(self[t].moduleMap[s]);const c=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),o=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){n(new Error(`Failed to import: ${e}`)),r(o)},onload(){a(self[t].moduleMap[s]),r(o)}});document.head.appendChild(o)})),self[t].moduleMap={}}}("/assets/");async function g(e,t,a){const l=await a.json();return 200===a.status||201===a.status?e({type:t.success,data:l,status:a.status}):e({type:t.failure,data:null,status:a.status?a.status:0})}function P(e,t){e({type:t.failure,data:null,status:500})}const h=async(e,t,a,l)=>{e({type:t.loading,status:"PENDING"});try{const r=l?new URLSearchParams(Object.entries(l)).toString():"";g(e,t,await fetch(`${a+r}`,{headers:new Headers({"Content-Type":"application/json"})}))}catch(r){return P(e,t)}};var f={success:"GET_USER_SUCCESS",failure:"GET_USER_FAILURE",loading:"GET_USER_LOADING"},v={success:"GET_PRODUCTS_SUCCESS",failure:"GET_PRODUCTS_FAILURE",loading:"GET_PRODUCTS_LOADING"},C={success:"ADD_PRODUCT_SUCCESS",failure:"ADD_PRODUCT_FAILURE",loading:"ADD_PRODUCT_LOADING"},D={success:"DEL_PRODUCT_SUCCESS",failure:"DEL_PRODUCT_FAILURE",loading:"DEL_PRODUCT_LOADING"},N={success:"EDIT_PRODUCT_SUCCESS",failure:"EDIT_PRODUCT_FAILURE",loading:"EDIT_PRODUCT_LOADING"};const y="http://localhost:3010",S=()=>e=>h(e,v,`${y}/product`),_=e=>t=>(async(e,t,a,l,r)=>{e({type:t.loading,status:"PENDING"});try{g(e,t,await fetch(`${a}`,{method:"POST",body:JSON.stringify(l),headers:new Headers({"content-Type":"application/json",enctype:r?"multipart/form-data":""})}))}catch(n){return P(e,t)}})(t,C,`${y}/product`,e),b=e=>t=>(async(e,t,a)=>{e({type:t.loading,status:"PENDING"});try{g(e,t,await fetch(`${a}`,{method:"DELETE",headers:new Headers({"Content-Type":"application/json"})}))}catch(l){return P(e,t)}})(t,D,`${y}/product/${e}`);function U({columns:l,data:r}){const{getTableProps:n,getTableBodyProps:s,headerGroups:c,page:o,prepareRow:i,canPreviousPage:u,canNextPage:d,pageOptions:m,pageCount:p,gotoPage:E,nextPage:g,previousPage:P,setPageSize:h,state:{pageIndex:f,pageSize:v}}=a.useTable({columns:l,data:r,initialState:{pageIndex:0}},a.useSortBy,a.usePagination);return t.createElement(t.Fragment,null,t.createElement("table",e({},n()),t.createElement("thead",null,c.map((a=>t.createElement("tr",e({},a.getHeaderGroupProps()),a.headers.map((a=>t.createElement("th",e({},a.getHeaderProps(a.getSortByToggleProps())),a.render("Header"),t.createElement("span",null,(null==a?void 0:a.isSorted)?(null==a?void 0:a.isSortedDesc)?" ↓":" ↑":"")))))))),t.createElement("tbody",e({},s()),o.map((a=>(i(a),t.createElement("tr",e({},a.getRowProps()),a.cells.map((a=>t.createElement("td",e({},a.getCellProps()),a.render("Cell")))))))))),t.createElement("br",null),t.createElement("div",{className:"pagination"},t.createElement("button",{onClick:()=>E(0),disabled:!u},"<<")," ",t.createElement("button",{onClick:()=>P(),disabled:!u},"<")," ",t.createElement("button",{onClick:()=>g(),disabled:!d},">")," ",t.createElement("button",{onClick:()=>E(p-1),disabled:!d},">>")," ",t.createElement("span",null,"Page"," ",t.createElement("strong",null,f+1," of ",m.length)," "),t.createElement("span",null,"| Go to page:"," ",t.createElement("input",{type:"number",defaultValue:f+1,onChange:e=>{const t=e.target.value?Number(e.target.value)-1:0;E(t)},style:{width:"100px"}}))," ",t.createElement("select",{value:v,onChange:e=>{h(Number(e.target.value))}},[10,20,30,40,50].map((e=>t.createElement("option",{key:e,value:e},"Show ",e))))))}var T=({columns:e=[],data:a=[]})=>t.createElement(U,{columns:e,data:a});l("th",r);var w=()=>{const a=n(),[l,r]=t.useState({title:"",expire:new Date,price:"",photos:"",description:""}),o=s((({addProduct:e})=>e.data));t.useEffect((()=>{o&&(a(S()),r({title:"",expire:new Date,price:"",photos:"",description:""}))}),[o]);return t.createElement("div",{className:"Add-product"},t.createElement("p",{className:"title"},"Add Product"),t.createElement("div",{className:"row"},t.createElement("div",{className:"col form-control"},t.createElement("label",null,"Product name"),t.createElement("input",{className:"w100",value:l.title,onChange:t=>r(e(e({},l),{title:t.target.value})),type:"text",placeholder:"Product name"})),t.createElement("div",{className:"col form-control"},t.createElement("label",null,"Expire date"),t.createElement(c,{selected:l.expire,onChange:t=>r(e(e({},l),{expire:t})),locale:"th",showTimeSelect:!0,timeFormat:"p",timeIntervals:15,dateFormat:"Pp"})),t.createElement("div",{className:"col form-control"},t.createElement("label",null,"Price"),t.createElement("input",{className:"w100",value:l.price,onChange:t=>r(e(e({},l),{price:t.target.value})),type:"number",placeholder:"Price"})),t.createElement("div",{className:"col form-control"},t.createElement("label",null,"Photos url"),t.createElement("input",{className:"w100",value:l.photos,onChange:t=>r(e(e({},l),{photos:t.target.value})),type:"text",placeholder:"Ex: https://xxx.x"}))),t.createElement("div",{className:"row"},t.createElement("div",{className:"col form-control"},t.createElement("label",null,"Description"),t.createElement("textarea",{className:"w100",value:l.description,onChange:t=>r(e(e({},l),{description:t.target.value})),placeholder:"Description"}))),t.createElement("div",{className:"row"},t.createElement("div",{className:"col txt-right"},t.createElement("button",{className:"primary",onClick:()=>{a(_(l))}},"Save"))))},R=()=>{const e=s((e=>o.findKey(e,["status","PENDING"])));return t.createElement(t.Fragment,null,e&&t.createElement("div",{className:"box-load"},t.createElement("div",{className:"loading"},"Loading...")))};function O(){const e=n(),a=s((({getUsers:e})=>e.data)),l=s((({getProducts:e})=>e.data)),r=s((({delProduct:e})=>e.data));t.useEffect((()=>{a||e((e=>h(e,f,`${y}/user`)))}),[a]),t.useEffect((()=>{l||e(S())}),[l]),t.useEffect((()=>{r&&e(S())}),[r]);const c=[{Header:"Title",accessor:"title"},{Header:"Description",accessor:"description"},{Header:"Price",accessor:"price"},{Header:"Photos",accessor:"photos"}].slice(0);return c.push({id:"actions",accessor:"_id",Cell:({value:a})=>t.createElement("a",{onClick:()=>{e(b(a))}},"Delete")}),t.createElement("div",{className:"App"},t.createElement("div",{className:"container"},t.createElement(w,null),t.createElement(T,{columns:c,data:l})),t.createElement(R,null))}function L(t,a,l){switch(a.type){case l.success:case l.failure:case l.loading:return Object.assign({},t,e({},a));default:return t}}var x=u(i({getUsers:(e={},t)=>L(e,t,f),getProducts:(e={},t)=>L(e,t,v),addProduct:(e={},t)=>L(e,t,C),editProduct:(e={},t)=>L(e,t,N),delProduct:(e={},t)=>L(e,t,D)}),d(m));p.render(t.createElement(E,{store:x},t.createElement(O,null)),document.getElementById("root"));