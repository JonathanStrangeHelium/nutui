import{c as u,T as e}from"./mobile.2d92becb.js";import{_ as c}from"./index.1db48411.js";import{r as k,e as g,j as i,g as a,o as m}from"./vendor.d7b11138.js";const{createDemo:p}=u("toast"),v=p({setup(){return{textToast:o=>{e.text(o)},successToast:o=>{e.success(o)},errorToast:o=>{e.fail(o)},warningToast:o=>{e.warn(o)},loadingToast:o=>{e.loading(o)},NoToast:o=>{e.text(o,{duration:0})},NoLoading:o=>{e.loading(o,{cover:!0})}}}}),$={class:"demo"},f=a("h2",null,"\u57FA\u672C\u7528\u6CD5",-1),C=a("h2",null,"Toast\u4E0D\u6D88\u5931",-1),N=a("h2",null,"Loading\u5E26\u900F\u660E\u906E\u7F69",-1);function b(s,t,r,l,d,T){const n=k("nut-cell");return m(),g("div",$,[f,i(n,{title:"Text \u6587\u5B57\u63D0\u793A","is-link":"",onClick:t[0]||(t[0]=o=>s.textToast("\u7F51\u7EDC\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5~"))}),i(n,{title:"Success \u6210\u529F\u63D0\u793A","is-link":"",onClick:t[1]||(t[1]=o=>s.successToast("\u6210\u529F\u63D0\u793A"))}),i(n,{title:"Error \u5931\u8D25\u63D0\u793A","is-link":"",onClick:t[2]||(t[2]=o=>s.errorToast("\u5931\u8D25\u63D0\u793A"))}),i(n,{title:"Warning \u8B66\u544A\u63D0\u793A","is-link":"",onClick:t[3]||(t[3]=o=>s.warningToast("\u8B66\u544A\u63D0\u793A"))}),i(n,{title:"Loading \u52A0\u8F7D\u63D0\u793A","is-link":"",onClick:t[4]||(t[4]=o=>s.loadingToast("\u52A0\u8F7D\u4E2D"))}),C,i(n,{title:"Toast \u6587\u5B57\u63D0\u793A\u4E0D\u6D88\u5931","is-link":"",onClick:t[5]||(t[5]=o=>s.NoToast("Toast\u4E0D\u6D88\u5931~"))}),N,i(n,{title:"\u5E26\u6587\u6848+\u5E26\u900F\u660E\u906E\u7F69+\u81EA\u52A8\u6D88\u5931","is-link":"",onClick:t[6]||(t[6]=o=>s.NoLoading("\u52A0\u8F7D\u4E2D~"))})])}var x=c(v,[["render",b]]);export{x as default};
