import React, { useState } from "react";
import CountUp from 'react-countup';

export default function HomePage(props) {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="as-hero-wrapper hero-4">
        <div className="hero-slider-4
          as-carousel" data-fade="true" data-slide-show={1} data-md-slide-show={1}>
          <div className="as-hero-slide">
            <div className="as-hero-bg" data-bg-src="assets/img/hero/hero_bg_4_1.jpg" style={{ backgroundImage: 'url(assets/img/hero/hero_bg_4_1.jpg)' }} />
            <div className="container z-index-common">
              <div className="hero-style4"><span className="hero-subtitle" data-ani="slideinleft" data-ani-delay="0.0s">Bienvenue sur la plateforme ADIVE</span>
                <h1 className="hero-title" data-ani="slideinleft" data-ani-delay="0.1s">Agence du DIgital &amp;</h1>
                <h1 className="hero-title" data-ani="slideinleft" data-ani-delay="0.2s">
                  <span className="gr-text">de la VEnte</span>
                </h1>
                <p className="hero-text" data-ani="slideinleft" data-ani-delay="0.3s">Votre destination de choix pour tout ce qui concerne
                  le digital et la vente ! Chez nous, nous sommes une agence passionnée et créative, prête à vous accompagner dans votre
                  parcours numérique et à vous aider à développer votre entreprise en ligne.</p>
                <div className="btn-group" data-ani="slideinleft" data-ani-delay="0.4s"><a href="/services" className="as-btn gr-btn">Nos
                  Services</a> <a href="/contact" className="as-btn style2">Contactez-Nous</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className>
        <div className="row gx-0 justify-content-center">
          <div className="col-xxl-4 col-md-8 feature-card-wrap">
            <div className="feature-card" data-bg-src="assets/img/bg/feature_card_bg.jpg">
              <div className="feature-card_icon"><img src="assets/img/icon/feature_1_1.svg" alt="icon" /></div>
              <h3 className="feature-card_title">Esprit de Créativité</h3>
              <p className="feature-card_text">L'esprit de créativité est au cœur de notre agence. Nous embrassons l'audace,
                l'innovation et la pensée imaginative pour repousser les limites de ce qui est possible.</p>
            </div>
          </div>
          <div className="col-xxl-4 col-md-8 feature-card-wrap">
            <div className="feature-card" data-bg-src="assets/img/bg/feature_card_bg.jpg">
              <div className="feature-card_icon"><img src="assets/img/icon/feature_1_2.svg" alt="icon" /></div>
              <h3 className="feature-card_title">Esprit d'Innovation</h3>
              <p className="feature-card_text">Nous sommes constamment à la recherche de nouvelles idées, de solutions novatrices
                et de technologies émergentes pour rester en tête de la vague numérique.</p>
            </div>
          </div>
          <div className="col-xxl-4 col-md-8 feature-card-wrap">
            <div className="feature-card" data-bg-src="assets/img/bg/feature_card_bg.jpg">
              <div className="feature-card_icon"><img src="assets/img/icon/feature_1_3.svg" alt="icon" /></div>
              <h3 className="feature-card_title">Esprit de Professionnalisme</h3>
              <p className="feature-card_text">Notre esprit de professionnalisme est la clé de notre succès. Nous nous engageons à fournir
                un service de haute qualité, à respecter les délais et à atteindre les objectifs fixés.</p>
            </div>
          </div>
        </div>
      </section>


      <div className="space bg-top-right" style={{ backgroundImage: "url(/assets/img/bg/about_bg_2.png)" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 mb-xl-0
                  mb-40">
              <div className="img-box6">
                <div className="img1"><img src="/assets/img/normal/about_4_1.png" alt="About" /></div>
                <div className="img2"><img src="/assets/img/normal/about_4_2.png" alt="About" /></div>
                <div className="shape1"><img src="/assets/img/normal/about_shape_4_1.png" alt="About" /></div>
                <div className="shape2"><img src="/assets/img/normal/about_shape_4_2.png" alt="About" /></div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-10">
              <div className="ps-xl-4 ms-xl-4">
                <div className="title-area mb-30"><span className="sub-title2"><img src="assets/img/shape/subtitle.svg" alt="Icon" /> A Propos De Nous</span>
                  <h2 className="sec-title">Nous sommes une agence numérique</h2>
                </div>
                <p className="mt-n2 mb-4">En tant qu'agence spécialisée dans le digital et la vente, nous proposons une gamme complète de
                  services visant à aider les entreprises à prospérer dans le monde en ligne et à optimiser leurs activités de vente.</p>
                <div className="list-column2">
                  <div className="ticklist">
                    <ul>
                      <li>Digitalisation</li>
                    </ul>
                  </div>
                  <div className="ticklist">
                    <ul>
                      <li>Vente</li>
                    </ul>
                  </div>
                </div>
                <div className="about-grid-wrap">
                  <div className="about-grid">
                    <h3 className="about-grid_year">+<CountUp end={5} duration={10} /></h3><span className="about-grid_text">Ans<br />Experience</span>
                  </div>
                  <div className="about-grid">
                    <div className="about-grid_icon">
                      <div className="gr-icon"><img src="assets/img/icon/message.svg" alt="icon" /></div>
                    </div>
                    <div className="media-body">
                      <h4 className="about-grid_title">Vous avez des questions ? Cliquez sur le lien ci-dessous</h4><span className="about-grid_link"><i className="far fa-hand-point-right me-2" />
                        <a href="#" className="gr-link">FAQ’S</a></span>
                    </div>
                  </div>
                </div><a href="/about" className="as-btn gr-btn">Savoir Plus</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="cta-sec" style={{ backgroundImage: "url(assets/img/bg/cta_bg_5.jpg)" }}>
        <div className="container">
          <div className="row gy-40 align-items-center
              justify-content-between">
            <div className="col-lg-6">
              <h2 className="sec-title text-white mb-10">You Need Our
                support?</h2>
              <p className="text-white mb-n2">Perfect
                Solution For Your Company.Conveniently grow
                long-term.</p>
            </div>
            <div className="col-lg-auto"><a href="tel:+19524357106" className="call-btn">
              <div className="play-btn style4"><i className="fas fa-phone" /></div>
              <div className="btn-content"><span className="btn-text
                              text-white">Contactez-Nous  </span> <span className="box-title gr-text">+(226) 70-96-64-07</span>
              </div>
            </a></div>
            <div className="col-lg-auto"><a href="/contact" className="as-btn
                      gr-btn">Contact</a></div>
          </div>
        </div>
      </section>


      <div className="space">
        <div className="container z-index-common">
          <div className="row gy-40 justify-content-between">
            <div className="col-sm-6 col-xl-auto">
              <div className="counter-card">
                <div className="counter-card_icon style2"><i className="fa-thin fa-file-check" /></div>
                <div className="media-body">
                  <h2 className="counter-card_number text-title">+<CountUp end={100} duration={5} /></h2>
                  <p className="counter-card_text text-body">Partenaires Actifs</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-auto">
              <div className="counter-card">
                <div className="counter-card_icon style2"><i className="fa-thin fa-shield-check" /></div>
                <div className="media-body">
                  <h2 className="counter-card_number text-title">+<CountUp end={500} duration={5} /></h2>
                  <p className="counter-card_text text-body">Clients Actifs</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-auto">
              <div className="counter-card">
                <div className="counter-card_icon style2"><i className="fa-thin fa-mug-hot" /></div>
                <div className="media-body">
                  <h2 className="counter-card_number text-title">+<CountUp end={95} duration={5} />%</h2>
                  <p className="counter-card_text text-body">Clients Satisfaits</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-auto">
              <div className="counter-card">
                <div className="counter-card_icon style2"><i className="fa-thin fa-face-smile" /></div>
                <div className="media-body">
                  <h2 className="counter-card_number text-title">+<CountUp end={1000} duration={5} /></h2>
                  <p className="counter-card_text text-body">Témoignages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div>
        <div className data-pos-for=".process-sec" data-sec-pos="bottom-half">
          <div className="container">
            <div className="video-box4" data-overlay="overlay1" data-opacity={5}><img src="assets/img/normal/video_5.jpg" alt="video" /> <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" className="play-btn style5 popup-video"><i className="fas
                          fa-play" /></a>
              <div className="video-content">
                <h2 className="h4 mb-10">Watch Our Company Activities</h2><a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" className="gr-link popup-video">Get
                  Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space" style={{ backgroundImage: "url(assets/img/bg/testi_bg_3.png)" }}>
        <div className="container">
          <div className="row
              justify-content-between">
            <div className="col-xl-auto
                  text-xl-start text-center">
              <div className="custom-box1">
                <div className="title-area mb-30"><span className="sub-title2"><img src="assets/img/shape/subtitle.svg" alt="Icon" /> En savoir plus sur nous</span>
                  <h2 className="sec-title">Agence Digitale Qualité & Expérience</h2>
                </div>
                <p className="mt-n2 mb-30">Nous sommes une entreprise spécialisée dans la fourniture de services liés à la transformation digitale et à l'optimisation des stratégies de vente en ligne. </p>
                <div className="rounded-10"><img className="w-100" src="assets/img/normal/about_5_1.jpg" alt="about" />
                </div>
              </div>
            </div>
            <div className="col-xl-auto mt-5 mt-xl-0">
              <div className="custom-box2">
                <div className="tab-menu3 filter-menu-active">
                  <button onClick={() => handleTabClick('tab1')} className={activeTab === 'tab1' ? 'active' : ''} type="button">Mission</button>
                  <button onClick={() => handleTabClick('tab2')} className={activeTab === 'tab2' ? 'active' : ''} type="button">Vision</button>
                  <button onClick={() => handleTabClick('tab3')} className={activeTab === 'tab3' ? 'active' : ''} type="button">Histoire</button>
                  <button onClick={() => handleTabClick('tab4')} className={activeTab === 'tab4' ? 'active' : ''} type="button">Valeurs</button>
                </div>
                <div className="filter-active-cat1">
                  {
                    activeTab === 'tab1' &&
                    <div className="filter-item w-100 cat1">
                      <h3 className="h4 mb-20">Notre Mission</h3>
                      <p className="mb-30">Energistically
                        deploy frictionless catalysts for change
                        vis-a-vis ubiquitous benefits.
                        Phosfluorescently disintermediate 24/365
                        benefits whereas resource maximizing
                        manufactured products. Compellingly
                        communicate user-centric relationships
                        without goal-oriented interfaces.</p>
                      <div className="mission-list">
                        <div className="rounded-10"><img src="assets/img/normal/mission_1.jpg" alt="Mission" />
                        </div>
                        <div className="ticklist">
                          <ul>
                            <li>Powerful
                              software &amp; tools</li>
                            <li>Financial
                              Growth</li>
                            <li>Dedicated
                              Team member</li>
                            <li>Maecenas
                              consectetur</li>
                            <li>We drink
                              our own kool-aid</li>
                            <li>In
                              hac habitasse dictumst</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  }
                  {
                    activeTab === 'tab2' &&
                    <div className="filter-item w-100 cat2">
                      <h3 className="h4 mb-20">Notre Vision</h3>
                      <p className="mb-30">Energistically
                        deploy frictionless catalysts for change
                        vis-a-vis ubiquitous benefits.
                        Phosfluorescently disintermediate 24/365
                        benefits whereas resource maximizing
                        manufactured products. Compellingly
                        communicate user-centric relationships
                        without goal-oriented interfaces.</p>
                      <div className="mission-list">
                        <div className="rounded-10"><img src="assets/img/normal/mission_2.jpg" alt="Mission" />
                        </div>
                        <div className="ticklist">
                          <ul>
                            <li>Powerful
                              software &amp; tools</li>
                            <li>Financial
                              Growth</li>
                            <li>Dedicated
                              Team member</li>
                            <li>Maecenas
                              consectetur</li>
                            <li>We drink
                              our own kool-aid</li>
                            <li>In
                              hac habitasse dictumst</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  }
                  {
                    activeTab === 'tab3' &&
                    <div className="filter-item w-100 cat3">
                      <h3 className="h4
                                  mb-20">Notre Histoire</h3>
                      <p className="mb-30">Energistically
                        deploy frictionless catalysts for change
                        vis-a-vis ubiquitous benefits.
                        Phosfluorescently disintermediate 24/365
                        benefits whereas resource maximizing
                        manufactured products. Compellingly
                        communicate user-centric relationships
                        without goal-oriented interfaces.</p>
                      <div className="mission-list">
                        <div className="rounded-10"><img src="assets/img/normal/mission_3.jpg" alt="Mission" /></div>
                        <div className="ticklist">
                          <ul>
                            <li>Powerful
                              software &amp; tools</li>
                            <li>Financial
                              Growth</li>
                            <li>Dedicated
                              Team member</li>
                            <li>Maecenas
                              consectetur</li>
                            <li>We drink
                              our own kool-aid</li>
                            <li>In
                              hac habitasse dictumst</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  }
                  {
                    activeTab === 'tab4' &&
                    <div className="filter-item w-100 cat3">
                      <h3 className="h4
                                  mb-20">Nos Valeurs</h3>
                      <p className="mb-30">Energistically
                        deploy frictionless catalysts for change
                        vis-a-vis ubiquitous benefits.
                        Phosfluorescently disintermediate 24/365
                        benefits whereas resource maximizing
                        manufactured products. Compellingly
                        communicate user-centric relationships
                        without goal-oriented interfaces.</p>
                      <div className="mission-list">
                        <div className="rounded-10"><img src="assets/img/normal/mission_3.jpg" alt="Mission" /></div>
                        <div className="ticklist">
                          <ul>
                            <li>Powerful
                              software &amp; tools</li>
                            <li>Financial
                              Growth</li>
                            <li>Dedicated
                              Team member</li>
                            <li>Maecenas
                              consectetur</li>
                            <li>We drink
                              our own kool-aid</li>
                            <li>In
                              hac habitasse dictumst</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
