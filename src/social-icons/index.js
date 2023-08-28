// dependencies
import { __html, attr } from '@kenzap/k-cloud';

class kB9kJP{

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
        <section id="${ attr(this.data.id) }" class="kB9kJP ${ this.data.c.classes ? attr(this.data.c.classes) : '' }" style="${ attr(this.data.c.section) }">
            <div class="container" style="${ attr(this.data.c.container) }">
              ${ this.data.header.value }
              <div class="kp-content">
                <ul class="${ attr(this.data.style.value) }">
                  ${
                    this.data.icons.map((icon, i) => {

                      return `
                      <li><a href="${ attr(icon.link.value) }" ><img class="kp-icon" style="height:${ attr(this.data.size.value) }px" src="${ attr(icon.icon.value) }" > ${ icon.title.value }</a></li>
                      `;

                    }).join('')
                  }
                </ul>
            </div>
          </div>
        </section>
        `
      );
    }
}

window.kB9kJP = kB9kJP;