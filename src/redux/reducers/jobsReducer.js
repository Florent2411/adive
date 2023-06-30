const initialState = {
  jobs: [],
};

export const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_JOBS_SUCCESS':
      return {
        ...state,
        jobs: action.payload
      };
    default:
      return state;
  }
};