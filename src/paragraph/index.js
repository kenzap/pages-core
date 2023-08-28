// dependencies
import { __html, attr } from '@kenzap/k-cloud';

class k0LniY{

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
        <section id="${ attr(this.data.id) }" class="k0LniY ${ this.data.c.classes ? attr(this.data.c.classes) : '' }" style="${ attr(this.data.c.section) }">
            <div class="container" style="${ attr(this.data.c.container) }">
              ${ this.data.text.value }
          </div>
        </section>
        `
      );
    }
}

window.k0LniY = k0LniY;