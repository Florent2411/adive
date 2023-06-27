import React from "react";

export default function ServicesPage(props) {

    return (
        <>
            <div>
                <div className="breadcumb-wrapper" style={{ marginTop: 160, backgroundImage: "url(assets/img/hero/hero_bg_4_2.jpg)" }}>
                    <div className="container">
                        <div className="breadcumb-content">
                            <h1 className="breadcumb-title">Services</h1>
                            <ul className="breadcumb-menu">
                                <li><a href="/welcome">Accueil</a></li>
                                <li>Services</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="space">
                    <div className="container">
                        <div className="title-area text-center"><span className="sub-title">Ce que nous faisons</span>
                            <h2 className="sec-title">Nos Différents Services</h2>
                            <p className="sec-text ms-auto me-auto">En tant qu'agence du digital et de la vente, nous proposons une gamme complète de services pour aider votre entreprise à prospérer dans le monde numérique. Voici un aperçu de nos principaux services :</p>
                        </div>
                        <div className="row gy-4">
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="service-card">
                                    <div className="service-card_icon"><i className="fal fa-display-code" /></div>
                                    <h3 className="service-card_title"><a href="/services/jobs">Mise en rélation emploi</a></h3>
                                    <p className="service-card_text">Proactively seize installed base applications whereas.</p><a href="#" className="service-card_btn">Savoir Plus</a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="service-card">
                                    <div className="service-card_icon"><i className="fal fa-chart-line-up" /></div>
                                    <h3 className="service-card_title"><a href="#">Formation professionnelle</a></h3>
                                    <p className="service-card_text">Diestarbcse seize installed base applications our gots.</p><a href="#" className="service-card_btn">Savoir Plus</a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="service-card">
                                    <div className="service-card_icon"><i className="fal fa-layer-group" /></div>
                                    <h3 className="service-card_title"><a href="#">Service de livraison</a></h3>
                                    <p className="service-card_text">Moertsartis seize installed base applications taken off.</p><a href="#" className="service-card_btn">Savoir Plus</a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="service-card">
                                    <div className="service-card_icon"><i className="fal fa-bezier-curve" /></div>
                                    <h3 className="service-card_title"><a href="#">Prospection commerciale</a></h3>
                                    <p className="service-card_text">Proactively seize installed base applications whereas.</p><a href="#" className="service-card_btn">Savoir Plus</a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="service-card">
                                    <div className="service-card_icon"><i className="fal fa-chart-pie-simple" /></div>
                                    <h3 className="service-card_title"><a href="#">Stratégie de marketing </a>
                                    </h3>
                                    <p className="service-card_text">Diestarbcse seize installed base applications our gots.</p><a href="#" className="service-card_btn">Savoir Plus</a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="service-card">
                                    <div className="service-card_icon"><i className="fal fa-bullhorn" /></div>
                                    <h3 className="service-card_title"><a href="#">Rédaction de contenu web</a></h3>
                                    <p className="service-card_text">Moertsartis seize installed base applications taken off.</p><a href="#" className="service-card_btn">Savoir Plus</a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="service-card">
                                    <div className="service-card_icon"><i className="fal fa-file-pen" /></div>
                                    <h3 className="service-card_title"><a href="#">Conception graphique</a></h3>
                                    <p className="service-card_text">Gattisbarti seize installed base applications believed.</p><a href="#" className="service-card_btn">Savoir Plus</a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <div className="service-card">
                                    <div className="service-card_icon"><i className="fal fa-chart-mixed" /></div>
                                    <h3 className="service-card_title"><a href="#">Vente en ligne</a></h3>
                                    <p className="service-card_text">Notalianops seize installed base applications gift boxs.</p><a href="#" className="service-card_btn">Savoir Plus</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="space process-sec bg-smoke" style={{backgroundImage: "url(assets/img/bg/process_bg_1.png)"}}>
                    <div className="container">
                        <div className="col-lg-6">
                            <div className="title-area text-center text-lg-start"><span className="sub-title">Comment nous travaillons</span>
                                <h2 className="sec-title">Notre processus de travail</h2>
                                <p className="sec-text mb-4 me-auto ms-auto ms-lg-0 pe-lg-5 me-lg-5">Nous travaillons en suivant un processus en 3 étapes pour garantir un travail efficace et des résultats de qualité. Voici comment nous procédons :</p><a href="/about" className="as-btn mb-20">Savoir Plus</a>
                            </div>
                        </div>
                        <div className="process-line"><img src="assets/img/shape/process_line.svg" alt="shape" /></div>
                        <div className="row gy-30">
                            <div className="col-md-6 col-lg-4 process-card-wrap">
                                <div className="process-card">
                                    <div className="process-card_icon"><img src="assets/img/icon/process_1_1.svg" alt="icon" /></div>
                                    <div className="process-card_number">1</div>
                                    <h2 className="process-card_title box-title">Analyse et compréhension des besoins</h2>
                                    <p className="process-card_text">Dans cette première étape, nous prenons le temps d'analyser et
                                        de comprendre vos besoins spécifiques. Nous écoutons attentivement vos objectifs, vos exigences et
                                        vos contraintes.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 process-card-wrap">
                                <div className="process-card">
                                    <div className="process-card_icon"><img src="assets/img/icon/process_1_2.svg" alt="icon" /></div>
                                    <div className="process-card_number">2</div>
                                    <h2 className="process-card_title box-title">Planification et conception</h2>
                                    <p className="process-card_text">Une fois que nous avons une bonne compréhension de vos besoins, nous passons à
                                        la planification et à la conception. Nous élaborons un plan détaillé qui inclut les différentes étapes du projet,
                                        les délais, les ressources nécessaires et les responsabilités. </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 process-card-wrap">
                                <div className="process-card">
                                    <div className="process-card_icon"><img src="assets/img/icon/process_1_3.svg" alt="icon" /></div>
                                    <div className="process-card_number">3</div>
                                    <h2 className="process-card_title box-title">Développement et mise en œuvre</h2>
                                    <p className="process-card_text">Une fois que la planification et la conception sont finalisées, nous passons à la phase
                                        de développement et de mise en œuvre. Notre équipe de développeurs met en place les fonctionnalités, les interfaces et
                                        les éléments nécessaires pour concrétiser le projet. </p>
                                </div>
                            </div>
                        </div>
                        <div className="process-call-wrap">
                            <div className="process-call-btn">
                                <div className="play-btn"><i className="fa-solid fa-phone" /></div><a href="tel:+22670966407" className="call-link">(+226) 70-96-64-07</a>
                            </div>
                            <div className="process-call-img"><img src="assets/img/normal/process_man.png" alt="man" /></div>
                        </div>
                    </div>
                </section>
                <section className="space" style={{ backgroundImage: "url(assets/img/bg/cta_bg_1.png)" }} data-overlay="title" data-opacity={9}>
                    <div className="container z-index-common text-center">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                <div className="title-area text-center mb-40"><span className="sub-title text-white">Besoin d'aide ?</span>
                                    <h2 className="sec-title text-white">Vous avez besoin de notre aide?</h2>
                                    <p className="sec-text text-white ms-auto me-auto">Ne vous inquiétez pas, nous sommes là pour vous aider ! Notre équipe dévouée est prête à répondre à toutes vos
                                        interrogations et à vous fournir le soutien dont vous avez besoin.</p>
                                </div>
                                <div className="btn-group justify-content-center"><a href="/contact" className="as-btn style3">Contactez-Nous</a></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-auto space" id="testiSec2" style={{ backgroundImage: "url(/assets/img/bg/testi_bg_3.png)" }}>
                    <div className="container">
                        <div className="title-area text-center"><span className="sub-title">Témoignages</span>
                            <h2 className="sec-title">Les Retours De Nos Clients</h2>
                            <p className="sec-text ms-auto me-auto">Nous sommes fiers de recevoir de tels témoignages de nos
                                clients satisfaits. Votre satisfaction est notre priorité absolue, et nous nous efforçons de fournir
                                des services de qualité et des résultats exceptionnels à tous nos clients.
                            </p>
                        </div>
                        <div className="row slider-shadow as-carousel" id="testiSlide2" data-slide-show={2} data-lg-slide-show={2} data-md-slide-show={1} data-xs-slide-show={1} data-arrows="true">
                            <div className="col-lg-6">
                                <div className="testi-card" data-bg-src="assets/img/testimonial/testi_bg_2.svg">
                                    <div className="testi-card_img"><img src="assets/img/testimonial/testi_2_1.jpg" alt="Avater" /></div>
                                    <div className="testi-card_content">
                                        <div className="testi-card_quote"><img src="assets/img/icon/quote_left.svg" alt="icon" /></div>
                                        <p className="testi-card_text">Nous avons confié la création de notre site web à votre agence et nous sommes
                                            extrêmement satisfaits du résultat. Le design est moderne, la navigation est fluide et le site correspond
                                            parfaitement à notre image de marque. Merci pour votre travail exceptionnel !</p>
                                        <h3 className="testi-card_name">David Milton</h3><span className="testi-card_desig">CEO of
                                            Maithon</span>
                                        <div className="testi-card_review"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testi-card" data-bg-src="assets/img/testimonial/testi_bg_2.svg">
                                    <div className="testi-card_img"><img src="assets/img/testimonial/testi_2_2.jpg" alt="Avater" /></div>
                                    <div className="testi-card_content">
                                        <div className="testi-card_quote"><img src="assets/img/icon/quote_left.svg" alt="icon" /></div>
                                        <p className="testi-card_text">Nous avons eu recours aux services de votre agence pour notre stratégie de marketing digital,
                                            et nous ne regrettons pas notre choix. Votre équipe a su élaborer une campagne efficace qui a considérablement augmenté notre
                                            visibilité en ligne. Merci pour votre professionnalisme !</p>
                                        <h3 className="testi-card_name">Sunzida Carlose</h3><span className="testi-card_desig">CEO of
                                            Gazal</span>
                                        <div className="testi-card_review"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
