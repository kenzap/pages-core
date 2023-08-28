// dependencies
import { __html, attr } from '@kenzap/k-cloud';

class kwcHep{

    // init class
    constructor(data){
        
      // cache data
      this.data = data;
    
      // call render
      this.render();

      // listeners
      this.listeners();
    }

    // render class html
    render = () => {

      document.querySelector('#content').insertAdjacentHTML('beforeend', 
        `
        <header id="${ attr(this.data.id) }" class="kwcHep ${ this.data.classes ? attr(this.data.classes) : '' }" style="
        ${ this.data.c.section }
        ${ '--linkcolor:' + attr(this.data.linkcolor.value) };
        ">
          <!-- site-navbar start -->
          <div class="navbar-area">
            <div class="container" style="${ attr(this.data.c.container) }">
              <nav class="site-navbar">
                <!-- site logo -->
                <a href="/" class="site-logo" >
                  ${ this.data.logo.value ? `<img style="width:${ attr(this.data.logosize.value) }px;" src="${ attr(this.data.logo.value) }" alt="${ (this.data.logo.alt ? attr(this.data.logo.alt):'logo') }">` : ''}
                </a>
                <!-- site menu/nav -->
                <ul>
                  ${

                    this.data.links.map(item => {
    
                      return `<li><a href="${ attr(item.href.value) }" >${ item.text.value }</a></li>`
    
                    }).join('')
    
                  }
                </ul>
                <!-- nav-toggler for mobile version only -->
                <button class="nav-toggler">
                  <span></span>
                </button>
              </nav>
            </div>
          </div><!-- navbar-area end -->
        </header>   
        `
      );
    }

    listeners = () => {

      // define all UI variable
      const navToggler = document.querySelector('.nav-toggler');
      const navMenu = document.querySelector('.site-navbar ul');
      const navLinks = document.querySelectorAll('.site-navbar a');

      // load all event listners
      allEventListners();

      // functions of all event listners
      function allEventListners() {
        // toggler icon click event
        navToggler.addEventListener('click', togglerClick);
        // nav links click event
        navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
      }

      // togglerClick function
      function togglerClick() {
        navToggler.classList.toggle('toggler-open');
        navMenu.classList.toggle('open');
      }

      // navLinkClick function
      function navLinkClick() {
        if(navMenu.classList.contains('open')) {
          navToggler.click();
        }
      }
    }
}

window.kwcHep = kwcHep;