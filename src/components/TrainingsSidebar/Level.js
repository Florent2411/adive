import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../redux/actions/categoriesActions';

const Level = (props) => {

    const { categories, fetchCategories, titre } = props;

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);
    return (
        <>
            <div className="widget edu-course-widget widget-shortby mt--40">
                <div className="inner">
                    <h3 className="widget_title">{titre}</h3>
                    <div className="content">
                        <div className="edu-form-check">
                            <input type="checkbox" id="level-check1" />
                            <label htmlFor="level-check1">All Skill</label>
                        </div>
                        <div className="edu-form-check">
                            <input type="checkbox" id="level-check2" />
                            <label htmlFor="level-check2">Beginner</label>
                        </div>
                        <div className="edu-form-check">
                            <input type="checkbox" id="level-check3" />
                            <label htmlFor="level-check3">Intermediate</label>
                        </div>
                        <div className="edu-form-check">
                            <input type="checkbox" id="level-check4" />
                            <label htmlFor="level-check4">High</label>
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

export default connect(mapStateToProps, mapDispatchToProps)(Level);
