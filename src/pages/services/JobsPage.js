import React from "react";
import Services from "../../components/Services";

export default function JobsPage(props) {

    return (
        <>
            <div>
                <div className="breadcumb-wrapper" style={{ marginTop: 160, backgroundImage: "url(/assets/img/hero/hero_bg_4_2.jpg)" }}>
                    <div className="container">
                        <div className="breadcumb-content">
                            <h1 className="breadcumb-title">Mise En Rélation Emploi</h1>
                            <ul className="breadcumb-menu">
                                <li><a href="/welcome">Accueil</a></li>
                                <li>Mise en rélation emploi</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="space-top space-extra-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-8 col-lg-7">
                                <div className="page-single">
                                    <div className="page-img"><img src="/assets/img/service/service_details.jpg" alt="Service Image" />
                                    </div>
                                    <div className="page-content">
                                        <h2 className="h3 page-title">Mise En Rélation Emploi</h2>
                                        <p>Nous proposons un service de mise en relation pour l'emploi, qui vise à connecter les chercheurs d'emploi avec les
                                            opportunités professionnelles correspondantes. Notre plateforme facilite le processus de recherche d'emploi en offrant
                                            un espace centralisé où les candidats peuvent explorer les offres d'emploi et les entreprises peuvent publier leurs annonces.</p>
                                        <p className="mb-30">Notre objectif est de simplifier et d'accélérer le processus de recherche d'emploi
                                            en mettant en relation les talents et les opportunités professionnelles. Nous nous efforçons de
                                            fournir un environnement convivial et efficace pour favoriser les rencontres fructueuses entre les
                                            employeurs et les candidats.</p>
                                        <div className="row">
                                            <div className="col-xl-6 mb-30"><img className="rounded-3" src="/assets/img/service/service_inner_1.jpg" alt="service" /></div>
                                            <div className="col-xl-6 mb-30">
                                                <h4 className="h4 mt-n2">Comment ça marche ?</h4>
                                                <div className="checklist">
                                                    <ul>
                                                        <li>Création de votre profil</li>
                                                        <li>Recherche d'offres d'emploi</li>
                                                        <li>Postulation </li>
                                                        <li>Évaluation des candidatures</li>
                                                        <li>Entretiens </li>
                                                        <li>Sélection finale et embauche</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <h4 className="h4">Planification & Démarrage</h4>
                                        <p className="mb-4">Dynamically conceptualize vertical partnerships without long-term
                                            high-impact interface. Monotonectally fashion multimedia based leadership skill wherea
                                            scalable meta-service. Seamless integrate collaborative information whereas.</p> */}
                                        <h4 className="h4">Foire Aux Questions</h4>
                                        <div className="accordion-area accordion" id="faqAccordion">
                                            <div className="accordion-card active">
                                                <div className="accordion-header" id="collapse-item-1"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1"><span className="text-theme">
                                                    1.</span> Comment fonctionne la mise en relation emploi sur les plateformes en ligne ?</button></div>
                                                <div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion">
                                                    <div className="accordion-body">
                                                        <p className="faq-text">Les plateformes en ligne de mise en relation emploi permettent aux demandeurs
                                                            d'emploi de créer des profils, de télécharger leur CV, et de parcourir les offres d'emploi disponibles.
                                                            Les employeurs publient leurs offres, consultent les profils des candidats et peuvent entrer en contact
                                                            avec eux pour organiser des entretiens.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-card">
                                                <div className="accordion-header" id="collapse-item-2"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2"><span className="text-theme">
                                                    2.</span> Comment les plateformes de mise en relation emploi filtrent-elles les candidats pour les offres d'emploi ?</button></div>
                                                <div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion">
                                                    <div className="accordion-body">
                                                        <p className="faq-text">Les plateformes de mise en relation emploi utilisent différents mécanismes de filtrage
                                                            pour correspondre les candidats aux offres d'emploi. Cela peut inclure des algorithmes de correspondance basés
                                                            sur les compétences et l'expérience, des filtres de localisation, des critères spécifiques définis par l'employeur,
                                                            ou même une sélection manuelle effectuée par l'équipe de la plateforme.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-card">
                                                <div className="accordion-header" id="collapse-item-3"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3"><span className="text-theme">
                                                    3.</span> Quels sont les avantages de la mise en relation emploi en ligne par rapport aux méthodes traditionnelles ?</button></div>
                                                <div id="collapse-3" className="accordion-collapse collapse" aria-labelledby="collapse-item-3" data-bs-parent="#faqAccordion">
                                                    <div className="accordion-body">
                                                        <p className="faq-text">La mise en relation emploi en ligne offre plusieurs avantages, tels qu'un accès facile
                                                            et rapide à un large éventail d'opportunités d'emploi, la possibilité de postuler en ligne sans se déplacer,
                                                            la visibilité de votre profil auprès d'un grand nombre d'employeurs, et la facilité de communication et de
                                                            suivi grâce aux fonctionnalités de messagerie intégrées.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Services />
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}
