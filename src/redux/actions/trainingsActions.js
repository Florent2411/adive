import axios from 'axios';
import config from '../../config';

export const fetchTrainingsSuccess = (jobs) => {
  return {
    type: 'FETCH_TRAININGS_SUCCESS',
    payload: jobs
  };
};

export const fetchTrainings = () => {
  return (dispatch) => {
    axios.get(config.apiUrl +"/formations?populate=*")
      .then((response) => {
        //console.log(response.data.data)
        dispatch(fetchTrainingsSuccess(response.data.data));
      })
      .catch((error) => {
        // Gérer les erreurs ici
        console.error(error);
      });
  };
};
