import React from "react";
import Breadcumb from '../components/Breadcumb';
import Devis from '../components/Devis';

export default function DevisPage(props) {

    const breadcumb = {
        text: 'Demander Un Devis',
        mainLinkText: 'Accueil',
        mainLink: '/accueil',
        sublink: 'Devis'
    }

    return (
        <>
            <div>
                <Breadcumb breadcumb={breadcumb} />
                <section className="space-bottom overflow-hidden offset-sm-2">
                    <div className="container">
                        <div className="row gy-40 align-items-end">
                            <div className="col-xl-10">
                                <h3 className="fs-40 mb-2 mt-n2 mb-20">Demander un devis pour des Services personalisés</h3>
                                <Devis />
                            </div>

                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}
