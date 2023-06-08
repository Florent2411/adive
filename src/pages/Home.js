import React from "react";
import Loader from "../components/Loader";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import About from "../components/About";
import Agency from "../components/Agency";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";
import News from "../components/News";
import Team from "../components/Team";
import Achievements from "../components/Achievements";
import Projects from "../components/Projects";
import Process from "../components/Process";

export default function Home(props) {

  return (
    <>
      <div>
        <div className="page-wrapper">
          <Loader />
          <Header />
          <Sidebar />
          <About />
          <section className="featured-section" style={{ backgroundImage: 'url(assets/images/background/pattern-10.png)' }}>
            <div className="auto-container">
              <div className="row clearfix">
                {/* Feature Block */}
                <div className="feature-block col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <span className="number">01</span>
                    <span className="icon flaticon-megaphone-1" />
                    <h4><a href="#">Esprit de Créativité</a></h4>
                    <div className="text">L'esprit de créativité est au cœur de notre agence. Nous embrassons l'audace,
                      l'innovation et la pensée imaginative pour repousser les limites de ce qui est possible</div>
                  </div>
                </div>
                {/* Feature Block */}
                <div className="feature-block col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box wow fadeInLeft" data-wow-delay="150ms" data-wow-duration="1500ms">
                    <span className="number">02</span>
                    <span className="icon flaticon-reload" />
                    <h4><a href="#">Esprit d'Innovation</a></h4>
                    <div className="text">Nous sommes constamment à la recherche de nouvelles idées, de solutions novatrices
                      et de technologies émergentes pour rester en tête de la vague numérique </div>
                  </div>
                </div>
                {/* Feature Block */}
                <div className="feature-block col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <span className="number">03</span>
                    <span className="icon flaticon-megaphone-1" />
                    <h4><a href="#">Esprit de Professionnalisme</a></h4>
                    <div className="text">Notre esprit de professionnalisme est la clé de notre succès. Nous nous engageons à fournir
                      un service de haute qualité, à respecter les délais et à atteindre les objectifs fixés</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <Agency /> */}
          <Services />
          <Process/>
          <Projects />
          <Achievements />
          <Team/>
          <News />
          {/* <Sponsors /> */}

          {/* Support Section */}
          <section className="support-section">
            <div className="auto-container">
              <div className="inner-container">
                <div className="row clearfix">
                  <div className="social-column col-lg-4 col-md-12 col-sm-12">
                    <div className="inner-column">
                      <h3>Follow Us:</h3>
                      <ul className="social-box">
                        <li><a href="https://www.facebook.com/" className="fa fa-facebook-f" /></li>
                        <li><a href="https://www.twitter.com/" className="fa fa-twitter" /></li>
                        <li><a href="https://dribbble.com/" className="fa fa-dribbble" /></li>
                        <li><a href="https://www.linkedin.com/" className="fa fa-linkedin" /></li>
                      </ul>
                    </div>
                  </div>
                  <div className="content-column col-lg-8 col-md-12 col-sm-12">
                    <div className="inner-column" style={{ backgroundImage: 'url(assets/images/background/pattern-12.png)' }}>
                      <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/background/pattern-13.png)' }} />
                      <div className="play-box">
                        <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-image play-button"><span className="flaticon-media-play-symbol"><i className="ripple" /></span></a>
                      </div>
                      <div className="phone"><span className="icon fa fa-phone" />(226) xx-xx-xx-xx</div>
                      <h2>Besoin de notre soutien ?</h2>
                      <div className="text">N'attendez pas, faites un devis intelligent et logique ici. C'est assez facile.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> 
          {/* End Support Section */}

          <Footer />
          {/* Search Popup */}
          <div className="search-popup">
            <button className="close-search style-two"><span className="flaticon-cancel-1" /></button>
            <button className="close-search"><span className="flaticon-up-arrow" /></button>
            <form method="post" action="blog.html">
              <div className="form-group">
                <input type="search" name="search-field" defaultValue placeholder="Search Here" required />
                <button type="submit"><i className="fa fa-search" /></button>
              </div>
            </form>
          </div>
          {/* End Header Search */}
        </div>
        {/* End PageWrapper */}

        
        {/* Scroll To Top */}
        <div className="scroll-to-top scroll-to-target" data-target="html"><span className="fa fa-arrow-up" /></div>
      </div>
    </>
  );
}
