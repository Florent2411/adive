import React from "react";
import config from "../config";
import SubscribeNewsLetter from './SubscribeNewsLetter';
export default function Footer(props) {

    return (
        <>
            <div>
                <div
                    className=""
                    data-pos-for=".footer-wrapper"
                    data-sec-pos="bottom-half"
                    style={{ marginBottom: "-97px" }}
                ><div className="container">
                        <SubscribeNewsLetter titre={'Abonnez-vous à notre newsletter pour recevoir les dernières informations.'} />
                    </div>
                </div>
                <footer className="footer-wrapper footer-layout2" data-bg-src="/assets/img/bg/footer_bg_4.jpg" style={{ paddingTop: "97px" }}>
                    <div className="widget-area">
                        <div className="container">
                            <div className="row
                  justify-content-between">
                                <div className="col-md-6 col-xl-4">
                                    <div className="widget footer-widget">
                                        <h3 className="widget_title">A Propos De Nous</h3>
                                        <div className="as-widget-about">
                                            <p className="about-text">Nous sommes une agence passionnée et créative, prête à vous accompagner dans votre parcours numérique et à vous aider à développer votre entreprise en ligne.</p>
                                            <p className="footer-info style2"><i className="fas
                                      fa-location-dot" /> Ouagadougou, Burkina Faso</p>
                                            <p className="footer-info style2"><i className="fas
                                      fa-envelope" /> <a href={`mailto:${config.email}`} className="info-box_link">{config.email}</a></p>
                                            <p className="footer-info style2"><i className="fas
                                      fa-phone" /> <a href={`tel:${config.firstContact}`} className="info-box_link">{config.firstContact}</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-auto">
                                    <div className="widget widget_nav_menu footer-widget">
                                        <h3 className="widget_title">Liens Rapides</h3>
                                        <div className="menu-all-pages-container">
                                            <ul className="menu">
                                                <li><a href="/about">A Propos De Nous</a></li>
                                                <li><a href="/services">Services</a></li>
                                                <li><a href="/blog">Blog</a></li>
                                                <li><a href="/contact">Contact</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-auto">
                                    <div className="widget
                          widget_nav_menu footer-widget">
                                        <h3 className="widget_title">Services</h3>
                                        <div className="menu-all-pages-container">
                                            <ul className="menu">
                                                <li><a href="/services/jobs">Emploi</a></li>
                                                <li><a href="/services/trainings">Formation professionnelle</a></li>
                                                <li><a href="#">Service de livraison</a></li>
                                                <li><a href="#">Prospection commerciale</a></li>
                                                <li><a href="#">Stratégie de marketing digital</a></li>
                                                <li><a href="#">Rédaction de contenu web</a></li>
                                                <li><a href="#">Conception graphique</a></li>
                                                <li><a href="#">Vente en ligne</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-auto">
                                    <div className="widget
                          footer-widget">
                                        <h3 className="widget_title">Recent
                                            Posts</h3>
                                        <div className="recent-post-wrap">
                                            <div className="recent-post">
                                                <div className="media-img"><a href="#"><img src="/assets/img/blog/recent-post-2-1.jpg" alt="Blog Image" /></a></div>
                                                <div className="media-body">
                                                    <h4 className="post-title"><a className="text-inherit" href="#">App
                                                        Promotes Sales of Markets
                                                        it.</a></h4>
                                                    <div className="recent-post-meta"><a href="blog.html"><i className="fal
                                                  fa-calendar-days" />21
                                                        June, 2022</a></div>
                                                </div>
                                            </div>
                                            <div className="recent-post">
                                                <div className="media-img"><a href="#"><img src="/assets/img/blog/recent-post-2-2.jpg" alt="Blog Image" /></a></div>
                                                <div className="media-body">
                                                    <h4 className="post-title"><a className="text-inherit" href="#">Best
                                                        Define World IT Digital
                                                        Solution</a></h4>
                                                    <div className="recent-post-meta"><a href="blog.html"><i className="fal
                                                  fa-calendar-days" />22
                                                        June, 2022</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-wrap">
                        <div className="container">
                            <div className="row
                  justify-content-between align-items-center">
                                <div className="col-lg-6">
                                    <p className="copyright-text">Copyright
                                        <i className="fal fa-copyright" /> 2023 <a href="#">Adive</a>.
                                        All Rights Reserved.
                                    </p>
                                </div>
                                <div className="col-lg-6 text-end d-none d-lg-block">
                                    <div className="footer-links">
                                        <ul>
                                            <li><a href="#">Politique de confidentialité</a></li>
                                            <li><a href="#">Conditions d'utilisation</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <a href="#" className="scrollToTop scroll-btn">
                    <i className="far fa-long-arrow-up"></i>
                </a>
            </div>
        </>
    );
}
