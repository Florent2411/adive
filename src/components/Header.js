import React, { useState } from "react";
import config from "../config";
import HeaderTop from "./HeaderTop";
import MenuItems from "./MenuItems.js";
import Search from './Search';

const Header = ({ onMenuButtonClick }) => {

    const [mobileMenu, setMobileMenu] = useState(false);

    const menu = [
        {
            name: "Accueil",
            route: "/accueil",
            hasChildren: false
        },
        {
            name: "A Propos",
            route: "/a-propos-de-nous",
            hasChildren: false
        },
        {
            name: "Services",
            route: "/nos-services",
            hasChildren: true,
            children: [
                {
                    name: "Mise en rélation emploi",
                    route: "/services/jobs",
                }, {
                    name: "Formations professionnelles",
                    route: "/services/trainings",
                }, {
                    name: "Service de livraison",
                    route: "#",
                }, {
                    name: "Prospection commerciale",
                    route: "#",
                }, {
                    name: "Stratégie de marketing digital",
                    route: "#",
                }, {
                    name: "Rédaction de contenu web",
                    route: "#",
                }, {
                    name: "Conception graphique",
                    route: "#",
                }, {
                    name: "Vente en ligne",
                    route: "#",
                }
            ]
        }, {
            name: "Formations",
            route: "/nos-formations",
            hasChildren: false
        }, {
            name: "Offres d'Emplois",
            route: "/nos-offres-emplois",
            hasChildren: false
        }, {
            name: "Actualités",
            route: "/nos-actualites",
            hasChildren: false
        }, {
            name: "Devis",
            route: "/demander-un-devis",
            hasChildren: false
        }, {
            name: "Biblio",
            route: "/adive-biblio",
            hasChildren: false
        }, {
            id: 7,
            name: "Faq",
            route: "/faq",
            hasChildren: false
        }, {
            name: "Contact",
            route: "/contact",
            hasChildren: false
        }
    ];

    const toggleMobileMenu = () => {
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
                    <div className="mobile-logo"><a href="/"><img src="/assets/img/adiveLogo.png" alt="Adive" width={50} /></a></div>
                    <div className="as-mobile-menu">
                        <MenuItems menu={menu} />
                    </div>
                </div>
            </div>
            <header className="as-header header-layout4" style={{ position: "fixed", zIndex: 999 }}>
                {config.showTopHeader && <HeaderTop text="Bienvenue sur la plateforme du DIGITAL & de la VENTE" />}
                <div className="menu-top">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-auto">
                                <div className="header-logo"><a href="/welcome"><img src="/assets/img/adiveLogo.png" alt="Adive" width={50} /></a>
                                </div>
                            </div>
                            <div className="col-auto d-none d-lg-inline-block">
                                <div className="header-info-wrap">
                                    <div className="header-info">
                                        <div className="header-info_icon icon-btn"><i className="fa-solid fa-phone" /></div>
                                        <div className="media-body"><span className="header-info_text">Appel</span>
                                            <a className="header-info_link" href={`tel:${config.firstContact}`}>{config.firstContact}</a></div>
                                    </div>
                                    <div className="header-info">
                                        <div className="header-info_icon icon-btn"><i className="fa-solid fa-envelope" /></div>
                                        <div className="media-body"><span className="header-info_text">Email</span>
                                            <a className="header-info_link" href={`mailto:${config.email}`}>{config.email}</a>
                                        </div>
                                    </div>
                                    <div className="header-info">
                                        <div className="header-info_icon icon-btn"><i className="fa-solid fa-clock" /></div>
                                        <div className="media-body"><span className="header-info_text">Disponibilité</span>
                                            <p className="header-info_link">{config.availability}</p>
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
                                        <nav className="main-menu d-none d-lg-inline-block">
                                            <MenuItems menu={menu} />
                                        </nav>
                                    </div>
                                    <div className="col-auto d-none d-lg-block">
                                        <div className="header-button">
                                            <Search />
                                            <a href="/login" className="icon-btn">
                                                <i className="far fa-user" />
                                            </a>
                                            {/* <button className="icon-btn sideMenuToggler" onClick={onMenuButtonClick}>
                                                <i className="far fa-bars" />
                                            </button> */}
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
