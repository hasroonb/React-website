import React from "react";
 const Contact = () => {
    return (
    <>
 
    <div className="main container">
    <div className="row">
      <div className="col-lg-8">
        <div className="contact-page">
          <h2>Please let us know if you have any questions</h2>
          <p className="py-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sunt optio consequuntur ducimus odit. Deleniti optio saepe unde omnis. Sapiente aliquam repellendus error id veniam totam dolores recusandae non dolorum?</p>
          <form id="contactForm">
            {/* <!-- Name input --> */}
            <div className="mb-3">
              <input className="form-control" id="name" type="text" placeholder="Name *" data-sb-validations="required" />
              <div className="invalid-feedback" data-sb-feedback="name:required">Name is required.</div>
            </div>
            {/* <!-- Email address input --> */}
            <div className="mb-3">
              <input className="form-control" id="emailAddress" type="email*" placeholder="Email Address *" data-sb-validations="required, email" />
              <div className="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.</div>
              <div className="invalid-feedback" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
            </div>
            {/* <!-- Form submissions success message --> */}
            <div className="d-none" id="submitSuccessMessage">
              <div className="text-center mb-3">Form submission successful!</div>
            </div>
            {/* <!-- Form submissions error message --> */}
            <div className="d-none" id="submitErrorMessage">
              <div className="text-center text-danger mb-3">Error sending message!</div>
            </div>
            {/* <!-- Message input --> */}
            <div className="mb-3">
              <textarea className="form-control" id="contact" type="text" placeholder="Leave a Message" style={{height: "10rem;"}} data-sb-validations="required"></textarea>
              <div className="invalid-feedback" data-sb-feedback="message:required">Message is required.</div>
            </div>
            {/* <!-- Form submit button --> */}
            <div className="d-grid">
              <button className="main-btn mt-0 disabled" id="submitButton" type="submit">Send message</button>
            </div>
          </form>
        </div>
      </div>
      <div className="sidebar col-lg-4">
        <div className="input-group">
          <div className="form-outline">
            <input id="search-input form1" type="search"  className="form-control" placeholder="search" />
          </div>
          <button id="search-button" type="button" className="btn dark">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="sidebar-category">
          <h4>We take care of your business</h4>
          <div className="category">
            <div className="category-item">
              <img className="category-icon" src="img/icon/marketing.svg" alt="/"/>
              <h3 className="category-title">Digital<br/>Marketing</h3>
              <p>Lorem Ipsum is simply dummy text of the printing </p>
              <a className="arrow" href="/"><img style={{width: "20px;"}} src="img/icon/arrow-right-icon.svg" alt="/"/></a>
            </div>
            <div className="category-item">
              <img className="category-icon" src="img/icon/identity.svg" alt="/"/>
              <h3 className="category-title">Corporate<br/>Identity</h3>
              <p>Lorem Ipsum is simply dummy text of the printing </p>
              <a className="arrow" href="/"><img style={{width: "20px;"}}src="img/icon/arrow-right-icon.svg" alt="/"/></a>
            </div>
            <div className="category-item">
              <img className="category-icon" src="img/icon/email.svg" alt="/"/>
              <h3 className="category-title">Email<br/>Marketing</h3>
              <p>Lorem Ipsum is simply dummy text of the printing </p>
              <a className="arrow" href="/"><img style={{width: "20px;"}} src="img/icon/arrow-right-icon.svg" alt="/"/></a>
            </div>
      </div>
        </div>
        <div className="recent-posts my-5">
          <h4>Our latest Articles</h4>
          <a href="/">All category <img style={{width: "20px", marginleft: "20px;"}} src="img/icon/arrow-right-icon.svg" alt="/"/></a>
        <div className="latest-articles-wrapper">
          <div className="article">
            <div className="arcticle-photo"><img src="img/post-1.png" alt="/"/></div>
            <div className="article-text">
            <a href="single-post.html"><h5 className="title">Develop Marketing</h5></a>
            <p className="article-meta"><img src="img/icon/calendar.svg" alt="/"/><span className="data text-muted">August 24, 2021</span></p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
          </div>
          <div className="article">
            <div className="arcticle-photo"><img src="img/post-2.png" alt="/"/></div>  
            <div className="article-text">
            <a href="single-post.html"><h5 className="title">Resources Your Blog</h5></a>
            <p className="article-meta"><img src="img/icon/calendar.svg" alt="/"/><span className="data text-muted">July 13, 2021</span></p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
          </div>
          <div className="article">
            <div className="arcticle-photo"><img src="img/post-3.png" alt="/"/></div>
            <div className="article-text">
            <a href="single-post.html"><h5 className="title">Know Your Audience</h5></a>
            <p className="article-meta"><img src="img/icon/calendar.svg" alt="/"/><span className="data text-muted">April 18, 2021</span></p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
          </div>
        </div>       
      </div>
      </div>
    </div>
  </div>
  {/* Footer------------------- */}
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
  
  export default Contact;