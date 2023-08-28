// dependencies
import { __html, attr } from '@kenzap/k-cloud';

class kQFW7T{

    // init class
    constructor(data){
        
      // cache data
      this.data = data;
    
      // render section
      this.render();
    }

    // render YouTube embed iframe
    render = () => {

      document.querySelector('#content').insertAdjacentHTML('beforeend', 
        `
        <section id="${ attr(this.data.id) }" class="kQFW7T ${ this.data.c.classes ? attr(this.data.c.classes) : '' }" style="${ attr(this.data.c.section) }">
            <div class="container" style="${ attr(this.data.c.container) }">
              ${ this.data.header.value }
              <div class="video-cont">
                  <iframe src="${ attr(this.data.url.value) }" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
          </div>
        </section>
        `
      );
    }
}

window.kQFW7T = kQFW7T;