import React from "react";
import CountUp from 'react-countup';
import Breadcumb from '../components/Breadcumb';
import NeedHelp from '../components/NeedHelp';
import Faqs from '../components/Faqs';
export default function BiblioPage(props) {
    const breadcumb = {
        text: 'Foire Aux Questions',
        mainLinkText: 'Accueil',
        mainLink: '/accueil',
        sublink: 'FAQ'
    }
    return (
        <>
            <Breadcumb breadcumb={breadcumb} marginBottom='0' />
            <div className="col-lg-8  offset-sm-2">
                <div className="space">
                    <div className="container">
                        <div className="row">
                            <div className="mb-5 mb-xl-0">
                                <Faqs style="style2" firstItemOpened={true} />
                            </div>

                        </div>
                    </div>
                </div>
                <NeedHelp text="Besoin de notre Aide?"
                    titre="Nous sommes disponibles 24h/24 et 7j/7 pour répondre à vos questions."
                    textBoutton="Nous Contacter"
                    textLien="/contact" />
            </div>


        </>
    );
}
