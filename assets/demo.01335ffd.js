import{c as t}from"./mobile.305be3e0.js";import{r as e,o as l,c as s,f as i}from"./vendor.27122b45.js";import"./index.bda1353b.js";const{createDemo:c}=t("cell");var n=c({props:{},setup:()=>({testClick:t=>{alert(t)}})});const o={class:"demo"},d=i("h2",null,"基本用法",-1),r=i("h2",null,"链接",-1),a=i("h2",null,"展示图标",-1),u=i("h2",null,"只展示 desc ，可通过 desc-text-align 调整内容位置",-1);n.render=function(t,c,n,m,p,b){const f=e("nut-cell");return l(),s("div",o,[d,i(f,{title:"我是标题",desc:"描述文字"}),i(f,{title:"我是标题","sub-title":"副标题描述",desc:"描述文字"}),i(f,{title:"点击测试",onClick:t.testClick},null,8,["onClick"]),r,i(f,{title:"链接","is-link":""}),i(f,{title:"URL 跳转",desc:"https://jd.com","is-link":"",url:"https://jd.com"}),i(f,{title:"路由跳转 ’/‘ ",to:"/"}),a,i(f,{title:"姓名",icon:"my",desc:"张三"}),u,i(f,{"desc-text-align":"left",desc:"张三"})])};export default n;
