import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTags } from '../redux/actions/tagsActions';

const Tags = (props) => {
    const { tags, fetchTags, titre } = props;
    useEffect(() => {
        fetchTags();
    }, [fetchTags]);
    return (
        <>
            <div className="widget widget_tag_cloud">
                <h3 className="widget_title">{titre}</h3>
                <div className="tagcloud tags_sidebar ">

                    {
                        tags.length > 1 && tags.map((tag, i) =>
                            <a key={i} href="#">{tag.attributes.nom}</a>

                        )
                    }
                </div>
            </div>
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        tags: state.tags.tags,
        loading: state.tags.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTags: () => dispatch(fetchTags())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tags);

