// dependencies
import { __html, attr } from '@kenzap/k-cloud';

class kcoPOW{

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
        <div id="${ attr(this.data.id) }" class="kcoPOW ${ attr(this.data.classes) }" style="${ attr(this.data.c.section) }">
          <div class="kp-menu-1 kp-trans- kp-sticky" style="${ attr(this.data.c.section) }">
            <div class="container" style="${ attr(this.data.c.container) }">
              <div class="kp-content">
                <div class="main-nav">
                  <div class="logo">
                    <a href="#"><img src="${ attr(this.data.logo.value) }" alt="logo"></a>
                  </div>
                  <div class="kp-nav">
                    <ul class="sf-menu">
                      <li>
                        <a href="#">Upcoming</a>
                        <ul>
                          <li><a href="#">Sport Events</a></li>
                          <li><a href="#">Past Events</a></li>
                          <li><a href="#">BWM Golf</a></li>
                          <li><a href="#">Performance</a></li>
                          <li><a href="#">About</a></li>
                          <li><a href="#">News</a></li>
                        </ul>
                      </li>
                      
                      <li><a href="#">Event Calendar</a></li>
                      <li>
                        <a href="#">Seach</a>
                        <ul>
                          <li><a href="#">Maroon 5</a></li>
                          <li><a href="#">Beach Volley</a></li>
                          <li><a href="#">Guitar Vibes</a></li>
                          <li><a href="#">Artist Page</a></li>
                          <li><a href="#">Home v3</a></li>
                          <li><a href="#">Home v2</a></li>
                          <li><a href="#">Checkout</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Gallery</a></li>
                      <li class="cta"><a href="#">Contact Us</a></li>
                    </ul>
                    
                    <div class="mobile-menu">
                      <a class="mobile-cta" href="#">Contact Us</a>
                      <a class="mobile-btn"href="#"><span></span></a>
                    </div>
                  </div>
                </div>
                <div class="mobile-nav">
                  <ul>
                    <li>
                      <a href="#">Upcoming</a>
                      <ul>
                        <li><a href="#">Sport Events</a></li>
                        <li><a href="#">Past Events</a></li>
                        <li><a href="#">BWM Golf</a></li>
                        <li><a href="#">Performance</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">News</a></li>
                      </ul>
                    </li>
                    
                    <li><a href="#">Event Calendar</a></li>
                    <li>
                      <a href="#">Seach</a>
                      <ul>
                        <li><a href="#">Maroon 5</a></li>
                        <li><a href="#">Beach Volley</a></li>
                        <li><a href="#">Guitar Vibes</a></li>
                        <li><a href="#">Artist Page</a></li>
                        <li><a href="#">Home v3</a></li>
                        <li><a href="#">Home v2</a></li>
                        <li><a href="#">Checkout</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        `
      );
    }
}

window.kcoPOW = kcoPOW;