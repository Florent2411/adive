import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from '../redux/actions/blogsActions';
import Blog from '../components/Blog';
import Skelet from '../components/Skeleton';
import Breadcumb from '../components/Breadcumb';
const BlogPage = (props) => {
    const { loading, blogs, fetchBlogs } = props;

    useEffect(() => {
        fetchBlogs();
    }, [fetchBlogs]);


    const breadcumb = {
        text: "Toutes nos Actualités",
        mainLinkText: 'Accueil',
        mainLink: '/accueil',
        sublink: "Nos Actualités"
    }

    return (
        <>
            <div>
                <Breadcumb breadcumb={breadcumb} />
                <section className="space-top space-extra-bottom">
                    <div className="container">
                        <div className="row gy-4">
                            {!loading && blogs.map((blog) => (
                                <Blog
                                    title={blog.attributes.titre}
                                    publication={blog.attributes.publishedAt}
                                    contenu={blog.attributes.contenu}
                                    blog={blog}
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
        blogs: state.blogs.blogs,
        loading: state.blogs.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBlogs: () => dispatch(fetchBlogs())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);