function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",i=NaN,r="[object Symbol]",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,g=s||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,y=function(){return g.Date.now()};function b(e,t,n){var i,r,a,u,f,l,c=0,s=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError(o);function m(t){var n=i,o=r;return i=r=void 0,c=t,u=e.apply(o,n)}function b(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function T(){var e=y();if(b(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return d?p(n,a-(e-c)):n}(e))}function h(e){return f=void 0,g&&i?m(e):(i=r=void 0,u)}function w(){var e=y(),n=b(e);if(i=arguments,r=this,l=e,n){if(void 0===f)return function(e){return c=e,f=setTimeout(T,t),s?m(e):u}(l);if(d)return f=setTimeout(T,t),m(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=S(t)||0,j(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(S(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=r=f=void 0},w.flush=function(){return void 0===f?u:h(y())},w}function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&m.call(e)==r}(e))return i;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=f.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):u.test(e)?i:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return j(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:i,maxWait:t,trailing:r})};const T=document.querySelector("input"),h=document.querySelector("textarea"),w=document.querySelector(".feedback-form");let O={email:"",message:""};w.addEventListener("input",(function(n){"email"===n.target.type?(O.email=n.target.value,console.log(O)):"message"===n.target.name&&(O.message=n.target.value,console.log(O)),e(t)(void localStorage.setItem("feedback-form-state",JSON.stringify(O)),5e3)})),w.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;console.log(t.value,n.value),localStorage.clear(),T.value="",h.value=""})),function(){const e=localStorage.getItem("feedback-form-state");console.log(e);const t=JSON.parse(e);console.log(t),T.value=t.email,h.textContent=t.message}();
//# sourceMappingURL=03-feedback.09fe415e.js.map