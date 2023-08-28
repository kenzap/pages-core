// dependencies
import { __html, attr, html } from '@kenzap/k-cloud';
import { hexToRGB } from "../_/_helpers.js"
// import Glide from '@glidejs/glide'

class kUo3Ac{

    // init class
    constructor(data){
        
      // cache data
      this.data = data;
    
      // call render
      this.render();
    }

    // renders footer section
    render = () => {

      // split into columns
      let navColumns = [[],[],[],[]];
      this.data.links.forEach(link => {

        navColumns[parseInt(link.column.value)].push(link);
      });

      document.querySelector('#content').insertAdjacentHTML('beforeend', 
        `
        <section id="${ attr(this.data.id) }" 
          class="kUo3Ac ${ this.data.c.classes ? attr(this.data.c.classes) : '' }" 
          style="
          ${ attr(this.data.c.section) };
          ">
          <div class="container" style="${ attr(this.data.c.container) }">

              <div class="footer-info">
                <div class="f-container">
                  <div class="f-row">
                    <div class="footer-logo col-md-3">
                      <a href="#" title="Sekolah" rel="home">
                        <img src="${ attr(this.data.logo.value) }" alt="logo">
                      </a>
                      <p>${ html(this.data.footertext.value) }</p>
                    </div>
                    <div class="footer-menu col-md-9">
                      ${
                       navColumns.map(column => {

                          return `
                            <div class="footer-links">
                              <ul>
                              ${
                                column.map((link, i) => {
                                
                                  return `
                                    <li>${ i==0 ? '<b>': '' }<a href="${ html(link.link.value) }">${ html(link.text.value) }</a>${ i==0 ? '</b>': '' }</li>
                                  `

                                }).join('')
                              }
                              </ul>
                            </div>`
                          
                        }).join('')
                      }
                      <div class="footer-links">
                        <ul class="social">
                        ${
                          this.data.icons.map((icon, i) => {
                            
                            return `
                              <li>
                                <a href="${ attr(icon.link.value) }" >
                                  <img class="kp-icon" style="height:${ attr(this.data.iconsize.value) }px" src="${ attr(icon.icon.value) }" >
                                </a>
                              </li>
                            `;
      
                          }).join('')
                        }
                        </ul>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              ${ 
                this.data.footernote.value ? 
                `
                <div class="footer-copyright">
                  <div class="f-container">
                    <div class="f-row">
                      <p>${ html(this.data.footernote.value) }</p>
                    </div>
                  </div>
                </div>
                `
                :
                `
                `
              }
          </div>
        </section>
        `
      );
    }
}

window.kUo3Ac = kUo3Ac;