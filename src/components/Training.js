import React, { useState } from "react";
import { Row, Col, Modal } from 'antd';

export default function Training(props) {
    const [selectedJob, setSelectedJob] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (job) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedJob(null);
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="col-md-6 col-xl-4">
                <div className="blog-card">
                    <div className="blog-img">
                        <img src={props.training.attributes.image.data[0].attributes.formats.thumbnail.url} alt="blog image" />
                        <a href="#" className="category">
                            <i className="far fa-folder" />
                            {props.training.attributes.langue}
                        </a>
                    </div>
                    <div className="blog-content">
                        <div className="blog-meta">
                            <a href="#">
                                <i className="fal fa-calendar-days" />
                                {props.publication.slice(0, 10)}
                            </a>
                        </div>
                        <h3 className="blog-title box-title">
                            <a href="#" onClick={() => openModal(props.training)}>
                                {props.title}
                            </a>
                        </h3>
                        <p className="blog-text">
                            {props.description.slice(0, 70)}...
                        </p>
                        <a style={{ cursor: "pointer" }} className="line-btn" onClick={() => openModal(props.training)}>
                            En Savoir Plus
                        </a>
                    </div>
                </div>
            </div>
            <Modal
                title=""
                centered
                open={isModalOpen}
                onOk={closeModal}
                onCancel={closeModal}
                width={1000}
            >
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-12 col-lg-12">
                                <div className="page-single">
                                    <div className="page-content">
                                        <h2 className="h3 page-title">{props.title} ({props.training.attributes.date_formation.slice(0, 10)})</h2>
                                        <div className="page-img">
                                            <img src={props.training.attributes.image.data[0].attributes.formats.thumbnail.url}
                                                style={{ width: "-webkit-fill-available" }} />
                                        </div>
                                        <p style={{
                                            backgroundColor: "antiquewhite",
                                            padding: 15, borderRadius: 10
                                        }}>
                                            <Row gutter={20}>
                                                <Col md={8}>
                                                    <p style={{ fontWeight: "bold" }}>
                                                        <h6>Langue </h6>
                                                    </p>
                                                    <p>{props.training.attributes.langue}</p>
                                                </Col>
                                                <Col md={8}>
                                                    <p style={{ fontWeight: "bold" }}>
                                                        <h6>Lieu</h6>
                                                    </p>
                                                    <p>{props.training.attributes.lieu}</p>
                                                </Col>
                                                <Col md={8}>
                                                    <p style={{ fontWeight: "bold" }}>
                                                        <h6>Heure(s)</h6>
                                                    </p>
                                                    <p>{props.training.attributes.nombre_heures}</p>
                                                </Col>
                                                <Col md={8}>
                                                    <p style={{ fontWeight: "bold" }}>
                                                        <h6>Prix</h6>
                                                    </p>
                                                    <p>{props.training.attributes.prix_formation}</p>
                                                </Col>
                                                <Col md={8}>
                                                    <p style={{ fontWeight: "bold" }}>
                                                        <h6>Test</h6>
                                                    </p>
                                                    <p>{props.training.attributes.avec_test ? "Oui" : "Non"}</p>
                                                </Col>
                                                <Col md={8}>
                                                    <p style={{ fontWeight: "bold" }}>
                                                        <h6>Certification</h6>
                                                    </p>
                                                    <p>{props.training.attributes.avec_certificat ? "Oui" : "Non"}</p>
                                                </Col>
                                                <Col md={24}>
                                                    <div className="accordion-area accordion" id="faqAccordion">
                                                        <div className="accordion-card active">
                                                            <div className="accordion-header" id="collapse-item-1"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                                                                <span className="text-theme">
                                                                    1.</span> Quels sont les bjectifs de cette formation ?</button></div>
                                                            <div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion">
                                                                <div className="accordion-body">
                                                                    <p className="faq-text">{props.training.attributes.objectifs}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-card">
                                                            <div className="accordion-header" id="collapse-item-2"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                                                                <span className="text-theme">
                                                                    2.</span> Quel est la cible de cette formation ?</button></div>
                                                            <div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion">
                                                                <div className="accordion-body">
                                                                    <p className="faq-text">{props.training.attributes.cible}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-card">
                                                            <div className="accordion-header" id="collapse-item-2"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                                                                <span className="text-theme">
                                                                    3.</span> Quelles sont compétences requises ?</button></div>
                                                            <div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion">
                                                                <div className="accordion-body">
                                                                    <p className="faq-text">{props.training.attributes.Competences}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-card">
                                                            <div className="accordion-header" id="collapse-item-2"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                                                                <span className="text-theme">
                                                                    D.</span> Description de cette formation</button></div>
                                                            <div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion">
                                                                <div className="accordion-body">
                                                                    <p className="faq-text">{props.training.attributes.description}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </p>
                                        {/* <p>{props.description}</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Modal>
        </>
    );
};
