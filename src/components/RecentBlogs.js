import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRecentBlogs } from '../redux/actions/recentBlogsActions';
import { Link } from 'react-router-dom';


const RecentBlogs = (props) => {
    const { recent_blogs, fetchRecentBlogs, titre } = props;

    useEffect(() => {
        fetchRecentBlogs();
    }, [fetchRecentBlogs]);

    return (
        <>
            <div className="widget">
                <h3 className="widget_title">{titre}</h3>
                <div className="recent-post-wrap">
                    {
                        recent_blogs && recent_blogs.map((recent_blog, i) =>
                            <div className="recent-post" key={i}>
                                <div className="media-img">
                                    <Link to={`/actualites/${recent_blog.attributes.slug}`}>  <img
                                        src={recent_blog.attributes.image.data.attributes.url}
                                        alt="Blog Image"
                                    /></Link>


                                </div>
                                <div className="media-body">
                                    <h4 className="post-title">
                                        <Link className="text-inherit" to={`/actualites/${recent_blog.attributes.slug}`}> {recent_blog.attributes.titre}</Link>
                                    </h4>
                                    <div className="recent-post-meta">
                                        <Link to={`/actualites/${recent_blog.attributes.slug}`}>
                                            <i className="fas fa-calendar-days" />
                                            {recent_blog.attributes.publishedAt}
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        )
                    }

                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    console.log({ state })
    return {
        recent_blogs: state.recent_blogs.recent_blogs,
        loading: state.recent_blogs.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRecentBlogs: () => dispatch(fetchRecentBlogs())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecentBlogs);
