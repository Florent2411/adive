import React from "react";

export default function Process(props) {

  return (
    <>
      {/* Process Section */}
      <section className="process-section" style={{backgroundColor: "#f7f7fe"}}>
        <div className="pattern-layer-one" style={{ backgroundImage: 'url(assets/images/background/pattern-14.png)' }} />
        <div className="pattern-layer-two" style={{ backgroundImage: 'url(assets/images/background/pattern-15.png)' }} />
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title centered">
            <div className="title style-two">Core Features</div>
            <h2>Digital Seo Marketing <br /> <span>Solution</span> Process</h2>
          </div>
          <div className="row clearfix">
            {/* Process Block */}
            <div className="process-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="icon-box">
                  <span className="icon"><img src="assets/images/icons/feature-1.png" alt /></span>
                </div>
                <h3><a href="service-detail.html">Business Planning</a></h3>
                <div className="text">Trusted results Business Consulting Unlimited Access. Always Facts. Privacy The Best Resources.  Answers.</div>
                <a className="read-more" href="service-detail.html">Read More</a>
              </div>
            </div>
            {/* Process Block */}
            <div className="process-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="icon-box">
                  <span className="icon"><img src="assets/images/icons/feature-2.png" alt /></span>
                </div>
                <h3><a href="service-detail.html">Marketing Work</a></h3>
                <div className="text">Trusted results Business Consulting Unlimited Access. Always Facts. Privacy The Best Resources.  Answers.</div>
                <a className="read-more" href="service-detail.html">Read More</a>
              </div>
            </div>
            {/* Process Block */}
            <div className="process-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="icon-box">
                  <span className="icon"><img src="assets/images/icons/feature-3.png" alt /></span>
                </div>
                <h3><a href="service-detail.html">Move Foroword</a></h3>
                <div className="text">Trusted results Business Consulting Unlimited Access. Always Facts. Privacy The Best Resources.  Answers.</div>
                <a className="read-more" href="service-detail.html">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Process Section */}
    </>
  );
}