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

    // render class html. TODO remove hardcoded elements
    render = () => {

      document.querySelector('#content').insertAdjacentHTML('beforeend', 
        `
        <section id="${ attr(this.data.id) }" class="kE4q9H ${ this.data.classes ? attr(this.data.classes) : '' }" style="${ attr(this.data.c.section) }">
            <div class="container" style="${ attr(this.data.c.container) }">
              <div id="colophon" class="site-footer">
                <div class="footer-info clearfix">
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        <h3>About</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.</p>
                        <ul class="social-links">
                          <li>
                            <a href="#">
                              <i class="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-linkedin" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-google-plus" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="col">
                        <h3>Latest Tweets</h3>
                        <ul class="latest-tweets">
                          <li>Phasellus porta sed nunc eu tempor. Pellentesque ac consequat nisi, ac vulputate nisi. <a href="#">http://t.oiWhiuan/jakl</a></li>
                          <li>Duis id tellus massa. Quisque in purus non mauris dapibus tincidunt. <a href="#">http://t.oiWhiuan</a></li>
                        </ul>
                      </div>
                      <div class="col">
                        <h3>Contact Us</h3>
                        <ul class="contact-list">
                          <li class="email"><a href="mailto:markrussell@example.com">markrussell@example.com</a></li>
                          <li class="address">No 40 Baria Sreet 133/2, NewYork</li>
                          <li class="phone"><a href="tel:7859775767">(785) 977 5767</a></li>
                          <li class="website"><a href="http://www.flusi.com">www.flusi.com</a></li>
                          <li class="time">Mon - Fri: 8AM - 7PM</li>
                        </ul>
                      </div>
                    </div>
                    <a href="#" class="back-to-top">
                      <span class="icon-BackToTop">
                        <span class="path1"></span><span class="path2"></span><span class="path3"></span>
                      </span>
                    </a>
                  </div>
                </div>
                
                <div class="footer-copyright">
                  <div class="container">
                    <p>Copyright &copy; Yogaflusi. All rights reserved.</p>
                  </div>
                </div>
              </div>
          </div>
        </section>
        `
      );
    }
}

window.kE4q9H = kE4q9H;