(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/+8G":function(n,l,t){"use strict";t.d(l,"a",function(){return e}),t("k3PP");var e=function(){return function(){}}()},B5Ai:function(n,l,t){"use strict";t.d(l,"b",function(){return r}),t.d(l,"a",function(){return u}),t.d(l,"c",function(){return i});var e=function(n,l){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var t in l)l.hasOwnProperty(t)&&(n[t]=l[t])})(n,l)};function r(n,l){function t(){this.constructor=n}e(n,l),n.prototype=null===l?Object.create(l):(t.prototype=l.prototype,new t)}function u(n,l,t,e){return new(t||(t=Promise))(function(r,u){function i(n){try{a(e.next(n))}catch(l){u(l)}}function o(n){try{a(e.throw(n))}catch(l){u(l)}}function a(n){n.done?r(n.value):new t(function(l){l(n.value)}).then(i,o)}a((e=e.apply(n,l||[])).next())})}function i(n,l){var t,e,r,u,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return u={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function o(u){return function(o){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,e&&(r=2&u[0]?e.return:u[0]?e.throw||((r=e.return)&&r.call(e),0):e.next)&&!(r=r.call(e,u[1])).done)return r;switch(e=0,r&&(u=[2&u[0],r.value]),u[0]){case 0:case 1:r=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,e=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!r||u[1]>r[0]&&u[1]<r[3])){i.label=u[1];break}if(6===u[0]&&i.label<r[1]){i.label=r[1],r=u;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(u);break}r[2]&&i.ops.pop(),i.trys.pop();continue}u=l.call(n,i)}catch(o){u=[6,o],e=0}finally{t=r=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,o])}}}},CqG3:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),function(n){for(var t in n)l.hasOwnProperty(t)||(l[t]=n[t])}(t("tct4"))},JvIM:function(n,l,t){"use strict";function e(n){"requestIdleCallback"in window?window.requestIdleCallback(n):setTimeout(n,32)}function r(n){return!!n.shadowRoot&&!!n.attachShadow}function u(n){var l=n.closest("ion-item");return l?l.querySelector("ion-label"):null}function i(n,l,t,e,u){if(n||r(l)){var i=l.querySelector("input.aux-input");i||((i=l.ownerDocument.createElement("input")).type="hidden",i.classList.add("aux-input"),l.appendChild(i)),i.disabled=u,i.name=t,i.value=e||""}}function o(n,l,t){return Math.max(n,Math.min(l,t))}function a(n){return n.timeStamp||Date.now()}function c(n){if(n){var l=n.changedTouches;if(l&&l.length>0){var t=l[0];return{x:t.clientX,y:t.clientY}}if(void 0!==n.pageX)return{x:n.pageX,y:n.pageY}}return{x:0,y:0}}function s(n,l){var t="rtl"===n.document.dir;switch(l){case"start":return t;case"end":return!t;default:throw new Error('"'+l+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function d(n,l){var t=n._original||n;return{_original:n,emit:f(t.emit.bind(t),l)}}function f(n,l){var t;return void 0===l&&(l=0),function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];clearTimeout(t),t=setTimeout.apply(void 0,[n,l].concat(e))}}t.d(l,"a",function(){return e}),t.d(l,"b",function(){return a}),t.d(l,"c",function(){return r}),t.d(l,"d",function(){return u}),t.d(l,"e",function(){return i}),t.d(l,"f",function(){return d}),t.d(l,"g",function(){return s}),t.d(l,"h",function(){return o}),t.d(l,"i",function(){return f}),t.d(l,"j",function(){return c})},KAx4:function(n,l,t){"use strict";var e=t("CcnG"),r=t("BHnd"),u=t("y4qS"),i=t("Ip0R"),o=t("Fzqc"),a=(t("Wf4p"),t("ZYjt"),t("dWZg")),c=e.pb({encapsulation:2,styles:["mat-table{display:block}mat-header-row{min-height:56px}mat-footer-row,mat-row{min-height:48px}mat-footer-row,mat-header-row,mat-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-footer-row::after,mat-header-row::after,mat-row::after{display:inline-block;min-height:inherit;content:''}mat-cell:first-of-type,mat-footer-cell:first-of-type,mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-footer-cell:last-of-type,mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-footer-cell,mat-header-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-footer-row,tr.mat-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}td.mat-cell,td.mat-footer-cell,th.mat-header-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type,th.mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type,[dir=rtl] th.mat-header-cell:first-of-type{padding-left:0;padding-right:24px}td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type,th.mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type,[dir=rtl] th.mat-header-cell:last-of-type{padding-right:0;padding-left:24px}"],data:{}});function s(n){return e.Fb(2,[e.Cb(402653184,1,{_rowOutlet:0}),e.Cb(402653184,2,{_headerRowOutlet:0}),e.Cb(402653184,3,{_footerRowOutlet:0}),e.zb(null,0),(n()(),e.rb(4,16777216,null,null,1,null,null,null,null,null,null,null)),e.qb(5,16384,[[2,4]],0,u.s,[e.Q,e.k],null,null),(n()(),e.rb(6,16777216,null,null,1,null,null,null,null,null,null,null)),e.qb(7,16384,[[1,4]],0,u.q,[e.Q,e.k],null,null),(n()(),e.rb(8,16777216,null,null,1,null,null,null,null,null,null,null)),e.qb(9,16384,[[3,4]],0,u.r,[e.Q,e.k],null,null)],null,null)}var d=e.pb({encapsulation:2,styles:[],data:{}});function f(n){return e.Fb(2,[(n()(),e.rb(0,16777216,null,null,1,null,null,null,null,null,null,null)),e.qb(1,147456,null,0,u.c,[e.Q],null,null)],null,null)}var b=e.pb({encapsulation:2,styles:[],data:{}});function h(n){return e.Fb(2,[(n()(),e.rb(0,16777216,null,null,1,null,null,null,null,null,null,null)),e.qb(1,147456,null,0,u.c,[e.Q],null,null)],null,null)}var p=t("oBZk"),m=t("ZZ/e"),v=t("k3PP"),y=t("Z2Br");t.d(l,"a",function(){return I});var g=e.pb({encapsulation:0,styles:[["@media (max-width:800px){.responsive_table[_ngcontent-%COMP%]{overflow-x:auto!important}.mat-table[_ngcontent-%COMP%]{min-width:800px}}"]],data:{}});function w(n){return e.Fb(0,[(n()(),e.rb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),e.qb(1,16384,null,0,r.e,[u.d,e.k],null,null),(n()(),e.Eb(-1,null,["Bakkie"]))],null,null)}function E(n){return e.Fb(0,[(n()(),e.rb(0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),e.qb(1,16384,null,0,r.a,[u.d,e.k],null,null),(n()(),e.Eb(2,null,["",""]))],null,function(n,l){n(l,2,0,l.context.$implicit.bakkieNumber)})}function C(n){return e.Fb(0,[(n()(),e.rb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),e.qb(1,16384,null,0,r.e,[u.d,e.k],null,null),(n()(),e.Eb(-1,null,["Report_Date"]))],null,null)}function S(n){return e.Fb(0,[(n()(),e.rb(0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),e.qb(1,16384,null,0,r.a,[u.d,e.k],null,null),(n()(),e.Eb(2,null,["",""]))],null,function(n,l){n(l,2,0,l.context.$implicit.reportDate)})}function _(n){return e.Fb(0,[(n()(),e.rb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),e.qb(1,16384,null,0,r.e,[u.d,e.k],null,null),(n()(),e.Eb(-1,null,["Start_Kilos"]))],null,null)}function k(n){return e.Fb(0,[(n()(),e.rb(0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),e.qb(1,16384,null,0,r.a,[u.d,e.k],null,null),(n()(),e.Eb(2,null,["",""]))],null,function(n,l){n(l,2,0,l.context.$implicit.startKilos)})}function q(n){return e.Fb(0,[(n()(),e.rb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),e.qb(1,16384,null,0,r.e,[u.d,e.k],null,null),(n()(),e.Eb(-1,null,["End_Kilos"]))],null,null)}function D(n){return e.Fb(0,[(n()(),e.rb(0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),e.qb(1,16384,null,0,r.a,[u.d,e.k],null,null),(n()(),e.Eb(2,null,["",""]))],null,function(n,l){n(l,2,0,l.context.$implicit.endKilos)})}function x(n){return e.Fb(0,[(n()(),e.rb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),e.qb(1,16384,null,0,r.e,[u.d,e.k],null,null),(n()(),e.Eb(-1,null,["Total_Kilos"]))],null,null)}function B(n){return e.Fb(0,[(n()(),e.rb(0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),e.qb(1,16384,null,0,r.a,[u.d,e.k],null,null),(n()(),e.Eb(2,null,["",""]))],null,function(n,l){n(l,2,0,l.context.$implicit.dayTotalKilos)})}function R(n){return e.Fb(0,[(n()(),e.rb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),e.qb(1,16384,null,0,r.e,[u.d,e.k],null,null),(n()(),e.Eb(-1,null,["Diesel"]))],null,null)}function O(n){return e.Fb(0,[(n()(),e.rb(0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),e.qb(1,16384,null,0,r.a,[u.d,e.k],null,null),(n()(),e.Eb(2,null,["",""]))],null,function(n,l){n(l,2,0,l.context.$implicit.dieselFilled)})}function T(n){return e.Fb(0,[(n()(),e.rb(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),e.qb(1,16384,null,0,r.e,[u.d,e.k],null,null),(n()(),e.Eb(-1,null,["Travel"]))],null,null)}function A(n){return e.Fb(0,[(n()(),e.rb(0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),e.qb(1,16384,null,0,r.a,[u.d,e.k],null,null),(n()(),e.Eb(2,null,["",""]))],null,function(n,l){n(l,2,0,l.context.$implicit.notableTravel)})}function L(n){return e.Fb(0,[(n()(),e.rb(0,0,null,null,2,"mat-header-row",[["class","mat-header-row"],["role","row"]],null,null,null,f,d)),e.Bb(6144,null,u.k,null,[r.g]),e.qb(2,49152,null,0,r.g,[],null,null)],null,null)}function M(n){return e.Fb(0,[(n()(),e.rb(0,0,null,null,2,"mat-row",[["class","mat-row"],["role","row"]],null,null,null,h,b)),e.Bb(6144,null,u.m,null,[r.i]),e.qb(2,49152,null,0,r.i,[],null,null)],null,null)}function F(n){return e.Fb(0,[(n()(),e.rb(0,0,null,null,6,"ion-header",[],null,null,null,p.x,p.f)),e.qb(1,49152,null,0,m.z,[e.h,e.k],null,null),(n()(),e.rb(2,0,null,0,4,"ion-toolbar",[["color","primary"]],null,null,null,p.J,p.r)),e.qb(3,49152,null,0,m.zb,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.rb(4,0,null,0,2,"ion-title",[],null,null,null,p.I,p.q)),e.qb(5,49152,null,0,m.xb,[e.h,e.k],null,null),(n()(),e.Eb(-1,0,["Diesel Report Listing"])),(n()(),e.rb(7,0,null,null,105,"ion-content",[["padding",""]],null,null,null,p.v,p.d)),e.qb(8,49152,null,0,m.s,[e.h,e.k],null,null),(n()(),e.rb(9,0,null,0,103,"div",[["class","responsive_table"]],null,null,null,null,null)),(n()(),e.rb(10,0,null,null,102,"mat-table",[["class","mat-elevation-z8 mat-table"]],null,null,null,s,c)),e.qb(11,2342912,null,4,r.k,[e.t,e.h,e.k,[8,null],[2,o.b],i.c,a.a],{dataSource:[0,"dataSource"]},null),e.Cb(603979776,1,{_contentColumnDefs:1}),e.Cb(603979776,2,{_contentRowDefs:1}),e.Cb(603979776,3,{_contentHeaderRowDefs:1}),e.Cb(603979776,4,{_contentFooterRowDefs:1}),(n()(),e.rb(16,0,null,null,12,null,null,null,null,null,null,null)),e.Bb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[r.c]),e.qb(18,16384,null,3,r.c,[],{name:[0,"name"]},null),e.Cb(335544320,5,{cell:0}),e.Cb(335544320,6,{headerCell:0}),e.Cb(335544320,7,{footerCell:0}),e.Bb(2048,[[1,4]],u.d,null,[r.c]),(n()(),e.ib(0,null,null,2,null,w)),e.qb(24,16384,null,0,r.f,[e.N],null,null),e.Bb(2048,[[6,4]],u.j,null,[r.f]),(n()(),e.ib(0,null,null,2,null,E)),e.qb(27,16384,null,0,r.b,[e.N],null,null),e.Bb(2048,[[5,4]],u.b,null,[r.b]),(n()(),e.rb(29,0,null,null,12,null,null,null,null,null,null,null)),e.Bb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[r.c]),e.qb(31,16384,null,3,r.c,[],{name:[0,"name"]},null),e.Cb(335544320,8,{cell:0}),e.Cb(335544320,9,{headerCell:0}),e.Cb(335544320,10,{footerCell:0}),e.Bb(2048,[[1,4]],u.d,null,[r.c]),(n()(),e.ib(0,null,null,2,null,C)),e.qb(37,16384,null,0,r.f,[e.N],null,null),e.Bb(2048,[[9,4]],u.j,null,[r.f]),(n()(),e.ib(0,null,null,2,null,S)),e.qb(40,16384,null,0,r.b,[e.N],null,null),e.Bb(2048,[[8,4]],u.b,null,[r.b]),(n()(),e.rb(42,0,null,null,12,null,null,null,null,null,null,null)),e.Bb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[r.c]),e.qb(44,16384,null,3,r.c,[],{name:[0,"name"]},null),e.Cb(335544320,11,{cell:0}),e.Cb(335544320,12,{headerCell:0}),e.Cb(335544320,13,{footerCell:0}),e.Bb(2048,[[1,4]],u.d,null,[r.c]),(n()(),e.ib(0,null,null,2,null,_)),e.qb(50,16384,null,0,r.f,[e.N],null,null),e.Bb(2048,[[12,4]],u.j,null,[r.f]),(n()(),e.ib(0,null,null,2,null,k)),e.qb(53,16384,null,0,r.b,[e.N],null,null),e.Bb(2048,[[11,4]],u.b,null,[r.b]),(n()(),e.rb(55,0,null,null,12,null,null,null,null,null,null,null)),e.Bb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[r.c]),e.qb(57,16384,null,3,r.c,[],{name:[0,"name"]},null),e.Cb(335544320,14,{cell:0}),e.Cb(335544320,15,{headerCell:0}),e.Cb(335544320,16,{footerCell:0}),e.Bb(2048,[[1,4]],u.d,null,[r.c]),(n()(),e.ib(0,null,null,2,null,q)),e.qb(63,16384,null,0,r.f,[e.N],null,null),e.Bb(2048,[[15,4]],u.j,null,[r.f]),(n()(),e.ib(0,null,null,2,null,D)),e.qb(66,16384,null,0,r.b,[e.N],null,null),e.Bb(2048,[[14,4]],u.b,null,[r.b]),(n()(),e.rb(68,0,null,null,12,null,null,null,null,null,null,null)),e.Bb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[r.c]),e.qb(70,16384,null,3,r.c,[],{name:[0,"name"]},null),e.Cb(335544320,17,{cell:0}),e.Cb(335544320,18,{headerCell:0}),e.Cb(335544320,19,{footerCell:0}),e.Bb(2048,[[1,4]],u.d,null,[r.c]),(n()(),e.ib(0,null,null,2,null,x)),e.qb(76,16384,null,0,r.f,[e.N],null,null),e.Bb(2048,[[18,4]],u.j,null,[r.f]),(n()(),e.ib(0,null,null,2,null,B)),e.qb(79,16384,null,0,r.b,[e.N],null,null),e.Bb(2048,[[17,4]],u.b,null,[r.b]),(n()(),e.rb(81,0,null,null,12,null,null,null,null,null,null,null)),e.Bb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[r.c]),e.qb(83,16384,null,3,r.c,[],{name:[0,"name"]},null),e.Cb(335544320,20,{cell:0}),e.Cb(335544320,21,{headerCell:0}),e.Cb(335544320,22,{footerCell:0}),e.Bb(2048,[[1,4]],u.d,null,[r.c]),(n()(),e.ib(0,null,null,2,null,R)),e.qb(89,16384,null,0,r.f,[e.N],null,null),e.Bb(2048,[[21,4]],u.j,null,[r.f]),(n()(),e.ib(0,null,null,2,null,O)),e.qb(92,16384,null,0,r.b,[e.N],null,null),e.Bb(2048,[[20,4]],u.b,null,[r.b]),(n()(),e.rb(94,0,null,null,12,null,null,null,null,null,null,null)),e.Bb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[r.c]),e.qb(96,16384,null,3,r.c,[],{name:[0,"name"]},null),e.Cb(335544320,23,{cell:0}),e.Cb(335544320,24,{headerCell:0}),e.Cb(335544320,25,{footerCell:0}),e.Bb(2048,[[1,4]],u.d,null,[r.c]),(n()(),e.ib(0,null,null,2,null,T)),e.qb(102,16384,null,0,r.f,[e.N],null,null),e.Bb(2048,[[24,4]],u.j,null,[r.f]),(n()(),e.ib(0,null,null,2,null,A)),e.qb(105,16384,null,0,r.b,[e.N],null,null),e.Bb(2048,[[23,4]],u.b,null,[r.b]),(n()(),e.ib(0,null,null,2,null,L)),e.qb(108,540672,null,0,r.h,[e.N,e.t],{columns:[0,"columns"]},null),e.Bb(2048,[[3,4]],u.l,null,[r.h]),(n()(),e.ib(0,null,null,2,null,M)),e.qb(111,540672,null,0,r.j,[e.N,e.t],{columns:[0,"columns"]},null),e.Bb(2048,[[2,4]],u.n,null,[r.j])],function(n,l){var t=l.component;n(l,3,0,"primary"),n(l,11,0,t.rows),n(l,18,0,"Bakkie"),n(l,31,0,"Report_Date"),n(l,44,0,"Start_Kilos"),n(l,57,0,"End_Kilos"),n(l,70,0,"Total_Kilos"),n(l,83,0,"Diesel"),n(l,96,0,"Travel"),n(l,108,0,t.tableColumns),n(l,111,0,t.tableColumns)},null)}function P(n){return e.Fb(0,[(n()(),e.rb(0,0,null,null,1,"app-list-diesel",[],null,null,null,F,g)),e.qb(1,114688,null,0,v.a,[y.a,m.Db],null,null)],function(n,l){n(l,1,0)},null)}var I=e.nb("app-list-diesel",v.a,P,{},{},[])},M4MB:function(n,l,t){"use strict";t.d(l,"a",function(){return h}),t.d(l,"b",function(){return b}),t.d(l,"c",function(){return a}),t.d(l,"d",function(){return c}),t.d(l,"e",function(){return f}),t.d(l,"f",function(){return u}),t.d(l,"g",function(){return i}),t.d(l,"h",function(){return o});var e=t("B5Ai"),r=0;function u(n,l){var t=n.ownerDocument;(function(n){0===r&&(r=1,n.addEventListener("focusin",function(l){var t=o(n);if(t&&t.backdropDismiss&&!function(n,l){for(;l;){if(l===n)return!0;l=l.parentElement}return!1}(t,l.target)){var e=t.querySelector("input,button");e&&e.focus()}}),n.addEventListener("ionBackButton",function(l){var t=o(n);t&&t.backdropDismiss&&l.detail.register(100,function(){return t.dismiss(void 0,h)})}),n.addEventListener("keyup",function(l){if("Escape"===l.key){var t=o(n);t&&t.backdropDismiss&&t.dismiss(void 0,h)}}))})(t),Object.assign(n,l),n.classList.add("overlay-hidden");var e=r++;return n.overlayIndex=e,n.hasAttribute("id")||(n.id="ion-overlay-"+e),s(t).appendChild(n),n.componentOnReady()}function i(n,l,t,e,r){var u=o(n,e,r);return u?u.dismiss(l,t):Promise.reject("overlay does not exist")}function o(n,l,t){var e=function(n,l){var t=Array.from(s(n).children).filter(function(n){return n.overlayIndex>0});return void 0===l?t:(l=l.toUpperCase(),t.filter(function(n){return n.tagName===l}))}(n,l);return void 0===t?e[e.length-1]:e.find(function(n){return n.id===t})}function a(n,l,t,r,u){return e.a(this,void 0,void 0,function(){var i;return e.c(this,function(e){switch(e.label){case 0:return n.presented?[2]:(n.presented=!0,n.willPresent.emit(),i=n.enterAnimation?n.enterAnimation:n.config.get(l,"ios"===n.mode?t:r),[4,d(n,i,n.el,u)]);case 1:return e.sent()&&n.didPresent.emit(),[2]}})})}function c(n,l,t,r,u,i,o){return e.a(this,void 0,void 0,function(){var a,c;return e.c(this,function(e){switch(e.label){case 0:if(!n.presented)return[2,!1];n.presented=!1,e.label=1;case 1:return e.trys.push([1,3,,4]),n.willDismiss.emit({data:l,role:t}),a=n.leaveAnimation?n.leaveAnimation:n.config.get(r,"ios"===n.mode?u:i),[4,d(n,a,n.el,o)];case 2:return e.sent(),n.didDismiss.emit({data:l,role:t}),[3,4];case 3:return c=e.sent(),console.error(c),[3,4];case 4:return n.el.remove(),[2,!0]}})})}function s(n){return n.querySelector("ion-app")||n.body}function d(n,l,r,u){return e.a(this,void 0,void 0,function(){var i,o,a,c;return e.c(this,function(e){switch(e.label){case 0:return n.animation?(n.animation.destroy(),n.animation=void 0,[2,!1]):(r.classList.remove("overlay-hidden"),i=r.shadowRoot||n.el,a=n,[4,t.e(2).then(t.bind(null,"f3nl")).then(function(n){return n.create(l,i,u)})]);case 1:return o=a.animation=e.sent(),n.animation=o,n.animated&&n.config.getBoolean("animated",!0)||o.duration(0),n.keyboardClose&&o.beforeAddWrite(function(){var n=r.ownerDocument.activeElement;n&&n.matches("input, ion-input, ion-textarea")&&n.blur()}),[4,o.playAsync()];case 2:return e.sent(),c=o.hasCompleted,o.destroy(),n.animation=void 0,[2,c]}})})}function f(n,l){var t,e=new Promise(function(n){return t=n});return function(n,l,t){var e=function(r){n.removeEventListener(l,e),t(r)};n.addEventListener(l,e)}(n,l,function(n){t(n.detail)}),e}function b(n){return"cancel"===n||n===h}var h="backdrop"},V66x:function(n,l,t){"use strict";t.d(l,"a",function(){return g}),t.d(l,"b",function(){return v}),t.d(l,"c",function(){return o}),t.d(l,"d",function(){return w});var e=t("B5Ai"),r=t("awvO"),u=function(){return t.e(61).then(t.bind(null,"4dph"))},i=function(){return t.e(62).then(t.bind(null,"NJz6"))};function o(n){return new Promise(function(l,t){n.queue.write(function(){(function(n){var l=n.enteringEl,t=n.leavingEl;(function(n,l,t){void 0!==n&&(n.style.zIndex="back"===t?"99":"101"),void 0!==l&&(l.style.zIndex="100")})(l,t,n.direction),n.showGoBack?l.classList.add("can-go-back"):l.classList.remove("can-go-back"),w(l,!1),t&&w(t,!1)})(n),function(n){return e.a(this,void 0,void 0,function(){var l;return e.c(this,function(t){switch(t.label){case 0:return[4,c(n)];case 1:return[2,(l=t.sent())?s(l,n):d(n)]}})})}(n).then(function(t){t.animation&&t.animation.destroy(),a(n),l(t)},function(l){a(n),t(l)})})})}function a(n){var l=n.leavingEl;n.enteringEl.classList.remove("ion-page-invisible"),void 0!==l&&l.classList.remove("ion-page-invisible")}function c(n){return e.a(this,void 0,void 0,function(){var l;return e.c(this,function(t){switch(t.label){case 0:return n.leavingEl&&n.animated&&0!==n.duration?n.animationBuilder?[2,n.animationBuilder]:"ios"!==n.mode?[3,2]:[4,u()]:[2,void 0];case 1:return l=t.sent().iosTransitionAnimation,[3,4];case 2:return[4,i()];case 3:l=t.sent().mdTransitionAnimation,t.label=4;case 4:return[2,l]}})})}function s(n,l){return e.a(this,void 0,void 0,function(){var r;return e.c(this,function(e){switch(e.label){case 0:return[4,f(l,!0)];case 1:return e.sent(),[4,t.e(2).then(t.bind(null,"f3nl")).then(function(t){return t.create(n,l.baseEl,l)})];case 2:return r=e.sent(),p(l.enteringEl,l.leavingEl),[4,h(r,l)];case 3:return e.sent(),l.progressCallback&&l.progressCallback(void 0),r.hasCompleted&&m(l.enteringEl,l.leavingEl),[2,{hasCompleted:r.hasCompleted,animation:r}]}})})}function d(n){return e.a(this,void 0,void 0,function(){var l,t;return e.c(this,function(e){switch(e.label){case 0:return l=n.enteringEl,t=n.leavingEl,[4,f(n,!1)];case 1:return e.sent(),p(l,t),m(l,t),[2,{hasCompleted:!0}]}})})}function f(n,l){return e.a(this,void 0,void 0,function(){var t;return e.c(this,function(e){switch(e.label){case 0:return t=(void 0!==n.deepWait?n.deepWait:l)?[g(n.enteringEl),g(n.leavingEl)]:[y(n.enteringEl),y(n.leavingEl)],[4,Promise.all(t)];case 1:return e.sent(),[4,b(n.viewIsReady,n.enteringEl)];case 2:return e.sent(),[2]}})})}function b(n,l){return e.a(this,void 0,void 0,function(){return e.c(this,function(t){switch(t.label){case 0:return n?[4,n(l)]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}})})}function h(n,l){var t=l.progressCallback,e=new Promise(function(l){return n.onFinish(l)});return t?(n.progressStart(),t(n)):n.play(),e}function p(n,l){v(l,r.a),v(n,r.b)}function m(n,l){v(n,r.c),v(l,r.d)}function v(n,l){if(n){var t=new CustomEvent(l,{bubbles:!1,cancelable:!1});n.dispatchEvent(t)}}function y(n){return n&&n.componentOnReady?n.componentOnReady():Promise.resolve()}function g(n){return e.a(this,void 0,void 0,function(){var l;return e.c(this,function(t){switch(t.label){case 0:return(l=n)?null==l.componentOnReady?[3,2]:[4,l.componentOnReady()]:[3,4];case 1:if(null!=t.sent())return[2];t.label=2;case 2:return[4,Promise.all(Array.from(l.children).map(g))];case 3:t.sent(),t.label=4;case 4:return[2]}})})}function w(n,l){l?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))}},Z2Br:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var e=t("mrSG"),r=(t("CqG3"),t("67Y/")),u=t("CcnG"),i=t("tct4"),o=function(){function n(n){this.fireStore=n,this.dieselReportCollection=this.fireStore.collection("dieselreport"),this.dieselReports=this.dieselReportCollection.snapshotChanges().pipe(Object(r.a)(function(n){return n.map(function(n){var l=n.payload.doc.data();return e.a({id:n.payload.doc.id},l)})}))}return n.prototype.getAll=function(){return this.dieselReports},n.prototype.getDieselReportByID=function(n){return this.dieselReportCollection.doc(n).valueChanges()},n.prototype.addDieselReport=function(n){return this.dieselReportCollection.add(n)},n.prototype.deleteReport=function(n){return this.dieselReportCollection.doc(n).delete()},n.ngInjectableDef=u.U({factory:function(){return new n(u.Y(i.AngularFirestore))},token:n,providedIn:"root"}),n}()},awvO:function(n,l,t){"use strict";t.d(l,"a",function(){return u}),t.d(l,"b",function(){return e}),t.d(l,"c",function(){return r}),t.d(l,"d",function(){return i}),t.d(l,"e",function(){return o});var e="ionViewWillEnter",r="ionViewDidEnter",u="ionViewWillLeave",i="ionViewDidLeave",o="ionViewWillUnload"},jT1R:function(n,l,t){"use strict";t.d(l,"a",function(){return r}),t.d(l,"b",function(){return u});var e=t("B5Ai");function r(n,l,t,r,u){return e.a(this,void 0,void 0,function(){var i;return e.c(this,function(e){switch(e.label){case 0:if(n)return[2,n.attachViewToDom(l,t,u,r)];if("string"!=typeof t&&!(t instanceof HTMLElement))throw new Error("framework delegate is missing");return i="string"==typeof t?l.ownerDocument&&l.ownerDocument.createElement(t):t,r&&r.forEach(function(n){return i.classList.add(n)}),u&&Object.assign(i,u),l.appendChild(i),i.componentOnReady?[4,i.componentOnReady()]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2,i]}})})}function u(n,l){if(l){if(n)return n.removeViewFromDom(l.parentElement,l);l.remove()}return Promise.resolve()}},k3PP:function(n,l,t){"use strict";t.d(l,"a",function(){return r});var e=t("mrSG"),r=(t("Z2Br"),t("ZZ/e"),function(){function n(n,l){this.fireService=n,this.loadingController=l,this.tableColumns=["Bakkie","Report_Date","Start_Kilos","End_Kilos","Total_Kilos","Diesel","Travel"]}return n.prototype.ngOnInit=function(){var n=this;this.presentLoading(),this.fireService.getAll().subscribe(function(l){n.rows=l,console.log(l)})},n.prototype.presentLoading=function(){return e.b(this,void 0,void 0,function(){return e.e(this,function(n){switch(n.label){case 0:return[4,this.loadingController.create({message:"Loading your data...",duration:1e3})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},n}())},k6lV:function(n,l,t){"use strict";t.r(l),t.d(l,"createGesture",function(){return f}),t.d(l,"GESTURE_CONTROLLER",function(){return a});var e,r=function(){function n(n){this.doc=n,this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return n.prototype.createGesture=function(n){return new u(this,this.newID(),n.name,n.priority||0,!!n.disableScroll)},n.prototype.createBlocker=function(n){return void 0===n&&(n={}),new i(this,this.newID(),n.disable,!!n.disableScroll)},n.prototype.start=function(n,l,t){return this.canStart(n)?(this.requestedStart.set(l,t),!0):(this.requestedStart.delete(l),!1)},n.prototype.capture=function(n,l,t){if(!this.start(n,l,t))return!1;var e=this.requestedStart,r=-1e4;if(e.forEach(function(n){r=Math.max(r,n)}),r===t){this.capturedId=l,e.clear();var u=new CustomEvent("ionGestureCaptured",{detail:{gestureName:n}});return this.doc.dispatchEvent(u),!0}return e.delete(l),!1},n.prototype.release=function(n){this.requestedStart.delete(n),this.capturedId===n&&(this.capturedId=void 0)},n.prototype.disableGesture=function(n,l){var t=this.disabledGestures.get(n);void 0===t&&(t=new Set,this.disabledGestures.set(n,t)),t.add(l)},n.prototype.enableGesture=function(n,l){var t=this.disabledGestures.get(n);void 0!==t&&t.delete(l)},n.prototype.disableScroll=function(n){this.disabledScroll.add(n),1===this.disabledScroll.size&&this.doc.body.classList.add(o)},n.prototype.enableScroll=function(n){this.disabledScroll.delete(n),0===this.disabledScroll.size&&this.doc.body.classList.remove(o)},n.prototype.canStart=function(n){return void 0===this.capturedId&&!this.isDisabled(n)},n.prototype.isCaptured=function(){return void 0!==this.capturedId},n.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},n.prototype.isDisabled=function(n){var l=this.disabledGestures.get(n);return!!(l&&l.size>0)},n.prototype.newID=function(){return this.gestureId++,this.gestureId},n}(),u=function(){function n(n,l,t,e,r){this.id=l,this.name=t,this.disableScroll=r,this.priority=1e6*e+l,this.ctrl=n}return n.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},n.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},n.prototype.capture=function(){if(!this.ctrl)return!1;var n=this.ctrl.capture(this.name,this.id,this.priority);return n&&this.disableScroll&&this.ctrl.disableScroll(this.id),n},n.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},n.prototype.destroy=function(){this.release(),this.ctrl=void 0},n}(),i=function(){function n(n,l,t,e){this.id=l,this.disable=t,this.disableScroll=e,this.ctrl=n}return n.prototype.block=function(){if(this.ctrl){if(this.disable)for(var n=0,l=this.disable;n<l.length;n++)this.ctrl.disableGesture(l[n],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},n.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var n=0,l=this.disable;n<l.length;n++)this.ctrl.enableGesture(l[n],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},n.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},n}(),o="backdrop-no-scroll",a=new r(document);function c(n,l,t,r){var u,i,o=function(n){if(void 0===e)try{var l=Object.defineProperty({},"passive",{get:function(){e=!0}});n.addEventListener("optsTest",function(){},l)}catch(n){e=!1}return!!e}(n)?{capture:!!r.capture,passive:!!r.passive}:!!r.capture;return n.__zone_symbol__addEventListener?(u="__zone_symbol__addEventListener",i="__zone_symbol__removeEventListener"):(u="addEventListener",i="removeEventListener"),n[u](l,t,o),function(){n[i](l,t,o)}}var s=2e3;function d(n){return n instanceof Document?n:n.ownerDocument}function f(n){var l=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},n),t=l.canStart,e=l.onWillStart,r=l.onStart,u=l.onEnd,i=l.notCaptured,o=l.onMove,f=l.threshold,m=l.queue,v={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},y=function(n,l,t,e,r){var u,i,o,a,f,b,h,p=0;function m(e){p=Date.now()+s,l(e)&&(!i&&t&&(i=c(n,"touchmove",t,r)),o||(o=c(n,"touchend",y,r)),a||(a=c(n,"touchcancel",y,r)))}function v(e){p>Date.now()||l(e)&&(!b&&t&&(b=c(d(n),"mousemove",t,r)),h||(h=c(d(n),"mouseup",g,r)))}function y(n){w(),e&&e(n)}function g(n){E(),e&&e(n)}function w(){i&&i(),o&&o(),a&&a(),i=o=a=void 0}function E(){b&&b(),h&&h(),b=h=void 0}function C(){w(),E()}function S(l){l?(u&&u(),f&&f(),u=f=void 0,C()):(u||(u=c(n,"touchstart",m,r)),f||(f=c(n,"mousedown",v,r)))}return{setDisabled:S,stop:C,destroy:function(){S(!0),e=t=l=void 0}}}(l.el,function(n){var l=p(n);return!(C||!S)&&(h(n,v),v.startX=v.currentX,v.startY=v.currentY,v.startTimeStamp=v.timeStamp=l,v.velocityX=v.velocityY=v.deltaX=v.deltaY=0,v.event=n,(!t||!1!==t(v))&&(w.release(),!!w.start()&&(C=!0,0===f?q():(g.start(v.startX,v.startY),!0))))},function(n){E?!_&&S&&(_=!0,b(v,n),m.write(k)):(b(v,n),g.detect(v.currentX,v.currentY)&&(g.isGesture()&&q()||(x(),y.stop(),i&&i(v))))},B,{capture:!1}),g=function(n,l,t){var e=t*(Math.PI/180),r="x"===n,u=Math.cos(e),i=l*l,o=0,a=0,c=!1,s=0;return{start:function(n,l){o=n,a=l,s=0,c=!0},detect:function(n,l){if(!c)return!1;var t=n-o,e=l-a,d=t*t+e*e;if(d<i)return!1;var f=Math.sqrt(d),b=(r?t:e)/f;return s=b>u?1:b<-u?-1:0,c=!1,!0},isGesture:function(){return 0!==s},getDirection:function(){return s}}}(l.direction,l.threshold,l.maxAngle),w=a.createGesture({name:n.gestureName,priority:n.gesturePriority,disableScroll:n.disableScroll}),E=!1,C=!1,S=!0,_=!1;function k(){E&&(_=!1,o&&o(v))}function q(){return!(w&&!w.capture()||(E=!0,S=!1,v.startX=v.currentX,v.startY=v.currentY,v.startTimeStamp=v.timeStamp,e?e(v).then(D):D(),0))}function D(){r&&r(v),S=!0}function x(){E=!1,C=!1,_=!1,S=!0,w.release()}function B(n){var l=E,t=S;x(),t&&(b(v,n),l?u&&u(v):i&&i(v))}return{setDisabled:function(n){n&&E&&B(void 0),y.setDisabled(n)},destroy:function(){w.destroy(),y.destroy()}}}function b(n,l){if(l){var t=n.currentX,e=n.currentY,r=n.timeStamp;h(l,n);var u=n.currentX,i=n.currentY,o=(n.timeStamp=p(l))-r;if(o>0&&o<100){var a=(i-e)/o;n.velocityX=(u-t)/o*.7+.3*n.velocityX,n.velocityY=.7*a+.3*n.velocityY}n.deltaX=u-n.startX,n.deltaY=i-n.startY,n.event=l}}function h(n,l){var t=0,e=0;if(n){var r=n.changedTouches;if(r&&r.length>0){var u=r[0];t=u.clientX,e=u.clientY}else void 0!==n.pageX&&(t=n.pageX,e=n.pageY)}l.currentX=t,l.currentY=e}function p(n){return n.timeStamp||Date.now()}},"w+bb":function(n,l,t){"use strict";t.d(l,"a",function(){return r});var e={ipad:function(n){return c(n,/iPad/i)},iphone:function(n){return c(n,/iPhone/i)},ios:function(n){return c(n,/iPad|iPhone|iPod/i)},android:function(n){return c(n,/android|sink/i)},phablet:function(n){var l=n.innerWidth,t=n.innerHeight,e=Math.min(l,t),r=Math.max(l,t);return e>390&&e<520&&r>620&&r<800},tablet:function(n){var l=n.innerWidth,t=n.innerHeight,e=Math.min(l,t),r=Math.max(l,t);return e>460&&e<820&&r>780&&r<1400},cordova:o,capacitor:a,electron:function(n){return c(n,/electron/)},pwa:function(n){return n.matchMedia("(display-mode: standalone)").matches||n.navigator.standalone},mobile:u,mobileweb:function(n){return u(n)&&!i(n)},desktop:function(n){return!u(n)},hybrid:i};function r(n,l){return function(n){return function(n){n.Ionic=n.Ionic||{};var l=n.Ionic.platforms;if(null==l){l=n.Ionic.platforms=function(n){return Object.keys(e).filter(function(l){return e[l](n)})}(n);var t=n.document.documentElement.classList;l.forEach(function(n){return t.add("plt-"+n)})}return l}(n)}(n).includes(l)}function u(n){return function(n,l){return n.matchMedia("(any-pointer:coarse)").matches}(n)}function i(n){return o(n)||a(n)}function o(n){return!!(n.cordova||n.phonegap||n.PhoneGap)}function a(n){var l=n.Capacitor;return!(!l||!l.isNative)}function c(n,l){return l.test(n.navigator.userAgent)}},yIUm:function(n,l,t){"use strict";t.d(l,"a",function(){return o}),t.d(l,"b",function(){return c}),t.d(l,"c",function(){return u}),t.d(l,"d",function(){return r}),t.d(l,"e",function(){return i});var e=t("B5Ai");function r(n,l){return null!==l.closest(n)}function u(n){var l;return"string"==typeof n&&n.length>0?((l={"ion-color":!0})["ion-color-"+n]=!0,l):void 0}function i(n,l){var t;return(t={})[l]=!0,t[l+"-"+n]=void 0!==n,t}function o(n){var l={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(function(n){return null!=n}).map(function(n){return n.trim()}).filter(function(n){return""!==n}):[]}(n).forEach(function(n){return l[n]=!0}),l}var a=/^[a-z][a-z0-9+\-.]*:/;function c(n,l,t,r){return e.a(this,void 0,void 0,function(){var u;return e.c(this,function(e){switch(e.label){case 0:return null==l||"#"===l[0]||a.test(l)?[3,2]:(u=n.document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[4,u.componentOnReady()]):[3,2];case 1:return e.sent(),[2,u.push(l,r)];case 2:return[2,!1]}})})}},ySCp:function(n,l,t){"use strict";function e(){var n=window.TapticEngine;n&&n.selection()}function r(){var n=window.TapticEngine;n&&n.gestureSelectionStart()}function u(){var n=window.TapticEngine;n&&n.gestureSelectionChanged()}function i(){var n=window.TapticEngine;n&&n.gestureSelectionEnd()}t.d(l,"a",function(){return u}),t.d(l,"b",function(){return r}),t.d(l,"c",function(){return i}),t.d(l,"d",function(){return e})}}]);