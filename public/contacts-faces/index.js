!function(){"use strict";function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}function n(e){var n=function(e,n){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var a=t.call(e,n||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==typeof n?n:String(n)}const t=e=>0===(e=String(e)).length?"":e.replace(/[&<>'"]/g,(e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&apos;",'"':"&quot;"}[e]))),a=e=>0===(e=String(e)).length?"":e.replace(/[&<>'"]/g,(e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&apos;",'"':"&quot;"}[e]))),o=()=>{let e=new URLSearchParams(window.location.search);return e.get("sid")?e.get("sid"):""},r=e=>{let n=e+"=",t=decodeURIComponent(document.cookie).split(";");for(let e=0;e<t.length;e++){let a=t[e];for(;" "==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(n))return a.substring(n.length,a.length)}return""};r("kenzap_api_key"),r("locale")&&r("locale"),(()=>{let e=localStorage.hasOwnProperty("header")&&localStorage.hasOwnProperty("header-version")?localStorage.getItem("header-version"):0,n=window.location.hostname+"/"+o()+"/"+r("locale");n!=r("check")&&(e=0,console.log("refresh")),((e,n,t)=>{let a="";if(t){let e=new Date;e.setTime(e.getTime()+24*t*60*60*1e3),a=";expires="+e.toUTCString()}document.cookie=e+"="+(escape(n)||"")+a+";path=/;domain=.kenzap.cloud"})("check",n,5)})(),r("kenzap_token"),o();var c,i,l,s=(c=function e(o){var r,c,i,l=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,i=function(){document.querySelector("#content").insertAdjacentHTML("beforeend",'\n        <section id="'.concat(t(l.data.id),'" \n            class="kWm600 ').concat(l.data.c.classes?t(l.data.c.classes):"",'" \n            style="\n            ').concat(l.data.c.section,';\n            ">\n            <div class="container" style="').concat(t(l.data.c.container),'">\n              ').concat(l.data.header.value,'\n              <div class="kenzap-row">\n                  ').concat(l.data.contacts.map((function(e){return'\n                        <div class="kenzap-col-4">\n                          <div class="kp-box">\n                            <div class="kp-img">\n                              <img src="'.concat(t(e.avatar.value),'" alt="image">\n                            </div>\n                            <div class="kp-content">\n                              <h4>').concat(a(e.name.value),'</h4>\n                              <ul>\n                                <li class="phone"><a href="tel:').concat(t(e.email.value.replace(" ","").replace("-","").replace("(","").replace(")","")),'">').concat(a(e.phone.value),'</a></li>\n                                <li class="email"><a href="mailto:').concat(t(e.email.value),'">').concat(a(e.email.value),"</a></li>\n                              </ul>\n                            </div>\n                          </div>\n                        </div>\n                      ")})).join(""),"\n              </div>\n            </div>\n        </section>\n        "))},(c=n(c="render"))in r?Object.defineProperty(r,c,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[c]=i,this.data=o,this.render()},i&&e(c.prototype,i),l&&e(c,l),Object.defineProperty(c,"prototype",{writable:!1}),c);window.kWm600=s}();
