function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",r=NaN,i="[object Symbol]",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,g="object"==typeof self&&self&&self.Object===Object&&self,m=s||g||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,y=function(){return m.Date.now()};function b(e,t,n){var r,i,a,u,l,f,c=0,s=!1,g=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function d(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function b(e){var n=e-f;return void 0===f||n>=t||n<0||g&&e-c>=a}function T(){var e=y();if(b(e))return h(e);l=setTimeout(T,function(e){var n=t-(e-f);return g?p(n,a-(e-c)):n}(e))}function h(e){return l=void 0,m&&r?d(e):(r=i=void 0,u)}function w(){var e=y(),n=b(e);if(r=arguments,i=this,f=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(T,t),s?d(e):u}(f);if(g)return l=setTimeout(T,t),d(f)}return void 0===l&&(l=setTimeout(T,t)),u}return t=j(t)||0,S(n)&&(s=!!n.leading,a=(g="maxWait"in n)?v(j(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=f=i=l=void 0},w.flush=function(){return void 0===l?u:h(y())},w}function S(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&d.call(e)==i}(e))return r;if(S(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=S(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=l.test(e);return n||f.test(e)?c(e.slice(2),n?2:8):u.test(e)?r:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return S(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};const T=document.querySelector("input"),h=document.querySelector("textarea"),w=document.querySelector(".feedback-form");let O={email:"",message:""};w.addEventListener("input",e(t)((function(e){console.log(e.target),"email"===e.target.type?(O.email=e.target.value,console.log(O)):"message"===e.target.name&&(O.message=e.target.value,console.log(O)),O.email=T.value,O.message=h.value,localStorage.setItem("feedback-form-state",JSON.stringify(O))}),1e3)),w.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;console.log(t.value,n.value),localStorage.clear(),T.value="",h.value=""})),function(){if(localStorage.getItem("feedback-form-state")){const e=localStorage.getItem("feedback-form-state");console.log(e);const t=JSON.parse(e);console.log(t),T.value=t.email,h.textContent=t.message}}();
//# sourceMappingURL=03-feedback.0afc289e.js.map
