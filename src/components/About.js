import React from "react";
import CountUp from 'react-countup';

export default function About(props) {

    return (
        <>
            {/* About Section Two */}
            <section className="about-section-two">
                <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/background/pattern-11.png)' }} />
                <div className="pattern-layer-two" style={{ backgroundImage: 'url(assets/images/icons/vector-18.png)' }} />
                <div className="auto-container" style={{ marginTop: 100 }}>
                    <div className="row clearfix">
                        {/* Images Column */}
                        <div className="images-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column clearfix">
                                <div className="icon-one fas fa-signal" />
                                <div className="icon-two flaticon-man-bald-head-with-two-gears-inside" />
                                <div className="image wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <img src="assets/images/resource/about-5.jpg" alt />
                                </div>
                                <div className="image-two wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <img src="assets/images/resource/about-6.jpg" alt />
                                </div>
                                <div className="target-icon wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <img src="assets/images/icons/vector-17.png" alt />
                                </div>
                                {/* Video Box Three */}
                                <div className="video-box-three">
                                    <figure className="video-image">
                                        <img className="transition-500ms" src="assets/images/resource/about-7.jpg" alt />
                                    </figure>
                                    <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-image overlay-box"><span className="fas fa-play"><span className="dott" /><i className="ripple" /></span></a>
                                </div>
                            </div>
                        </div>
                        {/* Content Column */}
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                {/* Sec Title */}
                                <div className="sec-title">
                                    <div className="title style-two">Agence Digitale Adive</div>
                                    <h2>Meilleure Agence du <span>Marketing </span>Digitale <br /> </h2>
                                    <div className="text">ADIVE (Académie du Digital et de la Vente) est une entreprise de droit
                                        Burkinabè qui évolue dans le domaine du Digital, de la Formation
                                        professionnelle, des études et des recrutements.
                                    </div>
                                </div>
                                {/* Employe Box */}
                                <div className="employe-box">
                                    <div className="box-inner">
                                        <span className="globe-icon flaticon-earth-globe-with-continents-maps" />
                                        <ul className="list">
                                            <b>Nos Valeurs</b>
                                            <li>Esprit de Créativité</li>
                                            <li>Esprit d'Innovation</li>
                                            <li>Esprit de Professionnalisme</li>
                                        </ul>
                                        <div className="employe">
                                            <div className="count-outer count-box">
                                                <CountUp end={50} duration={5} /><sup>+</sup>
                                            </div>
                                            <div className="text">Formations</div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Employe Box */}
                                {/* Skills / Style Two */}
                                <div className="skills style-two">
                                    {/* Skill Item */}
                                    <div className="skill-item">
                                        <div className="skill-header clearfix">
                                            <div className="skill-title">Mise en rélation emploi</div>
                                        </div>
                                        <div className="skill-bar">
                                            <div className="bar-inner">
                                                <div className="skill-percentage">
                                                    <div className="count-box"><CountUp end={90} duration={5} />%</div>
                                                </div>
                                                <div className="bar progress-line" data-width={65} />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Skill Item */}
                                    <div className="skill-item">
                                        <div className="skill-header clearfix">
                                            <div className="skill-title">• Formation professionnelle</div>
                                        </div>
                                        <div className="skill-bar">
                                            <div className="bar-inner">
                                                <div className="skill-percentage">
                                                    <div className="count-box"><CountUp end={85} duration={5} />%</div>
                                                </div>
                                                <div line-progressbar data-percentage="85" data-progress-color="#1abc9c"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}