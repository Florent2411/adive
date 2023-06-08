import React from "react";

export default function Footer(props) {

  return (
    <>
      {/* Main Footer / Style Two */}
      <footer className="main-footer">
        <div className="pattern-layer-six" style={{ backgroundImage: 'url(assets/images/icons/vector-24.png)' }} />
        <div className="pattern-layer-seven" style={{ backgroundImage: 'url(assets/images/icons/vector-25.png)' }} />
        <div className="auto-container">
          {/* Upper Box */}
          <div className="upper-box">
            <div className="row clearfix">
              {/* Title Column */}
              <div className="title-column col-lg-7 col-md-12 col-sm-12">
                <div className="inner-column">
                  <h2>Looking for the <span>Business</span> Solution ?</h2>
                  <div className="text">Don’t wait make a smart &amp; logical quote here. Its pretty easy.</div>
                </div>
              </div>
              {/* Button Column */}
              <div className="button-column col-lg-5 col-md-12 col-sm-12">
                <div className="inner-column text-center text-md-end">
                  <div className="button-box">
                    <a href="contact.html" className="theme-btn btn-style-eight"><span className="txt">Get quate now <i className="flaticon-next-2" /></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Upper Box */}
          {/* Widgets Section */}
          <div className="widgets-section">
            <div className="row clearfix">
              {/* Column */}
              <div className="big-column col-lg-6 col-md-12 col-sm-12">
                <div className="row clearfix">
                  {/* Footer Column */}
                  <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                    <div className="footer-widget about-widget">
                      <div className="logo">
                        <a href="index.html"><img src="assets/images/adiveLogo.png" alt title width={100}/></a>
                      </div>
                      <div className="text">Corporate clients and leisure travelers has been relying on Groundlink for dependable safe, and professional chauffeured car service in major cities across World.</div>
                      <div className="opening">
                        <span className="icon far fa-clock" />
                        <strong>Opening Houres</strong>
                        <div className="time">Mon - Sat(8.00 - 6.00) <br /> Sunday - Closed</div>
                      </div>
                    </div>
                  </div>
                  {/* Footer Column */}
                  <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                    <div className="footer-widget links-widget">
                      <h3>Help?</h3>
                      <ul className="nav-list">
                        <li><a href="index-2.html#">FAQ</a></li>
                        <li><a href="index-2.html#">Term &amp; conditions</a></li>
                        <li><a href="index-2.html#">Reporting</a></li>
                        <li><a href="index-2.html#">Documentation</a></li>
                        <li><a href="index-2.html#">Support Policy</a></li>
                        <li><a href="index-2.html#">Privacy</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Column */}
              <div className="big-column col-lg-6 col-md-12 col-sm-12">
                <div className="row clearfix">
                  {/* Footer Column */}
                  <div className="footer-column col-lg-4 col-md-6 col-sm-12">
                    <div className="footer-widget links-widget style-two">
                      <h3>Useful Links</h3>
                      <ul className="nav-list">
                        <li><a href="index-2.html#">About</a></li>
                        <li><a href="index-2.html#">News</a></li>
                        <li><a href="index-2.html#">Partners</a></li>
                        <li><a href="index-2.html#">Room Details</a></li>
                        <li><a href="index-2.html#">Gallery</a></li>
                        <li><a href="index-2.html#">Contacts</a></li>
                      </ul>
                    </div>
                  </div>
                  {/* Footer Column */}
                  <div className="footer-column col-lg-8 col-md-6 col-sm-12">
                    <div className="footer-widget social-widget">
                      <h3>About Us</h3>
                      {/* Footer Column */}
                      <div className="widget-content">
                        <div className="text mb-40">Corporate clients and leisure travelers has been relying on Groundlink for dependable safe, and professional chauffeured car end service in major cities across World.</div>
                        {/* Social Box */}
                        <div className="subscribe-form">
                          <form method="post" action="contact.html">
                            <div className="form-group">
                              <input type="email" name="email" defaultValue placeholder="Enter Your Email" required />
                              <button type="submit" className="theme-btn btn-style-two"><span className="txt">Subscribe Now</span></button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bootom */}
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="row clearfix align-items-center">
              {/* Copright Column */}
              <div className="copyright-column col-lg-6 col-md-6 col-sm-12">
                <div className="copyright">Copyright © 2022 Theme. All Rights Reserved.</div>
              </div>
              {/* Social Column */}
              <div className="social-column col-lg-6 col-md-6 col-sm-12">
                <div className="inner-column text-center text-md-end">
                  <ul className="social-box">
                    <li><a href="https://www.facebook.com/" className="fa fa-facebook" /></li>
                    <li><a href="https://www.twitter.com/" className="fa fa-twitter" /></li>
                    <li><a href="https://youtube.com/" className="fa fa-youtube" /></li>
                    <li><a href="https://www.pinterest.com/" className="fa fa-pinterest-p" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End Main Footer */}
    </>
  );
}