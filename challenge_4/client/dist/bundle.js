(()=>{"use strict";function e(a){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(a)}function a(e,a){for(var t=0;t<a.length;t++){var c=a[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function t(e,a){return(t=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function c(a,t){return!t||"object"!==e(t)&&"function"!=typeof t?n(a):t}function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&t(e,a)}(m,React.Component);var l,d,i,r,o=(i=m,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=s(i);if(r){var t=s(this).constructor;e=Reflect.construct(a,arguments,t)}else e=a.apply(this,arguments);return c(this,e)});function m(e){var a;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,m),(a=o.call(this,e)).state={counter:0,color:"yellowSpace",win:"",red:[],yellow:[],disabled:!1},a.handleClick=a.handleClick.bind(n(a)),a.winTest=a.winTest.bind(n(a)),a}return l=m,(d=[{key:"handleClick",value:function(e){for(var a=document.getElementById("col".concat(e.target.dataset.x)),t=this.state.color,c=null,n=[],s=1;s<=6;s++)if(a.getElementsByClassName("space ".concat(s)).length>0){c=a.getElementsByClassName("space ".concat(s))[0];break}if(null!==c&&0==this.state.disabled){var l=parseInt("".concat(c.dataset.x).concat(c.dataset.y));this.setState({counter:this.state.counter+1}),c.classList.add(t),c.classList.remove("space"),"yellowSpace"===t?(n=this.state.yellow.concat([l]),this.setState({yellow:n}),this.setState({color:"redSpace"})):(n=this.state.red.concat([l]),this.setState({red:n}),this.setState({color:"yellowSpace"}))}n.sort((function(e,a){return e-a})),this.winTest(n,t)}},{key:"winTest",value:function(e,a){a="yellowSpace"===a?"Yellow":"Red";for(var t=1,c=0;c<e.length;c++)-1!==e.indexOf(e[c]+10)?(t++,c=e.indexOf(e[c]+10)-1):t=1,4===t&&this.setState({win:"".concat(a," Wins!"),disabled:!0});var n=1;for(c=0;c<e.length;c++)-1!==e.indexOf(e[c]+1)?n++:n=1,4===n&&this.setState({win:"".concat(a," Wins!"),disabled:!0});var s=1;for(c=0;c<e.length;c++)-1!==e.indexOf(e[c]+11)?(s++,c=e.indexOf(e[c]+11)-1):s=1,4===s&&this.setState({win:"".concat(a," Wins!"),disabled:!0});var l=1;for(c=0;c<e.length;c++)-1!==e.indexOf(e[c]+9)?(l++,c=e.indexOf(e[c]+9)-1):l=1,4===l&&this.setState({win:"".concat(a," Wins!"),disabled:!0});this.state.counter>=41&&this.setState({win:"It's a tie!",disabled:!0})}},{key:"render",value:function(){return React.createElement("div",null,React.createElement("h1",{id:"title"},"Connect 4"),React.createElement("div",{id:"board"},React.createElement("div",{id:"col1",onClick:this.handleClick,disabled:this.state.disabled},React.createElement("div",{"data-x":"1","data-y":"6",className:"space 6"}),React.createElement("div",{"data-x":"1","data-y":"5",className:"space 5"}),React.createElement("div",{"data-x":"1","data-y":"4",className:"space 4"}),React.createElement("div",{"data-x":"1","data-y":"3",className:"space 3"}),React.createElement("div",{"data-x":"1","data-y":"2",className:"space 2"}),React.createElement("div",{"data-x":"1","data-y":"1",className:"space 1"})),React.createElement("div",{id:"col2",onClick:this.handleClick},React.createElement("div",{"data-x":"2","data-y":"6",className:"space 6"}),React.createElement("div",{"data-x":"2","data-y":"5",className:"space 5"}),React.createElement("div",{"data-x":"2","data-y":"4",className:"space 4"}),React.createElement("div",{"data-x":"2","data-y":"3",className:"space 3"}),React.createElement("div",{"data-x":"2","data-y":"2",className:"space 2"}),React.createElement("div",{"data-x":"2","data-y":"1",className:"space 1"})),React.createElement("div",{id:"col3",onClick:this.handleClick},React.createElement("div",{"data-x":"3","data-y":"6",className:"space 6"}),React.createElement("div",{"data-x":"3","data-y":"5",className:"space 5"}),React.createElement("div",{"data-x":"3","data-y":"4",className:"space 4"}),React.createElement("div",{"data-x":"3","data-y":"3",className:"space 3"}),React.createElement("div",{"data-x":"3","data-y":"2",className:"space 2"}),React.createElement("div",{"data-x":"3","data-y":"1",className:"space 1"})),React.createElement("div",{id:"col4",onClick:this.handleClick},React.createElement("div",{"data-x":"4","data-y":"6",className:"space 6"}),React.createElement("div",{"data-x":"4","data-y":"5",className:"space 5"}),React.createElement("div",{"data-x":"4","data-y":"4",className:"space 4"}),React.createElement("div",{"data-x":"4","data-y":"3",className:"space 3"}),React.createElement("div",{"data-x":"4","data-y":"2",className:"space 2"}),React.createElement("div",{"data-x":"4","data-y":"1",className:"space 1"})),React.createElement("div",{id:"col5",onClick:this.handleClick},React.createElement("div",{"data-x":"5","data-y":"6",className:"space 6"}),React.createElement("div",{"data-x":"5","data-y":"5",className:"space 5"}),React.createElement("div",{"data-x":"5","data-y":"4",className:"space 4"}),React.createElement("div",{"data-x":"5","data-y":"3",className:"space 3"}),React.createElement("div",{"data-x":"5","data-y":"2",className:"space 2"}),React.createElement("div",{"data-x":"5","data-y":"1",className:"space 1"})),React.createElement("div",{id:"col6",onClick:this.handleClick},React.createElement("div",{"data-x":"6","data-y":"6",className:"space 6"}),React.createElement("div",{"data-x":"6","data-y":"5",className:"space 5"}),React.createElement("div",{"data-x":"6","data-y":"4",className:"space 4"}),React.createElement("div",{"data-x":"6","data-y":"3",className:"space 3"}),React.createElement("div",{"data-x":"6","data-y":"2",className:"space 2"}),React.createElement("div",{"data-x":"6","data-y":"1",className:"space 1"})),React.createElement("div",{id:"col7",onClick:this.handleClick},React.createElement("div",{"data-x":"7","data-y":"6",className:"space 6"}),React.createElement("div",{"data-x":"7","data-y":"5",className:"space 5"}),React.createElement("div",{"data-x":"7","data-y":"4",className:"space 4"}),React.createElement("div",{"data-x":"7","data-y":"3",className:"space 3"}),React.createElement("div",{"data-x":"7","data-y":"2",className:"space 2"}),React.createElement("div",{"data-x":"7","data-y":"1",className:"space 1"}))),React.createElement("h1",{id:"winner"},this.state.win))}}])&&a(l.prototype,d),m}();ReactDOM.render(React.createElement(l,null),document.getElementById("root"))})();