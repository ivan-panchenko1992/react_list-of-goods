(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(3),s=n.n(r),c=n(1),l=n(4),i=n(5),u=n(7),b=n(6),d=(n(13),function(t){var e=t.goods;return a.a.createElement(a.a.Fragment,null,e.map((function(t){return a.a.createElement("li",{key:t},t)})))}),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={goods:[].concat(p),isVisible:!1},t.isVisibleGoods=function(){t.setState({isVisible:!0})},t.reset=function(){t.setState((function(){return{goods:[].concat(p)}}))},t.reverseGoods=function(){t.setState((function(t){return Object(c.a)(Object(c.a)({},t),{},{goods:t.goods.reverse()})}))},t.sortGoodsAlphabetically=function(){var e=[].concat(p);t.setState({goods:e.sort((function(t,e){return t.localeCompare(e)}))})},t.sortGoodsByLength=function(){var e=[].concat(p);t.setState({goods:e.sort((function(t,e){return t.length-e.length}))})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.goods,n=t.isVisible;return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Goods"),n?a.a.createElement("div",null,a.a.createElement("button",{type:"button",onClick:this.reverseGoods},"Reverse"),a.a.createElement("button",{type:"button",onClick:this.sortGoodsAlphabetically},"Sort alphabetically"),a.a.createElement("button",{type:"button",onClick:this.reset},"Reset"),a.a.createElement("button",{type:"button",onClick:this.sortGoodsByLength},"Sort by length"),a.a.createElement("ul",null,a.a.createElement(d,{goods:e}))):a.a.createElement("button",{type:"button",onClick:this.isVisibleGoods},"Start"))}}]),n}(a.a.Component);s.a.render(a.a.createElement(m,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.2d2f5516.chunk.js.map