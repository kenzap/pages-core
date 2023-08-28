// dependencies
import { __html, attr, html } from '@kenzap/k-cloud';
import { hexToRGB } from "../_/_helpers.js"

class kqaUcT{

    // init class
    constructor(data){
        
      // cache data
      this.data = data;
    
      // call render
      this.render();
    }

    // render email subscription form. TODO integrate backend
    render = () => {

      document.querySelector('#content').insertAdjacentHTML('beforeend', 
        `
        <section id="${ attr(this.data.id) }" 
            class="kqaUcT ${ this.data.c.classes ? attr(this.data.c.classes) : '' }" 
            style="
            ${ attr(this.data.c.section) };
            ${ this.data.bgimage ? 'background-image:url(' + attr(this.data.bgimage.value) + ');' : '' }
            ${ this.data.borderstyle.value ? '--borderStyle:'+attr(this.data.borderstyle.value)+'px;' : '' }
            ${ '--bgcolor:' + this.data.bgcolor.value };
            ${ '--bgcolora:' + hexToRGB(this.data.bgcolor.value, parseInt(this.data.bgcolorintensity.value) / 100) };
            ">
            <div class="container" style="${ attr(this.data.c.container) }">
              <div class="kp-content">
                ${ this.data.header.value }
                <div class="kp-form">
                  <div class="wrapper">
                    <input type="email" placeholder="${ __html('Your e-mail address') }">
                    <input type="submit" value="${ attr(this.data.ctatext.value) }">
                  </div>
                  <label>
                    <input type="checkbox" name="condition" value="Yes">${ html(this.data.termstext.value) }
                  </label>
                </div>
              </div>
            </div>
        </section>
        `
      );

      this.listeners();
    }

    listeners = () => {


    }
}

window.kqaUcT = kqaUcT;