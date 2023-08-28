// dependencies
import { __html, attr } from '@kenzap/k-cloud';

class kuY7ia{

    // init class
    constructor(data){
        
      // cache data
      this.data = data;
    
      // call render
      this.render();
    }

    // render conpact contact form
    render = () => {

      document.querySelector('#content').insertAdjacentHTML('beforeend', 
        `
        <section id="${ attr(this.data.id) }" class="kuY7ia ${ this.data.c.classes ? attr(this.data.c.classes) : '' }" style="${ attr(this.data.c.section) }">
            <div class="container" style="${ attr(this.data.c.container) }">
              ${ this.data.header.value }
              <div class="krow">
                <div class="kcol-3">
                  <div class="info-box">
                    <div class="kp-content">
                      ${ this.data.note.value }
                    </div>
                  </div>
                </div>
                ${ this.data.contacts.map(contact => {

                  return `
                    <div class="kcol-3">
                      <div class="info-box">
                        <div class="kp-img">
                          <img src="${ attr(contact.icon.value) }" alt="contact icon">
                        </div>
                        <div class="kp-content">
                          ${ contact.text.value }
                        </div>
                      </div>
                    </div>
                    `
                    
                }).join('') }
              </div>
          </div>
        </section>
        `
      );
    }
}

window.kuY7ia = kuY7ia;