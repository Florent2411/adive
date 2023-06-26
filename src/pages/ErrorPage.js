import React from "react";

export default function ErrorPage(props) {

    return (
        <>
            <div>
                <div className="breadcumb-wrapper"  style={{ marginTop: 200, backgroundImage: "url(/assets/img/hero/hero_bg_4_2.jpg)" }}>
                    <div className="container">
                        <div className="breadcumb-content">
                            <h1 className="breadcumb-title">404 - Erreur</h1>
                            <ul className="breadcumb-menu">
                                <li><a href="/welcome">Accueil</a></li>
                                <li>404 - Erreur</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="space">
                    <div className="container">
                        <div className="error-img"><img src="assets/img/normal/error.svg" alt="404 image" /></div>
                        <div className="error-content">
                            <h2 className="error-title">Opp’s ! Cette page est introuvable</h2>
                            <p className="error-text">Il semble que rien n'ait été trouvé à cet endroit. Essayez peut-être l'un des liens ci-dessous
                                ou une recherche ?</p><a href="/welcome" className="as-btn"><i className="fal fa-home me-2" />Accueil</a>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}
