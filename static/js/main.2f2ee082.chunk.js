(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(31)},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"GET_NUM",function(){return p}),n.d(r,"GET_ZERO",function(){return m}),n.d(r,"GET_ZERO_ZERO",function(){return f}),n.d(r,"GET_POINT",function(){return d}),n.d(r,"PRESS_AC",function(){return b}),n.d(r,"PRESS_BACK",function(){return v}),n.d(r,"GET_PLUS",function(){return E}),n.d(r,"PRESS_CALCULATE",function(){return h}),n.d(r,"getNum",function(){return y}),n.d(r,"pressAC",function(){return O}),n.d(r,"pressBack",function(){return k}),n.d(r,"getPlus",function(){return C}),n.d(r,"pressCalculate",function(){return N});var u=n(0),a=n.n(u),c=n(7),o=n.n(c),s=n(9),l=n(2),i=n(18),p="GET_NUM",m="GET_ZERO",f="GET_ZERO_ZERO",d="GET_POINT",b="PRESS_AC",v="PRESS_BACK",E="GET_PLUS",h="PRESS_CALCULATE";function y(e){return{type:p,num:e}}function O(){return{type:b}}function k(){return{type:v}}function C(e){return{type:E,operator:e}}function N(){return{type:h}}var g=n(4),_=n(5),j=[],P=function(){function e(){Object(g.a)(this,e),this[j]=[]}return Object(_.a)(e,[{key:"push",value:function(e){this[j].push(e)}},{key:"pop",value:function(){return this[j].pop()}},{key:"peek",value:function(){return this[j][this[j].length-1]}},{key:"isEmpty",value:function(){return 0===this[j].length}},{key:"toString",value:function(){return this[j].toString()}}]),e}(),S=function(e){return"+"===e||"-"===e?1:"x"===e||"\xf7"===e?2:0},w=function(e){var t=new P,n=[];for(e.forEach(function(e){if(-1==="+-x\xf7".indexOf(e))n.push(e);else{for(;!t.isEmpty()&&S(e)<=S(t.peek());)n.push(t.pop());t.push(e)}});!t.isEmpty();)n.push(t.pop());return n},A=function(e){var t=new P;return e.forEach(function(e){if(-1==="+-x\xf7".indexOf(e))t.push(e);else{var n,r=Number(t.pop()),u=Number(t.pop());switch(e){case"+":n=r+u,t.push(n);break;case"-":n=u-r,t.push(n);break;case"x":n=r*u,t.push(n);break;case"\xf7":n=u/r,t.push(n)}}}),Number(t.toString())};function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var R={nums:{last:0,curr:0,multiDivi:0},formula:[],deputy:null,operatored:!1,operator:null,calculated:!1};var G=Object(l.b)({calcultor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:var n,r=t.num,u=e.operatored,a=e.nums,c=e.calculated,o=(e.formula,a.last,a.curr);return a.multiDivi,n=u?Number(r):Number(o+r),"."==r&&(n=String(o)+r),x({},e,c?{nums:x({},a,{curr:n}),deputy:null,calcuator:!1,operatored:!1}:{nums:x({},a,{curr:n}),operatored:!1,calcuator:!1});case b:return x({},e,{nums:x({},e.nums,{curr:0}),deputy:null,formula:[]});case v:var s=e.nums,l=s.curr,i=String(l),m=i.length,f=1===m?0:i.substring(0,m-1);return x({},e,{nums:x({},s,{curr:Number(f)})});case E:var d=t.operator,y=e.nums,O=(e.deputy,e.operatored),k=e.calculated,C=e.formula,N=(y.last,y.curr),g=(y.multiDivi,Number(N));k&&O?(C.push(g),C.push(d)):O?(C.pop(),C.push(d)):(C.push(g),C.push(d));var _=C.concat();_.pop();var j=[];if("x"===d||"\xf7"===d&&1!=_.length){var P=_.lastIndexOf("+")>0?_.lastIndexOf("+"):_.lastIndexOf("-");(j=_.concat()).splice(0,P+1)}var S=w(_),T=A(S),G=A(w(j)),B=0===G?T:G,D=C.map(function(e){return e});return x({},e,{nums:x({},y,{curr:B}),deputy:D,operatored:!0,operator:d,calculated:!1});case h:var I=e.nums,L=e.deputy,U=(e.operator,e.formula),Z=I.curr;if(null===L)return e;U.push(Z);var J=w(U),K=A(J),M=U.map(function(e){return e});return x({},e,{nums:x({},I,{curr:K}),formula:[],deputy:M,operatored:!0,calculated:!0});default:return e}}});var B,D=n(11),I=n(8),L=n(10),U=n(19),Z=n(6),J=(n(29),function(e){function t(e){var n;return Object(g.a)(this,t),(n=Object(D.a)(this,Object(I.a)(t).call(this,e))).valueClick=function(e){(0,n.props.getNum)(e.currentTarget.value)},n.onClick=function(e){var t=e.target.value;console.log("value",t)},n.state={},n.valueClick=n.valueClick.bind(Object(Z.a)(n)),n.onClick=n.onClick.bind(Object(Z.a)(n)),n}return Object(L.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this,t=Object(U.a)(Array(10).keys());t.push([0],["00"],["."]);var n=this.props,r=n.num,u=n.pressAC,c=n.pressBack,o=n.deputy,s=n.getPlus,l=n.pressCalculate;return a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"calculator_border"},a.a.createElement("div",{className:"screen"},a.a.createElement("div",{className:"deputy_screen"}," ",o),a.a.createElement("div",{className:"main_screen"}," ",r," ")),a.a.createElement("div",{className:"button_area"},a.a.createElement("div",{className:"num_area"},a.a.createElement("div",{className:"number_container"},t.map(function(t){return 0===t?null:a.a.createElement("button",{key:t,type:"button",className:"text",onClick:e.valueClick,value:t},t)}))),a.a.createElement("div",{className:"function_area"},["\xf7","x","+","-"].map(function(e){return a.a.createElement("button",{type:"button",className:"function_bottom",onClick:function(){return s(e)}},a.a.createElement("div",{className:"function_text"}," ",e," "))}))),a.a.createElement("div",{className:"bottom_button"},a.a.createElement("button",{type:"button",className:"AC_button",onClick:u},"AC"),a.a.createElement("button",{type:"button",className:"AC_button",onClick:c},"\u232b"),a.a.createElement("button",{type:"button",className:"eq_button",onClick:l},"="))))}}]),t}(a.a.Component)),K=function(e){function t(){return Object(g.a)(this,t),Object(D.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this.props,t=e.getNum,n=e.calcutor,r=e.pressAC,u=e.pressBack,c=e.getPlus,o=e.pressCalculate,s=n.nums,l=n.deputy;return a.a.createElement("div",null,a.a.createElement(J,{getNum:t,num:s.curr,deputy:l,pressAC:r,pressBack:u,getPlus:c,pressCalculate:o}))}}]),t}(a.a.Component),M=Object(s.b)(function(e){return{calcutor:e.calcultor}},r)(K),q=(n(30),Object(l.d)(G,B,Object(l.c)(window.devToolsExtension?window.devToolsExtension():function(e){return e})));var z=document.getElementById("root");o.a.render(a.a.createElement(s.a,{store:q},a.a.createElement(function(){return a.a.createElement("div",{className:"App"},a.a.createElement(M,null))},null)),z)}},[[20,1,2]]]);
//# sourceMappingURL=main.2f2ee082.chunk.js.map