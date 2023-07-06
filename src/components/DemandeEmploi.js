import React, { useState } from "react";
import config from "../config";

const Pricing = ({ }) => {
    return (
        <>
            <div
                className="cta-box1 space mb-50"
                data-bg-src="assets/img/bg/cta_bg_4.jpg"
                data-overlay="title"
                data-opacity={9}
            >
                <div className="container z-index-common text-center">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="title-area text-center mb-40">
                                <span className="sub-title text-white">Demande d’emploi</span>
                                <h2 className="sec-title text-white">
                                    Laissez votre Cv Professionnel
                                </h2>
                                <p className="sec-text text-white ms-auto me-auto">
                                    Votre CV est bien plus qu'une simple liste de compétences
                                    et d'expériences. C'est une carte de visite qui vous représente professionnellement et
                                    qui peut ouvrir les portes de nombreuses opportunités. Que vous soyez à la recherche d'un nouvel emploi, d'un stage ou que vous souhaitiez simplement mettre à jour votre profil, il est essentiel de présenter un CV professionnel qui attire l'attention et met en valeur votre parcours.
                                </p>
                            </div>
                            <div className="btn-group justify-content-center">
                                <a href="#" className="as-btn style3">
                                    Création de lettre de motivation
                                </a>
                                <a href="#" className="as-btn style2">
                                    Espace constitution de dossier
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pricing;
