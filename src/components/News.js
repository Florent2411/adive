import React from "react";

export default function News(props) {

    return (
        <>
            {/* News Section Two */}
            <section className="news-section-two" style={{ backgroundImage: 'url(assets/images/background/pattern-17.png)' }}>
                <div className="auto-container">
                    {/* Sec Title / Centered */}
                    <div className="sec-title centered">
                        <div className="title">News &amp; Blogs</div>
                        <h2>News &amp; <span>Articles</span></h2>
                    </div>
                    <div className="row clearfix">
                        {/* News Block Two */}
                        <div className="news-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <a href="blog-detail.html"><img src="assets/images/resource/news-1.jpg" alt /></a>
                                    <div className="date">14 February</div>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-info">
                                        <li><span className="icon flaticon-user" /> Admin</li>
                                        <li><span className="icon flaticon-chat-bubbles-with-ellipsis" /> 03 Comments</li>
                                    </ul>
                                    <h3><a href="blog-detail.html">Facebook design is dedicated to what's new in design</a></h3>
                                    <a href="blog-detail.html" className="read-more">Read more</a>
                                </div>
                            </div>
                        </div>
                        {/* News Block Two */}
                        <div className="news-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInLeft" data-wow-delay="150ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <a href="blog-detail.html"><img src="assets/images/resource/news-1.jpg" alt /></a>
                                    <div className="date">14 February</div>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-info">
                                        <li><span className="icon flaticon-user" /> Admin</li>
                                        <li><span className="icon flaticon-chat-bubbles-with-ellipsis" /> 03 Comments</li>
                                    </ul>
                                    <h3><a href="blog-detail.html">Facebook design is dedicated to what's new in design</a></h3>
                                    <a href="blog-detail.html" className="read-more">Read more</a>
                                </div>
                            </div>
                        </div>
                        {/* News Block Two */}
                        <div className="news-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="image">
                                    <a href="blog-detail.html"><img src="assets/images/resource/news-1.jpg" alt /></a>
                                    <div className="date">14 February</div>
                                </div>
                                <div className="lower-content">
                                    <ul className="post-info">
                                        <li><span className="icon flaticon-user" /> Admin</li>
                                        <li><span className="icon flaticon-chat-bubbles-with-ellipsis" /> 03 Comments</li>
                                    </ul>
                                    <h3><a href="blog-detail.html">Facebook design is dedicated to what's new in design</a></h3>
                                    <a href="blog-detail.html" className="read-more">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End News Section Two */}
        </>
    );
}