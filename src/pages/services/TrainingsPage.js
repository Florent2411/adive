import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTrainings } from '../../redux/actions/trainingsActions';
import Training from '../../components/Training';
import Skelet from '../../components/Skeleton';
import Breadcumb from '../../components/Breadcumb';

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