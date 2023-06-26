import React from "react";
import CountUp from 'react-countup';

export default function AboutPage(props) {

    return (
        <>
            <div>
                <div className="breadcumb-wrapper"
                    style={{ marginTop: 200, backgroundImage: "url(assets/img/hero/hero_bg_4_2.jpg)" }}>
                    <div className="container">
                        <div className="breadcumb-content">
                            <h1 className="breadcumb-title">A Propos De Nous</h1>
                            <ul className="breadcumb-menu">
                                <li><a href="/welcome">Accueil</a></li>
                                <li>A Propos</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden space">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 pe-xxl-5 mb-30 mb-lg-0">
                                <div className="img-box4">
                                    <div className="left">
                                        <div className="img1"><img src="assets/img/normal/about_3_1.jpg" alt="About" /></div>
                                        <div className="shape1"><img src="assets/img/shape/about_3_2.png" alt="shape" /></div>
                                    </div>
                                    <div className="right">
                                        <div className="shape2"><img src="assets/img/shape/about_3_1.png" alt="shape" /></div>
                                        <div className="img2"><img src="assets/img/normal/about_3_2.jpg" alt="About" /></div>
                                    </div>
                                    <div className="about-box1">
                                        <div className="icon"><img src="assets/img/icon/award_1.svg" alt="icon" /></div>
                                        <p className="text">Won best Award<br />in 2022</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="title-area mb-30"><span className="sub-title">A PROPOS DE NOUS <span className="shape right"><span className="dots" /></span></span>
                                    <h2 className="sec-title">Meilleure Agence du Digital & Vente</h2>
                                </div>
                                <p className="fs-md fw-medium mt-n2 mb-4">Nous sommes une entreprise spécialisée dans la fourniture de services liés au marketing digital et à la vente en ligne.</p>
                                <p className="mt-n2 mb-4">Nous offrons une gamme de services variés pour aider les entreprises à atteindre leurs objectifs commerciaux et à se développer sur Internet.</p>
                                <div className="profile-wrap">
                                    <div className="about-profile">
                                        <div className="avater"><img src="assets/img/normal/about_avater.jpg" alt="avater" /></div>
                                        <div className="media-body">
                                            <h3 className="title">Michel Richard</h3><span className="desig">CEO of Company</span>
                                        </div>
                                    </div>
                                    <div className="signature"><img src="assets/img/normal/signature.svg" alt="signature" /></div>
                                </div><a href="#" className="as-btn">Lire Plus</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space bg-smoke overflow-hidden" data-bg-src="assets/img/bg/why_bg_3.png">
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-xl-6">
                                <div className="img-box5">
                                    <div className="img1"><img src="assets/img/normal/why_1.jpg" alt="image" /></div>
                                    <div className="shape1"><img src="assets/img/shape/dot_1.png" alt="shape" /></div>
                                    <div className="video-box3" data-overlay="overlay1" data-opacity={5}><img src="assets/img/normal/video_4.jpg" alt="video" /> <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" className="play-btn popup-video"><i className="fas fa-play" /></a></div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="title-area mb-30"><span className="sub-title">Pourquoi Nous Choisir</span>
                                    <h2 className="sec-title">Solution économique et numérique</h2>
                                </div>
                                <p className="mt-n2 mb-4">Il y a plusieurs raisons pour lesquelles vous devriez envisager de choisir notre agence du digital et de la vente. Voici quelques points forts qui peuvent vous aider à prendre une décision :
                                </p>
                                <div className="info-media">
                                    <div className="info-media_icon"><i className="far fa-lightbulb-on" /></div>
                                    <div className="media-body">
                                        <h3 className="h6 info-media_title">Expertise & Expérience</h3>
                                        <p className="info-media_text">Notre équipe est composée de professionnels qualifiés et expérimentés dans les domaines du marketing digital et de la vente en ligne.</p>
                                    </div>
                                </div>
                                <div className="info-media">
                                    <div className="info-media_icon"><i className="far fa-circle-dollar" /></div>
                                    <div className="media-body">
                                        <h3 className="h6 info-media_title">Gamme complète de services</h3>
                                        <p className="info-media_text">Notre agence offre une gamme complète de services dans le domaine du marketing digital et de la vente en ligne.</p>
                                    </div>
                                </div>
                                <div className="info-media mb-0">
                                    <div className="info-media_icon"><i className="far fa-headset" /></div>
                                    <div className="media-body">
                                        <h3 className="h6 info-media_title">Engagement envers la satisfaction du client</h3>
                                        <p className="info-media_text">La satisfaction de nos clients est notre priorité absolue.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space" data-bg-src="assets/img/bg/counter_bg_1.jpg" data-overlay="title" data-opacity={9}>
                    <div className="container z-index-common">
                        <div className="row gy-40 justify-content-between">
                            <div className="col-sm-6 col-xl-auto">
                                <div className="counter-card">
                                    <div className="counter-card_icon"><i className="fa-thin fa-file-check" /></div>
                                    <div className="media-body">
                                        <h2 className="counter-card_number">+<CountUp end={100} duration={5} /></h2>
                                        <p className="counter-card_text">Partenaires Actifs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-auto">
                                <div className="counter-card">
                                    <div className="counter-card_icon"><i className="fa-thin fa-shield-check" /></div>
                                    <div className="media-body">
                                        <h2 className="counter-card_number">+<CountUp end={500} duration={5} /></h2>
                                        <p className="counter-card_text">Clients Actifs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-auto">
                                <div className="counter-card">
                                    <div className="counter-card_icon"><i className="fa-thin fa-mug-hot" /></div>
                                    <div className="media-body">
                                        <h2 className="counter-card_number">+<CountUp end={95} duration={5} />%</h2>
                                        <p className="counter-card_text">Clients Satisfaits</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-auto">
                                <div className="counter-card">
                                    <div className="counter-card_icon"><i className="fa-thin fa-face-smile" /></div>
                                    <div className="media-body">
                                        <h2 className="counter-card_number">+<CountUp end={1000} duration={5} /></h2>
                                        <p className="counter-card_text">Témoignages</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-smoke position-relative">
                    <div className="img-right skill-half"><img src="assets/img/normal/skill_img_2.png" alt="skill img" /></div>
                    <div className="container z-index-common">
                        <div className="row space-top space-bottom mt-n5 mt-xl-0">
                            <div className="col-xl-6 col-lg-9">
                                <div className="title-area mb-30"><span className="sub-title">Nos Compétences</span>
                                    <h2 className="sec-title">Nous sommes plus créatifs que jamais </h2>
                                </div>
                                <p className="mt-n2 mb-4">En tant qu'agence du digital et de la vente, nous avons développé un large éventail de compétences dans les domaines clés du marketing digital et de la vente en ligne. <br/>Voici quelques-unes de nos compétences principales :</p>
                                <div className="skill-feature">
                                    <p className="skill-feature_title">Analyse des données et suivi des performances</p>
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '98%' }}>
                                            <div className="progress-value"><CountUp end={98} duration={5} />%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-feature">
                                    <p className="skill-feature_title">Gestion des médias sociaux</p>
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '96%' }}>
                                            <div className="progress-value"><CountUp end={96} duration={5} />%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-feature">
                                    <p className="skill-feature_title">Stratégie de marketing digital</p>
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '94%' }}>
                                            <div className="progress-value"><CountUp end={94} duration={5} />%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="space-bottom" style={{marginTop: 100}}>
                    <div className="container">
                        <div className="cta-wrap" data-bg-src="assets/img/bg/cta_bg_2.png">
                            <div className="row gx-0 align-items-center">
                                <div className="col-lg text-center text-lg-start">
                                    <p className="mb-10 mt-n2">Nous sommes là 24h/24 et 7j/7 pour répondre à vos questions</p>
                                    <h2 className="mb-n3">Vous avez besoin de notre aide ?</h2>
                                </div>
                                <div className="col-lg-auto mt-35 mt-lg-0">
                                    <div className="text-center"><a href="/contact" className="as-btn style3">Contactez-Nous</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}
