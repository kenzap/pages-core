!function(){"use strict";function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}function t(e,t,a){return(t=n(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}const a=e=>0===(e=String(e)).length?"":e.replace(/[&<>'"]/g,(e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&apos;",'"':"&quot;"}[e]))),o=()=>{let e=new URLSearchParams(window.location.search);return e.get("sid")?e.get("sid"):""},r=e=>{let t=e+"=",n=decodeURIComponent(document.cookie).split(";");for(let e=0;e<n.length;e++){let a=n[e];for(;" "==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(t))return a.substring(t.length,a.length)}return""};r("kenzap_api_key"),r("locale")&&r("locale"),(()=>{let e=localStorage.hasOwnProperty("header")&&localStorage.hasOwnProperty("header-version")?localStorage.getItem("header-version"):0,t=window.location.hostname+"/"+o()+"/"+r("locale");t!=r("check")&&(e=0,console.log("refresh")),((e,t,n)=>{let a="";if(n){let e=new Date;e.setTime(e.getTime()+24*n*60*60*1e3),a=";expires="+e.toUTCString()}document.cookie=e+"="+(escape(t)||"")+a+";path=/;domain=.kenzap.cloud"})("check",t,5)})(),r("kenzap_token"),o();var c,i,l,s=(c=function e(n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t(this,"render",(function(){document.querySelector("#content").insertAdjacentHTML("beforeend",'\n        <header id="'.concat(a(o.data.id),'" class="kwcHep ').concat(o.data.classes?a(o.data.classes):"",'" style="\n        ').concat(o.data.c.section,"\n        ").concat("--linkcolor:"+a(o.data.linkcolor.value),';\n        ">\n          \x3c!-- site-navbar start --\x3e\n          <div class="navbar-area">\n            <div class="container" style="').concat(a(o.data.c.container),'">\n              <nav class="site-navbar">\n                \x3c!-- site logo --\x3e\n                <a href="/" class="site-logo" >\n                  ').concat(o.data.logo.value?'<img style="width:'.concat(a(o.data.logosize.value),'px;" src="').concat(a(o.data.logo.value),'" alt="').concat(o.data.logo.alt?a(o.data.logo.alt):"logo",'">'):"","\n                </a>\n                \x3c!-- site menu/nav --\x3e\n                <ul>\n                  ").concat(o.data.links.map((function(e){return'<li><a href="'.concat(a(e.href.value),'" >').concat(e.text.value,"</a></li>")})).join(""),'\n                </ul>\n                \x3c!-- nav-toggler for mobile version only --\x3e\n                <button class="nav-toggler">\n                  <span></span>\n                </button>\n              </nav>\n            </div>\n          </div>\x3c!-- navbar-area end --\x3e\n        </header>   \n        '))})),t(this,"listeners",(function(){var e=document.querySelector(".nav-toggler"),t=document.querySelector(".site-navbar ul"),n=document.querySelectorAll(".site-navbar a");function a(){e.classList.toggle("toggler-open"),t.classList.toggle("open")}function o(){t.classList.contains("open")&&e.click()}e.addEventListener("click",a),n.forEach((function(e){return e.addEventListener("click",o)}))})),this.data=n,this.render(),this.listeners()},i&&e(c.prototype,i),l&&e(c,l),Object.defineProperty(c,"prototype",{writable:!1}),c);window.kwcHep=s}();
