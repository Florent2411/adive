import React from "react";
import CountUp from 'react-countup';
import Breadcumb from '../components/Breadcumb';
import BiblioCard from '../components/BiblioCard';
import Skelet from '../components/Skeleton';

export default function BiblioPage(props) {

    const breadcumb = {
        text: 'Adive Biblio',
        mainLinkText: 'Accueil',
        mainLink: '/accueil',
        sublink: 'Biblio'
    }

    return (
        <>
            <div>
                <Breadcumb breadcumb={breadcumb} />
                <section className="space-top space-extra-bottom">
                    <div className="container">
                        <div className="row gy-4">
                            <BiblioCard />
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
