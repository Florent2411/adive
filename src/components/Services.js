import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import CountUp from 'react-countup';

export default function Services(props) {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      {/* Services Section Two */}
      <section className="services-section-two">
        <div className="color-layer" />
        <div className="auto-container">
          <div className="inner-container">
            {/* Services Info Tabs */}
            <div className="services-info-tabs">
              {/* Services Tabs */}
              <div className="services-tabs tabs-box">
                {/* Tab Btns */}
                <ul className="tab-btns tab-buttons clearfix">
                  <li className="tab-btn active-btn" onClick={() => handleTabClick('tab1')}>Mise en rélation emploi</li>
                  <li className="tab-btn" onClick={() => handleTabClick('tab2')}>Formation professionnelle</li>
                  <li className="tab-btn">Livraison</li>
                  <li className="tab-btn">Prospection commerciale</li>
                  <li className="tab-btn">Stratégie de marketing digital</li>
                  <li className="tab-btn">Rédaction de contenu web et Conception graphique</li>
                  <li className="tab-btn"> Vente en ligne</li>
                  <li className="tab-btn">Conception de site internet</li>
                </ul>
                {/* Tabs Container */}
                <div className="tabs-content">
                  {/* Tab / Active Tab */}
                  <div className={activeTab === 'tab1' ? 'tab active-tab' : 'tab'} id="prod-analysis">
                    <div className="content">
                      {/* Sec Title */}
                      <div className="sec-title">
                        <div className="title style-two">Mise en rélation emploi</div>
                        <h2>Comment <span>ça marche</span> concrètement </h2>
                        <div className="text">“Trouvez les talents qualifiés pour votre entreprise grâce à notre plateforme de mise en relation emploi. Simplifiez votre processus de recrutement et faites progresser votre équipe avec des candidats talentueux.
                          Rejoignez-nous dès maintenant pour trouver les profils parfaits et faire prospérer votre entreprise.”</div>
                      </div>
                      {/* Skills / Style Two */}
                      <div className="skills style-two">
                        {/* Skill Item */}
                        <div className="skill-item">
                          <div className="skill-header clearfix">
                            <div className="skill-title">Digital Strategy</div>
                          </div>
                          <div className="skill-bar">
                            <div className="bar-inner">
                              <div className="skill-percentage">
                                <div className="count-box"><span className="count-text" data-speed={2000} data-stop={65}>0</span>%</div>
                              </div>
                              <div className="bar progress-line" data-width={65} />
                            </div>
                          </div>
                        </div>
                        {/* Skill Item */}
                        <div className="skill-item">
                          <div className="skill-header clearfix">
                            <div className="skill-title">Financial Services</div>
                          </div>
                          <div className="skill-bar">
                            <div className="bar-inner">
                              <div className="skill-percentage">
                                <div className="count-box"><span className="count-text" data-speed={2000} data-stop={81}>0</span>%</div>
                              </div>
                              <div className="bar progress-line" data-width={81} />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Fact Counter Two */}
                      <div className="fact-counter-two">
                        <div className="row clearfix">
                          {/* Column */}
                          <div className="counter-column col-lg-4 col-md-6 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                              <div className="image-layer" style={{ backgroundImage: 'url(assets/images/icons/vector-26.png)' }} />
                              <div className="content">
                                <span className="icon flaticon-group" />
                                <div className="count-outer count-box">
                                  <CountUp end={100} duration={5} />%
                                </div>
                                <h5>Taux de placement élevé</h5>
                              </div>
                            </div>
                          </div>
                          {/* Column */}
                          <div className="counter-column col-lg-4 col-md-6 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-delay="150ms" data-wow-duration="1500ms">
                              <div className="image-layer" style={{ backgroundImage: 'url(assets/images/icons/vector-26.png)' }} />
                              <div className="content">
                                <span className="icon flaticon-notepad" />
                                <div className="count-outer count-box">
                                  <CountUp end={98} duration={5} />%
                                </div>
                                <h5>Satisfaction des employeurs </h5>
                              </div>
                            </div>
                          </div>
                          {/* Column */}
                          <div className="counter-column col-lg-4 col-md-6 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                              <div className="image-layer" style={{ backgroundImage: 'url(assets/images/icons/vector-26.png)' }} />
                              <div className="content">
                                <span className="icon flaticon-user-1" />
                                <div className="count-outer count-box">
                                  <CountUp end={95} duration={5} />%
                                </div>
                                <h5>Taux de correspondance </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Tab */}
                  <div className={activeTab === 'tab2' ? 'tab active-tab' : 'tab'} id="prod-result">
                    <div className="content">
                      {/* Sec Title */}
                      <div className="sec-title">
                        <div className="title style-two">Service Details000</div>
                        <h2>How <span>Analytics</span> Helping <br /> Face Challenges</h2>
                        <div className="text">“Analysis of the current business model, assessment of the company’s compet itiveness and market position, financial condition, as well as all possible risks and their minimization in the medium and long-term prospects.”</div>
                      </div>
                      {/* Skills / Style Two */}
                      <div className="skills style-two">
                        {/* Skill Item */}
                        <div className="skill-item">
                          <div className="skill-header clearfix">
                            <div className="skill-title">Digital Strategy</div>
                          </div>
                          <div className="skill-bar">
                            <div className="bar-inner">
                              <div className="skill-percentage">
                                <div className="count-box"><span className="count-text" data-speed={2000} data-stop={65}>0</span>%</div>
                              </div>
                              <div className="bar progress-line" data-width={65} />
                            </div>
                          </div>
                        </div>
                        {/* Skill Item */}
                        <div className="skill-item">
                          <div className="skill-header clearfix">
                            <div className="skill-title">Financial Services</div>
                          </div>
                          <div className="skill-bar">
                            <div className="bar-inner">
                              <div className="skill-percentage">
                                <div className="count-box"><span className="count-text" data-speed={2000} data-stop={81}>0</span>%</div>
                              </div>
                              <div className="bar progress-line" data-width={81} />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Fact Counter Two */}
                      <div className="fact-counter-two">
                        <div className="row clearfix">
                          {/* Column */}
                          <div className="counter-column col-lg-4 col-md-6 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                              <div className="content">
                                <span className="icon flaticon-group" />
                                <div className="count-outer count-box">
                                  <span className="count-text" data-speed={4000} data-stop={320}>0</span>m
                                </div>
                                <h5>Audience reach</h5>
                              </div>
                            </div>
                          </div>
                          {/* Column */}
                          <div className="counter-column col-lg-4 col-md-6 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-delay="150ms" data-wow-duration="1500ms">
                              <div className="content">
                                <span className="icon flaticon-notepad" />
                                <div className="count-outer count-box">
                                  <span className="count-text" data-speed={5500} data-stop={980}>0</span>+
                                </div>
                                <h5>Success Projects</h5>
                              </div>
                            </div>
                          </div>
                          {/* Column */}
                          <div className="counter-column col-lg-4 col-md-6 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                              <div className="content">
                                <span className="icon flaticon-user-1" />
                                <div className="count-outer count-box">
                                  <span className="count-text" data-speed={3500} data-stop={1278}>0</span>
                                </div>
                                <h5>Employee World</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Tab */}
                  <div className="tab" id="prod-analytics">
                    <div className="content">
                      {/* Sec Title */}
                      <div className="sec-title">
                        <div className="title style-two">Service Details</div>
                        <h2>How <span>Analytics</span> Helping <br /> Face Challenges</h2>
                        <div className="text">“Analysis of the current business model, assessment of the company’s compet itiveness and market position, financial condition, as well as all possible risks and their minimization in the medium and long-term prospects.”</div>
                      </div>
                      {/* Skills / Style Two */}
                      <div className="skills style-two">
                        {/* Skill Item */}
                        <div className="skill-item">
                          <div className="skill-header clearfix">
                            <div className="skill-title">Digital Strategy</div>
                          </div>
                          <div className="skill-bar">
                            <div className="bar-inner">
                              <div className="skill-percentage">
                                <div className="count-box"><span className="count-text" data-speed={2000} data-stop={65}>0</span>%</div>
                              </div>
                              <div className="bar progress-line" data-width={65} />
                            </div>
                          </div>
                        </div>
                        {/* Skill Item */}
                        <div className="skill-item">
                          <div className="skill-header clearfix">
                            <div className="skill-title">Financial Services</div>
                          </div>
                          <div className="skill-bar">
                            <div className="bar-inner">
                              <div className="skill-percentage">
                                <div className="count-box"><span className="count-text" data-speed={2000} data-stop={81}>0</span>%</div>
                              </div>
                              <div className="bar progress-line" data-width={81} />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Fact Counter Two */}
                      <div className="fact-counter-two">
                        <div className="row clearfix">
                          {/* Column */}
                          <div className="counter-column col-lg-4 col-md-6 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                              <div className="content">
                                <span className="icon flaticon-group" />
                                <div className="count-outer count-box">
                                  <span className="count-text" data-speed={4000} data-stop={320}>0</span>m
                                </div>
                                <h5>Audience reach</h5>
                              </div>
                            </div>
                          </div>
                          {/* Column */}
                          <div className="counter-column col-lg-4 col-md-6 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-delay="150ms" data-wow-duration="1500ms">
                              <div className="content">
                                <span className="icon flaticon-notepad" />
                                <div className="count-outer count-box">
                                  <span className="count-text" data-speed={5500} data-stop={980}>0</span>+
                                </div>
                                <h5>Success Projects</h5>
                              </div>
                            </div>
                          </div>
                          {/* Column */}
                          <div className="counter-column col-lg-4 col-md-6 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                              <div className="content">
                                <span className="icon flaticon-user-1" />
                                <div className="count-outer count-box">
                                  <span className="count-text" data-speed={3500} data-stop={1278}>0</span>
                                </div>
                                <h5>Employee World</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Tab */}
                  <div className="tab" id="prod-strategy">
                    <div className="content">
                      {/* Sec Title */}
                      <div className="sec-title">
                        <div className="title style-two">Service Details</div>
                        <h2>How <span>Analytics</span> Helping <br /> Face Challenges</h2>
                        <div className="text">“Analysis of the current business model, assessment of the company’s compet itiveness and market position, financial condition, as well as all possible risks and their minimization in the medium and long-term prospects.”</div>
                      </div>
                      {/* Skills / Style Two */}
                      <div className="skills style-two">
                        {/* Skill Item */}
                        <div className="skill-item">
                          <div className="skill-header clearfix">
                            <div className="skill-title">Digital Strategy</div>
                          </div>
                          <div className="skill-bar">
                            <div className="bar-inner">
                              <div className="skill-percentage">
                                <div className="count-box"><span className="count-text" data-speed={2000} data-stop={65}>0</span>%</div>
                              </div>
                              <div className="bar progress-line" data-width={65} />
                            </div>
                          </div>
                        </div>
                        {/* Skill Item */}
                        <div className="skill-item">
                          <div className="skill-header clearfix">
                            <div className="skill-title">Financial Services</div>
                          </div>
                          <div className="skill-bar">
                            <div className="bar-inner">
                              <div className="skill-percentage">
                                <div className="count-box"><span className="count-text" data-speed={2000} data-stop={81}>0</span>%</div>
                              </div>
                              <div className="bar progress-line" data-width={81} />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Fact Counter Two */}
                      <div className="fact-counter-two">
                        <div className="row clearfix">
                          {/* Column */}
                          <div className="counter-column col-lg-4 col-md-6 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                              <div className="content">
                                <span className="icon flaticon-group" />
                                <div className="count-outer count-box">
                                  <span className="count-text" data-speed={4000} data-stop={320}>0</span>m
                                </div>
                                <h5>Audience reach</h5>
                              </div>
                            </div>
                          </div>
                          {/* Column */}
                          <div className="counter-column col-lg-4 col-md-6 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-delay="150ms" data-wow-duration="1500ms">
                              <div className="content">
                                <span className="icon flaticon-notepad" />
                                <div className="count-outer count-box">
                                  <span className="count-text" data-speed={5500} data-stop={980}>0</span>+
                                </div>
                                <h5>Success Projects</h5>
                              </div>
                            </div>
                          </div>
                          {/* Column */}
                          <div className="counter-column col-lg-4 col-md-6 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                              <div className="content">
                                <span className="icon flaticon-user-1" />
                                <div className="count-outer count-box">
                                  <span className="count-text" data-speed={3500} data-stop={1278}>0</span>
                                </div>
                                <h5>Employee World</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Tab */}
                  <div className="tab" id="prod-reporting">
                    <div className="content">
                      {/* Sec Title */}
                      <div className="sec-title">
                        <div className="title style-two">Service Details</div>
                        <h2>How <span>Analytics</span> Helping <br /> Face Challenges</h2>
                        <div className="text">“Analysis of the current business model, assessment of the company’s compet itiveness and market position, financial condition, as well as all possible risks and their minimization in the medium and long-term prospects.”</div>
                      </div>
                      {/* Skills / Style Two */}
                      <div className="skills style-two">
                        {/* Skill Item */}
                        <div className="skill-item">
                          <div className="skill-header clearfix">
                            <div className="skill-title">Digital Strategy</div>
                          </div>
                          <div className="skill-bar">
                            <div className="bar-inner">
                              <div className="skill-percentage">
                                <div className="count-box"><span className="count-text" data-speed={2000} data-stop={65}>0</span>%</div>
                              </div>
                              <div className="bar progress-line" data-width={65} />
                            </div>
                          </div>
                        </div>
                        {/* Skill Item */}
                        <div className="skill-item">
                          <div className="skill-header clearfix">
                            <div className="skill-title">Financial Services</div>
                          </div>
                          <div className="skill-bar">
                            <div className="bar-inner">
                              <div className="skill-percentage">
                                <div className="count-box"><span className="count-text" data-speed={2000} data-stop={81}>0</span>%</div>
                              </div>
                              <div className="bar progress-line" data-width={81} />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Fact Counter Two */}
                      <div className="fact-counter-two">
                        <div className="row clearfix">
                          {/* Column */}
                          <div className="counter-column col-lg-4 col-md-6 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                              <div className="content">
                                <span className="icon flaticon-group" />
                                <div className="count-outer count-box">
                                  <span className="count-text" data-speed={4000} data-stop={320}>0</span>m
                                </div>
                                <h5>Audience reach</h5>
                              </div>
                            </div>
                          </div>
                          {/* Column */}
                          <div className="counter-column col-lg-4 col-md-6 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-delay="150ms" data-wow-duration="1500ms">
                              <div className="content">
                                <span className="icon flaticon-notepad" />
                                <div className="count-outer count-box">
                                  <span className="count-text" data-speed={5500} data-stop={980}>0</span>+
                                </div>
                                <h5>Success Projects</h5>
                              </div>
                            </div>
                          </div>
                          {/* Column */}
                          <div className="counter-column col-lg-4 col-md-6 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                              <div className="content">
                                <span className="icon flaticon-user-1" />
                                <div className="count-outer count-box">
                                  <span className="count-text" data-speed={3500} data-stop={1278}>0</span>
                                </div>
                                <h5>Employee World</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Tab */}
                  <div className="tab" id="prod-maps">
                    <div className="content">
                      {/* Sec Title */}
                      <div className="sec-title">
                        <div className="title style-two">Service Details</div>
                        <h2>How <span>Analytics</span> Helping <br /> Face Challenges</h2>
                        <div className="text">“Analysis of the current business model, assessment of the company’s compet itiveness and market position, financial condition, as well as all possible risks and their minimization in the medium and long-term prospects.”</div>
                      </div>
                      {/* Skills / Style Two */}
                      <div className="skills style-two">
                        {/* Skill Item */}
                        <div className="skill-item">
                          <div className="skill-header clearfix">
                            <div className="skill-title">Digital Strategy</div>
                          </div>
                          <div className="skill-bar">
                            <div className="bar-inner">
                              <div className="skill-percentage">
                                <div className="count-box"><span className="count-text" data-speed={2000} data-stop={65}>0</span>%</div>
                              </div>
                              <div className="bar progress-line" data-width={65} />
                            </div>
                          </div>
                        </div>
                        {/* Skill Item */}
                        <div className="skill-item">
                          <div className="skill-header clearfix">
                            <div className="skill-title">Financial Services</div>
                          </div>
                          <div className="skill-bar">
                            <div className="bar-inner">
                              <div className="skill-percentage">
                                <div className="count-box"><span className="count-text" data-speed={2000} data-stop={81}>0</span>%</div>
                              </div>
                              <div className="bar progress-line" data-width={81} />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Fact Counter Two */}
                      <div className="fact-counter-two">
                        <div className="row clearfix">
                          {/* Column */}
                          <div className="counter-column col-lg-4 col-md-6 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                              <div className="content">
                                <span className="icon flaticon-group" />
                                <div className="count-outer count-box">
                                  <span className="count-text" data-speed={4000} data-stop={320}>0</span>m
                                </div>
                                <h5>Audience reach</h5>
                              </div>
                            </div>
                          </div>
                          {/* Column */}
                          <div className="counter-column col-lg-4 col-md-6 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-delay="150ms" data-wow-duration="1500ms">
                              <div className="content">
                                <span className="icon flaticon-notepad" />
                                <div className="count-outer count-box">
                                  <span className="count-text" data-speed={5500} data-stop={980}>0</span>+
                                </div>
                                <h5>Success Projects</h5>
                              </div>
                            </div>
                          </div>
                          {/* Column */}
                          <div className="counter-column col-lg-4 col-md-6 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                              <div className="content">
                                <span className="icon flaticon-user-1" />
                                <div className="count-outer count-box">
                                  <span className="count-text" data-speed={3500} data-stop={1278}>0</span>
                                </div>
                                <h5>Employee World</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Services Section Two */}
    </>
  );
}