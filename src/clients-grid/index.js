// dependencies
import { __html, attr } from '@kenzap/k-cloud';

class kX5ytW{

    // init class
    constructor(data){
        
      // cache data
      this.data = data;
    
      // call render
      this.render();
    }

    // renders class html
    render = () => {

      document.querySelector('#content').insertAdjacentHTML('beforeend', 
        `
        <section id="${ attr(this.data.id) }" 
            class="kX5ytW ${ this.data.classes ? attr(this.data.classes) : '' }" 
            style="
            ${ attr(this.data.c.section) }
            ${ this.data.logosize.value ? '--logoSize:' + attr(this.data.logosize.value) + 'px;' : '' }
            ">
            <div class="container" style="${ attr(this.data.c.container) }">
              <ul>
              ${
                this.data.logos.map(logo => {

                  return `
                  <li>
                    <a href="${ attr(logo.link.value) }" target="_blank">
                      <img src="${ attr(logo.logo.value) }" alt="image">
                    </a>
                  </li>
                  `

                }).join('')
              }
              </ul>
          </div>
        </section>
        `
      );
    }
}

window.kX5ytW = kX5ytW;