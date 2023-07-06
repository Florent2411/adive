import axios from 'axios';
import config from '../../config';

export const fetchFaqsSuccess = (faqs) => {
  return {
    type: 'FETCH_FAQS_SUCCESS',
    payload: faqs
  };
};

export const fetchFaqs = () => {
  return (dispatch) => {
    axios.get(config.apiUrl + "/faqs")
      .then((response) => {
        //console.log('recent blogs fetched ' + ' are : ' + response.data.data)
        dispatch(fetchFaqsSuccess(response.data.data));
      })
      .catch((error) => {
        // Gérer les erreurs ici
        console.error('Error in recent faqs fetching ' + error);
      });
  };
};