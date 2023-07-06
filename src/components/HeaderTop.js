import React, { useState } from "react";
import config from "../config";

const HeaderTop = ({ text }) => {
    return (
        <>
            <div className="header-top">
                <div className="container">
                    <div className="row justify-content-center
                  justify-content-lg-between align-items-center">
                        <div className="col-auto d-none d-lg-block">
                            <p className="header-notice"> {text}</p>
                        </div>
                        <div className="col-auto">
                            <div className="header-social"><span className="social-title">Suivez-Nous : </span><a href="https://www.facebook.com/"><i className="fab fa-facebook-f" /></a> <a href="https://www.twitter.com/"><i className="fab fa-twitter" /></a> <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in" /></a> <a href="https://www.instagram.com/"><i className="fab fa-instagram" /></a> <a href="https://www.youtube.com/"><i className="fab fa-youtube" /></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderTop;
