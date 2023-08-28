// dependencies
import { __html, attr, simulateClick } from '@kenzap/k-cloud';
import { loadDependencies } from '../_/_helpers.js';

class kutWDU{

    // init class
    constructor(data){
        
      // cache data
      this.data = data;

      // dep counter
      this.dpi = 0;

      // call html rendering
      this.html();

      // get dependencies
      this.dependencies();
    }

    // render parent layout HTML container
    html = () => {

      document.querySelector('#content').insertAdjacentHTML('beforeend', 
      `
      <section id="${ attr(this.data.id) }" class="kutWDU ${ this.data.c.classes ? attr(this.data.c.classes) : '' } ${ attr(this.data.style.value) } ${ attr(this.data.effect.value) }" style="${ attr(this.data.c.section) }">
          <div class="container" style="${ attr(this.data.c.container) }">

          </div>
      </section>
      `
      );
    }

    // render html and add layout to parent HTML container
    render = () => {

      // add to body
      document.querySelector('#'+attr(this.data.id)+' .container').innerHTML =
        `
        ${ this.data.header.value }
        <ul class="kp-filter ${ this.data.filters.value.length < 1 ? 'dn' : '' }">
          ${
            this.data.filters.value.split('\n').map((f, i) => {

              return `
              <li>
                <a href="#" class="filter ${i == 0 ? 'active' : '' }" data-filter=".${ attr(this.slugify(f)) }">${ f }</a>
              </li>
              `

            }).join(``)
          }
        </ul>
        <div class="kp-list" >
          <div class="grid-sizer"></div>
          ${ this.data.images.map((img) => {

            return `
              <div class="kp-item ${ img.filters.value.split('\n').map((f, i) => { return `${ this.slugify(f) }` }).join(` `) }">
                <div class="gallery-box">
                  <div class="kp-img">
                    <a href="${ this.image(img, 1) }" data-thumb="${ this.image(img, 1) }" data-fancybox="gallery" style="background-image:url('${ attr(this.image(img, 0)) }');"></a>
                  </div>
                  <div class="kp-info">
                    <h3>
                      <a href="javascript:;" class="gallery-link">
                        ${ img.text.value }
                      </a>
                    </h3>
                    <ul>
                      ${ img.filters.value.split('\n').map((f, i) => {

                          return `<li><a href="#" class="filter" data-filter=".${ this.slugify(f) }">${ attr(this.slugify(f)) }</a></li>`

                        }).join('')
                      }
                    </ul>
                  </div>
                </div>
              </div>
              `

          }).join(``) }
        `
      ;
    }

    // asyncronously loads CSS and JS library dependencies
    dependencies = () => {

      // dependency callback
      let cb = () => {

        this.dpi += 1;
        
        // execute after all dependencies loaded
        if(this.dpi > 1){

          // render section
          this.render();

          // listeners
          this.listeners();
        }
      };

      // get dependencies
      loadDependencies('https://static.kenzap.com/libs/isotope.pkgd-3.0.6.min.js', cb);
      loadDependencies('https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js', cb);
      loadDependencies('https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css', cb);
    }

    // gallery listeners
    listeners = () => {

      // isotope
      this.iso = new Isotope( '.kutWDU .kp-list', {
        layoutMode: 'packery',
        itemSelector: '.kp-item',
        percentPosition: true,
        packery: {
          columnWidth: '.grid-sizer'
        }
      });

      // click listeners
      [...document.querySelectorAll('.kutWDU a')].forEach((el, i) => {
        el.addEventListener('click', (e) => {

          if(e.currentTarget.classList.contains('filter')){

            e.preventDefault();

            let filterValue = e.currentTarget.dataset.filter;
            this.iso.arrange({ filter: filterValue });
            [...document.querySelectorAll('.kp-filter li a')].forEach(a => { a.classList.remove("active") });
            [...document.querySelectorAll('.kp-filter li a')].forEach(a => { if(a.dataset.filter == filterValue) a.classList.add("active") });
            return false;
          }

          if(e.currentTarget.classList.contains('gallery-link')){

            simulateClick(e.currentTarget.parentElement.parentElement.querySelector('.kp-img a'))
            return false;
          }
        });
      })

      // image preview
      Fancybox.bind('.kutWDU [data-fancybox="gallery"]', {
        idleTime: 0,
        thumbs : {
          autoStart : true,
          axis: "x"
        },
        buttons: [
          "zoom",
          "fullScreen",
          "close"
          ],
      });
    }

    // get gallery image url based on the provided size
    image = (img, size) => {

      // custom size requested
      if(size > 0){

       return img.img.value.replace(img.img.sizes[0], img.img.sizes[size]);
      }else{

        return img.img.value;
      }
    }

    // convert string to URL friendly slug
    slugify = (val) => {

      return val
        .toString()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
    }

}

window.kutWDU = kutWDU;