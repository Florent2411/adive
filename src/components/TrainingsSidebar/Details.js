import React, { useEffect } from 'react';


const Details = (props) => {

    const { training, titre } = props;

    console.log('traing on details ', training)
    return (
        <>
            <div className="eduvibe-sidebar course-details-sidebar">
                <div className="inner">
                    <div className="eduvibe-widget">
                        <div className="video-area">
                            <div className="thumbnail video-popup-wrapper">
                                <img
                                    className="radius-small w-100"
                                    src={training.attributes.image.data[0].attributes.url}
                                    alt="Course Images"
                                />
                                <a
                                    href="https://www.youtube.com/watch?v=pNje3bWz7V8"
                                    className="video-play-btn position-to-top video-popup-activation"
                                >
                                    <span className="play-icon course-details-video-popup" />
                                </a>
                            </div>
                        </div>
                        <div className="eduvibe-widget-details mt--35">
                            <div className="widget-content">
                                <ul>
                                    <li>
                                        <span>
                                            <i className="icon-time-line" />Debut
                                        </span>
                                        <span> {training.attributes.date_formation.slice(0, 10)}</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="icon-user-2" /> Nombre d'heures
                                        </span>
                                        <span>{training.attributes.nombre_heures} H</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="icon-draft-line" /> Lieu
                                        </span>
                                        <span>{training.attributes.lieu}</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="icon-bar-chart-2-line" /> Niveau
                                        </span>
                                        <span>{training.attributes.langue}</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="icon-translate" /> Langue
                                        </span>
                                        <span>{training.attributes.langue}</span>
                                    </li>

                                    <li>
                                        <span>
                                            <i className="icon-award-line" />Certification
                                        </span>
                                        <span>{training.attributes.avec_certificat ? "Oui" : "Non"}</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="icon-award-line" /> Test/Quiz
                                        </span>
                                        <span>{training.attributes.avec_test ? "Oui" : "Non"}</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="icon-user-2-line_tie" /> Instructeur
                                        </span>
                                        <span>{training.attributes.formateur.data.attributes.Prenoms + ' ' + training.attributes.formateur.data.attributes.Nom}</span>
                                    </li>

                                </ul>
                                <div className="read-more-btn mt--45">
                                    <a
                                        className="edu-btn btn-bg-alt w-100 text-center"
                                        href="course-details.html#"
                                    >
                                        Prix: {training.attributes.prix_formation} CFA
                                    </a>
                                </div>
                                <div className="read-more-btn mt--15">
                                    <a
                                        className="edu-btn w-100 text-center"
                                        href="#"
                                    >
                                        Acheter
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Details;
