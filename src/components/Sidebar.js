import React from "react";

export default function Sidebar(props) {

  return (
    <>
      {/* Sidebar Cart Item */}
      <div className="xs-sidebar-group info-group">
        <div className="xs-overlay xs-bg-black" />
        <div className="xs-sidebar-widget">
          <div className="sidebar-widget-container">
            <div className="widget-heading">
              <a href="index-2.html#" className="close-side-widget">
                X
              </a>
            </div>
            <div className="sidebar-textwidget">
              {/* Sidebar Info Content */}
              <div className="sidebar-info-contents">
                <div className="content-inner">
                  <div className="logo">
                    <a href="index.html"><img src="assets/images/logo-2.png" alt title /></a>
                  </div>
                  <div className="content-box">
                    <h5>About Us</h5>
                    <p className="text">The argument in favor of using filler text goes something like this: If you use real content in the Process, anytime you reach a review point you’ll end up reviewing and negotiating the content itself and not the design.</p>
                    <a href="contact.html" className="theme-btn btn-style-two"><span className="txt">Consultation</span></a>
                  </div>
                  <div className="contact-info">
                    <h5>Contact Info</h5>
                    <ul className="list-style-one">
                      <li><span className="icon fas fa-map-marker" />Chicago 12, Melborne City, USA</li>
                      <li><span className="icon fas fa-phone" />(111) 111-111-1111</li>
                      <li><span className="icon fas fa-envelope" />aginco@gmail.com</li>
                      <li><span className="icon fas fa-clock" />Week Days: 09.00 to 18.00 Sunday: Closed</li>
                    </ul>
                  </div>
                  {/* Social Box */}
                  <ul className="social-box">
                    <li><a href="https://www.facebook.com/" className="fa fa-facebook-f" /></li>
                    <li><a href="https://www.twitter.com/" className="fa fa-twitter" /></li>
                    <li><a href="https://dribbble.com/" className="fa fa-dribbble" /></li>
                    <li><a href="https://www.linkedin.com/" className="fa fa-linkedin" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END sidebar widget item */}
    </>
  );
}