(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),l=n.n(r),s=(n(15),n(8)),c=n(3),i=n(4),u=n(6),m=n(5),d=n(7),h=(n(17),n(18),function(e){return o.a.createElement("div",null,e.name)}),p=function(e){return o.a.createElement("div",null,o.a.createElement("input",{type:"text",onChange:e.changeName,defaultValue:e.name}))},f=function(e){return o.a.createElement("div",null,o.a.createElement("input",{type:"button",onClick:e.showContent,style:e.style,value:"\u5207\u6362"}))},w=function(e){return o.a.createElement("div",null,o.a.createElement("input",{type:"button",onClick:e.deletePerson,defaultValue:"delete"}))},v=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).showContent=function(t){e.setState({isShow:!e.state.isShow})},e.changeName=function(t,n){console.log(n);var a=e.state.persons,o=Object(s.a)({},a[n]);o.name=t.target.value,a[n]=o,e.setState({persons:a})},e.deletePerson=function(t,n){var a=e.state.persons;a.splice(n,1),e.setState({persons:a})},e.state={persons:[{name:"\u9ec4\u6653\u5f6c",age:25},{name:"\u9ec4\u5c0f\u660e",age:21},{name:"\u9ec4\u7eef\u7ea2",age:45},{name:"\u9ec4\u79cd",age:35}],isShow:!1},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=null;return this.state.isShow&&(t=o.a.createElement("div",null,this.state.persons.map(function(t,n){return o.a.createElement("div",{key:n},o.a.createElement(h,{name:t.name}),o.a.createElement(p,{name:t.name,changeName:function(t){return e.changeName(t,n)}}),o.a.createElement(w,{deletePerson:function(t){return e.deletePerson(t,n)}}))}))),o.a.createElement("div",{className:"App"},o.a.createElement(f,{style:this.state.isShow?{color:"green",backgroundColor:"red"}:null,showContent:this.showContent.bind(this)}),o.a.createElement("br",null),t)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(20)}},[[9,2,1]]]);
//# sourceMappingURL=main.c4a7ae9d.chunk.js.map