import React, { useState } from "react";
import { Row, Col, Modal } from 'antd';


const BiblioCard = (props) => {
    const [selectedBiblio, setSelectedBiblio] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (biblio) => {
        setSelectedBiblio(biblio);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedBiblio(null);
        setIsModalOpen(false);
    };

    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 8, 9];

    return (
        <>
            {data.map((item, index) => (
                <div
                    key={index}
                    className="col-lg-3 col-md-6 col-sm-6 col-12"
                    data-sal-delay={150}
                    data-sal="slide-up"
                    data-sal-duration={800}
                >
                    <div className="as-team team-grid  eduvibe-shop-single-product">
                        <div className="inner">
                            <div className="eduvibe-single-product-thumb-wrapper">
                                <a href="product-details.html">
                                    <img src="https://bookland.dexignzone.com/xhtml/images/books/book16.png" alt="Shop Images" />
                                </a>
                                <div className="product-hover-info">
                                    <ul>
                                        <li>
                                            <a style={{ cursor: "pointer" }} className="secondary-button" onClick={() => openModal(props)}>Voir Plus</a>
                                        </li>
                                        <li>
                                            <a style={{ cursor: "pointer" }} className="primary-button" href="#">Panier</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content">
                                <span className="product-author">By: Christina Henry</span>
                                <h6 className="title">
                                    <a style={{ cursor: "pointer" }} onClick={() => openModal(props)}>Champions of Dawning</a>
                                </h6>
                                <div className="price-list price-style-03">
                                    <div className="price current-price">5 800 CFA</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <Modal
                title=""
                centered
                open={isModalOpen}
                footer={null}
                onCancel={closeModal}
                width={800}
            ><section>
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-12 col-lg-12">
                                <div className="edu-modal-body">
                                    <div className="row g-5 row--15">
                                        <div className="col-lg-5">
                                            <div className="thumbnail">
                                                <img
                                                    src="https://bookland.dexignzone.com/xhtml/images/books/book16.png"
                                                    alt="Product Images"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="biblio-content">
                                                <span className="subtitle">By: Stieve Halen</span>
                                                <h4 className="title">Red White Royal Blue</h4>
                                                <div className="price-list price-style-03">
                                                    <div className="price current-price">58.00$</div>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                                    diam nonumy eirmod tempor invidunt. ut labore et dolore magna
                                                    aliquyam erat, sed diam voluptua. At vero eos et accusam. et
                                                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                                                    takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                                    dolor sit amet, consetetur sadipscing elitr.
                                                </p>
                                                <div className="product-action">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="edu-quontity-btn">
                                                                <div className="pro-qty">
                                                                    <input type="text" defaultValue={1} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="add-to-cart-btn">
                                                                <a className="edu-btn" href="cart.html">
                                                                    Acheter
                                                                </a>
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
                    </div>
                </section>

            </Modal>
        </>
    );
}


export default BiblioCard;
