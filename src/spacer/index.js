// dependencies
import { __html, attr } from '@kenzap/k-cloud';

class kQuDWD{

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
        <section id="${ attr(this.data.id) }" class="kQuDWD ${ attr(this.data.c.classes) }" style="${ attr(this.data.c.section) }">
          <div class="container" style="${ attr(this.data.c.container) }">
              <div class="spacer" style="height:${ attr(this.data.size.value) }px;background-color:${ attr(this.data.color.value) };">
                
              </div>
          </div>
        </section>
        `
      );
    }
}

window.kQuDWD = kQuDWD;