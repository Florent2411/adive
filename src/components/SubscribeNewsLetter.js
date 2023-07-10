import React, { useState } from "react";
import { Row, Col, Modal } from 'antd';


const SubscribeNewsLetter = (props) => {
    const { titre } = props;
    return (
        <>
            <div
                className="subscribe-sec background-image"
                style={{ backgroundImage: 'url("assets/img/bg/subscribe_bg_1.png")' }}
            >
                <div className="row align-items-center justify-content-between">
                    <div className="col-xl-7 col-lg mb-40 mb-lg-0">
                        <h4 className="text-white mb-2 mt-n2">
                            {titre}
                        </h4>
                    </div>
                    <div className="col-lg-auto">
                        <form className="newsletter-form style2">
                            <input
                                className="form-control"
                                type="email"
                                placeholder="Entrez votre e-mail"
                                required=""
                            />{" "}
                            <button type="submit" className="as-btn">
                                Souscrire
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}


export default SubscribeNewsLetter;
