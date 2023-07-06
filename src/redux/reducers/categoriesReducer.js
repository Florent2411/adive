const initialState = {
  categories: [],
  loading: true,
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CATEGORIES_SUCCESS':
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
