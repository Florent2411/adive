import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from '../redux/actions/blogsActions';
import { useSelector } from 'react-redux';
import Skelet from '../components/Skeleton';
import Breadcumb from '../components/Breadcumb';
import { useParams } from 'react-router-dom';
import Share from '../components/ShareSocialMedia';
import MarkdownRenderer from '../components/MarkdownRenderer';
import Details from '../components/TrainingsSidebar/Details';
import TrainingTab from '../components/TrainingsSidebar/TrainingTab';

const TrainingDetailsPage = (props) => {
    const { slug } = useParams();
    //Fetch the job in redux.
    const savedTraigings = useSelector((state) => state.trainings.trainings);
    const training = savedTraigings.find((training) => training.id === 1);

    console.log({ training });
    console.log({ savedTraigings })
    let trainingTitle = training && training.attributes.Theme;
    const breadcumb = {
        text: trainingTitle,
        mainLinkText: 'Accueil',
        mainLink: '/accueil',
        sublink: "Formations"
    }
    return (
        <>
            <div>
                <Breadcumb breadcumb={breadcumb} />
                <div className="edu-course-details-area bg-color-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="main-image thumbnail">
                                    <img
                                        className="radius-big"
                                        src="https://static.vecteezy.com/system/resources/previews/002/294/829/original/programming-language-training-web-banner-free-vector.jpg"
                                        alt="Banner Images"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row g-5">
                            <div className="col-xl-8 col-lg-7">
                                <div className="course-details-content">
                                    <div className="content-top">
                                        <div className="author-meta">
                                            <div className="author-thumb">
                                                <a href="instructor-profile.html">
                                                    <img
                                                        src="https://eduvibe.html.devsvibe.com/assets/images/instructor/instructor-small/instructor-2.jpg"
                                                        alt="Author Images"
                                                    />
                                                    <span className="author-title">{training.attributes.formateur.data.attributes.Prenoms + ' ' + training.attributes.formateur.data.attributes.Nom}</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="edu-rating rating-default">

                                            <span className="eduvibe-status status-03 ">
                                                <i className="far fa-tag mx-2" />
                                                {training.attributes.typesformation.data.attributes.nom}
                                            </span>
                                        </div>
                                    </div>
                                    <h3 className="title">
                                        {training.attributes.Theme}
                                    </h3>
                                    <TrainingTab
                                        description={training.attributes.description}
                                        objectifs={training.attributes.objectifs}
                                        cible={training.attributes.cible}
                                        competences={training.attributes.Competences}
                                        avec_certificat={training.attributes.avec_certificat}
                                        avec_test={training.attributes.avec_test}
                                        formateur={training.attributes.formateur.data.attributes}
                                    />
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <Details training={training} />
                            </div>
                        </div>

                    </div>
                </div>

                <section className="as-blog-wrapper blog-details space-top space-extra-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-8 col-lg-7">


                            </div>
                            <div className="col-xxl-4 col-lg-5">
                                <aside className="sidebar-area">


                                </aside>
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
        blogs: state.blogs.blogs,
        loading: state.blogs.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBlogs: () => dispatch(fetchBlogs())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrainingDetailsPage);