import React from "react";

export default function Services(props) {

    return (
        <>
            <div className="col-xxl-4 col-lg-5">
                <aside className="sidebar-area">
                    {/* <div className="widget widget_search">
                        <form className="search-form">
                            <input type="text" placeholder="Recherche..." />
                            <button type="submit">
                                <i className="far fa-search" />
                            </button>
                        </form>
                    </div> */}
                    <div className="widget widget_nav_menu">
                        <h3 className="widget_title">Tous Les Services</h3>
                        <div className="menu-all-pages-container">
                            <ul className="menu">
                                <li><a href="/services/jobs">Mise en rélation emploi</a></li>
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
                    <div className="widget widget_banner">
                        <h4 className="widget_title">Besoin d'aide ?</h4>
                        <div className="widget-banner">
                            <p className="banner-text">N'hésitez pas à nous faire appel pour n'importe quel besoin.</p><a href="mailto:info@dalky.com" className="banner-link"><i className="fas fa-envelope" /> info@adive.com</a> <a href="tel:+22670966407" className="banner-link"><i className="fas fa-phone" /> (+226) 70-96-64-07</a>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    );
}
