// dependencies
import { __html, attr, html } from '@kenzap/k-cloud';
import { hexToRGB } from "../_/_helpers.js"
import Glide from '@glidejs/glide'

class kWm600{

    // init class
    constructor(data){
        
      // cache data
      this.data = data;
    
      // call render
      this.render();
    }

    // renders list of contact cards with person's avatarm phone and emaill address
    render = () => {

      document.querySelector('#content').insertAdjacentHTML('beforeend', 
        `
        <section id="${ attr(this.data.id) }" 
            class="kWm600 ${ this.data.c.classes ? attr(this.data.c.classes) : '' }" 
            style="
            ${ this.data.c.section };
            ">
            <div class="container" style="${ attr(this.data.c.container) }">
              ${ this.data.header.value }
              <div class="kenzap-row">
                  ${
                    this.data.contacts.map(item => {

                      return `
                        <div class="kenzap-col-4">
                          <div class="kp-box">
                            <div class="kp-img">
                              <img src="${ attr(item.avatar.value) }" alt="image">
                            </div>
                            <div class="kp-content">
                              <h4>${ html(item.name.value) }</h4>
                              <ul>
                                <li class="phone"><a href="tel:${ attr(item.email.value.replace(' ','').replace('-','').replace('(','').replace(')','')) }">${ html(item.phone.value) }</a></li>
                                <li class="email"><a href="mailto:${ attr(item.email.value) }">${ html(item.email.value) }</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      `

                    }).join('')
                  }
              </div>
            </div>
        </section>
        `
      );

      this.listeners();
    }

    listeners = () => {

      // new Glide('.glide', {
      //     type: 'carousel',
      //     perView: 1,
      //     focusAt: 'center',
      //     hoverpause: true,
      //     autoplay: 5000,
      // }).mount()
    }
}

window.kWm600 = kWm600;