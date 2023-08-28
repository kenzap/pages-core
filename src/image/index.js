// dependencies
import { __html, attr } from '@kenzap/k-cloud';

class kaxJOx{

    // init class
    constructor(data){
        
      // cache data
      this.data = data;
    
      // call render
      this.render();
    }

    // render html
    render = () => {

      document.querySelector('#content').insertAdjacentHTML('beforeend', 
        `
        <section id="${ attr(this.data.id) }" class="kaxJOx ${ this.data.c.classes ? attr(this.data.c.classes) : '' }" style="${ attr(this.data.c.section) }">
            <div class="container" style="${ attr(this.data.c.container) }">
              ${ this.data.header.value }
              <div class="icont" style="max-width:${ attr(this.data.size.value) }px">
                <img class="image" src="${ attr(this.data.img.value) }" alt="${ attr(this.data.alt.value) }" >
                <p class="caption">${ this.data.caption.value }</p>
              </div>
          </div>
        </section>
        `
      );
    }
}

window.kaxJOx = kaxJOx;