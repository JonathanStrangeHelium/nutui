import{c as a}from"./mobile.1825f91c.js";import{k as e,A as t,B as l,r as o,o as d,c as s,f as i,z as n,j as r}from"./index.d870aa4d.js";const{createDemo:u}=a("button");var p=u({props:{},setup(a){let t=e(!1);return{isLoading:t,changeLoading:()=>{t.value=!0,setTimeout((()=>{t.value=!1}),3e3)}}}});const f=n();t("data-v-2aee8f2e");const c={class:"demo"},y=i("h2",null,"按钮类型",-1),m={class:"demo-button-row"},_=r("主要按钮"),b=r("信息按钮"),g=r("默认按钮"),v={class:"demo-button-row2"},h=r("危险按钮"),w=r("警告按钮"),k=r("成功按钮"),L=i("h2",null,"朴素按钮",-1),j={class:"demo-button-row2"},q=r("朴素按钮"),x=r("朴素按钮"),z=i("h2",null,"禁用状态",-1),C={class:"demo-button-row2"},A=r("禁用状态"),B=r("禁用状态"),D=r("禁用状态"),I=i("h2",null,"按钮形状",-1),T={class:"demo-button-row2"},E=r("方形按钮"),F=r("圆形按钮"),G=i("h2",null,"加载状态",-1),H={class:"demo-button-row2"},J=r("加载中..."),K=r("Click me!"),M=i("h2",null,"图标按钮",-1),N={class:"demo-button-row2"},O=r("收藏"),P=i("h2",null,"按钮尺寸",-1),Q={class:"demo-button-row2"},R=r("大号按钮"),S=r("普通按钮"),U=r("小型按钮"),V=i("h2",null,"块级元素",-1),W={class:"demo-button-row2"},X=r("块级元素"),Y=i("h2",null,"自定义颜色",-1),Z={class:"demo-button-row2"},$=r("单色按钮"),aa=r("单色按钮"),ea=r(" 渐变按钮 ");l();const ta=f(((a,e,t,l,n,r)=>{const u=o("nut-button");return d(),s("div",c,[y,i("div",m,[i(u,{type:"primary"},{default:f((()=>[_])),_:1}),i(u,{type:"info"},{default:f((()=>[b])),_:1}),i(u,{type:"default"},{default:f((()=>[g])),_:1})]),i("div",v,[i(u,{type:"danger"},{default:f((()=>[h])),_:1}),i(u,{type:"warning"},{default:f((()=>[w])),_:1}),i(u,{type:"success"},{default:f((()=>[k])),_:1})]),L,i("div",j,[i(u,{plain:"",type:"primary"},{default:f((()=>[q])),_:1}),i(u,{plain:"",type:"info"},{default:f((()=>[x])),_:1})]),z,i("div",C,[i(u,{disabled:"",type:"primary"},{default:f((()=>[A])),_:1}),i(u,{plain:"",disabled:"",type:"info"},{default:f((()=>[B])),_:1}),i(u,{plain:"",disabled:"",type:"primary"},{default:f((()=>[D])),_:1})]),I,i("div",T,[i(u,{shape:"square",type:"primary"},{default:f((()=>[E])),_:1}),i(u,{type:"info"},{default:f((()=>[F])),_:1})]),G,i("div",H,[i(u,{loading:"",type:"info"}),i(u,{loading:"",type:"warning"},{default:f((()=>[J])),_:1}),i(u,{loading:a.isLoading,type:"success",onClick:a.changeLoading},{default:f((()=>[K])),_:1},8,["loading","onClick"])]),M,i("div",N,[i(u,{shape:"square",plain:"",type:"primary",icon:"star-fill"}),i(u,{shape:"square",type:"primary",icon:"star"},{default:f((()=>[O])),_:1})]),P,i("div",Q,[i(u,{size:"large",type:"primary",style:{"margin-bottom":"10px"}},{default:f((()=>[R])),_:1}),i(u,{type:"primary"},{default:f((()=>[S])),_:1}),i(u,{size:"small",type:"primary"},{default:f((()=>[U])),_:1})]),V,i("div",W,[i(u,{block:"",type:"primary"},{default:f((()=>[X])),_:1})]),Y,i("div",Z,[i(u,{color:"#7232dd"},{default:f((()=>[$])),_:1}),i(u,{color:"#7232dd",plain:""},{default:f((()=>[aa])),_:1}),i(u,{color:"linear-gradient(to right, #ff6034, #ee0a24)"},{default:f((()=>[ea])),_:1})])])}));p.render=ta,p.__scopeId="data-v-2aee8f2e";export default p;
