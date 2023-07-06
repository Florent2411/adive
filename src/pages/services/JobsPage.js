import React, { useEffect } from 'react';
import { fetchJobs } from '../../redux/actions/jobsActions';
import Services from "../../components/Services";
import Breadcumb from '../../components/Breadcumb';

const JobsPage = (props) => {
    const breadcumb = {
        text: "Mise En Rélation Emploi",
        mainLinkText: 'Accueil',
        mainLink: '/accueil',
        sublink: "Mise en rélation emploi"
    }
    useEffect(() => {
        fetchJobs();
    }, [fetchJobs]);

    return (
        <>
            <div>
                <Breadcumb breadcumb={breadcumb} />
                <section className="space-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-8 col-lg-7">
                                <div className="page-single">
                                    <div className="page-img">
                                        <img src="/assets/img/service/service_details.jpg" alt="Service Image" />
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
                                                <h4 className="h4 mt-n2">Fonctionnement</h4>
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

export default JobsPage;