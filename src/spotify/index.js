// dependencies
import { __html, attr, onClick } from '@kenzap/k-cloud';

class kddehb{

    // init class
    constructor(data){
        
      // cache data
      this.data = data;
    
      // call render
      this.render();
    }

    // render Spotify HTML layout
    render = () => {

      document.querySelector('#content').insertAdjacentHTML('beforeend', 
        `
        <section id="${ attr(this.data.id) }" class="kddehb ${ this.data.c.classes ? attr(this.data.c.classes) : '' }" style="${ attr(this.data.c.section) }">
          <div class="container" style="${ attr(this.data.c.container) }">
            <div class="spt-cont">
              <iframe src="${ attr(this.data.url.value) }" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
          </div>
        </section>
        `
      )
    }
}

window.kddehb = kddehb;