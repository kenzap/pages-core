!function(){"use strict";function e(e,n){for(var a=0;a<n.length;a++){var o=n[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,t(o.key),o)}}function t(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}const n=e=>0===(e=String(e)).length?"":e.replace(/[&<>'"]/g,(e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&apos;",'"':"&quot;"}[e]))),a=()=>{let e=new URLSearchParams(window.location.search);return e.get("sid")?e.get("sid"):""},o=e=>{let t=e+"=",n=decodeURIComponent(document.cookie).split(";");for(let e=0;e<n.length;e++){let a=n[e];for(;" "==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(t))return a.substring(t.length,a.length)}return""};o("kenzap_api_key"),o("locale")&&o("locale"),(()=>{let e=localStorage.hasOwnProperty("header")&&localStorage.hasOwnProperty("header-version")?localStorage.getItem("header-version"):0,t=window.location.hostname+"/"+a()+"/"+o("locale");t!=o("check")&&(e=0,console.log("refresh")),((e,t,n)=>{let a="";if(n){let e=new Date;e.setTime(e.getTime()+24*n*60*60*1e3),a=";expires="+e.toUTCString()}document.cookie=e+"="+(escape(t)||"")+a+";path=/;domain=.kenzap.cloud"})("check",t,5)})(),o("kenzap_token"),a();var r,c,i,l=(r=function e(a){var o,r,c,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,c=function(){document.querySelector("#content").insertAdjacentHTML("beforeend",'\n        <section id="'.concat(n(i.data.id),'" class="kB9kJP ').concat(i.data.c.classes?n(i.data.c.classes):"",'" style="').concat(i.data.c.section,'">\n            <div class="container" style="').concat(i.data.c.container,'">\n              ').concat(i.data.header.value,'\n              <div class="kp-content">\n                <ul class="').concat(i.data.style.value,'">\n                  ').concat(i.data.icons.map((function(e,t){return'\n                      <li><a href="'.concat(e.link.value,'" ><img class="kp-icon" style="height:').concat(n(i.data.size.value),'px" src="').concat(e.icon.value,'" > ').concat(e.title.value,"</a></li>\n                      ")})).join(""),"\n                </ul>\n            </div>\n          </div>\n        </section>\n        "))},(r=t(r="render"))in o?Object.defineProperty(o,r,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[r]=c,this.data=a,this.render()},c&&e(r.prototype,c),i&&e(r,i),Object.defineProperty(r,"prototype",{writable:!1}),r);window.kB9kJP=l}();