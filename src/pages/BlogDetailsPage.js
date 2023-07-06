import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from '../redux/actions/blogsActions';
import { useSelector } from 'react-redux';
import Blog from '../components/Blog';
import Skelet from '../components/Skeleton';
import Breadcumb from '../components/Breadcumb';
import Tags from '../components/Tags';
import Categories from '../components/Categories';
import RecentBlogs from '../components/RecentBlogs';
import { useParams } from 'react-router-dom';
import Share from '../components/ShareSocialMedia'
import MarkdownRenderer from '../components/MarkdownRenderer';
import DisqusThread from '../components/DisqusThread';

const BlogDetailsPage = (props) => {
    const { slug } = useParams();
    //Fetch the job in redux.
    const savedBlogs = useSelector((state) => state.blogs.blogs);
    const blog = savedBlogs.find((blog) => blog.attributes.slug === slug);
    let blogTitle = blog && blog.attributes.titre;
    const breadcumb = {
        text: blogTitle,
        mainLinkText: 'Accueil',
        mainLink: '/accueil',
        sublink: "Actualité"
    }
    return (
        <>
            <div>
                <Breadcumb breadcumb={breadcumb} />
                <section className="as-blog-wrapper blog-details space-top space-extra-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-8 col-lg-7">
                                <div className="as-blog blog-single">
                                    <div className="blog-img">
                                        <img src={blog && blog.attributes.image.data.attributes.formats.medium.url} alt="Blog Image" />
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <a href="#">
                                                <i className="fa-regular fa-tag" />
                                                {blog && blog.attributes.category.data.attributes.nom}
                                            </a>
                                            <a href="#">
                                                <i className="fa-light fa-calendar-days" />
                                                {blog && blog.attributes.publishedAt}
                                            </a>
                                        </div>
                                        <h2 className="blog-title">
                                            {blog && blog.attributes.titre}
                                        </h2>
                                        <MarkdownRenderer markdownContent={blog.attributes.contenu} />
                                    </div>
                                    <div className="share-links clearfix">
                                        <div className="row justify-content-between">
                                            <div className="col-sm-auto">
                                                <span className="share-links-title">Tags:</span>
                                                <div className="tagcloud">

                                                    {
                                                        blog.attributes.tags.data.map((tag, i) =>
                                                            <a key={i} href="#">{tag.attributes.nom}</a>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                            <Share titre="Partager" />
                                            <DisqusThread
                                                shortname="adive-com"
                                                identifier={blog.attributes.slug.toString()}
                                                title={blog.title}
                                                url={`http://adive.com/actualites/${blog.attributes.slug}`}
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-xxl-4 col-lg-5">
                                <aside className="sidebar-area">
                                    {/* <div className="widget widget_search">
                                        <form className="search-form">
                                            <input type="text" placeholder="Search..." />
                                            <button type="submit">
                                                <i className="far fa-search" />
                                            </button>
                                        </form>
                                    </div> */}

                                    <Categories titre="Catégories" />
                                    <Tags titre="Tags" />
                                    <RecentBlogs titre="Récentes Actualités" />

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

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetailsPage);