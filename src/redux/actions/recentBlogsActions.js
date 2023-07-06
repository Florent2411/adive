import axios from 'axios';
import config from '../../config';

export const fetchRecentBlogsSuccess = (recent_blogs) => {
  return {
    type: 'FETCH_RECENT_BLOGS_SUCCESS',
    payload: recent_blogs
  };
};

export const fetchRecentBlogs = () => {
  return (dispatch) => {
    axios.get(config.apiUrl + "/blogs?pagination[start]=0&pagination[limit]=3&populate=*")
      .then((response) => {
        //console.log('recent blogs fetched ' + ' are : ' + response.data.data)
        dispatch(fetchRecentBlogsSuccess(response.data.data));
      })
      .catch((error) => {
        // Gérer les erreurs ici
        console.error('Error in recent blogs fetching ' + error);
      });
  };
};