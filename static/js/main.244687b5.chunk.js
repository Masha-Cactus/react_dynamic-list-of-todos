(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(5),n=c.n(s),a=c(1),l=c.n(a),i=(c(10),c(11),c(2));function o(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var d;!function(e){e.ALL="All",e.ACTIVE="Active",e.COMPLETED="Completed"}(d||(d={}));var r=c(0),j=[],u=l.a.createContext({todos:j,visibleTodos:j,selectedTodo:null,setSelectedTodo:function(){},setFilter:function(){},setQuery:function(){},query:""}),b=function(e){var t=e.children,c=Object(a.useState)([]),s=Object(i.a)(c,2),n=s[0],l=s[1],j=Object(a.useState)(null),b=Object(i.a)(j,2),h=b[0],O=b[1],m=Object(a.useState)(d.ALL),x=Object(i.a)(m,2),f=x[0],v=x[1],p=Object(a.useState)(""),N=Object(i.a)(p,2),y=N[0],T=N[1],g=n.filter((function(e){switch(f){case d.ACTIVE:return!0===e.completed;case d.COMPLETED:return!1===e.completed;case d.ALL:default:return e}})).filter((function(e){return e.title.includes(y.toLowerCase())})),C=Object(a.useMemo)((function(){return{todos:n,visibleTodos:g,selectedTodo:h,setSelectedTodo:O,setFilter:v,setQuery:T,query:y}}),[n,h,g,y]);return Object(a.useEffect)((function(){o("/todos").then((function(e){return l(e)}))}),[]),Object(r.jsx)(u.Provider,{value:C,children:t})},h=(c(13),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})}),O=function(){var e=Object(a.useContext)(u),t=e.setFilter,c=e.setQuery,s=e.query;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return t(e.target.value)},children:[Object(r.jsx)("option",{value:d.ALL,children:"All"}),Object(r.jsx)("option",{value:d.ACTIVE,children:"Active"}),Object(r.jsx)("option",{value:d.COMPLETED,children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",onChange:function(e){return c(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),s.length>0&&Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},m=c(3),x=c.n(m),f=function(){var e=Object(a.useContext)(u),t=e.visibleTodos,c=e.setSelectedTodo;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){var t=e.id,s=e.title,n=e.completed;return Object(r.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(r.jsx)("td",{className:"is-vcentered",children:t}),Object(r.jsx)("td",{className:"is-vcentered",children:n&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:x()({"has-text-success":n,"has-text-danger":!n}),children:s})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"far fa-eye"})})})})]},t)}))})]})},v=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),c=t[0],s=t[1],n=Object(a.useContext)(u),l=n.selectedTodo,d=n.setSelectedTodo,j=Object(a.useState)(!0),b=Object(i.a)(j,2),O=b[0],m=b[1];return Object(a.useEffect)((function(){var e;null!==l&&(e=l.userId,o("/users/".concat(e))).then((function(e){return s(e)})).finally((function(){return m(!1)}))}),[l]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),O?Object(r.jsx)(h,{}):Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===l||void 0===l?void 0:l.id)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return d(null)}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:null===l||void 0===l?void 0:l.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(r.jsx)("strong",{className:x()({"has-text-danger":!(null!==l&&void 0!==l&&l.completed),"has-text-success":null===l||void 0===l?void 0:l.completed}),children:null!==l&&void 0!==l&&l.completed?"Done":"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(null===c||void 0===c?void 0:c.email),children:null===c||void 0===c?void 0:c.name})]})]})]})]})},p=function(){var e=Object(a.useContext)(u),t=e.visibleTodos,c=e.selectedTodo;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(O,{})}),Object(r.jsxs)("div",{className:"block",children:[!t.length&&Object(r.jsx)(h,{}),Object(r.jsx)(f,{})]})]})})}),c&&Object(r.jsx)(v,{})]})},N=function(){return Object(r.jsx)(b,{children:Object(r.jsx)(p,{})})};n.a.render(Object(r.jsx)(N,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.244687b5.chunk.js.map