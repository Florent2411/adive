import React, { useState } from "react";
import { Row, Col, Modal } from 'antd';

export default function Blog(props) {
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
                    <div className="blog-img" style={{height: 150}}>
                        <img src={props.blog.attributes.image.data.attributes.url} alt="blog image" />
                        <a href="#" className="category">
                            <i className="fal fa-calendar-days" />
                            {props.publication.slice(0, 10)}

                        </a>
                    </div>
                    <div className="blog-content">
                        <div className="blog-meta">
                            <a href="#">
                                <i className="far fa-folder" />
                                {props.blog.attributes.category.data.attributes.nom}...
                            </a>
                        </div>
                        <h3 className="blog-title box-title">
                            <a href="#" onClick={() => openModal(props.blog)}>
                                {props.title.slice(0, 20)}...
                            </a>
                        </h3>
                        <p className="blog-text">
                            {props.contenu.slice(0, 70)}...
                        </p>
                        <a style={{ cursor: "pointer" }} className="line-btn" onClick={() => openModal(props.blog)}>
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
                                        <h2 className="h3 page-title">{props.title} </h2>
                                        <div className="page-img">
                                            <img src={props.blog.attributes.image.data.attributes.url} />
                                        </div>
                                        <p>{props.contenu}</p>
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
