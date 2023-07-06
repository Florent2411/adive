import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../redux/actions/categoriesActions';

const Categories = (props) => {

    const { categories, fetchCategories, titre } = props;

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);
    return (
        <>
            <div className="widget widget_categories">
                <h3 className="widget_title">{titre}</h3>
                <ul>
                    {
                        categories.length > 1 && categories.map((category, i) =>
                            <li key={i}>
                                <a href="blog.html">{category.attributes.nom}</a>
                                <span>{String(category.attributes.blogs.data.length).padStart(2, '0')}</span>
                            </li>
                        )
                    }
                </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
