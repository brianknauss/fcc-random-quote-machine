(this["webpackJsonpfcc-random-quote-machine"]=this["webpackJsonpfcc-random-quote-machine"]||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},15:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(3),u=n.n(s),c=(n(15),n(4)),i=n(5),r=n(8),l=n(6),d=n(1),h=n(9),m=n(7),f=(n(18),function(e){var t=e.buttonDisplayName,n=e.clickHandler;return o.a.createElement("button",{id:"new-quote",onClick:n},t)}),b=function(e){var t=e.assignNewQuoteIndex,n=e.selectedQuote;return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{id:"text"},n?o.a.createElement("p",null,n.quote," - ",o.a.createElement("span",{id:"author"},n.author)):null,o.a.createElement(f,{buttonDisplayName:"Quote Me!",clickHandler:t})),o.a.createElement("a",{id:"tweet-quote",href:"twitter.com/intent/tweet"},"Tweet Me!"))},w=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(r.a)(this,Object(l.a)(t).call(this,e))).state={quotes:[],selectedQuoteIndex:null},n.assignNewQuoteIndex=n.assignNewQuoteIndex.bind(Object(d.a)(n)),n.selectQuoteIndex=n.selectQuoteIndex.bind(Object(d.a)(n)),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json").then((function(e){return e.json()})).then((function(t){return e.setState({quotes:t},e.assignNewQuoteIndex)}))}},{key:"selectQuoteIndex",value:function(){if(this.state.quotes.length)return Object(m.random)(0,this.state.quotes.length-1)}},{key:"assignNewQuoteIndex",value:function(){this.setState({selectedQuoteIndex:this.selectQuoteIndex()})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App",id:"quote-box"},o.a.createElement(b,{selectedQuote:this.selectedQuote,assignNewQuoteIndex:this.assignNewQuoteIndex}))}},{key:"selectedQuote",get:function(){if(this.state.quotes.length&&Number.isInteger(this.state.selectedQuoteIndex))return this.state.quotes[this.state.selectedQuoteIndex]}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.f37bef65.chunk.js.map