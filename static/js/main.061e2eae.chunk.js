(this["webpackJsonpreact-to-do"]=this["webpackJsonpreact-to-do"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n(1),i=n.n(c),r=n(7),a=n.n(r),d=(n(13),n(4)),u=n(6);n(14);function s(t){var e=t.todo,n=t.index,c=t.completeTodo,i=t.removeTodo;return Object(o.jsxs)("div",{className:"todo",style:{textDecoration:e.isCompleted?"line-through":""},children:[e.text,Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:function(){return c(n)},children:"Complete"}),Object(o.jsx)("button",{onClick:function(){return i(n)},children:"x"})]})]})}function l(t){var e=t.addTodo,n=i.a.useState(""),c=Object(u.a)(n,2),r=c[0],a=c[1];return Object(o.jsx)("form",{onSubmit:function(t){t.preventDefault(),r&&(e(r),a(""))},children:Object(o.jsx)("input",{type:"text",className:"input",value:r,onChange:function(t){return a(t.target.value)}})})}var j=function(){var t=i.a.useState([{text:"Learn about React",isCompleted:!1},{text:"Meet friend for lunch",isCompleted:!1},{text:"Build really cool todo app",isCompleted:!1}]),e=Object(u.a)(t,2),n=e[0],c=e[1],r=function(t){var e=Object(d.a)(n);e[t].isCompleted=!0,c(e)},a=function(t){var e=Object(d.a)(n);e.splice(t,1),c(e)};return Object(o.jsx)("div",{className:"app",children:Object(o.jsxs)("div",{className:"todo-list",children:[n.map((function(t,e){return Object(o.jsx)(s,{index:e,todo:t,completeTodo:r,removeTodo:a},e)})),Object(o.jsx)(l,{addTodo:function(t){var e=[].concat(Object(d.a)(n),[{text:t}]);c(e)}})]})})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),o(t),c(t),i(t),r(t)}))};a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.061e2eae.chunk.js.map