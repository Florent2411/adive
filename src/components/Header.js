import React, { useState } from "react";

const Header = ({ onMenuButtonClick, showSearch }) => {

    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        console.log('dddd')
        setMobileMenu(!mobileMenu);
    };

    const closeMobileMenu = () => {
        setMobileMenu(false);
    };;

    return (
        <>
            <div className={`as-menu-wrapper ${mobileMenu ? 'as-body-visible' : ''}`}>
                <div className="as-menu-area text-center">
                    <button className="as-menu-toggle" onClick={closeMobileMenu}>
                        <i className="fal fa-times" />
                    </button>
                    <div className="mobile-logo"><a href="/welcome"><img src="/assets/img/adiveLogo.png" alt="Adive" width={50} /></a></div>
                    <div className="as-mobile-menu">
                        <ul>
                            <li><a href="/welcome">Accueil</a></li>
                            <li><a href="/about">A Propos</a></li>
                            <li className="menu-item-has-children"><a href="/services">Services</a>
                                <ul className="sub-menu">
                                    <li><a href="/services/jobs">Mise en rélation emploi</a></li>
                                    <li><a href="#">Formation professionnelle</a></li>
                                    <li><a href="#">Service de livraison</a></li>
                                    <li><a href="#">Prospection commerciale</a></li>
                                    <li><a href="#">Stratégie de marketing digital</a></li>
                                    <li><a href="#">Rédaction de contenu web</a></li>
                                    <li><a href="#">Conception graphique</a></li>
                                    <li><a href="#">Vente en ligne</a></li>
                                </ul>
                            </li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li className="menu-item-has-children"><a href="#">Langue</a>
                                <ul className="sub-menu">
                                    <li><a href="#">Anglais</a></li>
                                    <li><a href="#">Français</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <header className="as-header header-layout4" style={{ position: "fixed", zIndex: 999 }}>
                <div className="header-top">
                    <div className="container">
                        <div className="row justify-content-center
                  justify-content-lg-between align-items-center">
                            <div className="col-auto d-none d-lg-block">
                                <p className="header-notice">Bienvenue sur la plateforme du DIGITAL & de la VENTE</p>
                            </div>
                            <div className="col-auto">
                                <div className="header-social"><span className="social-title">Suivez-Nous : </span><a href="https://www.facebook.com/"><i className="fab fa-facebook-f" /></a> <a href="https://www.twitter.com/"><i className="fab fa-twitter" /></a> <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in" /></a> <a href="https://www.instagram.com/"><i className="fab fa-instagram" /></a> <a href="https://www.youtube.com/"><i className="fab fa-youtube" /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-top">
                    <div className="container">
                        <div className="row
                  align-items-center justify-content-between">
                            <div className="col-auto">
                                <div className="header-logo"><a href="/welcome"><img src="/assets/img/adiveLogo.png" alt="Adive" width={50} /></a>
                                </div>
                            </div>
                            <div className="col-auto d-none d-lg-inline-block">
                                <div className="header-info-wrap">
                                    <div className="header-info">
                                        <div className="header-info_icon icon-btn"><i className="fa-solid fa-phone" /></div>
                                        <div className="media-body"><span className="header-info_text">Appel</span> <a className="header-info_link" href="tel:+22670966407">(+226) 70-96-64-07</a></div>
                                    </div>
                                    <div className="header-info">
                                        <div className="header-info_icon icon-btn"><i className="fa-solid fa-envelope" /></div>
                                        <div className="media-body"><span className="header-info_text">Email</span>
                                            <a className="header-info_link" href="mailto:info@Adive.com">info@Adive.com</a>
                                        </div>
                                    </div>
                                    <div className="header-info">
                                        <div className="header-info_icon icon-btn"><i className="fa-solid fa-clock" /></div>
                                        <div className="media-body"><span className="header-info_text">Disponibilité</span>
                                            <p className="header-info_link">Mon - Fri:
                                                09AM - 18PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto"><a href="/contact" className="as-btn gr-btn d-lg-inline-block d-none">Contactez-Nous</a>
                                <button onClick={toggleMobileMenu} type="button" className="as-menu-toggle d-inline-block d-lg-none">
                                    <i className="far fa-bars" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="logo-bg" />
                </div>
                <div className="sticky-wrapper">
                    <div className="sticky-active">
                        <div className="container">
                            <div className="menu-area">
                                <div className="row align-items-center
                          justify-content-between">
                                    <div className="col-auto">
                                        <nav className="main-menu d-none
                                  d-lg-inline-block">
                                            <ul>
                                                <li><a href="/welcome">Accueil</a></li>
                                                <li><a href="/about">A Propos</a></li>
                                                <li className="menu-item-has-children"><a href="/services">Services</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="/services/jobs">Mise en rélation emploi</a></li>
                                                        <li><a href="#">Formation professionnelle</a></li>
                                                        <li><a href="#">Service de livraison</a></li>
                                                        <li><a href="#">Prospection commerciale</a></li>
                                                        <li><a href="#">Stratégie de marketing digital</a></li>
                                                        <li><a href="#">Rédaction de contenu web</a></li>
                                                        <li><a href="#">Conception graphique</a></li>
                                                        <li><a href="#">Vente en ligne</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/blog">Blog</a></li>
                                                <li><a href="/contact">Contact</a></li>
                                                <li className="menu-item-has-children"><a href="#">Langue</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="#">Anglais</a></li>
                                                        <li><a href="#">Français</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="col-auto d-none d-lg-block">
                                        <div className="header-button">
                                            <button type="button" className="icon-btn searchBoxToggler" onClick={showSearch}>
                                                <i className="far fa-search" />
                                            </button>
                                            <a href="/login" className="icon-btn">
                                                <i className="far fa-user" />
                                            </a>
                                            <button className="icon-btn sideMenuToggler" onClick={onMenuButtonClick}>
                                                <i className="far fa-bars" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
