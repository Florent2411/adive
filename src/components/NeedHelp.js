import React from "react";


const NeedHelp = ({ text, titre, textBoutton, textLien }) => {
    return (
        <>
            {

                <section className="space-bottom">
                    <div className="container">
                        <div className="cta-wrap" data-bg-src="assets/img/bg/cta_bg_2.png">
                            <div className="row gx-0 align-items-center">
                                <div className="col-lg text-center text-lg-start">
                                    <p className="mb-10 mt-n2">
                                        {titre}
                                    </p>
                                    <h2 className="mb-n3">{text}</h2>
                                </div>
                                <div className="col-lg-auto mt-35 mt-lg-0">
                                    <div className="text-center">
                                        <a href={textLien} className="as-btn style3">
                                            {textBoutton}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }

        </>
    );
}

export default NeedHelp;
