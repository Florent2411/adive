import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../../redux/actions/jobsActions';
import Services from "../../components/Services";
import Job from '../../components/Job';

const JobsPage = (props) => {
    const { jobs, fetchJobs } = props;

    useEffect(() => {
        fetchJobs();
    }, [fetchJobs]);

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
                <section className="space-extra-bottom">
                    <div className="container">
                        <div className="row gy-4">
                            {jobs.map((job) => (
                                <Job
                                    title={job.attributes.titre}
                                    expiration={job.attributes.date_expiration}
                                    publication={job.attributes.date_publication}
                                    description={job.attributes.description}
                                    //jobDomain={job.attributes.jobdomain.data.attributes.nom}
                                    job={job}
                                />
                            ))}
                        </div>
                        <div className="text-center mt-5">
                            <div className="as-pagination">
                                <ul>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#"><i className="far fa-arrow-right" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}

const mapStateToProps = (state) => {
    return {
        jobs: state.jobs.jobs
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchJobs: () => dispatch(fetchJobs())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobsPage);