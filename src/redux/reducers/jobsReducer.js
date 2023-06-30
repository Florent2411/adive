const initialState = {
  jobs: [],
  loading: true,
};

export const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_JOBS_SUCCESS':
      return {
        ...state,
        jobs: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};