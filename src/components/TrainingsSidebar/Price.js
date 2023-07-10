import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../redux/actions/categoriesActions';

const Price = (props) => {

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
                            <input
                                type="radio"
                                id="price-check1"
                                name="coursePriceSort"
                            />
                            <label htmlFor="price-check1">All Prices</label>
                        </div>
                        <div className="edu-form-check">
                            <input
                                type="radio"
                                id="price-check2"
                                name="coursePriceSort"
                            />
                            <label htmlFor="price-check2">Price: Low to High</label>
                        </div>
                        <div className="edu-form-check">
                            <input
                                type="radio"
                                id="price-check3"
                                name="coursePriceSort"
                            />
                            <label htmlFor="price-check3">Price: High to Low</label>
                        </div>
                        <div className="edu-form-check">
                            <input
                                type="radio"
                                id="price-check4"
                                name="coursePriceSort"
                            />
                            <label htmlFor="price-check4">Free Paid</label>
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

export default connect(mapStateToProps, mapDispatchToProps)(Price);
