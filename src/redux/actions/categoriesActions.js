import axios from 'axios';
import config from '../../config';

export const fetchCategoriesSuccess = (categories) => {
  return {
    type: 'FETCH_CATEGORIES_SUCCESS',
    payload: categories
  };
};

export const fetchCategories = () => {
  return (dispatch) => {
    axios.get(config.apiUrl + "/categories?populate=*")
      .then((response) => {
        //console.log('categories fetched ' + ' are : ' + response.data.data)
        dispatch(fetchCategoriesSuccess(response.data.data));
      })
      .catch((error) => {
        // Gérer les erreurs ici
        console.error(error);
      });
  };
};