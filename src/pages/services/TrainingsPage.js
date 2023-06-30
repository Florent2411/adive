import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTrainings } from '../../redux/actions/trainingsActions';
import Training from '../../components/Training';
import Skelet from '../../components/Skeleton';

const TrainingsPage = (props) => {
    const { loading, trainings, fetchTrainings } = props;

    useEffect(() => {
        fetchTrainings();
    }, [fetchTrainings]);

    console.log(loading)
    console.log(trainings)

    return (
        <>
            <div>
                <div className="breadcumb-wrapper" style={{ marginTop: 160, backgroundImage: "url(/assets/img/hero/hero_bg_4_2.jpg)" }}>
                    <div className="container">
                        <div className="breadcumb-content">
                            <h1 className="breadcumb-title">Formations Professionnelles </h1>
                            <ul className="breadcumb-menu">
                                <li><a href="/welcome">Accueil</a></li>
                                <li>Formations professionnelles</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="space-top space-extra-bottom">
                    <div className="container">
                        <div className="row gy-4">
                            {!loading && trainings.map((training) => (
                                <Training
                                    title={training.attributes.Theme}
                                    publication={training.attributes.publishedAt}
                                    description={training.attributes.description}
                                    training={training}
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