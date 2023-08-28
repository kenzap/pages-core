// dependencies
import { __html, html, attr } from '@kenzap/k-cloud';
import { hexToRGB } from "../_/_helpers.js"
import Glide from '@glidejs/glide'

class kGboHB{

    // init class
    constructor(data){
        
      // cache data
      this.data = data;
    
      // render section
      this.render();
    }

    // render class html
    render = () => {

      document.querySelector('#content').insertAdjacentHTML('beforeend', 
        `
        <section id="${ attr(this.data.id) }" 
            class="kGboHB ${ this.data.c.classes ? attr(this.data.c.classes) : '' }" 
            style="
            ${ attr(this.data.c.section) };
            ${ this.data.bgimage ? 'background-image:url(' + attr(this.data.bgimage.value) + ');' : '' }
            ${ '--bgcolor:' + attr(this.data.bgcolor.value) };
            ${ '--bgcolora:' + hexToRGB(this.data.bgcolor.value, parseInt(this.data.bgcolorintensity.value) / 100) };
            ">
            <div class="container" style="${ attr(this.data.c.container) }">
              <div class="glide glide--slider glide--swipeable">
                <div class="glide__track glide--slider glide--swipeable" data-glide-el="track">
                  <ul class="owl-carousel-0 glide__slides glide--slider glide--swipeable" >
                  ${
                    this.data.testimonials.map(item => {

                      return `
                      <li class="testimonial-box glide__slide">
                        <div class="testimonial-content">
                          <p>${ html(item.text.value) }</p>
                          <span>${ html(item.author.value) }</span>
                        </div>
                      </li>
                      `

                    }).join('')
                  }
                  </ul>
                </div>
            </div>
          </div>
        </section>
        `
      );

      this.listeners();
    }

    // listener
    listeners = () => {

      // initiate Glide slider carousel 
      new Glide('.glide', {
          type: 'carousel',
          perView: 1,
          focusAt: 'center',
          hoverpause: true,
          autoplay: 5000,
      }).mount()
    }
}

window.kGboHB = kGboHB;