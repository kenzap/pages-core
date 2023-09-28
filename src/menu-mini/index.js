// dependencies
import { __html, html, attr, onClick } from '@kenzap/k-cloud';

class kx0SBH{

    // init class
    constructor(data){
        
      // cache data
      this.data = data;
    
      // render section
      this.render();

      // listeners
      this.listeners();
    }

    // render class html
    render = () => {

      document.querySelector('#content').insertAdjacentHTML('beforeend', 
        `
        <div class="kx0SBH">
          <label class="menu-cont">
            <input type="checkbox" class="menu-state open" name="menu-button" >
            <span></span> 
            <span></span>
            <span></span>
          </label>
          <div class="menu-drawer" opened=false>
            <nav>
              ${

                this.data.links.map(item => {

                  return `<a href="${ attr(item.href.value) }" class="close" >${ html(item.text.value) }</a>`

                }).join('')

              }
            </nav>
          </div>
        </div>

        `
      )
    }

    // hamburger menu cick listener
    listeners = () => {

      // open drawer
      onClick('.kx0SBH .open', e => {
        let checked = document.querySelector('.menu-state').checked;
        let drawer = document.querySelector('.menu-drawer');
        drawer.setAttribute('opened', checked);
      });

      // close drawer
      onClick('.kx0SBH .close', e => {
        let checked = document.querySelector('.menu-state').checked;
        let drawer = document.querySelector('.menu-drawer');
        drawer.setAttribute('opened', checked);
      });

      // close drawer after menu item clicked
      onClick('.kx0SBH .menu-drawer nav a', e => {
        document.querySelector('.menu-state').checked = false;
        let drawer = document.querySelector('.menu-drawer');
        drawer.setAttribute('opened', false);
      });
    }
}


window.kx0SBH = kx0SBH;