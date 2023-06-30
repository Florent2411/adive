import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from '../redux/actions/blogsActions';
import Blog from '../components/Blog';

const BlogPage = (props) => {
    const { blogs, fetchBlogs } = props;

    useEffect(() => {
        fetchBlogs();
    }, [fetchBlogs]);

    console.log(blogs)

    return (
        <>
            <div>
                <div className="breadcumb-wrapper" style={{ marginTop: 160, backgroundImage: "url(/assets/img/hero/hero_bg_4_2.jpg)" }}>
                    <div className="container">
                        <div className="breadcumb-content">
                            <h1 className="breadcumb-title">Blog </h1>
                            <ul className="breadcumb-menu">
                                <li><a href="/welcome">Accueil</a></li>
                                <li>Blog</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="space-top space-extra-bottom">
                    <div className="container">
                        <div className="row gy-4">
                            {blogs.map((blog) => (
                                <Blog
                                    title={blog.attributes.titre}
                                    publication={blog.attributes.publishedAt}
                                    contenu={blog.attributes.contenu}
                                    blog={blog}
                                />
                            ))}
                            {/*  */}

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
        blogs: state.blogs.blogs
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBlogs: () => dispatch(fetchBlogs())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);