import axios from 'axios';
import config from '../../config';

export const fetchTagsSuccess = (tags) => {
  return {
    type: 'FETCH_TAGS_SUCCESS',
    payload: tags
  };
};

export const fetchTags = () => {
  return (dispatch) => {
    axios.get(config.apiUrl + "/tags?populate=*")
      .then((response) => {
        //console.log('categories fetched ' + ' are : ' + response.data.data)
        dispatch(fetchTagsSuccess(response.data.data));
      })
      .catch((error) => {
        // Gérer les erreurs ici
        console.error(error);
      });
  };
};