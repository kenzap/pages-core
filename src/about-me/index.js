// dependencies
import { __html, attr } from '@kenzap/k-cloud';

class kE4q9H{

    // init class
    constructor(data){
        
      // cache data
      this.data = data;
    
      // call render
      this.render();
    }

    // renders about me html
    render = () => {

      document.querySelector('#content').insertAdjacentHTML('beforeend', 
        `
        <section id="${ attr(this.data.id) }" class="kE4q9H ${ this.data.classes ? attr(this.data.classes) : '' }" style="${ attr(this.data.c.section) }">
            <div class="container" style="${ attr(this.data.c.container) }">
              <div class="info-box">
                <div class="kp-img" style="max-width:${ attr(this.data.avatarsize.value) }px;">${ this.data.img.value ? '<img src="'+attr(this.data.img.value)+'" alt="'+(this.data.img.alt?this.data.img.alt:'')+'">' : ''}</div>
                <div class="kp-content">
                  ${ this.data.text.value }
                  ${ this.data.signature.value ? '<img src="'+this.data.signature.value+'" alt="'+(this.data.signature.alt?this.data.signature.alt:'')+'">' : ''}
                </div>
              </div>
          </div>
        </section>
        `
      );
    }
}

window.kE4q9H = kE4q9H;