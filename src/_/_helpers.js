/**
* A universal Cloud CDN URL, where all public user data is uploaded.
*/
export const CDN = 'https://kenzap-sites.oss-ap-southeast-1.aliyuncs.com';

/**
* Restrict provided input field during user type event to numbers only.
* Exception characters are specified in chars array.
*
* @param {string} sel DOM selector
* @param {array} chars list of characters to exclude from filtering
*/
export const onlyNumbers = (sel, chars) => {

    if(!document.querySelector(sel)) return;

    // arrow navigation
    chars.push(...[9, 37, 38, 39, 40, 98, 100, 102, 104]);
    
    [...document.querySelectorAll(sel)].forEach(el => {

        el.addEventListener('keydown', (e) => {

            const key = e.key.toLowerCase();

            // track potential paste event
            if(key == 'control' || key == 'meta'){

                window[key] = true;
            }

            // const isLetter = (key >= 'a' && key <= 'z');
            const isNumber = (key >= '0' && key <= '9');

            // allow x c v a characters when meta ot control is pressed
            if((window['control'] || window['meta']) && [86, 88, 65, 67, 90].includes(e.which)){ console.log("pushing"); return true; }

            // actual check
            if (!isNumber && !chars.includes(e.which)) {

                e.preventDefault(); 
                return false;
            }
        });

        el.addEventListener('keyup', (e) => {

            const key = e.key.toLowerCase();

            // potential paste event
            if(key == 'control' || key == 'meta'){

                window[key] = false;
            }
        });
    });
}

/**
 * @name setCookie
 * @description Set cookie by its name to all .kenzap.com subdomains
 * @param {string} name - Cookie name.
 * @param {string} value - Cookie value.
 * @param {string} days - Number of days when cookie expires.
 */
 export const setCookie = (name, value, days) => {

    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = ";expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (escape(value) || "") + expires + ";path=/"; 
}

/**
 * @name getCookie
 * @description Read cookie by its name.
 * @param {string} cname - Cookie name.
 * 
 * @returns {string} value - Cookie value.
 */
export const getCookie = (cname) => {

    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/**
* Get URL param by its ID. For example, from ?id=3000 getParam('id') will return 3000
* 
* @param {string} p URL parameter name
* @returns {string} p param if it exists
*/
export const getParam = (p) => {
    
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(p) ? urlParams.get(p) : "";
}

/**
* Format timestamp to user friendly date.
*
* @param {string} timestamp timestamp in milisecods
* @return {string} time formatted date
*/
export const formatTime = (timestamp) => {
	
    let a = new Date(timestamp * 1000);
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let time = date + ' ' + month + ' ' + year; // + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}

/**
* Repl
*
* @param {string} param timestamp in milisecods
* @return {string} time formatted date
*/
export const replaceQueryParam = (param, newval, search) => {

    let regex = new RegExp("([?;&])" + param + "[^&;]*[;&]?");
    let query = search.replace(regex, "$1").replace(/&$/, '');

    return (query.length > 2 ? query + "&" : "?") + (newval ? param + "=" + newval : '');
}

export const makeNumber = function(price) {

    price = price ? price : 0;
    price = parseFloat(price);
    price = Math.round(price * 100) / 100;
    return price;
}

export const makeid = function(length = 6) {
    return Math.random().toString(36).substring(2, length+2);
}

/**
* Email format validation. Returns true if email format looks correct.
* 
* @param {string} email
* @return {boolean}
*/
export const validateEmail = (email) => {

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,14})+$/.test(email)){

        return true;
    }else{

        return false;
    }
}

/**
* Format price based on kenzap E-commerce extension settings.
* 
* @param {object} _this context of parent class of object from which function is called
* @param {string} price price to format
* @return {string} price formatted price
*/
export const priceFormat = (_this, price) => {

    price = makeNumber(price);

    price = (Math.round(parseFloat(price) * 100)/100).toFixed(2);
    
    let settings = {};
    if(_this.currency_symb_loc){ settings = _this; }else{ settings = _this.settings; }

    switch(settings.currency_symb_loc){
        case 'left': price = settings.currency_symb + ' ' + price; break;
        case 'right': price = price + settings.currency_symb; break;
    }

    return price;
}

/**
* Loads JS or CSS library resource and add to the header section of the HTML.
*
* @public 
* @param {string} dep link to library resource 
* @param {string} cb callback method, execute after resource is loaded
* @return {boolean} true
*/
export const loadDependencies = (dep, cb) => {

    // dependency already loaded, skip
    if(document.getElementById(dep)){ if(typeof cb === 'function') cb.call(); return; }

    // detect dependency type
    let t = dep.split('.').slice(-1)[0];
    switch(t){
      case 'js':
        
        let js = document.createElement("script");
        js.setAttribute("src", dep);
        js.id = dep;
        js.onload = js.onreadystatechange = function() {
 
          if(!this.readyState || this.readyState == 'complete')
            if(typeof cb === 'function') cb.call();
        };
        document.body.appendChild(js);
        
      break;
      case 'css':

        var head  = document.getElementsByTagName('head')[0];
        var css  = document.createElement('link');
        css.id   = dep;
        css.rel  = 'stylesheet';
        css.type = 'text/css';
        css.href = dep;
        head.appendChild(css);

      break;
    }
    
    return true;
}

/**
* Converts hexadeciaml color code to RGB color format.
* Example: #1941DF -> rgb(25, 65, 223)
* 
* @param {string} hex hexadeciaml color code 
* @param {boolean} alpha rgb transparency code
* @return {string} rgb color format
*/
export const hexToRGB = (hex, alpha) => {
    
    let r,  g,  b;
    
    if(hex.length == 4){
        r = parseInt(hex.slice(1, 2) + hex.slice(1, 2), 16),
        g = parseInt(hex.slice(2, 3) + hex.slice(2, 3), 16),
        b = parseInt(hex.slice(3, 4) + hex.slice(3, 4), 16);
    }else{
        r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);
    }

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}