// dependencies
import { __html, attr, onClick } from '@kenzap/k-cloud';

class kHSMSE{

    // init class
    constructor(data){
        
      // cache data
      this.data = data;
    
      // render section
      this.render();

      // render section
      this.listeners();
    }

    // render class html
    render = () => {

      document.querySelector('#content').insertAdjacentHTML('beforeend', 
        `
        <section id="${ attr(this.data.id) }" class="kHSMSE ${ this.data.c.classes ? attr(this.data.c.classes) : '' } ${ attr(this.data.orientation.value) }" style="${ attr(this.data.c.section) }">
          <div class="container" style="${ attr(this.data.c.container) }">
            ${ this.data.header.value }
            <div class="info-box">
              <div class="kp-img" style="background-image:url(${ attr(this.data.img.value) })"></div>
              <div class="kp-content">
                ${ this.data.boxtitle.value }
                <ul class="accordion">
                ${ this.data.topics.map((topic, i) => {

                    return `
                      <li>
                        <a class="toggle" href="#"><span>${ topic.number.value }</span>${ topic.topic.value } <i class="plus"></i></a>
                        <div class="inner">
                          ${ topic.text.value }
                        </div>
                      </li> 
                    `

                  }).join('') }
                </ul>
              </div>
            </div>
          </div>
        </section>
        `
      );
    }

    // listeners
    listeners = () => {

      onClick('.kHSMSE .toggle', e => {

        e.preventDefault();

        let el = e.currentTarget;
        let action = 'open';

        if(el.classList.contains('active')){ action = 'close'; }

        // clear previous
        [...document.querySelectorAll('#'+this.data.id+' .accordion .inner')].forEach(el => {

          el.classList.remove('show');
        });

        [...document.querySelectorAll('#'+this.data.id+' .accordion .toggle')].forEach(el => {

          el.classList.remove('active');
        });
        
        if(action == 'open'){

          el.classList.add('active');
          el.parentElement.querySelector('.inner').classList.add('show');
        }
      });
    }
}

window.kHSMSE = kHSMSE;