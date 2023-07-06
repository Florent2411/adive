const initialState = {
  tags: [],
  loading: true,
};

export const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TAGS_SUCCESS':
      return {
        ...state,
        tags: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
