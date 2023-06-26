import React from "react";

const SideMenu = ({ isOpen, onClose  }) => {

    return (
        <>
            <div className={`sidemenu-wrapper d-none d-lg-block ${isOpen ? 'show' : ''}`}>
                <div className="sidemenu-content bg-title"><button className="closeButton
              sideMenuCls" onClick={onClose}><i className="far fa-times" /></button>
                    <div className="widget footer-widget">
                        <div className="as-widget-about">
                            <div className="about-logo"><a href="/welcome"><img src="/assets/img/adiveLogo.png" width={100} alt="Adive" /></a></div>
                            <p className="about-text">Votre destination de choix pour tout ce qui concerne
                                le digital et la vente ! Chez nous, nous sommes une agence passionnée et créative, prête à vous accompagner dans votre
                                parcours numérique et à vous aider à développer votre entreprise en ligne.</p>
                            <div className="as-social"><a href="https://www.facebook.com/"><i className="fab
                              fa-facebook-f" /></a> <a href="https://www.twitter.com/"><i className="fab
                              fa-twitter" /></a> <a href="https://www.linkedin.com/"><i className="fab
                              fa-linkedin-in" /></a> <a href="https://www.whatsapp.com/"><i className="fab
                              fa-whatsapp" /></a></div>
                        </div>
                    </div>
                    <div className="widget newsletter-widget footer-widget">
                        <h3 className="widget_title">Newsletter</h3>
                        <p className="footer-text">Abonnez-vous à la newsletter pour ne rien manquer de notre actualité.</p>
                        <form className="newsletter-form"><input className="form-control" type="email" placeholder="Email" required />
                            <button type="submit" className="as-btn">S'abonner</button>
                        </form>
                        <div className="social-box mt-35">
                            <h6 className="social-title">Suivez-Nous:</h6>
                            <div className="icon-group"><a href="https://www.facebook.com/"><i className="fab
                              fa-facebook-f" /></a> <a href="https://www.twitter.com/"><i className="fab
                              fa-twitter" /></a> <a href="https://www.linkedin.com/"><i className="fab
                              fa-linkedin-in" /></a> <a href="https://www.pinterest.com/"><i className="fab
                              fa-pinterest-p" /></a> <a href="https://www.instagram.com/"><i className="fab
                              fa-instagram" /></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SideMenu;
