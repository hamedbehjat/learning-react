(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(8),l=a.n(r),c=(a(14),a(1)),s=a(2),i=a(4),u=a(3),m=a(5),p=a(6),g=a.n(p),h=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(i.a)(this,Object(u.a)(e).call(this,t))).changeToClock=function(){var t=a.props;t.pageStatus;(0,t.handleStatus)("clock")},a.changeToContent=function(){var t=a.props;t.pageStatus;(0,t.handleStatus)("content")},a.changeToConverter=function(){var t=a.props;t.pageStatus;(0,t.handleStatus)("converter")},a.state={},a}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.pageStatus;return o.a.createElement("div",{className:"d-flex justify-content-center align-items-center p-5"},o.a.createElement("button",{className:g()("btn mx-2",{"btn-outline-primary":"clock"!==t},{"btn-primary":"clock"===t}),onClick:this.changeToClock},"clock"),o.a.createElement("button",{className:g()("btn mx-2",{"btn-outline-primary":"converter"!==t},{"btn-primary":"converter"===t}),onClick:this.changeToConverter},"converter"),o.a.createElement("button",{className:g()("btn mx-2",{"btn-outline-primary":"content"!==t},{"btn-primary":"content"===t}),onClick:this.changeToContent},"content"))}}]),e}(n.Component),v=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(i.a)(this,Object(u.a)(e).call(this,t))).state={number:0},a}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval((function(){t.setState({number:t.state.number+1}),console.log(t.state.number)}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("p",null,this.state.number))}}]),e}(n.Component),f=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(i.a)(this,Object(u.a)(e).call(this,t))).state={},a}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("p",null,"content"))}}]),e}(n.Component),b=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(i.a)(this,Object(u.a)(e).call(this,t))).syncData=function(t){if("dolar"===t.target.name){console.log("if running"),console.log("target name: "+t.target.name+" - target value: "+t.target.value),console.log("type of target value: "+typeof t.target.value);var e=12e3*parseInt(t.target.value);console.log(e),console.log(typeof e),a.setState({toman:e.toString(),dollar:t.target.value.toString()}),console.log("toman: "+a.state.toman),console.log("dollar: "+a.state.dollar),console.log("type of toman: "+typeof a.state.toman),console.log("type of dolar: "+typeof a.state.dollar),console.log("*************************************")}else{console.log("else running"),console.log("target name: "+t.target.name+" - target value: "+t.target.value),console.log("type of target value: "+typeof t.target.value);var n=parseInt(t.target.value)/12e3;console.log(n),a.setState({toman:t.target.value.toString(),dollar:n.toString()}),console.log(n),console.log(typeof n),console.log("type of toman: "+typeof a.state.toman),console.log("type of dolar: "+typeof a.state.dollar),console.log("*************************************")}},a.state={toman:"",dollar:""},a}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("form",null,o.a.createElement("div",{className:"form-row"},o.a.createElement("div",{className:"col-6"},o.a.createElement("input",{type:"text",placeholder:"dolar",name:"dolar",className:"form-control",value:this.state.dollar,onChange:this.syncData})),o.a.createElement("div",{className:"col-6"},o.a.createElement("input",{type:"text",placeholder:"Toman",name:"toman",className:"form-control",value:this.state.toman,onChange:this.syncData})))))}}]),e}(n.Component),d=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(i.a)(this,Object(u.a)(e).call(this,t))).handeler=function(){var t=a.props.pageStatus;return"content"===t?o.a.createElement(f,null):"clock"===t?o.a.createElement(v,null):o.a.createElement(b,null)},a.state={},a}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,this.handeler())}}]),e}(n.Component),y=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(i.a)(this,Object(u.a)(e).call(this,t))).handleStatus=function(t){a.setState({pageStatus:t})},a.state={pageStatus:"converter"},a}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(h,{pageStatus:this.state.pageStatus,handleStatus:this.handleStatus}),o.a.createElement(d,{pageStatus:this.state.pageStatus}))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(15);l.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},9:function(t,e,a){t.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.0868e052.chunk.js.map