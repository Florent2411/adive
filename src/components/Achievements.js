import React from "react";

export default function Achievements(props) {

  return (
    <>
      {/* Reward Section */}
      <section className="reward-section" style={{ backgroundImage: 'url(assets/images/background/pattern-16.png)' }}>
        <div className="color-layer" />
        <div className="auto-container">
          <div className="row clearfix">
            {/* Content Column */}
            <div className="content-column col-lg-7 col-md-12 col-sm-12">
              <div className="inner-column">
                {/* Sec Title */}
                <div className="sec-title">
                  <div className="title style-two">Our Achievment</div>
                  <h2>We Acheived <span>Success</span> <br /> Awards &amp; Reward</h2>
                </div>
                {/* Award Box */}
                <div className="award-box">
                  <div className="box-inner">
                    <span className="icon flaticon-award" />
                    <h5>outsourced digital awards </h5>
                    <div className="text">Digital Marketing Service is the name of a kind of magic to boost up your business number of your customers and generate sales.</div>
                  </div>
                </div>
                {/* End Award Box */}
                {/* Revenue Box */}
                <div className="revenue-box">
                  <div className="box-inner">
                    <ul>
                      <li><span className="title">Sessions</span> <i className="info">759k     2m</i> <span className="arrow"><img src="assets/images/icons/arrow.png" alt /></span> <span className="total">183%</span></li>
                      <li><span className="title">Revenue</span> <i className="info">759k     2m</i> <span className="arrow"><img src="assets/images/icons/arrow-1.png" alt /></span> <span className="total">270%</span></li>
                      <li><span className="title">Investment</span> <i className="info">$1m     $4m</i> <span className="arrow"><img src="assets/images/icons/arrow.png" alt /></span> <span className="total">-28%</span></li>
                    </ul>
                  </div>
                </div>
                {/* End Revenue Box */}
              </div>
            </div>
            {/* Years Column */}
            <div className="years-column col-lg-5 col-md-12 col-sm-12">
              <div className="inner-column">
                {/* Year Block */}
                <div className="year-block">
                  <div className="block-inner wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <span className="icon flaticon-group" />
                    <h3>( 2017 - 2018 )</h3>
                  </div>
                </div>
                {/* Year Block */}
                <div className="year-block">
                  <div className="block-inner wow fadeInUp" data-wow-delay="150ms" data-wow-duration="1500ms">
                    <span className="icon flaticon-bar-chart" />
                    <h3>( 2018 - 2020 )</h3>
                  </div>
                </div>
                {/* Year Block */}
                <div className="year-block">
                  <div className="block-inner wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <span className="icon flaticon-social-reach" />
                    <h3>( 2021 - 2022 )</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Reward Section */}
    </>
  );
}