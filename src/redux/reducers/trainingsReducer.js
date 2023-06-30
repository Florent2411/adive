const initialState = {
    trainings: [],
  };
  
  export const trainingsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TRAININGS_SUCCESS':
        return {
          ...state,
          trainings: action.payload
        };
      default:
        return state;
    }
  };