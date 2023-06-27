import React from "react";

export default function ContactPage(props) {

    return (
        <>
            <div>
                <div className="breadcumb-wrapper" style={{ marginTop: 160, backgroundImage: "url(assets/img/hero/hero_bg_4_2.jpg)" }}>
                    <div className="container">
                        <div className="breadcumb-content">
                            <h1 className="breadcumb-title">Contact</h1>
                            <ul className="breadcumb-menu">
                                <li><a href="index.html">Accueil</a></li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="space">
                    <div className="container">
                        <div className="row gy-40">
                            <div className="col-xl-5">
                                <div className="contact-info-wrap">
                                    <h2 className="fs-40 border-title">Informations</h2>
                                    <div className="contact-info">
                                        <h4 className="contact-info_title">Téléphone :</h4>
                                        <div className="contact-info_icon"><i className="fal fa-phone" /></div>
                                        <div className="media-body"><span className="contact-info_text"><a href="tel:+22670966407">(+226) 70-96-64-07</a> <a href="tel:+65485965789">+65-48596-5789</a></span></div>
                                    </div>
                                    <div className="contact-info">
                                        <h4 className="contact-info_title">E-Mail :</h4>
                                        <div className="contact-info_icon"><i className="fal fa-envelope" /></div>
                                        <div className="media-body"><span className="contact-info_text"><a href="mailto:info@dalky.com">info@adive.com</a> <a href="mailto:info.example@gmail.com">info.example@gmail.com</a></span></div>
                                    </div>
                                    <div className="contact-info">
                                        <h4 className="contact-info_title">Localisation :</h4>
                                        <div className="contact-info_icon"><i className="fal fa-location-dot" /></div>
                                        <div className="media-body"><span className="contact-info_text">Ouagadougou,<br />Burkina Faso</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7">
                                <div className="contact-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sAngfuzsoft!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd" allowFullScreen loading="lazy" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="space-bottom overflow-hidden">
                    <div className="container">
                        <div className="row gy-40 align-items-end">
                            <div className="col-xl-8">
                                <h3 className="fs-40 mb-2 mt-n2">Laissez-nous un message</h3>
                                <p className="mb-4">N'hésitez pas à nous contacter pour discuter de vos projets et de vos besoins. Nous serions ravis de vous fournir des informations supplémentaires, de répondre à vos questions et de vous proposer des solutions adaptées à votre entreprise.</p>
                                <form action="#" className="quote-form ajax-contact">
                                    <div className="row">
                                        <div className="form-group col-md-6"><input type="text" required className="form-control" name="name" id="name" placeholder="Identité" /> <i className="fal fa-user" /></div>
                                        <div className="form-group col-md-6"><input type="email" required className="form-control" name="email" id="email" placeholder="Email" /> <i className="fal fa-envelope" /></div>
                                        <div className="form-group col-md-6"><input type="tel" required className="form-control" name="number" id="number" placeholder="Téléphone" /> <i className="fal fa-phone" /></div>
                                        <div className="form-group col-md-6"><select name="subject" required id="subject" className="form-select">
                                            <option value disabled="disabled" selected="selected" hidden>Selectionnez un service
                                            </option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="Brand Marketing">Brand Marketing</option>
                                            <option value="UI/UX Designing">UI/UX Designing</option>
                                            <option value="Digital Marketing">Digital Marketing</option>
                                        </select> <i className="fal fa-chevron-down" /></div>
                                        <div className="form-group col-12"><textarea name="message" id="message" required cols={30} rows={3} className="form-control" placeholder="Message" defaultValue={""} /> <i className="fal fa-comment" /></div>
                                        <div className="form-btn col-12"><button className="as-btn">Envoyer</button></div>
                                    </div>
                                    <p className="form-messages mb-0 mt-3" />
                                </form>
                            </div>
                            <div className="col-xl-4">
                                <div className="contact-img"><img src="assets/img/normal/contact_1.png" alt="vector" /></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}
