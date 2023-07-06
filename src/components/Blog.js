import React, { useState } from "react";
import { Row, Col, Modal } from 'antd';
import { Link } from 'react-router-dom';

export default function Blog(props) {
    return (
        <>
            <div className="col-md-6 col-xl-4">
                <div className="blog-card">
                    <div className="blog-img" style={{ height: 150 }}>
                        <img src={props.blog.attributes.image.data.attributes.url} alt="blog image" />
                        <span className="category">
                            <i className="fal fa-calendar-days" />
                            {props.publication.slice(0, 10)}
                        </span>
                    </div>
                    <div className="blog-content">
                        <div className="blog-meta">
                            <span>
                                <i className="far fa-tag" />
                                {props.blog.attributes.category.data.attributes.nom}
                            </span>
                        </div>
                        <h3 className="blog-title box-title">
                            <Link to={`/actualite/${props.blog.attributes.slug}`}> {props.title.slice(0, 50)}...</Link>
                        </h3>
                        <p className="blog-text">
                            {props.contenu.slice(0, 100)}...
                        </p>

                        <Link style={{ cursor: "pointer" }} className="line-btn" to={`/actualite/${props.blog.attributes.slug}`}> Lire Plus</Link>

                    </div>
                </div>
            </div>

        </>
    );
};
