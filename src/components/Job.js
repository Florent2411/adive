import React, { useState } from "react";
import { Row, Col, Modal } from 'antd';

export default function Job(props) {
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
                    <div className="blog-content">
                        <div className="blog-meta">
                            <a href="#">
                                <i className="fal fa-calendar-days" />
                                {props.publication.slice(0, 10)}
                            </a>
                            <a href="#">
                                <i className="fal fa-calendar-days" />
                                {props.expiration.slice(0, 10)}
                            </a>
                        </div>
                        <h5 className="blog-title box-title">
                            <a href="#" onClick={() => openModal(props.job)}>
                                {props.title.slice(0, 20)}...
                            </a>
                        </h5>
                        <p className="blog-text">
                            {props.description.slice(0, 70)}...
                        </p>
                        <a style={{ cursor: "pointer" }} className="line-btn" onClick={() => openModal(props.job)}>
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
                                        <h2 className="h3 page-title">{props.title} ({props.job.attributes.jobtype.data.attributes.nom})</h2>
                                        <p>{props.description}</p>
                                        <p style={{
                                            backgroundColor: "beige",
                                            padding: 15, borderRadius: 10
                                        }}>
                                            <Row gutter={20}>
                                                <Col md={8}>
                                                    <p style={{ fontWeight: "bold" }}>
                                                        <h6>Date de publication </h6>
                                                    </p>
                                                    <p>{props.publication.slice(0, 10)}</p>
                                                </Col>
                                                <Col md={8}>
                                                    <p style={{ fontWeight: "bold" }}>
                                                        <h6>Date d'expiration</h6>
                                                    </p>
                                                    <p>{props.expiration.slice(0, 10)}</p>
                                                </Col>
                                                <Col md={8}>
                                                    <p style={{ fontWeight: "bold" }}>
                                                        <h6>Pays</h6>
                                                    </p>
                                                    <p>{props.job.attributes.pays}</p>
                                                </Col>
                                                <Col md={8}>
                                                    <p style={{ fontWeight: "bold" }}>
                                                        <h6>Compagnie</h6>
                                                    </p>
                                                    <p>{props.job.attributes.compagnie.data.attributes.nom}</p>
                                                </Col>
                                                <Col md={8}>
                                                    <p style={{ fontWeight: "bold" }}>
                                                        <h6>Expérience</h6>
                                                    </p>
                                                    <p>{props.job.attributes.experience_level.data.attributes.nom}</p>
                                                </Col>
                                                <Col md={8}>
                                                    <p style={{ fontWeight: "bold" }}>
                                                        <h6>Domaine</h6>
                                                    </p>
                                                    <p>{props.job.attributes.jobdomain.data.attributes.nom}</p>
                                                </Col>
                                            </Row>
                                        </p>
                                        <h4 className="h4">Comment postuler ?</h4>
                                        <div className="accordion-area accordion" id="faqAccordion">
                                            <div className="accordion-card active">
                                                <div className="accordion-header" id="collapse-item-1"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                                                    <span className="text-theme">
                                                        1.</span> Bénéficiez de notre assistance</button></div>
                                                <div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion">
                                                    <div className="accordion-body">
                                                        <p className="faq-text">Un CV professionnel bien conçu et bien structuré crée
                                                            une excellente première impression auprès des recruteurs et des employeurs
                                                            potentiels. Il reflète votre professionnalisme et votre engagement envers
                                                            votre carrière.</p><br />
                                                        <p>Alors, qu'attendez-vous ? Bénéficiez de notre service de conception de
                                                            CV professionnel dès maintenant pour faire la différence auprès des recruteurs.</p>
                                                        <div className="form-btn col-12">
                                                            <button className="as-btn">
                                                                Continuez vers la création du CV pro
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-card">
                                                <div className="accordion-header" id="collapse-item-2"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                                                    <span className="text-theme">
                                                        2.</span> Continuez sans notre assistance</button></div>
                                                <div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion">
                                                    <div className="accordion-body">
                                                        <p className="faq-text">Vous disposez déjà d'un CV professionnel bien conçu et bien structuré et
                                                        vous désirez postuler à cette offre avec ledit CV.</p><br />
                                                        <div className="form-btn col-12">
                                                            <button className="as-btn">
                                                                Postulez directement avec votre CV
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
