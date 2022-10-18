import React from "react";
const Home = () => {
    return (
      <>
   
    <main>
    
        <div className="intro-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-xl-4 ms-auto mt-5">
                <h1>Let's start something big <span className="yellow-stroke">together</span></h1>
                <label for="">Get your update <span>news</span></label>
                <div className="news-form">
                  <input type="email" name="email" placeholder="Enter your email" id=""/>
                  <button className="main-btn" type="submit">Send <img style={{width: "15px", marginleft: "15px;"}} src="img/icon/arrow-right-icon-black.svg" alt="/"/></button>
                </div>
              </div>
              <div className="col-12 d-md-flex justify-content-between mb-5">
                <div className="light-box first">
                    <h4>Digital<br/>Marketing</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing </p>
                    <a className="arrow" href="/"><img style={{width: "20px;"}} src="img/icon/arrow-right-icon.svg" alt="/"/></a>
                </div>
                <div  className="light-box second">
                    <h4>Corporate<br/>Identity</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing </p>
                    <a className="arrow" href="/"><img style={{width: "20px;"}} src="img/icon/arrow-right-icon.svg" alt="/"/></a>
                </div>
                <div  className="light-box third">
                    <h4>Email<br/>Marketing</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing </p>
                    <a className="arrow" href="/"><img style={{width: "20px;" }}src="img/icon/arrow-right-icon.svg" alt="/"/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {/* <!-- Clients --> */}
          <div className="clients text-center">
            <p className="text-muted text-uppercase pb-4">Some of our trusted clients</p>
            <div className="client-logo">
              <div><img src="img/icon/go-sm-logo.svg" alt="/"/></div>
              <div><img src="img/icon/social-road-logo.svg" alt="/"/></div>
              <div><img src="img/icon/firmbee-logo.svg" alt="/"/></div>
              <div><img src="img/icon/create-paper.svg" alt="/"/></div>
              <div><img src="img/icon/point-design-logo.svg" alt="/"/></div>
            </div>
          </div>
          {/* <!-- See our projects --> */}
          <div className="see-our-projects">
            <h1>See our <span className="yellow-stroke">projects</span> </h1>
            <div className="projects-wrapper">
              <div className="project">
                <div className="project-logo">
                  <img src="img/icon/go-sm-logo-color.svg" alt="/"/>
                </div>
                <p className="project-title">Digital<br/>
                  Marketing</p>
                  <p className="project-description">Lorem Ipsum is simply dummy text of the printing </p>
              </div>
              <div className="project">
                <div className="project-logo">
                  <img src="img/icon/firmbee-color.svg" alt="/"/>
                </div>
                <p className="project-title">Corporate<br/>Identity</p>
                  <p className="project-description">Lorem Ipsum is simply dummy text of the printing </p>
              </div>
              <div className="project">
                <div className="project-logo">
                  <img src="img/icon/point-design-logo-color.svg" alt="/"/>
                </div>
                <p className="project-title">Email<br/>Marketing</p>
                  <p className="project-description">Lorem Ipsum is simply dummy text of the printing </p>
              </div>
            </div>
            <a href="/" className="main-btn">View Full <strong>Portfolio</strong></a>
          </div>
          {/* <!-- What people say --> */}
          <div className="testimonials">
            <h1>What people say <span className="yellow-stroke">About Us</span> </h1>
            <div id="carouseltestimonials" className="carousel slide w-100" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="testimonial">
                    <div className="photo">
                      <img src="img/person-1.jpg" alt="/"/>
                    </div>
                    <div className="testimonial-text">
                      <div className="quote-test"><img src="img/icon/quaote.png" alt="/"/></div>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                      <p className="name">-  John Bag</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testimonial">
                    <div className="photo">
                      <img src="img/person-2.jpg" alt="/"/>
                    </div>
                    <div className="testimonial-text">
                      <div className="quote-test"><img src="img/icon/quaote.png" alt="/"/></div>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                      <p className="name">-  John Bag</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testimonial">
                    <div className="photo">
                      <img src="img/person-3.jpg" alt="/"/>
                    </div>
                    <div className="testimonial-text">
                      <div className="quote-test"><img src="img/icon/quaote.png" alt="/"/></div>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                      <p className="name">-  John Bag</p>
                    </div>
                  </div>
                </div>
                <div className="controllers">
                  <button  type="button" data-bs-target="#carouseltestimonials" data-bs-slide="prev">
                    <img className="black" src="img/icon/arrow-left-icon-black.svg" alt="/" />
                    <img className="yellow" src="img/icon/arrow-left-icon.svg" alt="/"/>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button  type="button" data-bs-target="#carouseltestimonials" data-bs-slide="next">
                    <img className="black" src="img/icon/arrow-right-icon-black.svg" alt="/"/>
                    <img className="yellow" src="img/icon/arrow-right-icon.svg" alt="/"/>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>  
            </div>
          </div>
          {/* <!-- Newsletter --> */}
          <div className="update-news">
            <div className="row">
              <div className="col-md-6 news-text">
                <h2>Get your update news</h2>
                <p>If you going to use a passage of Lotem Ipsum, you need to be sure there  isn’t anything embarrassing.</p>
              </div>
              <div className="col-md-6 news-form">
                <input type="email" name="email" placeholder="Enter your email" id=""/>
                <button className="main-btn" type="submit">Send <img style={{width: "15px", marginleft: "15px;"}} src="img/icon/arrow-right-icon-black.svg" alt="/"/></button>
              </div>
            </div>
            </div>
           {/* <!-- Variations --> */}
          <div className="variations">
              <div className="text">
                <h1>There are many variations</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <a href="/" className="main-btn">Read more</a>
              </div>
              <div className="img">
                <img src="img/woman.png" alt="/"/>
              </div>
          </div> 
          {/* <!-- Latest Articles --> */}
          <div className="latest-articles text-center">
            <h1>Our latest <span className="yellow-stroke">Articles</span></h1>
            <div className="latest-articles-wrapper">
              <div className="article">
                <img src="img/post-1.png" alt="/"/>
                <p className="article-meta"><img src="img/icon/calendar.svg" alt="/"/><span className="data text-muted">August 24, 2021</span></p>
                <a href="single-post.html"><h4 className="title">Develop Marketing</h4></a>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              </div>
              <div className="article">
                <img src="img/post-2.png" alt="/"/>
                <p className="article-meta"><img src="img/icon/calendar.svg" alt="/"/><span className="data text-muted">July 13, 2021</span></p>
                <a href="single-post.html"><h4 className="title">Resources Your Blog</h4></a>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              </div>
              <div className="article">
                <img src="img/post-3.png" alt="/"/>
                <p className="article-meta"><img src="img/icon/calendar.svg" alt="/"/><span className="data text-muted">April 18, 2021</span></p>
                <a href="single-post.html"><h4 className="title">Know Your Audience</h4></a>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer-------------------------------- */}
      <footer>
          <div class="container text-center text-md-start">
            <div class="footer-wrap">
              <div class="about">
                <img src="img/icon/company-logo-black.svg" alt="/"/>
                <p class="text-muted py-4">
                  Start working with Firmbee which can provide you with all the tools needed to run an effcieint business remotely.
                </p>
                <div class="social-media">
                  <a href="/" class="me-2 text-reset"><img src="img/icon/instagram-icon.svg" alt="/"/></a>
                  <a href="/" class="me-2 text-reset"><img src="img/icon/facebook-icon.svg" alt="/"/></a>
                  <a href="/" class="me-2 text-reset"><img src="img/icon/twitter-icon.svg" alt="/"/></a>
                  <a href="/" class="me-2 text-reset"><img src="img/icon/linkedin-icon.svg" alt="/"/></a>
                </div>
              </div>
              <div class="company">
                <p class="fw-bold">Company</p>
                <p><a href="/About">About us</a></p>
                <p><a href="/">Services</a></p>
                <p><a href="/">Team</a></p>
                <p><a href="/">Pricing</a></p>
                <p><a href="/">Project</a></p>
                <p><a href="/">Careers</a></p>
                <p><a href="/blog">Blog</a></p>
                <p><a href="/">Login</a></p>
              </div> 
              <div class="useful-links">
                <p class="fw-bold">Useful links</p>
                <p><a href="/">Terms of </a></p>
                <p><a href="/">Services</a></p>
                <p><a href="/">Privacy Policy</a></p>
                <p><a href="/">Documentation</a></p>
                <p><a href="/">Changelog</a></p>
                <p><a href="/">Components</a></p>
              </div>
              <div class="newsletter">
                <p class="fw-bold">Newsletter</p>
                <p class="text-muted">Sign up and receive the latest tips
                  via email.</p>
                  <form id="subscribe" action="">
                    <label for="email">Youre e-mail:</label>
                    <input type="email" placeholder="e-mail:" name="email" required/>
                    <button type="submit" class="main-btn">Subscribe</button>
                  </form>
              </div> 
            </div>
            <div class="copyright">
              <p>&copy; 2022 YOUR-DOMAIN | Created by <a href="https://firmbee.com/use-cases/software-for-team-work/" title="Firmbee - Online Remote working app for collaboration & task management" target="_blank" rel="noreferrer">Firmbee.com</a></p>
              {/* <!--
              This template is licenced under Attribution 3.0 (CC BY 3.0 PL),
              You are free to: Share and Adapt. You must give appropriate credit, you may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
              -->  */}
          </div>
          </div>
      </footer>
    
    
    
      
    </>
    
    
    );
  };
  
  export default Home;