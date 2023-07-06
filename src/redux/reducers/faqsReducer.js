const initialState = {
  faqs: [],
  loading: true,
};

export const faqsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_FAQS_SUCCESS':
      return {
        ...state,
        faqs: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
