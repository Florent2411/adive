import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../redux/actions/jobsActions';
import Services from "../components/Services";
import Job from '../components/Job';
import Skelet from '../components/Skeleton';
import Breadcumb from '../components/Breadcumb';


const AllJobsPage = (props) => {
    const { loading, jobs, fetchJobs } = props;

    useEffect(() => {
        fetchJobs();
    }, [fetchJobs]);


    const breadcumb = {
        text: "Toutes nos offres d'emplois",
        mainLinkText: 'Accueil',
        mainLink: '/accueil',
        sublink: "Nos offres d'emplois"
    }

    return (
        <>
            <div>
                <Breadcumb breadcumb={breadcumb} />
                <section className="space-extra-bottom">
                    <div className="container">
                        <div className="row gy-4">
                            {!loading && jobs.map((job) => (
                                <Job
                                    title={job.attributes.titre}
                                    expiration={job.attributes.date_expiration}
                                    publication={job.attributes.date_publication}
                                    description={job.attributes.description}
                                    colSize={4}
                                    //jobDomain={job.attributes.jobdomain.data.attributes.nom}
                                    job={job}
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
        jobs: state.jobs.jobs,
        loading: state.jobs.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchJobs: () => dispatch(fetchJobs())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllJobsPage);