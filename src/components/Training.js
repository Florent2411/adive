import React, { useState } from "react";
import { Row, Col, Modal } from 'antd';
import { Link } from 'react-router-dom';
export default function Training(props) {
    const { prix_formation, lieu, nombre_heures, typesformation, title, formateur, langue } = props;
    console.log({ training: props.training })
    return (
        <>
            <div
                className="col-12 col-sm-12 col-xl-4 col-md-4"
                data-sal-delay={150}
                data-sal="slide-up"
                data-sal-duration={800}
            >
                <div className="edu-card card-type-1 radius-small">
                    <div className="inner">
                        <div className="thumbnail">
                            <a href="course-details.html">
                                <img
                                    className="w-100"
                                    src={props.training.attributes.image.data[0].attributes.formats.thumbnail.url}
                                    alt="Course Meta"
                                />
                            </a>
                            <div className="top-position status-group left-top">
                                <span className="eduvibe-status status-03">
                                    {typesformation}
                                </span>
                            </div>
                        </div>
                        <div className="content">
                            <ul className="edu-meta meta-03">
                                <li>
                                    <i className="fa fa-map-marker" />
                                    {lieu}
                                </li>
                                <li>
                                    <i className="fa fa-clock" />
                                    {nombre_heures} heures
                                </li>
                                <li>
                                    <i className="fa fa-language" />
                                    {langue}
                                </li>
                            </ul>
                            <h6 className="title">
                                <a href="course-details.html">
                                    {title}
                                </a>
                            </h6>
                            <div className="edu-rating rating-default">
                                {props.description.slice(0, 70)}...
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="author-meta">
                                        <div className="author-thumb">
                                            <a href="instructor-profile.html">
                                                <img
                                                    src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                                                    alt="Author Images"
                                                />
                                                <span className="author-title">  {formateur.Prenoms + ' ' + formateur.Nom}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-bottom">
                                <div className="price-list price-style-03">
                                    <div className="price current-price"> {prix_formation} CFA</div>
                                </div>
                                <ul className="edu-meta meta-01">
                                    <li>
                                        <Link style={{ cursor: "pointer" }} className="edu-btn btn-medium" to={`/formations/${props.training.attributes.slug}`}>  En Savoir Plus</Link>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
