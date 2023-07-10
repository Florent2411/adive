import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../redux/actions/categoriesActions';
import MarkdownRenderer from '../../components/MarkdownRenderer';

const TrainingTab = (props) => {

    const { description, objectifs, cible, competences, formateur, avec_certificat, avec_test } = props;

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);
    return (
        <>
            <ul className="edu-course-tab nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link active"
                        id="overview-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#overview"
                        type="button"
                        role="tab"
                        aria-controls="overview"
                        aria-selected="true"
                    >
                        Aperçu
                    </button>
                </li>

                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="instructor-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#instructor"
                        type="button"
                        role="tab"
                        aria-controls="instructor"
                        aria-selected="false"
                    >
                        Instructeur
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="curriculum-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#curriculum"
                        type="button"
                        role="tab"
                        aria-controls="curriculum"
                        aria-selected="false"
                    >
                        Paiements
                    </button>
                </li>

            </ul>
            <div className="tab-content" id="myTabContent">
                <div
                    className="tab-pane fade show active"
                    id="overview"
                    role="tabpanel"
                    aria-labelledby="overview-tab"
                >
                    <div className="course-tab-content">
                        <h5>Description de la Formation</h5>
                        <MarkdownRenderer markdownContent={description} />

                        <h5>Objectifs de la Formation </h5>
                        <MarkdownRenderer markdownContent={objectifs} />

                        <h5>Cible</h5>
                        <MarkdownRenderer markdownContent={cible} />

                        <h5>Compétences</h5>
                        <MarkdownRenderer markdownContent={competences} />
                        {/*                         
                        <h5>Certification</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                            maecenas accumsan lacus vel facilisis.
                        </p> */}
                    </div>
                </div>
                <div
                    className="tab-pane fade"
                    id="curriculum"
                    role="tabpanel"
                    aria-labelledby="curriculum-tab"
                >
                    <div className="course-tab-content">
                        <div className="edu-accordion-02" id="accordionExample1">
                            <div className="edu-accordion-item">
                                <div className="edu-accordion-header" id="headingOne">
                                    <button
                                        className="edu-accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        The First Steps
                                    </button>
                                </div>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample1"
                                >
                                    <div className="edu-accordion-body">
                                        <ul>
                                            <li>
                                                <div className="text">
                                                    <i className="icon-draft-line" /> Introduction
                                                </div>
                                                <div className="icon">
                                                    <i className="icon-lock-password-line" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="text">
                                                    <i className="icon-draft-line" /> Course Overview
                                                </div>
                                                <div className="icon">
                                                    <i className="icon-lock-password-line" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="text">
                                                    <i className="icon-draft-line" /> Local
                                                    Development Environment Tools
                                                </div>
                                                <div className="icon">
                                                    <i className="icon-lock-password-line" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="text">
                                                    <i className="icon-draft-line" /> Course Excercise
                                                </div>
                                                <div className="icon">
                                                    <i className="icon-lock-password-line" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="text">
                                                    <i className="icon-draft-line" /> Embedding PHP in
                                                    HTML
                                                </div>
                                                <div className="icon">
                                                    <i className="icon-lock-password-line" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="text">
                                                    <i className="icon-draft-line" /> Using Dynamic
                                                    Data
                                                </div>
                                                <div className="icon">
                                                    <i className="icon-lock-password-line" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="edu-accordion-item">
                                <div className="edu-accordion-header" id="headingTwo">
                                    <button
                                        className="edu-accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        Data Types and More
                                    </button>
                                </div>
                                <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample1"
                                >
                                    <div className="edu-accordion-body">
                                        <ul>
                                            <li>
                                                <div className="text">
                                                    <i className="icon-draft-line" /> Introduction
                                                </div>
                                                <div className="icon">
                                                    <i className="icon-lock-password-line" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="text">
                                                    <i className="icon-draft-line" /> Course Overview
                                                </div>
                                                <div className="icon">
                                                    <i className="icon-lock-password-line" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="text">
                                                    <i className="icon-draft-line" /> Local
                                                    Development Environment Tools
                                                </div>
                                                <div className="icon">
                                                    <i className="icon-lock-password-line" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="text">
                                                    <i className="icon-draft-line" /> Course Excercise
                                                </div>
                                                <div className="icon">
                                                    <i className="icon-lock-password-line" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="text">
                                                    <i className="icon-draft-line" /> Embedding PHP in
                                                    HTML
                                                </div>
                                                <div className="icon">
                                                    <i className="icon-lock-password-line" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="text">
                                                    <i className="icon-draft-line" /> Using Dynamic
                                                    Data
                                                </div>
                                                <div className="icon">
                                                    <i className="icon-lock-password-line" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="edu-accordion-item">
                                <div className="edu-accordion-header" id="headingThree">
                                    <button
                                        className="edu-accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        Control Structure
                                    </button>
                                </div>
                                <div
                                    id="collapseThree"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample1"
                                >
                                    <div className="edu-accordion-body">
                                        <ul>
                                            <li>
                                                <div className="text">
                                                    <i className="icon-draft-line" /> Introduction
                                                </div>
                                                <div className="icon">
                                                    <i className="icon-lock-password-line" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="text">
                                                    <i className="icon-draft-line" /> Course Overview
                                                </div>
                                                <div className="icon">
                                                    <i className="icon-lock-password-line" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="text">
                                                    <i className="icon-draft-line" /> Local
                                                    Development Environment Tools
                                                </div>
                                                <div className="icon">
                                                    <i className="icon-lock-password-line" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="text">
                                                    <i className="icon-draft-line" /> Course Excercise
                                                </div>
                                                <div className="icon">
                                                    <i className="icon-lock-password-line" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="text">
                                                    <i className="icon-draft-line" /> Embedding PHP in
                                                    HTML
                                                </div>
                                                <div className="icon">
                                                    <i className="icon-lock-password-line" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="text">
                                                    <i className="icon-draft-line" /> Using Dynamic
                                                    Data
                                                </div>
                                                <div className="icon">
                                                    <i className="icon-lock-password-line" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="tab-pane fade"
                    id="instructor"
                    role="tabpanel"
                    aria-labelledby="instructor-tab"
                >
                    <div className="course-tab-content">
                        <div className="course-author-wrapper">
                            <div className="thumbnail">
                                <img
                                    src="https://eduvibe.html.devsvibe.com/assets/images/instructor/course-details/instructor-2.jpg"
                                    alt="Author Images"
                                />
                            </div>
                            <div className="author-content">
                                <h6 className="title">
                                    <a href="instructor-profile.html">{formateur.Prenoms + ' ' + formateur.Nom}</a>
                                </h6>
                                <span className="subtitle">{formateur.Profession}</span>
                                <p>
                                    <MarkdownRenderer markdownContent={formateur.Description} />
                                </p>
                                <p>
                                    <MarkdownRenderer markdownContent={formateur.coordonnees} />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    console.log({ state })
    return {
        categories: state.categories.categories,
        loading: state.categories.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories: () => dispatch(fetchCategories())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrainingTab);
