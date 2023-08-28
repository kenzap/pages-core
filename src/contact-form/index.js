// dependencies
import { __html, attr, html } from '@kenzap/k-cloud';
import { hexToRGB } from "../_/_helpers.js"

class kr54xj{

    // init class
    constructor(data){
        
      // cache data
      this.data = data;
    
      // render section
      this.render();
    }

    // render contact form
    // TODO integrate with backend
    render = () => {

      document.querySelector('#content').insertAdjacentHTML('beforeend', 
        `
        <section id="${ attr(this.data.id) }" 
            class="kr54xj ${ this.data.c.classes ? attr(this.data.c.classes) : '' }" 
            style="
            ${ attr(this.data.c.section) };
            ${ this.data.borderstyle.value ? '--borderStyle:'+attr(this.data.borderstyle.value)+'px;' : '' }
            ">
            <div class="container" style="${ attr(this.data.c.container) }">
              <div class="kp-content">
                
                <div class="kp-form">
                  <div class="form full">
                    ${ this.data.header.value }
                  </div>
                  
                  <div class="form half">
                    <label for="name" class="form__label">${ __html('Full name') }</label>
                    <input type="text" class="form__input" placeholder="" id="name" required>
                  </div>
                
                  <div class="form half">
                    <label for="email" class="form__label">${ __html('Email address') }</label>
                    <input type="email" class="form__input" placeholder="" id="email" required>
                  </div>
                
                  <div class="form full">
                    <label for="message" class="form__label">${ __html('Your message') }</label>
                    <input type="text" class="form__input" placeholder="" id="message" required>
                  </div>

                  <div class="form full">
                    <div class="kenzap-checkbox">
                      <input type="checkbox" name="condition" value="Yes">
                      <label>${ html(this.data.termstext.value) }</label>
                    </div>
                    <div>
                      <button class="form__btn">
                        <span class="form__btn--visible">
                          <p>${ html(this.data.ctatext.value) }</p> 
                          <i class="material-icons"></i>
                        </span>
                        <span class="form__btn--invisible">Message sent!</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
        </section>
        `
      );

      this.listeners();
    }

    listeners = () => {

      let dismiss = () => {

        [...document.querySelectorAll('#' + this.data.id + ' input')].forEach(el => {

          if(!el.value.length) el.parentElement.classList.remove('active');
        });
      }

      [...document.querySelectorAll('#' + this.data.id + ' input')].forEach(el => {

        el.addEventListener("focus", (e) => {

          dismiss();

          e.currentTarget.parentElement.classList.add('active');
        });

        el.addEventListener("blur", (e) => {

          if(!e.currentTarget.value.length) e.currentTarget.parentElement.classList.remove('active');
        });
      });
    }
}

window.kr54xj = kr54xj;