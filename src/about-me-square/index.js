// dependencies
import { __html, attr } from '@kenzap/k-cloud';

class kAIa7c{

    // init class
    constructor(data){
        
      // cache data
      this.data = data;
    
      // call render
      this.render();
    }

    // renders about me square layout component
    render = () => {

      document.querySelector('#content').insertAdjacentHTML('beforeend', 
        `
        <section id="${ attr(this.data.id) }" class="kAIa7c ${ attr(this.data.classes) }" style="${ attr(this.data.c.section) }">
            <div class="container" style="${ attr(this.data.c.container) }">
                ${ this.data.header.value }
                <div class="row">
                    <div class="box">
                        <div class="col-6">
                            <div class="img">
                                <img src="${ attr(this.data.img.value) }" alt="${ attr(this.data.alt.value) }">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="content">
                              ${ this.data.text.value }
                              ${ this.data.button.value }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `
      );
    }
}

window.kAIa7c = kAIa7c;