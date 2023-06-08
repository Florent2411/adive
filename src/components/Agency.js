import React from "react";

export default function Agency(props) {

  return (
    <>
      {/* Agency Section */}
      <section className="agency-section">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Title Column */}
            <div className="title-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                {/* Sec Title */}
                <div className="sec-title">
                  <div className="title style-two">About Our Agency</div>
                  <h2>The Best <span>Marketing</span> <br /> Agency In BDes.</h2>
                  <div className="text">No matter how much you know about a particular medical healthcare professional, you always need to be thinking about what’s?</div>
                </div>
                <ul className="about-list">
                  <li>Lorem Ipsum generators on the tend to repeat.</li>
                  <li>If you are going to use a passage.</li>
                  <li>Lorem Ipsum generators on the tend to repeat.</li>
                </ul>
                <div className="button-box">
                  <a href="about.html" className="theme-btn btn-style-seven"><span className="txt">Learn More <i className="flaticon-next-2" /></span></a>
                </div>
              </div>
            </div>
            {/* Blocks Column */}
            <div className="blocks-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="row clearfix">
                  {/* Business Block */}
                  <div className="business-block-two col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                      <div className="vector-icon" style={{ backgroundImage: 'url(assets/images/icons/vector-21.png)' }} />
                      <div className="content">
                        <div className="icon-box">
                          <span className="icon flaticon-web-search-engine" />
                        </div>
                        <h4><a href="service-detail.html">analytic optimization</a></h4>
                        <div className="text">Lorem ipsum, or lipsum as some known, is dummy used</div>
                        <a href="service-detail.html" className="view">View Subject</a>
                      </div>
                    </div>
                  </div>
                  {/* Business Block */}
                  <div className="business-block-two col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box wow fadeInRight" data-wow-delay="150ms" data-wow-duration="1500ms">
                      <div className="vector-icon" style={{ backgroundImage: 'url(assets/images/icons/vector-21.png)' }} />
                      <div className="content">
                        <div className="icon-box">
                          <span className="icon flaticon-stats" />
                        </div>
                        <h4><a href="service-detail.html">Marketing Analysis</a></h4>
                        <div className="text">Lorem ipsum, or lipsum as some known, is dummy used</div>
                        <a href="service-detail.html" className="view">View Subject</a>
                      </div>
                    </div>
                  </div>
                  {/* Business Block */}
                  <div className="business-block-two col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                      <div className="vector-icon" style={{ backgroundImage: 'url(assets/images/icons/vector-21.png)' }} />
                      <div className="content">
                        <div className="icon-box">
                          <span className="icon flaticon-bulb" />
                        </div>
                        <h4><a href="service-detail.html">Content Marketing</a></h4>
                        <div className="text">Lorem ipsum, or lipsum as some known, is dummy used</div>
                        <a href="service-detail.html" className="view">View Subject</a>
                      </div>
                    </div>
                  </div>
                  {/* Business Block */}
                  <div className="business-block-two col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box wow fadeInRight" data-wow-delay="150ms" data-wow-duration="1500ms">
                      <div className="vector-icon" style={{ backgroundImage: 'url(assets/images/icons/vector-21.png)' }} />
                      <div className="content">
                        <div className="icon-box">
                          <span className="icon flaticon-learning-support" />
                        </div>
                        <h4><a href="service-detail.html">Email Marketing</a></h4>
                        <div className="text">Lorem ipsum, or lipsum as some known, is dummy used</div>
                        <a href="service-detail.html" className="view">View Subject</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Agency Section */}
    </>
  );
}