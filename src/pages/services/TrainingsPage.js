import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTrainings } from '../../redux/actions/trainingsActions';
import Training from '../../components/Training';
import Skelet from '../../components/Skeleton';
import Breadcumb from '../../components/Breadcumb';
import SortBy from '../../components/TrainingsSidebar/SortBy';
import Categories from '../../components/TrainingsSidebar/Categories';
import Level from '../../components/TrainingsSidebar/Level';
import Price from '../../components/TrainingsSidebar/Price';

const TrainingsPage = (props) => {
    const { loading, trainings, fetchTrainings } = props;
    useEffect(() => {
        fetchTrainings();
    }, [fetchTrainings]);

    const breadcumb = {
        text: "Toutes nos Formations",
        mainLinkText: 'Accueil',
        mainLink: '/accueil',
        sublink: "Nos formations"
    }

    return (
        <>

            <div>
                <Breadcumb breadcumb={breadcumb} />
                <section className="as-blog-wrapper blog-details space-top space-extra-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-12 col-lg-12">
                                <div className="row gy-4">
                                    {!loading && trainings.map((training) => (
                                        <Training
                                            title={training.attributes.Theme}
                                            publication={training.attributes.publishedAt}
                                            description={training.attributes.description}
                                            nombre_heures={training.attributes.nombre_heures}
                                            lieu={training.attributes.lieu}
                                            langue={training.attributes.langue}
                                            prix_formation={training.attributes.prix_formation}
                                            typesformation={training.attributes.typesformation.data.attributes.nom}
                                            training={training}
                                            formateur={training.attributes.formateur.data.attributes}
                                            modesformation={training.attributes.modesformation}
                                            modespayment={training.attributes.modespayment}
                                        />
                                    ))}
                                    {loading && <Skelet />}
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
                            {/* <div className="col-xxl-4 col-lg-5">
                                <aside className="sidebar-area">

                                    <SortBy titre="Trier par" />
                                    <Categories titre="Catégories" />
                                    <Level titre="Niveau" />
                                    <Price titre="Prix" />

                                </aside>
                            </div> */}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        trainings: state.trainings.trainings,
        loading: state.trainings.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTrainings: () => dispatch(fetchTrainings())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrainingsPage);