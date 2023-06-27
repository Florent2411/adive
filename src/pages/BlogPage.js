import React from "react";

export default function BlogPage(props) {

    return (
        <>
            <div>
                <div className="breadcumb-wrapper" style={{ marginTop: 160, backgroundImage: "url(/assets/img/hero/hero_bg_4_2.jpg)" }}>
                    <div className="container">
                        <div className="breadcumb-content">
                            <h1 className="breadcumb-title">Blog </h1>
                            <ul className="breadcumb-menu">
                                <li><a href="/welcome">Accueil</a></li>
                                <li>Blog</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="space-top space-extra-bottom">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-md-6 col-xl-4">
                                <div className="blog-card">
                                    <div className="blog-img"><img src="assets/img/blog/blog_1_1.jpg" alt="blog image" /> <a href="#" className="category"><i className="far fa-folder" />Marketing</a></div>
                                    <div className="blog-content">
                                        <div className="blog-meta"><a href="#"><i className="fal fa-calendar-days" />March 15,
                                            2022</a> <a href="#"><i className="fal fa-comment" />Comments (3)</a></div>
                                        <h3 className="blog-title box-title"><a href="blog-details.html">Delivering the best digital
                                            marketing in 2022</a></h3>
                                        <p className="blog-text">Phosfluorescently leverage existing future proof bandwidth rather</p><a href="blog-details.html" className="line-btn">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="blog-card">
                                    <div className="blog-img"><img src="assets/img/blog/blog_1_2.jpg" alt="blog image" /> <a href="#" className="category"><i className="far fa-folder" />UI/UX Design</a></div>
                                    <div className="blog-content">
                                        <div className="blog-meta"><a href="#"><i className="fal fa-calendar-days" />March 16,
                                            2022</a> <a href="#"><i className="fal fa-comment" />Comments (3)</a></div>
                                        <h3 className="blog-title box-title"><a href="blog-details.html">The best UX design blogs for
                                            industry project</a></h3>
                                        <p className="blog-text">Getting start wit leverage existing future proof bandwidth rather than
                                        </p><a href="blog-details.html" className="line-btn">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="blog-card">
                                    <div className="blog-img"><img src="assets/img/blog/blog_1_3.jpg" alt="blog image" /> <a href="#" className="category"><i className="far fa-folder" />Web Design</a></div>
                                    <div className="blog-content">
                                        <div className="blog-meta"><a href="#"><i className="fal fa-calendar-days" />March 17,
                                            2022</a> <a href="#"><i className="fal fa-comment" />Comments (3)</a></div>
                                        <h3 className="blog-title box-title"><a href="blog-details.html">Trusted by The world’s best
                                            organizations of</a></h3>
                                        <p className="blog-text">Modern House at leverage existing future proof rather than of-manusa.
                                        </p><a href="blog-details.html" className="line-btn">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="blog-card">
                                    <div className="blog-img"><img src="assets/img/blog/blog_1_4.jpg" alt="blog image" /> <a href="#" className="category"><i className="far fa-folder" />Researching</a></div>
                                    <div className="blog-content">
                                        <div className="blog-meta"><a href="#"><i className="fal fa-calendar-days" />March 18,
                                            2022</a> <a href="#"><i className="fal fa-comment" />Comments (3)</a></div>
                                        <h3 className="blog-title box-title"><a href="blog-details.html">Our best UX design blogs for
                                            industry tourist</a></h3>
                                        <p className="blog-text">Building Design a leverage existing future proof rather than of-morate.
                                        </p><a href="blog-details.html" className="line-btn">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="blog-card">
                                    <div className="blog-img"><img src="assets/img/blog/blog_1_5.jpg" alt="blog image" /> <a href="#" className="category"><i className="far fa-folder" />Web Design</a></div>
                                    <div className="blog-content">
                                        <div className="blog-meta"><a href="#"><i className="fal fa-calendar-days" />March 27,
                                            2022</a> <a href="#"><i className="fal fa-comment" />Comments (3)</a></div>
                                        <h3 className="blog-title box-title"><a href="blog-details.html">Build Seamless Spreadshet
                                            Import Experience</a></h3>
                                        <p className="blog-text">Modern House at leverage existing future proof rather than of-manusa.
                                        </p><a href="blog-details.html" className="line-btn">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="blog-card">
                                    <div className="blog-img"><img src="assets/img/blog/blog_1_6.jpg" alt="blog image" /> <a href="#" className="category"><i className="far fa-folder" />Researching</a></div>
                                    <div className="blog-content">
                                        <div className="blog-meta"><a href="#"><i className="fal fa-calendar-days" />March 30,
                                            2022</a> <a href="#"><i className="fal fa-comment" />Comments (3)</a></div>
                                        <h3 className="blog-title box-title"><a href="blog-details.html">Signs Website Feels More
                                            Haunted House</a></h3>
                                        <p className="blog-text">Building Design a leverage existing future proof rather than of-morate.
                                        </p><a href="blog-details.html" className="line-btn">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-5">
                            <div className="as-pagination">
                                <ul>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#"><i className="far fa-arrow-right" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
