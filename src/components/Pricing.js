import React, { useState } from "react";
import config from "../config";

const Pricing = ({ }) => {
    return (
        <>
            <section className="space" data-bg-src="assets/img/bg/price_bg_2.png">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="title-area text-center">
                                <span className="sub-title">Nos Plans tarifaire</span>
                                <h2 className="sec-title">Nos Tarifs</h2>
                                <p className="text-center">
                                    Chez nous, nous vous proposons une gamme complète de tarifs adaptés à vos besoins et à votre budget. Que vous soyez un particulier ou une entreprise, nous avons des options qui répondront à vos attentes. Voici un aperçu de nos tarifs :
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="filter-active-cat1">
                        <div className="filter-item w-100 cat1">
                            <div className="row gy-40 justify-content-center">
                                <div className="col-xl-4 col-md-6">
                                    <div className="price-card">
                                        <h3 className="price-card_title">
                                            Mensuel <span className="name-shape" />
                                        </h3>
                                        <h4 className="price-card_price">
                                            <span className="currency"></span> 26.00
                                        </h4>
                                        <div className="price-card_content">
                                            <div className="available-list">
                                                <ul>
                                                    <li>Support Your Business</li>
                                                    <li>Easy Website Builder</li>
                                                    <li>30 Days Trial Features</li>
                                                    <li className="unavailable">Social Media Marketing</li>
                                                    <li className="unavailable">One Way Link Building</li>
                                                    <li className="unavailable">12 Hours Of Support</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a href="pricing.html" className="as-btn">
                                            Choisissez ce plan
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="price-card active">
                                        <h3 className="price-card_title">
                                            Semestriel <span className="name-shape" />
                                        </h3>
                                        <h4 className="price-card_price">
                                            <span className="currency"></span> 56.00
                                        </h4>
                                        <div className="price-card_content">
                                            <div className="available-list">
                                                <ul>
                                                    <li>Support Your Business</li>
                                                    <li>Easy Website Builder</li>
                                                    <li>30 Days Trial Features</li>
                                                    <li>Social Media Marketing</li>
                                                    <li className="unavailable">One Way Link Building</li>
                                                    <li className="unavailable">12 Hours Of Support</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a href="pricing.html" className="as-btn">
                                            Choisissez ce plan
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6">
                                    <div className="price-card">
                                        <h3 className="price-card_title">
                                            Annuel <span className="name-shape" />
                                        </h3>
                                        <h4 className="price-card_price">
                                            <span className="currency"></span> 126.00
                                        </h4>
                                        <div className="price-card_content">
                                            <div className="available-list">
                                                <ul>
                                                    <li>Support Your Business</li>
                                                    <li>Easy Website Builder</li>
                                                    <li>30 Days Trial Features</li>
                                                    <li>Social Media Marketing</li>
                                                    <li>One Way Link Building</li>
                                                    <li>12 Hours Of Support</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a href="pricing.html" className="as-btn">
                                            Choisissez ce plan
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Pricing;
